export class Filiere {
  id: number;
  code: string;
  libelle: string;
  description: string;

  constructor(id: number, code: string, libelle: string, description: string){
    this.id = id;
    this.code = code;
    this.libelle = libelle;
    this.description = description;
  }

}
