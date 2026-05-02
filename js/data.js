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
            name: 'Guillermo Novillo',
            location: 'Argentina',
            age: 20,
            photo: 'img/gui.png',
            photoClass: 'profile-photo-custom',
            accent: '#a35f16',
            heroCopy: 'Desarrollador Full Stack con experiencia construyendo soluciones web y de escritorio, integrando backend, frontend y bases de datos para convertir ideas en proyectos reales.',
            headline: 'Desarrollador Full Stack enfocado en backend, aplicaciones de gestion e integraciones entre software, datos y procesos.',
            cardMeta: 'Full Stack | Backend | Desktop',
            quickFacts: [
                'Python, JavaScript, C# y SQL',
                'Experiencia con Node.js, Django, React y Electron',
                'Interes en seguridad, automatizacion y agentes de IA'
            ],
            links: [
                { label: 'GitHub', href: 'https://github.com/guinovi' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/guillermo-novillo-551367144/' }
            ],
            skills: ['Python', 'JavaScript', 'C#', 'SQL', 'Node.js', 'Electron'],
            sections: [
                {
                    type: 'intro',
                    title: 'Sobre mi',
                    text: 'Soy un desarrollador con un enfoque integral del software. Me interesa especialmente la logica de backend, la arquitectura de sistemas y la posibilidad de conectar interfaces, datos y procesos en soluciones utiles. Disfruto aprender tecnologias nuevas, resolver problemas concretos y llevar ideas desde la etapa inicial hasta una implementacion funcional.'
                },
                {
                    type: 'stack',
                    title: 'Tecnologias que uso',
                    groups: [
                        {
                            name: 'Lenguajes',
                            featured: true,
                            description: 'Base principal para desarrollar interfaces, logica de negocio, automatizaciones y aplicaciones orientadas a escritorio y web.',
                            items: ['Python', 'JavaScript', 'C#', 'SQL', 'HTML', 'CSS', 'JSON', 'Bash']
                        },
                        {
                            name: 'Frameworks y APIs',
                            items: ['Django', 'FastAPI', 'Pandas', 'React', 'Express', 'Bootstrap', 'jQuery', 'DataTables.js', 'pdfmake']
                        },
                        {
                            name: 'Bases de datos',
                            items: ['MySQL', 'PostgreSQL', 'Oracle', 'SQLite', 'sqlite3']
                        },
                        {
                            name: 'Herramientas y tecnologias',
                            items: ['Node.js', 'Git', 'Electron', 'bcrypt', 'jsonwebtoken', 'Seguridad de la informacion', 'CCNA 1']
                        }
                    ]
                },
                {
                    type: 'projects',
                    title: 'Proyectos destacados',
                    items: [
                        {
                            name: 'MGSEG',
                            meta: 'Vanilla JS | HTML | CSS',
                            description: 'Sitio informativo para un emprendimiento de camaras de seguridad, pensado para presentar servicios y generar confianza visual.',
                            href: 'https://guinovi.github.io/mgseg/'
                        },
                        {
                            name: 'Juegos Clasicos',
                            meta: 'React',
                            description: 'Tateti y 4 en linea desarrollados con logica de estados, componentes reutilizables y una interfaz clara para jugar.',
                            href: 'https://jugando-js.netlify.app/'
                        },
                        {
                            name: 'CRUD Login',
                            meta: 'Node.js | Express | SQLite',
                            description: 'Sistema de autenticacion y gestion con foco en rutas protegidas, persistencia de datos y una base solida para crecer.',
                            href: 'https://crud-login-murex.vercel.app/'
                        },
                        {
                            name: 'Software de Gestion',
                            meta: 'Electron | Node.js | SQLite3',
                            description: 'Aplicacion de escritorio en fase de prueba con formularios, reportes PDF y herramientas pensadas para tareas administrativas.',
                            linkLabel: 'Proyecto en evolucion'
                        }
                    ]
                },
                {
                    type: 'focus',
                    title: 'Especialidades',
                    items: [
                        {
                            name: 'Backend y autenticacion',
                            text: 'Desarrollo de logica, integracion con bases de datos y sistemas de acceso con una mirada puesta en estructura, seguridad y mantenimiento.'
                        },
                        {
                            name: 'Aplicaciones web y desktop',
                            text: 'Experiencia construyendo tanto interfaces web como herramientas de escritorio, adaptando cada solucion al contexto de uso real.'
                        },
                        {
                            name: 'Vision integral',
                            text: 'Mi experiencia en mantenimiento y reparacion de PCs me aporta una perspectiva amplia para conectar hardware, software y experiencia de usuario.'
                        }
                    ]
                },
                {
                    type: 'extra',
                    text: 'Tambien disfruto colaborar, compartir lo que aprendo y seguir perfeccionando mis habilidades con proyectos propios. Hoy sigo profundizando en nuevas tecnologias, seguridad e integracion de agentes inteligentes dentro de flujos de trabajo reales.'
                }
            ]
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
