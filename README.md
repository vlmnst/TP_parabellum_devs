# Grupo 2D - Proyecto Web

Sitio web grupal desarrollado como trabajo práctico con HTML, CSS y JavaScript vanilla. Incluye portada, páginas individuales para cada integrante y una bitácora del proceso de desarrollo.

## Estructura

```text
/
|-- index.html
|-- bitacora.html
|-- integrante1.html
|-- integrante2.html
|-- integrante3.html
|-- integrante4.html
|-- integrante5.html
|-- css/
|   `-- styles.css
|-- js/
|   |-- data.js
|   `-- app.js
|-- img/
`-- README.md
```

## Cómo está reutilizado

- `js/data.js`: contiene el nombre del equipo, integrantes, habilidades, películas, discos, mensajes y entradas de bitácora.
- `js/app.js`: contiene los renderizadores reutilizables para portada, tarjetas, perfiles, navegación, pie de página y bitácora.
- `css/styles.css`: define variables, componentes visuales y breakpoints para 400px, 900px y 1200px.
- Cada página HTML solo declara la vista con `data-page`. Las páginas de integrantes además declaran `data-member-id`.

## Funciones JavaScript

- Portada: botón que rota mensajes dinámicos.
- Páginas de integrantes: botón para cambiar el estilo visual del avatar.
- Páginas de integrantes: botón para mostrar u ocultar información adicional.
- Navegación: se genera desde los datos y marca automáticamente la página activa.

## Cómo personalizar

Para cambiar nombres, edades, ubicación, habilidades, películas, discos, colores o textos extra, editar los objetos dentro de `js/data.js`.

Para agregar una foto real o avatar externo a un integrante, completar su propiedad `photo`, por ejemplo:

```js
photo: 'img/avatar1.png'
```

Si `photo` queda vacío, el sitio genera un avatar con iniciales para evitar imágenes rotas.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts
