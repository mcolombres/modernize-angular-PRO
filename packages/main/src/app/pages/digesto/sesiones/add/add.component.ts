import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-add',
    imports: [MatDialogModule, MatButtonModule],
    templateUrl: './add.component.html'
})
export class AppAddAcuerdoComponent {
  constructor() {}
}
