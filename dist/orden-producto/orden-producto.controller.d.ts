import { OrdenProductoService } from './orden-producto.service';
import { CreateOrdenProductoDto } from './dto/create-orden-producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden-producto.dto';
import { OrdenProducto } from './entities/orden-producto.entity';
export declare class OrdenProductoController {
    private readonly ordenProductoService;
    constructor(ordenProductoService: OrdenProductoService);
    create(createOrdenProductoDto: CreateOrdenProductoDto): Promise<OrdenProducto>;
    findAll(): Promise<OrdenProducto[]>;
    findOne(id: number): Promise<OrdenProducto>;
    update(id: number, updateOrdenProductoDto: UpdateOrdenProductoDto): Promise<OrdenProducto>;
    remove(id: number, productId: number): Promise<{
        mensaje: string;
    }>;
}
