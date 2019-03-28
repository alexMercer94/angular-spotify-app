import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArtistaComponent } from 'src/components/artista/artista.component';
import { HomeComponent } from 'src/components/home/home.component';
import { SearchComponent } from 'src/components/search/search.component';
import { NavbarComponent } from 'src/components/shared/navbar/navbar.component';
import { DomseguroPipe } from 'src/pipes/domseguro.pipe';
import { LoadingComponent } from '../components/shared/loading/loading.component';
import { TarjetasComponent } from '../components/tarjetas/tarjetas.component';
import { NoimagePipe } from '../pipes/noimage.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
