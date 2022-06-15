/*
    ===== Calses de TypeScript =====
*/

class nombreReal {

    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends nombreReal{

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombeReal: string
    ) {
        super(nombeReal,"New York, USA");
    }


}

const ironman = new Heroe("Ironman",45,"Tony Stark");

console.log(ironman);