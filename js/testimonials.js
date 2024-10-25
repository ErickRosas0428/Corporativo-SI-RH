document.addEventListener("DOMContentLoaded", function() {
    const testimonials = [
        {
            name: "John Doe",
            image: "https://via.placeholder.com/80",
            stars: 4.5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quaerat.",
            designation: "CEO, Example Co."
        },
        {
            name: "Jane Smith",
            image: "https://via.placeholder.com/80",
            stars: 4.5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quaerat.",
            designation: "Marketing Head, XYZ Inc."
        },
        {
            name: "Emily Johnson",
            image: "https://via.placeholder.com/80",
            stars: 4.5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quaerat.",
            designation: "Developer, Web Solutions"
        },
        {
            name: "Emily Johnson",
            image: "https://via.placeholder.com/80",
            stars: 4.5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quaerat.",
            designation: "Developer, Web Solutions"
        },

    ];

    const carousel = document.querySelector(".owl-carousel");

    testimonials.forEach(({ name, image, stars, quote, designation }) => {
        const testimonial = document.createElement("div");
        testimonial.classList.add("testimonial-item");
        
        testimonial.innerHTML = `
            <div class="stars">${generateStars(stars)}</div>
            <h3>${name}</h3>
            <p>${quote}</p>
            <div class="designation">${designation}</div>
        `;
        
        carousel.appendChild(testimonial);
    });

    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0 ? `<i class="fas fa-star-half-alt text-center"></i>` : '';
        return '<i class="fas fa-star text-center"></i>'.repeat(fullStars) + halfStar;
    }

    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
            "<i class='fa fa-arrow-left' aria-hidden='true'></i>",
            "<i class='fa fa-arrow-right' aria-hidden='true'></i>"
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1000: { items: 3 }
        }
    });
});

