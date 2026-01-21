import { ChangeDetectionStrategy, Component, signal, ɵdefaultKeyValueDiffers } from '@angular/core';
import { Card } from "../../components/card/card";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

const client1 = {
  name: 'Miguel Angel',
  gender: 'male',
  age: 32,
  address:'Jabugo, Huelva'
}
const client2 = {
  name: 'Ariadna',
  gender: 'female',
  age: 26,
  address:'Fuenteheridos, Huelva'
}
@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {

  //i18n Select
  client = signal(client1);

  invitationMap={
    male:'invitarlo',
    female:'invitarla'
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
    } else {
      this.client.set(client1);
    }
  }

  //i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  });

  clients = signal([
    "Miguel Angel",
    "Ariadna",
    "Maria",
    "Juan",
    "Paco",
    "Luis",
    "Lucia",
    "Ana"
  ]);

  deleteClient(){
    this.clients.update(prev => prev.slice(1));
  }

  //KeyValuePipe

  profile = {
    name: 'Miguel Angel',
    age: 32,
    address:'Jabugo, Huelva'
  }


  //Async Pipe
  promiseValue: Promise<string>  = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Tenemos un error en la promesa');
      //resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada');
    }, 3500);
  });

}
