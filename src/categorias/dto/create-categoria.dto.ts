import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoriaDto {
  @ApiProperty({ example: 'Electrónica', description: 'Nombre de la categoría' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiPropertyOptional({ example: 'Dispositivos electrónicos y accesorios', description: 'Descripción de la categoría' })
  @IsString()
  @IsOptional()
  descripcion?: string;
}
