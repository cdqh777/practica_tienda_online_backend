import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { OrdenProducto } from '../../orden-producto/entities/orden-producto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('orden')
export class Orden {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  idOrden: number;

  @ApiProperty({ example: 1 })
  @Column()
  idCliente: number;

  @ApiProperty({ example: 'pendiente', description: 'pendiente | procesando | enviado | entregado | cancelado' })
  @Column({ default: 'pendiente' })
  estado: string;

  @ApiProperty({ example: 1299.99 })
  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  total: number;

  @ApiProperty()
  @CreateDateColumn()
  creadoEn: Date;

  @ApiProperty()
  @UpdateDateColumn()
  actualizadoEn: Date;

  @ApiProperty({ required: false, nullable: true })
  @DeleteDateColumn()
  eliminadoEn: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.ordenes)
  @JoinColumn({ name: 'idCliente' })
  cliente: Cliente;

  @OneToMany(() => OrdenProducto, (op) => op.orden)
  ordenProductos: OrdenProducto[];
}
