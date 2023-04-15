import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Usuario } from 'src/app/model/usuario';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UsuarioService } from 'src/app/usuario.service';
import { PopUpWindowComponent } from '../pop-up-window/pop-up-window.component';
import { NgModule } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone : true, 
  //YA NO SE USAN MODULOS, POR LO QUE HAY QUE INDICAR QUE 'standalone : true'.
  //Debido a esto, NO SE COLOCA EL 'LoginComponent' en el array de 'declarations' (array de componentes), 
  //si no que AHORA se lo coloca en el array de 'imports' (donde van los modulos),
  //porque al ser 'standalone', sera su propio MODULO en SI MISMO.
  
  imports: [IonicModule, FormsModule, PopUpWindowComponent, CommonModule]
})
export class LoginComponent  implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();

  //SI LO PONGO PRIVADO, EL HTML NO LO PUEDE LEER.
  email:string = "";
  password:string = "";
  usuarios:Usuario[]=[];
  esUsuarioValido:boolean = false;
  mensaje:string = '';
  mensajePass:string = '';
  mensajeEmail:string = '';
  constructor(private loginService:LoginService, private usuarioService:UsuarioService) { }

  ngOnInit() {
    //FUNCIONA, YA CARGO USUARIOS APENAS CARGO LA PAGINA.
    this.usuarios.push(new Usuario("Gonza.3.zaffe@gmail.com", "12345"));
    this.usuarios.push(new Usuario("silas@gmail.com", "4321"));
    this.usuarios.push(new Usuario("dani@gmail.com", "1111"));
    this.usuarios.push(new Usuario("nico@gmail.com", "2222"));
    this.usuarios.push(new Usuario("sebas@gmail.com", "3333"));
    //this.usuarioService.guardarUsuarios(this.usuarios);
  }

  //login(form:NgForm){
  login(){
    //const email = form.value.email;
    //const pass = form.value.password;
    //alert(this.email);
    let faltanDatos = false;
    let emailValido = false;
    if(this.email == ''){
      faltanDatos = true;
      this.mensajeEmail = "Falta ingresar el correo electronico";      
    }else {
      emailValido = this.validarEmail();

      if(!emailValido)
      this.mensajeEmail = "Formato de Email invalido";
      else
      this.mensajeEmail = '';
    }

    if(this.password == ''){
      faltanDatos = true;
      this.mensajePass = "Falta ingresar la contraseña";        
    }else
    if(this.password.length <4){
      faltanDatos = true;
      this.mensajePass = "La contraseña debe contener al menos 4 caracteres";
    }
    else
    this.mensajePass = '';


    if(!faltanDatos && emailValido){
      //EVALUO SI ESTA OK
      let usuarioValido = this.loginService.login(this.email,this.password);
      if(usuarioValido){
        //this.mensaje = 'OK';
        this.addNewItem(true);
      }else{ 
        this.mensaje = "Correo o contraseña invalidos!";
      }
    }else{
      this.mensaje = '';
    }


    /*
    let usuarioValido = this.loginService.login(this.email,this.password);

    if(usuarioValido){
      //this.esUsuarioValido = true;
      this.message = "Bienvenido!";
      //this.alertButtons = ['OK'];  
      
      this.class = "my-custom-alert custom-alert-success";
      this.alertButtons = [    
        {
          text: 'Ok',
          cssClass: 'alert-button-confirm',
        },
        ];
    }else{
      //this.esUsuarioValido = false;
      this.class = "my-custom-alert custom-alert-danger";
      this.message = "Usuario o contraseña incorrectos!";
      this.alertButtons = [
        {
          text: 'Reintentar',
          cssClass: 'alert-button-cancel',
        }
        ];  
    }

    */
  }

  validadCampoVacio(){
    if(this.password != ''){
      this.mensajePass = '';
    }

    if(this.email != ''){
      this.mensajeEmail = '';
    }
  }
  validarEmail() {
    const pattern = /^([a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,3})$/;      
    if (this.email.length > 6) {
      return pattern.test(this.email);
    }
    return false;
  };
  /*
  class = "";
  message = ""
  public alertButtons = [{}];
*/
  /*
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
  */

  addNewItem(value: boolean) {
    this.newItemEvent.emit(value);
  }
}
