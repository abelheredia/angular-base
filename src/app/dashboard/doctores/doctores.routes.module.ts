import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctoresComponent } from './components/doctores/doctores.component';

const routes: Routes = [
  {
    path: 'doctores',
    component: DoctoresComponent,
  },
  {
    path: '**',
    component: DoctoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctoresRoutesModule {}
