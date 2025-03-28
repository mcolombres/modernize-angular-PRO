import { Disposicion } from './../disposiciones/disposicion';
import { InstrumentoLegal } from "./instrumentoLegal";
import { Sesion } from './sesion';


export interface Acuerdo {

  _id:string | undefined;
  sesion?: Sesion;
  instrumentoLegal?: InstrumentoLegal;
  ratifica?: Disposicion[];

}
