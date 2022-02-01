import { HttpClient } from '@angular/common/http';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-mecanico',
  templateUrl: './registro-mecanico.component.html',
  styleUrls: ['./registro-mecanico.component.css']
})
export class RegistroMecanicoComponent implements OnInit {

  nombre:string = "";
  correo:string = "";
  cedula:string = "";
  fecha:string = "";
  contra:string = "";
  apellido:string = "";
  celular:string = "";
  rol:string = "mecanico";
  error:boolean = false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  registrar(){
    if(this.cedula!="" && this.contra!="" && this.nombre!='' && this.correo!='' && this.fecha!='' && this.contra!=''){
      let nom = this.nombre.split(" ");
    if(nom.length >0){
      this.apellido = nom[1];
      this.nombre = nom[0];
    }
    this.http.put<any>("http://localhost:3001/usuarios/registro",{
      nombre:this.nombre,
      correo:this.correo,
      fecha:this.fecha,
      cedula:this.cedula,
      apellido:this.apellido,
      rol:this.rol,
      celular:this.celular,
      contrasenia:this.contra
    }).subscribe(data => {
      if(data.status ==400){
        this.error = true;
      }
    })
    }else{
      this.error = true;
    }

  }

}
