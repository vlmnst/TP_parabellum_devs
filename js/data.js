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
            name: 'Integrante 2',
            location: 'Ciudad de residencia',
            age: 20,
            photo: '',
            accent: '#c4513b',
            skills: ['Maquetación', 'Accesibilidad', 'Diseño visual', 'Git'],
            movies: ['Película 1', 'Película 2', 'Película 3'],
            albums: ['Disco 1', 'Disco 2', 'Disco 3'],
            extra: 'Disfruta combinar organización visual con detalles prácticos que hagan más agradable navegar el sitio.'
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
            decisions: 'Se agregaron propiedades para que la pagina pueda ser visualizada en los distintos dispositivos.',
            challenges: 'Los elementos no se encontraban correctamente estructirados en las distintas dimensiones.',
            changes: 'Se incorporaron las propiedades para las imagenes y organizacion de los elementos en la pagina    .'
        },
        {
            date: '28 de abril de 2026',
            title: 'Refactor reutilizable',
            decisions: 'Se separaron los datos del renderizado para que el sitio pueda crecer sin copiar bloques de HTML.',
            challenges: 'Había textos mal codificados y duplicación entre páginas.',
            changes: 'Se incorporaron js/data.js y js/app.js como base común para la portada, integrantes y bitácora.'
        }
    ]
};
