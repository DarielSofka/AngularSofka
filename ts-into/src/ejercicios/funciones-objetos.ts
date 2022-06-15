/*
    ===== Funciones con Obejtos - TypeScript =====
*/

interface PersonajeDS {
    nombre: string;
    hp: number;
    mostrarHp: () => void;
}

//Funcion que afecte a objetos
function curar(personaje:PersonajeDS, curarX: number = 2): void{
    personaje.hp += curarX;
}

const nuevoPersonaje: PersonajeDS = {
    nombre: "Darius",
    hp: 100,
    mostrarHp(){
        console.log("Puntos de Vida: ",this.hp);
    }  
}

curar(nuevoPersonaje,5);
nuevoPersonaje.mostrarHp();