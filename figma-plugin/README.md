Rename Imported Layers — Figma Plugin

How to use

1. Open Figma Desktop app.
2. Menu → Plugins → Development → New Plugin... → "Link existing plugin" and choose the folder `figma-plugin` in this repo.
3. Run the plugin (Plugins → Development → Rename Imported Layers).
4. Open `figma-layer-map.json` in the repo, copy the values and convert to array of objects with keys `dataLayerName` and `figmaName` (or copy the CSV to a converter), then paste the JSON into the plugin textarea.
5. Click "Apply Renames". The plugin will search the document for nodes with names matching the `dataLayerName` or containing it, and rename them to `figmaName`.

Notes
- The plugin matches node names or plugin data; ensure imported layer names include the `data-layer-name` string (most HTML→Figma importers include attribute text).
- This plugin runs locally in your Figma file and does not require external tokens.
