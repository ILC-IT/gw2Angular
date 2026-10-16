- Files generated up to date: 14-Oct-2026.

- Handled manually:
  - `containers.json` in `gw2Angular/src/assets/infus` includes the infusion containers:
    - If they add a new one, you need to append it to the end of the file, just like the others, and fill it in with the relevant information.
    - If new infusions corresponding to the container are discovered in API, their IDs should be added to the options.ids field of their corresponding container.

- Handled by script:
  - export-infusions.js:
    - `infusions-list.txt` includes all of the game's current infusions and enrichments, for informational purposes.
    - `infusions-names.txt` includes only the uniques names, for informational purposes.
  - get-infus-enrichments.js:
    - `infusions.json` includes all the current information on the game's infusions and enrichments.

> [!IMPORTANT]
> - To generate the file infusions.json:
>  ```
>  node ./scripts/infus/get-infus-enrichments.js
>  (The default language is 'es'. This will take some minutes to complete.)
>  ```
>  - If some IDs have errors, you can use:
>    ```
>    node ./scripts/infus/retry-items.js
>    ```
> - Optionally, run:
>  ```
>  node ./scripts/infus/export-infusions.js
>  (This will create infusions-list.txt and infusions-names.txt)
>  ```
> - Finally:
>  ```
>  node ./scripts/infus/copiarAssets.js
>  ```

- Or run all steps at once:
```
node ./scripts/infus/generarInfus.js
```

- Optionally, clean the temporary files:
```
node ./scripts/infus/limpiar.js
```

- Other scripts (optional, for informational purposes only):
  ```
  node ./scripts/infus/compare-infusions.js
  (This will create infusions-added.json, infusions-removed.json and infusions-changed.json)
  ```

> [!NOTE]
> - If no new infusions, variants, or containers appear, it is because they need to be looted in-game to become available in the API. That is why the file must be kept up to date regularly.