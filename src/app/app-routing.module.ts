import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './componentes/experiencia-yeducacion/new-experiencia.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PofolioComponent } from './componentes/pofolio/pofolio.component';

const routes: Routes = [
{path : 'pofolio', component: PofolioComponent},
{path : 'iniciar-sesion', component: IniciarSesionComponent},
{path : '', redirectTo: 'iniciar-sesion', pathMatch: 'full'},
{path: 'nuevaexp', component: NewExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
