# Tienda Online API — TAW-251

API REST para gestionar una tienda online con NestJS + TypeORM + PostgreSQL.

## Requisitos

- Node.js >= 18
- PostgreSQL >= 14
- npm

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd tienda-online

# Instalar dependencias
npm install
```

## Configuración de Base de Datos

1. Crear una base de datos PostgreSQL:

```sql
CREATE DATABASE tienda_online;
```

2. Configurar las variables de entorno (opcional). Por defecto el proyecto usa:

| Variable      | Valor por defecto |
|---------------|-------------------|
| DB_HOST       | localhost         |
| DB_PORT       | 5432              |
| DB_USER       | postgres          |
| DB_PASSWORD   | postgres          |
| DB_NAME       | tienda_online     |

Para personalizar, puedes crear un archivo `.env` en la raíz o exportar las variables:

```bash
export DB_HOST=localhost
export DB_PORT=5432
export DB_USER=postgres
export DB_PASSWORD=tu_contraseña
export DB_NAME=tienda_online
```

> **Nota:** `synchronize: true` está habilitado en desarrollo, por lo que TypeORM creará las tablas automáticamente al iniciar.

## Ejecución

```bash
# Modo desarrollo (con hot-reload)
npm run start:dev

# Modo producción
npm run build
npm run start:prod
```

El servidor correrá en: **http://localhost:3000**

## Documentación (Scalar)

Una vez que el servidor esté corriendo, accede a:

**http://localhost:3000/api**

Ahí encontrarás la documentación interactiva de todos los endpoints.

## Endpoints disponibles

### Clientes `/clientes`
| Método | Ruta           | Descripción                    |
|--------|----------------|--------------------------------|
| GET    | /clientes      | Listar todos los clientes      |
| GET    | /clientes/:id  | Obtener cliente por ID         |
| POST   | /clientes      | Crear un cliente               |
| PATCH  | /clientes/:id  | Actualizar cliente             |
| DELETE | /clientes/:id  | Eliminar cliente (soft delete) |

### Categorías `/categorias`
| Método | Ruta              | Descripción                              |
|--------|-------------------|------------------------------------------|
| GET    | /categorias       | Listar todas las categorías              |
| GET    | /categorias/:id   | Obtener categoría por ID (con productos) |
| POST   | /categorias       | Crear una categoría                      |
| PATCH  | /categorias/:id   | Actualizar categoría                     |
| DELETE | /categorias/:id   | Eliminar categoría (soft delete)         |

### Productos `/productos`
| Método | Ruta             | Descripción                             |
|--------|------------------|-----------------------------------------|
| GET    | /productos       | Listar todos los productos (con categoría) |
| GET    | /productos/:id   | Obtener producto por ID (con categoría) |
| POST   | /productos       | Crear producto (requiere idCategoria)   |
| PATCH  | /productos/:id   | Actualizar producto                     |
| DELETE | /productos/:id   | Eliminar producto (soft delete)         |

### Órdenes `/ordenes`
| Método | Ruta          | Descripción                                |
|--------|---------------|--------------------------------------------|
| GET    | /ordenes      | Listar todas las órdenes                   |
| GET    | /ordenes/:id  | Obtener orden con todos sus productos      |
| POST   | /ordenes      | Crear orden asociada a un cliente          |
| PATCH  | /ordenes/:id  | Actualizar estado de la orden              |
| DELETE | /ordenes/:id  | Eliminar orden (soft delete)               |

### Orden-Producto `/orden_producto`
| Método | Ruta                              | Descripción                          |
|--------|-----------------------------------|--------------------------------------|
| GET    | /orden_producto                   | Listar todas las orden-producto      |
| GET    | /orden_producto/:id               | Obtener orden-producto por ID        |
| POST   | /orden_producto                   | Agregar producto a una orden         |
| PATCH  | /orden_producto/:id               | Actualizar cantidad o precio         |
| DELETE | /orden_producto/:id/productos/:productId | Quitar producto de la orden  |

## Arquitectura

El proyecto sigue el patrón de N-capas:

```
Controller → Service → Repository (TypeORM)
```

Cada módulo tiene:
- `*.entity.ts` — Entidad TypeORM
- `*.controller.ts` — Manejo de rutas HTTP
- `*.service.ts` — Lógica de negocio
- `*.module.ts` — Registro del módulo
- `dto/create-*.dto.ts` — Validación de creación
- `dto/update-*.dto.ts` — Validación de actualización (PartialType)

## Tecnologías

- **NestJS** — Framework backend
- **TypeORM** — ORM con decoradores
- **PostgreSQL** — Base de datos
- **class-validator** — Validación de DTOs
- **@nestjs/swagger + Scalar** — Documentación de API
