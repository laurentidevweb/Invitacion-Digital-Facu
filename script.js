const CONFIG = {
  eventDate: "2026-10-31T21:00:00-03:00",
  mapsLink: "https://maps.app.goo.gl/5uuuT4VhBRKXMNh69",
  whatsappLink: "https://wa.me/5491130160060?text=Hola%20quiero%20confirmar%20mi%20asistencia%20a%20los%2018%20de%20Facu",
  music: "musica.mp3",
  gallery: [
    "foto1.png",
    "foto2.png",
    "foto3.png",
    "foto4.png",
    "foto5.png"
  ]
};

const app = document.getElementById("app");

window.scrollTo(0, 0);

function setStableViewportHeight() {
  const viewportHeight = window.innerHeight;

  if (Number.isFinite(viewportHeight) && viewportHeight > 0) {
    document.documentElement.style.setProperty(
      "--stable-vh",
      `${viewportHeight}px`
    );
  }
}

setStableViewportHeight();

/* =========================================================
   INTRO CINEMATOGRÁFICA
   UNA SOLA PELOTA: pelota.png
   ========================================================= */

const footballIntro = document.createElement("section");

footballIntro.className = "football-intro";

footballIntro.setAttribute(
  "aria-label",
  "Introducción de la invitación"
);

footballIntro.innerHTML = `
  <div class="intro-bg"></div>

  <div class="intro-light intro-light-left"></div>

  <div class="intro-light intro-light-right"></div>

  <div class="intro-vignette"></div>

  <div class="intro-ball-orbit">
    <button
      class="intro-ball"
      type="button"
      aria-label="Tocar la pelota para comenzar"
    >
      <img
        src="pelota.png"
        alt=""
        draggable="false"
      >
    </button>
  </div>

  <div class="intro-message">
    <span>TOCÁ LA PELOTA</span>
    <small>PARA COMENZAR</small>
  </div>

  <div class="intro-flash"></div>
`;

app.appendChild(footballIntro);

/* =========================================================
   MÚSICA
   ========================================================= */

const introMusic = document.createElement("audio");

introMusic.src = CONFIG.music;
introMusic.preload = "auto";
introMusic.loop = true;
introMusic.volume = 0.14;
introMusic.setAttribute("aria-hidden", "true");

document.body.appendChild(introMusic);

/* =========================================================
   REFERENCIAS INTRO
   ========================================================= */

const introBallOrbit =
  footballIntro.querySelector(".intro-ball-orbit");

const introBall =
  footballIntro.querySelector(".intro-ball");

const introBallImage =
  footballIntro.querySelector(".intro-ball img");

const introMessage =
  footballIntro.querySelector(".intro-message");

const introFlash =
  footballIntro.querySelector(".intro-flash");

let introStarted = false;

/* =========================================================
   ASEGURAR QUE NO HAYA PELOTA CSS ATRÁS
   ========================================================= */

introBall.style.background = "transparent";
introBall.style.backgroundImage = "none";
introBall.style.border = "0";
introBall.style.outline = "none";
introBall.style.boxShadow = "none";
introBall.style.padding = "0";
introBall.style.overflow = "visible";

introBallImage.style.display = "block";
introBallImage.style.width = "100%";
introBallImage.style.height = "100%";
introBallImage.style.objectFit = "contain";
introBallImage.style.pointerEvents = "none";
introBallImage.style.userSelect = "none";
introBallImage.style.webkitUserSelect = "none";
introBallImage.style.webkitUserDrag = "none";

/* =========================================================
   ANIMACIÓN DE LA PELOTA
   ========================================================= */

