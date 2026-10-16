// Genera las imágenes para compartir en redes (public/og-*.png) y el icono de Apple.
// Uso: node scripts/make-images.mjs
import sharp from 'sharp';

const lines = {
  es: ['Tu psicóloga', 'con acento.', 'Terapia online en español, italiano e inglés'],
  en: ['Your psychologist', 'with an accent.', 'Online therapy in English, Spanish and Italian'],
  it: ['La tua psicologa', 'con accento.', 'Terapia online in italiano, spagnolo e inglese'],
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

for (const [lang, [a, b, sub]] of Object.entries(lines)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf8fc"/>
  <rect x="0" y="560" width="1200" height="70" fill="#2a2236"/>
  <path d="M930 330 C 980 260, 1030 180, 1100 100" fill="none" stroke="#8b78c2" stroke-width="44" stroke-linecap="round"/>
  <text x="80" y="230" font-family="Georgia, 'Times New Roman', serif" font-size="96" fill="#2a2236">${esc(a)}</text>
  <text x="80" y="340" font-family="Georgia, 'Times New Roman', serif" font-size="96" font-style="italic" fill="#2a2236">${esc(b)}</text>
  <text x="80" y="430" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="34" fill="#564c66">${esc(sub)}</text>
  <text x="80" y="606" font-family="Georgia, serif" font-size="30" fill="#faf8fc">Psicología con Acento · María Tani</text>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`public/og-${lang}.png`);
}

await sharp('public/favicon.svg', { density: 600 }).resize(180, 180).flatten({ background: '#faf8fc' }).png().toFile('public/apple-touch-icon.png');
console.log('ok');
