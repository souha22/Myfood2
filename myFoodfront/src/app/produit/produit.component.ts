import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../../model/produit';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  @Input() aChild: Produit;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {


  }

}
