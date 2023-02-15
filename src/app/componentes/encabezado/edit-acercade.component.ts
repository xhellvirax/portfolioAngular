import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/model/persona';


@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
images: string[];
persona : Persona = null;
  constructor(private activatedrRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, private storage: Storage) { this.images = []; }

  ngOnInit(): void {
    this.getImages();
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
    //this.persona.img = this.getImages();
    this.personaService.update(id, this.persona).subscribe(data => {
      this.router.navigate(['']);
    },err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }
  
  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
      })
      .catch(error => console.log(error));

  }

  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch(error => console.log(error));
  }
}
