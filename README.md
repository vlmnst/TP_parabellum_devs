# NOMBRE DE EQUIPO - Proyecto Web

## Descripción del Proyecto

Este proyecto es un sitio web grupal desarrollado como trabajo práctico para presentar a los integrantes de un equipo de desarrollo web. El sitio incluye una portada principal, páginas individuales para cada integrante con tarjetas de presentación, y una bitácora del proceso de desarrollo.

### Estructura del Proyecto

```
/
├── index.html              # Portada principal
├── bitacora.html         # Bitácora del proyecto
├── integrante1.html     # Página de Integrante 1
├── integrante2.html     # Página de Integrante 2
├── integrante3.html     # Página de Integrante 3
├── integrante4.html     # Página de Integrante 4
├── integrante5.html     # Página de Integrante 5
├── css/
│   └── styles.css       # Estilos globales
├── js/
│   ├── main.js          # Funciones de la portada
│   ├── integrante1.js   # Funciones de Integrante 1
│   ├── integrante2.js  # Funciones de Integrante 2
│   ├── integrante3.js  # Funciones de Integrante 3
│   ├── integrante4.js  # Funciones de Integrante 4
│   └── integrante5.js  # Funciones de Integrante 5
├── img/
│   └── # Imágenes del proyecto
└── README.md           # Este archivo
```

### Características

- **Diseño Responsivo**: El sitio se adapta a diferentes tamaños de pantalla (400px, 900px, 1200px)
- **Tipografía**: Google Fonts - Poppins
- **Navegación**: Botones de navegación en todas las páginas
- **Interactividad**: Funciones JavaScript en cada página

### Funciones JavaScript

#### Portada (main.js)
- **Mensaje de Bienvenida**: Al hacer clic en el botón "¡Dale clic para conocer más!", se muestra un mensaje de bienvenida diferente cada vez. Los mensajes rotan entre 4 opciones que dan la bienvenida al sitio y motivan a explorar las tarjetas de los integrantes.

#### Páginas de Integrantes (integranteX.js)
- **Cambiar Estilo de Foto**: Al hacer clic en el botón "Cambiar estilo", la foto del perfil aplica diferentes filtros (escala de grises, sepia, saturación, etc.) y cambia el color del borde.
- **Mostrar/Ocultar Información**: Al hacer clic en el botón "Ver más información", se despliega u oculta información adicional del integrante.

### Tecnologías Utilizadas

- HTML5
- CSS3 (con Variables CSS, Flexbox, Grid)
- JavaScript (Vanilla)
- Google Fonts

### Cómo Personalizar

1.替换 `index.html` 中的 " NOMBRE DE EQUIPO" 为团队名称
2.替换 各页面中的 "Integrante X" 为真实姓名
3.替换 中的 "Ciudad de Residence" 为实际城市
4.替换 年龄和其他信息
5.在 `img/` 文件夹中添加头像图片

### Repositorio y Publicación

- **GitHub**: Crear un repositorio y subir el proyecto
- **Vercel**: Publicar el sitio en la nube

---
&copy; 2026 NOMBRE DE EQUIPO - Todos los derechos reservados