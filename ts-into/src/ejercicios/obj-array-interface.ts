/*
    ===== Objetos, arreglos e interfaces - TypeScript =====
*/

//Si no especificamos de que es el array, es de tipo "any" o sea cualquier dato
//Se aconseja especificarle algun tipo de dato al array
let habilidades = [];

//Esto es un arreglo que contiene: numero, cadena, boleano, array y objeto
let habilidades1 = [1, "Dariel", true, [], {}];

//Si no especificamos, TypeScript determina el tipo de dato
let habilidades2 = ["bash", "counter", "healing"];

//Un array puede ser de los tipos de datos que nosotros especificamos
let habilidades3: (boolean | string | number)[] = ["bash", "counter", "healing"];

//Las interfaces sirven para que los objetos tengan unos parametros predeterminados
//y no puedan ser modificados en el codigo (pueden agregar un nuevo campo al objeto
//sin que este forme parte inicialmente del mismo)
interface Personaje {
    nombre: string; 
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //El "?" hace que sea opcional la variable
}

const personaje: Personaje = {
    nombre: "Ash  Ketchup", 
    hp: 100,
    habilidades: ["bash", "counter", "healing"]
}

//Si el campo "puebloNatal" no existe en el objeto, pero dicho objeto es de tipo any
//nos permitira añadirlo y guardar datos 
personaje.puebloNatal = "Pueblo Paleta";

//Nos mostrara una tabla con toda la info del objeto
console.table(personaje);