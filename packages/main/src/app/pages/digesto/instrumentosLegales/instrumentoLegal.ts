import { Subcategoria } from "./../subcategorias/subcategoria";
import { Area } from "./../areas/area";
import { Categoria } from "./../categorias/categoria";
import { Archivo } from "../archivos/archivo";

export class InstrumentoLegal {
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
}
