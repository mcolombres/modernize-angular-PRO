export const BASIC_FORM_WIZARD_TS_SNIPPET = `   import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../../material.module';


@Component({
  selector: 'app-form-wizard',
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-wizard.component.html',
})
export class AppFormWizardComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

}
 
`;
