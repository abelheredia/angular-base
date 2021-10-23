import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./auth/auth.module`).then((m) => m.AuthModule),
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import(`./pokemons/pokemons.module`).then((m) => m.PokemonsModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import(`./dashboard/dashboard.module`).then((m) => m.DashboardModule),
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
