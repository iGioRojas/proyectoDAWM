import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.css'],
})
export class MecanicoComponent implements OnInit {
  usuario: Usuario = {
    id_usuario: 0,
    cedula: '',
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
    ubicacion: '',
    celular: '',
    foto: {
      type: '',
      data: '',
    },
    rol: '',
    correo: '',
  };

  fecha: Date;
  saludo: string = '';
  tiempo: string = '';

  cantidadMantenimiento: string = '';

  constructor(private router:Router) {
    this.fecha = new Date();
    this.tiempo = this.fecha.toString().split(' ')[4];
    let hora = parseInt(this.tiempo.split(' ')[0]);
    if (hora > 12 && hora < 18) {
      this.saludo = 'Buenas Tardes';
    } else if (hora < 12) {
      this.saludo = 'Buenos Días';
    } else if (hora >= 18) {
      this.saludo = 'Buenas Noches';
    }
  }

  ngOnInit(): void {
    this.infoMecanico();
  }

  infoMecanico() {
    let token = localStorage.getItem('token');
    fetch('http://localhost:3001/usuarios/token', {
      method: 'post',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let id = data['authData']['id'];
        if (data['authData']['tipo'] != 'mecanico') {
          this.router.navigate(["/"]);
        }else{
          fetch(`http://localhost:3001/usuarios/id/${id}`)
            .then((response) => response.json())
            .then((data) => {
              this.usuario = data;
              fetch(
                `http://localhost:3001/serv_mantenimiento/conteo/${this.usuario.id_usuario}`
              )
                .then((response) => response.json())
                .then((data) => {
                  let cantidad = data['cantidad'];
                  if (cantidad > 1) {
                    this.cantidadMantenimiento =
                      'Ha realizado ' + cantidad + ' mantenimientos.';
                  } else if (cantidad == 1) {
                    this.cantidadMantenimiento =
                      'Ha realizado ' + cantidad + ' mantenimiento.';
                  } else {
                    this.cantidadMantenimiento =
                      'No ha realizado ningún mantenimiento.';
                  }
                });
              });
            }
          });

  }

  cerrarSesion(){
    localStorage.clear();
    window.location.reload();
  }
}
