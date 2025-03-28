import { Component, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AppAddDisposicionComponent } from './add/add.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { Disposicion } from 'src/app/pages/digesto/disposiciones/disposiciones';
import { DisposicionService } from 'src/app/services/apps/digesto/disposicion.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { disposiciones } from '@app/pages/digesto/disposiciones/disposicionesData';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-disposiciones',
  templateUrl: './disposiciones.component.html',
  //styleUrls: ['./disposiciones.component.css']
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    CommonModule, MatCardModule,MatFormFieldModule,TablerIconsModule,MatTableModule,DatePipe,MatPaginatorModule,
  ],
})


export class AppDisposicionesComponent implements AfterViewInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);

  searchText: any;

  displayedColumns: string[] = [
    '#',
    'name',
    'email',
    'mobile',
    'date of joining',
    'salary',
    'projects',
    'action',
  ];

  dataSource = new MatTableDataSource<Disposicion>([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  constructor(
    public dialog: MatDialog,
    private disposicionesService: DisposicionService
  ) { }

  ngOnInit(): void {
    this.loadDisposiciones();
  }

  loadDisposiciones(): void {
    const disposicion = this.disposicionesService.getDisposiciones();
    this.dataSource.data = disposicion;
    this.dataSource = new MatTableDataSource(disposicion);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, disposicion: Disposicion | any): void {
    const dialogRef = this.dialog.open(AppDisposicionDialogContentComponent, {
      data: { action, disposicion }, autoFocus: false
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dataSource.data = this.disposicionesService.getDisposiciones();
      if (result && result.event === 'Refresh') {
        this.loadDisposiciones(); // Refresh the employee list if necessary
      }
    });
  }
}

interface DialogData {
  action: string;
  disposicion: Disposicion;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dialog-content',
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TablerIconsModule,
  ],
  templateUrl: 'disposiciones-dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class AppDisposicionDialogContentComponent {
  action: string | any;
  // tslint:disable-next-line - Disables all
  local_data: Disposicion;
  selectedImage: any = '';
  joiningDate = new FormControl();

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AppDisposicionDialogContentComponent>,
    private disposicionService: DisposicionService,
    private snackBar: MatSnackBar,

    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.action = data.action;
    this.local_data = { ...data.disposicion };

    this.joiningDate = new FormControl();

    if (this.local_data.DateOfJoining) {
      this.joiningDate.setValue(
        new Date(this.local_data.DateOfJoining).toISOString().split('T')[0]
      ); //  existing date
    } else {
      // Set to today's date if no existing date is available
      this.joiningDate.setValue(new Date().toISOString().split('T')[0]);
    }

    // Set default image path if not already set
    if (!this.local_data.imagePath) {
      this.local_data.imagePath = 'assets/images/profile/user-1.jpg';
    }
  }

  doAction(): void {
  this.local_data.DateOfJoining = this.joiningDate.value;

  switch (this.action) {
    case 'Add':
      this.disposicionService.addDisposicion(this.local_data);
      this.dialog.open(AppAddDisposicionComponent).afterClosed().subscribe(() => {
        this.dialogRef.close({ event: 'Refresh' });
        this.openSnackBar('Employee added successfully!', 'Close');
      });
      break;
    case 'Update':
      this.disposicionService.updateDisposicion(this.local_data);
      this.dialogRef.close({ event: 'Update' });
      this.openSnackBar('Employee updated successfully!', 'Close');
      break;
    case 'Delete':
      this.disposicionService.deleteDisposicion(this.local_data.id);
      this.dialogRef.close({ event: 'Delete' });
      this.openSnackBar('Employee deleted successfully!', 'Close');
      break;
    default:
      console.error('Unknown action:', this.action);
  }
}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }

  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return; // No file selected
    }

    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return; // Not an image file
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      if (typeof reader.result === 'string') {
        this.local_data.imagePath = reader.result; // Set selected image path
      }
    };
  }
}
