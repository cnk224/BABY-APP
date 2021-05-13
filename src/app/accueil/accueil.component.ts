import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor() { }
  
  title = 'code911ProjetctView';
  bibInfos = [
    {
      name: 'Alexia',
      dateHeureBibTs : 'Le 10/05/2021 à 12:00',
      quantiteTs: '20 cl',
      loveIt: 3,
      created_at: new Date
    },
    {
      name: 'Oumar',
      dateHeureBibTs : 'Le 10/05/2021 à 15:00',
      quantiteTs: '23 cl',
      loveIt: 3,
      created_at: new Date
    },
    {
      name: 'Alexia',
      dateHeureBibTs : 'Le 10/05/2021 à 18:00',
      quantiteTs: '21 cl',
      loveIt: 3,
      created_at: new Date
    }
  ]
  ngOnInit(): void {
  }

}
