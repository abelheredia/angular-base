import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { EditarDoctorComponent } from './components/editar-doctor/editar-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: DoctoresComponent,
  },
  {
    path: 'editar',
    component: EditarDoctorComponent,
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
