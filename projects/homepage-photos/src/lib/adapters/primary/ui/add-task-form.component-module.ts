import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddTaskFormComponent],
  	providers: [],
  	exports: [AddTaskFormComponent] })
export class AddTaskFormComponentModule {
}
