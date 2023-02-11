import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client'
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = '/api/clients';
  choixmenu : string  = 'A';
  public dataForm!: FormGroup;
  constructor(private http: HttpClient) { }

  // on recupere les données de la table client
  getData(id: number): Observable<Object> {
    return this.http.post('${this.baseUrl}', id);
  }

  // on ajoute un client
  createData(info: Object): Observable<Object> {
    return this.http.post('${this.baseUrl}', info);
  }

  // on modifie un client
  updateData(id: number, value: any): Observable<Object> {
    return this.http.put('${this.baseUrl}/${id}', value);
  }

  // on supprime un client
  deleteData(id: number): Observable<any> {
    return this.http.delete('${this.baseUrl}/${id}', { responseType: 'text' });
  }

  // on recupere la liste des clients
  getClientList(): Observable<any> {
    return this.http.get('${this.baseUrl}');
  }
}
