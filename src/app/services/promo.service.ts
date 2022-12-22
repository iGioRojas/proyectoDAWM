import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promo } from '../interfaces/promo';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor( private http: HttpClient ) {
  }

  cargarPromos() {
    return this.http.get<Promo[]>('https://api.npoint.io/118fcdef0ed356d655e6')
  }
}
