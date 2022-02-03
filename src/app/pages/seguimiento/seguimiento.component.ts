import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css'],
})
export class SeguimientoComponent implements OnInit {
  public autos: any[] = [];
  public seguimientos: any[] = [];
  constructor(public router:Router) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3001/usuarios/token', {
        method: 'post',
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data['authData']['tipo'] != 'cliente') {
            this.router.navigate(["/"]);
            return;
          }
          this.cargarDatos(data.authData.id);
        });
    }
  }

  private cargarDatos(id: string): void {
    fetch(`http://localhost:3001/usuarios/auto/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.autos = data[0].autos;
      })
      .catch((err) => console.log(err));
  }

  public onChange(value: any): void {
    fetch(
      `http://localhost:3001/serv_mantenimiento/procesos/${value.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.seguimientos = data;
      })
      .catch((err) => err);
  }
}
