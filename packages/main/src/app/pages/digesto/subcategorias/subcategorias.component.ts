// import { Component, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
// import { MatTableDataSource, MatTable } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from 'src/app/material.module';
// import { TablerIconsModule } from 'angular-tabler-icons';
// import { Acuerdo } from 'src/app/pages/digesto/acuerdos/acuerdo';
// import { AcuerdoService } from 'src/app/services/apps/digesto/acuerdo.service';
// import { CommonModule } from '@angular/common';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   templateUrl: './acuerdos.component.html',
//   imports: [
//     MaterialModule,
//     FormsModule,
//     ReactiveFormsModule,
//     TablerIconsModule,
//     CommonModule,
//   ],
// })
// export class AppAcuerdosComponent implements AfterViewInit {
//   @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

//   searchText: string;
//   displayedColumns: string[] = [
//     '#',
//     'name',
//     'email',
//     'mobile',
//     'date of joining',
//     'salary',
//     'projects',
//     'action',
//   ];
//   dataSource = new MatTableDataSource<Acuerdo>([]);

//   constructor(
//     public dialog: MatDialog,
//     private acuerdoService: AcuerdoService
//   ) {}

//   ngOnInit(): void {
//     this.loadAcuerdos();
//   }

//   loadAcuerdos(): void {
//     const acuerdo = this.acuerdoService.getAcuerdos()
//     this.dataSource.data = acuerdo;
//     this.dataSource = new MatTableDataSource(acuerdo);
//     // this.acuerdoService.getAcuerdos().subscribe(acuerdos => {
//     //   this.dataSource.data = acuerdos;
//     // });
//   }

//   ngAfterViewInit(): void {
//     this.dataSource.paginator = this.paginator;
//   }

//   applyFilter(filterValue: string): void {
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }

//   openDialog(action: string, acuerdo: Acuerdo | any): void {
//     const dialogRef = this.dialog.open(AppAcuerdoDialogContentComponent, {
//       data: { action, acuerdo }, autoFocus: false
//     });

//     dialogRef.afterClosed().subscribe((result) => {
//       if (result?.event === 'Refresh') {
//         this.loadAcuerdos();
//       }
//     });
//   }
// }

// interface DialogData {
//   action: string;
//   acuerdo: Acuerdo;
// }

// @Component({
//   selector: 'app-dialog-content',
//   imports: [
//     MaterialModule,
//     FormsModule,
//     ReactiveFormsModule,
//     CommonModule,
//     TablerIconsModule,
//   ],
//   templateUrl: 'acuerdos-dialog-content.html',
// })
// export class AppAcuerdoDialogContentComponent {
//   action: string;
//   local_data: Acuerdo;
//   joiningDate = new FormControl();

//   constructor(
//     public dialog: MatDialog,
//     public dialogRef: MatDialogRef<AppAcuerdoDialogContentComponent>,
//     private acuerdoService: AcuerdoService,
//     private snackBar: MatSnackBar,
//     @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData
//   ) {
//     this.action = data.action;
//     this.local_data = { ...data.acuerdo };

//     const initialDate = this.local_data.DateOfJoining
//       ? new Date(this.local_data.DateOfJoining)
//       : new Date();
//     this.joiningDate.setValue(initialDate.toISOString().split('T')[0]);

//     if (!this.local_data.imagePath) {
//       this.local_data.imagePath = 'assets/images/profile/user-1.jpg';
//     }
//   }

//   doAction(): void {
//     this.local_data.DateOfJoining = this.joiningDate.value;
//     switch (this.action) {
//       case 'Add':
//         this.acuerdoService.addAcuerdo(this.local_data);
//         this.openSnackBar('Employee Added successfully!', 'Close');
//         break;
//       case 'Update':
//         this.acuerdoService.updateAcuerdo(this.local_data);
//         this.openSnackBar('Employee Updated successfully!', 'Close');
//         break;
//       case 'Delete':
//         this.acuerdoService.deleteAcuerdo(this.local_data.id);
//         this.openSnackBar('Employee Deleted successfully!', 'Close');
//         break;
//     }
//     this.dialogRef.close({ event: this.action });
//   }

//   openSnackBar(message: string, action: string) {
//     this.snackBar.open(message, action, {
//       duration: 3000,
//       horizontalPosition: 'center',
//       verticalPosition: 'top',
//     });
//   }

//   closeDialog(): void {
//     this.dialogRef.close({ event: 'Cancel' });
//   }

//   selectFile(event: any): void {
//     const file = event.target.files[0];
//     if (file && file.type.match(/image\/*/)) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         if (typeof reader.result === 'string') {
//           this.local_data.imagePath = reader.result;
//         }
//       };
//     }
//   }
// }





import { Component, Inject, Optional, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { DatePipe } from '@angular/common';
import { AppAddAcuerdoComponent } from './add/add.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { Acuerdo } from 'src/app/pages/digesto/acuerdos/acuerdo';
import { AcuerdoService } from 'src/app/services/apps/digesto/acuerdo.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './acuerdos.component.html',
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    CommonModule,
  ],
})
export class AppAcuerdosComponent implements AfterViewInit {
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

  dataSource = new MatTableDataSource<Acuerdo>([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  constructor(
    public dialog: MatDialog,
    private acuerdoService: AcuerdoService
  ) { }

  ngOnInit(): void {
    this.loadAcuerdos();
  }

  loadAcuerdos(): void {
    const acuerdo = this.acuerdoService.getAcuerdos();
    this.dataSource.data = acuerdo;
    this.dataSource = new MatTableDataSource(acuerdo);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, acuerdo: Acuerdo | any): void {
    const dialogRef = this.dialog.open(AppAcuerdoDialogContentComponent, {
      data: { action, acuerdo }, autoFocus: false
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dataSource.data = this.acuerdoService.getAcuerdos();
      if (result && result.event === 'Refresh') {
        this.loadAcuerdos(); // Refresh the employee list if necessary
      }
    });
  }
}

interface DialogData {
  action: string;
  acuerdo: Acuerdo;
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
  templateUrl: 'acuerdos-dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class AppAcuerdoDialogContentComponent {
  action: string | any;
  // tslint:disable-next-line - Disables all
  local_data: Acuerdo;
  selectedImage: any = '';
  joiningDate = new FormControl();

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AppAcuerdoDialogContentComponent>,
    private acuerdoService: AcuerdoService,
    private snackBar: MatSnackBar,

    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.action = data.action;
    this.local_data = { ...data.acuerdo };

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
      this.acuerdoService.addAcuerdo(this.local_data);
      this.dialog.open(AppAddAcuerdoComponent).afterClosed().subscribe(() => {
        this.dialogRef.close({ event: 'Refresh' });
        this.openSnackBar('Employee added successfully!', 'Close');
      });
      break;
    case 'Update':
      this.acuerdoService.updateAcuerdo(this.local_data);
      this.dialogRef.close({ event: 'Update' });
      this.openSnackBar('Employee updated successfully!', 'Close');
      break;
    case 'Delete':
      this.acuerdoService.deleteAcuerdo(this.local_data.id);
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
