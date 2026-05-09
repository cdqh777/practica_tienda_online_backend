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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("./entities/producto.entity");
const categorias_service_1 = require("../categorias/categorias.service");
let ProductosService = class ProductosService {
    constructor(productoRepository, categoriasService) {
        this.productoRepository = productoRepository;
        this.categoriasService = categoriasService;
    }
    async create(createProductoDto) {
        await this.categoriasService.findOne(createProductoDto.idCategoria);
        const producto = this.productoRepository.create(createProductoDto);
        return await this.productoRepository.save(producto);
    }
    async findAll() {
        return await this.productoRepository.find({ relations: ['categoria'] });
    }
    async findOne(id) {
        const producto = await this.productoRepository.findOne({
            where: { idProducto: id },
            relations: ['categoria'],
        });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con id ${id} no encontrado`);
        }
        return producto;
    }
    async update(id, updateProductoDto) {
        const producto = await this.findOne(id);
        if (updateProductoDto.idCategoria) {
            await this.categoriasService.findOne(updateProductoDto.idCategoria);
        }
        Object.assign(producto, updateProductoDto);
        return await this.productoRepository.save(producto);
    }
    async remove(id) {
        const producto = await this.findOne(id);
        await this.productoRepository.softRemove(producto);
        return { mensaje: `Producto con id ${id} eliminado correctamente` };
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        categorias_service_1.CategoriasService])
], ProductosService);
//# sourceMappingURL=productos.service.js.map