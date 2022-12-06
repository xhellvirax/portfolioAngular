import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from './servicios/token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http:HttpClient, private tokenService: TokenService) { }


}

