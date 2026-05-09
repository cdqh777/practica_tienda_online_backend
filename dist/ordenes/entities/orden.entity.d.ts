import { Cliente } from '../../clientes/entities/cliente.entity';
import { OrdenProducto } from '../../orden-producto/entities/orden-producto.entity';
export declare class Orden {
    idOrden: number;
    idCliente: number;
    estado: string;
    total: number;
    creadoEn: Date;
    actualizadoEn: Date;
    eliminadoEn: Date;
    cliente: Cliente;
    ordenProductos: OrdenProducto[];
}
