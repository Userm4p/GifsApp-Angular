import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor (private gifService : GifsService) {

  }

  search(){
    
    const value = this.txtBuscar.nativeElement.value;

    if (value.trim().length === 0) {return }

    this.gifService.searchGifs(value);

    this.txtBuscar.nativeElement.value = ''
  }

}
