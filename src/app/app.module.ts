import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaYeducacionComponent } from './componentes/experiencia-yeducacion/experiencia-yeducacion.component';
import { HardYSoftskillsComponent } from './componentes/hard-y-softskills/hard-y-softskills.component';
import { MisproyectosComponent } from './componentes/misproyectos/misproyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PorfolioService } from './servicios/porfolio.service';
import {HttpClientModule} from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PofolioComponent } from './componentes/pofolio/pofolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencia-yeducacion/new-experiencia.component';
import { EditExperienciaYEducacionComponent } from './componentes/experiencia-yeducacion/edit-experiencia-y-educacion.component';
import { EditAcercadeComponent } from './componentes/encabezado/edit-acercade.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LogoutComponent } from './componentes/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExperienciaYeducacionComponent,
    MisproyectosComponent,
    HardYSoftskillsComponent,
    FooterComponent,
    IniciarSesionComponent,
    PofolioComponent,
    NewExperienciaComponent,
    EditExperienciaYEducacionComponent,
    EditAcercadeComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
