import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.css']
})
export class MecanicoComponent implements OnInit {

  usuario:Usuario = {
    id_usuario: 0,
    cedula: '',
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
    ubicacion: '',
    celular: '',
    foto: {
      type: '',
      data: ''
    },
    rol: '',
    correo: ''
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
