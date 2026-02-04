import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;


@Component({
  selector: 'app-markers-page',
  imports: [],
  templateUrl: './markers-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkersPage implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);


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

    const marker = new mapboxgl.Marker({
      draggable: true,
      color: '#ff0000'
    })
    .setLngLat([-6.729120964211328, 37.91690866444012])
    .addTo(map);

    marker.on('dragend', (e) => {
      console.log(e.target.getLngLat());
    });



    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map){




  }


}
