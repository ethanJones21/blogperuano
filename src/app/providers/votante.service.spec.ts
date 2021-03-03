import { TestBed } from '@angular/core/testing';

import { VotanteService } from './votante.service';

describe('VotanteService', () => {
  let service: VotanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('Se debe agregar un votante', () => {
    const nombre = 'Roberto';
    const res = service.enviarVotante(nombre);
    console.log(res);
    expect(service).toBeTruthy();
  });

});
