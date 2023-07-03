ScrollReveal().reveal('.what-we-do',{ delay: 400 });
ScrollReveal().reveal('.what-we-do',{ duration: 2000 });
ScrollReveal().reveal('.portfolio',{ delay: 400 });
ScrollReveal().reveal('.portfolio',{ duration: 2000 });
ScrollReveal().reveal('.testimonials',{ delay: 400 });
ScrollReveal().reveal('.testimonials',{ duration: 2000 });
ScrollReveal().reveal('.more',{ delay: 400 });
ScrollReveal().reveal('.more',{ duration: 2000 });




function animateWord(word){
    let text = word.dataset.text;
    text.split(' ').forEach((letter,ind) => {
    let div = document.createElement('div');
    div.innerText = letter;
    setTimeout(()=> word.append(div),ind*600);
  })
}

const word = document.querySelector('.word');
animateWord(word);

function animateWordTwo(wordsTwo){
    let textTwo = wordsTwo.dataset.text;
    textTwo.split(' ').forEach((letterTwo,ind) => {
    let div = document.createElement('div');
    div.innerText = letterTwo;
    setTimeout(()=> wordsTwo.append(div), ind*600);
  })
}

const wordsTwo = document.querySelector('.wordsTwo');

setTimeout(() => {
    animateWordTwo(wordsTwo);;
}, "150");


function animatephrase(phrase){
    let phraseText = phrase.dataset.text;
    phraseText.split('  ').forEach((letterPhrase,ind) => {
        let p = document.createElement('p');
        p.innerText = letterPhrase;
        setTimeout(()=> phrase.append(p), ind*200);
    })
}

const phrase = document.querySelector('.phrase');
setTimeout(() => {
    animatephrase(phrase);
}, "2000");


const btnContact = document.getElementById('btnCont');

setTimeout(() => {
    btnContact.style.opacity = 1;
}, "3000");

const pictureLeft = document.querySelector('.picture-left');
const pictureRight = document.querySelector('.picture-right');

setTimeout(() => {
    pictureLeft.style.opacity = 1;
    pictureRight.style.opacity = 1;
}, "5000");


// Slider

let slides = document.querySelector('.slider');
slides.style.display = 'flex';
slides.style.flexDirection = 'row';
slides.style.flexWrap = 'nowrap';
slides.style.justifyContent = 'center';

let buttonRight = document.getElementById('buttonR');
let slidesAll = document.querySelectorAll('.slide');
let i = 0;
let y = 0;
let position = 0;

buttonRight.addEventListener('click', function() {
    i = position + 1;
    if (i >= slidesAll.length) {
        slidesAll[i-1].classList.remove('block');
        i = 0;
        slidesAll[i].classList.add('block');
        position = 0;
    } else {
        slidesAll[i-1].classList.remove('block');
        slidesAll[i].classList.add('block');
        position = i;
    }
    console.log(position);
});


let buttonLeft = document.getElementById('buttonL');

buttonLeft.addEventListener('click', function() {
    y = position - 1;
    if (y < 0) {
        slidesAll[y+1].classList.remove('block');
        y = slidesAll.length - 1;
        slidesAll[y].classList.add('block');
        position = slidesAll.length - 1;
    } else {
        slidesAll[y+1].classList.remove('block');
        slidesAll[y].classList.add('block');
        position = y;
    }
    console.log(position);
});