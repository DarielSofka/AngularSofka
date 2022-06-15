/*
    ===== Tipos de Datos - TypeScript =====
*/

//Esto seria Tipado Fuerte
let nombre = "Dariel";
let nombre1: string = "Strider"; //TypeScript nos permite especificar el tipo de dato

const nombre2 = "Carlitos"; //Constante

let edad: number | string = 69; //Puede ser 2 tipos de datos (uno u otro)
edad = "Setenta"

let estaVivo: boolean = true; //Booleano

console.log(nombre, edad, estaVivo);
