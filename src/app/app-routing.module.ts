import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAuthComponent} from './user-auth/user-auth.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: 'auth',
    component: UserAuthComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
