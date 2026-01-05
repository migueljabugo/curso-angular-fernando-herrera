
export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public name: string,
        private address?: string
        ) {}

}

//export class Hero extends Person {
//    constructor(
//        public alterEgo: string,
//        public age: number,
//        public realName: string
//    ) {
//        super( realName, 'New York, USA' );
//    }
//}

export class Hero {

    //public Person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realname: string,
        public person: Person
    ) {
        
        //this.Person = new Person(realname);

    }
}




const tony = new Person('Tony Stark', 'Malibu, California');

const ironman = new Hero('Ironman', 45 , 'Tony Stark', tony);

console.log( ironman );