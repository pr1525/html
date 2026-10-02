
const generos = [
    "REGUETON",
    "ROCK",
    "SALSA",
    "VALLENATO",
    "CRISTIANA",
    "VARIADO",
    "LATINO",
    "AFRO",
    "AÑOS 80"];

const emisoras = [
    { id: 1, nombre: "Candela stereo", imagen: "candela-stereo.png", genero: "LATINO" },
    { id: 2, nombre: "La consentida", imagen: "la-consentida-medellin.png", genero: "VARIADO" },
    { id: 3, nombre: "Estación Vallenata", imagen: "la-estacion-vallenata.png", genero: "VALLENATO" },
    { id: 4, nombre: "La Mega", imagen: "la-mega-bogota.png", genero: "REGUETON" },
    { id: 5, nombre: "La Reina", imagen: "la-reina.png", genero: "VARIADO" },
    { id: 6, nombre: "Latina stereo", imagen: "latina-estereo.jpg", genero: "SALSA" },
    { id: 7, nombre: "Olimpica Stereo", imagen: "olimpica-stereo.png", genero: "VARIADO" },
    { id: 8, nombre: "Oxigeno", imagen: "oxigeno-fm-colombia.png", genero: "AÑOS 80" },
    { id: 9, nombre: "Radio Latina", imagen: "radio-latina-online.jpg", genero: "LATINO" },
    { id: 10, nombre: "Clasicos del Rock", imagen: "super-clasicos-del-rock.jpg", genero: "ROCK" },
];


function obtenerEmisorasPorGenero(generoBuscado) {
    let consulta = emisoras.filter(emisora => emisora.genero === generoBuscado);
    console.log(consulta);
    return consulta;
}

let latinos = obtenerEmisorasPorGenero("LATINO");
console.log(latinos);
