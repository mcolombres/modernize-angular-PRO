export const STICKY_FOOTER_TABLE_HTML_SNIPPET = `  <div class="table-responsive example-container">
      <table mat-table [dataSource]="transactions" class="w-100">
        <!-- Item Column -->
        <ng-container matColumnDef="item">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 mat-subtitle-1 f-s-16 p-l-0">
            Item
          </th>
          <td mat-cell *matCellDef="let transaction" class="p-l-0">
            <div class="d-flex align-items-center gap-12">
              <img [src]="transaction.img" alt="product" width="45" class="rounded" />
              <span class="f-s-16 f-w-600">{{ transaction.item }} </span>
            </div>
          </td>
          <td mat-footer-cell *matFooterCellDef class="p-l-0 f-w-600">Total</td>
        </ng-container>

        <!-- Cost Column -->
        <ng-container matColumnDef="cost">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 mat-subtitle-1 f-s-16">
            Cost
          </th>
          <td mat-cell *matCellDef="let transaction">
            {{ transaction.cost | currency }}
          </td>
          <td mat-footer-cell *matFooterCellDef>
            {{ getTotalCost() | currency }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        <tr mat-footer-row *matFooterRowDef="displayedColumns; sticky: true"></tr>
      </table>
    </div>
`;

export const STICKY_HEADER_TABLE_HTML_SNIPPET = `  <div class="table-responsive example-container">
      <table mat-table [dataSource]="dataSource" class="w-100">
        <!-- Position Column -->
        <ng-container matColumnDef="assigned">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 mat-subtitle-1 f-s-14 p-l-0">
            Assigned
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class="mat-subtitle-1 f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 mat-subtitle-1 f-s-14">
            Name
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.productName }}
          </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 mat-subtitle-1 f-s-14">
            Priority
          </th>
          <td mat-cell *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            } @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget">
          <th mat-header-cell *matHeaderCellDef class="f-w-600 mat-subtitle-1 f-s-14">
            Budget
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.budget }}k
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns1; sticky: true"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns1"></tr>
      </table>
    </div>
`;