import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficasComponent } from './pages/grafica/graficas.component';
import { VotarComponent } from './pages/votar/votar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { CandidatoService } from './providers/candidato.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment.prod';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { HablaPeruComponent } from './pages/habla-peru/habla-peru.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficasComponent,
    VotarComponent,
    PerfilComponent,
    BusquedaComponent,
    HablaPeruComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
