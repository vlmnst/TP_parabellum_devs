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

### Portada (`index.html`)

| Función              | Descripción                                                                                                                                                      | Sección                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Rotación de mensajes | Un botón cicla por una lista de mensajes del equipo. Cada clic oculta el texto actual con una transición de opacidad y muestra el siguiente mensaje de la lista. | Panel "Mensajes dinámicos" |

### Perfil de Valeria (`integrante2.html`)

| Función                       | Descripción                                                                                                                                                                                       | Sección                                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Cambiar estilo de foto        | Un botón recorre un ciclo de 5 filtros CSS aplicados sobre la foto de perfil: sin filtro, escala de grises, sépia, rotación de tono y saturación aumentada. Cada clic avanza al siguiente estilo. | Columna izquierda del perfil           |
| Flip cards películas / discos | Tres cards generadas dinámicamente por JavaScript con efecto de giro 3D al pasar el mouse. El frente muestra una película favorita y el dorso muestra un disco favorito.                          | Sección "Películas y discos favoritos" |

## Cómo personalizar

Para cambiar nombres, edades, ubicación, habilidades, películas, discos, colores o textos extra, editar los objetos dentro de `js/data.js`.

Para agregar una foto real o avatar externo a un integrante, completar su propiedad `photo`, por ejemplo:

```js
photo: "img/avatar1.png";
```

Si `photo` queda vacío, el sitio genera un avatar con iniciales para evitar imágenes rotas.

## Perfil enriquecido (secciones personalizadas)

Cada integrante puede definir su propia estructura de contenido agregando el array `sections` en su entrada de `js/data.js`. Si no se define, el perfil usa el formato estándar (habilidades, películas, discos e info extra).

### Campos opcionales del perfil

| Campo        | Tipo              | Descripción                                                               |
| ------------ | ----------------- | ------------------------------------------------------------------------- |
| `cardMeta`   | string            | Texto en la tarjeta de la portada (por defecto: `N habilidades · ciudad`) |
| `heroCopy`   | string            | Subtítulo del header en la página del integrante                          |
| `photoClass` | string            | Clase CSS extra para la foto (ej. `'profile-photo-custom'`)               |
| `headline`   | string            | Frase breve bajo el nombre en la columna izquierda                        |
| `quickFacts` | string[]          | Lista de bullet points bajo el headline                                   |
| `links`      | `{label, href}[]` | Botones de links externos (GitHub, LinkedIn, portfolio, etc.)             |
| `sections`   | array             | Secciones de contenido del área principal (ver abajo)                     |

### Tipos de sección disponibles

#### `intro` — Párrafo de presentación

```js
{ type: 'intro', title: 'Sobre mí', text: 'Descripción libre...' }
```

#### `list` — Lista de tags (habilidades, películas, etc.)

```js
{ type: 'list', title: 'Habilidades', items: ['HTML', 'CSS', 'JavaScript'] }
```

#### `stack` — Grilla de tecnologías con grupos

```js
{
    type: 'stack',
    title: 'Tecnologías que uso',
    groups: [
        {
            name: 'Lenguajes',
            featured: true,            // ocupa el ancho completo de la grilla
            description: 'Texto opcional debajo del título del grupo.',
            items: ['Python', 'JavaScript', 'SQL']
        },
        {
            name: 'Frameworks',
            items: ['React', 'Express', 'Django']
        }
    ]
}
```

#### `projects` — Grilla de proyectos con links

```js
{
    type: 'projects',
    title: 'Proyectos destacados',
    items: [
        {
            name: 'Nombre del proyecto',
            meta: 'Stack usado',
            description: 'Descripción breve del proyecto.',
            href: 'https://mi-proyecto.com',    // null si no tiene link aún
            linkLabel: 'Ver proyecto'            // o 'Proyecto en evolución', etc.
        }
    ]
}
```

#### `focus` — Grilla de especialidades o áreas de interés

```js
{
    type: 'focus',
    title: 'Especialidades',
    items: [
        { name: 'Backend', text: 'Descripción de la especialidad.' },
        { name: 'Frontend', text: 'Descripción de la especialidad.' }
    ]
}
```

#### `extra` — Bloque de cierre (visible, sin toggle)

```js
{ type: 'extra', text: 'Texto final visible, sin botón de "ver más".' }
```

### Ejemplo mínimo de perfil enriquecido

```js
{
    id: '2',
    name: 'Mi Nombre',
    location: 'Buenos Aires',
    age: 25,
    photo: 'img/mi-foto.jpg',
    accent: '#476bb3',
    cardMeta: 'Frontend · UX',
    headline: 'Desarrolladora frontend con foco en accesibilidad.',
    quickFacts: ['HTML, CSS, JavaScript', 'Interés en diseño de interfaces'],
    links: [
        { label: 'GitHub', href: 'https://github.com/mi-usuario' }
    ],
    skills: ['HTML', 'CSS', 'JavaScript'],
    sections: [
        { type: 'intro', title: 'Sobre mí', text: 'Descripción...' },
        { type: 'list', title: 'Habilidades', items: ['HTML', 'CSS', 'JavaScript'] },
        { type: 'extra', text: 'Texto de cierre.' }
    ]
}
```

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts
