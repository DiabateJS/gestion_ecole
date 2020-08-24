import { Injectable } from '@angular/core';
import {Enseignant} from './enseignant/enseignant';
import {Matiere} from './enseignant/matiere';
import {Filiere} from './filiere/filiere';
import {FilieresService} from './filieres.service';

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {
  private enseignants:Enseignant[] = [];
  constructor(private filieresService: FilieresService) {
    let isma: Enseignant = new Enseignant(1,"Diabate","Ismaila","00001","Master");
    let jean: Enseignant = new Enseignant(2,"Diabate","Jean Sekou","00002","Ingenieur");
    //Filieres
    let fincompta: Filiere = this.filieresService.getFiliereById(1);
    let rhcom: Filiere = this.filieresService.getFiliereById(2);
    let com: Filiere = this.filieresService.getFiliereById(3);
    let ida: Filiere = this.filieresService.getFiliereById(4);

    //Matieres
    let info: Matiere = new Matiere(1,"INFO","Informatique","");
    let marketing: Matiere = new Matiere(2,"MKG","Marketing","");
    let management: Matiere = new Matiere(3,"MNG","Management","");
    let commerce: Matiere = new Matiere(4,"COM","Commerce","");
    let math: Matiere = new Matiere(5,"MATH","Mathematiques","");
    //Affectation matieres
    jean.matieres = [info, math];
    jean.filieres = [ida];
    isma.matieres = [marketing, management, commerce];
    isma.filieres = [fincompta, rhcom, com];

    this.enseignants = [
      jean, isma
    ];
  }

  getEnseignants():Enseignant[]{
    return this.enseignants;
  }

  getEnseignantById(id: number): Enseignant {
    return this.enseignants.filter(ens => ens.id == id)[0];
  }

  getEnseignantByMatricule(matricule: string): Enseignant {
    return this.enseignants.filter(ens => ens.matricule == matricule)[0];
  }

}
