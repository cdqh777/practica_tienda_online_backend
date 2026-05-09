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
import { Categoria } from '../../categorias/entities/categoria.entity';
import { OrdenProducto } from '../../orden-producto/entities/orden-producto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('producto')
export class Producto {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  idProducto: number;

  @ApiProperty({ example: 1 })
  @Column()
  idCategoria: number;

  @ApiProperty({ example: 'Laptop HP 15"' })
  @Column()
  nombre: string;

  @ApiProperty({ example: 'Laptop con procesador Intel Core i5' })
  @Column({ nullable: true })
  descripcion: string;

  @ApiProperty({ example: 999.99 })
  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @ApiProperty({ example: 50 })
  @Column({ default: 0 })
  stock: number;

  @ApiProperty()
  @CreateDateColumn()
  creadoEn: Date;

  @ApiProperty()
  @UpdateDateColumn()
  actualizadoEn: Date;

  @ApiProperty({ required: false, nullable: true })
  @DeleteDateColumn()
  eliminadoEn: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  @JoinColumn({ name: 'idCategoria' })
  categoria: Categoria;

  @OneToMany(() => OrdenProducto, (op) => op.producto)
  ordenProductos: OrdenProducto[];
}
