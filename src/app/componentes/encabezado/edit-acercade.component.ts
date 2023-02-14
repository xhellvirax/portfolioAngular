import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/model/persona';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';


@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
persona : Persona = null;
  constructor(private activatedrRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService:ImageService, private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedrRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data => {
      this.persona = data;
    },err => {
      alert("Error al modificar persona");
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
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `imagen/${file.name}`);

    uploadBytes(imgRef, file)
    .then( response => console.log(response))
    .catch(error => console.log(error))
  }
}
