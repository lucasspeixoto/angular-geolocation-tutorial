import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
} from '@angular/core';

import type * as Leaflet from 'leaflet';

declare let L: typeof Leaflet;

@Component({
  selector: 'app-current-position',
  imports: [],
  template: ` <div class="container">
    <div id="map"></div>
  </div>`,
  styles: [
    `
      .container {
        height: 100vh;
      }

      #map {
        height: 40vh;
        width: auto;
        margin-bottom: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentPositionComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
    }

    let map = L.map('map');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const [latitude, longitude] = this.getLatitudeAndLongitude(position);

        map.setView([latitude, longitude], 13);

        let osm = L.tileLayer(
          'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> ',
            maxZoom: 19,
          }
        );

        osm.addTo(map);

        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup('You are here!')
          .openPopup();
      },
      (error) => {
        if (error.code) {
          alert('Unable to retrieve your location');
        }
      }
    );

    navigator.geolocation.watchPosition(
      (position) => {
        const [latitude, longitude] = this.getLatitudeAndLongitude(position);

        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup('You are here!')
          .openPopup();
      },
      (error) => {
        if (error.code) {
          alert('Unable to retrieve your location');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  public getLatitudeAndLongitude(position: GeolocationPosition): number[] {
    //return [position.coords.latitude, position.coords.longitude];
    return [40.785091, -73.968285];
  }
}
