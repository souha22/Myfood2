import { Injectable } from '@angular/core';
import {HttpClient , HttpParams } from '@angular/common/http';
import {Activite} from '../../model/activite';

@Injectable({
  providedIn: 'root'
})
export class ActiviteServiceService {

  url = 'http://localhost:3000/activite';

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<Activite[]>(this.url);
  }
  addActivite(a: Activite) {
    return this.http.post(this.url, a);
  }
  delete(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
  update(id: string, a: Activite) {
    return this.http.put(this.url + '/' + id, a);
  }

  findByCreteria(libelle: string) {
    return this.http.get<Activite[]>(this.url + '?libelle=' + libelle);


  }
}
