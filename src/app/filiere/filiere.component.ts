import { Component, OnInit } from '@angular/core';
import {FilieresService} from '../filieres.service';
import {Filiere} from './filiere';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {
  filieres: Filiere[];
  filiere: Filiere;
  idFiliere: number;
  constructor(private filieresService: FilieresService,
              private route: ActivatedRoute) {
    this.filieres = this.filieresService.getFilieres();
    this.route.params.subscribe(params => {
      this.idFiliere = params['id'];
      this.filiere = this.filieresService.getFiliereById(this.idFiliere);
    });
  }

  ngOnInit(): void {
  }

}
