import { Subcategoria } from "./../subcategorias/subcategoria";

export interface Categoria {
    _id?: string;
    codigo: string;
    descripcion: string;
    subcategorias: Subcategoria[]
}

