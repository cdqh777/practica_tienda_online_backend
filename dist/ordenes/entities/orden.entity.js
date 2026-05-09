"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orden = void 0;
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("../../clientes/entities/cliente.entity");
const orden_producto_entity_1 = require("../../orden-producto/entities/orden-producto.entity");
const swagger_1 = require("@nestjs/swagger");
let Orden = class Orden {
};
exports.Orden = Orden;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Orden.prototype, "idOrden", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Orden.prototype, "idCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pendiente', description: 'pendiente | procesando | enviado | entregado | cancelado' }),
    (0, typeorm_1.Column)({ default: 'pendiente' }),
    __metadata("design:type", String)
], Orden.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1299.99 }),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Orden.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Orden.prototype, "creadoEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Orden.prototype, "actualizadoEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, nullable: true }),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Orden.prototype, "eliminadoEn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.Cliente, (cliente) => cliente.ordenes),
    (0, typeorm_1.JoinColumn)({ name: 'idCliente' }),
    __metadata("design:type", cliente_entity_1.Cliente)
], Orden.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orden_producto_entity_1.OrdenProducto, (op) => op.orden),
    __metadata("design:type", Array)
], Orden.prototype, "ordenProductos", void 0);
exports.Orden = Orden = __decorate([
    (0, typeorm_1.Entity)('orden')
], Orden);
//# sourceMappingURL=orden.entity.js.map