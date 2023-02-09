import { Component, InjectionToken, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, NgForm, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { AuthService } from 'src/app/auth.service';
import { NgForOfContext } from '@angular/common';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  isLogged=false;
  isLogginFail = false; 
  roles : string [] = [];
  form : FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService : AutenticacionService, private ruta:Router, private tokenService:TokenService) { 
    this.form = formBuilder.group ({
      nombreUsuario : ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required]]

    })
  }


ngOnInit(): void {
  if(this.tokenService.getToken()) {
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
  }
}

get Email () {
  return this.form.get('email');
}

get Password () {
  return this.form.get('password');
}

onEnviar (event:Event) {
  event.preventDefault;
  this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=> {
    console.log("DATA : es " + JSON.stringify(data));
    this.ruta.navigate(['/pofolio']);
  })
}


  
}