function animateFootballIntro() {
  /*
   * Reiniciamos cualquier animación anterior.
   */

  introBallOrbit.getAnimations().forEach(
    animation => animation.cancel()
  );

  introBall.getAnimations().forEach(
    animation => animation.cancel()
  );

  /*
   * Estado inicial.
   */

  introBallOrbit.style.transform =
    "translate3d(0, 0, 0) scale(1)";

  introBall.style.transform =
    "rotateZ(0deg)";

  /*
   * =======================================================
   * PRIMER MOVIMIENTO
   *
   * La pelota sale hacia la izquierda,
   * con un movimiento suave y continuo.
   * =======================================================
   */

  introBallOrbit.animate(
    [
      {
        transform:
          "translate3d(0, 0, 0) scale(1)"
      },

      {
        transform:
          "translate3d(-55px, -20px, 0) scale(0.98)"
      },

      {
        transform:
          "translate3d(-150px, -45px, 0) scale(0.9)"
      },

      {
        transform:
          "translate3d(-300px, -20px, 0) scale(0.72)"
      },

      {
        transform:
          "translate3d(-520px, 55px, 0) scale(0.48)"
      },

      {
        transform:
          "translate3d(-800px, 90px, 0) scale(0.28)"
      }
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.45, 0, 0.75, 1)",
      fill: "forwards"
    }
  );

  /*
   * Giro moderado.
   * No hacemos giros exagerados en todos los ejes.
   */

  introBall.animate(
    [
      {
        transform:
          "rotateZ(0deg)"
      },

      {
        transform:
          "rotateZ(-70deg)"
      },

      {
        transform:
          "rotateZ(-160deg)"
      },

      {
        transform:
          "rotateZ(-260deg)"
      },

      {
        transform:
          "rotateZ(-360deg)"
      }
    ],
    {
      duration: 1000,
      easing: "linear",
      fill: "forwards"
    }
  );

  /*
   * =======================================================
   * SEGUNDO MOVIMIENTO
   *
   * La MISMA pelota reaparece desde la derecha.
   * No se crea ninguna pelota nueva.
   * =======================================================
   */

  setTimeout(() => {
    introBallOrbit.getAnimations().forEach(
      animation => animation.cancel()
    );

    introBall.getAnimations().forEach(
      animation => animation.cancel()
    );

    introBallOrbit.style.transform =
      "translate3d(calc(50vw + 220px), 25px, 0) scale(0.25)";

    introBall.style.transform =
      "rotateZ(-360deg)";

    introBallOrbit.animate(
      [
        {
          transform:
            "translate3d(calc(50vw + 220px), 25px, 0) scale(0.25)"
        },

        {
          transform:
            "translate3d(calc(50vw + 150px), 15px, 0) scale(0.38)"
        },

        {
          transform:
            "translate3d(calc(50vw + 70px), 5px, 0) scale(0.6)"
        },

        {
          transform:
            "translate3d(calc(50vw + 15px), 0, 0) scale(0.95)"
        },

        {
          transform:
            "translate3d(calc(50vw - 10px), 0, 0) scale(1.35)"
        }
      ],
      {
        duration: 750,
        easing: "cubic-bezier(0.16, 0.8, 0.22, 1)",
        fill: "forwards"
      }
    );

    introBall.animate(
      [
        {
          transform:
            "rotateZ(-360deg)"
        },

        {
          transform:
            "rotateZ(-450deg)"
        },

        {
          transform:
            "rotateZ(-540deg)"
        },

        {
          transform:
            "rotateZ(-630deg)"
        }
      ],
      {
        duration: 750,
        easing: "linear",
        fill: "forwards"
      }
    );

    /*
     * =====================================================
     * PASADA FINAL DE LA MISMA PELOTA
     *
     * La pelota se acerca a cámara y cubre la pantalla.
     * =====================================================
     */

    setTimeout(() => {
      introBallOrbit.getAnimations().forEach(
        animation => animation.cancel()
      );

      introBall.getAnimations().forEach(
        animation => animation.cancel()
      );

      introBallOrbit.animate(
        [
          {
            transform:
              "translate3d(calc(50vw - 10px), 0, 0) scale(1.35)"
          },

          {
            transform:
              "translate3d(calc(50vw + 20px), 0, 0) scale(2.2)"
          },

          {
            transform:
              "translate3d(calc(50vw + 80px), 0, 0) scale(4)"
          },

          {
            transform:
              "translate3d(calc(50vw + 170px), 0, 0) scale(7)"
          },

          {
            transform:
              "translate3d(calc(50vw + 300px), 0, 0) scale(12)"
          },

          {
            transform:
              "translate3d(calc(50vw + 500px), 0, 0) scale(20)"
          },

          {
            transform:
              "translate3d(calc(50vw + 750px), 0, 0) scale(32)"
          }
        ],
        {
          duration: 700,
          easing: "cubic-bezier(0.2, 0.75, 0.15, 1)",
          fill: "forwards"
        }
      );

      introBall.animate(
        [
          {
            transform:
              "rotateZ(-630deg)"
          },

          {
            transform:
              "rotateZ(-720deg)"
          },

          {
            transform:
              "rotateZ(-810deg)"
          }
        ],
        {
          duration: 700,
          easing: "linear",
          fill: "forwards"
        }
      );

    }, 750);

  }, 1000);
}

