// Script para obtener todas las infusiones y enrichments de la API de Guild Wars 2

const fs = require('fs');
const https = require('https');
const path = require('path');

const idioma = '?lang=es'
const API_URL = `https://api.guildwars2.com/v2/items${idioma}`;

// Cantidad de ids maximos por peticion
const BATCH_SIZE = 200;

// Espera entre peticiones
// 500 ms = maximo unas 120 peticiones/minuto,
// bastante por debajo del limite conocido de la API
const DELAY_MS = 500;

// Para reintentos cuando haya error
const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 5000;
const failedBatches = []; // ids que han fallado
const missingIds = []; // ids que dan 206 y no han dado resultado
const bothTypes = []; // ids que son a la vez infusion y enrichment

// Carpeta donde se guardaran los archivos generados
const outputDir = path.join(__dirname, 'files_to_work');

const destination = path.resolve(
    __dirname,
    "../../src/assets/infus"
);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function backupInfusions() {

    const source = path.join(destination, 'infusions.json');
    const backup = path.join(outputDir, 'infusions-old.json');

    // Comprobar si existe el archivo original
    if (!fs.existsSync(source)) {
        console.log(`No existe infusions.json en ${destination}. Se omite la copia.`);
        return;
    }

    // Crear outputDir si todavía no existe
    fs.mkdirSync(outputDir, { recursive: true });

    // Copiar y sobrescribir el backup si ya existe
    fs.copyFileSync(source, backup);

    console.log(`Archivo infusions-old.json creado: ${backup}`);
}

// Peticion HTTP
function getItems(ids) {

    return new Promise((resolve, reject) => {

        const url = `${API_URL}&ids=${ids.join(',')}`;

        https.get(url, response => {

            let data = '';

            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {
                // 200 = respuesta completa
                // 206 = respuesta parcial pero valida
                if (response.statusCode !== 200 && response.statusCode !== 206) {
                    reject(
                        new Error(
                            `HTTP ${response.statusCode}: ${data}`
                        )
                    );
                    return;
                }

                try {
                    const json = JSON.parse(data);
                    resolve({
                        statusCode: response.statusCode,
                        items: json
                    });
                } catch (error) {
                    reject(error);
                }
            });

        }).on('error', reject);

    });
}

// Obtener todos los IDs de items
async function getAllItemIds() {

    return new Promise((resolve, reject) => {

        https.get(API_URL, response => {

            let data = '';

            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {

                if (response.statusCode !== 200) {
                    reject(
                        new Error(
                            `HTTP ${response.statusCode}: ${data}`
                        )
                    );
                    return;
                }
                try {
                    const ids = JSON.parse(data);
                    resolve(ids);
                } catch (error) {
                    reject(error);
                }

            });
        }).on('error', reject);

    });

}

