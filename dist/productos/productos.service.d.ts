import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { CategoriasService } from '../categorias/categorias.service';
export declare class ProductosService {
    private readonly productoRepository;
    private readonly categoriasService;
    constructor(productoRepository: Repository<Producto>, categoriasService: CategoriasService);
    create(createProductoDto: CreateProductoDto): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto>;
    remove(id: number): Promise<{
        mensaje: string;
    }>;
}
