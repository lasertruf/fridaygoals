import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';

import {MatCommonModule} from '@angular/material/core'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ClipboardModule } from 'ngx-clipboard';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ClipboardModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [{provide : MAT_DATE_LOCALE, useValue: 'en-IN'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
