# CV — Pedro Sánchez Escribano

Sitio web estático (HTML/CSS/JS puro, sin build) con el currículum de Pedro Sánchez Escribano, con una estética oscura, tecnológica y futurista, inspirada en portfolios modernos de producto digital.

## Estructura

```
cv-site/
├── index.html    # contenido y estructura
├── styles.css    # estilos (tema oscuro, tipografía monoespaciada)
├── script.js     # navegación entre secciones + efecto de escritura
└── README.md
```

No hay dependencias ni paso de compilación: es HTML/CSS/JS plano, así que Vercel lo despliega como sitio estático directamente.

## Ver el sitio en local

Basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático:

```bash
npx serve .
# o
python3 -m http.server 8080
```

## Desplegar en Vercel

### Opción A — Vercel CLI (la más rápida)

1. Instala la CLI si no la tienes:
   ```bash
   npm install -g vercel
   ```
2. Desde la carpeta del proyecto (`cv-site/`), ejecuta:
   ```bash
   vercel
   ```
3. Sigue las preguntas del asistente:
   - **Set up and deploy?** → Yes
   - **Which scope?** → tu cuenta personal
   - **Link to existing project?** → No
   - **Project name?** → puedes dejar el sugerido, p. ej. `pedro-sanchez-cv`
   - **In which directory is your code located?** → `./`
   - Vercel detecta que es un sitio estático (no necesita framework ni build command) → confirma
4. Al terminar te dará una URL de vista previa (`https://pedro-sanchez-cv-xxxx.vercel.app`).
5. Para publicarlo en tu dominio de producción de Vercel:
   ```bash
   vercel --prod
   ```

### Opción B — Desde GitHub (recomendada si quieres actualizaciones automáticas)

1. Crea un repositorio nuevo en GitHub y sube estos tres archivos (`index.html`, `styles.css`, `script.js`):
   ```bash
   git init
   git add .
   git commit -m "CV inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/cv-pedro-sanchez.git
   git push -u origin main
   ```
2. Entra en [vercel.com](https://vercel.com) → **Add New → Project**.
3. Importa el repositorio que acabas de crear.
4. En "Framework Preset" elige **Other** (sitio estático) — no hace falta configurar build command ni output directory.
5. Pulsa **Deploy**.
6. Cada vez que hagas `git push` a `main`, Vercel volverá a desplegar automáticamente.

### Dominio personalizado (opcional)

En el panel del proyecto en Vercel → **Settings → Domains**, puedes añadir un dominio propio (p. ej. `pedrosanchez.dev`) y seguir las instrucciones de DNS que te indique.

## Personalizar contenido

- Todo el texto está en `index.html`, organizado por secciones (`#perfil`, `#experiencia`, `#habilidades`, `#educacion`, `#contacto`).
- Los colores y tipografía están centralizados en las variables `:root` al inicio de `styles.css`.
- El efecto de escritura del nombre y la navegación entre pestañas están en `script.js`.
