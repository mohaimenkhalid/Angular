import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferanceVariableComponent } from './template-referance-variable/template-referance-variable.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingComponent,
    EventBindingComponent,
    TemplateReferanceVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
