
function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number=2): number {
    return firstNumber * base;
}


//const result = addNumbers(1, 2);
//const result2 = addNumbersArrow(1, 2);
//const multiplyResult = multiply(5);
//console.log({result, result2, multiplyResult});

interface Character {
    name: string;
    pv: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    
    character.pv += amount;

}


const strider: Character = {
    name: 'Strider',
    pv: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.pv}`);
    }
}

healCharacter(strider, 20);
healCharacter(strider, 10);

strider.showHp();


export {};