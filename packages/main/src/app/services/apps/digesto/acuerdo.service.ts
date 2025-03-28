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
    //acuerdo._id = this.acuerdo().length + 1;
    //El método toString() convierte un número en su representación en forma de cadena.
    acuerdo._id=(this.acuerdo().length + 1).toString();
    this.acuerdo.update((acuerdos) => [...acuerdos, acuerdo]);
  }

  updateAcuerdo(updatedAcuerdo: Acuerdo): void {
    /*  Resultado de findIndex:
Si el valor encontrado existe, el método devolverá el índice (número) del elemento en el array.
Si el valor no se encuentra, devolverá -1 (un número).
En resumen, el valor de la constante index será un número (el índice del array),
independientemente de que el campo _id sea una cadena o cualquier otro tipo de dato.    */

    this.acuerdo.update((acuerdos) => {
      const index = acuerdos.findIndex((e) => e._id === updatedAcuerdo._id);
      if (index !== -1) {
        acuerdos[index] = updatedAcuerdo;
      }
      return [...acuerdos];
    });
  }
/* FALTA VER EL CASO CUANDO e._id ES INDEFINIDO */
  deleteAcuerdo(acuerdoID: number): void {
    this.acuerdo.update((acuerdos) =>
      //acuerdos.filter((e) => e._id !== acuerdoID)
    acuerdos.filter((e) => e._id !== undefined && +e._id !== acuerdoID)
    );
    /*El operador + convierte una cadena a un número.Pero si e._id sea undefined la conversión da NaN y puede afectar la logica de la comparación. */
    /*Hay que asegurarse que e._id no sea undefined antes de la conversión */
  }
}
