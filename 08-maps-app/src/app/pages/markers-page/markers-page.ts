import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { v4 as UUIDv4 } from 'uuid';
import { JsonPipe } from '@angular/common';


mapboxgl.accessToken = environment.mapboxKey;

interface Marker {
  id:string,
  mapboxMarker: mapboxgl.Marker
}

@Component({
  selector: 'app-markers-page',
  imports: [
    JsonPipe
  ],
  templateUrl: './markers-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkersPage implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);
  markers = signal<Marker[]>([]);



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

//    const marker = new mapboxgl.Marker({
//      draggable: true,
//      color: '#ff0000'
//    })
//    .setLngLat([-6.729120964211328, 37.91690866444012])
//    .addTo(map);
//
//    marker.on('dragend', (e) => {
//      console.log(e.target.getLngLat());
//    });



    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map){
    map.on('click', (e)=> this.mapClick(e));



    this.map.set(map);
  }

  mapClick(event: mapboxgl.MapMouseEvent){
    //console.log(event.lngLat);


    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const marker = new mapboxgl.Marker({
      color: color
    })
    .setLngLat(event.lngLat)
    .addTo(event.target);

    const newMarker: Marker = {
      id: UUIDv4(),
      mapboxMarker: marker
    }

    //this.markers.set([newMarker, ...this.markers()]);
    this.markers.update((markers) =>[newMarker, ...markers]);
    console.log(this.markers());
  }


  flyToMarker(lngLat: mapboxgl.LngLatLike) {
    if (!this.map()) return;

    this.map()?.flyTo({
      zoom: 14,
      center: lngLat
    });


  }
}
