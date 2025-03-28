import { Subcategoria } from "../subcategoria";
import { Area } from "../area";
import { Categoria } from "../categoria";

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