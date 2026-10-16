- Files generated up to date: 14-Oct-2026.

- To generate the POI files (lang: en, es):
  - Clone the repo https://github.com/Snappey/maps.gw2.io
  - Replace `/scripts/generate_pois.mjs` and `/scripts/config.mjs` with the corresponding files from `gw2Angular/scripts/poi/`.
  - Then generate four files (with node: "22.x"): `node ./scripts/generate_pois.mjs` or `npm run cache-poi`.
  - Finally **copy**  
  `/src/assets/data/poi_Tyria_en.json`  
  `/src/assets/data/poi_Tyria_es.json`  
  `/src/assets/data/poi_Mists_en.json`  
  `/src/assets/data/poi_Mists_es.json`  
  to  
  `gw2Angular/scripts/poi/files_to_work`

> [!IMPORTANT]
> - Add the new map names manually to the `GW2_REGIONAL_MAPS` variable in `src/app/component/buscador/buscadorExtra.ts` and in `gw2Angular/scripts/poi/configMaps.js`

- Run the scripts individually in other terminal:
```
node ./scripts/poi/1_filtrar_pois.js
```
```
node ./scripts/poi/2_unirArchivos.js
```
```
node ./scripts/poi/3_fusionarIds.js
```
```
node ./scripts/poi/4_copiarAssets.js
```

- Or run all steps at once:
```
node ./scripts/poi/generarPois.js
```

- Optionally, clean the temporary files:
```
node ./scripts/poi/limpiar.js
```

> [!IMPORTANT]
> - This will generate the two final POI files in `gw2Angular/src/assets/poi`
> - **Final file names must be**: `full_poi_Tyria_Mists_en_grouped.json` and `full_poi_Tyria_Mists_es_grouped.json`

> [!NOTE]
> - If no new maps or pois appear, it is because the files and variables need to be updated.