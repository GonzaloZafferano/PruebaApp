import { Component, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './login.service';
import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: 
  [
    IonicModule, 
    LoginComponent, 
    FormsModule,
    HttpClientModule //TENGO QUE PONERLO PARA QUE TODO EL PROYECTO PUEDA CONOCER AL HTTPCLIENT.
  ],
  providers: [   
    LoginService,  
    UsuarioService 
  ],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    //await SplashScreen.show();
    // Aquí puedes agregar cualquier otra inicialización que necesites para tu aplicación
    //await SplashScreen.hide();
  }
}
