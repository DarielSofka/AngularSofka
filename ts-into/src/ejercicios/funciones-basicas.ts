/*
    ===== Funciones Basicas - TypeScript =====
*/

//En esta funcion como no especifica de que tipo deben ser los parametros
//pueden recibir cualquier tipo de dato
function sumar(a, b){
    return a + b;
}

//Le especificamos los parametros pero no la salida
function sumar1(a: number, b: number){
    return (a + b).toString();
}

//Asi especificamos los parametros y la salida
function sumar2(a: number, b: number): number{
    return a + b;
}

//un Arrow Function con parametros y salida especificada
const sumarFlecha = (a: number,b: number):number => {
    return a + b;
}

//Hay 3 parametros: los obligatorios, los opcionales y por ultimo los que tienen valor por defecto
function multiplicar(numero: number, otroNumero?:number, base:number = 2): number {
    return numero * base;
}

const resultado = sumar("Dariel","de Sosa");
const resultado1 = sumarFlecha(2,3);
const resultado2 = multiplicar(2,0,10);

console.log(resultado2);