# Import LM Sport — v23

Sitio web estático para **Import LM Sport** (camisetas de fútbol premium).
Dueño: Henry — WhatsApp: 0963647238
TikTok: @henrybarce13 (personal) y @importlmsport (negocio)

## Estructura

```
import-lm-sport-v23/
├── index.html         # Página principal
├── manifest.json      # PWA manifest
├── sw.js              # Service worker (PWA offline)
├── images/            # Logos e imágenes de camisetas
│   ├── icon-512.png
│   ├── jimbra-logo-sm.png
│   ├── jimbra-logo.png
│   ├── ecuador.png
│   ├── argentina.png
│   ├── brasil.png
│   ├── colombia.png
│   ├── mexico.png
│   ├── espana.png
│   ├── realmadrid.png
│   ├── barcelona.png
│   ├── psg.png
│   ├── barcelonasc.png
│   └── hero-jerseys.png
└── README.md          # Este archivo
```

## Opción 1 — Subir a Vercel directamente (más fácil)

1. Entrá a https://vercel.com y logueate (podés usar tu cuenta de GitHub)
2. Click en **"Add New"** → **"Project"**
3. Click en **"Browse all templates"** → scroll abajo → **"Deploy without code"** (o sube la carpeta)
4. Arrastrá la carpeta `import-lm-sport-v23` completa a la zona de upload
5. Click en **"Deploy"**
6. En segundos vas a tener tu URL tipo `import-lm-sport-v23.vercel.app`

## Opción 2 — Subir a GitHub desde PowerShell

### Paso 1: Crear el repo en GitHub
1. Andá a https://github.com/new
2. Repository name: `import-lm-sport`
3. Marcá "Public"
4. NO marques "Add README"
5. Click **"Create repository"**
6. Copiá la URL que te da (algo como `https://github.com/TU_USUARIO/import-lm-sport.git`)

### Paso 2: Subir desde PowerShell

Abrí PowerShell en Windows y ejecutá estos comandos (cambiá `TU_USUARIO` por tu usuario real de GitHub):

```powershell
# 1. Ir a la carpeta donde descomprimiste el ZIP
cd C:\ruta\donde\descomprimiste\import-lm-sport-v23

# 2. Inicializar git
git init

# 3. Agregar todos los archivos
git add .

# 4. Primer commit
git commit -m "v23 - Import LM Sport con sección Mundial"

# 5. Renombrar la rama a main
git branch -M main

# 6. Conectar con tu repo de GitHub (cambia TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/import-lm-sport.git

# 7. Subir el código
git push -u origin main
```

Si te pide credenciales, GitHub ya no acepta tu contraseña. Tenés que usar un **Personal Access Token**:
1. Andá a https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Marcá el scope `repo`
4. Generá el token y copialo
5. Cuando PowerShell te pida contraseña, pegá el token

### Paso 3: Conectar GitHub con Vercel (automático)

1. Entrá a https://vercel.com
2. Click **"Add New"** → **"Project"**
3. Click **"Import Git Repository"**
4. Buscá tu repo `import-lm-sport` y click **"Import"**
5. Vercel detecta automáticamente que es un sitio estático
6. Click **"Deploy"**
7. Listo, cada vez que hagas `git push` se actualiza solo

## Verificación local

Para probar el sitio localmente antes de subirlo:

```powershell
cd C:\ruta\donde\descomprimiste\import-lm-sport-v23
python -m http.server 3000
```

Abrí http://localhost:3000 en tu navegador.

## Características

- ✅ Diseño dark premium con verde esmeralda (#10B981)
- ✅ Sección "Estamos en el Mundial" con fixture de Ecuador
- ✅ 3 niveles de calidad: 1:1, AAA, Sublimada
- ✅ Selecciones: Ecuador, Argentina, Brasil, Colombia, México, España
- ✅ Clubes: Real Madrid, Barcelona FC, PSG, Barcelona SC
- ✅ Sección Olimpiadas escolares
- ✅ Sección TikTok con ambos perfiles
- ✅ PWA instalable (manifest + service worker)
- ✅ Todos los CTAs linkean a WhatsApp 0963647238
- ✅ Footer "Desarrollado por Jimbra" → jimbra.net
- ✅ Responsive (móvil y desktop)
- ✅ Animaciones suaves con scroll reveal

## Cambios de la versión 23

- Nombre cambiado de "Henry Sport" a "IMPORT LM SPORT"
- Sección nueva "ESTAMOS EN EL MUNDIAL" con 3 partidos de Ecuador
- Badge "HOY JUEGA ECUADOR" en el partido del 20 de junio
- Navbar actualizado con link al Mundial
- Footer con logo de Jimbra en verde
- Colores más vibrantes (fondo #050a05, texto #f0fdf4)
- Service worker actualizado a v4

## Soporte

Desarrollado por **Jimbra** — https://jimbra.net
