export const BASIC_DATEPICKER_HTML_SNIPPET = `  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="picker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>
`;

export const CUSTOM_SELECTIONS_DATEPICKER_HTML_SNIPPET = `  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Enter a date range</mat-label>
              <mat-date-range-input [rangePicker]="custompicker">
                <input matStartDate placeholder="Start date" />
                <input matEndDate placeholder="End date" />
              </mat-date-range-input>
              <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="custompicker"></mat-datepicker-toggle>
              <mat-date-range-picker #custompicker></mat-date-range-picker>
            </mat-form-field>
`;

export const FORM_INTEGRATION_DATEPICKER_HTML_SNIPPET = `  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Enter a date range</mat-label>
              <mat-date-range-input [formGroup]="range" [rangePicker]="formpicker">
                <input matStartDate formControlName="start" placeholder="Start date" />
                <input matEndDate formControlName="end" placeholder="End date" />
              </mat-date-range-input>
              <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="formpicker"></mat-datepicker-toggle>
              <mat-date-range-picker #formpicker></mat-date-range-picker>
              @if(range.controls.start.hasError('matStartDateInvalid')) {
              <mat-error>Invalid start date</mat-error>
              } @if(range.controls.end.hasError('matEndDateInvalid')) {
              <mat-error>Invalid end date</mat-error>
              }
            </mat-form-field>
            <div class="p-24 rounded bg-light m-t-16">
              <p class="f-s-14 f-w-600">
                Selected range: {{ range.value | json }}
              </p>
            </div>
`;

export const ACTION_BUTTONS_DATEPICKER_HTML_SNIPPET = `  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="datepicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="datepicker"></mat-datepicker-toggle>
              <mat-datepicker #datepicker>
                <mat-datepicker-actions>
                  <button mat-button matDatepickerCancel>Cancel</button>
                  <button mat-raised-button color="primary" matDatepickerApply>
                    Apply
                  </button>
                </mat-datepicker-actions>
              </mat-datepicker>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Enter a date range</mat-label>
              <mat-date-range-input [rangePicker]="rangePicker">
                <input matStartDate placeholder="Start date" />
                <input matEndDate placeholder="End date" />
              </mat-date-range-input>
              <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="rangePicker"></mat-datepicker-toggle>
              <mat-date-range-picker #rangePicker>
                <mat-date-range-picker-actions>
                  <button mat-button matDateRangePickerCancel>Cancel</button>
                  <button mat-raised-button color="primary" matDateRangePickerApply>
                    Apply
                  </button>
                </mat-date-range-picker-actions>
              </mat-date-range-picker>
            </mat-form-field>
`;

export const DATE_RANGE_PICKER_DATEPICKER_HTML_SNIPPET = `  <mat-form-field class="w-100" appearance="outline">
              <mat-label>First campaign</mat-label>
              <mat-date-range-input [formGroup]="campaignOne" [rangePicker]="campaignOnePicker"
                [comparisonStart]="campaignTwo.value.start" [comparisonEnd]="campaignTwo.value.end">
                <input matStartDate placeholder="Start date" formControlName="start" />
                <input matEndDate placeholder="End date" formControlName="end" />
              </mat-date-range-input>
              <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="campaignOnePicker"></mat-datepicker-toggle>
              <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>
            </mat-form-field>

            <mat-form-field class="w-100 m-t-20" appearance="outline">
              <mat-label>Second campaign</mat-label>
              <mat-date-range-input [formGroup]="campaignTwo" [rangePicker]="campaignTwoPicker"
                [comparisonStart]="campaignOne.value.start" [comparisonEnd]="campaignOne.value.end">
                <input matStartDate placeholder="Start date" formControlName="start" />
                <input matEndDate placeholder="End date" formControlName="end" />
              </mat-date-range-input>
              <mat-datepicker-toggle matIconSuffix [for]="campaignTwoPicker"></mat-datepicker-toggle>
              <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
              <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>
            </mat-form-field>
`;

export const OPEN_METHOD_DATEPICKER_HTML_SNIPPET = `  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="openpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker #openpicker></mat-datepicker>
            </mat-form-field>
            <button mat-flat-button color="primary" (click)="openpicker.open()">
              Open
            </button>
`;

