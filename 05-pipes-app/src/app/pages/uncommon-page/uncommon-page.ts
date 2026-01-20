import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nSelectPipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe],
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
}
