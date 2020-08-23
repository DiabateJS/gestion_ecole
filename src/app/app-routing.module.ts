import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAuthComponent} from './user-auth/user-auth.component';
import {AccueilComponent} from './accueil/accueil.component';
import {FilieresComponent} from './filieres/filieres.component';
import {FiliereComponent} from './filiere/filiere.component';
import {EnseignantsComponent} from './enseignants/enseignants.component';
import {EnseignantComponent} from './enseignant/enseignant.component';


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
  },
  {
    path:'filieres',
    component: FilieresComponent
  },
  {
    path:'filiere/:id',
    component: FiliereComponent
  },
  {
    path:'enseignants',
    component: EnseignantsComponent
  },
  {
    path:'enseignant/:id',
    component: EnseignantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
