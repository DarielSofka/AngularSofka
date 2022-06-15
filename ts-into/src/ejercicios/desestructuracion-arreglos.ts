/*
    ===== Desestructuracion de Arreglos - TypeScript =====
*/

const dbz: string[] = ["Goku", "Vegeta", "Trunks", "Gohan"]; 
const [p1, p2, p3] = dbz; //En un array hay que asignarle variables dependiendo de su posicion
const [ , , ,p4] = dbz; //Para especificar que solo queremos uno

console.log("Personaje 1: ", p1);
console.log("Personaje 2: ", p2);
console.log("Personaje 3: ", p3);
console.log("Personaje 4: ", p4);