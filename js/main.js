function createBubble(){
  const sectionBulles = document.querySelector('.section-Bulles');
  const createElement = document.createElement('img');
  createElement.src="./img/Bubble.png";
   var size = Math.random()* 60;

   createElement.style.width= 20+ size + 'px';
   createElement.style.height = 20 +size + 'px';
   createElement.style.left = Math.random()* innerWidth + 'px';
   sectionBulles.appendChild(createElement);

   setTimeout(()=> {
    createElement.remove()
   }, 4000)

}
setInterval(createBubble,100)


let stack = document.querySelector('.interactive-card-container');
let interactiveCard = document.querySelectorAll('.interactive-card');
let Tab = [];

// tableau constitué de chaque carte du container card
interactiveCard.forEach(elem => {
  Tab.push(elem);
  console.log(Tab);
});

// tableau constitué de chaque carte du container card
//  on reverse le tableau pour que la première carte se trouve au desus de la pile

Tab.reverse().forEach(card => {
  stack.append(card);
});

console.log(Tab);

stack.addEventListener("click", swap);

function swap(elem) {
  let cardLastChild = document.querySelector('.interactive-card:last-child');
  // si la carte actuelle n'est pas celle au dessus de la pile on arrête la fonction
  if (elem.target !== cardLastChild) return;
  // animation où tu passes la carte par dessus l'autre etc ainsi de suite 
  cardLastChild.style.animation = "swap 700ms forward";

  setTimeout(() => {
    cardLastChild.style.animation = "";
    // modification du tableau la carte devant va se retrouver à la fin 
    stack.prepend(cardLastChild);
  });
}


// cartes qui s'empilent

const cards = document.querySelectorAll('.card');
const images = document.querySelectorAll('.left-block');

function checkCards() {
  const triggerBottom = window.innerHeight * 0.4;

  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {

      // Ajoute la classe 'hide' à toutes les images avant l'index actuel
      for (let i = 0; i < index; i++) {
        images[i].classList.add('hide');
      }
      
      for (let i = index; i < images.length; i++) {
        images[i].classList.remove('hide');
      }
    }
  });
}

window.addEventListener('scroll', checkCards);

// animation des boutons

const button = document.querySelectorAll('.bouton');
const usage = document.querySelectorAll('.usage');



for ( let i =0; i<button.length; i++){
  button[i].addEventListener("click", function (event){
    // console.log(event.target);
    event.target.classList.add("bright-shadow");
    usage[i].classList.add("slide-top");

    setTimeout(() => {
      event.target.classList.remove('bright-shadow');
      usage[i].classList.remove('slide-top');



    }, 2000);  

  });


}


//hover test

const divhov = document.querySelector('.hoover');
const divhovIN = divhov.querySelector('.right-content');
const minidiv = divhovIN.querySelectorAll('div');

const rectangles = document.querySelectorAll('.rectangle-eau');


for (let i = 0; i < minidiv.length; i++) {

  minidiv[i].addEventListener('mouseover', function () {
    rectangles[i].classList.add('bghover');
});

  minidiv[i].addEventListener('mouseout', function () {
    rectangles[i].classList.remove('bghover');
  });
}

const divhov2 = document.querySelector('.hoover2');
const divhovIN2 = divhov2.querySelector('.carte5-content');
const minidiv2 = divhovIN2.querySelectorAll('div');

const divgraphs = document.querySelector('.graphs');
const graphs = divgraphs.querySelectorAll('div');



for (let i = 0; i < graphs.length; i++) {

  graphs[i].addEventListener('mouseover', function () {
    minidiv2[i].classList.add('colorhover');
    for (let j = 0; j < graphs.length; j++) {
      if (j !== i) {
        minidiv2[j].classList.add('opachover');
      }
    }
  });

  graphs[i].addEventListener('mouseout', function () {
    minidiv2[i].classList.remove('colorhover');
    for (let j = 0; j < graphs.length; j++) {
      if (j !== i) {
        minidiv2[j].classList.remove('opachover');
      }
    }
  });
}


window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

