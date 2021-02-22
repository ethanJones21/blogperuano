import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CandidatoService } from '../../providers/candidato.service';
import { Candidato } from '../../interfaces/candidato.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit, OnDestroy {
  candidatos$: Observable<Candidato[]>;
  subs = new Subscription();
  termino: string = '';

  constructor(private candidatoService: CandidatoService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.buscarCandidato();
  }
  
  buscarCandidato(){
    this.termino = this.route.snapshot.params.termino;
    this.candidatos$ = this.candidatoService.buscarCandidato(this.termino);
    this.subs.add(this.candidatos$.subscribe());
  }
  
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }
}
