const CONFIG = {
    eventDate: "2026-10-31T21:00:00-03:00",

    mapsLink: "https://maps.app.goo.gl/5uuuT4VhBRKXMNh69",

    whatsappLink: "https://wa.me/1234567890",

    gallery: [
        "foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg",
        "foto5.jpg",
        "foto6.jpg"
    ]
};


const app = document.getElementById("app");

/* Siempre comenzar la invitación desde arriba */
window.scrollTo(0, 0);


/* =========================================================
   PORTADA
========================================================= */

const cover = document.createElement("section");

cover.className = "cover";

cover.innerHTML = `
    <div class="cover-background"></div>

    <div class="cover-flag"></div>

    <div class="cover-spark spark-1"></div>
    <div class="cover-spark spark-2"></div>
    <div class="cover-spark spark-3"></div>

    <div class="cover-content">

        <div class="cover-stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
        </div>

        <p class="cover-small">MIS</p>

        <div class="cover-number">18</div>

        <h1>FACUNDO</h1>

        <div class="cover-date">
            31 · 10 · 2026
        </div>

        <div class="cover-line"></div>

        <p class="cover-bottom">
            UNA NOCHE ESPECIAL
        </p>

    </div>
`;

app.appendChild(cover);


/* =========================================================
   PÁGINA PRINCIPAL
========================================================= */

const mainPage = document.createElement("main");

mainPage.className = "main-page";

mainPage.style.opacity = "0";
mainPage.style.pointerEvents = "none";

app.appendChild(mainPage);


/* =========================================================
   DECORACIÓN DE FONDO
========================================================= */

const backgroundGlow = document.createElement("div");

backgroundGlow.className = "background-glow";

mainPage.appendChild(backgroundGlow);


const backgroundGlow2 = document.createElement("div");

backgroundGlow2.className = "background-glow glow-two";

mainPage.appendChild(backgroundGlow2);


const backgroundSweep = document.createElement("div");

backgroundSweep.className = "background-sweep";

mainPage.appendChild(backgroundSweep);


const diagonalLines = document.createElement("div");

diagonalLines.className = "diagonal-lines";

mainPage.appendChild(diagonalLines);


/* =========================================================
   BANDERAS
========================================================= */

const argentinaFlag = document.createElement("div");

argentinaFlag.className = "argentina-flag";

argentinaFlag.innerHTML = `
    <div class="flag-sun"></div>
`;

mainPage.appendChild(argentinaFlag);


const argentinaFlag2 = document.createElement("div");

argentinaFlag2.className = "argentina-flag flag-two";

argentinaFlag2.innerHTML = `
    <div class="flag-sun"></div>
`;

mainPage.appendChild(argentinaFlag2);


/* =========================================================
   FÚTBOL
========================================================= */

const football = document.createElement("div");

football.className = "football-decor";

football.innerHTML = `
    <div class="football-center"></div>

    <div class="football-line line-a"></div>
    <div class="football-line line-b"></div>
    <div class="football-line line-c"></div>
    <div class="football-line line-d"></div>
`;

mainPage.appendChild(football);


/* =========================================================
   DESTELLOS
========================================================= */

const sparkleContainer = document.createElement("div");

sparkleContainer.className = "gold-sparkles";

for (let i = 1; i <= 8; i++) {

    const sparkle = document.createElement("span");

    sparkle.className = `gold-spark sparkle-${i}`;

    sparkleContainer.appendChild(sparkle);
}

mainPage.appendChild(sparkleContainer);


/* =========================================================
   SEPARADORES
========================================================= */

function createSectionSeparator() {

    const separator = document.createElement("div");

    separator.className = "section-separator";

    separator.innerHTML = `
        <span class="separator-line"></span>

        <div class="separator-stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
        </div>

        <span class="separator-line"></span>
    `;

    return separator;
}


/* =========================================================
   BIENVENIDA
========================================================= */

const welcome = document.createElement("section");

welcome.className = "welcome section";

welcome.innerHTML = `
    <div class="welcome-content">

        <div class="mini-badge">
            18 AÑOS
        </div>

        <h2>
            UNA NOCHE<br>
            <span>ESPECIAL</span>
        </h2>

        <p>
            Hay momentos que merecen ser celebrados
            y compartidos con quienes más queremos.
        </p>

    </div>
`;

mainPage.appendChild(welcome);

mainPage.appendChild(createSectionSeparator());


/* =========================================================
   CUENTA REGRESIVA
========================================================= */

const countdownSection = document.createElement("section");

countdownSection.className = "countdown-section section";

