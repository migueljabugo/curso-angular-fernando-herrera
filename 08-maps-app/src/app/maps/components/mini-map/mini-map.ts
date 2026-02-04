import { AfterViewInit, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;


@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniMap implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);

  lngLat = input.required<LngLatLike>();


  async ngAfterViewInit() {

    if (!this.divElement()) return;

    const element = this.divElement()?.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat(), // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const marker = new mapboxgl.Marker({
      color: color
    })
    .setLngLat(this.lngLat())
    .addTo(map);
  }
}
