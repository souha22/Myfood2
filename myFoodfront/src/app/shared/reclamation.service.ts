import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reclamation} from '../../model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  url = 'http://localhost:3000/reclamation';
  constructor(private http: HttpClient) { }
  addReclamation(r: Reclamation){
    return this.http.post(this.url, r);
  }
}
