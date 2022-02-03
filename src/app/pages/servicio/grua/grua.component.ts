import { Component, OnInit } from '@angular/core';

declare const L: any;

@Component({
  selector: 'app-grua',
  templateUrl: './grua.component.html',
  styleUrls: ['./grua.component.css'],
})
export class GruaComponent implements OnInit {
  public autos: any[] = [];
  private latitud: number = 0;
  private longitud: number = 0;
  private idUsuario: number = 0;
  title = 'locationApp';
  ClienteLogueado: boolean = true;

  constructor() {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3001/usuarios/token', {
        method: 'post',
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.idUsuario = data.authData.id;
          this.cargarDatos(data.authData.id);
        });
    }
  }

  localizar() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      this.latitud = coords.latitude;
      this.longitud = coords.longitude;
      let mymap = L.map('map').setView(latLong, 16);
      let marker = L.marker(latLong).addTo(mymap);
      L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token',
      }).addTo(mymap);
    });
  }

  private cargarDatos(id: string): void {
    fetch(`http://localhost:3001/usuarios/auto/741`)
      .then((res) => res.json())
      .then((data) => {
        this.autos = data[0].autos;
      })
      .catch((err) => console.log(err));
  }

  public onSubmit(data: any) {
    console.log(data);
    let current = new Date();
    let mes = this.formatDatos(current.getMonth());
    let dia = this.formatDatos(current.getDate());
    let horas = this.formatDatos(current.getHours());
    let minutos = this.formatDatos(current.getMinutes());
    let segundos = this.formatDatos(current.getSeconds());
    let postData = {
      id_conductor: this.idUsuario,
      id_auto: data.vehiculo,
      ubicacion_latitud: this.latitud,
      ubicacion_longitud: this.longitud,
      ubicacion_referencia: data.detalles,
      fecha: `${current.getFullYear()}-${mes}-${dia}`,
      hora_inicio: `${horas}:${minutos}:${segundos}`,
      hora_final: `${horas}:${minutos}:${segundos}`,
      id_promocion: null,
    };

    fetch('http://localhost:3001/serv_grua', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(postData),
    });
  }

  private formatDatos(dato: any) {
    return dato.toString().length === 2 ? `${dato}` : `0${dato}`;
  }
}
