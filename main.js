const name = 'Zuzia';
const age = 30;
alert('Witaj na stronie');
console.log(name);
console.log(age);
console.log(`Witaj, nazywam się ${name} i mam ${age} lat`);

const heading = document.querySelector ('.main-heading--js')

heading.innerHTML = `Muminki się cieszą, gdy ryjka powieszą`

console.log(heading.innerHTML);

const emptyParagraph = document.querySelector ('.week-summary__remember--js')

emptyParagraph.innerHTML = `Alleluja, udało mi się wpisać tekst w JavaScript. 
Aby go uzupełnić, należy pod modyfikator wstawić emptyParagraph 
lub sprawdzić to na przykładzie heading w części js. Aby był pisany kursywą w tym przypadku 
trzeba wstawić znacznik "i" jeszcze przed rozpoczęciem pustego paragrafu. Kolor tła i czcionki
mogłam natomiast ustawić w stylach.`

console.log(emptyParagraph);
