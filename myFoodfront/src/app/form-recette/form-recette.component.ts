import { Component, OnInit } from '@angular/core';
import {Recette} from '../../model/recette';
import {RecetteService} from '../shared/recette.service';

@Component({
  selector: 'app-form-recette',
  templateUrl: './form-recette.component.html',
  styleUrls: ['./form-recette.component.css']
})
export class FormRecetteComponent implements OnInit {
  rec: Recette;
  constructor(private recetteService: RecetteService) { }


  ngOnInit(): void {
    this.rec = new Recette();
  }
  submit( {value, valid}: {value: Recette, valid: boolean} ){
    this.rec = value;
   // this.rec.image = this.rec.image.replace('C:\\fakepath\\', '');
    this.recetteService.addRecette(this.rec).subscribe();
  }
}
