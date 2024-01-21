import "./style.css";

interface Pelicula {
    titulo: string,
    director: string,
    anyo: number,
};

const peliA : Pelicula = {
    titulo: "Blade Runner",
    director: "Ridley Scott",
    anyo: 1982,
}

const peliB : Pelicula = {
    titulo: "The Matrix",
    director: "Lana Wachowski",
    anyo: 1999,
}

console.log(peliA);
console.log(peliB);