
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Miguel Angel'
};

const passenger2: Passenger = {
    name: 'Maria',
    children: ['Natalia', 'Gabriel']
};

const printChildren = (passenger: Passenger): number => {

    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length;
    
    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

printChildren(passenger1);
printChildren(passenger2);