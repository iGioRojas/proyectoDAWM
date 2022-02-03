import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.css']
})
export class RegistrarVehiculoComponent implements OnInit {

  propietario:number=0;
  placa:string='';
  marca:string='';
  modelo:string='';
  color:string='';
  clave:number=0;

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

  registrarAuto(){
    this.http.post<any>("http://localhost:3001/autos",{
      id_propietario:this.propietario,
      placa:this.placa,
      marca:this.marca,
      modelo:this.modelo,
      color:this.color,
      clave:this.clave,
      }).subscribe(data => {
        console.log(data);
      })
  }

}
