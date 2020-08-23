import { Injectable } from '@angular/core';
import {Enseignant} from './enseignant/enseignant';
import {Matiere} from './enseignant/matiere';

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {
  private enseignants:Enseignant[] = [];
  constructor() {
    let isma: Enseignant = new Enseignant(1,"Diabate","Ismaila","00001","Master");
    let jean: Enseignant = new Enseignant(2,"Diabate","Jean Sekou","00002","Ingenieur");
    //Matieres
    let info: Matiere = new Matiere(1,"INFO","Informatique","");
    let marketing: Matiere = new Matiere(2,"MKG","Marketing","");
    let management: Matiere = new Matiere(3,"MNG","Management","");
    let commerce: Matiere = new Matiere(4,"COM","Commerce","");
    let math: Matiere = new Matiere(5,"MATH","Mathematiques","");
    //Affectation matieres
    jean.setMatieres([info, math]);
    isma.setMatieres([marketing, management, commerce]);

    this.enseignants = [
      jean, isma
    ];
  }

  getEnseignants():Enseignant[] {
    return this.enseignants;
  }

  getEnseignantById(id: number): Enseignant {
    return this.enseignants.filter(ens => ens.getId() == id)[0];
  }

  getEnseignantByMatricule(matricule: string): Enseignant {
    return this.enseignants.filter(ens => ens.getMatricule() == matricule)[0];
  }

}
