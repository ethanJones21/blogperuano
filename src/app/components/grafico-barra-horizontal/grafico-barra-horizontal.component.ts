import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

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
  subs = new Subscription();

  // intervalo;

  constructor(public breakpointObserver: BreakpointObserver) {
  }

  ngOnInit():void{
    // ESTO YA FUNCIONA
    // if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
    //   this.showLegend = false;
    // }
    this.subs.add(this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showLegend = false
        }
      })); 
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
