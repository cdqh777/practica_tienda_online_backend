import { Categoria } from '../../categorias/entities/categoria.entity';
import { OrdenProducto } from '../../orden-producto/entities/orden-producto.entity';
export declare class Producto {
    idProducto: number;
    idCategoria: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    creadoEn: Date;
    actualizadoEn: Date;
    eliminadoEn: Date;
    categoria: Categoria;
    ordenProductos: OrdenProducto[];
}
