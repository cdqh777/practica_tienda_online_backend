import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Orden } from '../../ordenes/entities/orden.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cliente')
export class Cliente {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  idCliente: number;

  @ApiProperty({ example: 'Juan Carlos' })
  @Column()
  nombres: string;

  @ApiProperty({ example: 'García' })
  @Column()
  paterno: string;

  @ApiProperty({ example: 'López' })
  @Column()
  materno: string;

  @ApiProperty({ example: 'juan.garcia@email.com' })
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @CreateDateColumn()
  creadoEn: Date;

  @ApiProperty()
  @UpdateDateColumn()
  actualizadoEn: Date;

  @ApiProperty({ required: false, nullable: true })
  @DeleteDateColumn()
  eliminadoEn: Date;

  @OneToMany(() => Orden, (orden) => orden.cliente)
  ordenes: Orden[];
}
