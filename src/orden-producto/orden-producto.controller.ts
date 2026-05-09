import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { OrdenProductoService } from './orden-producto.service';
import { CreateOrdenProductoDto } from './dto/create-orden-producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden-producto.dto';
import { OrdenProducto } from './entities/orden-producto.entity';

@ApiTags('OrdenProducto')
@Controller('orden_producto')
export class OrdenProductoController {
  constructor(private readonly ordenProductoService: OrdenProductoService) {}

  @Post()
  @ApiOperation({ summary: 'Agregar un producto a una orden (incluye idOrden, idProducto, cantidad, precio_unitario)' })
  @ApiResponse({ status: 201, description: 'Producto agregado a la orden exitosamente', type: OrdenProducto })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  @ApiResponse({ status: 404, description: 'Orden o producto no encontrado' })
  create(@Body() createOrdenProductoDto: CreateOrdenProductoDto) {
    return this.ordenProductoService.create(createOrdenProductoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las relaciones orden-producto' })
  @ApiResponse({ status: 200, description: 'Lista de orden-productos con orden y producto', type: [OrdenProducto] })
  findAll() {
    return this.ordenProductoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una orden-producto por ID con sus detalles' })
  @ApiParam({ name: 'id', description: 'ID de la orden-producto', type: Number })
  @ApiResponse({ status: 200, description: 'OrdenProducto encontrado', type: OrdenProducto })
  @ApiResponse({ status: 404, description: 'OrdenProducto no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordenProductoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar cantidad o precio_unitario de un orden-producto' })
  @ApiParam({ name: 'id', description: 'ID de la orden-producto', type: Number })
  @ApiResponse({ status: 200, description: 'OrdenProducto actualizado', type: OrdenProducto })
  @ApiResponse({ status: 404, description: 'OrdenProducto no encontrado' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOrdenProductoDto: UpdateOrdenProductoDto) {
    return this.ordenProductoService.update(id, updateOrdenProductoDto);
  }

  @Delete(':id/productos/:productId')
  @ApiOperation({ summary: 'Quitar un producto específico de una orden-producto' })
  @ApiParam({ name: 'id', description: 'ID de la orden-producto', type: Number })
  @ApiParam({ name: 'productId', description: 'ID del producto a quitar', type: Number })
  @ApiResponse({ status: 200, description: 'Producto eliminado de la orden correctamente' })
  @ApiResponse({ status: 404, description: 'OrdenProducto o producto no encontrado' })
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.ordenProductoService.removeProductoDeOrden(id, productId);
  }
}
