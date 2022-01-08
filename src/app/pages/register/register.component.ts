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
  constructor() { }

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



}
