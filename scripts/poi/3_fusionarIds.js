const fs = require("fs");
const path = require("path");

// Junta la propiedad "map" de los ids repetidos y crea un array con los posibles map de un mismo id,
// seleccionando el map principal basado en el idioma y los mapas regionales

const { normalizeText, VALID_MAPS_ES, VALID_MAPS_EN } = require("./configMaps");

// Carpeta de trabajo que esta junto a este script
const inputFolder = path.join(__dirname, "files_to_work");

// ELEGIR MAPA PRINCIPAL
function elegirMap(maps, lang) {
  const validMaps = lang === "es" ? VALID_MAPS_ES : VALID_MAPS_EN;

  // Primero buscar un mapa que este definido como mapa regional en el idioma correspondiente
  for (const map of maps) {
    if (validMaps.has(normalizeText(map))) {
      return map;
    }
  }

  // Si ninguno esta definido como mapa regional, mantener el primero encontrado
  return maps[0];
}

// FUNCION PRINCIPAL
function fusionar(fileName, lang) {

  const inputFile = path.join(inputFolder, fileName);

  const waypoints = JSON.parse(
    fs.readFileSync(inputFile, "utf8")
  );
  if (!Array.isArray(waypoints)) {
    throw new Error(`${fileName} must contain a JSON array`);
  }

  // Agrupar por id
  const grouped = new Map();

  // Informacion detallada de duplicados
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

    // Añadir map si todavia no existe
    if (!existing.maps.some(
      map => normalizeText(map) === normalizeText(wp.map)
    )) {
      existing.maps.push(wp.map);
    }

    // Actualizar informacion de duplicados
    duplicatesInfo[id].count++;

    if (!duplicatesInfo[id].maps.some(
      map => normalizeText(map) === normalizeText(wp.map)
    )) {
      duplicatesInfo[id].maps.push(wp.map);
    }

    duplicatesInfo[id].objects.push(wp);
  }

  // Resultado agrupado y ordenado por id
  const result = Array.from(grouped.values());
  result.sort((a, b) => a.id - b.id);

  // Elegir map principal para cada id, basado en el idioma y los mapas regionales
  for (const item of result) {
    item.map = elegirMap(item.maps, lang);
  }

  // Mapas descartados
  const discardedMaps = new Set();

  for (const item of result) {
    for (const map of item.maps) {
      if (normalizeText(map) !== normalizeText(item.map)) {
        discardedMaps.add(map);
      }
    }
  }

  // Ordenar maps de cada id, poniendo primero el map principal y luego los demas en orden alfabetico
  for (const item of result) {
    item.maps.sort((a, b) => {
      const aEsPrincipal = normalizeText(a) === normalizeText(item.map);
      const bEsPrincipal = normalizeText(b) === normalizeText(item.map);
      if (aEsPrincipal !== bEsPrincipal) {
        return aEsPrincipal ? -1 : 1;
      }
      return a.localeCompare(b);
    });
  }

  // Solo ids realmente duplicados
  const realDuplicates = {};

  for (const [id, info] of Object.entries(duplicatesInfo)) {
    if (info.count > 1) {
      realDuplicates[id] = info;
    }
  }

  // Nombres de archivos de salida
  const baseName = path.parse(fileName).name;
  const groupedFile = path.join(
    inputFolder,
    `${baseName}_grouped.json`
  );
  const duplicatedFile = path.join(
    inputFolder,
    `${baseName}_duplicated_details.json`
  );
  const discardedFile = path.join(
    inputFolder,
    `${baseName}_discarded_maps.txt`
  );

  // Guadar archivos de salida
  fs.writeFileSync(
    groupedFile,
    JSON.stringify(result, null, 2),
    "utf8"
  );

  fs.writeFileSync(
    duplicatedFile,
    JSON.stringify(realDuplicates, null, 2),
    "utf8"
  );

  fs.writeFileSync(
    discardedFile,
    Array.from(discardedMaps)
      .sort((a, b) => a.localeCompare(b))
      .join("\n"),
    "utf8"
  );

  // Logs
  console.log(`\n=== ${fileName} (${lang}) ===`);
  console.log("Total original:", waypoints.length);
  console.log("Total agrupado:", result.length);
  console.log("IDs duplicados:", Object.keys(realDuplicates).length);
  console.log("Descartados:", discardedMaps.size);
  console.log("\nArchivos generados:");
  console.log("-", groupedFile);
  console.log("-", duplicatedFile);
  console.log("-", discardedFile);

}

// EJECUCION
const inputFiles = [
  "full_poi_Tyria_Mists_es.json",
  "full_poi_Tyria_Mists_en.json"
];

// Comprobar que existen todos los archivos de entrada
const missingFiles = inputFiles
  .map(fileName => path.join(inputFolder, fileName))
  .filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
  console.error("\nERROR: No se encuentran los siguientes archivos:");

  missingFiles.forEach(file => {
    console.error(` - ${file}`);
  });

  console.error("\nSe cancela la ejecución.");
  process.exit(1);
}

fusionar(inputFiles[0], "es");
fusionar(inputFiles[1], "en");