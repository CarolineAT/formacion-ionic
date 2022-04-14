import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  planetas: any[] = [];

  constructor(private _swapiService: SwapiService) { }

  ngOnInit(){
    this.listPLanets();
  }

  listPLanets(){
    this._swapiService.getPlanets().subscribe( (res) => {

        res['results'].forEach(element =>{
          element.diameter = Number(element.diameter);
          element.orbital_period = Number(element.orbital_period);
          element.population = Number(element.population);
          this.planetas.push(element);
        });
      
    console.log(this.planetas);
  });
  }

}
