import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-uncommon-page',
  imports: [Card],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage { }
