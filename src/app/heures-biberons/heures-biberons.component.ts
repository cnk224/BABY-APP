import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heures-biberons',
  templateUrl: './heures-biberons.component.html',
  styleUrls: ['./heures-biberons.component.scss']
})
export class HeuresBiberonsComponent implements OnInit {
  @Input() name:string;
  @Input() dateHeureBib:string;
  @Input() quantite:string;
  @Input() loveIt:number;
  @Input() created_at:Date;

  constructor() { }

  ngOnInit(): void {
  }

  loveItFunction(){
    if(this.loveIt === 1){
      return 'green';
    }else if(this.loveIt === 0){
      return 'red';
    }
  }

  onLoveIt(){
    this.loveIt = 1;
  }

  onDislike(){
    this.loveIt = 0;
  }
}
