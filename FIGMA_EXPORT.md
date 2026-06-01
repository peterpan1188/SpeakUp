Figma Export Utilities

Commands

- Generate snapshots into `dist/figma-snapshots`:

```bash
npm run figma:export
```

- Serve the snapshots locally at `http://localhost:3001/`:

```bash
npm run figma:serve
```

Details

- `scripts/generate-figma-snapshots.js` copies prepared HTML snapshots and docs into `dist/figma-snapshots` and writes a simple `index.html`.
- `scripts/serve-figma-snapshots.js` runs a small Express static server to preview the snapshots.

How to use

1. Run `npm run figma:export`.
2. Run `npm run figma:serve` and open `http://localhost:3001/`.
3. Use your HTML→Figma plugin to import any of the listed snapshot files.

Notes

- These snapshots are simplified and avoid absolute-positioned decorations to make Figma imports more reliable.
- If you prefer the CLI `serve` tool instead of the Node server, you can run `npx serve dist/figma-snapshots -l 3001`.

Auto-rename after import

To bulk-rename imported layers in Figma based on the `data-layer-name` attributes:

1. Open the Figma Desktop app.
2. Menu → Plugins → Development → New Plugin... → "Link existing plugin" and choose the `figma-plugin` folder in this repo.
3. Run the plugin and paste the JSON form of `figma-layer-map.json` (convert the file into an array of {"dataLayerName","figmaName"} objects) into the UI.
4. Click "Apply Renames" and the plugin will rename layers that match.

See `figma-plugin/README.md` for more details.
