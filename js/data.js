window.APP_DATA = {
    team: {
        name: 'Grupo 2D',
        tagline: 'Sitio grupal creado con HTML, CSS y JavaScript vanilla.',
        description: 'Presentamos al equipo, sus intereses y el proceso de desarrollo de nuestro trabajo práctico.'
    },
    nav: [
        { label: 'Inicio', href: 'index.html' },
        { label: 'Bitácora', href: 'bitacora.html' }
    ],
    homeMessages: [
        'Bienvenido al proyecto. Cada tarjeta conecta con una página individual del equipo.',
        'Nos interesa construir interfaces claras, ordenadas y fáciles de recorrer.',
        'Todo está construido con HTML, CSS y JavaScript vanilla.',
        'Explorá las páginas de integrantes y la bitácora para ver el avance del trabajo.'
    ],
    members: [
        {
            id: '1',
            name: 'Nico',
            location: 'Rio Hondo, Provincia de Santiago del Estero',
            age: 31,
            photo: '../img/foto_perfil_nico.jpg',
            accent: '#2f7a5f',
            skills: ['HTML semántico', 'CSS responsive', 'JavaScript básico', 'React', 'MySql', 'Trabajo en equipo'],
            movies: ['El señor de los anillos', 'Rocky IV', 'En busca de la felicidad'],
            albums: ['Green River', 'Californication', 'Magos, espadas y rosas'],
            extra: 'Le interesa aprender dia a dia, en distintos grupos de trabajo, creando proyectos concretos y mejorando la forma en que presenta información en la web.'
        },
        {
            id: '2',
            name: 'Valeria',
            location: 'Córdoba, Provincia de Córdoba',
            age: 30,
            photo: '../img/perfil_vale.png',
            accent: '#c4513b',
            skills: ['Pensamiento analítico', 'Orientación a solución', 'Backend'],
            movies: ['El diablo viste a la moda', 'El Club de la Pelea', 'Legalmente Rubia'],
            albums: ['LUX', 'Almendra', 'La vida era mas corta'],
            extra: 'Disfruta salir a patinar, aprender cosas nuevas y compartir experiencias con amigos.'
        },
        {
            id: '3',
            name: 'Integrante 3',
            location: 'Ciudad de residencia',
            age: 20,
            photo: '',
            accent: '#476bb3',
            skills: ['DOM', 'Eventos', 'Testing manual', 'Comunicación'],
            movies: ['Película 1', 'Película 2', 'Película 3'],
            albums: ['Disco 1', 'Disco 2', 'Disco 3'],
            extra: 'Aporta mirada técnica sobre interacciones simples, estados visibles y comportamiento consistente.'
        },
        {
            id: '4',
            name: 'Integrante 4',
            location: 'Ciudad de residencia',
            age: 20,
            photo: '',
            accent: '#a35f16',
            skills: ['Organización', 'CSS Grid', 'Flexbox', 'Documentación'],
            movies: ['Película 1', 'Película 2', 'Película 3'],
            albums: ['Disco 1', 'Disco 2', 'Disco 3'],
            extra: 'Se enfoca en documentar avances, ordenar tareas y sostener una estructura clara del proyecto.'
        },
        {
            id: '5',
            name: 'Integrante 5',
            location: 'Ciudad de residencia',
            age: 20,
            photo: '',
            accent: '#7b4fa3',
            skills: ['Resolución de problemas', 'UI', 'Investigación', 'Presentación'],
            movies: ['Película 1', 'Película 2', 'Película 3'],
            albums: ['Disco 1', 'Disco 2', 'Disco 3'],
            extra: 'Le interesa resolver problemas de presentación y cuidar que el contenido se entienda rápidamente.'
        }
    ],
    logEntries: [
        {
            date: '12 de abril de 2026',
            title: 'Inicio del proyecto',
            decisions: 'Se definió una estructura simple con HTML en la raíz y carpetas separadas para CSS, JS e imágenes.',
            challenges: 'El primer desafío fue mantener las páginas consistentes sin repetir demasiado código.',
            changes: 'Se creó la portada, las páginas individuales y la sección de bitácora.'
        },
        {
            date: '18 de abril de 2026',
            title: 'Interactividad inicial',
            decisions: 'Se agregaron botones para mostrar mensajes, cambiar el estilo de la foto y desplegar información extra.',
            challenges: 'Los scripts de cada integrante repetían la misma lógica.',
            changes: 'Se mantuvo la funcionalidad y se identificó la necesidad de centralizar componentes.'
        },
        {
            date: '25 de abril de 2026',
            title: 'Diseño responsivo',
            decisions: 'Se agregaron propiedades para que la página pueda ser visualizada en los distintos dispositivos.',
            challenges: 'Los elementos no se encontraban correctamente estructurados en las distintas dimensiones.',
            changes: 'Se incorporaron las propiedades para las imágenes y organización de los elementos en la página.'
        },
        {
            date: '28 de abril de 2026',
            title: 'Refactor reutilizable',
            decisions: 'Se separaron los datos del renderizado para que el sitio pueda crecer sin copiar bloques de HTML.',
            challenges: 'Había textos mal codificados y duplicación entre páginas.',
            changes: 'Se incorporaron js/data.js y js/app.js como base común para la portada, integrantes y bitácora.'
        },
        {
            date: '1 de mayo de 2026',
            title: 'Conexión HTML–JavaScript',
            decisions: 'Se decidió eliminar el contenido hardcodeado de los archivos HTML y conectarlos al sistema de datos centralizado.',
            challenges: 'Los HTML tenían contenido estático desincronizado con data.js, lo que obligaba a actualizar varios archivos ante cada cambio.',
            changes: 'Se añadieron los atributos data-page y data-member-id en cada <body>, el contenedor <div id="app"></div> y las etiquetas <script> que cargan data.js y app.js. Ahora todo el contenido lo genera app.js a partir de los datos.'
        }
    ]
};
