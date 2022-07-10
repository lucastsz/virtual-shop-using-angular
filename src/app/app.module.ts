import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BarraPesquisaComponent } from './components/barra-pesquisa/barra-pesquisa.component';
import { FooterComponent } from './components/footer/footer.component';
import { NaoEncontradaComponent } from './components/nao-encontrada/nao-encontrada.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
