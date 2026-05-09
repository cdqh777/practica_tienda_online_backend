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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ordenes_service_1 = require("./ordenes.service");
const create_orden_dto_1 = require("./dto/create-orden.dto");
const update_orden_dto_1 = require("./dto/update-orden.dto");
const orden_entity_1 = require("./entities/orden.entity");
let OrdenesController = class OrdenesController {
    constructor(ordenesService) {
        this.ordenesService = ordenesService;
    }
    create(createOrdenDto) {
        return this.ordenesService.create(createOrdenDto);
    }
    findAll() {
        return this.ordenesService.findAll();
    }
    findOne(id) {
        return this.ordenesService.findOne(id);
    }
    update(id, updateOrdenDto) {
        return this.ordenesService.update(id, updateOrdenDto);
    }
    remove(id) {
        return this.ordenesService.remove(id);
    }
};
exports.OrdenesController = OrdenesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva orden asociada a un cliente existente' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Orden creada exitosamente', type: orden_entity_1.Orden }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Cliente no encontrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_orden_dto_1.CreateOrdenDto]),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas las órdenes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de órdenes con cliente', type: [orden_entity_1.Orden] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una orden por ID con todos sus productos' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la orden', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Orden encontrada con cliente y productos', type: orden_entity_1.Orden }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Orden no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estado u otros datos de una orden' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la orden', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Orden actualizada', type: orden_entity_1.Orden }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Orden no encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada inválidos' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_orden_dto_1.UpdateOrdenDto]),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una orden (soft delete)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la orden', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Orden eliminada correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Orden no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "remove", null);
exports.OrdenesController = OrdenesController = __decorate([
    (0, swagger_1.ApiTags)('Ordenes'),
    (0, common_1.Controller)('ordenes'),
    __metadata("design:paramtypes", [ordenes_service_1.OrdenesService])
], OrdenesController);
//# sourceMappingURL=ordenes.controller.js.map