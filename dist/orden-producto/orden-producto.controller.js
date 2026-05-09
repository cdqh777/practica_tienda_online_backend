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
exports.OrdenProductoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const orden_producto_service_1 = require("./orden-producto.service");
const create_orden_producto_dto_1 = require("./dto/create-orden-producto.dto");
const update_orden_producto_dto_1 = require("./dto/update-orden-producto.dto");
const orden_producto_entity_1 = require("./entities/orden-producto.entity");
let OrdenProductoController = class OrdenProductoController {
    constructor(ordenProductoService) {
        this.ordenProductoService = ordenProductoService;
    }
    create(createOrdenProductoDto) {
        return this.ordenProductoService.create(createOrdenProductoDto);
    }
    findAll() {
        return this.ordenProductoService.findAll();
    }
    findOne(id) {
        return this.ordenProductoService.findOne(id);
    }
    update(id, updateOrdenProductoDto) {
        return this.ordenProductoService.update(id, updateOrdenProductoDto);
    }
    remove(id, productId) {
        return this.ordenProductoService.removeProductoDeOrden(id, productId);
    }
};
exports.OrdenProductoController = OrdenProductoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar un producto a una orden (incluye idOrden, idProducto, cantidad, precio_unitario)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Producto agregado a la orden exitosamente', type: orden_producto_entity_1.OrdenProducto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Orden o producto no encontrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_orden_producto_dto_1.CreateOrdenProductoDto]),
    __metadata("design:returntype", void 0)
], OrdenProductoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas las relaciones orden-producto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de orden-productos con orden y producto', type: [orden_producto_entity_1.OrdenProducto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdenProductoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una orden-producto por ID con sus detalles' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la orden-producto', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OrdenProducto encontrado', type: orden_producto_entity_1.OrdenProducto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'OrdenProducto no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdenProductoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar cantidad o precio_unitario de un orden-producto' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la orden-producto', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OrdenProducto actualizado', type: orden_producto_entity_1.OrdenProducto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'OrdenProducto no encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de entrada inválidos' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_orden_producto_dto_1.UpdateOrdenProductoDto]),
    __metadata("design:returntype", void 0)
], OrdenProductoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id/productos/:productId'),
    (0, swagger_1.ApiOperation)({ summary: 'Quitar un producto específico de una orden-producto' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la orden-producto', type: Number }),
    (0, swagger_1.ApiParam)({ name: 'productId', description: 'ID del producto a quitar', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Producto eliminado de la orden correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'OrdenProducto o producto no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('productId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], OrdenProductoController.prototype, "remove", null);
exports.OrdenProductoController = OrdenProductoController = __decorate([
    (0, swagger_1.ApiTags)('OrdenProducto'),
    (0, common_1.Controller)('orden_producto'),
    __metadata("design:paramtypes", [orden_producto_service_1.OrdenProductoService])
], OrdenProductoController);
//# sourceMappingURL=orden-producto.controller.js.map