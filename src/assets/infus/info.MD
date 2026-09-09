- Files generated up to date: May-2026.

- Handled manually:
  - `containers.json` includes the infusion containers. If they add a new one, you need to append it to the end of the file, just like the others.

- Handled by script:
  - `infusions-list.txt` includes all the game's infusions and enrichments.
  - `infusions-names.txt` includes only the uniques names.
  - `infusions.json` includes all the info on the game's infusions and enrichments.

- **Important**: to generate the Infusion file:
  ```
  node ./scripts/infus/get-infus-enrichments.js
  ```
  - This will generate `infusions.json`, you must replace it in `gw2Angular/src/assets/infus`
  - If some IDs have errors, you can use:
    ```
    node ./scripts/infus/retry-items.js
    ```

- Other scripts (optional, for informational purposes only):
  ```
  node ./scripts/infus/export-infusions.js
  ```
  ```
  node ./scripts/infus/compare-infusions.js
  ```