/*
    ===== Genericos de TypeScript =====
*/

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy("Hola Mundo");
let soyNumber = queTipoSoy(100);
let soyArray = queTipoSoy( [1,2,3,4,5,6,7,8,9,10] );

// El "<number>" despues de la llamada de la funcion especifica el tipo de dato
// que espera que sea devuelto
let soyExlicito = queTipoSoy<number>( 100 );