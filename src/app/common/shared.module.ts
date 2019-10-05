import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgMaterialModule } from './ng-material.module';
import { FontawesomeLibModule } from './fontawesome-lib.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    FontawesomeLibModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    FontawesomeLibModule
  ]
})
export class SharedModule { }
