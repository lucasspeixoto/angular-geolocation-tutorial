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
        height: 100vh;
        width: auto;
        margin-bottom: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentPositionComponent implements AfterViewInit {
  public userMarker!: Leaflet.Marker;

  public map!: Leaflet.Map;

  public ngAfterViewInit(): void {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
    }

    this.map = L.map('map');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const [latitude, longitude] = this.getLatitudeAndLongitude(position);

        this.map.setView([latitude, longitude], 13);
        this.userMarker = L.marker([latitude, longitude]).addTo(this.map);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(this.map);
      },
      this.handlerGeolocationError,
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    navigator.geolocation.watchPosition(
      (position) => {
        const [latitude, longitude] = this.getLatitudeAndLongitude(position);

        this.userMarker.setLatLng([latitude, longitude]);
      },
      this.handlerGeolocationError,
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  public getLatitudeAndLongitude(position: GeolocationPosition): number[] {
    return [51.505, -0.09];

    //return [position.coords.latitude, position.coords.longitude];
  }

  public handlerGeolocationError(error: GeolocationPositionError): void {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.warn('O usuário negou a solicitação de geolocalização.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.warn('As informações de localização não estão disponíveis.');
        break;
      case error.TIMEOUT:
        console.warn('A solicitação para obter a localização expirou.');
        break;
      default:
        console.warn('Ocorreu um erro desconhecido.');
        break;
    }
  }
}
