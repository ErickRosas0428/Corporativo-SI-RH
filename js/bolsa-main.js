// Array de empleos
const jobs = [
    {
        title: 'Jobs - 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis saepe minus commodi, eveniet et, quas expedita sequi dolorem modi sint nam ullam facilis esse obcaecati animi reprehenderit. Dolorum, accusamus.',
        link: 'empleos/empleo1.html',
        backgroundClass: 'bg-trab1',
    },
    {
        title: 'Jobs - 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis saepe minus commodi, eveniet et, quas expedita sequi dolorem modi sint nam ullam facilis esse obcaecati animi reprehenderit. Dolorum, accusamus.',
        link: 'empleos/empleo1.html',
        backgroundClass: 'bg-trab2',
    },
    {
        title: 'Jobs - 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis saepe minus commodi, eveniet et, quas expedita sequi dolorem modi sint nam ullam facilis esse obcaecati animi reprehenderit. Dolorum, accusamus.',
        link: 'empleos/empleo1.html',
        backgroundClass: 'bg-trab3',
    },
    {
        title: 'Jobs - 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis saepe minus commodi, eveniet et, quas expedita sequi dolorem modi sint nam ullam facilis esse obcaecati animi reprehenderit. Dolorum, accusamus.',
        link: 'empleos/empleo1.html',
        backgroundClass: 'bg-trab4',
    },
    {
        title: 'Jobs - 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis saepe minus commodi, eveniet et, quas expedita sequi dolorem modi sint nam ullam facilis esse obcaecati animi reprehenderit. Dolorum, accusamus.',
        link: 'empleos/empleo1.html',
        backgroundClass: 'bg-trab5',
    },
    {
        title: 'Jobs - 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis saepe minus commodi, eveniet et, quas expedita sequi dolorem modi sint nam ullam facilis esse obcaecati animi reprehenderit. Dolorum, accusamus.',
        link: 'empleos/empleo1.html',
        backgroundClass: 'bg-trab6',
    },
    {
        title: 'Jobs - 7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis saepe minus commodi, eveniet et, quas expedita sequi dolorem modi sint nam ullam facilis esse obcaecati animi reprehenderit. Dolorum, accusamus.',
        link: 'empleos/empleo1.html',
        backgroundClass: 'bg-trab7',
    },
    {
        title: 'Jobs - 8',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis saepe minus commodi, eveniet et, quas expedita sequi dolorem modi sint nam ullam facilis esse obcaecati animi reprehenderit. Dolorum, accusamus.',
        link: 'empleos/empleo1.html',
        backgroundClass: 'bg-trab8',
    },
];

// Función para generar una tarjeta de empleo
function createJobCard({ title, description, link, backgroundClass }) {
    const jobCard = document.createElement('div');
    jobCard.className = `col-12 col-md-6 col-lg-3 d-flex`;

    jobCard.innerHTML = `
        <div class="card bg-light shadow-sm border-0 px-2 py-3 mb-4 jobs-cards ${backgroundClass}">
            <div class="card-body bg-transparent">
                <h5 class="card-title mb-3 py-3 text-white">${title}</h5>
                <p class="text-white">${description}</p>
                <a href="${link}" class="btn btn-primary">Saber más</a>
            </div>
        </div>
    `;

    return jobCard;
}

// Función para mostrar los empleos
function displayJobs() {
    const container = document.getElementById('jobs-container');
    jobs.forEach(job => {
        const jobCard = createJobCard(job);
        container.appendChild(jobCard);
    });
}

// Llamar a la función para mostrar los empleos
displayJobs();

