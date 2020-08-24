import {Matiere} from './matiere';
import {Filiere} from '../filiere/filiere';

export class Enseignant {
  id: number;
  nom: string;
  prenom: string;
  matricule: string;
  niveau: string;
  matieres: Matiere[];
  filieres: Filiere[];

  constructor(id: number, nom: string, prenom: string, matricule: string, niveau: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.matricule = matricule;
    this.niveau = niveau;
    this.matieres = [];
  }

}
