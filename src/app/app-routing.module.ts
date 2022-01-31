import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { RegisterComponent } from './pages/register/register.component';
import { SeguimientoComponent } from './pages/seguimiento/seguimiento.component';
import { GruaComponent } from './pages/servicio/grua/grua.component';
import { MantenimientoComponent } from './pages/servicio/mantenimiento/mantenimiento.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { PromosComponent } from './pages/promos/promos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { MecanicoComponent } from './pages/mecanico/mecanico.component';
import { RegistroMecanicoComponent } from './pages/mecanico/registro-mecanico/registro-mecanico.component';
import { RegistrarVehiculoComponent } from './pages/mecanico/registrar-vehiculo/registrar-vehiculo.component';
import { SolicitarTallerComponent } from './pages/cliente/solicitar-taller/solicitar-taller.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'perfil',component:PerfilComponent, canActivate:[AuthGuard]},
  { path: 'iniciarSesion', component: LoginComponent },
  { path: 'registro', component: RegisterComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'promo/:id', component: PromosComponent },
  { path: 'seguimiento', component: SeguimientoComponent,canActivate:[AuthGuard]},
  { path: 'servicioTaller', component:SolicitarTallerComponent,canActivate:[AuthGuard]},
  { path: 'servicio', component: ServicioComponent},
  { path: 'servicio-grua', component:GruaComponent,canActivate:[AuthGuard]},
  { path: 'servicio-mantenimiento', component:MantenimientoComponent,canActivate:[AuthGuard]},
  { path: 'cliente',component:ClienteComponent, canActivate:[AuthGuard]},
  { path: 'mecanico',component:MecanicoComponent, canActivate:[AuthGuard]},
  { path: 'registromecanico',component:RegistroMecanicoComponent,canActivate:[AuthGuard]},
  { path: 'registrarvehiculo',component:RegistrarVehiculoComponent,canActivate:[AuthGuard]},
  { path: '', component: HomeComponent },
  { path: '**', pathMatch:'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
