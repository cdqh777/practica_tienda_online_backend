import { OrdenesService } from './ordenes.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Orden } from './entities/orden.entity';
export declare class OrdenesController {
    private readonly ordenesService;
    constructor(ordenesService: OrdenesService);
    create(createOrdenDto: CreateOrdenDto): Promise<Orden>;
    findAll(): Promise<Orden[]>;
    findOne(id: number): Promise<Orden>;
    update(id: number, updateOrdenDto: UpdateOrdenDto): Promise<Orden>;
    remove(id: number): Promise<{
        mensaje: string;
    }>;
}
