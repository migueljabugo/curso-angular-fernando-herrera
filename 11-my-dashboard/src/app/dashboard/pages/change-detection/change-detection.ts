import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-change-detection',
  imports: [
    Title,
    JsonPipe
  ],
  templateUrl: './change-detection.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetection {

  public currentFramework = computed(() =>
    `Change detection - ${ this.frameworkAsSignal().name }`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor(){

    setTimeout(() => {
      //this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update(framework => ({
        ...framework,
        name: 'React'
      }));


      console.log("Hecho")
    }, 3000);
  }


}
