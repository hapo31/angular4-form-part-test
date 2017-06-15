import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdMenuModule } from '@angular/material';
import { ParentComponent } from './app.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdMenuModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
