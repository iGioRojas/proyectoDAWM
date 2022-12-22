import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-taller',
  templateUrl: './solicitar-taller.component.html',
  styleUrls: ['./solicitar-taller.component.css']
})
export class SolicitarTallerComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
      fetch("http://localhost:3001/usuarios/token",{
        method:'post',
        headers:{
          'authorization':`Bearer ${token}`
        }
      }).then(response => response.json())
      .then(data => {
        if (data['authData']['tipo'] != 'cliente') {
          this.router.navigate(["/"]);
          return;
        }
    });
  }

  enviar(){
    let div:HTMLElement = document.getElementById("complete") as HTMLElement;
    div.innerHTML = `<h1 class='p-4'>Formulario completado, enviando...</h1>`
    setInterval(()=>{
      div.innerHTML = `<h1 class='p-4'>Enviado</h1>`
    },3000);
  }

}
