import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as firebase from 'firebase/app';
import firebase from 'firebase';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Candidato } from '../interfaces/candidato.interface';
import { Votante } from '../interfaces/votante.interface';



@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private candidatos: Candidato[] = [];
  private votantes: Votante[] = [];
  private candidatosCollection: AngularFirestoreCollection;
  private votantesCollection: AngularFirestoreCollection;

  constructor( private http: HttpClient, private db: AngularFirestore ) {
    this.candidatosCollection = this.db.collection<Candidato>('candidatos');
    this.votantesCollection = this.db.collection<Votante>('votantes');
  }

  getNominados(termino?: string) {

    if ( this.candidatos.length > 0 ) {
      // no tenemos candidatos
      console.log('Desde caché');
      return of(this.candidatos);

    } else {
      console.log('Desde Internet');
      return this.db.collection<Candidato>('candidatos', ref => {
        if(!termino){
          return ref.orderBy('votos','desc');
        } else {
          return ref.orderBy('votos').startAt(termino).endAt(termino+'\uf8ff')
        }
      } 
      ).valueChanges();
    }
  }

  obtenerCandidato(id: string) {
    return this.candidatosCollection.doc(id).valueChanges();
  }

  votarCandidato( id: string) {
    const increment = firebase.firestore.FieldValue.increment(1);
    return this.candidatosCollection.doc(id).update({votos: increment});
  }

  enviarVotante(nombrecompleto: string){
    const id = this.db.createId();
    const item = { id, nombrecompleto };
    return this.votantesCollection.doc(id).set(item);
  }

  buscarCandidato(termino: string){
    return this.db.collection<Candidato>('candidatos', ref => {
      if(!termino){
        return ref.orderBy('votos','desc');
      } else {
        return ref.orderBy('nombre').startAt(termino).endAt(termino+'\uf8ff')
      }
    } 
    ).valueChanges();
  }

}
