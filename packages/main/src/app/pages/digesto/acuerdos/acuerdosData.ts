import { sesiones } from './../sesiones/sesionData';
import { Sesion } from './../sesiones/sesion';

import { Acuerdo } from 'src/app/pages/digesto/acuerdos/acuerdo';
import { InstrumentoLegal } from '../instrumentosLegales/instrumentoLegal';
import { instrumentos } from '../instrumentosLegales/instrumLegalesData';



export  const acuerdos: Acuerdo[] = [
  {
    _id : '67aa0ec1f1d95fed64e76dee' ,
    sesion: sesiones[0], //665baac0e9c9803974c21e92
    instrumentoLegal: instrumentos[0],
    ratifica: [],

  },
  {
    _id : '67aa0ec1f1d95fed64e76def' ,
    sesion: sesiones[0],
    instrumentoLegal: instrumentos[0],
    ratifica: [],

  },
  /*
      _id:string | undefined;
      sesion?: Sesion;
      instrumentoLegal?: InstrumentoLegal;
      ratifica?: Disposicion[];

    */



];
