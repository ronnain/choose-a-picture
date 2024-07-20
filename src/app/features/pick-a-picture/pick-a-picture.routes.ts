import { Routes } from '@angular/router';
import { EmptyLayoutComponent } from 'src/app/layout/empty-layout.component';

export default <Routes>[
  {
    path: 'pick-a-picture',
    component: EmptyLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'round/1/step/1',
      },
      {
        path: 'round/:round/step/:step',
        loadComponent: () => import('./pick-a-picture.page'),
      },
    ],
  },
];
