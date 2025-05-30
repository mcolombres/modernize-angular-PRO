export const ORDINARY_FORM_HTML_SNIPPET = `    <form>
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
            <input matInput />
            <mat-hint> We'll never share your email with anyone else.</mat-hint>
        </mat-form-field>
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block m-t-12"
            >Password</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
            <input matInput type="password" />
        </mat-form-field>
        <!-- input -->
        <mat-checkbox color="primary">Check Me Out!</mat-checkbox>
        <div class="m-t-12">
            <button mat-flat-button color="primary">Submit</button>
        </div>
    </form>
`;

export const INPUT_VARIANTS_HTML_SNIPPET = `    <form>
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Error</mat-label>
        <mat-form-field appearance="outline" class="w-100">
            <input
            matInput
            placeholder="pat@example.com"
            [formControl]="email"
            (blur)="updateErrorMessage()"
            required
            />

            @if (email.invalid) {
            <mat-error>{{ errorMessage() }}</mat-error>
            }
        </mat-form-field>
    </form>
`;

export const DEFAULT_FORM_HTML_SNIPPET = `    <form>
      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Default Text</mat-label>
      <mat-form-field appearance="outline" class="w-100" color="primary">
        <input matInput value="George deo" />
      </mat-form-field>

      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
      <mat-form-field appearance="outline" class="w-100" color="primary">
        <input matInput type="email" />
      </mat-form-field>

      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Password</mat-label>
      <mat-form-field appearance="outline" class="w-100" color="primary">
        <input matInput type="password" />
      </mat-form-field>

      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Textarea</mat-label>
      <mat-form-field appearance="outline" class="w-100" color="primary">
        <textarea matInput rows="5"></textarea>
      </mat-form-field>

      <div class="row">
        <!-- checkbox -->
        <div class="col-sm-6 col-lg-4">
          <mat-checkbox color="primary"
            >Check this custom checkbox</mat-checkbox
          >
          <mat-checkbox color="primary"
            >Check this custom checkbox</mat-checkbox
          >
          <mat-checkbox color="primary"
            >Check this custom checkbox</mat-checkbox
          >
        </div>
        <!-- radio -->
        <div class="col-sm-6 col-lg-4">
          <mat-radio-group aria-label="Select an option">
            <mat-radio-button color="primary" value="1"
              >Toggle this custom radio</mat-radio-button
            >
            <mat-radio-button color="primary" value="2"
              >Toggle this custom radio</mat-radio-button
            >
            <mat-radio-button color="primary" value="3"
              >Toggle this custom radio</mat-radio-button
            >
          </mat-radio-group>
        </div>
      </div>
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block m-t-12">Select</mat-label>
      <mat-form-field appearance="outline" class="w-100">
        <mat-select [(value)]="selectedFood">
          @for(option of foods; track option.value) {
          <mat-option [value]="option.value">{{ option.viewValue }}</mat-option>
          }
        </mat-select>
      </mat-form-field>

      <div class="m-t-12">
        <button mat-flat-button color="primary">Submit</button>
      </div>
    </form>
`;

