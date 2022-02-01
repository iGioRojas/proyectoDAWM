import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  lugar:any[] = [];
  provincias:string[] = [];
  ciudades:string[] = [];
  valorProvincia:string = "";
  cedula:string = '';
  nombres:string = '';
  apellidos:string = '';
  fecha_nacimiento:string = '';
  ciudad:string = '';
  celular:string = '';
  rol:string = 'cliente';
  correo:string = '';
  contra:string = '';
  referencia:string = '';
  error:boolean = false;
  login:boolean = false;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.ubicacion();
  }

  public ubicacion(){
      fetch("https://gist.githubusercontent.com/emamut/6626d3dff58598b624a1/raw/166183f4520c4603987c55498df8d2983703c316/provincias.json").then(response  => response.json())
      .then(data =>{
        for(let i = 1; i<=24 ;i++){
          this.lugar.push(data[i.toString()])
        }

      for(let lugar of this.lugar){
        this.provincias.push(lugar["provincia"]);
      }
      })
  }

  public seleCiudad(){
    this.ciudades = []
      for(let lugar in this.lugar){
        if(this.lugar[lugar]["provincia"]===this.valorProvincia){
          for(let valor in this.lugar[lugar]["cantones"]){
            this.ciudades.push(this.lugar[lugar]["cantones"][valor]["canton"]);
          }
        }
      }
  }

  registrar(){
    let validar = this.contra!='' && this.correo !='' && this.nombres !='' && this.apellidos != '' && this.cedula != '' && this.valorProvincia !='' && this.ciudad != '' && this.fecha_nacimiento != '' && this.celular != '';

    if(validar){
      this.http.put<any>("http://localhost:3001/usuarios/registro",{
      nombre:this.nombres,
      correo:this.correo,
      fecha:this.fecha_nacimiento,
      cedula:this.cedula,
      apellido:this.apellidos,
      rol:this.rol,
      celular:this.celular,
      contrasenia:this.contra,
      provincia:this.valorProvincia,
      ciudad:this.ciudad,
      referencia:this.referencia,
      }).subscribe(data => {
        if(data.status == 400){
          this.error = true;
        }else{
          this.login = true;
        }
      })
    }else{
      this.error = true;
    }
  }
}
