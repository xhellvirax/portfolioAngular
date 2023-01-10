import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "https://portfoliobackend-production-0439.up.railway.app/auth/login";
  currentUserSubjet : BehaviorSubject<any>;

constructor(private http : HttpClient) { 
  console.log ("el servicio esta corriendo");
  this.currentUserSubjet = new BehaviorSubject<any> (JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
 }

 IniciarSesion (credenciales : any):Observable<any> {
  return this.http.post(this.url, credenciales).pipe(map(data=> {
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    return data;
  }))

 }


}
