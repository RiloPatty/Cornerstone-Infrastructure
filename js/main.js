document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Smooth scroll for anchor links (future-proofing)
    // =========================
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // =========================
    // Header shadow on scroll
    // =========================
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
        } else {
            header.style.boxShadow = "none";
        }
    });

});