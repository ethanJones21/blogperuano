import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Candidato } from '../../interfaces/candidato.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  loading: boolean = true;
  candidatos: any[] =[];

  constructor( private db: AngularFirestore ) { }

  ngOnInit() {

    this.db.collection<Candidato>('candidatos').valueChanges()
      .pipe(
        map( (resp: Candidato[]) => resp.map( ({ nombre, votos }) => ({ name: nombre, value: votos }) ))
      )
      .subscribe( candidatos => {
        this.candidatos = candidatos;
      });

  }

}
