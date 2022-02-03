import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    fetch("http://localhost:3001/usuarios/token",{
      method:'post',
      headers:{
        'authorization':`Bearer ${token}`
      }
    }).then(response => response.json())
    .then(data => {
      if (data['authData']['tipo'] != 'mecanico') {
        this.router.navigate(["/"]);
        return;
      }
  });
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
