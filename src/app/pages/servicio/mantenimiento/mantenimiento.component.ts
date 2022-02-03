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
  constructor() {}

  ngOnInit(): void {}

  public onSubmit(data: any) {
    fetch(`http://localhost:3001/usuarios/ubicacion/${data.id_usuario}`)
      .then((res) => res.json())
      .then((datos) => {
        console.log(datos);
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
        this.id_auto = this.autos[0].id_auto;
      })
      .catch((err) => console.log(err));
  }
}
