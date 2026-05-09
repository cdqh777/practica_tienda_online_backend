"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nestjs_api_reference_1 = require("@scalar/nestjs-api-reference");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Tienda Online API')
        .setDescription('API REST para gestionar clientes, productos, categorías y órdenes de compra')
        .setVersion('1.0')
        .addTag('Clientes', 'Gestión de clientes')
        .addTag('Categorias', 'Gestión de categorías de productos')
        .addTag('Productos', 'Gestión del catálogo de productos')
        .addTag('Ordenes', 'Gestión de órdenes de compra')
        .addTag('OrdenProducto', 'Gestión de productos dentro de una orden')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    app.use('/api', (0, nestjs_api_reference_1.apiReference)({
        spec: {
            content: document,
        },
    }));
    await app.listen(3000);
    console.log('🚀 Servidor corriendo en http://localhost:3000');
    console.log('📖 Documentación Scalar en http://localhost:3000/api');
}
bootstrap();
//# sourceMappingURL=main.js.map