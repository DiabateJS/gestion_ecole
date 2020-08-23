export class Matiere {
  id: number;
  code: string;
  libelle: string;
  description: string;

  constructor(id: number, code: string, libelle: string, description: string) {
    this.id = id;
    this.code = code;
    this.libelle = libelle;
    this.description = description;
  }

  getId(): number{
    return this.id;
  }

  getCode(): string{
    return '';
  }

  setCode(value: string){
    this.code = value;
  }

  getLibelle(): string{
    return this.libelle;
  }

  setLibelle(value: string){
    this.libelle = value;
  }

  getDescription(): string{
    return this.description;
  }

  setDescription(value: string){
    this.description = value;
  }
}
