import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Candidato } from '../../interfaces/candidato.interface';
import { Votante } from '../../interfaces/votante.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  candidatos: any[] =[];
  votantes$: Observable<Votante[]>;
  subs = new Subscription();

  constructor( private db: AngularFirestore ) { }

  ngOnInit() {
    this.cargarCandidatos();
    this.cargarVotantes();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  cargarCandidatos(){
    this.subs.add(this.db.collection<Candidato>('candidatos').valueChanges()
      .pipe(
        map( (resp: Candidato[]) => resp.map( ({ nombre, votos }) => ({ name: nombre, value: votos }) ))
      )
      .subscribe( candidatos => {
        this.candidatos = candidatos;
      }));
  }

  cargarVotantes(){
    this.votantes$ = this.db.collection<Votante>('votantes').valueChanges();
    this.subs.add(this.votantes$.subscribe());
  }

}
