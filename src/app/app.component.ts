import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  item = [{
    nama : 'buah kelengkeng',
    harga : 10000
  },{
    nama : 'buah jeruk',
    harga : 5000
  }]


  itemArr= [1,2,3,4];

  show : boolean = true;
  user ={
    nama : 'along'
  }

  Pesan = '';
  
  KlikBut(){
    this.Pesan = 'halo';
  }
}
