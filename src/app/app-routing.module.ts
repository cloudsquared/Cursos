import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './REDUX/inicio/inicio.component';
import { LlamadasComponent } from './RXJS/llamadas/llamadas.component';
import { OperadoresComponent } from './RXJS/operadores/operadores.component';

const routes: Routes = [
  {
   
    path:"operadores", component:  OperadoresComponent
  },{
    path:"llamadas", component:  LlamadasComponent,
  },{
    path:"redux1", component:  InicioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
