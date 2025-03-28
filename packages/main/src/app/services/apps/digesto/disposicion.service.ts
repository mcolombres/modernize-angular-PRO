import { Injectable } from '@angular/core';
import {  signal } from '@angular/core';
//import { Employee } from 'src/app/pages/apps/employee/employee';
//import { employees } from 'src/app/pages/apps/employee/employeeData';
import { Disposicion } from '@app/pages/digesto/disposiciones/disposiciones';
import { disposiciones } from '@app/pages/digesto/disposiciones/disposicionesData';

@Injectable({
  providedIn: 'root',
})
export class DisposicionService {
  private disposicion = signal<Disposicion[]>(disposiciones);

  getDisposiciones() {
    return this.disposicion();
  }

  addDisposicion(disposicion: Disposicion): void {
    disposicion.id = this.disposicion().length + 1;
    this.disposicion.update((disposiciones) => [...disposiciones, disposicion]);
  }

  updateDisposicion(updateDisposicion: Disposicion): void {
    this.disposicion.update((disposiciones) => {
      const index = disposiciones.findIndex((e) => e.id === updateDisposicion.id);
      if (index !== -1) {
        disposiciones[index] = updateDisposicion;
      }
      return [...disposiciones];
    });
  }

  deleteDisposicion(disposicionID: number): void {
    this.disposicion.update((disposiciones) =>
      disposiciones.filter((e) => e.id !== disposicionID)
    );
  }
}
