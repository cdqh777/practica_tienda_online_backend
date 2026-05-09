import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from './entities/orden.entity';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class OrdenesService {
  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>,
    private readonly clientesService: ClientesService,
  ) {}

  async create(createOrdenDto: CreateOrdenDto): Promise<Orden> {
    // Verificar que el cliente existe
    await this.clientesService.findOne(createOrdenDto.idCliente);
    const orden = this.ordenRepository.create(createOrdenDto);
    return await this.ordenRepository.save(orden);
  }

  async findAll(): Promise<Orden[]> {
    return await this.ordenRepository.find({ relations: ['cliente'] });
  }

  async findOne(id: number): Promise<Orden> {
    const orden = await this.ordenRepository.findOne({
      where: { idOrden: id },
      relations: ['cliente', 'ordenProductos', 'ordenProductos.producto'],
    });
    if (!orden) {
      throw new NotFoundException(`Orden con id ${id} no encontrada`);
    }
    return orden;
  }

  async update(id: number, updateOrdenDto: UpdateOrdenDto): Promise<Orden> {
    const orden = await this.findOne(id);
    Object.assign(orden, updateOrdenDto);
    return await this.ordenRepository.save(orden);
  }

  async remove(id: number): Promise<{ mensaje: string }> {
    const orden = await this.findOne(id);
    await this.ordenRepository.softRemove(orden);
    return { mensaje: `Orden con id ${id} eliminada correctamente` };
  }

  // Recalcular el total de la orden
  async recalcularTotal(idOrden: number): Promise<void> {
    const orden = await this.findOne(idOrden);
    const total = orden.ordenProductos.reduce((acc, op) => {
      return acc + Number(op.precio_unitario) * op.cantidad;
    }, 0);
    await this.ordenRepository.update(idOrden, { total });
  }
}
