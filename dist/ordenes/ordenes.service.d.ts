import { Repository } from 'typeorm';
import { Orden } from './entities/orden.entity';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { ClientesService } from '../clientes/clientes.service';
export declare class OrdenesService {
    private readonly ordenRepository;
    private readonly clientesService;
    constructor(ordenRepository: Repository<Orden>, clientesService: ClientesService);
    create(createOrdenDto: CreateOrdenDto): Promise<Orden>;
    findAll(): Promise<Orden[]>;
    findOne(id: number): Promise<Orden>;
    update(id: number, updateOrdenDto: UpdateOrdenDto): Promise<Orden>;
    remove(id: number): Promise<{
        mensaje: string;
    }>;
    recalcularTotal(idOrden: number): Promise<void>;
}
