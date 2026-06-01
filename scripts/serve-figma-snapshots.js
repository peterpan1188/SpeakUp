import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3001;
const staticDir = join(__dirname, '..', 'dist', 'figma-snapshots');

app.use(express.static(staticDir));
app.get('/', (req, res) => res.sendFile(join(staticDir, 'index.html')));

app.listen(port, () => console.log(`Figma snapshots served: http://localhost:${port}/`));
