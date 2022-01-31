import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:string = "";
  contra:string = "";

  error:boolean = false;
  constructor(public router:Router,public login:LoginService) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    if(this.correo !="" && this.contra !=""){
      this.login.getUser(this.correo,this.contra).subscribe(data => {
        if(data.length == 0){this.error = true}
         else{
           let rol = data.rol;
           localStorage.setItem('token',data['token']);
           switch(rol){
             case "cliente":
                this.router.navigate(['/cliente']);
                break;
             case "mecanico":
                this.router.navigate(['/mecanico']);
                break;
             case "administrador":
                this.router.navigate(['/perfil'])
                break;
              default:
                this.error = true;
           }
          }
        })

    }else{
      this.error = true;
    }
  }

}

