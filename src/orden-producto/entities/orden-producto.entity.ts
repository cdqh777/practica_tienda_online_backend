import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Orden } from '../../ordenes/entities/orden.entity';
import { Producto } from '../../productos/entities/producto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('orden_producto')
export class OrdenProducto {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  idOrdenProducto: number;

  @ApiProperty({ example: 1 })
  @Column()
  idOrden: number;

  @ApiProperty({ example: 2 })
  @Column()
  idProducto: number;

  @ApiProperty({ example: 3 })
  @Column()
  cantidad: number;

  @ApiProperty({ example: 999.99 })
  @Column('decimal', { precision: 10, scale: 2 })
  precio_unitario: number;

  @ApiProperty()
  @CreateDateColumn()
  creadoEn: Date;

  @ApiProperty()
  @UpdateDateColumn()
  actualizadoEn: Date;

  @ApiProperty({ required: false, nullable: true })
  @DeleteDateColumn()
  eliminadoEn: Date;

  @ManyToOne(() => Orden, (orden) => orden.ordenProductos)
  @JoinColumn({ name: 'idOrden' })
  orden: Orden;

  @ManyToOne(() => Producto, (producto) => producto.ordenProductos)
  @JoinColumn({ name: 'idProducto' })
  producto: Producto;
}
