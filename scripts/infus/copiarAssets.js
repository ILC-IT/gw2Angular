const fs = require("fs").promises;
const path = require("path");

const sourceDir = path.resolve(
    __dirname,
    "files_to_work"
);

const destination = path.resolve(
    __dirname,
    "../../src/assets/infus"
);

const files = [
    "infusions.json",
    "infusions-names.txt",
    "infusions-list.txt",
];

// Copia los archivos de infusiones generados a los assets de Angular
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

        // Abortar si falta algun archivo
        if (missingFiles.length > 0) {
            console.error("\nERROR: No se encuentran los siguientes archivos:");

            missingFiles.forEach(file => {
                console.error(` - ${file}`);
            });

            throw new Error("No se pueden copiar los archivos de infusiones.");
        }

        // Crear el directorio de destino
        await fs.mkdir(destination, { recursive: true });

        // Copiar los archivos
        for (const file of files) {
            const source = path.join(sourceDir, file);
            const target = path.join(destination, file);

            await fs.rm(target, { force: true });
            await fs.copyFile(source, target);

            console.log(`Copied ${file} → ${target}`);
        }

        console.log("\nInfusion assets copied successfully.");

    } catch (err) {
        console.error("\nERROR: Infusion asset copy failed.");
        console.error(err.message);

        process.exitCode = 1;
    }
})();