console.log('siema');
const name = 'Monika';
const age = 26;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log('witaj przybyszu');

const about__paragraph = document.querySelector('.about__paragraph--js');

console.log(about__paragraph.innerHTML);

about__paragraph.innerHTML = '<strong>Pozdro</strong> JS!';

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[0]);


const video = document.querySelector('.video--js');
video.innerHTML = 'hola, hola';