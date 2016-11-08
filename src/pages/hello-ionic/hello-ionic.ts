import { Component } from '@angular/core';
import { Data } from '../../data/data';

@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  public list : any ;
  public Data : any = Data;
  constructor() {
    this.list = (new Data()).getData();
  }

}
