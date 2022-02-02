import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import * as d3 from 'd3';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user:Usuario;
  active = "";
  constructor() {
    this.user = {
      id_usuario:0,
      cedula:'',
      nombres:'',
      apellidos:'',
      fecha_nacimiento:'',
      ubicacion:'',
      celular:'',
      foto:{
        type:'',
        data:'',
      },
      rol:'',
      correo:''
    }
  }

  ngOnInit(): void {
    this.infoAdmin();
}

  enfasis(){
    this.active = "bg-warning"
  }

  infoAdmin(){
    let token = localStorage.getItem("token");
    fetch("http://localhost:3001/usuarios/token",{
      method:'post',
      headers:{
        'authorization':`Bearer ${token}`
      }
    }).then(response => response.json())
    .then(data => {
      let id = data['authData']['id'];
      fetch(`http://localhost:3001/usuarios/id/${id}`).then(response => response.json())
      .then(data => this.user = data);
    });
  }

  cerrarSesion(){
    localStorage.clear();
    window.location.reload();
  }
}
