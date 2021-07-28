import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url = 'http://127.0.0.1:8000/produit/';

  public currentProduit: Produit = {
    libelle: '',
    prix: null,
    quantite: null,
    id: 10,
    image: ''
  };


  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<Produit[]>(this.url + 'getAll');
  }

  addProduit() {
    console.log('bonjour', this.http.post(this.url + 'add', this.currentProduit));
    return this.http.post(this.url + 'add', this.currentProduit);
  }
}
