import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BarraPesquisaComponent } from './components/barra-pesquisa/barra-pesquisa.component';
import { FooterComponent } from './components/footer/footer.component';
import { NaoEncontradaComponent } from './components/nao-encontrada/nao-encontrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from "@angular/material/snack-bar"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarraPesquisaComponent,
    FooterComponent,
    NaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
