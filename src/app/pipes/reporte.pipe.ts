import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reporte'
})
export class ReportePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultados = []

    for(const reporte of value){
      let idUsuario = reporte.id_usuario;
      let idAuto = reporte.id_auto;
      let nombre = reporte.nombres.toLowerCase();
      let apellido = reporte.apellidos.toLowerCase();
      let marca = reporte.marca.toLowerCase();
      let rol = reporte.rol.toLowerCase();
      console.log(arg)
      if((idUsuario === parseInt(arg))||(idAuto === parseInt(arg))||(marca.indexOf(arg.toLowerCase()) > -1)||(apellido.indexOf(arg.toLowerCase()) > -1)||(nombre.indexOf(arg.toLowerCase()) > -1)||(rol.indexOf(arg.toLowerCase()) > -1)){
          resultados.push(reporte);
      }
    }

    return resultados;
  }

}
