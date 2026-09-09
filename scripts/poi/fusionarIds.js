const fs = require("fs");
const path = require("path");

// Junta la propiedad "map" de los ids repetidos y crea un array con los posibles map de un mismo id

function fusionar(fileName) {

  const waypoints = require(`./${fileName}`);

  // Agrupar por id
  const grouped = new Map();

  // Info detallada de duplicados
  const duplicatesInfo = {};

  // Procesar cada waypoint
  for (const wp of waypoints) {
    const id = wp.id;

    // Primera vez que se encuentra este id
    if (!grouped.has(id)) {
      grouped.set(id, {
        ...wp,
        maps: [wp.map]
      });

      duplicatesInfo[id] = {
        count: 1,
        maps: [wp.map],
        objects: [wp]
      };

      continue;
    }

    // Duplicado encontrado
    const existing = grouped.get(id);

    // Añadir map si no existe
    if (!existing.maps.includes(wp.map)) {
      existing.maps.push(wp.map);
    }

    // Actualizar info duplicados
    duplicatesInfo[id].count++;

    if (!duplicatesInfo[id].maps.includes(wp.map)) {
      duplicatesInfo[id].maps.push(wp.map);
    }

    duplicatesInfo[id].objects.push(wp);
  }

  // RESULTADO AGRUPADO
  const result = Array.from(grouped.values());

  // SOLO IDS REALMENTE DUPLICADOS
  const realDuplicates = {};

  for (const [id, info] of Object.entries(duplicatesInfo)) {
    if (info.count > 1) {
      realDuplicates[id] = info;
    }
  }

  // NOMBRES DE ARCHIVOS
  const baseName = path.parse(fileName).name;

  const groupedFile = `${baseName}_grouped.json`;

  const duplicatedFile = `${baseName}_duplicated_details.json`;

  // GUARDAR ARCHIVOS
  fs.writeFileSync(groupedFile, JSON.stringify(result, null, 2), "utf8");

  fs.writeFileSync(duplicatedFile, JSON.stringify(realDuplicates, null, 2), "utf8");


  // LOGS
  console.log(`\n=== ${fileName} ===`);
  console.log("Total original:", waypoints.length);
  console.log("Total agrupado:", result.length);
  console.log("IDs duplicados:", Object.keys(realDuplicates).length);

  console.log("\nArchivos generados:");
  console.log("-", groupedFile);
  console.log("-", duplicatedFile);
}

// EJECUCION
fusionar("full_poi_Tyria_Mists_en.json");
fusionar("full_poi_Tyria_Mists_es.json");