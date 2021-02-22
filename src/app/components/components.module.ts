import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    CardComponent,
    GraficoBarraHorizontalComponent,
    LoadingComponent
  ],
  exports: [
    CardComponent,
    LoadingComponent,
    GraficoBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
