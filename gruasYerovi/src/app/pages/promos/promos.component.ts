import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromoService } from 'src/app/services/promo.service';
import { Promo } from 'src/app/interfaces/promo';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {

  promos:Promo[] =[]
  id:number = 0;
  seleccion:Promo = {
    id: 0,
    nombre: "",
    img:'',
    precio:'',
    fechaInicio:'',
    fechaFin:'',
    descripcion:'',
  };

  constructor(private route:ActivatedRoute,private promosService:PromoService) {
    route.params.subscribe(data => {
      this.id = data['id'];
    })
  }

  ngOnInit(): void {
    this.promosService.cargarPromos()
    .subscribe(data => {
       this.promos = data;
       this.seleccion = this.promos[this.id-1];
    });
  }

}
