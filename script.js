/* =========================================
   APP
========================================= */

const app =
    document.querySelector("#app");


/* =========================================
   FUNCIÓN PARA CREAR ELEMENTOS
========================================= */

function crearElemento(
    tag,
    clase,
    texto = ""
) {

    const elemento =
        document.createElement(tag);


    if (clase) {
        elemento.className = clase;
    }


    if (texto) {
        elemento.textContent = texto;
    }


    return elemento;
}


/* =========================================
   HERO
========================================= */

const hero =
    crearElemento(
        "section",
        "hero"
    );

app.appendChild(hero);


/* =========================================
   LUCES AMBIENTALES
========================================= */

const lightOne =
    crearElemento(
        "div",
        "hero-light hero-light-one"
    );


const lightTwo =
    crearElemento(
        "div",
        "hero-light hero-light-two"
    );


hero.appendChild(lightOne);
hero.appendChild(lightTwo);


/* =========================================
   TEXTURA
========================================= */

const texture =
    crearElemento(
        "div",
        "hero-texture"
    );


hero.appendChild(texture);


/* =========================================
   CONTENIDO
========================================= */

const content =
    crearElemento(
        "div",
        "hero-content"
    );


hero.appendChild(content);


/* =========================================
   FRASE SUPERIOR
========================================= */

const eyebrow =
    crearElemento(
        "p",
        "hero-eyebrow",
        "EL PARTIDO MÁS IMPORTANTE ESTÁ POR COMENZAR"
    );


content.appendChild(eyebrow);


/* =========================================
   NÚMERO 18
========================================= */

const number =
    crearElemento(
        "div",
        "hero-number"
    );


const numberBack =
    crearElemento(
        "span",
        "hero-number-back",
        "18"
    );


const numberFront =
    crearElemento(
        "span",
        "hero-number-front",
        "18"
    );


number.appendChild(numberBack);
number.appendChild(numberFront);

content.appendChild(number);


/* =========================================
   NOMBRE
========================================= */

const name =
    crearElemento(
        "h1",
        "hero-name",
        "FACUNDO"
    );


content.appendChild(name);


/* =========================================
   DIVISOR
========================================= */

const divider =
    crearElemento(
        "div",
        "hero-divider"
    );


const lineOne =
    crearElemento(
        "span",
        "hero-divider-line"
    );


const diamond =
    crearElemento(
        "i",
        "hero-divider-diamond"
    );


const lineTwo =
    crearElemento(
        "span",
        "hero-divider-line"
    );


divider.appendChild(lineOne);
divider.appendChild(diamond);
divider.appendChild(lineTwo);

content.appendChild(divider);


/* =========================================
   FECHA
========================================= */

const date =
    crearElemento(
        "p",
        "hero-date",
        "31 · 10 · 2026"
    );


content.appendChild(date);


/* =========================================
   INDICADOR DE SCROLL
========================================= */

const scroll =
    crearElemento(
        "div",
        "hero-scroll"
    );


const scrollText =
    crearElemento(
        "span",
        "",
        "DESLIZÁ"
    );


const scrollLine =
    crearElemento(
        "div",
        "hero-scroll-line"
    );


scroll.appendChild(scrollText);
scroll.appendChild(scrollLine);

hero.appendChild(scroll);


/* =========================================
   MOVIMIENTO DE LUCES CON MOUSE
========================================= */

window.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 2;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 2;


        lightOne.style.transform = `
            translate(
                ${x * 25}px,
                ${y * 20}px
            )
        `;


        lightTwo.style.transform = `
            translate(
                ${x * -20}px,
                ${y * -15}px
            )
        `;
    }
);


/* =========================================
   MOVIMIENTO EN CELULAR
========================================= */

window.addEventListener(
    "deviceorientation",
    (event) => {

        if (
            event.gamma === null ||
            event.beta === null
        ) {
            return;
        }


        const x =
            Math.max(
                -1,
                Math.min(
                    1,
                    event.gamma / 30
                )
            );


        const y =
            Math.max(
                -1,
                Math.min(
                    1,
                    (event.beta - 45) / 30
                )
            );


        lightOne.style.transform = `
            translate(
                ${x * 20}px,
                ${y * 15}px
            )
        `;


        lightTwo.style.transform = `
            translate(
                ${x * -15}px,
                ${y * -10}px
            )
        `;
    }
);