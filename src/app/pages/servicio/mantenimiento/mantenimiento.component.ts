import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css'],
})
export class MantenimientoComponent implements OnInit {
  public autos: any[] = [];
  private id_usuario: any = 0;
  private id_auto: number = 0;
  public seguimientos: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  public onSubmit(data: any) {
    fetch(`http://localhost:3001/usuarios/ubicacion/${data.id_usuario}`)
      .then((res) => res.json())
      .then((datos) => {
        this.seguimientos = [];
        let plantilla = `
        <tr>
          <th>Propietario:</th>
          <td>${datos.nombres} ${datos.apellidos}</td>
        </tr>
        <tr>
          <th>Dirección:</th>
          <td>${datos.ubicacion_ubicacion.provincia}</td>
        </tr>
        <tr>
          <th>Teléfono:</th>
          <td>${datos.celular}</td>
        </tr>
        `;
        let elemento = document.getElementById('llenar-datos');
        if (elemento !== null) {
          elemento.innerHTML = plantilla;
        }
        this.id_auto = datos.id_usuario;
        this.cargarVehiculos(datos.id_usuario);
      })
      .catch((err) => err);
  }

  private cargarVehiculos(id_usuario: any) {
    fetch(`http://localhost:3001/usuarios/auto/${id_usuario}`)
      .then((res) => res.json())
      .then((data) => {
        this.autos = data[0].autos;
        this.iniChange(data[0].autos[0].id_auto);
      })
      .catch((err) => console.log(err));
  }

  public iniChange(value: any): void {
    this.id_auto = value;
    fetch(`http://localhost:3001/serv_mantenimiento/procesos/${value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.seguimientos = data;
      })
      .catch((err) => err);
  }

  public onChange(value: any): void {
    this.id_auto = value.target.value;
    fetch(
      `http://localhost:3001/serv_mantenimiento/procesos/${value.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.seguimientos = data;
      })
      .catch((err) => err);
  }

  public crearServ(data: any) {
    let current = new Date();
    let mes = this.formatDatos(current.getMonth());
    let dia = this.formatDatos(current.getDate());
    let horas = this.formatDatos(current.getHours());
    let minutos = this.formatDatos(current.getMinutes());
    let segundos = this.formatDatos(current.getSeconds());
    let postData = {
      fecha_actual: `${current.getFullYear()}-${mes}-${dia}`,
      hora_actual: `${horas}:${minutos}:${segundos}`,
      observacion_mecanico: data.detalles,
      foto: null,
      tipoMantenimiento: 2,
      id_auto: this.id_auto,
      id_usuario: this.id_usuario,
    };
    fetch('http://localhost:3001/serv_mantenimiento/nuevoproceso', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(postData),
    });
  }

  private formatDatos(dato: any) {
    return dato.toString().length === 2 ? `${dato}` : `0${dato}`;
  }
}
