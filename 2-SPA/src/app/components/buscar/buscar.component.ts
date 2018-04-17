import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private router:Router)
  {

  }

  ngOnInit()
  {
    this.activatedRoute.params.subscribe (
      params => {
        this.heroes = this._heroesService.buscarHeroes( params['termino'] );
        this.termino = params['termino'];
      }
    );
  }

  verHeroe( idx:number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
