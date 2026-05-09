import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive } from 'class-validator';

export class CreateOrdenProductoDto {
  @ApiProperty({ example: 1, description: 'ID de la orden' })
  @IsInt()
  @IsPositive()
  idOrden: number;

  @ApiProperty({ example: 2, description: 'ID del producto a agregar' })
  @IsInt()
  @IsPositive()
  idProducto: number;

  @ApiProperty({ example: 3, description: 'Cantidad del producto' })
  @IsInt()
  @IsPositive()
  cantidad: number;

  @ApiProperty({ example: 999.99, description: 'Precio unitario al momento de la compra' })
  @IsNumber()
  @IsPositive()
  precio_unitario: number;
}
