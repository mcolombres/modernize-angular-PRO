import { Injectable } from '@angular/core';
import {  signal } from '@angular/core';
//import { Employee } from 'src/app/pages/apps/employee/employee';
//import { employees } from 'src/app/pages/apps/employee/employeeData';
import { Acuerdo } from '@app/pages/digesto/acuerdos/acuerdo';
import { acuerdos } from '@app/pages/digesto/acuerdos/acuerdosData';

@Injectable({
  providedIn: 'root',
})
export class AcuerdoService {
  private acuerdo = signal<Acuerdo[]>(acuerdos);

  getAcuerdos() {
    return this.acuerdo();
  }

  addAcuerdo(acuerdo: Acuerdo): void {
    acuerdo.id = this.acuerdo().length + 1;
    this.acuerdo.update((acuerdos) => [...acuerdos, acuerdo]);
  }

  updateAcuerdo(updatedAcuerdo: Acuerdo): void {
    this.acuerdo.update((acuerdos) => {
      const index = acuerdos.findIndex((e) => e.id === updatedAcuerdo.id);
      if (index !== -1) {
        acuerdos[index] = updatedAcuerdo;
      }
      return [...acuerdos];
    });
  }

  deleteAcuerdo(acuerdoID: number): void {
    this.acuerdo.update((acuerdos) =>
      acuerdos.filter((e) => e.id !== acuerdoID)
    );
  }
}
