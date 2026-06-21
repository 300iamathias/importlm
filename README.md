# Import LM Sport — v24

Sitio web estático para **Import LM Sport** (camisetas de fútbol premium).
Dueño: Henry — WhatsApp: 0963647238
TikTok: @henrybarce13 (personal) y @importlmsport (negocio)

## Cambios de la versión 24

- ✅ Fix de `vercel.json` (removida la propiedad `public` que causaba error en Vercel)
- ✅ Todo lo de v23: Import LM Sport, sección Mundial, PWA, etc.

## Estructura

```
import-lm-sport-v24/
├── index.html
├── manifest.json
├── sw.js
├── vercel.json      # ← ARREGLADO
├── .gitignore
├── README.md
└── images/          # 15 imágenes
```

## Deploy en Vercel

### Opción A — Arrastrar carpeta (más rápido)

1. Descomprimir el ZIP
2. https://vercel.com → "Add New" → "Project"
3. Arrastrá la carpeta `import-lm-sport-v24` al área de upload
4. Click **Deploy**

### Opción B — Desde GitHub (recomendado)

En PowerShell desde la carpeta descomprimida:

```powershell
git init
git add .
git commit -m "v24 - fix vercel.json"
git branch -M main
git remote add origin https://github.com/300iamathias/importlm.git
git push -u origin main --force
```

El `--force` es para sobrescribir v23 que ya está en GitHub.

Después en Vercel:
1. https://vercel.com → "Add New" → "Project"
2. Importar repo `300iamathias/importlm`
3. NO tocar nada — Vercel detecta todo solo
4. Click **Deploy**
5. URL lista en 10-20 segundos: `importlm.vercel.app`

## Verificación local

```powershell
python -m http.server 3000
```
Abrir http://localhost:3000

## Características

- Dark premium con verde esmeralda (#10B981)
- Sección "Estamos en el Mundial" con fixture Ecuador
- 3 calidades: 1:1, AAA, Sublimada
- Selecciones: Ecuador, Argentina, Brasil, Colombia, México, España
- Clubes: Real Madrid, Barcelona FC, PSG, Barcelona SC
- Olimpiadas escolares
- TikTok: @henrybarce13 y @importlmsport
- PWA instalable
- Todos los CTAs → WhatsApp 0963647238
- Footer "Desarrollado por Jimbra" → jimbra.net
- Responsive móvil/desktop

## Soporte

Desarrollado por **Jimbra** — https://jimbra.net
