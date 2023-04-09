import { AfterContentInit, Injectable, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})

export class LoginService implements OnInit  {
  usuarios:Usuario[]=[];

  constructor(private usuarioService : UsuarioService) 
  { 
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.usuarioService.cargarUsuarios()
    .subscribe(
      x => { 
        //console.log("---");
        //console.log(x);
        //console.log("---");
        this.usuarios = Object.values(x);        
        //let usuario = new Usuario(email,pass);
      }
    );    
  }

  login(email:string, pass:string){        
      let usuarioEncontrado = this.usuarios.filter(x => x.email === email && x.password === pass);           
      if(usuarioEncontrado.length === 1)
        return true;    
      else      
        return false;  
  }
}
