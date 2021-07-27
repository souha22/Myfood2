import { Component, OnInit } from '@angular/core';
import {Activite} from '../../model/activite';
import {ActiviteServiceService} from '../shared/activite-service.service';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-activite',
  templateUrl: './home-activite.component.html',
  styleUrls: ['./home-activite.component.css']
})
export class HomeActiviteComponent implements OnInit {
  list: Activite[];
  libelle: string;
  faPlusCircle = faPlusCircle;
  currentRate = 8;
  constructor(private activiteService: ActiviteServiceService) { }

  ngOnInit(): void {
    this.activiteService.getAll().subscribe((data: Activite[]) =>
      this.list = data);
  }

  like(activite: Activite) {
    let i = this.list.indexOf(activite);
    this.list[i].like++;
    this.activiteService.update(activite.id, activite).subscribe((data: Activite[]) =>
      this.list = data);
  }
  unlike(activite: Activite) {
    let i = this.list.indexOf(activite);
    this.list[i].unlike++;
    this.activiteService.update(activite.id, activite).subscribe((data: Activite[]) =>
      this.list = data);
  }

  deleteActivite(a: Activite) {
    let i = this.list.indexOf(a);
    this.activiteService.delete(a.id).subscribe(() => this.list.splice(i, 1));
  }
  findByLibelle()
  {
    console.log(this.libelle);
    this.activiteService.findByCreteria(this.libelle).subscribe((data: Activite[]) =>
      this.list = data);
    console.log(this.list);
  }
}
