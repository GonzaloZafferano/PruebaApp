import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from '../components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, 
    NgbModule,
    FormsModule,
    LoginComponent], //Array de MODULOS Y 'COMPONENTES QUE SEAN STANDALONE:true'
})
export class HomePage {
  constructor() {}
}