export const CUSTOM_ICON_DATEPICKER_HTML_SNIPPET = `  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="iconpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="iconpicker">
                <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>
              </mat-datepicker-toggle>
              <mat-datepicker #iconpicker></mat-datepicker>
            </mat-form-field>
`;

export const CUSTOM_DATE_CLASSES_DATEPICKER_HTML_SNIPPET = `  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="customdatepicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="customdatepicker"></mat-datepicker-toggle>
              <mat-datepicker [dateClass]="dateClass" #customdatepicker></mat-datepicker>
            </mat-form-field>
`;

export const PALLETE_COLORS_DATEPICKER_HTML_SNIPPET = `  <mat-form-field color="accent" appearance="outline" class="w-100">
              <mat-label>Inherited calendar color</mat-label>
              <input matInput [matDatepicker]="picker1" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="picker1"></mat-datepicker-toggle>
              <mat-datepicker #picker1></mat-datepicker>
            </mat-form-field>

            <mat-form-field color="accent" appearance="outline" class="w-100 m-t-20">
              <mat-label>Custom calendar color</mat-label>
              <input matInput [matDatepicker]="picker2" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="picker2"></mat-datepicker-toggle>
              <mat-datepicker #picker2 color="primary"></mat-datepicker>
            </mat-form-field>
`;

export const CHANGE_EVENTS_DATEPICKER_HTML_SNIPPET = `  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Input & change events</mat-label>
              <input matInput [matDatepicker]="eventpicker" (dateInput)="addEvent('input', $event)"
                (dateChange)="addEvent('change', $event)" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="eventpicker"></mat-datepicker-toggle>
              <mat-datepicker #eventpicker></mat-datepicker>
            </mat-form-field>

            <div class="bg-light rounded p-24 m-t-16">
              <h2 class="f-s-16 f-w-600 m-b-16">Logs:</h2>
              @for(e of events; track e) {
              <div>{{ e }}</div>
              }
            </div>
`;

export const DISABLED_DATEPICKER_HTML_SNIPPET = `  <p>
              <mat-form-field class="w-100" appearance="outline">
                <mat-label>Completely disabled</mat-label>
                <input matInput [matDatepicker]="dp1" disabled />
                <mat-hint>MM/DD/YYYY</mat-hint>
                <mat-datepicker-toggle matIconSuffix [for]="dp1"></mat-datepicker-toggle>
                <mat-datepicker #dp1></mat-datepicker>
              </mat-form-field>
            </p>

            <p>
              <mat-form-field class="w-100" appearance="outline">
                <mat-label>Popup disabled</mat-label>
                <input matInput [matDatepicker]="dp2" />
                <mat-hint>MM/DD/YYYY</mat-hint>
                <mat-datepicker-toggle matIconSuffix [for]="dp2" disabled></mat-datepicker-toggle>
                <mat-datepicker #dp2></mat-datepicker>
              </mat-form-field>
            </p>

            <p>
              <mat-form-field class="w-100" appearance="outline">
                <mat-label>Input disabled</mat-label>
                <input matInput [matDatepicker]="dp3" disabled />
                <mat-hint>MM/DD/YYYY</mat-hint>
                <mat-datepicker-toggle matIconSuffix [for]="dp3"></mat-datepicker-toggle>
                <mat-datepicker #dp3 disabled="false"></mat-datepicker>
              </mat-form-field>
            </p>
`;

export const INLINE_DATEPICKER_HTML_SNIPPET = `  <mat-card class="demo-inline-calendar-card cardWithShadow">
              <mat-calendar [(selected)]="selected"></mat-calendar>
            </mat-card>
            <p class="f-s-14 f-w-600 m-t-16">
              Selected date: {{ selected }}
            </p>
`;

export const START_DATE_DATEPICKER_HTML_SNIPPET = `  <mat-form-field appearance="outline" class="w-100">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="startpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="startpicker"></mat-datepicker-toggle>
              <mat-datepicker #startpicker startView="year" [startAt]="startDate"></mat-datepicker>
            </mat-form-field>
`;

export const TOUCH_UI_DATEPICKER_HTML_SNIPPET = `  <mat-form-field class="w-100" appearance="outline">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="touchpicker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matIconSuffix [for]="touchpicker"></mat-datepicker-toggle>
              <mat-datepicker touchUi #touchpicker></mat-datepicker>
            </mat-form-field>
`;