// Este script exporta las infusiones de un archivo JSON a dos archivos de texto: uno con la lista completa y otro con los nombres unicos de las infusiones

const fs = require('fs');

const archivo = 'infusions.json';
const archivoSalidaInfus = 'infusions-list.txt';
const archivoSalidaInfusUnicas = 'infusions-names.txt';

// Leer archivo
const infusions = JSON.parse(
    fs.readFileSync(archivo, 'utf8')
);

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


// Crear archivo
fs.writeFileSync(archivoSalidaInfus, lines.join('\n'), 'utf8');

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

// Crear archivo de nombres
fs.writeFileSync(
    archivoSalidaInfusUnicas,
    uniqueNames
        .map(item => item.nombre)
        .join('\n'),
    'utf8'
);

// LOGS
console.log(`Archivo generado: infusions-list.txt (${lines.length} objetos)`);
console.log(`Archivo generado: infusions-names.txt (${uniqueNames.length} nombres unicos)`);