import { Component, OnInit } from '@angular/core';
import {Recette} from '../../model/recette';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {RecetteService} from '../shared/recette.service';

@Component({
  selector: 'app-home-recette',
  templateUrl: './home-recette.component.html',
  styleUrls: ['./home-recette.component.css']
})
export class HomeRecetteComponent implements OnInit {
  list: Recette[];
  libelle: string;
  faPlusCircle = faPlusCircle;
  ing1: string;
  ing2: string;
  ing3: string;
  ing4: string;
  ing5: string;
  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.recetteService.getAll().subscribe((data: Recette[]) =>
      this.list = data);
  }

  like(recette: Recette) {
    const i = this.list.indexOf(recette);
    this.list[i].liks++;
    this.recetteService.update(recette.id, recette).subscribe((data: Recette[]) => this.list = data);
  }

  unlike(recette: Recette) {
   const i = this.list.indexOf(recette);
   this.list[i].unlike++;
   this.recetteService.update(recette.id, recette).subscribe((data: Recette[]) => this.list = data);
  }

  deleteRecette(r: Recette) {
   const i = this.list.indexOf(r);
   this.recetteService.delete(r.id).subscribe(() => this.list.splice(i, 1));
  }
  findByLibelle()
  {console.log(this.libelle);
   this.recetteService.findByCreteria(this.libelle).subscribe((data: Recette[]) => this.list = data);
   console.log(this.list);
  }


}
