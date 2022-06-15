/*
    ===== Tarea Objeto e Interface - TypeScript =====
*/

interface superHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const heroe: superHeroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion: {
        calle: "Main St",
        pais: "USA",
        ciudad: "NY"
    },
    mostrarDireccion() {
        return this.nombre + "," + this.direccion.calle + "," + this.direccion.pais;
    }
}

console.log(heroe.mostrarDireccion());