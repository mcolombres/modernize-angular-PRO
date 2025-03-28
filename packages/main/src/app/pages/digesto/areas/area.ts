import { Categoria } from "./../categorias/categoria";

export interface Area {
    _id?: string;
    codigo: string;
    descripcion: string;
    categorias: Categoria[];
}
