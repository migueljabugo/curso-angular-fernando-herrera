
export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public name: string,
        private address: string
        ) {}

}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super( realName, 'New York, USA' );
    }
}

const ironman = new Hero('Ironman', 45 , 'Tony Stark');;

console.log( ironman );