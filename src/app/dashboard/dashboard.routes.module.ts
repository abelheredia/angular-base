import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctoresComponent } from './doctores/components/doctores/doctores.component';

const routes: Routes = [
  {
    path: 'doctores',
    loadChildren: () =>
      import(`./doctores/doctores.module`).then((m) => m.DoctoresModule),
  },
  {
    path: '',
    component: DoctoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutesModule {}
