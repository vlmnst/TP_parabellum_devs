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
            photoClass: 'profile-photo-custom',
            accent: '#c4513b',
            heroCopy: 'Desarrolladora backend con experiencia en AWS serverless, bases de datos relacionales y no relacionales, enfocada en soluciones escalables e innovadoras.',
            headline: 'Programadora con enfoque en backend, apasionada por investigar y resolver problemas a través de procesos innovadores.',
            quickFacts: [
                'JavaScript · TypeScript · Node.js',
                'AWS: Lambda, API Gateway, OpenSearch, DynamoDB',
                'MySQL · Snowflake · Soluciones escalables'
            ],
            links: [
                { label: 'GitHub', href: 'https://github.com/vlmnst/TP_parabellum_devs' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/valeria-mansueto-dev/' }
            ],
            skills: ['JavaScript', 'TypeScript', 'Node.js', 'AWS', 'MySQL', 'Snowflake'],
            sections: [
                {
                    type: 'intro',
                    title: 'Sobre mí',
                    text: 'Soy Valeria, programadora con un enfoque en backend. Lo que más me gusta de mi trabajo es la oportunidad de investigar, resolver problemas y ayudar a las personas a través de procesos innovadores. He trabajado en diversos proyectos de desarrollo web adquiriendo habilidades en programación, gestión de proyectos y atención al cliente. Me considero una persona comprometida, responsable y enfocada en ofrecer soluciones escalables y fáciles de mantener.'
                },
                {
                    type: 'stack',
                    title: 'Tecnologías que uso',
                    groups: [
                        {
                            name: 'Lenguajes',
                            featured: true,
                            description: 'Lenguajes que uso para construir lógica de negocio, automatizaciones e integraciones.',
                            items: ['JavaScript', 'TypeScript', 'JSON', 'Bash']
                        },
                        {
                            name: 'Cloud & Serverless (AWS)',
                            items: ['Lambda', 'API Gateway', 'OpenSearch', 'DynamoDB']
                        },
                        {
                            name: 'Bases de datos',
                            items: ['MySQL', 'Snowflake']
                        },
                        {
                            name: 'Runtime & Herramientas',
                            items: ['Node.js', 'Git']
                        }
                    ]
                },
                {
                    type: 'focus',
                    title: 'Lo que me define',
                    items: [
                        {
                            name: 'Backend e innovación',
                            text: 'Me especializo en construir lógica de negocio robusta e integraciones entre servicios, siempre buscando soluciones escalables y fáciles de mantener.'
                        },
                        {
                            name: 'Investigación y resolución',
                            text: 'Lo que más disfruto es enfrentar problemas complejos, investigar opciones y encontrar la solución que mejor se adapta al contexto real del proyecto.'
                        },
                        {
                            name: 'Trabajo en equipo',
                            text: 'Me gusta colaborar de manera cercana para alcanzar objetivos comunes, compartir lo aprendido y construir junto a otros.'
                        }
                    ]
                },
                {
                    type: 'flip',
                    title: 'Películas y discos favoritos',
                    frontLabel: '🎬 Película',
                    backLabel: '🎵 Disco',
                    pairs: [
                        { front: 'El Diablo viste a la moda', back: 'LUX' },
                        { front: 'El Club de la Pelea', back: 'Almendra' },
                        { front: 'Legalmente Rubia', back: 'La vida era más corta' }
                    ]
                },
                {
                    type: 'extra',
                    text: 'Estoy completamente comprometida con mi trabajo y me aseguro de brindar lo mejor de mí. Si buscás a alguien capaz de ofrecer soluciones innovadoras y de calidad, estaré encantada de trabajar junto a vos.'
                }
            ]
        },
        {
            id: '3',
            name: 'Anto :)',
            location: 'Córdobaaaaa capiiiiital',
            age: 36,
            photo: './img/anto_tortuga.png',
            accent: '#fb8f14',
            heroCopy: 'Apasionada por la comunicación en todas sus formas. Busco incorporar nuevos conocimientos del mundo IT, siempre con una mirada social y humana.',
            headline: '"Aprender no es prepararse para la vida. Aprender es la vida misma." — John Dewey.',

            links: [
                { label: 'GitHub', href: 'https://github.com/Antocba' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antonellamasini' }

            ],

            sections: [
                {
                    type: 'intro',
                    title: 'Un poco de mí',
                    text: 'Hola! Soy Anto :) Lic. y Prof. en Comunicación Social, Téc. en RR.HH. y actualmente me encuentro en la búsqueda de odiar menos la programación, digo, de aprender cosas nuevas. Actualmente, trabajo como docente y preceptora, lo que me ha ayudado a llevar la paciencia al siguiente nivel. Me gusta el diseño visual y eso lo demuestro en mi emprendimiento "Cosa Nostra Personalizados". Si te gusta tomarte las cosas con humor y charlar un poco de todo, este es el lugar.'
                },

                {
                    type: 'list',
                    title: 'Habilidades',
                    items: ['Comunicación', 'Diseño visual', 'Testing manual', 'Desarrollo móvil']
                },

                {
                    type: 'focus',
                    title: 'Películas',
                    items: [
                        {
                            name: 'El Padrino',
                            text: 'Clásico del cine sobre la poderosa familia mafiosa Corleone y la lucha por el poder, el honor y la lealtad.',
                            puntaje: '⭐⭐⭐⭐⭐',
                        },
                        {
                            name: 'Scarface',
                            text: 'Biografía de un hombre que busca el poder y la fortuna en el mundo del crimen organizado.',
                            puntaje: '⭐⭐⭐⭐'
                        },
                        {
                            name: 'Snatch',
                            text: 'Comedia oscura sobre un robo fallido y sus consecuencias.',
                            puntaje: '⭐⭐⭐'
                        }
                    ]
                }


            ],

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
