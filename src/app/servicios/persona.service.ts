import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://portfoliobackend-production-0439.up.railway.app/personas/'
  constructor(private http: HttpClient) { }
  public lista():Observable<Persona[]> {
    return this.http.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id : number):Observable<Persona> {
    return this.http.get<Persona>(this.URL + `detail/${id}`);
  }

  /*public save(experiencia : Experiencia):Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }*/

  public update(id : number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, persona);
  }

  public delete (id : number):Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }

  }

