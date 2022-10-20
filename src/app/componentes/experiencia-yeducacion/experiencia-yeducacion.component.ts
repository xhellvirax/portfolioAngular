import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Experiencia } from 'src/model/experiencia';

@Component({
  selector: 'app-experiencia-yeducacion',
  templateUrl: './experiencia-yeducacion.component.html',
  styleUrls: ['./experiencia-yeducacion.component.css']
})
export class ExperienciaYeducacionComponent implements OnInit {
  expe : Experiencia[] = [] ;
  educacion:any;
  constructor(private datosPorfolio:PorfolioService, private sExperiencia : SExperienciaService) { 
  }

  ngOnInit(): void {
    this.cargarExperiencia();
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacion = data.educacion;

    });
  }

  cargarExperiencia():void {
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

  delete(id: number) {
    if(id != undefined) {
      this.sExperiencia.delete(id).subscribe(data => {
        this.cargarExperiencia();
      },err => {
        alert("No se pudo borrar la experiencia");
      })
    }

  }

}

