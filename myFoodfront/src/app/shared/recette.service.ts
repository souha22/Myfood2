import { Injectable } from '@angular/core';
import {Recette} from '../../model/recette';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  url = 'http://127.0.0.1:8000/recette/';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Recette[]>(this.url + 'getAll');
  }
  addRecette(r: Recette) {
    return this.http.post(this.url + 'add', r);
  }
  delete(id: string) {
    return this.http.delete(this.url + 'delete/' + id);
  }
  update(id: string, a: Recette) {
    return this.http.put(this.url + 'update/' + id, a);
  }
  findByCreteria(libelle: string) {
    return this.http.get<Recette[]>(this.url + 'getAll/?libelle=' + libelle);
  }
}
