// Carrousel
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-btn.next");
    const prevButton = document.querySelector(".carousel-btn.prev");

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides side by side
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + "px";
    });

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    };

    // Click Next Button
    nextButton.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide") || slides[0];
        const nextSlide = currentSlide.nextElementSibling || slides[0];
        moveToSlide(track, currentSlide, nextSlide);
    });

    // Click Prev Button
    prevButton.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide") || slides[0];
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
        moveToSlide(track, currentSlide, prevSlide);
    });
});

// Fenêtre modale d'informations sur les animés
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("anime-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalSummary = document.getElementById("modal-summary");
    const modalSeasons = document.getElementById("modal-seasons");
    const modalEpisodes = document.getElementById("modal-episodes");
    const closeBtn = document.querySelector(".close-btn");
    const animeElements = document.querySelectorAll(".anime");

    // Ouvrir la modale au clic sur une image
    animeElements.forEach(anime => {
        anime.addEventListener("click", () => {
            const title = anime.dataset.title;
            const summary = anime.dataset.summary;
            const seasons = anime.dataset.seasons;
            const episodes = anime.dataset.episodes;

            modalTitle.textContent = title;
            modalSummary.textContent = summary;
            modalSeasons.textContent = seasons;
            modalEpisodes.textContent = episodes;

            modal.style.display = "flex"; // Afficher la modale
        });
    });

    // Fermer la modale au clic sur le bouton de fermeture
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fermer la modale en cliquant en dehors de la boîte de contenu
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
