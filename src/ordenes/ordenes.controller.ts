import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { OrdenesService } from './ordenes.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Orden } from './entities/orden.entity';

@ApiTags('Ordenes')
@Controller('ordenes')
export class OrdenesController {
  constructor(private readonly ordenesService: OrdenesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva orden asociada a un cliente existente' })
  @ApiResponse({ status: 201, description: 'Orden creada exitosamente', type: Orden })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  create(@Body() createOrdenDto: CreateOrdenDto) {
    return this.ordenesService.create(createOrdenDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las órdenes' })
  @ApiResponse({ status: 200, description: 'Lista de órdenes con cliente', type: [Orden] })
  findAll() {
    return this.ordenesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una orden por ID con todos sus productos' })
  @ApiParam({ name: 'id', description: 'ID de la orden', type: Number })
  @ApiResponse({ status: 200, description: 'Orden encontrada con cliente y productos', type: Orden })
  @ApiResponse({ status: 404, description: 'Orden no encontrada' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordenesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar el estado u otros datos de una orden' })
  @ApiParam({ name: 'id', description: 'ID de la orden', type: Number })
  @ApiResponse({ status: 200, description: 'Orden actualizada', type: Orden })
  @ApiResponse({ status: 404, description: 'Orden no encontrada' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOrdenDto: UpdateOrdenDto) {
    return this.ordenesService.update(id, updateOrdenDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una orden (soft delete)' })
  @ApiParam({ name: 'id', description: 'ID de la orden', type: Number })
  @ApiResponse({ status: 200, description: 'Orden eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'Orden no encontrada' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ordenesService.remove(id);
  }
}
