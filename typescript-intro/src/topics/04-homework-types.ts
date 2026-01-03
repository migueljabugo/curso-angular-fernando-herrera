/*
    ===== Código de TypeScript =====
*/

interface Address {
    country: string;
    pais: string;
    city: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        country: 'Main St',
        pais: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};