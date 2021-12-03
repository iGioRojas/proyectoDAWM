import { Component, OnInit } from '@angular/core';

declare const L:any;

@Component({
  selector: 'app-grua',
  templateUrl: './grua.component.html',
  styleUrls: ['./grua.component.css']
})
export class GruaComponent implements OnInit {

  title = 'locationApp'

  constructor() { }

  ngOnInit(): void {
  }

  localizar(){
    if(!navigator.geolocation){
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      const coords = position.coords;
      const latLong = [coords.latitude,coords.longitude];
      let mymap = L.map('map').setView(latLong, 16);
      let marker = L.marker(latLong).addTo(mymap);
      L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);
      let div:HTMLElement = document.getElementById("ubicacion") as HTMLElement;
      div.innerHTML = `Su ubicación es : ${latLong}`
    });
  }
}
