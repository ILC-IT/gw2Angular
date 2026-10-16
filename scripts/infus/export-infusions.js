// Este script exporta las infusiones de un archivo JSON a dos archivos de texto:
// uno con la lista completa y otro con los nombres unicos de las infusiones

const fs = require('fs');
const path = require('path');

// Carpeta de trabajo
const workDir = path.join(__dirname, 'files_to_work');

// Archivo de entrada
const archivo = path.join(workDir, 'infusions.json');

// Archivos de salida
const archivoSalidaInfus = path.join(workDir, 'infusions-list.txt');
const archivoSalidaInfusUnicas = path.join(workDir, 'infusions-names.txt');

function main() {
    // Comprobar que existe el archivo de entrada
    if (!fs.existsSync(archivo)) {
        throw new Error(`No existe el archivo de entrada: ${archivo}`);
    }

    // Leer archivo
    const infusions = JSON.parse(
        fs.readFileSync(archivo, 'utf8')
    );

    if (!Array.isArray(infusions)) {
        throw new Error('infusions.json debe contener un array JSON.');
    }

    // Ordenar
    infusions.sort((a, b) => {

        // Primero Infusion, despues Enrichment
        if (a.tipo !== b.tipo) {

            if (a.tipo === 'Infusion') {
                return -1;
            }

            if (b.tipo === 'Infusion') {
                return 1;
            }
        }

        // Dentro del mismo tipo, ordenar por nombre
        return (a.nombre || '').localeCompare(
            b.nombre || '',
            'es',
            {
                sensitivity: 'base',
                numeric: true
            }
        );
    });

    // Crear una linea por objeto
    const lines = infusions.map(infusion => {

        const nombre = infusion.nombre || '';

        // Evitar que la descripcion ocupe varias filas
        const description = (infusion.description || '')
            .replace(/\r?\n/g, ' | ');

        return `${nombre}, ${description}`;
    });

    // Sacar nombres unicos
    const uniqueNames = [];
    const namesSet = new Set();

    for (const infusion of infusions) {

        const nombre = infusion.nombre || '';

        if (!nombre) {
            continue;
        }

        const key = `${infusion.tipo}|${nombre}`;

        if (!namesSet.has(key)) {

            namesSet.add(key);

            uniqueNames.push({
                nombre: nombre,
                tipo: infusion.tipo
            });
        }
    }

    // Ordenar nombres unicos
    uniqueNames.sort((a, b) => {

        // Infusion primero
        if (a.tipo !== b.tipo) {

            if (a.tipo === 'Infusion') {
                return -1;
            }

            if (b.tipo === 'Infusion') {
                return 1;
            }
        }

        // Despues por nombre
        return a.nombre.localeCompare(
            b.nombre,
            'es',
            {
                sensitivity: 'base',
                numeric: true
            }
        );
    });

    // Crear archivo de salida
    fs.writeFileSync(
        archivoSalidaInfus,
        lines.join('\n'),
        'utf8'
    );

    // Crear archivo de nombres
    fs.writeFileSync(
        archivoSalidaInfusUnicas,
        uniqueNames
            .map(item => item.nombre)
            .join('\n'),
        'utf8'
    );

    // LOGS
    console.log(`Archivo generado: ${path.basename(archivoSalidaInfus)} ` + `(${lines.length} objetos)`);
    console.log(`Archivo generado: ${path.basename(archivoSalidaInfusUnicas)} ` + `(${uniqueNames.length} nombres unicos)`);
}

try {
    main();
} catch (err) {
    console.error('\nERROR: No se pudieron generar los archivos de infusiones.');
    console.error(err.message);
    process.exit(1);
}