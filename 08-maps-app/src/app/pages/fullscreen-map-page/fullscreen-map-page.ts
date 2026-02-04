import { AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';
import { DecimalPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;




@Component({
  selector: 'app-fullscreen-map-page',
  imports: [
    DecimalPipe
  ],
  templateUrl: './fullscreen-map-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    div {
      width:100vw;
      height: calc(100vh - 64px);
    }

    #controls {
      background-color: white;
      padding:10px;
      border-radius: 5px;
      position: fixed;
      bottom: 25px;
      right: 20px;
      z-index: 999;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
      border: 1px solid #e2e8f0;
      width: 250px;
    }
  `
})
export class FullscreenMapPage implements AfterViewInit {

  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map | null>(null);

  zoom = signal(14);

  zoomEffect = effect(() => {
    if (!this.map()) return;

    //this.map()?.setZoom(this.zoom());
    this.map()?.zoomTo(this.zoom());
  });


  async ngAfterViewInit() {

    if (!this.divElement()) return;

    //await new Promise ((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()?.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-6.729120964211328, 37.91690866444012], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });

    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map){

    map.on('zoomend', (e) => {
      const newZoom = map.getZoom();
      this.zoom.set(newZoom);
    });


    this.map.set(map);
  }

}
