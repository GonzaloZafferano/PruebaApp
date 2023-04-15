import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from '../components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from '../components/bienvenido/bienvenido.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, 
    CommonModule,
    NgbModule,
    FormsModule,
    LoginComponent, 
    BienvenidoComponent], //Array de MODULOS Y 'COMPONENTES QUE SEAN STANDALONE:true'
})
export class HomePage {
  constructor() {}
  isValidUser : boolean = false;
  validateUser(value:boolean){
    this.isValidUser = value;
  }
}
