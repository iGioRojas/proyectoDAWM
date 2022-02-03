import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registro-mecanico',
  templateUrl: './registro-mecanico.component.html',
  styleUrls: ['./registro-mecanico.component.css'],
})
export class RegistroMecanicoComponent implements OnInit {
  nombre: string = '';
  correo: string = '';
  cedula: string = '';
  fecha: string = '';
  contra: string = '';
  apellido: string = '';
  celular: string = '';
  rol: string = 'mecanico';
  error: boolean = false;
  lugar: any = [];
  provincias: any = [];
  ciudades: any = [];
  ciudad: string = '';
  valorProvincia: any = '';
  mecanicos: Usuario[] = [];
  registrado: boolean = false;
  modalEdit: boolean = false;
  idEditar: any;
  nombre2: string = '';
  correo2: string = '';
  fecha2: string = '';
  apellido2: string = '';
  celular2: string = '';

  public userActual: any = {};
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarMecanicos();
    this.ubicacion();
  }

  registrar() {
    if (
      this.cedula != '' &&
      this.contra != '' &&
      this.nombre != '' &&
      this.correo != '' &&
      this.fecha != '' &&
      this.contra != ''
    ) {
      let nom = this.nombre.split(' ');
      if (nom.length > 0) {
        this.apellido = nom[1];
        this.nombre = nom[0];
      }
      this.http
        .put<any>('http://localhost:3001/usuarios/registro', {
          nombre: this.nombre,
          correo: this.correo,
          fecha: this.fecha,
          cedula: this.cedula,
          apellido: this.apellido,
          rol: this.rol,
          celular: this.celular,
          contrasenia: this.contra,
          provincia: this.valorProvincia,
          ciudad: this.ciudad,
          referencia: '',
        })
        .subscribe((data) => {
          if (data.status == 400) {
            this.error = true;
          } else {
            this.registrado = true;
            setTimeout(() => window.location.reload(), 3000);
          }
        });
    } else {
      this.error = true;
    }
  }

  cargarMecanicos() {
    fetch('http://localhost:3001/usuarios/mecanico')
      .then((response) => response.json())
      .then((data) => (this.mecanicos = data));
  }

  eliminar(id: any) {
    fetch(`http://localhost:3001/usuarios/${id}`, {
      method: 'delete',
    }).then((response) => window.location.reload());
  }

  public ubicacion() {
    fetch(
      'https://gist.githubusercontent.com/emamut/6626d3dff58598b624a1/raw/166183f4520c4603987c55498df8d2983703c316/provincias.json'
    )
      .then((response) => response.json())
      .then((data) => {
        for (let i = 1; i <= 24; i++) {
          this.lugar.push(data[i.toString()]);
        }

        for (let lugar of this.lugar) {
          this.provincias.push(lugar['provincia']);
        }
      });
  }

  public seleCiudad() {
    this.ciudades = [];
    for (let lugar in this.lugar) {
      if (this.lugar[lugar]['provincia'] === this.valorProvincia) {
        for (let valor in this.lugar[lugar]['cantones']) {
          this.ciudades.push(this.lugar[lugar]['cantones'][valor]['canton']);
        }
      }
    }
  }

  editar() {
    let nom = this.nombre.split(' ');
    if (nom.length > 0) {
      this.apellido = nom[1];
      this.nombre = nom[0];
    }
    this.http
      .put<any>('http://localhost:3001/usuarios', {
        nombres: this.nombre2,
        apellidos: this.apellido2,
        fecha_nacimiento: this.fecha2,
        celular: this.celular2,
        ubicacion: 'Default',
        correo: this.correo2,
        idx: this.idEditar,
      })
      .subscribe((data) => window.location.reload());
  }

  mostrar(id: any) {
    this.modalEdit = true;
    this.idEditar = id;
    fetch(`http://localhost:3001/usuarios/id/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.userActual = data;
      })
      .catch((err) => err);
  }
  salirModal() {
    this.modalEdit = false;
  }
}
