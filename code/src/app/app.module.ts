import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PostMessageComponent } from './components/post-message/post-message.component';
import { MessageProvider } from './message.provider';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeaderComponent,
    PostMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [MessageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
