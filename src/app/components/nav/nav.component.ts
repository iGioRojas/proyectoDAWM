import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  active = "";
  cerrar = "";
  constructor() { }

  ngOnInit(): void {

  }

  mobile(){
    if(this.active == ""){
       this.active = "navbar-mobile";
       this.cerrar = "bi-x"
    }else{
       this.active = "";
       this.cerrar = "bi bi-list";
    }
  }





}

