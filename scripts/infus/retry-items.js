// Este script intenta recuperar los items que no se pudieron obtener en la primera ejecucion de get-items.js

const fs = require('fs');
const https = require('https');

const idioma = '?lang=es'
const API_URL = `https://api.guildwars2.com/v2/items${idioma}`;

const BATCH_SIZE = 200;
const DELAY_MS = 500;
const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 5000;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function getItems(ids) {

    return new Promise((resolve, reject) => {

        const url = `${API_URL}&ids=${ids.join(',')}`;

        https.get(url, response => {

            let data = '';

            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {

                if (
                    response.statusCode !== 200 &&
                    response.statusCode !== 206
                ) {
                    reject(
                        new Error(
                            `HTTP ${response.statusCode}: ${data}`
                        )
                    );
                    return;
                }

                try {

                    resolve({
                        statusCode: response.statusCode,
                        items: JSON.parse(data)
                    });

                } catch (error) {
                    reject(error);
                }

            });

        }).on('error', reject);

    });
}


async function main() {

    // Leer missing-ids.json
    const missingIds = JSON.parse(
        fs.readFileSync('missing-ids.json', 'utf8')
    );

    console.log(`IDs para volver a comprobar: ${missingIds.length}`);

    const foundItems = [];
    const stillMissing = [];

    // Dividir en tandas
    for (let i = 0; i < missingIds.length; i += BATCH_SIZE) {

        const batch = missingIds.slice(
            i,
            i + BATCH_SIZE
        );

        const batchNumber = Math.floor(i / BATCH_SIZE) + 1;

        const totalBatches = Math.ceil(missingIds.length / BATCH_SIZE);

        console.log(`Procesando tanda ${batchNumber}/${totalBatches}...`);

        let retries = 0;
        let success = false;

        while (!success && retries < MAX_RETRIES) {

            try {

                const response = await getItems(batch);

                const items = response.items;

                const returnedIds = new Set(
                    items.map(item => item.id)
                );

                // Guardar los que sí han aparecido
                foundItems.push(...items);

                // Y los que siguen sin aparecer
                const missing = batch.filter(
                    id => !returnedIds.has(id)
                );

                if (missing.length > 0) {
                    console.log(`Siguen sin aparecer ${missing.length} IDs:`, missing);
                    stillMissing.push(...missing);

                } else {
                    console.log('Todos los IDs encontrados.');
                }

                success = true;

            } catch (error) {

                retries++;

                console.error(`Error (intento ${retries}/${MAX_RETRIES}):`, error.message);

                if (retries < MAX_RETRIES) {
                    await sleep(RETRY_DELAY_MS);
                } else {
                    console.error('La tanda ha fallado definitivamente.');
                    // Si falla la peticion completa, conservar todos los IDs
                    stillMissing.push(...batch);
                }

            }

        }

        if (i + BATCH_SIZE < missingIds.length) {
            await sleep(DELAY_MS);
        }

    }


    // Guardar resultados
    if (foundItems.length > 0) {
        fs.writeFileSync(
            'retry-items.json',
            JSON.stringify(foundItems, null, 4),
            'utf8'
        );
    }
    if (stillMissing.length > 0) {
        fs.writeFileSync(
            'missing-ids-retry.json',
            JSON.stringify(
                [...new Set(stillMissing)],
                null,
                4
            ),
            'utf8'
        );
    }

    // LOGS
    console.log('');
    console.log('==============================');
    console.log('Reintento terminado');
    console.log('==============================');
    console.log(`Items encontrados: ${foundItems.length}`);
    console.log(`IDs que siguen sin aparecer: ` + `${new Set(stillMissing).size}`);
}


main().catch(error => {
    console.error('Error fatal:', error);
});