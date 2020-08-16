import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './user.service';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FiliereComponent } from './filiere/filiere.component';
import { FilieresComponent } from './filieres/filieres.component';
import { UserConnectedComponent } from './user-connected/user-connected.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    AccueilComponent,
    MenuBarComponent,
    FiliereComponent,
    FilieresComponent,
    UserConnectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
