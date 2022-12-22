import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  filtro:string = '';
  ultimosMantenimientos:any = [];
  propietario:any[] = [];
  clientes:number = 0;
  mecanicos:number = 0;
  ingresos:number = 0;
  infoNosql:any = []
  constructor() { }

  ngOnInit(): void {
    this.cargarMantenimientos();
    this.cargarReporte();
  }

  cargarMantenimientos(){
    fetch("http://localhost:3001/serv_mantenimiento/reporte")
    .then(response => response.json())
    .then(data => {
      this.ultimosMantenimientos = data;
      for(let info of this.ultimosMantenimientos){
        let id = info.id_auto_auto.propietario;
        fetch(`http://localhost:3001/usuarios/id/${id}`).then(response => response.json()).then(data => this.propietario.push(data));
        this.ingresos += parseInt(info.precio_total);
        if(this.clientes == 0){
          fetch("http://localhost:3001/usuarios/cliente").then(response => response.json())
          .then(data => this.clientes = data.length);
        }
        if(this.mecanicos == 0){
          fetch("http://localhost:3001/usuarios/mecanico").then(response => response.json())
          .then(data => this.mecanicos = data.length);
        }
      }
    });
  }

  cargarReporte(){
    fetch("http://localhost:3002/reporte").then(response => response.json()).then(data => this.infoNosql = data)
  }
}