export const BASIC_HEADER_HTML_SNIPPET = `    <div class="p-16 bg-light-primary rounded">
      <h5 class="f-s-14 text-primary d-flex align-items-center f-w-600">
        <i-tabler name="info-circle" class="icon-20 m-r-8 d-flex"></i-tabler
        >Person Info
      </h5>
    </div>

    <div class="row m-t-20">
      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">First Name</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>

        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
          >Select Gender</mat-label
        >
        <mat-form-field appearance="outline" class="w-100">
          <mat-select value="male">
            <mat-option value="male">Male</mat-option>
            <mat-option value="female">Female</mat-option>
            <mat-option value="other">Other</mat-option>
          </mat-select>
        </mat-form-field>

        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Membership</mat-label>
        <mat-radio-group aria-label="Select an option">
          <mat-radio-button value="1" color="primary">Free</mat-radio-button>
          <mat-radio-button value="2" color="primary">Paid</mat-radio-button>
        </mat-radio-group>
      </div>
      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Last Name</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>

        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
          >Date of Birth</mat-label
        >
        <mat-form-field appearance="outline" class="w-100">
          <input matInput [matDatepicker]="picker" />
          <mat-datepicker-toggle
            matIconSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </div>
    </div>

    <div class="p-16 bg-light-primary rounded m-y-20">
      <h5 class="f-s-14 text-primary d-flex align-items-center f-w-600">
        <i-tabler name="info-circle" class="icon-20 m-r-8 d-flex"></i-tabler
        >Address
      </h5>
    </div>

    <div class="row m-t-20">
      <div class="col-lg-12">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Street</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>
      </div>

      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">City</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>
      </div>

      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">State</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>
      </div>

      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Post Code</mat-label>
        <mat-form-field appearance="outline" class="w-100" color="primary">
          <input matInput type="text" />
        </mat-form-field>
      </div>

      <div class="col-lg-6">
        <!-- input -->
        <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Country</mat-label>
        <mat-form-field appearance="outline" class="w-100">
          <mat-select value="male">
            <mat-option value="india">India</mat-option>
            <mat-option value="uk">United Kingdom</mat-option>
            <mat-option value="africa">Africa</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </div>

    <button mat-flat-button class="bg-error text-white">Cancel</button>
    <button mat-flat-button class="m-l-8">Submit</button>
`;

export const DISABLED_FORM_HTML_SNIPPET = `   <form>
      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Name</mat-label>
      <mat-form-field appearance="outline" class="w-100">
        <input matInput disabled />
      </mat-form-field>
      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
      <mat-form-field appearance="outline" class="w-100">
        <input matInput disabled type="email" />
      </mat-form-field>
      <!-- input -->
      <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Password</mat-label>
      <mat-form-field appearance="outline" class="w-100">
        <input matInput disabled type="password" />
      </mat-form-field>
      <button mat-raised-button disabled>Submit</button>
    </form>
`;

export const LEFT_ICON_HTML_SNIPPET = `   <form>
          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Username</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Username" />
            <mat-icon matPrefix>
              <i-tabler name="user" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Email" />
            <mat-icon matPrefix>
              <i-tabler name="mail" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Password</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Password" type="password" />
            <mat-icon matPrefix>
              <i-tabler name="lock" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
            >Confirm Password</mat-label
          >
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Confirm Password" type="password" />
            <mat-icon matPrefix>
              <i-tabler name="lock" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>
          <!-- input -->
          <mat-checkbox color="primary">Remember Me!</mat-checkbox>
          <div class="d-flex align-items-center gap-8 m-t-10 b-t-1 p-t-20">
            <button mat-flat-button color="primary">Submit</button>
            <button mat-flat-button class="bg-error text-white">Cancel</button>
          </div>
        </form>
`;

export const RIGHT_ICON_HTML_SNIPPET = `   <form>
          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Username</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Username" />
            <mat-icon matSuffix>
              <i-tabler name="user" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Email</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Email" />
            <mat-icon matSuffix>
              <i-tabler name="mail" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Password</mat-label>
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Password" type="password" />
            <mat-icon matSuffix>
              <i-tabler name="lock" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>

          <!-- input -->
          <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
            >Confirm Password</mat-label
          >
          <mat-form-field appearance="outline" class="w-100">
            <input matInput placeholder="Confirm Password" type="password" />
            <mat-icon matSuffix>
              <i-tabler name="lock" class="icon-20 d-flex"></i-tabler>
            </mat-icon>
          </mat-form-field>
          <!-- input -->
          <mat-checkbox color="primary">Remember Me!</mat-checkbox>

          <div
            class="d-flex align-items-center gap-8 m-t-10 b-t-1 p-t-20"
          >
            <button mat-flat-button color="primary">Submit</button>
            <button mat-flat-button class="bg-error text-white">Cancel</button>
          </div>
        </form>
`;
