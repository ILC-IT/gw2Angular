const fs = require("fs").promises;
const path = require("path");

const sourceDir = path.resolve(
    __dirname,
    "files_to_work"
);

const destination = path.resolve(
    __dirname,
    "../../src/assets/poi"
);

const files = [
    "full_poi_Tyria_Mists_en_grouped.json",
    "full_poi_Tyria_Mists_es_grouped.json",
];

// Copia los archivos POI generados a los assets de Angular
(async () => {
    try {
        // Comprobar que existen todos los archivos de origen
        const missingFiles = [];

        for (const file of files) {
            const source = path.join(sourceDir, file);

            try {
                await fs.access(source);
            } catch {
                missingFiles.push(source);
            }
        }

        // Si falta algun archivo, abortar antes de copiar
        if (missingFiles.length > 0) {
            console.error("\nERROR: No se encuentran los siguientes archivos:");

            missingFiles.forEach(file => {
                console.error(` - ${file}`);
            });

            throw new Error("No se pueden copiar los archivos POI.");
        }

        // Crear destino solo cuando todos los archivos existen
        await fs.mkdir(destination, { recursive: true });

        // Copiar archivos
        for (const file of files) {
            const source = path.join(sourceDir, file);
            const target = path.join(destination, file);

            await fs.rm(target, { force: true });
            await fs.copyFile(source, target);

            console.log(`Copied ${file} → ${target}`);
        }

        console.log("\nPOI assets copied successfully.");

    } catch (err) {
        console.error("\nERROR: POI asset copy failed.");
        console.error(err.message);
        process.exitCode = 1;
    }
})();