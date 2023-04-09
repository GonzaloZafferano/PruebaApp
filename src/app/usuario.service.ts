import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  cargarUsuarios(){
    return this.httpClient.get('https://p-p-s-2d400-default-rtdb.firebaseio.com/datos.json');
    //https://p-p-s-2d400-default-rtdb.firebaseio.com/
  }

  guardarUsuarios(usuarios:Usuario[]){
    //A LA URL LE AGREGO: 'datos.json'
    //HttpClient REQUIERE DE UN 'OBSERVABLE' PARA PODER REALIZAR LAS TRANSACCIONES.
    //CON EL METODO SUSCRIBE() LE ESTAMOS DANDO ESE 'OBSERVABLE'.
    //this.httpClient.post('https://mis-clientes-90b37-default-rtdb.firebaseio.com/datos.json', empleados)

    //Al sustituir 'post' por 'put' SE ACTUALIZA LA INFORMACION QUE ENVIAMOS.
    //Si usaramos 'post', se duplicaria, porque se inserta NUEVAMENTE.
    this.httpClient.put('https://p-p-s-2d400-default-rtdb.firebaseio.com/datos.json', usuarios)
    .subscribe(
        response => console.log("Se guardaron los empleados: " + response),
        error => console.log("Error: " + error)
    );
  }
}


