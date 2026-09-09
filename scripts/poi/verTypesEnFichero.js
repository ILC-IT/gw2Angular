const fs = require("fs");

// Extrae y muestra los tipos unicos de un JSON array de objetos con campo "type"

function printUniqueTypes(filePath) {
  try {
    const data = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );

    if (!Array.isArray(data)) {
      throw new Error("JSON must be an array");
    }

    const types = new Set();

    for (const item of data) {
      if (item.type !== undefined) {
        types.add(item.type);
      }
    }

    console.log("Unique types:", [...types].join(", "));

  } catch (err) {
    console.error("Error:", err.message);
  }
}

// EJECUCION
printUniqueTypes("./poi_Tyria_en.json");