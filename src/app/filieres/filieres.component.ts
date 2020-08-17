import { Component, OnInit } from '@angular/core';
import {Filiere} from '../filiere/filiere';
import {FilieresService} from '../filieres.service';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.css']
})
export class FilieresComponent implements OnInit {
  filieres: Filiere[] = [];
  constructor(private filieresService: FilieresService) {
    this.filieres = this.filieresService.getFilieres();
  }

  ngOnInit(): void {
  }

}
