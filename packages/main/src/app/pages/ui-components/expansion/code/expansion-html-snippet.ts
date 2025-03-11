export const BASIC_EXPANSION_HTML_SNIPPET = `  <mat-accordion>
            <mat-expansion-panel hideToggle class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600 f-s-14">
                  This is the expansion title
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  This is a summary of the content
                </mat-panel-description>
              </mat-expansion-panel-header>
              <p>This is the primary content of the panel.</p>
            </mat-expansion-panel>
            <mat-expansion-panel class="cardWithShadow" (opened)="panelOpenState = true"
              (closed)="panelOpenState = false">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600 f-s-14">
                  Self aware panel
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Currently I am {{panelOpenState ? 'open' : 'closed'}}
                </mat-panel-description>
              </mat-expansion-panel-header>
              <p>I'm visible because I am open</p>
            </mat-expansion-panel>
          </mat-accordion>
`;

export const EXPAND_EXPANSION_HTML_SNIPPET = `  <div class="d-flex align-items-center m-b-16">
            <button mat-flat-button color="primary" (click)="accordion.openAll()">
              Expand All
            </button>
            <button mat-stroked-button color="primary" (click)="accordion.closeAll()" class="m-l-8">
              Collapse All
            </button>
          </div>
          <mat-accordion multi>
            <!-- step 1 -->
            <mat-expansion-panel class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600"> Personal data </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Type your name and age
                  <mat-icon class="m-l-auto m-r-8">
                    <i-tabler name="user-circle" class="icon-20"></i-tabler>
                  </mat-icon>
                </mat-panel-description>
              </mat-expansion-panel-header>
  
              <div class="row">
                <div class="col-lg-6 col-sm-6">
                  <mat-form-field appearance="outline" color="primary" class="w-100">
                    <mat-label>First name</mat-label>
                    <input matInput />
                  </mat-form-field>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <mat-form-field appearance="outline" color="primary" class="w-100">
                    <mat-label>Age</mat-label>
                    <input matInput type="number" min="1" />
                  </mat-form-field>
                </div>
              </div>
            </mat-expansion-panel>
  
            <!-- step 2 -->
            <mat-expansion-panel disabled class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600"> Destination </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Type the country name
                  <mat-icon class="m-l-auto m-r-8">
                    <i-tabler name="current-location" class="icon-20"></i-tabler>
                  </mat-icon>
                </mat-panel-description>
              </mat-expansion-panel-header>
  
              <mat-form-field appearance="outline" color="primary">
                <mat-label>Country</mat-label>
                <input matInput />
              </mat-form-field>
            </mat-expansion-panel>
  
            <!-- step 3 -->
            <mat-expansion-panel class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600">
                  Day of the trip
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Inform the date you wish to travel
                  <mat-icon class="m-l-auto m-r-8">
                    <i-tabler name="calendar-due" class="icon-20"></i-tabler>
                  </mat-icon>
                </mat-panel-description>
              </mat-expansion-panel-header>
  
              <div class="row">
                <div class="col-lg-6 col-sm-6">
                  <mat-form-field appearance="outline" color="primary" class="w-100">
                    <mat-label>Date of Trip</mat-label>
                    <input matInput />
                  </mat-form-field>
                </div>
              </div>
            </mat-expansion-panel>
          </mat-accordion>
`;

export const ACCORDIAN_EXPANSION_HTML_SNIPPET = `  <mat-accordion>
            <mat-expansion-panel hideToggle class="cardWithShadow">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600 f-s-14">
                  This is the expansion title
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  This is a summary of the content
                </mat-panel-description>
              </mat-expansion-panel-header>
              <p>This is the primary content of the panel.</p>
            </mat-expansion-panel>
            <mat-expansion-panel class="cardWithShadow" (opened)="panelOpenState = true"
              (closed)="panelOpenState = false">
              <mat-expansion-panel-header>
                <mat-panel-title class="f-w-600 f-s-14">
                  Self aware panel
                </mat-panel-title>
                <mat-panel-description class="f-s-14">
                  Currently I am {{panelOpenState ? 'open' : 'closed'}}
                </mat-panel-description>
              </mat-expansion-panel-header>
              <p>I'm visible because I am open</p>
            </mat-expansion-panel>
          </mat-accordion>
`;