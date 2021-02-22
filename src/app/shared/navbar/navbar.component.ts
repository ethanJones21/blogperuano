import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchEffect()
  }

  searchEffect(){
    // Search

    let SEARCH = document.getElementById('header_search');
    let BACK_SEARCH =  document.getElementById('back');
    let OVERLAY = document.getElementById('overlay_search');
    
    SEARCH.addEventListener('focus', () => {
      document.getElementById('header').classList.add('show');
      OVERLAY.classList.add('show');
    });
    
    BACK_SEARCH.addEventListener('click', () => {
      document.getElementById('header').classList.remove('show');
      OVERLAY.classList.remove('show');
    });
  }

  buscarCandidato(termino: string){
    this.router.navigate(['/busqueda',termino])
  }

}
