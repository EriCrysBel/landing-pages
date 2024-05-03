/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

// Boton arriba
(function() {
  //a partir de que punto del scroll vertical de la ventana mostrará el botón
  const ishow = 115
  const $divtop = document.getElementById("div-totop")
  window.addEventListener("scroll", function() {
      if(document.documentElement.scrollTop > ishow){
          $divtop.style.display = "inherit"
      }
      else {
          $divtop.style.display = "none"
      }
  })
})()









let cards = document.querySelectorAll('.card');
let flippedCard = null;
let lockBoard = false;

function flipCard(card) {
  if (lockBoard) return;
  if (card === flippedCard) return;

  card.classList.add('flipped');

  if (!flippedCard) {
    flippedCard = card;
    return;
  }

  lockBoard = true;

  checkForMatch(card, flippedCard);
}

function checkForMatch(card1, card2) {
  let isMatch = card1.querySelector('.card-back').src === card2.querySelector('.card-back').src;

  isMatch ? disableCards(card1, card2) : unflipCards(card1, card2);
}

function disableCards(card1, card2) {
  card1.removeEventListener('click', flipCard);
  card2.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards(card1, card2) {
  lockBoard = false;

  setTimeout(() => {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');

    flippedCard = null;
  }, 1500);
}

function resetBoard() {
  lockBoard = false;
  flippedCard = null;

  setTimeout(() => {
    cards.forEach(card => card.classList.remove('flipped'));
  }, 1000);
}







const preguntas = [
  {
      pregunta: "¿Cuál es el monumento más famoso de Aranjuez?",
      respuestas: ["Palacio Real", "Catedral de Santa María", "Plaza de Toros"],
      respuestaCorrecta: "Palacio Real"
  },
  {
      pregunta: "¿En qué río se encuentra Aranjuez?",
      respuestas: ["Tajo", "Ebro", "Duero"],
      respuestaCorrecta: "Tajo"
  },
  // Agrega más preguntas aquí
];

let preguntaActual = 0;
let puntaje = 0;

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  document.getElementById("pregunta").innerText = pregunta.pregunta;
  const respuestasDiv = document.getElementById("respuestas");
  respuestasDiv.innerHTML = "";
  pregunta.respuestas.forEach(respuesta => {
      const botonRespuesta = document.createElement("button");
      botonRespuesta.classList.add("respuesta");
      botonRespuesta.innerText = respuesta;
      botonRespuesta.onclick = function() {
          verificarRespuesta(respuesta);
      };
      respuestasDiv.appendChild(botonRespuesta);
  });
}

function verificarRespuesta(respuesta) {
  const pregunta = preguntas[preguntaActual];
  if (respuesta === pregunta.respuestaCorrecta) {
      puntaje++;
      document.getElementById("resultado").innerText = "¡Respuesta correcta!";
  } else {
      document.getElementById("resultado").innerText = "Respuesta incorrecta.";
  }
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
      mostrarPregunta();
  } else {
      finDelJuego();
  }
}

function finDelJuego() {
  document.getElementById("pregunta").innerText = "Fin del juego";
  document.getElementById("respuestas").innerHTML = "";
  document.getElementById("resultado").innerText = `Tu puntaje final es: ${puntaje}/${preguntas.length}`;
}

function comenzarJuego() {
  preguntaActual = 0;
  puntaje = 0;
  mostrarPregunta();
  document.getElementById("resultado").innerText = "";
}


const audioControl = document.getElementById('audio-control');
const audioPlayer = document.querySelector('.audio-player');

audioControl.addEventListener('click', () => {
if (audioPlayer.paused) {
    audioPlayer.play();
} else {
    audioPlayer.pause();
}
});









window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.onload = function() {
  // Obtener la posición del elemento en la página
  let divA = document.getElementById("sobre-aran")
  let divAPos = divA.offsetTop;

  // Función para cambiar la imagen cuando se hace scroll hacia abajo
  window.onscroll = function() {
    changeImageOnScroll(divAPos);
  };
};

function changeImageOnScroll(elementOffset) {
  let fotoA = document.getElementById("fotoA");
  let scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  // Si el desplazamiento alcanza o supera la posición del elemento
  if (scrollPosition >= elementOffset) {
    // Calcular la posición relativa al elemento
    let relativeScroll = scrollPosition - elementOffset;

    // Cambiar la imagen basada en la posición relativa
    if (relativeScroll < 100) {
      fotoA.setAttribute("src", "./assets/img/aran2.png");
    } else if (relativeScroll < 150) {
      fotoA.setAttribute("src", "./assets/img/aran2-5.png");
    } else if (relativeScroll < 200) {
      fotoA.setAttribute("src", "./assets/img/aran3.png");
    }else if (relativeScroll < 250) {
      fotoA.setAttribute("src", "./assets/img/aran3-5.png");
    }else if (relativeScroll < 300) {
      fotoA.setAttribute("src", "./assets/img/aran4.png");
    }
  } else {
    // Restablecer la imagen original si el desplazamiento está por debajo de la posición del elemento
    fotoA.setAttribute("src", "./assets/img/aran2.png");
  }
}