// Main
async function main() {

    // Copiar infusions.json anterior, antes de iniciar el proceso, y guardarlo en files_to_work/infusions-old.json
    backupInfusions();

    console.log('Obteniendo lista de IDs...');

    const allIds = await getAllItemIds();

    console.log(`Items encontrados: ${allIds.length}`);

    const infusions = [];

    const totalBatches = Math.ceil(allIds.length / BATCH_SIZE);

    console.log(`Tandas necesarias: ${totalBatches}`);

    for (let i = 0; i < allIds.length; i += BATCH_SIZE) {

        const batch = allIds.slice(i, i + BATCH_SIZE);

        const batchNumber = Math.floor(i / BATCH_SIZE) + 1;

        console.log(
            `[${new Date().toLocaleTimeString()}] ` +
            `Procesando tanda ${batchNumber}/${totalBatches} ` +
            `(${batch.length} IDs)...`
        );

        let retries = 0;
        let success = false;
        while (!success && retries < MAX_RETRIES) {
            try {

                const response = await getItems(batch);
                const items = response.items;

                if (!Array.isArray(items)) {
                    throw new Error('La API no devolvió un array de items.');
                }

                // Para cuando hay un 206 saber los ids que han fallado
                if (response.statusCode === 206) {
                    const returnedIds = new Set(
                        items.map(item => item.id)
                    );
                    const missing = batch.filter(
                        id => !returnedIds.has(id)
                    );
                    console.log(
                        `⚠️ Tanda ${batchNumber}/${totalBatches}: ` +
                        `HTTP 206 — ` +
                        `${items.length}/${batch.length} IDs devueltos. ` +
                        `${missing.length} faltantes:`,
                        missing
                    );
                    missingIds.push(...missing);
                }

                for (const item of items) {

                    if (!item || !item.details) {
                        continue;
                    }

                    const flags = item.details.infusion_upgrade_flags;

                    if (!Array.isArray(flags)) {
                        continue;
                    }

                    // Interesan tanto Infusion como Enrichment
                    const esInfusion = flags.includes('Infusion') || flags.includes('Enrichment');

                    if (!esInfusion) {
                        continue;
                    }

                    let tipo;
                    if (flags.includes('Infusion') && flags.includes('Enrichment')) {
                        bothTypes.push({
                            id: item.id,
                            nombre: item.name,
                            flags: flags
                        });
                        tipo = 'Ambos';
                    } else if (flags.includes('Enrichment')) {
                        tipo = 'Enrichment';
                    } else {
                        tipo = 'Infusion';
                    }

                    const description = item.details &&
                        item.details.infix_upgrade &&
                        item.details.infix_upgrade.buff &&
                        item.details.infix_upgrade.buff.description
                        ? item.details.infix_upgrade.buff.description
                        : '';

                    const stat = item.details &&
                        item.details.infix_upgrade &&
                        Array.isArray(item.details.infix_upgrade.attributes)
                        ? item.details.infix_upgrade.attributes.map(attribute => ({
                            attribute: attribute.attribute,
                            modifier: attribute.modifier
                        }))
                        : [];

                    // Guardar info
                    infusions.push({
                        id: item.id,
                        nombre: item.name,
                        icon: item.icon,
                        tipo: tipo,
                        stat: stat,
                        description: description
                    });

                }

                success = true;

                console.log(
                    `Tanda ${batchNumber}/${totalBatches} terminada | ` +
                    `Infusiones/enrichments encontrados: ${infusions.length}`
                );

            } catch (error) {

                retries++;

                console.error(
                    `Error en la tanda ${batchNumber} ` +
                    `(intento ${retries}/${MAX_RETRIES}):`,
                    error.message
                );

                if (retries < MAX_RETRIES) {
                    console.log('Esperando 5 segundos antes de reintentar...');
                    await sleep(RETRY_DELAY_MS);
                } else {
                    console.error(
                        `La tanda ${batchNumber} ha fallado después de ` +
                        `${MAX_RETRIES} intentos.`
                    );

                    // Guardar los IDs que han fallado
                    failedBatches.push({
                        tanda: batchNumber,
                        ids: batch
                    });

                    console.log(`${batch.length} IDs guardados como fallidos.`);
                }
            }
        }

        // No esperar despues de la ultima
        if (i + BATCH_SIZE < allIds.length) {

            console.log(`Esperando ${DELAY_MS} ms...`);

            await sleep(DELAY_MS);
        }
    }

    // Eliminar posibles duplicados
    const uniqueInfusions = Array.from(
        new Map(infusions.map(item => [item.id, item])).values()
    );

    // Ordenar por ID
    uniqueInfusions.sort((a, b) => a.id - b.id);

    // Crear la carpeta si no existe
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Guardar JSON
    fs.writeFileSync(
        path.join(outputDir, 'infusions.json'),
        JSON.stringify(uniqueInfusions, null, 4),
        'utf8'
    );

    if (failedBatches.length > 0) {
        fs.writeFileSync(
            path.join(outputDir, 'failed-batches.json'),
            JSON.stringify(failedBatches, null, 4),
            'utf8'
        );
    }

    if (missingIds.length > 0) {
        fs.writeFileSync(
            path.join(outputDir, 'missing-ids.json'),
            JSON.stringify([...new Set(missingIds)], null, 4),
            'utf8'
        );
    }

    if (bothTypes.length > 0) {
        fs.writeFileSync(
            path.join(outputDir, 'both-types.json'),
            JSON.stringify(bothTypes, null, 4),
            'utf8'
        );
    }

    // Logs
    console.log('');
    console.log('=================================');
    console.log('Proceso terminado');
    console.log('=================================');
    console.log(`Infusiones/enrichments: ${uniqueInfusions.length}`);
    console.log('Archivo generado: infusions.json');
    if (failedBatches.length > 0 || missingIds.length > 0 || bothTypes.length > 0) {
        console.log('Se han generado archivos adicionales:');
    }
    if (failedBatches.length > 0) {
        console.log(`Batches fallidos: ${failedBatches.length}. Archivo: failed-batches.json`);
    }
    if (missingIds.length > 0) {
        console.log(`IDs que siguen sin aparecer: ${new Set(missingIds).size}. Archivo: missing-ids.json`);
    }
    if (bothTypes.length > 0) {
        console.log(`Items con ambos tipos: ${bothTypes.length}. Archivo: both-types.json`);
    }
}

// EJECUCION
main().catch(error => {
    console.error('Error fatal:', error);
});