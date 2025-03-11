import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrandingComponent } from 'src/app/layouts/full/vertical/sidebar/branding.component';
import { CoreService } from 'src/app/services/core.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-side-login',
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrandingComponent,
  ],
  templateUrl: './side-login.component.html',
  providers: [LoginService],
})
export class AppSideLoginComponent {
  options = this.settings.getOptions();
  msg = '';
  constructor(
    private settings: CoreService,
    private routes: Router,
    private service: LoginService
  ) {}

  check(uname: string, p: string) {
    const output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/starter']);
    } else {
      this.msg = 'Invalid Username or Password';
    }
  }
}
