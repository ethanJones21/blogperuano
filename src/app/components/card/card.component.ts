import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Candidato } from '../../interfaces/candidato.interface';
import { CandidatoService } from '../../providers/candidato.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  
  @Input('candidato') candidato: Candidato;
  subs = new Subscription();

  constructor(private candidatoService: CandidatoService, private router: Router ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }

  async votarCandidato( candidato: Candidato ) {
    try {
      await this.candidatoService.votarCandidato( candidato.id );
      Swal.fire('Gracias','Gracias por tu voto', 'success' );
    } catch (error) {
      Swal.fire('Error','Opps, ocurrio un error', 'error' );
    }
  }

  verPerfil(candidato: Candidato){
    this.router.navigate(['/votar',candidato.id]);
  }

  conUrl(candidato: Candidato){
    return 'url('+candidato.imgPartido+')';
  }

}
