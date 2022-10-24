import { Injectable } from '@angular/core';


const TOKEN_KEY = "AuthToken";
const USERNAME_KEY = "AuthUsername";
const AUTHORITIES_KEY = "AuthAuthorities";
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles : Array<String> = [];
  constructor() { }
public logout():void {
  window.sessionStorage.clear();
}
}

