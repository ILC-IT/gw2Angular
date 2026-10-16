const fs = require("fs");
const path = require("path");

// Unir dos archivos JSON array por ID, ignorando duplicados, en un nuevo archivo de salida

function unirArchivos(file1Path, file2Path, outputFile) {
  try {
    // Leer archivos
    const file1 = JSON.parse(
      fs.readFileSync(file1Path, "utf8")
    );

    const file2 = JSON.parse(
      fs.readFileSync(file2Path, "utf8")
    );

    // Validar arrays
    if (!Array.isArray(file1) || !Array.isArray(file2)) {
      throw new Error("Both files must be JSON arrays");
    }

    console.log(`${path.basename(file1Path)} items:`, file1.length);
    console.log(`${path.basename(file2Path)} items:`, file2.length);

    // Crear Set con IDs de file1
    const idsFile1 = new Set(
      file1.map(item => item.id)
    );

    // Buscar duplicados
    const duplicates = file2.filter(
      item => idsFile1.has(item.id)
    );

    // Avisar duplicados
    if (duplicates.length > 0) {
      console.log("\nDuplicated IDs found:");

      duplicates.forEach(item => {
        console.log(`- ${item.id}`);
      });

      console.log(`Total duplicates: ${duplicates.length}`);
    } else {
      console.log("No duplicated IDs");
    }

    // Unir ignorando duplicados
    const uniqueFile2 = file2.filter(
      item => !idsFile1.has(item.id)
    );

    const merged = [
      ...file1,
      ...uniqueFile2
    ];

    // Guardar resultado
    fs.writeFileSync(outputFile, JSON.stringify(merged, null, 2), "utf8");

    console.log(`Merged file saved -> ${outputFile} items:`, merged.length, "\n");

  } catch (err) {
    console.error("Merge error:");
    console.error(err.message);
    throw err;
  }
}

// EJECUCION
const inputFolder = path.join(__dirname, "files_to_work");
const filePath = file => path.join(inputFolder, file);

// Configuracion de las uniones
const merges = [
  {
    file1: filePath("waypoint_landmark_vista_poi_Tyria_en.json"),
    file2: filePath("waypoint_landmark_vista_poi_Mists_en.json"),
    output: filePath("full_poi_Tyria_Mists_en.json")
  },
  {
    file1: filePath("waypoint_landmark_vista_poi_Tyria_es.json"),
    file2: filePath("waypoint_landmark_vista_poi_Mists_es.json"),
    output: filePath("full_poi_Tyria_Mists_es.json")
  }
];

// Comprobar que existen todos los archivos de entrada
const missingFiles = [
  ...new Set(merges.flatMap(({ file1, file2 }) => [file1, file2]))
].filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
  console.error("\nERROR: No se encuentran los siguientes archivos:");

  missingFiles.forEach(file => {
    console.error(` - ${file}`);
  });

  console.error("\nSe cancela la ejecución.");
  process.exit(1);
}

// Ejecutar las uniones solo si todos los archivos existen
for (const merge of merges) {
  unirArchivos(merge.file1, merge.file2, merge.output);
}