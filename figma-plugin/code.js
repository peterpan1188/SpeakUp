// Figma plugin main
figma.showUI(__html__, { width: 540, height: 420 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'rename') {
    const mapping = msg.mapping; // array of { dataLayerName, figmaName }
    let renamed = 0;
    for (const item of mapping) {
      const key = item.dataLayerName;
      const targetName = item.figmaName;
      if (!key || !targetName) continue;

      // Find nodes that match name or contain the data-layer attribute text
      const nodes = figma.root.findAll(node => {
        try { return node.name === key || node.name.includes(key) || (node.getPluginData && node.getPluginData('data-layer-name') === key);
        } catch (e) { return false; }
      });

      for (const n of nodes) {
        try {
          n.name = targetName;
          renamed++;
        } catch (e) {
          // skip nodes we can't rename
        }
      }
    }

    figma.ui.postMessage({ type: 'done', renamed });
  }
};
