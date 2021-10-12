import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/global/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recuperar-clave',
    loadChildren: () => import('./pages/global/recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
  },
  {
    path: 'homed',
    loadChildren: () => import('./pages/docente/homed/homed.module').then( m => m.HomedPageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./pages/docente/secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./pages/docente/opciones/opciones.module').then( m => m.OpcionesPageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./pages/docente/codigo-qr/codigo-qr.module').then( m => m.CodigoQrPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./pages/docente/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