/* =========================================================
   INICIAR INTRO
   ========================================================= */

function startFootballIntro() {
  if (introStarted) return;

  introStarted = true;

  introBall.blur();

  introMessage.classList.add(
    "message-hidden"
  );

  footballIntro.classList.add(
    "intro-orbit"
  );

  footballIntro.classList.add(
    "intro-started"
  );

  /*
   * Arranca inmediatamente la animación
   * de la única pelota.
   */
  animateFootballIntro();

  /*
   * Música.
   */
  introMusic.currentTime = 0;

  const musicPromise =
    introMusic.play();

  if (
    musicPromise &&
    typeof musicPromise.catch === "function"
  ) {
    musicPromise.catch(() => {});
  }

  /*
   * La cámara entra en modo transición.
   */
  setTimeout(() => {
    footballIntro.classList.add(
      "intro-camera"
    );
  }, 1050);

  /*
   * IMPORTANTE:
   * el flash empieza ANTES de que la pelota
   * termine completamente de cubrir la pantalla.
   *
   * Así evitamos el segundo de congelamiento.
   */
  setTimeout(() => {
    introFlash.classList.add(
      "flash-active"
    );
  }, 1900);

  /*
   * La portada empieza a entrar mientras
   * la pelota todavía está terminando
   * de acercarse.
   */
  setTimeout(() => {
    footballIntro.classList.add(
      "intro-finished"
    );
  }, 2150);

  /*
   * La pelota ya terminó de cubrir la cámara
   * y la intro desaparece inmediatamente.
   *
   * No dejamos 1 segundo muerto.
   */
  setTimeout(() => {
    footballIntro.remove();

    startMainExperience();
  }, 2350);
}

/* =========================================================
   LISTENERS DE LA PELOTA
   ========================================================= */

introBall.addEventListener(
  "click",
  startFootballIntro
);

introBall.addEventListener(
  "pointerup",
  event => {
    if (
      event.pointerType === "touch"
    ) {
      event.preventDefault();
      startFootballIntro();
    }
  }
);

footballIntro.addEventListener(
  "click",
  event => {
    if (
      event.target.closest(
        ".intro-ball"
      )
    ) {
      startFootballIntro();
    }
  }
);

introBall.addEventListener(
  "keydown",
  event => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      startFootballIntro();
    }
  }
);

/* =========================================================
   PORTADA
   ========================================================= */

const cover =
  document.createElement("section");

cover.className =
  "cover cover-hidden";

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

    <p class="cover-small">
      MIS
    </p>

    <div class="cover-number">
      18
    </div>

    <h1>
      FACUNDO
    </h1>

    <div class="cover-date">
      31 · 10 · 2026
    </div>

    <div class="cover-line"></div>

    <p class="cover-bottom">
      UNA NOCHE ESPECIAL
    </p>

  </div>
