import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Experiencia } from 'src/model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
nombreA : string = '';
descripcionA : string = '';
  constructor(private sExperiencia : SExperienciaService, private router : Router) { }

  ngOnInit(): void {
  }

  onCreate():void {
    const expe = new Experiencia(this.nombreA, this.descripcionA);
    this.sExperiencia.save(expe).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
