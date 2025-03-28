import { Categoria } from "./categoria";

export interface Area {
    _id?: string;
    codigo: string;
    descripcion: string;
    categorias: Categoria[];
}
