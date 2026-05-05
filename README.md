# Coco-11Labs

## Variables de entorno

1. Crea un archivo `.env` en la raíz del proyecto.
2. Define tu Agent ID público de ElevenLabs:

```bash
NEXT_PUBLIC_ELEVENLABS_AGENT_ID=agent_XXXXXXXXXXXX
DATABASE_URL="file:./prisma/dev.db"
```

## Stack actual

- `Next.js` con App Router
- `LangGraph` para la orquestación del chat
- `@elevenlabs/react` para la experiencia de voz en cliente

## Desarrollo

```bash
npm install
npm run dev
```

El chat usa `POST /api/chat`, que ejecuta un `StateGraph` para:

- consultar aperturas
- consultar cierres
- generar reportes Excel

La pestaña de voz sigue usando ElevenLabs desde el cliente.

## API de reportes

La data para la tool de Excel queda expuesta en:

- `GET /api/reports/data`
- `POST /api/reports/data`

Filtros soportados:

- `categoria`
- `sucursal`
- `rango`
- `desde`
- `hasta`

La respuesta incluye:

- `openings`
- `closings`
- `combined`
- `top`
- `summary`

## Prisma

Se agregó una primera capa de Prisma para modelar:

- `Store`
- `StoreAlias`
- `OpeningRecord`
- `OpeningDiscardedEvent`
- `ClosingRecord`
- `ClosingDiscardedEvent`

Flujo esperado:

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
node prisma/seed.mjs
```

El seed toma los JSON actuales en `src/data/` para poblar sucursales, aperturas y cierres.

Actualizacion a Prisma 7:

- `prisma` y `@prisma/client` fijados en `7.0.0`
- generator migrado a `prisma-client`
- cliente generado en `src/generated/prisma`
- `prisma.config.ts` para `DATABASE_URL`
- adapter oficial de SQLite con `@prisma/adapter-better-sqlite3`
