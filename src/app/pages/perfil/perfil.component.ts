import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CandidatoService } from '../../providers/candidato.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  candidato$: Observable<any>;
  subs = new Subscription();

  constructor( private candidatoService: CandidatoService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.verPerfilCandidato();
  }

  ngOnDestroy():void {
    this.subs.unsubscribe();
  }

  verPerfilCandidato(){
    const idcandidato = this.route.snapshot.params.id;
    this.candidato$ = this.candidatoService.obtenerCandidato(idcandidato);
    this.subs.add(this.candidato$.subscribe());
  }


}
