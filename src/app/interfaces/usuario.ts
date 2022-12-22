export interface Usuario {
  id_usuario:number,
  cedula:string,
  nombres:string,
  apellidos:string,
  fecha_nacimiento:string,
  ubicacion:string,
  celular:string,
  foto:{
    type:string,
    data:string,
  },
  rol:string,
  correo:string
}
