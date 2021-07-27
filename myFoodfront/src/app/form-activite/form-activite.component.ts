import { Component, OnInit } from '@angular/core';
import {Activite} from '../../model/activite';
import {User} from '../../model/user';
import {ActiviteServiceService} from '../shared/activite-service.service';

@Component({
  selector: 'app-form-activite',
  templateUrl: './form-activite.component.html',
  styleUrls: ['./form-activite.component.css']
})
export class FormActiviteComponent implements OnInit {
  act: Activite;
  constructor(private activiteService: ActiviteServiceService) { }


  ngOnInit(): void {
    this.act = new Activite();
   }
  submit( {value, valid}: {value: Activite, valid: boolean} ){
      this.act = value;
      this.act.image = this.act.image.replace('C:\\fakepath\\', '');
      this.act.like = 0;
      this.act.unlike = 0;
      this.activiteService.addActivite(this.act).subscribe();
  }
}
