import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Experiencia } from 'src/model/experiencia';

@Component({
  selector: 'app-edit-experiencia-y-educacion',
  templateUrl: './edit-experiencia-y-educacion.component.html',
  styleUrls: ['./edit-experiencia-y-educacion.component.css']
})
export class EditExperienciaYEducacionComponent implements OnInit {
  explab : Experiencia = null;
  constructor(private sExperiencia: SExperienciaService, private activatedrRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedrRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data => {
      this.explab = data;
    },err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }

  onUpdate():void {
    const id = this.activatedrRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.explab).subscribe(data => {
      this.router.navigate(['']);
    },err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }
}
