// Extraer los POIs del nuevo mapa beta de WvW y guardarlos en archivos separados para cada idioma en assets/poi

const fs = require('fs');
const path = require('path');

// CONFIG
const destination = path.resolve(
    __dirname,
    '../../src/assets/poi'
);

const config = [
    {
        language: 'ES',
        input: 'full_poi_Tyria_Mists_es_grouped.json',
        output: 'seared_borderlands_es.json',
        map: ' - Tierras Fronterizas calcinadas'
    },
    {
        language: 'EN',
        input: 'full_poi_Tyria_Mists_en_grouped.json',
        output: 'seared_borderlands_en.json',
        map: ' Seared Borderlands'
    }
];

// COMPROBACIONES INICIALES
if (!fs.existsSync(destination)) {
    console.error(`ERROR: No existe la carpeta: ${destination}`);
    process.exit(1);
}

// PROCESAMIENTO
let errores = 0;

for (const item of config) {

    console.log(`\nProcesando idioma: ${item.language}`);

    const inputPath = path.join(destination, item.input);
    const outputPath = path.join(destination, item.output);

    try {

        // Comprobar que existe el archivo original
        if (!fs.existsSync(inputPath)) {
            throw new Error(`No existe el archivo: ${inputPath}`);
        }

        // Leer archivo
        const fileContent = fs.readFileSync(inputPath, 'utf8');

        // Parsear JSON
        let data;

        try {
            data = JSON.parse(fileContent);
        } catch (error) {
            throw new Error(`JSON inválido: ${error.message}`);
        }

        // Comprobar estructura
        if (!Array.isArray(data)) {
            throw new Error('El contenido del JSON no es un array.');
        }

        // Filtrar POIs del mapa
        const filtered = data.filter(obj =>
            obj && obj.map === item.map
        );

        // Comprobar resultados
        if (filtered.length === 0) {
            throw new Error(
                `No se encontraron POIs para el mapa "${item.map}".`
            );
        }

        // Guardar archivo
        fs.writeFileSync(
            outputPath,
            JSON.stringify(filtered, null, 2),
            'utf8'
        );

        console.log(`OK: ${filtered.length} POIs encontrados.`);
        console.log(`Archivo generado: ${outputPath}`);

    } catch (error) {
        errores++;
        console.error(`ERROR [${item.language}]: ${error.message}`);
    }
}

// LOG
console.log('\n====================================');
console.log('RESUMEN DEL PROCESAMIENTO');
console.log('====================================');

if (errores === 0) {
    console.log('Todos los archivos se han generado correctamente.');
} else {
    console.error(`${errores} archivo(s) no se han podido procesar.`);
    process.exit(1);
}