import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('categoria')
export class Categoria {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  idCategoria: number;

  @ApiProperty({ example: 'Electrónica' })
  @Column()
  nombre: string;

  @ApiProperty({ example: 'Dispositivos electrónicos y accesorios' })
  @Column({ nullable: true })
  descripcion: string;

  @ApiProperty()
  @CreateDateColumn()
  creadoEn: Date;

  @ApiProperty()
  @UpdateDateColumn()
  actualizadoEn: Date;

  @ApiProperty({ required: false, nullable: true })
  @DeleteDateColumn()
  eliminadoEn: Date;

  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[];
}
