import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAuthComponent} from './user-auth/user-auth.component';
import {AccueilComponent} from './accueil/accueil.component';


const routes: Routes = [
  {
    path: '',
    component: UserAuthComponent
  },
  {
    path: 'auth',
    component: UserAuthComponent
  },
  {
    path: 'accueil/:id',
    component: AccueilComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
