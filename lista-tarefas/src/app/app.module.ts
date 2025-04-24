import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormControl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
