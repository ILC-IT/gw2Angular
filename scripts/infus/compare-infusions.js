// Este script compara dos archivos JSON de infusiones y genera tres archivos de salida: uno para las infusiones añadidas, otro para las eliminadas y otro para las modificadas

const fs = require('fs');

// Archivos a comparar
const OLD_FILE = 'infusions-old.json';
const NEW_FILE = 'infusions.json';

// Leer archivos
const oldData = JSON.parse(
    fs.readFileSync(OLD_FILE, 'utf8')
);

const newData = JSON.parse(
    fs.readFileSync(NEW_FILE, 'utf8')
);


// Crear Maps por ID
const oldMap = new Map(
    oldData.map(item => [item.id, item])
);

const newMap = new Map(
    newData.map(item => [item.id, item])
);

const added = [];
const removed = [];
const changed = [];

// Comparar un campo
function compareField(changes, field, oldValue, newValue) {

    if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {

        changes.push({
            campo: field,
            antes: oldValue,
            ahora: newValue
        });

    }

}

// Comparar STAT
function compareStats(oldStat, newStat) {

    const changes = [];

    oldStat = Array.isArray(oldStat)
        ? oldStat
        : [];

    newStat = Array.isArray(newStat)
        ? newStat
        : [];


    // Convertir los atributos en Maps usando "attribute" como identificador
    const oldStats = new Map(
        oldStat.map(stat => [
            stat.attribute,
            stat
        ])
    );

    const newStats = new Map(
        newStat.map(stat => [
            stat.attribute,
            stat
        ])
    );


    // Atributos nuevos o modificados

    for (const [attribute, newValue] of newStats) {

        const oldValue = oldStats.get(attribute);

        // Atributo nuevo
        if (!oldValue) {

            changes.push({
                tipo: 'añadido',
                attribute: attribute,
                antes: null,
                ahora: newValue
            });

            continue;
        }

        // Modifier cambiado
        if (oldValue.modifier !== newValue.modifier) {

            changes.push({
                tipo: 'modificado',
                attribute: attribute,
                antes: oldValue.modifier,
                ahora: newValue.modifier
            });

        }

    }

    // Atributos eliminados
    for (const [attribute, oldValue] of oldStats) {

        if (!newStats.has(attribute)) {

            changes.push({
                tipo: 'eliminado',
                attribute: attribute,
                antes: oldValue,
                ahora: null
            });

        }

    }

    return changes;
}

// Comparar cada infusion
for (const [id, newItem] of newMap) {

    const oldItem = oldMap.get(id);

    // Infusion nueva
    if (!oldItem) {
        added.push(newItem);
        continue;
    }

    const changes = [];

    // Campos simples
    compareField(
        changes,
        'nombre',
        oldItem.nombre,
        newItem.nombre
    );

    compareField(
        changes,
        'icon',
        oldItem.icon,
        newItem.icon
    );

    compareField(
        changes,
        'tipo',
        oldItem.tipo,
        newItem.tipo
    );

    compareField(
        changes,
        'description',
        oldItem.description,
        newItem.description
    );

    // STAT
    const statChanges = compareStats(
        oldItem.stat,
        newItem.stat
    );


    if (statChanges.length > 0) {

        changes.push({
            campo: 'stat',
            cambios: statChanges
        });

    }

    // Si ha habido cambios
    if (changes.length > 0) {

        changed.push({
            id: id,
            nombre: newItem.nombre,
            cambios: changes
        });

    }

}

// Infusiones eliminadas
for (const [id, oldItem] of oldMap) {

    if (!newMap.has(id)) {
        removed.push(oldItem);
    }

}

// Ordenar resultados
added.sort((a, b) => a.id - b.id);
removed.sort((a, b) => a.id - b.id);
changed.sort((a, b) => a.id - b.id);

// Guardar resultados
if (added.length > 0) {
    fs.writeFileSync('infusions-added.json', JSON.stringify(added, null, 4), 'utf8');
}

if (removed.length > 0) {
    fs.writeFileSync('infusions-removed.json', JSON.stringify(removed, null, 4), 'utf8');
}

if (changed.length > 0) {
    fs.writeFileSync('infusions-changed.json', JSON.stringify(changed, null, 4), 'utf8');
}

// Resumen
console.log('');
console.log('=================================');
console.log('Comparacion terminada');
console.log('=================================');

console.log(`Infusiones anteriores: ${oldData.length}`);

console.log(`Infusiones actuales:   ${newData.length}`);

console.log(`Nuevas:                ${added.length}`);

console.log(`Eliminadas:             ${removed.length}`);

console.log(`Modificadas:            ${changed.length}`);

console.log('');

console.log('Archivos generados:');

console.log('  infusions-added.json');

console.log('  infusions-removed.json');

console.log('  infusions-changed.json');