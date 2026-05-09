import { Producto } from '../../productos/entities/producto.entity';
export declare class Categoria {
    idCategoria: number;
    nombre: string;
    descripcion: string;
    creadoEn: Date;
    actualizadoEn: Date;
    eliminadoEn: Date;
    productos: Producto[];
}
