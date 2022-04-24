import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';
import { AddTaskFormComponentModule } from '../../../projects/homepage-photos/src/lib/adapters/primary/ui/add-task-form.component-module';
import { HomepagePhotosComponentModule } from '../../../projects/homepage-photos/src/lib/adapters/primary/ui/homepage-photos.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AddTaskPage,
        }
      ]),
  AddTaskFormComponentModule,
  HomepagePhotosComponentModule
],
  	declarations: [AddTaskPage],
  	providers: [],
  	exports: [] })
export class AddTaskPageModule {
}
