/*
    ===== Importacion - Exportacion TypeScript =====
*/

//Asi se importa interfaces/funciones de un documento
import { Producto, calculaISV1 } from './desestructuracion-argumentos';

//Creamos una variable que almacenara un array de objetos
const carritoCompras: Producto[] = [
    {
        desc: "Telefono 1",
        precio: 100
    },
    {
        desc: "Telefono 2",
        precio: 150
    },
];

const [total, isv] = calculaISV1( carritoCompras );

console.log("Total: ", total);
console.log("ISV: ", isv);