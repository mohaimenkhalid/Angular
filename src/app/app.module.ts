import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferanceVariableComponent } from './template-referance-variable/template-referance-variable.component';
import {FormsModule} from "@angular/forms";
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentInterationComponent } from './component-interation/component-interation.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingComponent,
    EventBindingComponent,
    TemplateReferanceVariableComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    ComponentInterationComponent
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
