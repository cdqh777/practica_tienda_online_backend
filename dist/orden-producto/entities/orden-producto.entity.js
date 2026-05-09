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
exports.OrdenProducto = void 0;
const typeorm_1 = require("typeorm");
const orden_entity_1 = require("../../ordenes/entities/orden.entity");
const producto_entity_1 = require("../../productos/entities/producto.entity");
const swagger_1 = require("@nestjs/swagger");
let OrdenProducto = class OrdenProducto {
};
exports.OrdenProducto = OrdenProducto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrdenProducto.prototype, "idOrdenProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrdenProducto.prototype, "idOrden", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrdenProducto.prototype, "idProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrdenProducto.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 999.99 }),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], OrdenProducto.prototype, "precio_unitario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrdenProducto.prototype, "creadoEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], OrdenProducto.prototype, "actualizadoEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, nullable: true }),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], OrdenProducto.prototype, "eliminadoEn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => orden_entity_1.Orden, (orden) => orden.ordenProductos),
    (0, typeorm_1.JoinColumn)({ name: 'idOrden' }),
    __metadata("design:type", orden_entity_1.Orden)
], OrdenProducto.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.Producto, (producto) => producto.ordenProductos),
    (0, typeorm_1.JoinColumn)({ name: 'idProducto' }),
    __metadata("design:type", producto_entity_1.Producto)
], OrdenProducto.prototype, "producto", void 0);
exports.OrdenProducto = OrdenProducto = __decorate([
    (0, typeorm_1.Entity)('orden_producto')
], OrdenProducto);
//# sourceMappingURL=orden-producto.entity.js.map