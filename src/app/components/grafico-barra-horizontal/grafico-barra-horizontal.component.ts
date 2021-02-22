import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {


  @Input() results: any[] = [];
  
  // options
  showXAxis  = true;
  showYAxis  = true;
  gradient   = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votos';
  showYAxisLabel = true;
  yAxisLabel = 'Candidatos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {
  }

  ngOnInit():void{}

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
  }

}
