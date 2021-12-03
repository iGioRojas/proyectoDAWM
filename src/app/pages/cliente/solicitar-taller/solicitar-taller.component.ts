import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitar-taller',
  templateUrl: './solicitar-taller.component.html',
  styleUrls: ['./solicitar-taller.component.css']
})
export class SolicitarTallerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    let div:HTMLElement = document.getElementById("complete") as HTMLElement;
    div.innerHTML = `<h1 class='p-4'>Formulario completado, enviando...</h1>`
    setInterval(()=>{
      div.innerHTML = `<h1 class='p-4'>Enviado</h1>`
    },3000);
  }

}
