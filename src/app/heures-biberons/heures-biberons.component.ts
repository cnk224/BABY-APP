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

  constructor() { }

  ngOnInit(): void {
  }

}
