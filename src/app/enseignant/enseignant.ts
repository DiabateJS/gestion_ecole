import {Matiere} from './matiere';

export class Enseignant {
  id: number;
  nom: string;
  prenom: string;
  matricule: string;
  niveau: string;
  matieres: Matiere[];

  constructor(id: number, nom: string, prenom: string, matricule: string, niveau: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.matricule = matricule;
    this.niveau = niveau;
    this.matieres = [];
  }

  getId(): number{
    return this.id;
  }

  getNom(): string{
    return this.nom;
  }

  setNom(value: string){
    this.nom = value;
  }

  getPrenom(): string{
    return this.prenom;
  }

  setPrenom(value: string){
    this.prenom = value;
  }

  getMatricule(): string{
    return this.matricule;
  }

  setMatricule(value: string){
    this.matricule = value;
  }

  getNiveau(): string{
    return this.niveau;
  }

  setNiveau(value: string){
    this.niveau = value;
  }

  getMatieres(): Matiere[]{
    return this.matieres;
  }

  setMatieres(value: Matiere[]){
    this.matieres = value;
  }

}
