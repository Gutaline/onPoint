// function div() {
//     console.log('Я div');
// }

// function h1() {
//     console.log('Я h1');
// }

// function p() {
//     console.log('Я p');
// }

const Homs = {
    name: 'homs',
    adress: 'Pushkina',
};

const Watson = {
    name: 'watson',
    adress: Homs.adress,
};

console.log(Watson.adress);

Watson.adress.stree = 'kolotuskina';

console.log(Homs.adress);
