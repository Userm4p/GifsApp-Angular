import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',

})
export class ResultsComponent {

  get results() {
    return this.gifService.results;
  }

  constructor( private gifService : GifsService) { }


}