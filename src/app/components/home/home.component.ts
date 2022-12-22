import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntrojsService } from 'src/app/services/introjs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre:string = "";
  correo:string = "";
  fecha:string = "";
  origen:string = "";
  mensaje:string = ""
  enviado:boolean = false;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  enviarCorreo(){
    this.http.post("http://localhost:3001/login/email",{
      correo:this.correo,
      nombre:this.nombre,
      fecha:this.fecha,
      origen:this.origen,
      mensaje:this.mensaje
    }).subscribe(data => console.log(data));
    this.enviado = true;
    setTimeout(()=>{window.location.reload()},3000);
  }

}
