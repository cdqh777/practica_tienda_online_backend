import { Orden } from '../../ordenes/entities/orden.entity';
export declare class Cliente {
    idCliente: number;
    nombres: string;
    paterno: string;
    materno: string;
    email: string;
    creadoEn: Date;
    actualizadoEn: Date;
    eliminadoEn: Date;
    ordenes: Orden[];
}
