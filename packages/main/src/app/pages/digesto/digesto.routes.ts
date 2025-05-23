import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

// digesto
import { AppAcuerdosComponent } from './acuerdos/acuerdos.component';
import { AppDisposicionesComponent } from './disposiciones/disposiciones.component';
//import { SesionDataComponent } from './sesion-data/sesion-data.component';


export const DigestoRoutes: Routes = [
  {
    path: '',
    children: [
      {//AppAcuerdosComponent
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
