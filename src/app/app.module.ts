// Importações padrão do Angular e Ionic
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Importando FormsModule para vinculação bidirecional de dados

// Importações para a inicialização do Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// Importando as configurações do Firebase do arquivo de ambiente
import { environment } from '../environments/environment';

// Importação adicional para HttpClient
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  // Módulos que são necessários para este módulo
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()), // Adicionando HttpClientModule às importações
  ],
  // Provedores de serviços
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  // Componente principal que será carregado inicialmente
  bootstrap: [AppComponent],
})
export class AppModule {}
