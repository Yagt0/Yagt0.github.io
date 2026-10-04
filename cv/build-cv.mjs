// Génère public/docs/CV_Ewan_Lefevre.pdf à partir de cv/cv.html avec Chrome (ou Edge) en mode headless.
// Usage : npm run cv
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error('Chrome ou Edge introuvable. Indiquer son chemin dans la variable CHROME_PATH.');
  process.exit(1);
}

const input = pathToFileURL(resolve('cv/cv.html')).href;
const output = resolve('public/docs/CV_Ewan_Lefevre.pdf');

execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--allow-file-access-from-files',
  '--virtual-time-budget=3000',
  `--print-to-pdf=${output}`,
  input,
]);
console.log(`CV généré : ${output}`);
