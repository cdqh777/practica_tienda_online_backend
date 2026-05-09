import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdenProducto } from './entities/orden-producto.entity';
import { CreateOrdenProductoDto } from './dto/create-orden-producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden-producto.dto';
import { OrdenesService } from '../ordenes/ordenes.service';
import { ProductosService } from '../productos/productos.service';

@Injectable()
export class OrdenProductoService {
  constructor(
    @InjectRepository(OrdenProducto)
    private readonly ordenProductoRepository: Repository<OrdenProducto>,
    private readonly ordenesService: OrdenesService,
    private readonly productosService: ProductosService,
  ) {}

  async create(createOrdenProductoDto: CreateOrdenProductoDto): Promise<OrdenProducto> {
    // Verificar que la orden y el producto existen
    await this.ordenesService.findOne(createOrdenProductoDto.idOrden);
    await this.productosService.findOne(createOrdenProductoDto.idProducto);

    const ordenProducto = this.ordenProductoRepository.create(createOrdenProductoDto);
    const saved = await this.ordenProductoRepository.save(ordenProducto);

    // Recalcular el total de la orden
    await this.ordenesService.recalcularTotal(createOrdenProductoDto.idOrden);

    return saved;
  }

  async findAll(): Promise<OrdenProducto[]> {
    return await this.ordenProductoRepository.find({
      relations: ['orden', 'producto'],
    });
  }

  async findOne(id: number): Promise<OrdenProducto> {
    const ordenProducto = await this.ordenProductoRepository.findOne({
      where: { idOrdenProducto: id },
      relations: ['orden', 'producto'],
    });
    if (!ordenProducto) {
      throw new NotFoundException(`OrdenProducto con id ${id} no encontrado`);
    }
    return ordenProducto;
  }

  async update(id: number, updateOrdenProductoDto: UpdateOrdenProductoDto): Promise<OrdenProducto> {
    const ordenProducto = await this.findOne(id);
    Object.assign(ordenProducto, updateOrdenProductoDto);
    const saved = await this.ordenProductoRepository.save(ordenProducto);
    await this.ordenesService.recalcularTotal(ordenProducto.idOrden);
    return saved;
  }

  async removeProductoDeOrden(idOrdenProducto: number, idProducto: number): Promise<{ mensaje: string }> {
    const ordenProducto = await this.ordenProductoRepository.findOne({
      where: { idOrdenProducto, idProducto },
    });
    if (!ordenProducto) {
      throw new NotFoundException(
        `No se encontró el producto con id ${idProducto} en la orden-producto con id ${idOrdenProducto}`,
      );
    }
    const idOrden = ordenProducto.idOrden;
    await this.ordenProductoRepository.softRemove(ordenProducto);
    await this.ordenesService.recalcularTotal(idOrden);
    return { mensaje: `Producto con id ${idProducto} eliminado de la orden-producto ${idOrdenProducto}` };
  }
}
