import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code911ProjetctView';
  bibInfos = [
    {
      name: 'Alexia',
      dateHeureBibTs : 'Le 10/05/2021 à 12:00',
      quantiteTs: '20 cl'
    },
    {
      name: 'Oumar',
      dateHeureBibTs : 'Le 10/05/2021 à 15:00',
      quantiteTs: '23 cl'
    },
    {
      name: 'Alexia',
      dateHeureBibTs : 'Le 10/05/2021 à 18:00',
      quantiteTs: '21 cl'
    }
  ]
}
