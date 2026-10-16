# Psicología con Acento — web

Web de María Tani (terapia online en español, italiano e inglés). Hecha con [Astro](https://astro.build): genera HTML estático, casi sin JavaScript, y se publica gratis en GitHub Pages.

## Uso diario

```bash
npm install        # solo la primera vez
npm run dev        # vista previa en http://localhost:4321 mientras editas
npm run build      # genera la web final en dist/
npm run preview    # sirve dist/ para revisarla
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Email, WhatsApp, Instagram, nº de colegiada, Formspree, calendario | `src/config.ts` |
| Precios | `src/config.ts` → `prices` |
| Textos de la web (cada idioma) | `src/i18n/es.ts`, `src/i18n/en.ts`, `src/i18n/it.ts` |
| Direcciones de las páginas por idioma | `src/i18n/index.ts` → `routes` |
| Colores y tipografía | `src/styles/global.css` (bloque `:root`) |
| Foto | `src/assets/portrait.jpg` (se optimiza sola a AVIF/WebP) |
| Privacidad y aviso legal | `src/pages/privacidad.astro`, `aviso-legal.astro` y sus versiones en `en/` e `it/` |

## Añadir un artículo al blog

Crea un `.md` en `src/content/blog/es/` (y, si quieres, sus traducciones en `en/` e `it/`):

```md
---
title: 'Título'
description: 'Resumen de 1–2 frases para Google.'
pubDate: 2026-11-01
translationKey: mi-articulo   # la misma clave en las tres versiones las enlaza entre sí
---

Texto en Markdown…
```

El nombre del archivo es la URL: `es/mi-articulo.md` → `/blog/mi-articulo/`.

## Antes de publicar (pendientes)

1. **Dominio**: en `astro.config.mjs` (`site`) y `public/robots.txt`. Si usas un dominio propio, crea `public/CNAME` con el dominio dentro. Sin dominio, usa `site: 'https://<usuario>.github.io'` y `base: '/<repo>'`.
2. **Email real** y **nº de colegiada** en `src/config.ts`.
3. **NIF y domicilio** en las páginas de aviso legal y privacidad (buscar `[PENDIENTE]`, `[PENDING]`, `[DA INSERIRE]`). Conviene que lo revise un asesor.
4. **Formulario**: crea un formulario gratuito en formspree.io y pega su ID en `formspreeId`. Mientras esté vacío, el formulario abre el programa de correo del visitante con el mensaje ya escrito.
5. **Foto con más resolución**: la actual mide 400 px; una de ~1000 px se verá nítida en móviles y pantallas retina.
6. Regenerar las imágenes para redes si cambian los textos: `node scripts/make-images.mjs`.

## Publicar en GitHub Pages (gratis)

1. Crea un repositorio en GitHub y sube esta carpeta (`git init`, `git add .`, `git commit`, `git push`).
2. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
3. Cada `push` a `main` publica la web automáticamente (`.github/workflows/deploy.yml`).
4. Dominio propio (opcional, ~10 €/año): añádelo en Settings → Pages y apunta el DNS a GitHub.

## Añadir el calendario de reservas más adelante

GitHub Pages no ejecuta servidor, así que las reservas se hacen con un servicio externo gratuito:

1. Crea una cuenta en [Cal.com](https://cal.com) (plan gratuito) o usa las *páginas de citas* de Google Calendar.
2. Copia la URL pública de reserva y pégala en `bookingUrl` en `src/config.ts`.
3. Listo: las páginas `/reservar/`, `/en/book/` e `/it/prenota/` muestran un botón que carga el calendario solo al pulsarlo, así no ralentiza la web.

## Rendimiento y SEO

- Lighthouse móvil: 99–100 en rendimiento, accesibilidad, buenas prácticas y SEO.
- Sin cookies ni scripts de terceros al cargar. Fuentes alojadas en la propia web.
- `hreflang` entre las tres versiones de cada página, `sitemap-index.xml`, datos estructurados (ProfessionalService, FAQPage, BlogPosting) e imágenes para compartir por idioma.
