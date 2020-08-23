import { Component, OnInit } from '@angular/core';
import {Enseignant} from './enseignant';
import {EnseignantsService} from '../enseignants.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  enseignants: Enseignant[];
  enseignant: Enseignant;
  idEns: number;

  constructor(private enseignantsService : EnseignantsService,
              private route: ActivatedRoute) {
    this.enseignants = this.enseignantsService.getEnseignants();
    this.route.params.subscribe(params => {
        this.idEns = params['id'];
        this.enseignant = this.enseignantsService.getEnseignantById(this.idEns);
    });


  }

  ngOnInit(): void {
  }

}
