import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-add-task-form',
  templateUrl: './add-task-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskFormComponent {
  readonly addTask: FormGroup = new FormGroup({ text: new FormControl() });
}
