import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Promo2 } from 'src/app/interfaces/promo2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  user:Usuario;
  promociones:any[] = []
  promocion:Promo2;
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
    this.promocion = {
      titulo: '',
      precio: '',
      descripcion: '',
    }
   }

  ngOnInit(): void {
    this.infoCliente();
    this.mostrarInfo();
  }

    infoCliente(){
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
        .then(data => {
          this.user = data;
          fetch(`http://localhost:3001/usuarios/ubicacion/${this.user.ubicacion}`).then(response => response.json())
          .then(data => this.user.ubicacion = data['provincia']);
        });
      });
    }

    mostrarInfo(){
      fetch("http://localhost:3001/promociones").then(response => response.json())
      .then(data => {
        this.promociones = data;
        this.promocion = this.promociones[Math.floor(Math.random() * this.promociones.length)];
      });

    }

}
