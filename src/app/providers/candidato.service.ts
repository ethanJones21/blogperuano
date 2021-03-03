import { Injectable } from '@angular/core';
// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
// import firebase from 'firebase';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Candidato } from '../interfaces/candidato.interface';



@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private candidatos: Candidato[] = [];
  private candidatosCollection: AngularFirestoreCollection;

  constructor( private db: AngularFirestore ) {
    this.candidatosCollection = this.db.collection<Candidato>('candidatos');
  }

  obtenerCandidatos(termino?: string) {
    if ( this.candidatos.length > 0 ) {
      console.log('Desde caché');
      return of(this.candidatos);

    } else {
      console.log('Desde Internet');
      return this.db.collection<Candidato>('candidatos', ref => {
        if(!termino){
          return ref.orderBy('votos','desc');
        } else {
          termino = termino.charAt(0).toUpperCase() + termino.slice(1);
          return ref.orderBy('votos').startAt(termino).endAt(termino+'\uf8ff')
        }
      } 
      ).valueChanges();
    }
  }

  obtenerVotosCandidatos() {
    return this.candidatosCollection.valueChanges()
      .pipe(
        map( (resp: Candidato[]) => resp.map( ({ nombre, votos }) => ({ name: nombre, value: votos }) ))
      )
  }

  obtenerCandidato(id: string) {
    return this.candidatosCollection.doc(id).valueChanges();
  }

  votarCandidato( id: string) {
    const increment = firebase.firestore.FieldValue.increment(1);
    return this.candidatosCollection.doc(id).update({votos: increment});
  }
  
  buscarCandidato(termino: string){
    return this.db.collection<Candidato>('candidatos', ref => {
      if(!termino){
        return ref.orderBy('votos','desc');
      } else {
        termino = termino.charAt(0).toUpperCase() + termino.slice(1);
        return ref.orderBy('nombre').startAt(termino).endAt(termino+'\uf8ff')
      }
    } 
    ).valueChanges();
  }

}
