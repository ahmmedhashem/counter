import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  min:number=1;
  max:number=1000
  counter:number = 10;

  ngOnInit(): void {
    
    
  }

  decrease($val: any){
    if($val > this.min){
      this.counter--
    }
    
    
  }
  increase($val:any){
    if($val < this.max){
      this.counter++
    }
  }


}
