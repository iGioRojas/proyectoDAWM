import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noticiasFiltro'
})
export class NoticiasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultados = []

    for(const noticia of value){
      let valor = noticia.nombre.toLowerCase()
      if(valor.indexOf(arg.toLowerCase()) > -1){
          resultados.push(noticia);
      }
    }

    return resultados;
  }

}
