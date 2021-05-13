import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeuresBiberonsComponent } from './heures-biberons/heures-biberons.component';
import { AddBiberonFormComponent } from './add-biberon-form/add-biberon-form.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  {path: 'add-biberon', component: AddBiberonFormComponent},
  {path: 'acceuil', component: AccueilComponent},
  {path: '', component: AccueilComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeuresBiberonsComponent,
    AddBiberonFormComponent,
    AccueilComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
