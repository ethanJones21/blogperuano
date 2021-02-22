import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VotarComponent } from './pages/votar/votar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { CandidatoService } from './providers/candidato.service';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VotarComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule, 
  ],
  providers: [
    CandidatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
