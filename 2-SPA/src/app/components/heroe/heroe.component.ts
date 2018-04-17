import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  _heroe:Heroe;
  _logo:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService
              ) {
    this.activatedRoute.params.subscribe(
      params => this._heroe = this._heroesService.getHeroe( params['id'] )
    );
    console.log(this._heroe);
  }

}