`;

app.appendChild(
  cover
);

/* =========================================================
   MAIN PAGE
   ========================================================= */

const mainPage =
  document.createElement("main");

mainPage.className =
  "main-page";

mainPage.style.opacity =
  "0";

mainPage.style.pointerEvents =
  "none";

app.appendChild(
  mainPage
);

/* =========================================================
   BACKGROUND
   ========================================================= */

const backgroundGlow =
  document.createElement("div");

backgroundGlow.className =
  "background-glow";

mainPage.appendChild(
  backgroundGlow
);

const backgroundGlow2 =
  document.createElement("div");

backgroundGlow2.className =
  "background-glow glow-two";

mainPage.appendChild(
  backgroundGlow2
);

const backgroundSweep =
  document.createElement("div");

backgroundSweep.className =
  "background-sweep";

mainPage.appendChild(
  backgroundSweep
);

const diagonalLines =
  document.createElement("div");

diagonalLines.className =
  "diagonal-lines";

mainPage.appendChild(
  diagonalLines
);

/* =========================================================
   ARGENTINA FLAGS
   ========================================================= */

const argentinaFlag =
  document.createElement("div");

argentinaFlag.className =
  "argentina-flag";

argentinaFlag.innerHTML =
  `<div class="flag-sun"></div>`;

mainPage.appendChild(
  argentinaFlag
);

const argentinaFlag2 =
  document.createElement("div");

argentinaFlag2.className =
  "argentina-flag flag-two";

argentinaFlag2.innerHTML =
  `<div class="flag-sun"></div>`;

mainPage.appendChild(
  argentinaFlag2
);

/* =========================================================
   FOOTBALL DECOR
   ========================================================= */

const football =
  document.createElement("div");

football.className =
  "football-decor";

football.innerHTML = `
  <div class="football-center"></div>
  <div class="football-line line-a"></div>
  <div class="football-line line-b"></div>
  <div class="football-line line-c"></div>
  <div class="football-line line-d"></div>
`;

mainPage.appendChild(
  football
);

/* =========================================================
   GOLD SPARKLES
   ========================================================= */

const sparkleContainer =
  document.createElement("div");

sparkleContainer.className =
  "gold-sparkles";

for (
  let i = 1;
  i <= 8;
  i++
) {
  const sparkle =
    document.createElement("span");

  sparkle.className =
    `gold-spark sparkle-${i}`;

  sparkleContainer.appendChild(
    sparkle
  );
}

mainPage.appendChild(
  sparkleContainer
);

/* =========================================================
   SEPARATOR
   ========================================================= */

function createSectionSeparator() {
  const separator =
    document.createElement("div");

  separator.className =
    "section-separator";

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
   WELCOME
   ========================================================= */

const welcome =
  document.createElement("section");

welcome.className =
  "welcome section";

welcome.innerHTML = `
  <div class="welcome-content">

    <div class="mini-badge">
      18 AÑOS
    </div>

    <h2>
      UNA NOCHE<br>
      <span>ESPECIAL</span>
    </h2>

    <p class="text-18">
      Hay momentos que merecen ser celebrados
      y compartidos con quienes más queremos.
    </p>

  </div>
`;

mainPage.appendChild(
  welcome
);

mainPage.appendChild(
  createSectionSeparator()
);

/* =========================================================
   COUNTDOWN
   ========================================================= */

const countdownSection =
  document.createElement("section");

countdownSection.className =
  "countdown-section section";

countdownSection.innerHTML = `
  <p class="section-kicker text-18">
    FALTA MUY POCO
  </p>

  <h2>
    Cuenta regresiva
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

mainPage.appendChild(
  countdownSection
);

mainPage.appendChild(
  createSectionSeparator()
);

/* =========================================================
   EVENT
   ========================================================= */

const eventSection =
  document.createElement("section");

eventSection.className =
  "event-section section";

eventSection.innerHTML = `
  <p class="section-kicker text-18">
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

      <div class="event-value text-18">
        31 DE OCTUBRE
      </div>
    </div>

    <div class="event-card">
      <div class="event-label">
        HORA
      </div>

      <div class="event-value text-18">
        21:00 HS
      </div>
    </div>

    <div class="event-card">
      <div class="event-label">
        DRESS CODE
      </div>

      <div class="event-value text-18">
        ELEGANTE SPORT
      </div>
    </div>

  </div>
`;

