


import { Disposicion } from './../disposiciones/disposicion';
import { InstrumentoLegal } from "./../instrumentosLegales/instrumentoLegal";
import { Sesion } from './../sesiones/sesion';


export interface Acuerdo {

  _id:string | undefined;
  sesion?: Sesion;
  instrumentoLegal?: InstrumentoLegal;
  ratifica?: Disposicion[];

}
