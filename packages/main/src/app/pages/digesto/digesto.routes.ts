import { Routes } from '@angular/router';

// digesto
import { AppAcuerdosComponent } from './acuerdos/acuerdos.component';
import { AppDisposicionesComponent } from './disposiciones/disposiciones.component';

export const DigestoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'acuerdos',
        component: AppAcuerdosComponent,
        data: {
          title: 'Acuerdos',
          urls: [
            { title: 'Digesto', url: '/digesto/acuerdos' },
            { title: 'Acuerdos' },
          ],
        },
      },
      {
        path: 'disposiciones',
        component: AppDisposicionesComponent,
        data: {
          title: 'Disposiciones',
          urls: [
            { title: 'Digesto', url: '/digesto/disposiciones' },
            { title: 'disposiciones' },
          ],
        },
      },

/*se agrega ruta para sesiones como invoice */
{
  path: 'sesiones',
  component: AppDisposicionesComponent,
  data: {
    title: 'Sesiones',
    urls: [
      { title: 'Digesto', url: '/digesto/sesiones' },
      { title: 'sesiones' },
    ],
  },
},



    ],
  },
];