mainPage.appendChild(
  eventSection
);

mainPage.appendChild(
  createSectionSeparator()
);

/* =========================================================
   LOCATION
   ========================================================= */

const locationSection =
  document.createElement("section");

locationSection.className =
  "location-section section";

locationSection.innerHTML = `
  <p class="section-kicker text-18">
    NOS ENCONTRAMOS EN
  </p>

  <h2>
    La Quinta de los<br>
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

mainPage.appendChild(
  locationSection
);

mainPage.appendChild(
  createSectionSeparator()
);

/* =========================================================
   GALLERY
   ========================================================= */

const gallerySection =
  document.createElement("section");

gallerySection.className =
  "gallery-section section";

gallerySection.innerHTML = `
  <p class="section-kicker text-18">
    MOMENTOS
  </p>

  <h2>
    Galería
  </h2>

  <div
    class="gallery-carousel"
    role="region"
    aria-label="Galería de fotos"
    tabindex="0"
  >
    <div class="gallery-track"></div>
  </div>

  <div class="gallery-dots"></div>
`;

mainPage.appendChild(
  gallerySection
);

/* =========================================================
   GALERÍA - REFERENCIAS
   ========================================================= */

const galleryCarousel =
  gallerySection.querySelector(
    ".gallery-carousel"
  );

const galleryTrack =
  gallerySection.querySelector(
    ".gallery-track"
  );

const galleryDots =
  gallerySection.querySelector(
    ".gallery-dots"
  );

/* =========================================================
   CREAR SLIDES
   ========================================================= */

CONFIG.gallery.forEach(
  (photo, index) => {

    const slide =
      document.createElement("div");

    slide.className =
      "gallery-slide";

    slide.innerHTML = `
      <img
        src="${photo}"
        alt="Foto ${index + 1}"
        draggable="false"
      >
    `;

    galleryTrack.appendChild(
      slide
    );

    const dot =
      document.createElement("button");

    dot.type = "button";

    dot.className =
      "gallery-dot";

    if (index === 0) {
      dot.classList.add(
        "active"
      );
    }

    dot.setAttribute(
      "aria-label",
      `Ver foto ${index + 1}`
    );

    dot.setAttribute(
      "aria-current",
      index === 0
        ? "true"
        : "false"
    );

    galleryDots.appendChild(
      dot
    );
  }
);

/* =========================================================
   CONFIRMATION
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

  <p class="section-kicker text-18">
    TE ESPERO
  </p>

  <h2>
    Los 18 se viven<br>
    <span>una sola vez</span>
  </h2>

  <p class="text-18">
    Confirmá tu asistencia y preparate
    para compartir esta noche conmigo.
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

mainPage.appendChild(
  confirmationSection
);

/* =========================================================
   FOOTER
   ========================================================= */

const footer =
  document.createElement("footer");

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

mainPage.appendChild(
  footer
);

/* =========================================================
   COUNTDOWN
   ========================================================= */

const targetDate =
  new Date(
    CONFIG.eventDate
  ).getTime();

function updateCountdown() {
  const now =
    Date.now();

  const difference =
    targetDate - now;

  const daysElement =
    document.getElementById(
      "days"
    );

  const hoursElement =
    document.getElementById(
      "hours"
    );

  const minutesElement =
    document.getElementById(
      "minutes"
    );

  const secondsElement =
    document.getElementById(
      "seconds"
    );

  if (difference <= 0) {

    daysElement.textContent =
      "00";

    hoursElement.textContent =
      "00";

    minutesElement.textContent =
      "00";

    secondsElement.textContent =
      "00";

    return;
  }

  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (
        difference /
        (1000 * 60 * 60)
      ) % 24
    );

  const minutes =
    Math.floor(
      (
        difference /
        (1000 * 60)
      ) % 60
    );

  const seconds =
    Math.floor(
      (
        difference /
        1000
      ) % 60
    );

  daysElement.textContent =
    String(days).padStart(
      2,
      "0"
    );

  hoursElement.textContent =
    String(hours).padStart(
      2,
      "0"
    );

  minutesElement.textContent =
    String(minutes).padStart(
      2,
      "0"
    );

  secondsElement.textContent =
    String(seconds).padStart(
      2,
      "0"
    );
}

updateCountdown();

setInterval(
  updateCountdown,
  1000
);

/* =========================================================
   GALLERY CAROUSEL
   ========================================================= */

const gallerySlides =
  gallerySection.querySelectorAll(
    ".gallery-slide"
  );

const galleryDotButtons =
  gallerySection.querySelectorAll(
    ".gallery-dot"
  );

let currentGalleryIndex =
  0;

let galleryAutoPlay =
  null;

let pointerId =
  null;

let dragStartX =
  0;

let dragStartY =
  0;

let dragCurrentX =
  0;

let isDraggingGallery =
  false;

let horizontalGesture =
  false;

/* =========================================================
   ALTURA DE FOTOS
   ========================================================= */

function getSlideHeight(index) {

  const slide =
    gallerySlides[index];

  if (!slide) {
    return null;
  }

  const image =
    slide.querySelector(
      "img"
    );

  if (
    !image ||
    !image.naturalWidth ||
    !image.naturalHeight
  ) {
    return null;
  }

  const carouselWidth =
    galleryCarousel
      .getBoundingClientRect()
      .width;

  if (!carouselWidth) {
    return null;
  }

  return (
    carouselWidth *
    (
      image.naturalHeight /
      image.naturalWidth
    )
  );
}

function updateGalleryHeight(
  animate = true
) {

  const height =
    getSlideHeight(
      currentGalleryIndex
    );

  if (
    !height ||
    !Number.isFinite(height)
  ) {
    return;
  }

  galleryCarousel.style.transition =
    animate
      ? "height 0.45s cubic-bezier(0.22,1,0.36,1)"
      : "none";

  galleryCarousel.style.height =
    `${height}px`;

  gallerySlides.forEach(
    slide => {

      const slideIndex =
        Array.from(
          gallerySlides
        ).indexOf(
          slide
        );

      const slideHeight =
        getSlideHeight(
          slideIndex
        );

      if (
        slideHeight &&
        Number.isFinite(
          slideHeight
        )
      ) {
        slide.style.height =
          `${slideHeight}px`;
      }
    }
  );
}

/* =========================================================
   IMÁGENES CARGADAS
   ========================================================= */

gallerySlides.forEach(
  (slide, index) => {

    const image =
      slide.querySelector(
        "img"
      );

    if (!image) {
      return;
    }

    image.addEventListener(
      "load",
      () => {

        const slideHeight =
          getSlideHeight(
            index
          );

        if (
          slideHeight &&
          Number.isFinite(
            slideHeight
          )
        ) {
          slide.style.height =
            `${slideHeight}px`;
        }

        if (
          index ===
          currentGalleryIndex
        ) {
          updateGalleryHeight(
            false
          );
        }
      }
    );
  }
);

/* =========================================================
   SHOW SLIDE
   ========================================================= */

function showGallerySlide(
  index,
  animate = true
) {

  if (!gallerySlides.length) {
    return;
  }

  const totalSlides =
    gallerySlides.length;

  if (index < 0) {
    index =
      totalSlides - 1;
  }

  if (index >= totalSlides) {
    index = 0;
  }

  currentGalleryIndex =
    index;

  galleryTrack.style.transition =
    animate
      ? "transform 0.45s cubic-bezier(0.22,1,0.36,1)"
      : "none";

  galleryTrack.style.transform =
    `translate3d(-${index * 100}%, 0, 0)`;

  galleryDotButtons.forEach(
    (dot, dotIndex) => {

      const isActive =
        dotIndex === index;

      dot.classList.toggle(
        "active",
        isActive
      );

      dot.setAttribute(
        "aria-current",
        isActive
          ? "true"
          : "false"
      );
    }
  );

  updateGalleryHeight(
    animate
  );
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
   AUTOPLAY
   ========================================================= */

function stopGalleryAutoPlay() {

  if (
    galleryAutoPlay !== null
  ) {

    clearInterval(
      galleryAutoPlay
    );

    galleryAutoPlay =
      null;
  }
}

function startGalleryAutoPlay() {

  stopGalleryAutoPlay();

  galleryAutoPlay =
    setInterval(
      () => {
        nextGallerySlide();
      },
      4500
    );
}

function resetGalleryAutoPlay() {
  startGalleryAutoPlay();
}

/* =========================================================
   DOTS
   ========================================================= */

galleryDotButtons.forEach(
  (dot, index) => {

    dot.addEventListener(
      "click",
      () => {

        showGallerySlide(
          index
        );

        resetGalleryAutoPlay();
      }
    );
  }
);

/* =========================================================
   POINTER DOWN
   ========================================================= */

galleryCarousel.addEventListener(
  "pointerdown",
  event => {

    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    pointerId =
      event.pointerId;

    dragStartX =
      event.clientX;

    dragStartY =
      event.clientY;

    dragCurrentX =
      event.clientX;

    isDraggingGallery =
      true;

    horizontalGesture =
      false;

    stopGalleryAutoPlay();

    galleryTrack.style.transition =
      "none";

    try {
      galleryCarousel.setPointerCapture(
        pointerId
      );
    } catch (error) {}
  }
);

/* =========================================================
   POINTER MOVE
   ========================================================= */

galleryCarousel.addEventListener(
  "pointermove",
  event => {

    if (
      !isDraggingGallery
    ) {
      return;
    }

    if (
      pointerId !== null &&
      event.pointerId !== pointerId
    ) {
      return;
    }

    dragCurrentX =
      event.clientX;

    const deltaX =
      dragCurrentX -
      dragStartX;

    const deltaY =
      event.clientY -
      dragStartY;

    if (
      !horizontalGesture
    ) {

      const movementX =
        Math.abs(deltaX);

      const movementY =
        Math.abs(deltaY);

      if (
        movementX > 10 ||
        movementY > 10
      ) {

        if (
          movementX >
          movementY
        ) {

          horizontalGesture =
            true;

        } else {

          isDraggingGallery =
            false;

          galleryTrack.style.transition =
            "transform 0.45s cubic-bezier(0.22,1,0.36,1)";

          galleryTrack.style.transform =
            `translate3d(-${currentGalleryIndex * 100}%, 0, 0)`;

          startGalleryAutoPlay();

          return;
        }
      }
    }

    if (
      !horizontalGesture
    ) {
      return;
    }

    const carouselWidth =
      galleryCarousel
        .getBoundingClientRect()
        .width;

    if (!carouselWidth) {
      return;
    }

    const percentage =
      (
        deltaX /
        carouselWidth
      ) * 100;

    galleryTrack.style.transform =
      `translate3d(calc(-${currentGalleryIndex * 100}% + ${percentage}%), 0, 0)`;
  }
);

/* =========================================================
   FIN DEL DRAG
   ========================================================= */

function finishGalleryPointer(
  event
) {

  if (
    !isDraggingGallery
  ) {
    return;
  }

  if (
    pointerId !== null &&
    event.pointerId !== pointerId
  ) {
    return;
  }

  const deltaX =
    dragCurrentX -
    dragStartX;

  const minimumSwipe =
    45;

  isDraggingGallery =
    false;

  if (
    pointerId !== null &&
    galleryCarousel.hasPointerCapture(
      pointerId
    )
  ) {

    try {

      galleryCarousel.releasePointerCapture(
        pointerId
      );

    } catch (error) {}
  }

  pointerId =
    null;

  if (
    horizontalGesture &&
    Math.abs(deltaX) >=
      minimumSwipe
  ) {

    if (deltaX < 0) {

      nextGallerySlide();

    } else {

      previousGallerySlide();
    }

  } else {

    showGallerySlide(
      currentGalleryIndex,
      true
    );
  }

  horizontalGesture =
    false;

  resetGalleryAutoPlay();
}

galleryCarousel.addEventListener(
  "pointerup",
  finishGalleryPointer
);

galleryCarousel.addEventListener(
  "pointercancel",
  finishGalleryPointer
);

/* =========================================================
   POINTER LEAVE
   ========================================================= */

galleryCarousel.addEventListener(
  "pointerleave",
  event => {

    if (
      event.pointerType === "mouse" &&
      isDraggingGallery
    ) {

      finishGalleryPointer(
        event
      );
    }
  }
);

/* =========================================================
   TECLADO
   ========================================================= */

galleryCarousel.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "ArrowRight"
    ) {

      event.preventDefault();

      nextGallerySlide();

      resetGalleryAutoPlay();
    }

    if (
      event.key ===
      "ArrowLeft"
    ) {

      event.preventDefault();

      previousGallerySlide();

      resetGalleryAutoPlay();
    }
  }
);

/* =========================================================
   RESIZE
   ========================================================= */

window.addEventListener(
  "resize",
  () => {

    setStableViewportHeight();

    updateGalleryHeight(
      false
    );
  }
);

/* =========================================================
   POSICIÓN INICIAL
   ========================================================= */

showGallerySlide(
  0,
  false
);

/* =========================================================
   ENTRY ANIMATION
   ========================================================= */

const welcomeElement =
  mainPage.querySelector(
    ".welcome"
  );

const countdownElement =
  mainPage.querySelector(
    ".countdown-section"
  );

const eventElement =
  mainPage.querySelector(
    ".event-section"
  );

const locationElement =
  mainPage.querySelector(
    ".location-section"
  );

const galleryElement =
  mainPage.querySelector(
    ".gallery-section"
  );

const confirmationElement =
  mainPage.querySelector(
    ".confirmation-section"
  );

const eventCards =
  mainPage.querySelectorAll(
    ".event-card"
  );

const animatedContent = [
  welcomeElement,
  countdownElement,
  eventElement,
  locationElement,
  galleryElement,
  confirmationElement
];

animatedContent.forEach(
  element => {

    element.classList.add(
      "page-entry"
    );
  }
);

eventCards.forEach(
  card => {

    card.classList.add(
      "page-entry"
    );
  }
);

/* =========================================================
   MOSTRAR PÁGINA
   ========================================================= */

function startMainExperience() {

  window.scrollTo(
    0,
    0
  );

  cover.classList.remove(
    "cover-hidden"
  );

  cover.style.transition =
    "opacity 0.8s ease-out, transform 0.8s ease-out";

  cover.style.opacity =
    "1";

  cover.style.transform =
    "scale(1)";

  mainPage.style.opacity =
    "0";

  mainPage.style.pointerEvents =
    "none";

  setTimeout(
    () => {

      cover.style.opacity =
        "0";

      cover.style.transform =
        "scale(1.01)";

      mainPage.style.opacity =
        "1";

      mainPage.style.pointerEvents =
        "auto";

      setTimeout(
        () => {

          welcomeElement.classList.add(
            "entry-visible"
          );

        },
        100
      );

      setTimeout(
        () => {

          countdownElement.classList.add(
            "entry-visible"
          );

        },
        400
      );

      setTimeout(
        () => {

          eventElement.classList.add(
            "entry-visible"
          );

        },
        700
      );

      eventCards.forEach(
        (card, index) => {

          setTimeout(
            () => {

              card.classList.add(
                "entry-visible"
              );

            },
            900 +
            index * 180
          );
        }
      );

      setTimeout(
        () => {

          locationElement.classList.add(
            "entry-visible"
          );

        },
        1450
      );

      setTimeout(
        () => {

          galleryElement.classList.add(
            "entry-visible"
          );

          resetGalleryAutoPlay();

          updateGalleryHeight(
            false
          );

        },
        1750
      );

      setTimeout(
        () => {

          confirmationElement.classList.add(
            "entry-visible"
          );

        },
        2750
      );

      setTimeout(
        () => {

          cover.remove();

        },
        850
      );

    },
    3000
  );
}