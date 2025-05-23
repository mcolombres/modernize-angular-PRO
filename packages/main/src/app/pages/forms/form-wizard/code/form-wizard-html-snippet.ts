export const BASIC_FORM_WIZARD_HTML_SNIPPET = `    <mat-stepper #stepper>
      <mat-step [stepControl]="firstFormGroup">
        <form class="m-t-24" [formGroup]="firstFormGroup">
          <ng-template matStepLabel>Account</ng-template>
          <div>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="firstCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input
                matInput
                formControlName="firstCtrl"
                required
                type="email"
              />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Password
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input
                matInput
                formControlName="firstCtrl"
                required
                type="password"
              />
            </mat-form-field>
          </div>
          <div class="text-right">
            <button mat-flat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step [stepControl]="secondFormGroup">
        <form class="m-t-24" [formGroup]="secondFormGroup">
          <ng-template matStepLabel>Profile</ng-template>
          <div>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >First Name
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="secondCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Last Name
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="secondCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Address
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <textarea
                rows="5"
                matInput
                formControlName="secondCtrl"
                required
              ></textarea>
            </mat-form-field>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <button
              mat-flat-button
              class="bg-error text-white"
              matStepperPrevious
            >
              Back
            </button>
            <button mat-flat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Finish</ng-template>
        <h4 class="mat-headline-6 m-t-24">Terms and condition</h4>
        <p class="m-t-8 f-s-14">
          Sard about this site or you have been to it, but you cannot figure out
          what it is or what it can do. MTA web directory isSard about this site
          or you have been to it, but you cannot figure out what it is or what
          it can do. MTA web directory is
        </p>
        <mat-checkbox checked color="primary">Agree with terms?</mat-checkbox>
        <div class="d-flex justify-content-between m-t-16">
          <button
            mat-flat-button
            class="bg-error text-white"
            matStepperPrevious
          >
            Back
          </button>
          <button mat-flat-button (click)="stepper.reset()">Finish</button>
        </div>
      </mat-step>
    </mat-stepper>
`;

export const VERTICAL_FORM_WIZARD_HTML_SNIPPET = `    <mat-stepper orientation="vertical" #stepper>
      <mat-step [stepControl]="firstFormGroup">
        <form class="m-t-24" [formGroup]="firstFormGroup">
          <ng-template matStepLabel>Account</ng-template>
          <div>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="firstCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input
                matInput
                formControlName="firstCtrl"
                required
                type="email"
              />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Password
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input
                matInput
                formControlName="firstCtrl"
                required
                type="password"
              />
            </mat-form-field>
          </div>
          <div class="text-right">
            <button mat-flat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step [stepControl]="secondFormGroup">
        <form class="m-t-24" [formGroup]="secondFormGroup">
          <ng-template matStepLabel>Profile</ng-template>
          <div>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >First Name
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="secondCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Last Name
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <input matInput formControlName="secondCtrl" required />
            </mat-form-field>
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 d-block m-b-16"
              >Address
            </mat-label>
            <mat-form-field appearance="outline" class="w-100">
              <textarea
                rows="5"
                matInput
                formControlName="secondCtrl"
                required
              ></textarea>
            </mat-form-field>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <button
              mat-flat-button
              class="bg-error text-white"
              matStepperPrevious
            >
              Back
            </button>
            <button mat-flat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Finish</ng-template>
        <h4 class="mat-headline-6 m-t-24">Terms and condition</h4>
        <p class="m-t-8 f-s-14">
          Sard about this site or you have been to it, but you cannot figure out
          what it is or what it can do. MTA web directory isSard about this site
          or you have been to it, but you cannot figure out what it is or what
          it can do. MTA web directory is
        </p>
        <mat-checkbox checked color="primary">Agree with terms?</mat-checkbox>
        <div class="d-flex justify-content-between m-t-16">
          <button
            mat-flat-button
            class="bg-error text-white"
            matStepperPrevious
          >
            Back
          </button>
          <button mat-flat-button (click)="stepper.reset()">Finish</button>
        </div>
      </mat-step>
    </mat-stepper>
`;
