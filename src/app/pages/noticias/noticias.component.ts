import { Component, OnInit } from '@angular/core';
import { PromoService } from 'src/app/services/promo.service';
import { Promo } from 'src/app/interfaces/promo';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  filtroNoticias = ""
  noticias:Promo[] = []
  constructor(private promosService:PromoService) {
  }

  ngOnInit(): void {
    this.promosService.cargarPromos()
    .subscribe(data => {
       this.noticias = data;
    });
  }

}
