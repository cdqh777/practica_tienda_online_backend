import { Orden } from '../../ordenes/entities/orden.entity';
import { Producto } from '../../productos/entities/producto.entity';
export declare class OrdenProducto {
    idOrdenProducto: number;
    idOrden: number;
    idProducto: number;
    cantidad: number;
    precio_unitario: number;
    creadoEn: Date;
    actualizadoEn: Date;
    eliminadoEn: Date;
    orden: Orden;
    producto: Producto;
}
