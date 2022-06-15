/*
    ===== Desestructuracion de Objetos- TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
        autor: "Ed Sheeran",
        anio: 2015
    }
}

//Desestructuracion de Objetos
//Esto nos permite dividir los atributos de un objeto, para que sean nuevos atributos
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

console.log(volumen);
console.log(segundo);
console.log(cancion);
console.log(autor);
