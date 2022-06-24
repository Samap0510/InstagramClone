import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  repositorios=[];

  constructor(private servicio:SearchService ) { 
    this.consumirRepo();
  }

  ngOnInit() {
  }

  consumirRepo(){
    this.servicio.getSearch('soymariomoreno').subscribe(
      result => {        
        this.repositorios = result;
      },
      (error) =>{
        console.error(error);
      });
  }

}
