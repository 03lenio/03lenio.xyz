if (getCookie("darkModeEnabled") == "1") {
    toggleDarkMode();
}

function toggleDarkMode() {
    if (document.getElementById("fadein") != null) {
        document.getElementById("fadein").classList.toggle("fadein-dark");
    }
    if (document.getElementById("fadeout") != null) {
        document.getElementById("fadeout").classList.toggle("fadeout-dark");
    }
    if (document.getElementsByClassName("tooltiptext")[0] != null) {
        document.getElementsByClassName("tooltiptext")[0].classList.toggle("content-dark");
    }
    let projectCards = document.querySelectorAll(".project-card");
    console.log(projectCards)
    projectCards.forEach(element => {
        element.classList.toggle("project-card-dark");
    });
    document.getElementsByClassName("prev-btn")[0].classList.toggle("prev-btn-dark");
    document.getElementsByClassName("next-btn")[0].classList.toggle("next-btn-dark");    
    document.getElementsByTagName("footer")[0].classList.toggle("content-dark");
    document.getElementById("content").classList.toggle("content-dark");
    document.body.classList.toggle("body-dark");
}

let currentIndex = 0;

function showSlide(index) {
    const container = document.querySelector(".carousel-container");
    const totalSlides = document.querySelectorAll(".project-card").length;

    if (index >= totalSlides) currentIndex = 0; // Loop back to first
    else if (index < 0) currentIndex = totalSlides - 1; // Loop to last
    else currentIndex = index;

    container.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next and Previous functions
function nextSlide() { showSlide(currentIndex + 1); console.log("nigger"); }
function prevSlide() { showSlide(currentIndex - 1); }

// Auto-play feature (optional)
setInterval(nextSlide, 5000); // Change slide every 5 seconds

