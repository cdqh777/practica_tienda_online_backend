import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({ example: 'Juan Carlos', description: 'Nombres del cliente' })
  @IsString()
  @IsNotEmpty()
  nombres: string;

  @ApiProperty({ example: 'García', description: 'Apellido paterno' })
  @IsString()
  @IsNotEmpty()
  paterno: string;

  @ApiProperty({ example: 'López', description: 'Apellido materno' })
  @IsString()
  @IsNotEmpty()
  materno: string;

  @ApiProperty({ example: 'juan.garcia@email.com', description: 'Correo electrónico único' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
