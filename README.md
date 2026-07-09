# Biblioteca Digital de 11-02 — Colegio Loperena

Sitio estático (HTML + CSS + JavaScript vanilla, sin frameworks) para que los
estudiantes encuentren guías, talleres, diapositivas y exámenes corregidos
organizados por materia y período.

## Estructura

```
index.html
css/styles.css
js/app.js
assets/img/colegio.jpg   ← falta agregar la foto real
assets/icons/                    ← disponible por si luego usas íconos en SVG sueltos
assets/pdf/<Materia>/<Carpeta>/Periodo-N/archivo.pdf
```

## 1. Agregar la fotografía del colegio

No se incluyó ninguna imagen en la solicitud, así que el banner usa un
degradado institucional de reemplazo (azul → verde). Para poner la foto real:

1. Copia la fotografía a `assets/img/portada-colegio.jpg`.
2. No necesitas tocar ningún código: `css/styles.css` ya apunta a esa ruta
   (sección `.hero-media`) y el degradado oscuro se aplica automáticamente
   sobre la imagen para que el texto siga siendo legible.

## 2. Agregar un documento nuevo

Abre `js/app.js`, busca el arreglo `DOCUMENTS` y copia un objeto existente:

```js
{ subject:'calculo', folder:'Guías', period:'Periodo 3',
  title:'Nombre del documento', date:'2026-07-01',
  file:'assets/pdf/Calculo/Guias/Periodo-3/nombre-del-documento.pdf' }
```

Luego coloca el PDF real en la ruta indicada por `file`. El documento
aparecerá automáticamente en su materia, carpeta y período — no hay que
modificar el HTML ni el CSS.

## 3. Agregar una materia o carpeta nueva

- Materias nuevas: agrega un objeto al arreglo `SUBJECTS` en `js/app.js`
  (necesita `id`, `name`, `icon`, `color`, `tint`, `desc` y `folders`).
- Para un ícono nuevo, agrega su `<path>` al objeto `ICONS` al inicio del
  archivo, siguiendo el mismo estilo lineal (`viewBox 0 0 24 24`, trazo sin
  relleno) que ya usan las demás materias.
- Carpetas nuevas: agrega el nombre al arreglo `folders` de la materia y,
  si es un tipo de carpeta distinto a Guías/Talleres/Exámenes
  corregidos/Diapositivas, súmalo también a `FOLDER_TYPES`.

## 4. Cambiar el período académico actual

En `js/app.js`, cambia la constante `CURRENT_PERIOD_INDEX` (0 = Periodo 1,
1 = Periodo 2, 2 = Periodo 3, 3 = Periodo 4). El período marcado como
"Actual" se resalta automáticamente en toda la biblioteca.

## Cómo verlo

Simplemente abre `index.html` en el navegador — no requiere servidor ni
instalación de dependencias.
