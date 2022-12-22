import { Injectable } from '@angular/core';
import * as introJs from 'intro.js';

@Injectable({
  providedIn: 'root'
})
export class IntrojsService {

  introJS:any;

    featureOne(): void {
        this.introJS = introJs();
        this.introJS.start();

        this.introJS.setOptions({
                steps: [
                    {
                        element: '#step1',
                        intro:
                            'Pide el servicio iniciando sesión',
                    },
                    {
                        element: '#step2',
                        intro:
                            'Encuentra las mejores promociones en noticias',
                    },
                    {
                        element: '#step3',
                        intro:
                            'Algunos de los servicios que ofrecemos',
                    },
                    {
                        element: '#step4',
                        intro:
                            'En esta sección puedes contactar con nosotros',
                    },
                ]
            })
            .start();
    }

  constructor() { }
}
