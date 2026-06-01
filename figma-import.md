Figma HTML Import Notes

Purpose
- This repo includes `figma-export.html`, a simplified, export-friendly HTML snapshot of the Hero region and primary CTA. Use this for HTML→Figma imports when the live React app structure causes layout overlap.

When to use
- Use the snapshot when the full app import to Figma shows overlapping text, broken auto-layout, or missing grouping caused by absolute-positioned art.

How to import (recommended)
1. Open Figma and install an HTML importer plugin such as "HTML to Figma" or use Builder.io Figma plugin.
2. In the plugin UI, choose the option to import a local HTML file and select `figma-export.html`.
3. In plugin options set:
   - Preserve default CSS: ON
   - Convert to Auto Layout: OFF (convert manually in Figma after import)
   - Preserve text as text boxes: ON
4. After import, group logical blocks and convert buttons/cards into Figma Auto Layout frames for responsive behavior.

Full-page snapshot
- `figma-export-full.html`: a full-page, simplified HTML snapshot (header, hero, app mockups, why, faqs, footer) designed to import cleanly into Figma. Use this when you want the whole page imported as separate layers ready for grouping.

Import order recommendation
- Import the full-page snapshot first (`figma-export-full.html`) so you get a consistent baseline.
- Import individual snapshots (`figma-export-header.html`, `figma-export-appmockups.html`, `figma-export-footer.html`) only if you need isolated, higher-fidelity blocks to refine further.

Tips to avoid overlapping
- Avoid absolute positioning for primary text blocks — use flex or grid.
- Ensure container widths are explicit; Figma imports rely on computed widths.
- Use simple border-radius and border styles instead of complex masks or SVG clipping.

If you'd like
- I can generate additional export snapshots for the Header, AppMockups phone frame, and Footer.
- Add inline data attributes to each exported element mapping to `figma-layer-map.json` to automate re-naming in Figma.

Snapshots added
- `figma-export-header.html`: simplified header with `data-layer-name` attributes.
- `figma-export-appmockups.html`: simplified phone frame + screen snapshot with `data-layer-name`.
- `figma-export-footer.html`: simplified footer snapshot with `data-layer-name`.

Recommended workflow
1. Import `figma-export-header.html`, `figma-export.html`, `figma-export-appmockups.html`, and `figma-export-footer.html` separately into Figma.
2. Use `figma-layer-map.json` to rename layers automatically (or manually map using the `data-layer-name` attribute values displayed in imported layers).
3. Convert logical groups to Auto Layout frames only after verifying text and box sizes — converting too early can collapse layers when the imported layout lacks explicit width constraints.
