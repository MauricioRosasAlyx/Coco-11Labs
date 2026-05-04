# Resumen de aperturas y cierres

## Objetivo

Esta base de conocimiento sirve para consultar eventos de apertura y cierre de sucursales Propasa, asi como para generar reportes en Excel a partir de un rango de fechas.

La informacion esta organizada para responder preguntas sobre:

- aperturas por sucursal y fecha
- cierres por sucursal y fecha
- cumplimiento de apertura
- cumplimiento de cierre
- cumplimiento open-close
- ranking de sucursales con mejor cumplimiento

## Cobertura de datos

- Periodo cubierto: del 25-03-2026 al 23-04-2026
- Dias cubiertos: 30

## Base de aperturas

- Archivo origen: `Aperturas_Propasa.xlsx`
- Eventos crudos: 5336
- Duplicados exactos: 16
- Aperturas limpias: 3179
- Eventos descartados: 2157
- Sucursales distintas: 138

### Regla de limpieza de aperturas

Para cada sucursal y cada fecha, se conserva la primera activacion del dia como la apertura valida. Los eventos posteriores del mismo dia se consideran descartados.

## Base de cierres

- Archivo origen: `Cierres_Propasa.xlsx`
- Eventos crudos: 4637
- Duplicados exactos: 9
- Cierres limpios: 4259
- Eventos descartados: 378
- Sucursales distintas: 157

### Regla de limpieza de cierres

Para cada sucursal y cada fecha, se conserva la ultima activacion del dia como el cierre valido. Los eventos anteriores del mismo dia se consideran descartados.

## Mapeo de sucursales

Se construyo un mapeo para relacionar aperturas y cierres de la misma sucursal aunque existan diferencias de nombre o alias.

- Entradas canonicas totales: 158
- Con aperturas y cierres: 137
- Solo aperturas: 1
- Solo cierres: 20

El cruce entre aperturas y cierres se hace por sucursal canonica y por fecha.

## Reglas de cumplimiento

### Cumplimiento de apertura

Una sucursal cumple apertura si abre a las `07:00:00` o antes.

### Cumplimiento de cierre

Una sucursal cumple cierre si cierra a las `22:00:00` o despues.

### Cumplimiento open-close

Una sucursal cumple open-close solo cuando:

- cumple apertura
- cumple cierre

Si falta la apertura o el cierre del dia, el registro se considera incompleto.

## Reportes disponibles

### Reporte open-close

Este reporte usa aperturas y cierres cruzados por sucursal y fecha.

Incluye:

- una hoja `General` con el resumen del periodo
- una hoja `open-close` con detalle por registro

La hoja `General` muestra:

- categoria
- rango
- generado
- regla apertura
- regla cierre
- eventos apertura
- eventos cierre
- eventos revisados
- cumplieron
- no cumplieron
- cumplimiento
- cumplimiento apertura
- cumplimiento cierre

La hoja `open-close` muestra:

- fecha
- sucursal
- hora apertura
- cumplio apertura
- hora cierre
- cumplio cierre

### Reporte top

Este reporte rankea sucursales por:

- mejor cumplimiento de apertura
- mejor cumplimiento de cierre
- mejor cumplimiento de ambas

### Reporte de aperturas

Muestra aperturas limpias por sucursal y fecha.

### Reporte de cierres

Muestra cierres limpios por sucursal y fecha.

## Filtros de fecha

Los reportes deben respetar el rango solicitado por el usuario. Se aceptan rangos como:

- `25-03-2026 a 23-04-2026`
- `15-21 abril`
- `15 a 21 abril`
- `15 al 21 de abril`
- `desde 2026-04-15 hasta 2026-04-21`

## Ejemplos de preguntas que puede responder el asistente

- Que sucursales abrieron tarde el 21 de abril de 2026?
- Que sucursales cumplieron apertura entre el 15 y el 21 de abril?
- Que sucursales cerraron despues de las 10 pm?
- Genera un reporte open-close del 25-03-2026 al 23-04-2026
- Genera un reporte top del 15-04-2026 al 21-04-2026
- Cuales fueron las sucursales con mejor cumplimiento de apertura?
- Cuales fueron las sucursales con mejor cumplimiento de cierre?
- Cuales sucursales tuvieron registro de apertura pero no de cierre?

## Instrucciones de interpretacion para el asistente

- "apertura" significa la primera activacion valida del dia por sucursal
- "cierre" significa la ultima activacion valida del dia por sucursal
- "cumplio apertura" significa hora de apertura menor o igual a `07:00:00`
- "cumplio cierre" significa hora de cierre mayor o igual a `22:00:00`
- "cumplio open-close" significa que cumplio apertura y cierre en la misma fecha
- si el usuario pide un reporte, se debe aplicar el filtro de fechas solicitado
- si el usuario pide un ranking, se debe usar el reporte `top`

## Resumen ejecutivo

La base actual ya permite evaluar aperturas, cierres y cumplimiento operativo por sucursal. El punto central del analisis es el reporte `open-close`, que cruza ambas fuentes para medir si una sucursal abrio a tiempo y cerro dentro del horario esperado en cada fecha del periodo.
