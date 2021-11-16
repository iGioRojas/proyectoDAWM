import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { SeguimientoComponent } from './pages/seguimiento/seguimiento.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { GruaComponent } from './pages/servicio/grua/grua.component';
import { MantenimientoComponent } from './pages/servicio/mantenimiento/mantenimiento.component';
import { PromosComponent } from './pages/promos/promos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ServicioComponent,
    SeguimientoComponent,
    NoticiasComponent,
    GruaComponent,
    MantenimientoComponent,
    PromosComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
