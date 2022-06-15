/*
    ===== Desestructuracion de Argumentos - TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 150
}

const tablet: Producto = {
    desc: "iPad Air",
    precio: 350
}

//ISV retorno un numero
function calculaISV( productos: Producto[] ): number {
    let total = 0; 

    //Utiliza solamente un atributo en particular del parametro que recibimos
    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return total*0.15;
}

//ISV retorno un Arreglo de numeros
export function calculaISV1( productos: Producto[] ): [number, number] {
    let total = 0; 

    //Utiliza solamente un atributo en particular del parametro que recibimos
    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return [total, total*0.15];
}

//Array de Objetos
/* const articulos = [ telefono, tablet ];

const isv = calculaISV(articulos);
const [ total, isv1 ] = calculaISV1(articulos);

console.log("Total: ",total);
console.log("ISV: ",isv1); */