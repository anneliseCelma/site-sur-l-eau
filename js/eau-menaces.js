// partie scroll


const nochamp = document.getElementById("champdis"); 
const nochamp2 = document.getElementById("champdis2");        
const champ = document.getElementById("champvue");
const champ2 = document.getElementById("champvue2");
const img = document.getElementById("imgchamp");
const container = document.getElementById("container");

const rondvue = document.getElementById("rondvue");
const norond = document.getElementById("ronddis");
const rondh2 = document.getElementById("rondh2");
const rondfig = document.getElementById("rondfig");


// fonctionne sur le principe de :
// si détection de l'article comme étant à l'écran, alors action
container.addEventListener('scroll', () => {
    const divTop = champ.getBoundingClientRect().top;
    const divBottom = champ.getBoundingClientRect().bottom;

    if (divTop < window.innerHeight && divBottom > 0) {
        img.classList.remove('hidden');
        img.classList.add('champ');
        rondh2.classList.remove('hidden');
        rondh2.classList.add('conseau');
        rondfig.classList.remove('hidden');
        rondfig.classList.add('conseau');
    }

    const divTop6 = rondvue.getBoundingClientRect().top;
    const divBottom6 = rondvue.getBoundingClientRect().bottom;
    if (divTop6 < window.innerHeight && divBottom6 > 0) {
        rondh2.classList.remove('hidden');
        rondh2.classList.add('conseau');
        rondfig.classList.remove('hidden');
        rondfig.classList.add('conseau');
    }

    const divTop5 = norond.getBoundingClientRect().top;
    const divBottom5 = norond.getBoundingClientRect().bottom;
    const divTop3 = nochamp2.getBoundingClientRect().top;
    const divBottom3 = nochamp2.getBoundingClientRect().bottom;
    if ((divTop5 < window.innerHeight && divBottom5 > 0) || (divTop3 < window.innerHeight && divBottom3 > 0)) {
        rondh2.classList.remove('conseau');
        rondh2.classList.add('hidden');
        rondfig.classList.remove('conseau');
        rondfig.classList.add('hidden');
    }

    const divTop4 = champ2.getBoundingClientRect().top;
    const divBottom4 = champ2.getBoundingClientRect().bottom;
    if (divTop4 < window.innerHeight && divBottom4 > 0) {
        img.classList.remove('hidden');
        img.classList.add('champ');
    }

    const divTop2 = nochamp.getBoundingClientRect().top;
    const divBottom2 = nochamp.getBoundingClientRect().bottom;
    if ((divTop2 < window.innerHeight && divBottom2 > 0) || (divTop3 < window.innerHeight && divBottom3 > 0)) {
        img.classList.remove('champ');
        img.classList.add('hidden');
    }
});


const container2 = document.getElementById("container2");
const cardl1 = document.getElementById("cardl1");
const cardl2 = document.getElementById("cardl2");
const cardl3 = document.getElementById("cardl3");
const cgl1 = document.getElementById("cgl1");
const cgl2 = document.getElementById("cgl2");
const cgl3 = document.getElementById("cgl3");
const nocard = document.getElementById("nocardl");


container2.addEventListener('scroll', () => {
    const divTop7 = cardl1.getBoundingClientRect().top;
    const divBottom7 = cardl1.getBoundingClientRect().bottom;
    const divTop8 = cardl2.getBoundingClientRect().top;
    const divBottom8 = cardl2.getBoundingClientRect().bottom;
    const divTop9 = cardl3.getBoundingClientRect().top;
    const divBottom9 = cardl3.getBoundingClientRect().bottom;
    if (divTop7 < window.innerHeight && divBottom7 > 0){
        cgl1.classList.add('cgl1');
        cgl1.classList.remove('cache');
        cgl2.classList.add('cache');
    } else if (divTop8 < window.innerHeight && divBottom8 > 0){
        cgl2.classList.add('cgl2');
        cgl2.classList.remove('cache');
        cgl3.classList.add('cache');
    } else if (divTop9 < window.innerHeight && divBottom9 > 0){
        cgl3.classList.add('cgl3');
        cgl3.classList.remove('cache');
    } else {
        cgl1.classList.add('cache');
    }

});



const divBulle = document.querySelector('.bubulle');
// Sélectionner tous les figcaption de la divBulle
const figures = divBulle.querySelectorAll('figure');

// Boucler sur chaque figure et sélectionner son deuxième figcaption
for (let i = 0; i < figures.length; i++) {
    const imgBulles = figures[i].querySelectorAll('img');
    const figcaption1 = figures[i].querySelectorAll('figcaption')[0];
    const figcaption2 = figures[i].querySelectorAll('figcaption')[1];

    for (let j = 0; j < imgBulles.length; j++) {
        imgBulles[j].addEventListener('mouseover', function () {
            figcaption2.classList.remove('hidden');
            figcaption1.classList.add('hidden');
        });

        // Supprimer la classe "visible" lorsque le curseur quitte l'img
        imgBulles[j].addEventListener('mouseout', function () {
            figcaption2.classList.add('hidden');
            figcaption1.classList.remove('hidden');
        });
    }
}