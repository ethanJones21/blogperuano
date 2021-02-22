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

  votarCandidato( candidato: Candidato ) {
    
    Swal.fire({
      title: 'Nombre completo',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Votar',
      showLoaderOnConfirm: true,
      preConfirm: (nombrecompleto) => {
        return this.candidatoService.enviarVotante(nombrecompleto)
          .then(response => {
            console.log(response);
            return response;
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(async(result) => {
      if (result.isConfirmed) {
        this.candidatoService.votarCandidato( candidato.id );
        Swal.fire('Gracias','Gracias por tu voto', 'success' );
      }
    })
  
}


  verPerfil(candidato: Candidato){
    this.router.navigate(['/votar',candidato.id]);
  }

  conUrl(candidato: Candidato){
    return 'url('+candidato.imgPartido+')';
  }

}
