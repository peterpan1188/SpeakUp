import { join } from 'path';
import fs from 'fs/promises';

const root = process.cwd();
const src = join(root, 'figma-layer-map.json');
const dest = join(root, 'figma-plugin', 'mapping.json');

async function run(){
  try{
    const raw = await fs.readFile(src, 'utf8');
    const obj = JSON.parse(raw);
    const arr = [];
    for(const [filePath, map] of Object.entries(obj)){
      for(const [dataLayerName, figmaName] of Object.entries(map)){
        arr.push({ filePath, dataLayerName, figmaName });
      }
    }
    await fs.writeFile(dest, JSON.stringify(arr, null, 2),'utf8');
    console.log('Wrote', dest);
  }catch(err){
    console.error('Error converting mapping:', err.message);
    process.exit(1);
  }
}
run();
