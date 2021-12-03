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
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { GruaComponent } from './pages/servicio/grua/grua.component';
import { MantenimientoComponent } from './pages/servicio/mantenimiento/mantenimiento.component';
import { PromosComponent } from './pages/promos/promos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NoticiasPipe } from './pipes/noticias.pipe';
import { FormsModule } from '@angular/forms';
import { MecanicoComponent } from './pages/mecanico/mecanico.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { RegistroMecanicoComponent } from './pages/mecanico/registro-mecanico/registro-mecanico.component';
import { RegistrarVehiculoComponent } from './pages/mecanico/registrar-vehiculo/registrar-vehiculo.component';
import { SeguimientoComponent } from './pages/seguimiento/seguimiento.component';
import { ModalComponent, NgbdModalComponent} from './pages/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { SolicitarTallerComponent } from './pages/cliente/solicitar-taller/solicitar-taller.component';
import { MatIconModule } from '@angular/material/icon';


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
    NoticiasPipe,
    MecanicoComponent,
    ClienteComponent,
    RegistroMecanicoComponent,
    RegistrarVehiculoComponent,
    ModalComponent,
    NgbdModalComponent,
    SolicitarTallerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
  ],
  entryComponents:[NgbdModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
