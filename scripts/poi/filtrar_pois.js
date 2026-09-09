const fs = require("fs");
const path = require("path");

// Devuelve solo los POIs de tipo "waypoint" (o el que se configure) de cada archivo

const CONFIG = {
  // tipo de POI a filtrar
  types: ["waypoint", "landmark", "vista"],

  // solo estos continentes (si null, entonces coge todos)
  includeContinents: null,

  // excluir continentes (solo si includeContinents es null)
  excludeContinents: [
    // "Player vs. Player",
    // "World vs. World",
    // "Jugador contra Jugador",
    // "Mundo contra Mundo"
  ]
};

function extractTypeFromFile(inputFile, config = CONFIG) {
  try {
    console.log(`Processing ${inputFile}...`);

    const raw = fs.readFileSync(inputFile, "utf8");
    const data = JSON.parse(raw);

    if (!Array.isArray(data)) {
      console.log(`Skipped ${inputFile}: not array`);
      return;
    }

    // FILTRO POR TYPE
    const allowedTypes = new Set(config.types);

    let filtered = data.filter(
      item => allowedTypes.has(item.type)
    );

    // INCLUDE CONTINENTS
    if (Array.isArray(config.includeContinents) && config.includeContinents.length > 0) {
      const allowed = new Set(config.includeContinents);

      filtered = filtered.filter(item =>
        allowed.has(item.continent)
      );
    }

    // EXCLUDE CONTINENTS
    else if (Array.isArray(config.excludeContinents) && config.excludeContinents.length > 0) {
      const excluded = new Set(config.excludeContinents);

      filtered = filtered.filter(item =>
        !excluded.has(item.continent)
      );
    }

    const dir = path.dirname(inputFile);
    const baseName = path.basename(inputFile, ".json");

    const outputFile = path.join(
      dir,
      `${config.types.join("_")}_${baseName}.json`
    );

    fs.writeFileSync(outputFile, JSON.stringify(filtered, null, 2), "utf8");

    console.log(`Saved ${filtered.length} ${config.types.join("_")}s -> ${outputFile}`);

    return filtered;

  } catch (err) {
    console.error(`Error processing ${inputFile}`);
    console.error(err.message);
  }
}

// ARCHIVOS
const files = [
  "./poi_Tyria_en.json",
  "./poi_Tyria_es.json",
  "./poi_Mists_en.json",
  "./poi_Mists_es.json",
];

// EJECUCION
files.forEach(file => {
  extractTypeFromFile(file, CONFIG);
});
