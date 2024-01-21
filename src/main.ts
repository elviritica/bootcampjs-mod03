import "./style.css";

const estiloTitulo = "color: green; font-size: 18px; font-weight: bold"

let popRock = "🎵 Pop Rock";
let rock = "🎸 Rock";
let hardRock = "🤘 Hard Rock";
let clasic = "🎼 Clásica"

interface GrupoMusical {
    nombre : string,
    anyo : number,
    activo : boolean,
    genero: string,
};

const grupo1 : GrupoMusical = {
    nombre: "The Beatles",
    anyo : 1960,
    activo: true,
    genero: popRock,
}

const grupo2 : GrupoMusical = {
    nombre: "Queen",
    anyo : 1970,
    activo: false,
    genero: rock,
}

const grupo3 : GrupoMusical = {
    nombre: "AC/CD",
    anyo : 1973,
    activo: true,
    genero: hardRock,
}
const grupo4 : GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    anyo : 1770,
    activo: false,
    genero: clasic,
}
const grupo5 : GrupoMusical = {
    nombre: "The Rolling Stones",
    anyo : 1962,
    activo: true,
    genero: rock,
}

console.log(`%c${grupo1.nombre}`, estiloTitulo);
console.log(grupo1);
console.log(`%c${grupo2.nombre}`, estiloTitulo);
console.log(grupo2);
console.log(`%c${grupo3.nombre}`, estiloTitulo);
console.log(grupo3);
console.log(`%c${grupo4.nombre}`, estiloTitulo);
console.log(grupo4);
console.log(`%c${grupo5.nombre}`, estiloTitulo);
console.log(grupo5);


