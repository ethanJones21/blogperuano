import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Candidato } from '../../interfaces/candidato.interface';
import { CandidatoService } from '../../providers/candidato.service';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit, OnDestroy {
  candidatos$: Observable<Candidato[]>;
  subs = new Subscription();

  constructor(private candidatoService: CandidatoService ) { }

  ngOnInit() {
    this.candidatos$ = this.candidatoService.obtenerCandidatos();
    this.subs.add(this.candidatos$.subscribe());
  }

  
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }

}
