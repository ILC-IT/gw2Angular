const { execFile, spawn } = require("child_process");
const path = require("path");

// Ejecuta los scripts de generacion de POIs en orden
const scripts = [
    "1_filtrar_pois.js",
    "2_unirArchivos.js",
    "3_fusionarIds.js",
    "4_copiarAssets.js"
];

function runScript(script) {
    return new Promise((resolve, reject) => {
        const scriptPath = path.join(__dirname, script);

        console.log(`\n==============================`);
        console.log(`Running: ${script}`);
        console.log(`==============================\n`);

        // execFile("node", [scriptPath], (error, stdout, stderr) => {

        //     if (stdout) {
        //         console.log(stdout);
        //     }

        //     if (stderr) {
        //         console.error(stderr);
        //     }

        //     if (error) {
        //         reject(error);
        //         return;
        //     }

        //     resolve();
        // });

        const child = spawn("node", [scriptPath], {
            stdio: "inherit"
        });

        child.on("close", (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`${script} exited with code ${code}`));
            }
        });

        child.on("error", reject);
    });
}

(async () => {

    try {

        for (const script of scripts) {
            await runScript(script);
        }

        console.log("\n=================================");
        console.log("POI generation completed successfully.");
        console.log("=================================");

    } catch (err) {

        console.error("\n=================================");
        console.error("POI generation failed.");
        console.error("=================================");
        console.error(err.message);

        process.exit(1);
    }

})();
