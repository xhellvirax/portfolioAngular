import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/model/persona';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
persona : Persona = null;
  constructor(private activatedrRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService:ImageService) { }

  ngOnInit(): void {
    const id = this.activatedrRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data => {
      this.persona = data;
    },err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }

  onUpdate():void {
    const id = this.activatedrRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(data => {
      this.router.navigate(['']);
    },err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }

  uploadImage($event:any) {
    const id = this.activatedrRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }

}
