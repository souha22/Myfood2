import { Component, OnInit } from '@angular/core';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { Produit } from '../../model/produit';
import {ProduitService} from '../shared/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  list: Produit[];
  libelle: string;
  faPlusCircle = faPlusCircle;
  currentRate = 8;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getAll().subscribe((data: Produit[]) =>
      this.list = data);
    console.log(this.list);
  }

}
