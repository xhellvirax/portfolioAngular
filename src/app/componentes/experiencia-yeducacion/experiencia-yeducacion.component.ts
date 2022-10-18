import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-yeducacion',
  templateUrl: './experiencia-yeducacion.component.html',
  styleUrls: ['./experiencia-yeducacion.component.css']
})
export class ExperienciaYeducacionComponent implements OnInit {
  educacion:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacion = data.educacion;

    });
  }

}
