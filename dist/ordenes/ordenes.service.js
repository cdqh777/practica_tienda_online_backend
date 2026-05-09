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
exports.OrdenesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const orden_entity_1 = require("./entities/orden.entity");
const clientes_service_1 = require("../clientes/clientes.service");
let OrdenesService = class OrdenesService {
    constructor(ordenRepository, clientesService) {
        this.ordenRepository = ordenRepository;
        this.clientesService = clientesService;
    }
    async create(createOrdenDto) {
        await this.clientesService.findOne(createOrdenDto.idCliente);
        const orden = this.ordenRepository.create(createOrdenDto);
        return await this.ordenRepository.save(orden);
    }
    async findAll() {
        return await this.ordenRepository.find({ relations: ['cliente'] });
    }
    async findOne(id) {
        const orden = await this.ordenRepository.findOne({
            where: { idOrden: id },
            relations: ['cliente', 'ordenProductos', 'ordenProductos.producto'],
        });
        if (!orden) {
            throw new common_1.NotFoundException(`Orden con id ${id} no encontrada`);
        }
        return orden;
    }
    async update(id, updateOrdenDto) {
        const orden = await this.findOne(id);
        Object.assign(orden, updateOrdenDto);
        return await this.ordenRepository.save(orden);
    }
    async remove(id) {
        const orden = await this.findOne(id);
        await this.ordenRepository.softRemove(orden);
        return { mensaje: `Orden con id ${id} eliminada correctamente` };
    }
    async recalcularTotal(idOrden) {
        const orden = await this.findOne(idOrden);
        const total = orden.ordenProductos.reduce((acc, op) => {
            return acc + Number(op.precio_unitario) * op.cantidad;
        }, 0);
        await this.ordenRepository.update(idOrden, { total });
    }
};
exports.OrdenesService = OrdenesService;
exports.OrdenesService = OrdenesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orden_entity_1.Orden)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        clientes_service_1.ClientesService])
], OrdenesService);
//# sourceMappingURL=ordenes.service.js.map