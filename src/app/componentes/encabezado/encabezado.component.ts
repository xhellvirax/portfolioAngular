import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Persona } from 'src/model/persona';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  isLogged = false;
  persona : Persona = null;

  constructor(private datosPorfolio:PorfolioService, public router:Router, private tokenService:TokenService, public personaservice:PersonaService, private authService: AuthService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      //console.log(data);
      this.miPorfolio = data;
    });
    this.cargarPersona();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    };
    this.cargarPersona();
  }
  onLogout():void {
    this.tokenService.logout();
    window.location.reload();
  }
  login() {
    this.router.navigate(['/iniciar-sesion']);
  }

  cargarPersona () {
    this.personaservice.detail(1).subscribe(data => {
      this.persona.img = this.persona.img.replace("C:\\fakepath\\", "https://firebasestorage.googleapis.com/v0/b/portfolioangular-8b34a.appspot.com/o/");
      this.persona = data;
    })
  }
}
