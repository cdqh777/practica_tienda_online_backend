import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class CreateProductoDto {
  @ApiProperty({ example: 1, description: 'ID de la categoría a la que pertenece el producto' })
  @IsInt()
  @IsPositive()
  idCategoria: number;

  @ApiProperty({ example: 'Laptop HP 15"', description: 'Nombre del producto' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiPropertyOptional({ example: 'Laptop con procesador Intel Core i5, 8GB RAM', description: 'Descripción del producto' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ example: 999.99, description: 'Precio del producto' })
  @IsNumber()
  @IsPositive()
  precio: number;

  @ApiProperty({ example: 50, description: 'Cantidad en stock' })
  @IsInt()
  @Min(0)
  stock: number;
}
