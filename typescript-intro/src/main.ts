import './style.css'

//import './topics/01-basic-types';
//import './topics/02-object-interface';
import './topics/03-functions';

let app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `Hola mundo`;

console.log("Hola mundo desde TypeScript");