import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-misproyectos',
  templateUrl: './misproyectos.component.html',
  styleUrls: ['./misproyectos.component.css']
})
export class MisproyectosComponent implements OnInit {
 misproyectos:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.misproyectos = data.misproyectos;
    });
  }

}
