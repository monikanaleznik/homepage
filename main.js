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

if ('javascript' != 'java') {
    console.log('to prawda!')
}

if (age < 20) {
    console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 30)) {
    console.log('masz więcej niż 20 lat ale mniej niż 30');
} else {
    console.log('jesteś 31+')
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat');
    break;
    case 30:
        console.log('masz równo 30 lat');
    break;
    default:
        console.log(`masz ${age} lat`);
    break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

function calculate(x) {
    x = x+ 3;
    console.log(`tradycyjnie ${x}`);
    return x*7; 
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);

const calculateFat = (x) => {
    x = x+ 3;
    console.log(`fat: ${x}`);
    return x*7; 
}

console.log(calculateFat(2));

