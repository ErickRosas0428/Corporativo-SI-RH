// Array de miembros del equipo
const teamMembers = [
    {
        name: 'Mike Towers',
        title: 'Gerente Comercial',
        quote: 'Atraemos el talento que tu empresa necesita para crecer.',
        image: 'img/Profile-Man.webp',
        socialLinks: {
            facebook: '#',
            twitter: '#',
            linkedin: '#',
        }
    },
    {
        name: 'Angela Ferrer',
        title: 'Gerente de Recursos Humanos',
        quote: 'El talento humano es el motor del desarrollo empresarial exitoso.',
        image: 'img/Profile-Women.webp',
        socialLinks: {
            facebook: '#',
            twitter: '#',
            linkedin: '#',
        }
    },
    {
        name: 'Michael Ross',
        title: 'Gerente de Nóminas',
        quote: 'Administrar bien los recursos es construir un futuro sólido.',
        image: 'img/Profile-Man.webp',
        socialLinks: {
            facebook: '#',
            twitter: '#',
            linkedin: '#',
        }
    }
];

// Función para crear una tarjeta de miembro del equipo
function createTeamMemberCard({ name, title, quote, image, socialLinks }) {
    const memberCard = document.createElement('div');
    memberCard.className = 'col-lg-4 col-md-6 mb-4';

    memberCard.innerHTML = `
        <div class="card border-0 shadow-lg">
            <div class="card-body text-center">
                <img src="${image}" alt="${name}" class="img-fluid rounded-circle mb-3" style="width: 150px; height: 150px;">
                <h5 class="card-title">${name}</h5>
                <p class="card-text bg-primary text-white">${title}</p>
                <p class="text-muted">"${quote}"</p>
                <div class="social-icons bg-secondary">
                    <a href="${socialLinks.facebook}"><i class="bi bi-facebook me-2 text-white"></i></a>
                    <a href="${socialLinks.twitter}"><i class="bi bi-twitter me-2 text-white"></i></a>
                    <a href="${socialLinks.linkedin}"><i class="bi bi-linkedin text-white"></i></a>
                </div>
            </div>
        </div>
    `;

    return memberCard;
}

// Función para mostrar los miembros del equipo
function displayTeamMembers() {
    const container = document.querySelector('.row.text-center.mb-5.our'); // Selector del contenedor
    teamMembers.forEach(member => {
        const memberCard = createTeamMemberCard(member);
        container.appendChild(memberCard);
    });
}

// Llamar a la función para mostrar los miembros del equipo
displayTeamMembers();
