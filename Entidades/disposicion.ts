import { InstrumentoLegal } from "../acuerdos/instrumentoLegal";

export interface Disposicion {
    _id: string;
    fecha: Date;
    instrumentoLegal: InstrumentoLegal;
    referendum: boolean;
    ratificadaPor: InstrumentoLegal[]; 
}