countdownSection.innerHTML = `
    <p class="section-kicker">
        FALTA MUY POCO
    </p>

    <h2>
        La cuenta regresiva
    </h2>

    <div class="countdown">

        <div class="count-box">
            <strong id="days">00</strong>
            <span>DÍAS</span>
        </div>

        <div class="count-box">
            <strong id="hours">00</strong>
            <span>HORAS</span>
        </div>

        <div class="count-box">
            <strong id="minutes">00</strong>
            <span>MINUTOS</span>
        </div>

        <div class="count-box">
            <strong id="seconds">00</strong>
            <span>SEGUNDOS</span>
        </div>

    </div>
`;

mainPage.appendChild(countdownSection);

mainPage.appendChild(createSectionSeparator());


/* =========================================================
   DATOS DEL EVENTO
========================================================= */

const eventSection = document.createElement("section");

eventSection.className = "event-section section";

eventSection.innerHTML = `
    <p class="section-kicker">
        TODO LISTO
    </p>

    <h2>
        Datos del evento
    </h2>

    <div class="event-grid">

        <div class="event-card">
            <div class="event-label">
                FECHA
            </div>

            <div class="event-value">
                31 DE OCTUBRE
            </div>
        </div>

        <div class="event-card">
            <div class="event-label">
                HORA
            </div>

            <div class="event-value">
                21:00 HS
            </div>
        </div>

        <div class="event-card">
            <div class="event-label">
                DRESS CODE
            </div>

            <div class="event-value">
                ELEGANTE SPORT
            </div>
        </div>

    </div>
`;

mainPage.appendChild(eventSection);

mainPage.appendChild(createSectionSeparator());


/* =========================================================
   UBICACIÓN
========================================================= */

const locationSection = document.createElement("section");

locationSection.className = "location-section section";

locationSection.innerHTML = `
    <p class="section-kicker">
        NOS ENCONTRAMOS EN
    </p>

    <h2>
        Quinta de los<br>
        <span>Tres Hermanos</span>
    </h2>

    <p class="location-text">
        Prepará todo para una noche increíble.
    </p>

    <a
        class="main-button location-button"
        href="${CONFIG.mapsLink}"
        target="_blank"
        rel="noopener noreferrer"
    >
        <span>VER UBICACIÓN</span>
        <b>↗</b>
    </a>
`;

mainPage.appendChild(locationSection);

mainPage.appendChild(createSectionSeparator());


/* =========================================================
   GALERÍA
========================================================= */

const gallerySection = document.createElement("section");

gallerySection.className = "gallery-section section";

gallerySection.innerHTML = `
    <p class="section-kicker">
        MOMENTOS
    </p>

    <h2>
        Galería
    </h2>

    <div class="gallery-carousel">

        <div class="gallery-track"></div>

    </div>

    <div class="gallery-dots"></div>
`;

mainPage.appendChild(gallerySection);


const galleryTrack =
    gallerySection.querySelector(".gallery-track");

const galleryDots =
    gallerySection.querySelector(".gallery-dots");


CONFIG.gallery.forEach((photo, index) => {

    const slide = document.createElement("div");

    slide.className = "gallery-slide";

    slide.innerHTML = `
        <img
            src="${photo}"
            alt="Imagen de la galería"
            loading="${index === 0 ? "eager" : "lazy"}"
        >
    `;

    galleryTrack.appendChild(slide);


    const dot = document.createElement("button");

    dot.type = "button";

    dot.className =
        `gallery-dot ${index === 0 ? "active" : ""}`;

    dot.setAttribute(
        "aria-label",
        `Ver foto ${index + 1}`
    );

    galleryDots.appendChild(dot);
});


mainPage.appendChild(createSectionSeparator());


/* =========================================================
   CONFIRMACIÓN
========================================================= */

const confirmationSection =
    document.createElement("section");

confirmationSection.className =
    "confirmation-section section";

confirmationSection.innerHTML = `
    <div class="confirmation-stars">
        <span>★</span>
        <span>★</span>
        <span>★</span>
    </div>

    <p class="section-kicker">
        TE ESPERO
    </p>

    <h2>
        Los 18 se viven<br>
        <span>una sola vez</span>
    </h2>

    <p>
        Confirmá tu asistencia y preparate para
        compartir esta noche conmigo.
    </p>

    <a
        class="main-button whatsapp-button"
        href="${CONFIG.whatsappLink}"
        target="_blank"
        rel="noopener noreferrer"
    >
        <span>CONFIRMAR ASISTENCIA</span>
        <b>↗</b>
    </a>
`;

mainPage.appendChild(confirmationSection);


/* =========================================================
   FOOTER
========================================================= */

const footer = document.createElement("footer");

footer.innerHTML = `
    <div class="footer-stars">
        <span>★</span>
        <span>★</span>
        <span>★</span>
    </div>

    <div class="footer-number">
        18
    </div>

    <p>
        FACUNDO · 2026
    </p>

    <small>
        Nos vemos en la fiesta.
    </small>
`;

mainPage.appendChild(footer);


/* =========================================================
   CUENTA REGRESIVA
========================================================= */

