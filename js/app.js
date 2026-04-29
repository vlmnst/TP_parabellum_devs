(function () {
    const data = window.APP_DATA;
    const app = document.getElementById('app');

    if (!data || !app) {
        return;
    }

    const page = document.body.dataset.page || 'home';

    function createElement(tag, options = {}, children = []) {
        const element = document.createElement(tag);

        if (options.className) {
            element.className = options.className;
        }

        if (options.text) {
            element.textContent = options.text;
        }

        if (options.href) {
            element.href = options.href;
        }

        if (options.src) {
            element.src = options.src;
        }

        if (options.alt) {
            element.alt = options.alt;
        }

        if (options.type) {
            element.type = options.type;
        }

        if (options.ariaLabel) {
            element.setAttribute('aria-label', options.ariaLabel);
        }

        if (options.style) {
            Object.entries(options.style).forEach(([property, value]) => {
                if (property.startsWith('--')) {
                    element.style.setProperty(property, value);
                } else {
                    element.style[property] = value;
                }
            });
        }

        children.forEach((child) => {
            element.append(child);
        });

        return element;
    }

    function getCurrentFile() {
        const file = window.location.pathname.split('/').pop();
        return file || 'index.html';
    }

    function getMemberLinks() {
        return data.members.map((member) => ({
            label: member.name,
            href: `integrante${member.id}.html`
        }));
    }

    function avatarSource(member) {
        if (member.photo) {
            return member.photo;
        }

        const initials = member.name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
                <rect width="320" height="320" rx="28" fill="${member.accent}"/>
                <circle cx="238" cy="78" r="58" fill="#fff" opacity=".18"/>
                <circle cx="80" cy="254" r="74" fill="#0f172a" opacity=".16"/>
                <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
                    font-family="DM Sans, Arial, sans-serif" font-size="90" font-weight="700"
                    fill="#ffffff">${initials}</text>
            </svg>
        `;

        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    }

    function renderShell(content, options = {}) {
        app.replaceChildren(
            renderHeader(options),
            renderNav(),
            createElement('main', { className: 'site-main' }, [content]),
            renderFooter()
        );
    }

    function renderHeader(options = {}) {
        const eyebrow = createElement('p', {
            className: 'eyebrow',
            text: options.eyebrow || data.team.name
        });
        const title = createElement('h1', {
            className: 'hero-title',
            text: options.title || data.team.name
        });
        const copy = createElement('p', {
            className: 'hero-copy',
            text: options.copy || data.team.description
        });

        return createElement('header', { className: 'site-header' }, [
            createElement('div', { className: 'container hero-grid' }, [
                createElement('div', { className: 'hero-content' }, [eyebrow, title, copy]),
                renderHeroStats()
            ])
        ]);
    }

    function renderHeroStats() {
        const stats = [
            { value: data.members.length, label: 'integrantes' },
            { value: data.logEntries.length, label: 'entradas' },
            { value: '100%', label: 'vanilla' }
        ];

        return createElement('dl', { className: 'hero-stats' }, stats.map((stat) => (
            createElement('div', { className: 'stat-item' }, [
                createElement('dt', { text: stat.label }),
                createElement('dd', { text: String(stat.value) })
            ])
        )));
    }

    function renderNav() {
        const current = getCurrentFile();
        const links = [...data.nav, ...getMemberLinks()];

        return createElement('nav', { className: 'site-nav', ariaLabel: 'Navegación principal' }, [
            createElement('div', { className: 'container nav-list' }, links.map((link) => {
                const isActive = current === link.href;
                return createElement('a', {
                    className: `nav-link${isActive ? ' is-active' : ''}`,
                    href: link.href,
                    text: link.label
                });
            }))
        ]);
    }

    function renderFooter() {
        return createElement('footer', { className: 'site-footer' }, [
            createElement('div', { className: 'container footer-inner' }, [
                createElement('p', { text: `© 2026 ${data.team.name}` }),
                createElement('p', { text: 'HTML + CSS + JavaScript vanilla' })
            ])
        ]);
    }

    function renderHome() {
        const content = createElement('div', { className: 'container page-stack' }, [
            createElement('section', { className: 'section-heading' }, [
                createElement('p', { className: 'eyebrow', text: 'Equipo' }),
                createElement('h2', { text: 'Integrantes del proyecto' })
            ]),
            createElement('section', { className: 'member-grid' }, data.members.map(renderMemberCard)),
            renderMessagePanel()
        ]);

        renderShell(content, {
            eyebrow: data.team.tagline,
            title: data.team.name,
            copy: data.team.description
        });
    }

    function renderMemberCard(member) {
        return createElement('a', {
            className: 'member-card',
            href: `integrante${member.id}.html`,
            style: { '--member-accent': member.accent }
        }, [
            createElement('span', { className: 'member-number', text: member.id }),
            createElement('span', { className: 'member-name', text: member.name }),
            createElement('span', {
                className: 'member-meta',
                text: `${member.skills.length} habilidades · ${member.location}`
            })
        ]);
    }

    function renderMessagePanel() {
        const output = createElement('p', { className: 'message-output', text: data.homeMessages[0] });
        const button = createElement('button', {
            className: 'button button-primary',
            type: 'button',
            text: 'Mostrar otro mensaje'
        });
        let messageIndex = 0;

        button.addEventListener('click', () => {
            messageIndex = (messageIndex + 1) % data.homeMessages.length;
            output.classList.remove('is-visible');
            window.setTimeout(() => {
                output.textContent = data.homeMessages[messageIndex];
                output.classList.add('is-visible');
            }, 120);
        });

        window.setTimeout(() => output.classList.add('is-visible'), 100);

        return createElement('section', { className: 'message-panel' }, [
            createElement('div', {}, [
                createElement('p', { className: 'eyebrow', text: 'Interactividad' }),
                createElement('h2', { text: 'Mensajes dinámicos' }),
                output
            ]),
            button
        ]);
    }

    function renderMemberPage() {
        const memberId = document.body.dataset.memberId;
        const member = data.members.find((item) => item.id === memberId);

        if (!member) {
            renderShell(createElement('div', { className: 'container page-stack' }, [
                createElement('h2', { text: 'Integrante no encontrado' })
            ]));
            return;
        }

        document.title = `${member.name} - ${data.team.name}`;

        const content = createElement('div', { className: 'container profile-layout' }, [
            renderProfileAside(member),
            renderProfileDetails(member)
        ]);

        renderShell(content, {
            eyebrow: 'Tarjeta de presentación',
            title: member.name,
            copy: `${member.location} · ${member.age} años`
        });
    }

    function renderProfileAside(member) {
        const photo = createElement('img', {
            className: 'profile-photo',
            src: avatarSource(member),
            alt: `Avatar de ${member.name}`
        });
        const styles = [
            { filter: 'none', borderColor: '#ffffff' },
            { filter: 'grayscale(100%)', borderColor: '#64748b' },
            { filter: 'sepia(85%)', borderColor: '#c4513b' },
            { filter: 'hue-rotate(70deg)', borderColor: '#2f7a5f' },
            { filter: 'saturate(170%)', borderColor: '#7b4fa3' }
        ];
        let styleIndex = 0;

        photo.addEventListener('error', () => {
            photo.src = avatarSource({ ...member, photo: '' });
        });

        const button = createElement('button', {
            className: 'button button-light',
            type: 'button',
            text: 'Cambiar estilo'
        });

        button.addEventListener('click', () => {
            styleIndex = (styleIndex + 1) % styles.length;
            Object.assign(photo.style, styles[styleIndex]);
        });

        return createElement('aside', {
            className: 'profile-aside',
            style: { '--member-accent': member.accent }
        }, [
            photo,
            createElement('div', { className: 'profile-summary' }, [
                createElement('p', { className: 'eyebrow', text: 'Perfil' }),
                createElement('h2', { text: member.name }),
                createElement('p', { text: member.location }),
                createElement('p', { text: `${member.age} años` })
            ]),
            button
        ]);
    }

    function renderProfileDetails(member) {
        const extra = createElement('div', { className: 'extra-info is-hidden' }, [
            createElement('p', { text: member.extra })
        ]);
        const button = createElement('button', {
            className: 'button button-primary',
            type: 'button',
            text: 'Ver más información'
        });

        button.addEventListener('click', () => {
            const isHidden = extra.classList.toggle('is-hidden');
            button.textContent = isHidden ? 'Ver más información' : 'Ocultar información';
        });

        return createElement('article', { className: 'profile-card' }, [
            renderListSection('Habilidades', member.skills),
            renderListSection('Películas favoritas', member.movies),
            renderListSection('Discos favoritos', member.albums),
            button,
            extra
        ]);
    }

    function renderListSection(title, items) {
        return createElement('section', { className: 'info-section' }, [
            createElement('h3', { text: title }),
            createElement('ul', { className: 'tag-list' }, items.map((item) => (
                createElement('li', { text: item })
            )))
        ]);
    }

    function renderLog() {
        const content = createElement('div', { className: 'container page-stack' }, [
            createElement('section', { className: 'section-heading' }, [
                createElement('p', { className: 'eyebrow', text: 'Proceso' }),
                createElement('h2', { text: 'Bitácora de desarrollo' })
            ]),
            createElement('section', { className: 'timeline' }, data.logEntries.map(renderLogEntry))
        ]);

        renderShell(content, {
            eyebrow: data.team.name,
            title: 'Bitácora del proyecto',
            copy: 'Registro de decisiones, dificultades y cambios importantes durante la implementación.'
        });
    }

    function renderLogEntry(entry) {
        return createElement('article', { className: 'timeline-entry' }, [
            createElement('p', { className: 'timeline-date', text: entry.date }),
            createElement('h3', { text: entry.title }),
            renderLogRow('Decisiones de diseño', entry.decisions),
            renderLogRow('Dificultades', entry.challenges),
            renderLogRow('Cambios', entry.changes)
        ]);
    }

    function renderLogRow(label, text) {
        return createElement('p', { className: 'timeline-text' }, [
            createElement('strong', { text: `${label}: ` }),
            document.createTextNode(text)
        ]);
    }

    const routes = {
        home: renderHome,
        member: renderMemberPage,
        log: renderLog
    };

    (routes[page] || renderHome)();
}());
