import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './shared';
import { CpfService } from './shared/services/cpf.service';
import { CpfComponent } from './cpf/cpf.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CpfSearchComponent } from './cpf-search/cpf-search.component';
import { CpfDetailComponent } from './cpf-detail/cpf-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CpfComponent,
    MessagesComponent,
    PageNotFoundComponent,
    NavComponent,
    FooterComponent,
    CpfSearchComponent,
    CpfDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    CpfService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
