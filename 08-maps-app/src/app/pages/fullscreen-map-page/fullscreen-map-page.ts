import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;




@Component({
  selector: 'app-fullscreen-map-page',
  imports: [],
  templateUrl: './fullscreen-map-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    div {
      width:100vw;
      height: calc(100vh - 64px);
      background-color: red;
    }
  `
})
export class FullscreenMapPage implements AfterViewInit {

  divElement = viewChild<ElementRef>('map');


  async ngAfterViewInit() {

    if (!this.divElement()) return;

    //await new Promise ((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()?.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-6.729120964211328, 37.91690866444012], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
  }

}
