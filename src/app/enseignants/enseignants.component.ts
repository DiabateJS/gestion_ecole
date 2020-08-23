import { Component, OnInit } from '@angular/core';
import {EnseignantsService} from '../enseignants.service';
import {Enseignant} from '../enseignant/enseignant';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  enseignants: Enseignant[];
  constructor(private enseignantsService: EnseignantsService) {
    this.enseignants = this.enseignantsService.getEnseignants();
  }

  ngOnInit(): void {
  }

}
