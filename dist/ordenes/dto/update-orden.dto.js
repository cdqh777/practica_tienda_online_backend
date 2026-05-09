"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrdenDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_orden_dto_1 = require("./create-orden.dto");
class UpdateOrdenDto extends (0, swagger_1.PartialType)(create_orden_dto_1.CreateOrdenDto) {
}
exports.UpdateOrdenDto = UpdateOrdenDto;
//# sourceMappingURL=update-orden.dto.js.map