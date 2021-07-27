import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../shared/reclamation.service';
import {Reclamation} from '../../model/reclamation';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamation: Reclamation;

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.reclamation = new Reclamation();
  }
  submit( {value, valid}: {value: Reclamation, valid: boolean} ){
      this.reclamation = value;
      this.reclamationService.addReclamation(this.reclamation).subscribe();
  }
}
