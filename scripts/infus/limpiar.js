const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");

const sourceDir = path.resolve(
    __dirname,
    "files_to_work"
);

// Pregunta si se deben eliminar los archivos temporales
async function cleanTemporaryFolder(sourceDir) {
    // Elimina archivos de sourceDir segun el modo seleccionado:
    // - all: elimina todo el contenido de la carpeta
    // - keep: elimina todo excepto los archivos indicados
    // - selected: elimina unicamente los archivos indicados

    try {
        await fs.access(sourceDir);
    } catch {
        console.log("Temporary folder does not exist.");
        return;
    }

    // Archivo que nunca se debe borrar
    const protectedFiles = [
        ".gitkeep"
    ];

    // Archivos que nunca se deben borrar en la opcion 2
    const filesToKeep = [
        "infusions.json",
        "infusions-names.txt",
        "infusions-list.txt"
    ];

    // Archivos que se deben borrar unicamente en la opcion 3
    const specificFilesToDelete = [
        "failed-batches.json",
        "missing-ids.json",
        "both-types.json",
        "retry-items.json",
        "missing-ids-retry.json",
        "infusions-old.json",
        "infusions-added.json",
        "infusions-removed.json",
        "infusions-changed.json"
    ];

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = message => new Promise(resolve => {
        rl.question(message, resolve);
    });

    console.log("\nHow do you want to clean the temporary folder?");
    console.log("1. Delete all files");
    console.log("2. Delete all files except selected files");
    console.log("3. Delete only selected files");
    console.log("4. Cancel");

    const mode = (await question("\nSelect an option (1-4): ")).trim();

    if (mode === "4") {
        rl.close();
        console.log("Cleanup cancelled.");
        return;
    }

    if (!["1", "2", "3"].includes(mode)) {
        rl.close();
        console.log("Invalid option. Cleanup cancelled.");
        return;
    }

    const existingFiles = await fs.readdir(sourceDir);

    let filesToDelete;

    switch (mode) {

        case "1":
            // Todos los archivos excepto los protegidos
            filesToDelete = existingFiles.filter(
                file => !protectedFiles.includes(file)
            );
            break;

        case "2":
            // Todos excepto los definidos en filesToKeep y los protegidos
            filesToDelete = existingFiles.filter(
                file =>
                    !filesToKeep.includes(file) &&
                    !protectedFiles.includes(file)
            );
            break;

        case "3":
            // Solo los definidos en specificFilesToDelete
            // Los archivos protegidos nunca se eliminan
            filesToDelete = existingFiles.filter(
                file =>
                    specificFilesToDelete.includes(file) &&
                    !protectedFiles.includes(file)
            );
            break;
    }

    if (filesToDelete.length === 0) {
        rl.close();
        console.log("\nNo files to delete.");
        return;
    }

    // Mostrar los archivos que se van a borrar
    console.log("\nThe following files will be deleted:");

    for (const file of filesToDelete) {
        console.log(`- ${file}`);
    }

    // Confirmacion final
    const confirmation = await question(
        "\nDo you want to continue? (y/n): "
    );

    rl.close();

    if (confirmation.trim().toLowerCase() !== "y") {
        console.log("Cleanup cancelled. Temporary files preserved.");
        return;
    }

    // Borrar archivos
    for (const file of filesToDelete) {
        await fs.rm(
            path.join(sourceDir, file),
            {
                recursive: true,
                force: true
            }
        );
        console.log(`Deleted: ${file}`);
    }

    console.log("\nTemporary files cleaned.");
}

(async () => {
    await cleanTemporaryFolder(sourceDir);
})();