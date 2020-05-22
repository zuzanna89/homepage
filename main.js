const name = 'Zuzanna';
const age = 30;

let newName = 'Iza';

alert('Witaj na stronie');
console.log(name);
console.log(age);
console.log(`Witaj, nazywam się ${name} i mam ${age} lat`);

console.log(newName);

const heading = document.querySelector ('.main-heading__main-heading--js')

heading.innerHTML = `Tu powinna być strona główna, ale napisałam ją w JS`

console.log(heading.innerHTML);

const emptyParagraph = document.querySelector ('.notes__notes--js')

emptyParagraph.innerHTML = `Alleluja, udało mi się wpisać tekst w JavaScript. 
Aby go uzupełnić, należy pod modyfikator wstawić emptyParagraph 
lub sprawdzić to na przykładzie heading w części js. Aby był pisany kursywą w tym przypadku 
trzeba wstawić znacznik "i" jeszcze przed rozpoczęciem pustego paragrafu, ale validator pokazał mi błąd. Kolor tła i czcionki
mogłam natomiast ustawić w stylach.`

console.log(emptyParagraph);

function calculate (myNumber){
    console.log (`Dostałam ${myNumber}`);
    return myNumber*7;
}

const myResult = calculate(age);

console.log(myResult);
console.log (age);

function greet (age, firstName){
console.log (`Witaj mam ${age} lat i na imię ${firstName}`);
}
greet (19, 'Basia');

console.log (`Witaj mam ${age} lat i na imię ${name}`);
greet (name,age);

function helloWorld () {
    console.log('Witaj świecie');
}
helloWorld();

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log (`${target} destroyed`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 1000,
    isLighton: true,
    commander: {
        name: 'Darth Vader',
        age: 44
    }
}

console.log(deathStar.name)
console.log(deathStar.commander)
console.log(deathStar.commander.name)

deathStar.fire('Rebel ship')

console.log(deathStar['name'])

const myProperty ='name'

const showMeProperty = (myProperty) => {
    console.log (`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
}
showMeProperty ('levels')

const humanOne = {
    name: 'Zuzanna',
    age:30,
    address : {
        street: 'Lubelska',
        city: 'Lublin',
    }
}

const humanTwo = {
    name: 'Stefan',
    age: humanOne.age,
    address: {
        street: 'Krakowska',
        city: humanOne.address.city,
    }
}

console.log (humanOne)
console.log (humanTwo)

humanOne.age = 23;

console.log (humanOne)
console.log (humanTwo)

humanOne.address.city ='Warszawa'

console.log (humanOne)
console.log (humanTwo)






