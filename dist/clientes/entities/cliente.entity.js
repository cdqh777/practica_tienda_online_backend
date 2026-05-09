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
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
const orden_entity_1 = require("../../ordenes/entities/orden.entity");
const swagger_1 = require("@nestjs/swagger");
let Cliente = class Cliente {
};
exports.Cliente = Cliente;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cliente.prototype, "idCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Juan Carlos' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cliente.prototype, "nombres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'García' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cliente.prototype, "paterno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'López' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cliente.prototype, "materno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'juan.garcia@email.com' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Cliente.prototype, "creadoEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Cliente.prototype, "actualizadoEn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, nullable: true }),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Cliente.prototype, "eliminadoEn", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orden_entity_1.Orden, (orden) => orden.cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "ordenes", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)('cliente')
], Cliente);
//# sourceMappingURL=cliente.entity.js.map