import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  exibeLista: boolean = false;

  ngOnInit(): void {
  }

  exibirLista(){
    if(this.exibeLista){
      this.exibeLista = false;
    } else {
      this.exibeLista = true;
    }
  }

}
