import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { soloVotos } from 'src/app/interfaces/candidato.interface';
import { Votante } from '../../interfaces/votante.interface';
import { CandidatoService } from '../../providers/candidato.service';
import { VotanteService } from '../../providers/votante.service';



@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  candidatos: soloVotos[] =[];
  votantes$: Observable<Votante[]>;
  subs = new Subscription();

  constructor(private candidatoService: CandidatoService,
              private votanteService: VotanteService ) { }

  ngOnInit() {
    this.cargarCandidatos();
    this.cargarVotantes();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  cargarCandidatos(){
    this.subs.add(this.candidatoService.obtenerVotosCandidatos()
      .subscribe( candidatos => {
        this.candidatos = candidatos;
      }));
  }

  cargarVotantes(){
    this.votantes$ = this.votanteService.obtenerVotantes();
    this.subs.add(this.votantes$.subscribe());
  }

}