const targetDate =
    new Date(CONFIG.eventDate).getTime();


function updateCountdown() {

    const now = Date.now();

    const difference =
        targetDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================================
   CARRUSEL DE GALERÍA
========================================================= */

const gallerySlides =
    gallerySection.querySelectorAll(".gallery-slide");

const galleryDotButtons =
    gallerySection.querySelectorAll(".gallery-dot");

let currentGalleryIndex = 0;

let galleryAutoPlay = null;

let touchStartX = 0;

let touchEndX = 0;


function showGallerySlide(index, animate = true) {

    if (!gallerySlides.length) {
        return;
    }


    if (index < 0) {
        index = gallerySlides.length - 1;
    }

    if (index >= gallerySlides.length) {
        index = 0;
    }


    currentGalleryIndex = index;


    galleryTrack.style.transition =
        animate
            ? "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)"
            : "none";


    galleryTrack.style.transform =
        `translateX(-${index * 100}%)`;


    galleryDotButtons.forEach((dot, dotIndex) => {

        dot.classList.toggle(
            "active",
            dotIndex === index
        );

    });
}


function nextGallerySlide() {

    showGallerySlide(
        currentGalleryIndex + 1
    );
}


function previousGallerySlide() {

    showGallerySlide(
        currentGalleryIndex - 1
    );
}


/* =========================================================
   CAMBIO AUTOMÁTICO
========================================================= */

function startGalleryAutoPlay() {

    clearInterval(galleryAutoPlay);


    galleryAutoPlay = setInterval(() => {

        nextGallerySlide();

    }, 4500);
}


function resetGalleryAutoPlay() {

    clearInterval(galleryAutoPlay);

    startGalleryAutoPlay();
}


startGalleryAutoPlay();


/* =========================================================
   PUNTITOS
========================================================= */

galleryDotButtons.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showGallerySlide(index);

        resetGalleryAutoPlay();

    });

});


/* =========================================================
   SWIPE EN CELULAR
========================================================= */

galleryTrack.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


galleryTrack.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;


        const difference =
            touchStartX - touchEndX;


        const minimumSwipe = 45;


        if (Math.abs(difference) < minimumSwipe) {
            return;
        }


        if (difference > 0) {

            nextGallerySlide();

        } else {

            previousGallerySlide();

        }


        resetGalleryAutoPlay();

    },
    { passive: true }
);


/* =========================================================
   ANIMACIÓN DE ENTRADA
========================================================= */

const welcomeElement =
    mainPage.querySelector(".welcome");

const countdownElement =
    mainPage.querySelector(".countdown-section");

const eventElement =
    mainPage.querySelector(".event-section");

const locationElement =
    mainPage.querySelector(".location-section");

const galleryElement =
    mainPage.querySelector(".gallery-section");

const confirmationElement =
    mainPage.querySelector(".confirmation-section");

const eventCards =
    mainPage.querySelectorAll(".event-card");


const animatedContent = [
    welcomeElement,
    countdownElement,
    eventElement,
    locationElement,
    galleryElement,
    confirmationElement
];


animatedContent.forEach(element => {

    element.classList.add("page-entry");

});


eventCards.forEach(card => {

    card.classList.add("page-entry");

});


/* =========================================================
   TRANSICIÓN DESPUÉS DE 3 SEGUNDOS
========================================================= */

setTimeout(() => {

    /*
        Siempre volver al comienzo.
    */

    window.scrollTo(0, 0);


    /*
        Desaparece la portada.
    */

    cover.style.transition =
        "opacity 0.25s ease-out, transform 0.25s ease-out";

    cover.style.opacity = "0";

    cover.style.transform = "scale(1.01)";


    /*
        Aparece la página.
    */

    mainPage.style.opacity = "1";

    mainPage.style.pointerEvents = "auto";


    /*
        BIENVENIDA
    */

    setTimeout(() => {

        welcomeElement.classList.add("entry-visible");

    }, 100);


    /*
        CUENTA REGRESIVA
    */

    setTimeout(() => {

        countdownElement.classList.add("entry-visible");

    }, 400);


    /*
        DATOS
    */

    setTimeout(() => {

        eventElement.classList.add("entry-visible");

    }, 700);


    /*
        TARJETAS
    */

    eventCards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("entry-visible");

        }, 900 + index * 180);

    });


    /*
        UBICACIÓN
    */

    setTimeout(() => {

        locationElement.classList.add("entry-visible");

    }, 1450);


    /*
        GALERÍA
    */

    setTimeout(() => {

        galleryElement.classList.add("entry-visible");

    }, 1750);


    /*
        CONFIRMACIÓN
    */

    setTimeout(() => {

        confirmationElement.classList.add("entry-visible");

    }, 2750);


    /*
        Eliminamos la portada.
    */

    setTimeout(() => {

        cover.remove();

    }, 300);


}, 3000);