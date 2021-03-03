import { Injectable } from '@angular/core';
import { Votante } from '../interfaces/votante.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotanteService {
  
  private votantes: Votante[] = [];
  private votantesCollection: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.votantesCollection = this.db.collection<Votante>('votantes');
  }

  enviarVotante(nombrecompleto: string){
    const id = this.db.createId();
    const item = { id, nombrecompleto };
    return this.votantesCollection.doc(id).set(item);
  }

  obtenerVotantes(termino?: string): Observable<Votante[]>{
    if ( this.votantes.length > 0 ) {
      console.log('Desde caché');
      return of(this.votantes);

    } else {
      console.log('Desde Internet');
      return this.db.collection<Votante>('votantes', ref => {
        if(!termino){
          return ref.orderBy('fechaVoto','desc');
        } else {
          return ref.orderBy('fechaVoto').startAt(termino).endAt(termino+'\uf8ff')
        }
      } 
      ).valueChanges();
    }
  }

}
