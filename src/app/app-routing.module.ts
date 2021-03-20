import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficasComponent } from './pages/grafica/graficas.component';
import { VotarComponent } from './pages/votar/votar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { HablaPeruComponent } from './pages/habla-peru/habla-peru.component';

const routes: Routes = [
  { path: '', component: VotarComponent },
  { path: 'graficas', component: GraficasComponent },
  { path: 'hablaPeru', component: HablaPeruComponent },
  { path: 'votar', component: VotarComponent },
  { path: 'votar/:id', component: PerfilComponent },
  { path: 'busqueda/:termino', component: BusquedaComponent },
  { path: '**', component: NopagefoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
