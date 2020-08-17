import { Injectable } from '@angular/core';
import {Filiere} from './filiere/filiere';

@Injectable({
  providedIn: 'root'
})
export class FilieresService {
  private _filieres: Filiere[];

  constructor() {
    this._filieres = [
      new Filiere(1, "FINCOMPTA", "Finance et Comptabilité", ""),
      new Filiere(2, "RHCOM", "Ressource Humaine et Communication", ""),
      new Filiere(3, "COM", "Communication", ""),
      new Filiere(4, "IDA", "Informatique Développement d'Application", "")
    ];
  }

  getFilieres():Filiere[] {
    return this._filieres;
  }

  getFiliereById(id:number): Filiere{
    return this._filieres.filter(filiere => filiere.id == id)[0];
  }

  getFiliereByCode(code: string): Filiere{
    return this._filieres.filter(filiere => filiere.code == code)[0];
  }
}
