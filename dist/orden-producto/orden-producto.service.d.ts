import { Repository } from 'typeorm';
import { OrdenProducto } from './entities/orden-producto.entity';
import { CreateOrdenProductoDto } from './dto/create-orden-producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden-producto.dto';
import { OrdenesService } from '../ordenes/ordenes.service';
import { ProductosService } from '../productos/productos.service';
export declare class OrdenProductoService {
    private readonly ordenProductoRepository;
    private readonly ordenesService;
    private readonly productosService;
    constructor(ordenProductoRepository: Repository<OrdenProducto>, ordenesService: OrdenesService, productosService: ProductosService);
    create(createOrdenProductoDto: CreateOrdenProductoDto): Promise<OrdenProducto>;
    findAll(): Promise<OrdenProducto[]>;
    findOne(id: number): Promise<OrdenProducto>;
    update(id: number, updateOrdenProductoDto: UpdateOrdenProductoDto): Promise<OrdenProducto>;
    removeProductoDeOrden(idOrdenProducto: number, idProducto: number): Promise<{
        mensaje: string;
    }>;
}
