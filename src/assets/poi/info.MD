- Files generated up to date: May-2026.

- To generate the POI files:
  - Clone the repo https://github.com/Snappey/maps.gw2.io
  - Replace the file `/scripts/generate_pois.mjs` with the one inside `gw2Angular/scripts/poi`
  - Then generate two files (with node: "22.x"): `node ./scripts/generate_pois.mjs` or `npm run cache-poi`

 - Then with those two files, run in other terminal:
   ```
   node ./scripts/poi/filtrar_pois.js
   ```
   ```
   node ./scripts/poi/unirArchivos.js
   ```
   ```
   node ./scripts/poi/fusionarIds.js
   ```
   - * Adjust file names inside scripts if you change them.

- This will generate two final files you must copy to `gw2Angular/src/assets/poi` and use to replace the existing files. **Names must be**: `full_poi_Tyria_Mists_en_grouped.json` and `full_poi_Tyria_Mists_es_grouped.json`