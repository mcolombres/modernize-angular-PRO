import { subcategorias } from './../subcategorias/subcategoriasData';
import { sesiones } from './../sesiones/sesionData';
import { Sesion } from './../sesiones/sesion';

import { archivos } from '../archivos/archivoData';

import { InstrumentoLegal } from './instrumentoLegal';
import { area } from '../areas/areasData';
import { categoria } from '../categorias/categoriasData';


export  const instrumentos: InstrumentoLegal[] = [
  {
    _id : '67aa0ec5f1d95fed64e76fe9' ,
    anio : 2024,
    numero:112,
    visto : '',
    expediente: ['103.161-UACO-22'],
    asunto: 'ACTUALIZA la tabulación del valor hora del servicio ...',
    area : area[3],
    categoria: categoria[3],
    subcategoria: subcategorias[4],
    modificaA: [],
    derogaA: [],
    archivos: archivos.slice(4,5),  // 67ab571c75950a8fd75821d6   67ab571c75950a8fd75821d7
    /*
_id: string;
    anio?: number;
    numero?: number;
    visto?: string;
    expediente?: String[];
    asunto?: string;
    area?: Area;
    categoria?: Categoria;
    subcategoria?: Subcategoria;
    modificaA?: InstrumentoLegal[];
    derogaA?: InstrumentoLegal[];
    archivos?: Archivo[];


    */

  },

];
