import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validación global con class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuración de Swagger/OpenAPI
  const config = new DocumentBuilder()
    .setTitle('Tienda Online API')
    .setDescription('API REST para gestionar clientes, productos, categorías y órdenes de compra')
    .setVersion('1.0')
    .addTag('Clientes', 'Gestión de clientes')
    .addTag('Categorias', 'Gestión de categorías de productos')
    .addTag('Productos', 'Gestión del catálogo de productos')
    .addTag('Ordenes', 'Gestión de órdenes de compra')
    .addTag('OrdenProducto', 'Gestión de productos dentro de una orden')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Documentación con Scalar en /api
  app.use(
    '/api',
    apiReference({
      spec: {
        content: document,
      },
    }),
  );

  await app.listen(3000);
  console.log('🚀 Servidor corriendo en http://localhost:3000');
  console.log('📖 Documentación Scalar en http://localhost:3000/api');
}

bootstrap();
