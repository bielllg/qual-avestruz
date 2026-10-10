const sharp = require('sharp');
const path = require('node:path');
const assets = path.join(__dirname, '../public/assets');
(async () => {
  for (const name of ['tito-v2', 'rico', 'nino']) {
    const input = path.join(assets, `${name}.png`);
    await sharp(input).webp({ quality: 90, alphaQuality: 100, effort: 6 }).toFile(path.join(assets, `${name}.webp`));
    for (const width of [240, 480]) {
      await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 88, alphaQuality: 100, effort: 6 }).toFile(path.join(assets, `${name}-${width}.webp`));
    }
  }
  await sharp(path.join(assets, 'fundo-capa.png')).webp({ quality: 88, effort: 6 }).toFile(path.join(assets, 'fundo-capa.webp'));
  await sharp(path.join(assets, 'casca-aberta.png')).webp({ quality: 90, alphaQuality: 100, effort: 6 }).toFile(path.join(assets, 'casca-aberta.webp'));
})().catch(error => { console.error(error); process.exitCode = 1; });
