"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenProductoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orden_producto_entity_1 = require("./entities/orden-producto.entity");
const orden_producto_controller_1 = require("./orden-producto.controller");
const orden_producto_service_1 = require("./orden-producto.service");
const ordenes_module_1 = require("../ordenes/ordenes.module");
const productos_module_1 = require("../productos/productos.module");
let OrdenProductoModule = class OrdenProductoModule {
};
exports.OrdenProductoModule = OrdenProductoModule;
exports.OrdenProductoModule = OrdenProductoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([orden_producto_entity_1.OrdenProducto]), ordenes_module_1.OrdenesModule, productos_module_1.ProductosModule],
        controllers: [orden_producto_controller_1.OrdenProductoController],
        providers: [orden_producto_service_1.OrdenProductoService],
        exports: [orden_producto_service_1.OrdenProductoService],
    })
], OrdenProductoModule);
//# sourceMappingURL=orden-producto.module.js.map