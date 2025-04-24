import { Routes } from '@angular/router';
import { AlunoPage } from './aluno/aluno.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'aluno',
    pathMatch: 'full',
  },
  {
    path: 'aluno',
    component: AlunoPage,
  },
];
