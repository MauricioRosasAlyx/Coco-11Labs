# Base open-close cruzada para ElevenLabs

## Descripcion

Este archivo contiene la informacion real ya cruzada por sucursal y fecha.
Cada registro junta la apertura valida y el cierre valido del mismo dia para la misma sucursal canonica.

## Cobertura

- Periodo: 2026-03-25 a 2026-04-23
- Aperturas limpias fuente: 3179
- Cierres limpios fuente: 4259
- Sucursales canonicas: 158
- Registros cruzados totales: 4580
- Registros completos: 2858
- Registros sin apertura: 1401
- Registros sin cierre: 321
- Cumplen apertura: 1676
- Cumplen cierre: 3144
- Cumplen open-close: 1203

## Reglas de cumplimiento

- Cumple apertura: hora de apertura <= 07:00:00
- Cumple cierre: hora de cierre >= 22:00:00
- Cumple open-close: cumple apertura y cumple cierre en la misma fecha

## Campos

- fecha
- sucursal
- codigo_sucursal
- hora_apertura
- cumplio_apertura
- hora_cierre
- cumplio_cierre
- estado
- cumplimiento
- observaciones

## Top 5 cumplimiento apertura

```text
posicion | sucursal | cumplidos | evaluados | cumplimiento | faltantes
1 | 2002 - Campeche Mercado | 30 | 30 | 100.0% | 0
2 | 2003 - Champotón | 30 | 30 | 100.0% | 0
3 | 2038 - Calkini Mercado | 30 | 30 | 100.0% | 0
4 | 3124 - Bacalar Mercado | 30 | 30 | 100.0% | 0
5 | 3113 - Playa Villas del Sol | 28 | 28 | 100.0% | 1
```

## Top 5 cumplimiento cierre

```text
posicion | sucursal | cumplidos | evaluados | cumplimiento | faltantes
1 | 1033 - Maxcanu | 29 | 29 | 100.0% | 1
2 | 1080 50 sur | 29 | 29 | 100.0% | 1
3 | 1215 - Paseos De Opichen | 29 | 29 | 100.0% | 1
4 | 1244 - Gran Santa Fe | 29 | 29 | 100.0% | 1
5 | 1269 - San Marcos Sustentable | 29 | 29 | 100.0% | 1
```

## Top 5 cumplimiento general

```text
posicion | sucursal | cumplidos | evaluados | cumplimiento | faltantes
1 | 2038 - Calkini Mercado | 29 | 29 | 100.0% | 1
2 | 2076 - Ejido Carrillo Puerto | 20 | 20 | 100.0% | 10
3 | 2077 - Campeche Siglo XXI | 20 | 20 | 100.0% | 9
4 | 2074 - Bellavista | 14 | 14 | 100.0% | 15
5 | 2072 - Xpujil 2 | 13 | 13 | 100.0% | 16
```

## Peores 5 cumplimiento apertura

```text
posicion | sucursal | cumplidos | evaluados | cumplimiento | faltantes
1 | 3017 - Playa del Carmen 3 | 0 | 3 | 0.0% | 26
2 | 2026 - Cd del Carmen Av. 10 de Julio | 0 | 2 | 0.0% | 27
3 | 2057 - Presidentes | 0 | 1 | 0.0% | 26
4 | 2087 - Champoton 7 | 0 | 1 | 0.0% | 28
5 | 3051 - QR Playa Av. 115 | 0 | 1 | 0.0% | 28
```

## Peores 5 cumplimiento cierre

```text
posicion | sucursal | cumplidos | evaluados | cumplimiento | faltantes
1 | 6014 - Tuxtla Santa María | 0 | 28 | 0.0% | 2
2 | 3111 - Nva. Cozumel 1 | 0 | 23 | 0.0% | 0
3 | 6018 - Las Margaritas | 0 | 22 | 0.0% | 0
4 | 6020 - Colon | 0 | 22 | 0.0% | 8
5 | 3123 QROO Felipe Carrillo Puerto 4 | 0 | 20 | 0.0% | 8
```

## Peores 5 cumplimiento general

```text
posicion | sucursal | cumplidos | evaluados | cumplimiento | faltantes
1 | 3110 - Holbox | 0 | 2 | 0.0% | 26
2 | 2057 - Presidentes | 0 | 1 | 0.0% | 26
3 | 2087 - Champoton 7 | 0 | 1 | 0.0% | 28
4 | 3051 - QR Playa Av. 115 | 0 | 1 | 0.0% | 28
5 | 3096 - Tulum Pueblo 3 | 0 | 1 | 0.0% | 28
```

## Registros open-close

```text
fecha | sucursal | codigo_sucursal | hora_apertura | cumplio_apertura | hora_cierre | cumplio_cierre | estado | cumplimiento | observaciones
2026-03-25 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:32:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 1025 - Uman | 1025 | 07:14:39 | No | 22:25:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1033 - Maxcanu | 1033 | 06:56:17 | Si | 22:25:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 1037 - Visente Solís | 1037 | 06:43:36 | Si | 22:34:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 1068 - Chemax | 1068 | 07:01:06 | No | 22:23:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1080 50 sur | Sin dato | 07:00:41 | No | 22:43:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1082 - Mulchchen | 1082 | 07:02:33 | No | 22:20:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1110 - Miguel Hidalgo | 1110 | 06:58:50 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-25 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:33:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 1116 - Seye | 1116 | 07:05:50 | No | 22:33:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1120 - Fco Montejo 3 | 1120 | 07:03:49 | No | 22:24:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:15:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 1215 - Paseos De Opichen | 1215 | 07:04:19 | No | 22:19:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:10:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 1244 - Gran Santa Fe | 1244 | 07:03:34 | No | 22:22:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1248 - Real Montejo | 1248 | 07:02:33 | No | 22:17:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:11:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 1261 - Conkal 1 | 1261 | 07:00:25 | No | 22:15:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1269 - San Marcos Sustentable | 1269 | 07:00:07 | No | 22:25:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1279 - Cri Cri | 1279 | 06:55:40 | Si | 22:10:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 1281 - Sotuta | 1281 | 13:48:53 | No | 22:03:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1292 - Cuzamar | 1292 | 06:52:56 | Si | 22:06:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 1298 - Muna 2 | 1298 | 07:01:57 | No | 22:11:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:58:10 | Si | 22:41:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:24:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:23:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 1318 CHOCHOLA | Sin dato | 07:00:49 | No | 22:12:29 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:16:30 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:07:38 | No | 22:09:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2001 - Campeche 16 | 2001 | 07:02:14 | No | 22:11:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2002 - Campeche Mercado | 2002 | 05:58:00 | Si | 21:25:00 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 2003 - Champotón | 2003 | 05:54:30 | Si | 21:12:52 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 2004 - CAM Santa Ana | 2004 | 06:25:05 | Si | 22:22:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:08:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2008 - Escarsega | 2008 | 06:57:10 | Si | 22:20:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:03:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2011 - Hopelchen | 2011 | 06:57:36 | Si | 23:12:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2013 - Seyba Playa | 2013 | 06:59:03 | Si | 22:59:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2014 - Kala | 2014 | 07:00:53 | No | 22:15:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:32:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:35:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2018 - Av. Central | 2018 | 06:55:55 | Si | 22:07:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2019 - Champotón 2 | 2019 | 06:53:48 | Si | 22:19:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:13:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2021 - Campeche Candelaria | 2021 | 07:06:55 | No | 22:11:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:48:58 | Si | 22:41:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2024 - Cd. Carmen Mercado | 2024 | 07:00:28 | No | 22:21:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:21:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2027 - Champotón 3 | 2027 | 06:51:47 | Si | 22:20:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2028 - Campeche Samula | 2028 | 06:55:58 | Si | 22:23:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2029 - Palma Real | 2029 | 07:01:48 | No | 22:17:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2030 - CAM San Antonio | 2030 | 07:02:04 | No | 22:13:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:21:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2032 - Hopelchen 2 | 2032 | Sin dato | Sin dato | 22:39:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:11:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2034 - Calkini 2 | 2034 | 06:59:43 | Si | 22:32:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2035 - Pomuch | 2035 | 07:52:56 | No | 22:17:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:12:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2037 - Tenabo | 2037 | 06:46:03 | Si | 22:10:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2038 - Calkini Mercado | 2038 | 06:35:30 | Si | 22:21:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2039 - Xpujil | 2039 | 06:52:52 | Si | 22:14:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:31:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:15:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2042 - Palizada | 2042 | 07:05:35 | No | 22:19:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2043 - Nunkini | 2043 | 06:53:30 | Si | 22:28:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:08:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2045 - Champoton 5 | 2045 | 07:03:24 | No | 22:24:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2046 - El Polvorín | 2046 | 06:59:52 | Si | 23:04:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2047 - China | 2047 | 06:56:28 | Si | 22:22:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2048 - Campeche Centro | 2048 | 07:00:00 | Si | 22:21:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2049 - Becal | 2049 | 07:03:02 | No | 23:04:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2051 - Campeche Morelos | 2051 | 06:57:02 | Si | 22:25:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2052 - Campeche Granjas | 2052 | 07:03:23 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-25 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:20:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2054 - Plan Chac | 2054 | 06:40:32 | Si | 22:21:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2055 - Dzilbachen | 2055 | 13:25:12 | No | 22:33:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:10:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2059 - Calkini 4 | 2059 | 06:44:27 | Si | 22:45:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2060 - Calkini 5 | 2060 | 06:52:18 | Si | 22:26:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2061 - Fidel Velazquez | 2061 | 22:01:05 | No | 22:35:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2062 - Kanisté | 2062 | 06:51:22 | Si | 21:46:15 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 2063 - Montecristo | 2063 | 06:52:38 | Si | 22:25:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2064 - Tomas Aznar | 2064 | 22:01:28 | No | 22:33:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2065 - Pomuch 2 | 2065 | 06:53:35 | Si | 22:19:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2066 - Isla Aguada | 2066 | 06:57:41 | Si | 22:33:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2067 - Candelaria 3 | 2067 | 06:59:12 | Si | 22:19:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:14:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2069 - Hopelchen 3 | 2069 | 06:52:19 | Si | 22:59:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2070 - Minas(1) | 2070 | 06:55:23 | Si | 22:19:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2072 - Xpujil 2 | 2072 | 06:43:22 | Si | 22:31:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2074 - Bellavista | 2074 | 06:55:31 | Si | 22:16:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2076 - Ejido Carrillo Puerto | 2076 | 06:31:50 | Si | 22:17:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2077 - Campeche Siglo XXI | 2077 | 06:27:56 | Si | 22:34:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:55:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2079 - Bonfil | 2079 | 21:47:17 | No | 22:04:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2080 - Ramon Espinola | 2080 | 06:43:01 | Si | 23:05:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2081 - Edzna | 2081 | 07:03:42 | No | 22:24:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2082 - Av. Periferia | 2082 | 07:11:41 | No | 22:21:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2084 - Holpelchen 4 | 2084 | 07:01:04 | No | 23:54:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2085 - Escarcega 7 | 2085 | 06:59:31 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-25 | 2086 - Champoton 6 | 2086 | 07:02:49 | No | 22:30:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:14:48 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2088 - Calkini 6 | 2088 | 07:00:13 | No | 22:19:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:20:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 2090 - Calkini 7 | 2090 | 06:48:26 | Si | 22:32:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2091 - Hecelchakan 2 | 2091 | 06:48:56 | Si | 22:24:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2092 - Lerma | 2092 | 06:41:47 | Si | 22:28:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2093 - Tenabo 2 | 2093 | 06:59:18 | Si | 22:41:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 2095 - Champoton 8 | 2095 | 07:02:31 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-25 | 2096 - Escarcega 10 | 2096 | 06:57:26 | Si | 22:14:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 3005 - Cancun Niños Heroes | 3005 | 05:45:22 | Si | 21:12:34 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 3008 - Playa del Carmen 2 | 3008 | Sin dato | Sin dato | 21:14:00 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:23:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:28:33 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:20:07 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 22:16:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:08:14 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:05:43 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:10:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:19:42 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3111 - Nva. Cozumel 1 | 3111 | 06:03:13 | Si | 21:17:49 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 3113 - Playa Villas del Sol | 3113 | 05:51:36 | Si | 21:37:22 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 06:08:46 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-25 | 3124 - Bacalar Mercado | 3124 | 05:56:27 | Si | 21:11:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 3152 - Kantunilkin 2 | 3152 | 05:57:57 | Si | 21:16:01 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:50:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 3167 - Macarena Tulum | 3167 | 05:54:59 | Si | 21:43:38 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 3502 - BB Bacalar | 3502 | 21:23:09 | No | 21:23:04 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-25 | 5002 - Tenosique Centro | 5002 | Sin dato | Sin dato | 22:10:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 5003 - Emiliano Zapata | 5003 | Sin dato | Sin dato | 22:32:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 5004 - Tab. Balancan | 5004 | 06:58:04 | Si | 22:12:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-25 | 5010 - Ciudad Pemex | 5010 | 07:08:04 | No | 22:02:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 6001 - Chiapas Palenque 1 | 6001 | 07:01:39 | No | 20:09:31 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-25 | 6003 - Chiapas Comitan 1 | 6003 | 07:07:12 | No | 21:34:41 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-25 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 21:34:29 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:10:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 6006 - Chiapas Comitan 2 | 6006 | Sin dato | Sin dato | 21:18:38 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 6007 - Chiapas Ocozocoautla | 6007 | 06:54:57 | Si | 21:43:16 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 6008 - Chiapas Teopisca | 6008 | 07:03:41 | No | 21:21:58 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-25 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:14:10 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:38:12 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:07:39 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 6014 - Tuxtla Santa María | 6014 | 06:55:16 | Si | 21:09:03 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 6015 - Tuxtla San José | 6015 | 07:48:28 | No | 21:14:36 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-25 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:32:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:20:16 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-25 | 6019 - Venustiano Carranza | 6019 | 21:00:16 | No | 21:42:26 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-25 | 6020 - Colon | 6020 | 07:00:28 | No | 21:03:16 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-25 | 6021 - Niño de Atocha | 6021 | 07:08:35 | No | 21:14:04 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-25 | 6022 - Bonampak | 6022 | 00:15:22 | Si | 21:11:45 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-25 | 6024 - Chiapas Catazaja | 6024 | 07:10:32 | No | 22:27:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-25 | 6026 - Tuxtla Patria Nueva | 6026 | 07:02:15 | No | 21:12:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-25 | 6028 - Comitan Las Flores | 6028 | 07:02:55 | No | 21:31:38 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:44:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 1025 - Uman | 1025 | 07:09:29 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-26 | 1033 - Maxcanu | 1033 | 06:59:02 | Si | 22:17:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 1037 - Visente Solís | 1037 | 06:40:25 | Si | 22:31:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 1068 - Chemax | 1068 | 07:03:43 | No | 22:28:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1080 50 sur | Sin dato | 07:00:42 | No | 22:08:58 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1082 - Mulchchen | 1082 | 07:00:14 | No | 22:21:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1110 - Miguel Hidalgo | 1110 | 07:10:34 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-26 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:23:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 1116 - Seye | 1116 | 07:00:33 | No | 22:47:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1120 - Fco Montejo 3 | 1120 | 07:01:33 | No | 22:12:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:58:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 1215 - Paseos De Opichen | 1215 | 07:06:43 | No | 22:13:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1236 - Boulevards de Oriente | 1236 | 07:06:39 | No | 22:35:04 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1244 - Gran Santa Fe | 1244 | 07:11:05 | No | 22:08:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1248 - Real Montejo | 1248 | 07:04:10 | No | 22:17:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1258 - Mérida Pedro Infante | 1258 | 07:00:15 | No | 22:06:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1261 - Conkal 1 | 1261 | 07:02:07 | No | 22:08:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1269 - San Marcos Sustentable | 1269 | 07:03:15 | No | 22:33:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1279 - Cri Cri | 1279 | 06:59:26 | Si | 22:11:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 1281 - Sotuta | 1281 | 07:10:51 | No | 22:07:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1282 - Tizimin 6 | 1282 | 18:41:47 | No | 22:08:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1292 - Cuzamar | 1292 | 06:52:16 | Si | 22:03:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 1298 - Muna 2 | 1298 | 07:01:10 | No | 22:02:29 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:58:21 | Si | 22:12:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:11:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:13:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 1318 CHOCHOLA | Sin dato | 06:58:27 | Si | 22:15:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 23:20:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:15:29 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:03:03 | No | 22:20:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2001 - Campeche 16 | 2001 | 07:00:10 | No | 22:01:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2002 - Campeche Mercado | 2002 | 05:57:02 | Si | 21:22:20 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 2003 - Champotón | 2003 | 05:51:18 | Si | 21:12:57 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 2004 - CAM Santa Ana | 2004 | 06:25:24 | Si | 22:27:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:10:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2008 - Escarsega | 2008 | 07:01:27 | No | 22:13:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:56:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2011 - Hopelchen | 2011 | 06:59:53 | Si | 22:27:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:18:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2013 - Seyba Playa | 2013 | 06:57:27 | Si | 22:15:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2016 - Carmen Tecolutla | 2016 | 07:00:30 | No | 22:24:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:39:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:17:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2019 - Champotón 2 | 2019 | 07:01:29 | No | 22:17:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2020 - Escarcega 3 | 2020 | 06:48:35 | Si | 22:11:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2021 - Campeche Candelaria | 2021 | 07:04:54 | No | 22:15:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:57:03 | Si | 22:39:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:23:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:09:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2027 - Champotón 3 | 2027 | 06:54:36 | Si | 22:20:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2028 - Campeche Samula | 2028 | 06:50:21 | Si | 22:24:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2029 - Palma Real | 2029 | 06:58:31 | Si | 22:12:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2030 - CAM San Antonio | 2030 | 07:03:42 | No | 22:12:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:25:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2032 - Hopelchen 2 | 2032 | 06:48:24 | Si | 22:10:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:11:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2034 - Calkini 2 | 2034 | 06:59:36 | Si | 22:21:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2035 - Pomuch | 2035 | Sin dato | Sin dato | 22:17:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:26:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2037 - Tenabo | 2037 | 06:57:21 | Si | 22:15:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2038 - Calkini Mercado | 2038 | 06:24:48 | Si | 22:10:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2039 - Xpujil | 2039 | 06:56:44 | Si | 22:03:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:22:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2041 - Sabancuy | 2041 | 06:59:34 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-26 | 2042 - Palizada | 2042 | 06:56:01 | Si | 22:11:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2043 - Nunkini | 2043 | 06:55:19 | Si | 22:21:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:15:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2045 - Champoton 5 | 2045 | 06:56:52 | Si | 22:19:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2046 - El Polvorín | 2046 | 06:57:33 | Si | 22:36:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2047 - China | 2047 | 07:03:14 | No | 22:26:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2048 - Campeche Centro | 2048 | 06:58:58 | Si | 21:47:49 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 2049 - Becal | 2049 | 07:00:52 | No | 22:28:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2051 - Campeche Morelos | 2051 | 06:55:53 | Si | 22:22:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2052 - Campeche Granjas | 2052 | 06:59:58 | Si | 22:23:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:27:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2054 - Plan Chac | 2054 | 21:00:42 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-26 | 2055 - Dzilbachen | 2055 | 21:59:06 | No | 22:33:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:11:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2059 - Calkini 4 | 2059 | 06:47:20 | Si | 22:32:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2060 - Calkini 5 | 2060 | 06:48:18 | Si | 22:41:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2061 - Fidel Velazquez | 2061 | 21:59:26 | No | 22:32:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2062 - Kanisté | 2062 | 06:54:17 | Si | 21:31:09 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 2063 - Montecristo | 2063 | 06:56:37 | Si | 22:29:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2064 - Tomas Aznar | 2064 | 22:01:21 | No | 22:33:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2065 - Pomuch 2 | 2065 | 06:56:15 | Si | 22:19:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2066 - Isla Aguada | 2066 | 07:05:46 | No | 22:33:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2067 - Candelaria 3 | 2067 | 07:03:20 | No | 22:08:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:12:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2069 - Hopelchen 3 | 2069 | 06:54:02 | Si | 22:24:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2070 - Minas(1) | 2070 | 07:03:56 | No | 22:27:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2072 - Xpujil 2 | 2072 | 06:49:02 | Si | 22:26:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2074 - Bellavista | 2074 | 06:54:17 | Si | 22:16:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2076 - Ejido Carrillo Puerto | 2076 | Sin dato | Sin dato | 22:15:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2077 - Campeche Siglo XXI | 2077 | 06:33:24 | Si | 22:39:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:15:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2079 - Bonfil | 2079 | 21:59:09 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-26 | 2080 - Ramon Espinola | 2080 | Sin dato | Sin dato | 22:36:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2081 - Edzna | 2081 | 07:01:43 | No | 22:17:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2082 - Av. Periferia | 2082 | 06:59:48 | Si | 22:17:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2084 - Holpelchen 4 | 2084 | 07:04:17 | No | 23:39:04 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2085 - Escarcega 7 | 2085 | 06:57:36 | Si | 22:13:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2086 - Champoton 6 | 2086 | Sin dato | Sin dato | 22:27:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:20:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2088 - Calkini 6 | 2088 | 06:51:48 | Si | 22:14:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:18:02 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 2090 - Calkini 7 | 2090 | 06:46:08 | Si | 22:43:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2091 - Hecelchakan 2 | 2091 | 06:50:56 | Si | 22:31:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2092 - Lerma | 2092 | 06:58:08 | Si | 22:18:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 2093 - Tenabo 2 | 2093 | 07:04:28 | No | 22:41:58 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 2095 - Champoton 8 | 2095 | 06:34:02 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-26 | 2096 - Escarcega 10 | 2096 | 06:56:31 | Si | 22:20:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 3005 - Cancun Niños Heroes | 3005 | 05:44:43 | Si | 21:13:22 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 3008 - Playa del Carmen 2 | 3008 | 05:56:45 | Si | 21:02:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 3013 - QROO Felipe Carrillo Puerto | 3013 | 06:01:54 | Si | 21:23:11 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:32:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 3040 - Kantunilkin | 3040 | 05:48:01 | Si | 21:16:35 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:32:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:14:50 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:04:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:12:33 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:23:48 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:14:33 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 3113 - Playa Villas del Sol | 3113 | 05:53:07 | Si | 21:57:00 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 06:06:34 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-26 | 3124 - Bacalar Mercado | 3124 | 05:54:53 | Si | 21:29:28 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:14:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:33:38 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 3167 - Macarena Tulum | 3167 | 05:51:25 | Si | 22:02:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-26 | 3502 - BB Bacalar | 3502 | 21:25:12 | No | 21:25:09 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:04:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 5002 - Tenosique Centro | 5002 | 07:04:35 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-26 | 5003 - Emiliano Zapata | 5003 | Sin dato | Sin dato | 22:17:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 5004 - Tab. Balancan | 5004 | 07:04:55 | No | 22:10:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 5010 - Ciudad Pemex | 5010 | 07:05:49 | No | 22:01:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 6001 - Chiapas Palenque 1 | 6001 | 07:00:17 | No | 20:11:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6003 - Chiapas Comitan 1 | 6003 | 07:08:54 | No | 21:31:08 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6004 - Villaflores | 6004 | 07:19:02 | No | 21:21:08 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:10:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 6006 - Chiapas Comitan 2 | 6006 | 07:10:35 | No | 21:16:01 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6007 - Chiapas Ocozocoautla | 6007 | 06:59:08 | Si | 21:22:17 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 6008 - Chiapas Teopisca | 6008 | 06:57:46 | Si | 21:21:36 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:11:03 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 6011 - Venustiano Carranza | 6011 | 07:04:23 | No | 21:37:42 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:13:11 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 6014 - Tuxtla Santa María | 6014 | 07:05:09 | No | 21:18:40 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6015 - Tuxtla San José | 6015 | 07:24:41 | No | 21:10:12 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6016 - Alcala | 6016 | 07:04:48 | No | 21:17:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:39:47 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-26 | 6020 - Colon | 6020 | 07:18:48 | No | 21:08:20 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6021 - Niño de Atocha | 6021 | 06:59:35 | Si | 21:10:38 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-26 | 6022 - Bonampak | 6022 | 07:04:10 | No | 21:09:20 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6024 - Chiapas Catazaja | 6024 | 07:23:01 | No | 23:15:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-26 | 6026 - Tuxtla Patria Nueva | 6026 | 07:07:28 | No | 21:11:20 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-26 | 6028 - Comitan Las Flores | 6028 | 07:07:51 | No | 21:32:10 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:40:02 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 1025 - Uman | 1025 | 00:29:01 | Si | 22:55:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 1033 - Maxcanu | 1033 | 06:58:36 | Si | 22:22:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 1037 - Visente Solís | 1037 | 06:43:20 | Si | 22:50:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 1068 - Chemax | 1068 | 07:02:29 | No | 22:21:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1080 50 sur | Sin dato | 06:58:36 | Si | 22:18:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 1082 - Mulchchen | 1082 | 07:02:27 | No | 22:17:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1110 - Miguel Hidalgo | 1110 | 07:16:35 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-27 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:20:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 1116 - Seye | 1116 | 07:06:32 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-27 | 1120 - Fco Montejo 3 | 1120 | 07:05:42 | No | 22:40:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:49:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 1215 - Paseos De Opichen | 1215 | 07:04:41 | No | 22:13:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:12:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 1244 - Gran Santa Fe | 1244 | 07:04:59 | No | 22:08:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1248 - Real Montejo | 1248 | 07:16:33 | No | 22:15:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1258 - Mérida Pedro Infante | 1258 | 07:00:22 | No | 22:10:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1261 - Conkal 1 | 1261 | 07:04:43 | No | 22:11:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1269 - San Marcos Sustentable | 1269 | 07:01:44 | No | 22:15:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1279 - Cri Cri | 1279 | 07:00:37 | No | 22:09:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1281 - Sotuta | 1281 | 09:08:49 | No | 22:08:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 1292 - Cuzamar | 1292 | 06:56:08 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-27 | 1298 - Muna 2 | 1298 | 06:52:15 | Si | 22:05:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:50:03 | Si | 22:16:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:24:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:24:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 1318 CHOCHOLA | Sin dato | 06:58:05 | Si | 22:12:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 23:18:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:33:57 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:25 | No | 22:07:29 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2001 - Campeche 16 | 2001 | 07:02:24 | No | 22:11:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2002 - Campeche Mercado | 2002 | 05:56:09 | Si | 21:13:02 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 2003 - Champotón | 2003 | 06:00:32 | Si | 21:16:11 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 2004 - CAM Santa Ana | 2004 | 07:00:41 | No | 22:37:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:33:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2008 - Escarsega | 2008 | 06:59:55 | Si | 22:18:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:07:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2011 - Hopelchen | 2011 | 06:56:51 | Si | 22:18:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:30:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2013 - Seyba Playa | 2013 | 07:05:36 | No | 22:19:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2014 - Kala | 2014 | 06:55:31 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-27 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:26:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:37:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:16:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2019 - Champotón 2 | 2019 | 06:50:32 | Si | 22:18:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:14:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2021 - Campeche Candelaria | 2021 | 07:07:42 | No | 22:31:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:52:48 | Si | 22:49:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:18:48 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:11:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2027 - Champotón 3 | 2027 | 06:56:14 | Si | 22:18:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2028 - Campeche Samula | 2028 | 06:53:29 | Si | 22:20:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2029 - Palma Real | 2029 | 07:07:41 | No | 22:39:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:18:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:16:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2032 - Hopelchen 2 | 2032 | 06:51:14 | Si | 22:20:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:13:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2034 - Calkini 2 | 2034 | 06:58:01 | Si | 22:26:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2035 - Pomuch | 2035 | 15:06:19 | No | 22:11:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:13:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2037 - Tenabo | 2037 | 06:45:10 | Si | 22:11:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2038 - Calkini Mercado | 2038 | 06:37:41 | Si | 22:25:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2039 - Xpujil | 2039 | 06:49:49 | Si | 22:36:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:48:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2042 - Palizada | 2042 | 07:09:04 | No | 22:18:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2043 - Nunkini | 2043 | 06:59:07 | Si | 22:25:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:09:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2045 - Champoton 5 | 2045 | Sin dato | Sin dato | 22:29:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2046 - El Polvorín | 2046 | 06:54:51 | Si | 22:30:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2047 - China | 2047 | 07:01:18 | No | 22:30:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:51:41 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2049 - Becal | 2049 | 07:01:54 | No | 22:44:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:13:48 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2052 - Campeche Granjas | 2052 | 07:05:26 | No | 22:05:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2053 - Escarcega Morelos | 2053 | 17:05:08 | No | 22:34:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2054 - Plan Chac | 2054 | 06:35:53 | Si | 22:38:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2055 - Dzilbachen | 2055 | 21:50:22 | No | 22:41:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:08:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2059 - Calkini 4 | 2059 | 06:43:28 | Si | 22:15:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2060 - Calkini 5 | 2060 | 06:47:59 | Si | 22:50:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2061 - Fidel Velazquez | 2061 | 21:59:26 | No | 22:27:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2062 - Kanisté | 2062 | 06:52:15 | Si | 21:23:33 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 2063 - Montecristo | 2063 | 06:48:35 | Si | 22:11:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2064 - Tomas Aznar | 2064 | 22:00:47 | No | 22:18:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2065 - Pomuch 2 | 2065 | 06:56:57 | Si | 22:31:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2066 - Isla Aguada | 2066 | 06:58:22 | Si | 22:42:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2067 - Candelaria 3 | 2067 | 07:01:21 | No | 22:12:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:16:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2069 - Hopelchen 3 | 2069 | 07:00:11 | No | 22:23:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2070 - Minas(1) | 2070 | 06:55:44 | Si | 22:28:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2072 - Xpujil 2 | 2072 | 06:49:47 | Si | 23:18:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2074 - Bellavista | 2074 | 06:52:29 | Si | 22:17:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2076 - Ejido Carrillo Puerto | 2076 | 06:28:09 | Si | 22:18:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2077 - Campeche Siglo XXI | 2077 | 06:33:23 | Si | 22:37:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:17:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2079 - Bonfil | 2079 | 21:58:05 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-27 | 2080 - Ramon Espinola | 2080 | 06:50:27 | Si | 22:35:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2081 - Edzna | 2081 | 07:00:32 | No | 22:31:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2082 - Av. Periferia | 2082 | 06:57:17 | Si | 22:17:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2084 - Holpelchen 4 | 2084 | 07:01:38 | No | 23:32:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2085 - Escarcega 7 | 2085 | 06:58:51 | Si | 22:23:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2086 - Champoton 6 | 2086 | Sin dato | Sin dato | 22:23:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:17:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2088 - Calkini 6 | 2088 | 06:57:12 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-27 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:21:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 2090 - Calkini 7 | 2090 | 06:48:52 | Si | 22:19:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2091 - Hecelchakan 2 | 2091 | 06:53:10 | Si | 22:29:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2092 - Lerma | 2092 | 06:36:37 | Si | 22:20:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 2093 - Tenabo 2 | 2093 | 07:00:37 | No | 22:30:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2095 - Champoton 8 | 2095 | 07:00:58 | No | 22:26:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 2096 - Escarcega 10 | 2096 | 06:57:49 | Si | 22:17:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 3005 - Cancun Niños Heroes | 3005 | 05:54:33 | Si | 21:08:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 3008 - Playa del Carmen 2 | 3008 | 06:02:37 | Si | 21:11:56 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:23:11 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:11:37 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 3040 - Kantunilkin | 3040 | 05:46:36 | Si | 21:21:27 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:18:38 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:16:31 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:07:47 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:22:27 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:22:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:20:41 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 3113 - Playa Villas del Sol | 3113 | 05:56:01 | Si | 22:59:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 06:06:55 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-27 | 3124 - Bacalar Mercado | 3124 | 05:58:29 | Si | 21:36:02 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 3152 - Kantunilkin 2 | 3152 | 05:57:49 | Si | 21:24:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:36:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 3167 - Macarena Tulum | 3167 | 05:59:42 | Si | 21:55:40 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 3168 - Macarena Chiquila | 3168 | 06:04:08 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-27 | 3502 - BB Bacalar | 3502 | 21:01:55 | No | 21:31:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:05:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 5002 - Tenosique Centro | 5002 | Sin dato | Sin dato | 22:07:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 5003 - Emiliano Zapata | 5003 | Sin dato | Sin dato | 22:42:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 5004 - Tab. Balancan | 5004 | 06:59:18 | Si | 22:11:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-27 | 5010 - Ciudad Pemex | 5010 | 07:10:31 | No | 22:00:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 6001 - Chiapas Palenque 1 | 6001 | 07:02:21 | No | 20:07:45 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 6003 - Chiapas Comitan 1 | 6003 | 07:03:40 | No | 23:31:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 21:29:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:04:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 6006 - Chiapas Comitan 2 | 6006 | 07:04:32 | No | 21:38:57 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 6007 - Chiapas Ocozocoautla | 6007 | 06:59:37 | Si | 21:28:35 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 6008 - Chiapas Teopisca | 6008 | 06:54:10 | Si | 21:19:47 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:19:43 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 6011 - Venustiano Carranza | 6011 | 07:10:02 | No | 21:37:37 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:16:16 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 6014 - Tuxtla Santa María | 6014 | 07:02:51 | No | 21:15:40 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 6015 - Tuxtla San José | 6015 | 07:29:43 | No | 21:16:32 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:12:00 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:10:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-27 | 6019 - Venustiano Carranza | 6019 | 20:58:43 | No | 21:33:37 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 6020 - Colon | 6020 | 07:03:40 | No | 21:11:14 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 6021 - Niño de Atocha | 6021 | 07:06:28 | No | 21:11:52 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 6022 - Bonampak | 6022 | 07:05:48 | No | 21:12:37 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-27 | 6024 - Chiapas Catazaja | 6024 | 07:23:42 | No | 22:34:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-27 | 6026 - Tuxtla Patria Nueva | 6026 | 06:58:31 | Si | 21:05:43 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-27 | 6028 - Comitan Las Flores | 6028 | 07:08:40 | No | 21:31:36 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:39:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 1025 - Uman | 1025 | 07:10:10 | No | 22:38:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1033 - Maxcanu | 1033 | 06:58:59 | Si | 22:37:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 1037 - Visente Solís | 1037 | 06:45:06 | Si | 22:56:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 1068 - Chemax | 1068 | 07:07:47 | No | 22:16:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1080 50 sur | Sin dato | 07:00:12 | No | 22:11:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1082 - Mulchchen | 1082 | 06:53:50 | Si | 22:15:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 1110 - Miguel Hidalgo | 1110 | 07:08:18 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:21:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 1116 - Seye | 1116 | 07:10:37 | No | 22:26:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1120 - Fco Montejo 3 | 1120 | 07:02:13 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:45:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 1215 - Paseos De Opichen | 1215 | 07:00:41 | No | 22:11:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1236 - Boulevards de Oriente | 1236 | 07:06:35 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 1244 - Gran Santa Fe | 1244 | 07:09:35 | No | 22:31:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1248 - Real Montejo | 1248 | 07:05:54 | No | 22:15:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1258 - Mérida Pedro Infante | 1258 | 06:58:29 | Si | 22:10:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 1261 - Conkal 1 | 1261 | 07:01:01 | No | 22:04:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1269 - San Marcos Sustentable | 1269 | 06:55:39 | Si | 22:42:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 1279 - Cri Cri | 1279 | 07:03:08 | No | 22:16:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1281 - Sotuta | 1281 | 07:09:57 | No | 22:11:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1292 - Cuzamar | 1292 | 07:02:52 | No | 22:04:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 1298 - Muna 2 | 1298 | 06:58:24 | Si | 22:16:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:56:34 | Si | 22:14:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:09:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:16:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 1318 CHOCHOLA | Sin dato | 06:55:49 | Si | 22:17:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 23:03:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:17:31 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:00:06 | No | 22:19:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2001 - Campeche 16 | 2001 | 07:01:30 | No | 22:05:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2002 - Campeche Mercado | 2002 | 05:57:52 | Si | 21:12:47 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 2003 - Champotón | 2003 | 05:56:32 | Si | 21:13:28 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 2004 - CAM Santa Ana | 2004 | 06:44:01 | Si | 22:22:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:25:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2008 - Escarsega | 2008 | 06:55:34 | Si | 22:22:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:52:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2011 - Hopelchen | 2011 | 20:58:33 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 2012 - Escarcega 2 | 2012 | 07:01:24 | No | 22:32:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2013 - Seyba Playa | 2013 | 07:02:22 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 2014 - Kala | 2014 | 01:29:55 | Si | 01:52:05 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 2016 - Carmen Tecolutla | 2016 | 07:01:14 | No | 22:16:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:27:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:05:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2019 - Champotón 2 | 2019 | 06:57:58 | Si | 22:33:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:16:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2021 - Campeche Candelaria | 2021 | 07:04:57 | No | 22:30:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:56:43 | Si | 22:36:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:24:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:09:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:36:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2028 - Campeche Samula | 2028 | 06:51:35 | Si | 22:26:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2029 - Palma Real | 2029 | 06:59:38 | Si | 22:11:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2030 - CAM San Antonio | 2030 | 21:56:35 | No | 22:07:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:13:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2032 - Hopelchen 2 | 2032 | 20:58:48 | No | 22:14:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:12:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2034 - Calkini 2 | 2034 | 06:58:08 | Si | 22:19:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2035 - Pomuch | 2035 | 07:04:22 | No | 22:40:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:15:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2037 - Tenabo | 2037 | 06:53:41 | Si | 22:09:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2038 - Calkini Mercado | 2038 | 06:23:26 | Si | 22:18:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2039 - Xpujil | 2039 | 06:48:20 | Si | 22:15:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:29:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2042 - Palizada | 2042 | 07:07:03 | No | 22:49:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2043 - Nunkini | 2043 | 06:56:10 | Si | 22:31:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:16:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2045 - Champoton 5 | 2045 | 07:10:46 | No | 22:14:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2046 - El Polvorín | 2046 | 06:55:23 | Si | 22:37:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2047 - China | 2047 | 06:56:07 | Si | 22:25:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:10:37 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2049 - Becal | 2049 | 07:04:15 | No | 22:22:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2051 - Campeche Morelos | 2051 | 14:16:26 | No | 22:15:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2052 - Campeche Granjas | 2052 | 07:01:42 | No | 22:10:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2053 - Escarcega Morelos | 2053 | 07:05:40 | No | 22:18:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2054 - Plan Chac | 2054 | 06:45:44 | Si | 22:18:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2055 - Dzilbachen | 2055 | 22:00:15 | No | 23:23:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:12:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2059 - Calkini 4 | 2059 | 06:47:37 | Si | 22:36:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2060 - Calkini 5 | 2060 | 06:56:05 | Si | 23:02:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2061 - Fidel Velazquez | 2061 | 22:00:56 | No | 22:26:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2062 - Kanisté | 2062 | 06:55:45 | Si | 21:31:14 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 2063 - Montecristo | 2063 | 06:55:09 | Si | 22:12:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2064 - Tomas Aznar | 2064 | 22:01:37 | No | 22:29:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2065 - Pomuch 2 | 2065 | 06:57:29 | Si | 22:19:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2066 - Isla Aguada | 2066 | 07:03:37 | No | 22:34:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2067 - Candelaria 3 | 2067 | 07:02:11 | No | 22:18:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2068 - Bolonchen | 2068 | 06:43:45 | Si | 22:24:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2069 - Hopelchen 3 | 2069 | 20:58:54 | No | 22:34:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2070 - Minas(1) | 2070 | 07:00:13 | No | 22:23:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2072 - Xpujil 2 | 2072 | 06:46:14 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 2074 - Bellavista | 2074 | 06:57:54 | Si | 22:13:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2076 - Ejido Carrillo Puerto | 2076 | 06:33:27 | Si | 22:16:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2077 - Campeche Siglo XXI | 2077 | 06:31:20 | Si | 22:23:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:12:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2080 - Ramon Espinola | 2080 | 06:45:57 | Si | 22:36:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2081 - Edzna | 2081 | 07:07:17 | No | 22:39:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2082 - Av. Periferia | 2082 | 07:00:21 | No | 22:15:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2084 - Holpelchen 4 | 2084 | 07:05:09 | No | 22:48:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2085 - Escarcega 7 | 2085 | 06:53:43 | Si | 22:18:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2086 - Champoton 6 | 2086 | 06:57:44 | Si | 22:19:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:22:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2088 - Calkini 6 | 2088 | 06:54:56 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:23:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 2090 - Calkini 7 | 2090 | 06:51:10 | Si | 23:27:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2091 - Hecelchakan 2 | 2091 | 06:53:24 | Si | 22:28:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2092 - Lerma | 2092 | 06:38:38 | Si | 22:16:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 2093 - Tenabo 2 | 2093 | 07:00:51 | No | 22:42:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 2095 - Champoton 8 | 2095 | 07:00:11 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 2096 - Escarcega 10 | 2096 | 06:54:58 | Si | 22:15:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-28 | 3005 - Cancun Niños Heroes | 3005 | 05:50:22 | Si | 21:08:36 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 3008 - Playa del Carmen 2 | 3008 | 06:02:52 | Si | 21:23:14 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:23:28 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:20:36 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 3040 - Kantunilkin | 3040 | 05:48:02 | Si | 21:36:17 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:28:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:17:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:02:23 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:37:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:37:39 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 3113 - Playa Villas del Sol | 3113 | 05:54:33 | Si | 21:39:29 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 06:02:39 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 3124 - Bacalar Mercado | 3124 | 05:59:18 | Si | 21:25:11 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:21:41 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:46:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 3167 - Macarena Tulum | 3167 | 05:53:04 | Si | 21:37:17 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 3168 - Macarena Chiquila | 3168 | 06:02:43 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-28 | 3502 - BB Bacalar | 3502 | 20:57:19 | No | 21:30:41 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:10:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 5002 - Tenosique Centro | 5002 | 07:05:40 | No | 22:09:44 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 5003 - Emiliano Zapata | 5003 | 07:04:13 | No | 22:29:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 5004 - Tab. Balancan | 5004 | 07:02:09 | No | 22:05:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 5010 - Ciudad Pemex | 5010 | 07:15:11 | No | 22:00:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-28 | 6001 - Chiapas Palenque 1 | 6001 | 06:59:00 | Si | 20:04:18 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 6003 - Chiapas Comitan 1 | 6003 | 07:06:59 | No | 21:36:54 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 6004 - Villaflores | 6004 | 07:20:26 | No | 21:20:17 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:04:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 6006 - Chiapas Comitan 2 | 6006 | 07:12:30 | No | 21:06:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 6007 - Chiapas Ocozocoautla | 6007 | 06:57:15 | Si | 21:18:26 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 6008 - Chiapas Teopisca | 6008 | 06:59:23 | Si | 21:21:29 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:18:46 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 6011 - Venustiano Carranza | 6011 | 07:04:12 | No | 21:35:23 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:07:05 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 6014 - Tuxtla Santa María | 6014 | 07:08:11 | No | 21:12:18 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 6015 - Tuxtla San José | 6015 | 07:13:07 | No | 21:16:37 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:15:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 6019 - Venustiano Carranza | 6019 | 07:09:49 | No | 21:41:30 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 6020 - Colon | 6020 | 06:58:13 | Si | 21:04:48 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 6021 - Niño de Atocha | 6021 | 07:00:22 | No | 21:10:15 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 6022 - Bonampak | 6022 | 07:06:13 | No | 21:29:26 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-28 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:43:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-28 | 6026 - Tuxtla Patria Nueva | 6026 | 06:55:55 | Si | 21:02:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-28 | 6028 - Comitan Las Flores | 6028 | 07:14:46 | No | 21:34:42 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:39:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 1025 - Uman | 1025 | 07:07:53 | No | 22:21:04 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1033 - Maxcanu | 1033 | 06:53:05 | Si | 22:34:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 1037 - Visente Solís | 1037 | 06:29:57 | Si | 22:36:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 1068 - Chemax | 1068 | 07:01:55 | No | 22:26:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1080 50 sur | Sin dato | 07:01:29 | No | 22:14:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1082 - Mulchchen | 1082 | 06:56:17 | Si | 22:21:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 1110 - Miguel Hidalgo | 1110 | 07:15:28 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-29 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:27:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 1116 - Seye | 1116 | 07:02:52 | No | 22:34:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1120 - Fco Montejo 3 | 1120 | 07:16:45 | No | 22:21:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:12:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 1215 - Paseos De Opichen | 1215 | 07:03:18 | No | 22:11:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1236 - Boulevards de Oriente | 1236 | 07:08:12 | No | 22:07:44 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1244 - Gran Santa Fe | 1244 | 06:59:38 | Si | 22:05:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 1248 - Real Montejo | 1248 | 07:01:41 | No | 22:06:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1258 - Mérida Pedro Infante | 1258 | 07:01:53 | No | 22:05:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1261 - Conkal 1 | 1261 | 07:01:06 | No | 22:14:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1269 - San Marcos Sustentable | 1269 | 06:58:47 | Si | 22:26:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 1279 - Cri Cri | 1279 | 07:05:45 | No | 22:10:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1281 - Sotuta | 1281 | 11:00:52 | No | 22:13:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 1292 - Cuzamar | 1292 | 06:56:05 | Si | 22:07:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 1298 - Muna 2 | 1298 | 06:56:19 | Si | 22:11:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:53:49 | Si | 22:14:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:08:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:21:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 1318 CHOCHOLA | Sin dato | 06:55:27 | Si | 21:22:23 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 1319 - Macarena Petronila | 1319 | 06:57:43 | Si | 23:17:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 16:10:03 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:03:52 | No | 22:20:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2001 - Campeche 16 | 2001 | 07:05:48 | No | 22:16:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2002 - Campeche Mercado | 2002 | 05:55:19 | Si | 21:11:55 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 2003 - Champotón | 2003 | 05:56:14 | Si | 21:11:09 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 2004 - CAM Santa Ana | 2004 | 07:03:15 | No | 22:37:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:37:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2008 - Escarsega | 2008 | 06:51:04 | Si | 22:23:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:26:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2011 - Hopelchen | 2011 | 06:59:02 | Si | 22:24:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:45:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2013 - Seyba Playa | 2013 | 06:56:25 | Si | 22:36:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2014 - Kala | 2014 | 07:03:43 | No | 23:23:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:15:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:42:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2018 - Av. Central | 2018 | 06:58:26 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-29 | 2019 - Champotón 2 | 2019 | 06:54:57 | Si | 22:19:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:11:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2021 - Campeche Candelaria | 2021 | 07:15:33 | No | 22:23:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2023 - Campeche Av. Lopez Mateos | 2023 | 07:59:37 | No | 22:34:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:20:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:11:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:25:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2028 - Campeche Samula | 2028 | 07:01:59 | No | 22:26:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2029 - Palma Real | 2029 | Sin dato | Sin dato | 22:11:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2030 - CAM San Antonio | 2030 | 21:54:30 | No | 22:11:04 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:16:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2032 - Hopelchen 2 | 2032 | 06:52:32 | Si | 22:27:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:23:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2034 - Calkini 2 | 2034 | 06:58:37 | Si | 22:35:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2035 - Pomuch | 2035 | 07:01:00 | No | 22:24:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:14:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2037 - Tenabo | 2037 | 06:45:06 | Si | 22:14:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2038 - Calkini Mercado | 2038 | 06:21:56 | Si | 22:12:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2039 - Xpujil | 2039 | 06:55:02 | Si | 22:20:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:30:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2042 - Palizada | 2042 | 07:07:05 | No | 22:29:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2043 - Nunkini | 2043 | 06:55:49 | Si | 22:17:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:26:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2045 - Champoton 5 | 2045 | 06:58:52 | Si | 22:25:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2046 - El Polvorín | 2046 | 07:00:14 | No | 22:30:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2047 - China | 2047 | 07:13:50 | No | 22:16:48 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 22:42:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2049 - Becal | 2049 | 07:02:24 | No | 22:20:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:18:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2052 - Campeche Granjas | 2052 | 07:02:48 | No | 22:11:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2053 - Escarcega Morelos | 2053 | 07:00:09 | No | 22:28:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2054 - Plan Chac | 2054 | 06:56:04 | Si | 22:20:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2055 - Dzilbachen | 2055 | 21:49:53 | No | 22:23:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:08:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2059 - Calkini 4 | 2059 | 06:52:34 | Si | 22:20:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2060 - Calkini 5 | 2060 | 06:58:54 | Si | 23:00:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2061 - Fidel Velazquez | 2061 | 22:01:58 | No | 22:42:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2062 - Kanisté | 2062 | 06:54:29 | Si | 21:43:47 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 2063 - Montecristo | 2063 | 06:49:35 | Si | 22:13:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2064 - Tomas Aznar | 2064 | 22:02:19 | No | 22:31:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2065 - Pomuch 2 | 2065 | 06:59:44 | Si | 22:28:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2066 - Isla Aguada | 2066 | 06:58:04 | Si | 22:28:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2067 - Candelaria 3 | 2067 | 06:37:23 | Si | 22:09:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:27:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2069 - Hopelchen 3 | 2069 | 06:57:50 | Si | 22:21:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2070 - Minas(1) | 2070 | 07:00:28 | No | 22:30:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2072 - Xpujil 2 | 2072 | 06:51:06 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-29 | 2074 - Bellavista | 2074 | 06:54:12 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-29 | 2076 - Ejido Carrillo Puerto | 2076 | Sin dato | Sin dato | 22:13:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2077 - Campeche Siglo XXI | 2077 | 06:45:56 | Si | 22:23:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:12:02 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2079 - Bonfil | 2079 | Sin dato | Sin dato | 22:14:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2080 - Ramon Espinola | 2080 | 06:58:06 | Si | 22:36:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2081 - Edzna | 2081 | 07:00:30 | No | 22:43:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2082 - Av. Periferia | 2082 | 07:00:46 | No | 22:11:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 2084 - Holpelchen 4 | 2084 | 06:57:13 | Si | 22:26:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2085 - Escarcega 7 | 2085 | 06:55:22 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-29 | 2086 - Champoton 6 | 2086 | 06:56:37 | Si | 22:31:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:15:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2088 - Calkini 6 | 2088 | 06:53:50 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-29 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:18:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 2090 - Calkini 7 | 2090 | 06:52:51 | Si | 22:15:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2091 - Hecelchakan 2 | 2091 | 06:57:15 | Si | 22:17:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2092 - Lerma | 2092 | 06:51:18 | Si | 22:24:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2093 - Tenabo 2 | 2093 | 06:57:44 | Si | 22:37:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 2095 - Champoton 8 | 2095 | 06:56:18 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-29 | 2096 - Escarcega 10 | 2096 | 07:03:43 | No | 22:13:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 3005 - Cancun Niños Heroes | 3005 | 05:55:24 | Si | 20:13:05 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 3008 - Playa del Carmen 2 | 3008 | Sin dato | Sin dato | 20:04:23 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3013 - QROO Felipe Carrillo Puerto | 3013 | 06:01:44 | Si | 21:30:17 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 20:28:48 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 20:35:28 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 20:47:47 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 20:26:24 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:12:48 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 20:36:19 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 20:25:10 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3111 - Nva. Cozumel 1 | 3111 | 06:01:08 | Si | 21:16:06 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 3113 - Playa Villas del Sol | 3113 | 05:58:00 | Si | 20:32:08 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 05:59:29 | Si | 21:19:35 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 3124 - Bacalar Mercado | 3124 | 05:57:01 | Si | 21:15:33 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-29 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 20:12:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:24:41 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 21:58:08 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 3168 - Macarena Chiquila | 3168 | 06:01:41 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-29 | 3502 - BB Bacalar | 3502 | 20:56:00 | No | 21:22:41 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:21:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 5002 - Tenosique Centro | 5002 | 07:05:11 | No | 22:08:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 5003 - Emiliano Zapata | 5003 | 07:16:01 | No | 22:21:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 5004 - Tab. Balancan | 5004 | 07:05:35 | No | 22:08:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-29 | 5010 - Ciudad Pemex | 5010 | 07:11:14 | No | 21:28:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6001 - Chiapas Palenque 1 | 6001 | 07:02:47 | No | 17:26:50 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6003 - Chiapas Comitan 1 | 6003 | 07:13:39 | No | 21:31:56 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6004 - Villaflores | 6004 | 07:23:31 | No | 21:31:52 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:29:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 6006 - Chiapas Comitan 2 | 6006 | 07:18:10 | No | 21:21:47 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6007 - Chiapas Ocozocoautla | 6007 | 07:00:16 | No | 21:29:20 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6008 - Chiapas Teopisca | 6008 | 07:01:07 | No | 21:11:56 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:18:46 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 6011 - Venustiano Carranza | 6011 | 06:59:49 | Si | 23:47:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-29 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:05:34 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 6014 - Tuxtla Santa María | 6014 | 07:06:26 | No | 21:13:02 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6015 - Tuxtla San José | 6015 | 07:11:59 | No | 21:44:04 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6016 - Alcala | 6016 | 07:04:00 | No | 21:25:53 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:12:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 6019 - Venustiano Carranza | 6019 | 07:23:51 | No | 21:33:50 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6020 - Colon | 6020 | 07:30:07 | No | 21:09:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6021 - Niño de Atocha | 6021 | 07:03:06 | No | 21:08:55 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6022 - Bonampak | 6022 | 07:09:10 | No | 21:07:34 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:54:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-29 | 6026 - Tuxtla Patria Nueva | 6026 | 07:03:26 | No | 21:10:22 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-29 | 6028 - Comitan Las Flores | 6028 | 07:04:58 | No | 21:11:29 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:40:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 1025 - Uman | 1025 | 06:57:08 | Si | 23:00:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 1033 - Maxcanu | 1033 | 06:59:13 | Si | 22:35:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 1037 - Visente Solís | 1037 | 06:36:57 | Si | 22:53:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 1068 - Chemax | 1068 | 06:55:16 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-30 | 1080 50 sur | Sin dato | 07:01:14 | No | 22:17:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 1082 - Mulchchen | 1082 | 07:01:22 | No | 22:09:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 1110 - Miguel Hidalgo | 1110 | 07:08:50 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-30 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:16:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 1116 - Seye | 1116 | 07:01:01 | No | 22:21:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 1120 - Fco Montejo 3 | 1120 | 07:08:41 | No | 22:18:57 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:58:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 1215 - Paseos De Opichen | 1215 | 07:05:15 | No | 22:16:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:24:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 1244 - Gran Santa Fe | 1244 | 07:04:33 | No | 22:33:44 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 1248 - Real Montejo | 1248 | 07:02:16 | No | 22:11:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:11:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 1261 - Conkal 1 | 1261 | 06:58:11 | Si | 22:08:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 1269 - San Marcos Sustentable | 1269 | 06:54:22 | Si | 22:29:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 1279 - Cri Cri | 1279 | 06:53:59 | Si | 22:09:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 1281 - Sotuta | 1281 | 09:49:30 | No | 22:28:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 1292 - Cuzamar | 1292 | 06:56:03 | Si | 22:18:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 1298 - Muna 2 | 1298 | 06:58:16 | Si | 22:04:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:57:48 | Si | 22:15:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:07:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:24:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 1318 CHOCHOLA | Sin dato | 12:27:28 | No | 21:54:31 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:57:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:08:17 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:11:13 | No | 22:16:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2001 - Campeche 16 | 2001 | 07:02:47 | No | 22:16:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2002 - Campeche Mercado | 2002 | 05:58:29 | Si | 21:17:35 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 2003 - Champotón | 2003 | 05:59:05 | Si | 21:17:13 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 2004 - CAM Santa Ana | 2004 | 06:31:05 | Si | 22:28:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:11:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2008 - Escarsega | 2008 | 06:53:53 | Si | 22:07:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:27:48 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2011 - Hopelchen | 2011 | 07:00:42 | No | 22:19:48 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 23:08:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2013 - Seyba Playa | 2013 | 06:52:29 | Si | 22:40:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2014 - Kala | 2014 | 06:49:56 | Si | 23:20:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:19:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:43:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:06:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2019 - Champotón 2 | 2019 | 06:47:21 | Si | 22:20:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:10:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2021 - Campeche Candelaria | 2021 | 06:58:32 | Si | 22:10:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2023 - Campeche Av. Lopez Mateos | 2023 | 07:00:40 | No | 22:37:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 23:43:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:10:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:16:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2028 - Campeche Samula | 2028 | 07:03:36 | No | 22:43:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2029 - Palma Real | 2029 | Sin dato | Sin dato | 22:17:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2030 - CAM San Antonio | 2030 | 21:56:16 | No | 22:12:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:15:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2032 - Hopelchen 2 | 2032 | 06:53:45 | Si | 22:18:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:23:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2034 - Calkini 2 | 2034 | 06:58:55 | Si | 22:43:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2035 - Pomuch | 2035 | Sin dato | Sin dato | 22:16:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:13:02 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2037 - Tenabo | 2037 | 06:49:32 | Si | 22:20:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2038 - Calkini Mercado | 2038 | 06:29:17 | Si | 22:13:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2039 - Xpujil | 2039 | 06:41:17 | Si | 22:19:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:50:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2041 - Sabancuy | 2041 | 20:43:51 | No | 22:20:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2042 - Palizada | 2042 | 07:08:11 | No | 22:14:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2043 - Nunkini | 2043 | 06:50:01 | Si | 22:24:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:16:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2045 - Champoton 5 | 2045 | 07:03:16 | No | 22:16:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2046 - El Polvorín | 2046 | 06:55:33 | Si | 22:44:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2047 - China | 2047 | 07:02:32 | No | 22:39:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2048 - Campeche Centro | 2048 | 07:00:09 | No | 21:55:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 2049 - Becal | 2049 | 06:57:37 | Si | 22:26:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2051 - Campeche Morelos | 2051 | 06:53:58 | Si | 22:20:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2052 - Campeche Granjas | 2052 | 07:09:10 | No | 22:29:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2053 - Escarcega Morelos | 2053 | 07:00:39 | No | 22:25:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2054 - Plan Chac | 2054 | Sin dato | Sin dato | 22:29:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2055 - Dzilbachen | 2055 | 21:50:54 | No | 22:53:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:12:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2059 - Calkini 4 | 2059 | 06:47:07 | Si | 22:15:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2060 - Calkini 5 | 2060 | 06:54:38 | Si | 22:50:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2061 - Fidel Velazquez | 2061 | 21:57:54 | No | 22:32:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2062 - Kanisté | 2062 | 06:58:30 | Si | 21:33:02 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 2063 - Montecristo | 2063 | 07:04:13 | No | 22:50:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2064 - Tomas Aznar | 2064 | 22:01:03 | No | 22:28:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2065 - Pomuch 2 | 2065 | 06:59:01 | Si | 22:48:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2066 - Isla Aguada | 2066 | 06:55:24 | Si | 22:30:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2067 - Candelaria 3 | 2067 | 07:08:40 | No | 22:12:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:20:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2069 - Hopelchen 3 | 2069 | 06:57:24 | Si | 22:18:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2070 - Minas(1) | 2070 | 06:58:34 | Si | 22:17:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2072 - Xpujil 2 | 2072 | 06:44:11 | Si | 22:50:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2074 - Bellavista | 2074 | 06:50:26 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-30 | 2076 - Ejido Carrillo Puerto | 2076 | 06:29:41 | Si | 22:14:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2077 - Campeche Siglo XXI | 2077 | 06:39:38 | Si | 22:17:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:14:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2079 - Bonfil | 2079 | Sin dato | Sin dato | 22:08:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2080 - Ramon Espinola | 2080 | 14:54:07 | No | 22:41:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2081 - Edzna | 2081 | 06:59:50 | Si | 22:39:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2082 - Av. Periferia | 2082 | 07:01:34 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-30 | 2084 - Holpelchen 4 | 2084 | 07:04:30 | No | 22:54:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 2085 - Escarcega 7 | 2085 | 06:57:00 | Si | 22:11:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2086 - Champoton 6 | 2086 | Sin dato | Sin dato | 22:27:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:15:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 2088 - Calkini 6 | 2088 | 06:54:19 | Si | 22:19:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2089 - Escarcega 8 | 2089 | 06:58:24 | Si | 22:17:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2090 - Calkini 7 | 2090 | 06:46:05 | Si | 22:33:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2091 - Hecelchakan 2 | 2091 | 06:52:00 | Si | 22:32:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2092 - Lerma | 2092 | 06:34:55 | Si | 22:17:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2093 - Tenabo 2 | 2093 | 06:56:35 | Si | 22:31:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2095 - Champoton 8 | 2095 | 06:58:35 | Si | 22:23:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 2096 - Escarcega 10 | 2096 | 06:57:17 | Si | 22:23:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 3005 - Cancun Niños Heroes | 3005 | 05:43:20 | Si | 21:17:12 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 3008 - Playa del Carmen 2 | 3008 | 06:00:21 | Si | 21:09:42 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:25:17 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:06:13 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3040 - Kantunilkin | 3040 | 05:48:43 | Si | 21:47:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:35:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:13:44 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:34:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:32:50 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:22:13 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3111 - Nva. Cozumel 1 | 3111 | 06:03:28 | Si | 21:15:49 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 3113 - Playa Villas del Sol | 3113 | 05:52:51 | Si | 22:07:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:23:56 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3124 - Bacalar Mercado | 3124 | 05:49:28 | Si | 21:21:05 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:24:49 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:32:01 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 3167 - Macarena Tulum | 3167 | 21:00:59 | No | 21:41:11 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 3168 - Macarena Chiquila | 3168 | 06:05:17 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-30 | 3502 - BB Bacalar | 3502 | 21:01:30 | No | 21:24:16 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:07:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 5002 - Tenosique Centro | 5002 | 06:59:21 | Si | 22:11:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 5003 - Emiliano Zapata | 5003 | 07:04:34 | No | 22:24:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 5004 - Tab. Balancan | 5004 | 07:07:10 | No | 22:08:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 5010 - Ciudad Pemex | 5010 | 07:10:08 | No | 22:02:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 6001 - Chiapas Palenque 1 | 6001 | 06:59:56 | Si | 20:09:17 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 6003 - Chiapas Comitan 1 | 6003 | 07:00:28 | No | 21:36:14 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 6004 - Villaflores | 6004 | 07:28:06 | No | 21:26:50 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:08:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 6006 - Chiapas Comitan 2 | 6006 | 07:11:38 | No | 21:26:07 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 6007 - Chiapas Ocozocoautla | 6007 | 06:51:55 | Si | 23:22:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-30 | 6008 - Chiapas Teopisca | 6008 | 07:04:03 | No | 22:59:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 23:48:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 6011 - Venustiano Carranza | 6011 | 07:00:46 | No | 21:36:35 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:10:08 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 6014 - Tuxtla Santa María | 6014 | 06:55:33 | Si | 21:12:11 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-30 | 6015 - Tuxtla San José | 6015 | 07:18:44 | No | 21:11:18 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 6016 - Alcala | 6016 | 07:15:52 | No | 21:20:50 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:16:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:43:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-30 | 6020 - Colon | 6020 | 07:03:02 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-30 | 6021 - Niño de Atocha | 6021 | 07:00:43 | No | 21:09:40 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 6022 - Bonampak | 6022 | 07:00:53 | No | 21:10:41 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-30 | 6024 - Chiapas Catazaja | 6024 | 07:13:17 | No | 22:49:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 6026 - Tuxtla Patria Nueva | 6026 | 07:03:05 | No | 23:54:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-30 | 6028 - Comitan Las Flores | 6028 | 07:05:51 | No | 21:32:38 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:41:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 1025 - Uman | 1025 | 07:07:49 | No | 22:54:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1033 - Maxcanu | 1033 | 07:01:22 | No | 22:22:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1037 - Visente Solís | 1037 | 06:43:54 | Si | 22:44:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 1068 - Chemax | 1068 | 06:59:46 | Si | 23:16:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 1080 50 sur | Sin dato | 06:59:09 | Si | 22:14:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 1082 - Mulchchen | 1082 | 06:51:08 | Si | 22:22:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 1110 - Miguel Hidalgo | 1110 | 06:55:12 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-31 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:11:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 1116 - Seye | 1116 | 07:03:19 | No | 22:50:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1120 - Fco Montejo 3 | 1120 | 07:02:49 | No | 22:11:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 23:15:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 1215 - Paseos De Opichen | 1215 | 07:04:12 | No | 22:18:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1236 - Boulevards de Oriente | 1236 | 07:04:54 | No | 22:36:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1244 - Gran Santa Fe | 1244 | 07:11:20 | No | 22:18:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1248 - Real Montejo | 1248 | 07:04:36 | No | 22:10:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1258 - Mérida Pedro Infante | 1258 | 07:13:30 | No | 22:13:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1261 - Conkal 1 | 1261 | 07:01:37 | No | 22:05:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1269 - San Marcos Sustentable | 1269 | 06:50:51 | Si | 22:29:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 1279 - Cri Cri | 1279 | 06:56:38 | Si | 22:18:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:11:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 1282 - Tizimin 6 | 1282 | 10:02:14 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-31 | 1292 - Cuzamar | 1292 | 06:58:20 | Si | 22:11:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 1298 - Muna 2 | 1298 | Sin dato | Sin dato | 22:21:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:57:16 | Si | 22:36:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:14:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:17:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 1318 CHOCHOLA | Sin dato | 07:02:31 | No | 22:11:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 1319 - Macarena Petronila | 1319 | 06:59:03 | Si | 23:04:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:19:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:02:51 | No | 22:14:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2001 - Campeche 16 | 2001 | 07:00:13 | No | 22:07:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2002 - Campeche Mercado | 2002 | 05:57:31 | Si | 21:20:28 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 2003 - Champotón | 2003 | 06:01:44 | Si | 21:19:42 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 2004 - CAM Santa Ana | 2004 | 06:24:08 | Si | 22:28:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:39:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2008 - Escarsega | 2008 | 06:49:32 | Si | 22:17:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:03:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2011 - Hopelchen | 2011 | Sin dato | Sin dato | 22:13:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2012 - Escarcega 2 | 2012 | 06:55:36 | Si | 22:57:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2013 - Seyba Playa | 2013 | 07:01:21 | No | 22:39:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2014 - Kala | 2014 | 06:47:02 | Si | 22:32:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2016 - Carmen Tecolutla | 2016 | 07:04:30 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-31 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:48:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:09:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2019 - Champotón 2 | 2019 | 06:29:36 | Si | 22:19:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:09:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2021 - Campeche Candelaria | 2021 | 07:06:31 | No | 22:24:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:46:28 | Si | 22:38:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:20:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | 12:12:04 | No | 22:14:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:20:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2028 - Campeche Samula | 2028 | 06:56:03 | Si | 22:37:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2029 - Palma Real | 2029 | 06:56:55 | Si | 22:20:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2030 - CAM San Antonio | 2030 | 07:01:14 | No | 22:16:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2032 - Hopelchen 2 | 2032 | 06:51:27 | Si | 22:16:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2034 - Calkini 2 | 2034 | 06:58:47 | Si | 22:35:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2035 - Pomuch | 2035 | 07:06:11 | No | 22:22:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:14:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2037 - Tenabo | 2037 | 06:49:57 | Si | 22:24:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2038 - Calkini Mercado | 2038 | 06:31:31 | Si | 22:20:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2039 - Xpujil | 2039 | 06:51:51 | Si | 22:26:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:18:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2041 - Sabancuy | 2041 | 07:00:18 | No | 22:10:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2042 - Palizada | 2042 | 07:09:32 | No | 22:28:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2043 - Nunkini | 2043 | 06:55:29 | Si | 22:21:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:17:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2045 - Champoton 5 | 2045 | 07:00:42 | No | 22:19:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2046 - El Polvorín | 2046 | 06:57:30 | Si | 22:34:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2047 - China | 2047 | 06:58:49 | Si | 22:44:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2048 - Campeche Centro | 2048 | 06:57:25 | Si | 21:52:39 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 2049 - Becal | 2049 | Sin dato | Sin dato | 22:36:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:31:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2052 - Campeche Granjas | 2052 | 07:08:08 | No | 22:18:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:19:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2054 - Plan Chac | 2054 | 06:36:06 | Si | 22:36:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2055 - Dzilbachen | 2055 | 21:54:27 | No | 22:24:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:11:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2059 - Calkini 4 | 2059 | 06:51:45 | Si | 22:28:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2060 - Calkini 5 | 2060 | 06:51:38 | Si | 22:43:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2061 - Fidel Velazquez | 2061 | 22:01:39 | No | 22:35:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2062 - Kanisté | 2062 | 06:58:36 | Si | 21:31:35 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 2063 - Montecristo | 2063 | Sin dato | Sin dato | 22:17:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2064 - Tomas Aznar | 2064 | 22:01:13 | No | 22:28:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2065 - Pomuch 2 | 2065 | 07:01:07 | No | 22:22:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2066 - Isla Aguada | 2066 | 06:55:53 | Si | 22:24:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2067 - Candelaria 3 | 2067 | 06:48:26 | Si | 22:21:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:29:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2069 - Hopelchen 3 | 2069 | 06:56:12 | Si | 22:20:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2070 - Minas(1) | 2070 | 06:55:48 | Si | 22:28:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2072 - Xpujil 2 | 2072 | 06:45:01 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-31 | 2074 - Bellavista | 2074 | 06:55:45 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-31 | 2076 - Ejido Carrillo Puerto | 2076 | Sin dato | Sin dato | 22:12:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2077 - Campeche Siglo XXI | 2077 | 06:43:57 | Si | 22:22:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:12:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2079 - Bonfil | 2079 | 06:55:59 | Si | 22:16:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2080 - Ramon Espinola | 2080 | 06:58:24 | Si | 22:44:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2081 - Edzna | 2081 | 07:00:18 | No | 22:34:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 2082 - Av. Periferia | 2082 | 07:05:50 | No | 02:54:26 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 2084 - Holpelchen 4 | 2084 | 07:04:47 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-31 | 2085 - Escarcega 7 | 2085 | 07:05:33 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-31 | 2086 - Champoton 6 | 2086 | 06:58:24 | Si | 22:24:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:16:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 2088 - Calkini 6 | 2088 | 06:54:45 | Si | 22:30:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2089 - Escarcega 8 | 2089 | 06:53:21 | Si | 22:13:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2090 - Calkini 7 | 2090 | 06:46:45 | Si | 22:32:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2091 - Hecelchakan 2 | 2091 | 06:49:48 | Si | 22:27:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2092 - Lerma | 2092 | 06:40:21 | Si | 22:22:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2093 - Tenabo 2 | 2093 | 06:59:28 | Si | 22:30:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2095 - Champoton 8 | 2095 | 06:50:34 | Si | 22:23:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 2096 - Escarcega 10 | 2096 | 07:04:38 | No | 22:13:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 3005 - Cancun Niños Heroes | 3005 | 05:47:15 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-31 | 3008 - Playa del Carmen 2 | 3008 | 05:52:58 | Si | 21:07:06 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 3013 - QROO Felipe Carrillo Puerto | 3013 | 06:04:38 | Si | 21:29:26 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:14:31 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 3040 - Kantunilkin | 3040 | 05:47:01 | Si | 21:41:33 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:31:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:20:03 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:11:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:31:10 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:30:11 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 3111 - Nva. Cozumel 1 | 3111 | 06:01:34 | Si | 21:24:51 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 3113 - Playa Villas del Sol | 3113 | 05:53:31 | Si | 22:07:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:17:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 3124 - Bacalar Mercado | 3124 | 05:56:24 | Si | 21:19:59 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:18:16 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:34:14 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 3167 - Macarena Tulum | 3167 | 05:47:01 | Si | 21:40:08 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 3168 - Macarena Chiquila | 3168 | 06:00:42 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-03-31 | 3502 - BB Bacalar | 3502 | 21:32:57 | No | 21:34:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:04:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 5002 - Tenosique Centro | 5002 | 07:06:26 | No | 22:11:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 5003 - Emiliano Zapata | 5003 | 07:02:20 | No | 22:26:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 5004 - Tab. Balancan | 5004 | 07:03:06 | No | 22:05:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 5010 - Ciudad Pemex | 5010 | 07:09:38 | No | 22:02:58 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 6001 - Chiapas Palenque 1 | 6001 | 07:03:31 | No | 20:07:29 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 6003 - Chiapas Comitan 1 | 6003 | 07:05:14 | No | 21:31:16 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 21:38:54 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:05:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 6006 - Chiapas Comitan 2 | 6006 | 07:13:32 | No | 21:27:50 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 6007 - Chiapas Ocozocoautla | 6007 | 06:50:34 | Si | 21:24:06 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 6008 - Chiapas Teopisca | 6008 | 07:02:36 | No | 21:16:34 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:21:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:49:28 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:03:19 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 6014 - Tuxtla Santa María | 6014 | 06:59:34 | Si | 21:08:11 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-03-31 | 6015 - Tuxtla San José | 6015 | 07:16:42 | No | 22:08:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-03-31 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:15:16 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:01:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:31:38 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 6020 - Colon | 6020 | 20:53:38 | No | 21:09:28 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 6021 - Niño de Atocha | 6021 | 06:59:54 | Si | 23:51:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-03-31 | 6022 - Bonampak | 6022 | 07:04:10 | No | 21:06:40 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:53:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-03-31 | 6026 - Tuxtla Patria Nueva | 6026 | 07:09:11 | No | 21:03:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-03-31 | 6028 - Comitan Las Flores | 6028 | 07:05:03 | No | 21:44:24 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-01 | 1025 - Uman | 1025 | 07:07:33 | No | 22:30:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1033 - Maxcanu | 1033 | 06:53:39 | Si | 22:31:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 1037 - Visente Solís | 1037 | 06:43:59 | Si | 22:48:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 1068 - Chemax | 1068 | 07:09:20 | No | 22:19:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1080 50 sur | Sin dato | 07:00:37 | No | 22:26:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1082 - Mulchchen | 1082 | 06:52:15 | Si | 22:17:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 1110 - Miguel Hidalgo | 1110 | 06:55:08 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-01 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:25:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 1116 - Seye | 1116 | 07:04:38 | No | 22:42:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1120 - Fco Montejo 3 | 1120 | 07:01:54 | No | 22:20:57 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:18:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 1215 - Paseos De Opichen | 1215 | 07:04:42 | No | 22:23:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1236 - Boulevards de Oriente | 1236 | 07:11:36 | No | 22:28:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1244 - Gran Santa Fe | 1244 | 07:10:44 | No | 22:31:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1248 - Real Montejo | 1248 | 07:07:11 | No | 22:08:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1258 - Mérida Pedro Infante | 1258 | 06:58:26 | Si | 22:09:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 1261 - Conkal 1 | 1261 | 06:51:22 | Si | 22:04:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 1269 - San Marcos Sustentable | 1269 | 06:55:17 | Si | 22:27:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 1279 - Cri Cri | 1279 | 07:21:55 | No | 22:08:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:10:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 1292 - Cuzamar | 1292 | 07:00:57 | No | 22:03:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1298 - Muna 2 | 1298 | 07:01:37 | No | 22:18:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:56:34 | Si | 22:24:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:11:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:19:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 1318 CHOCHOLA | Sin dato | 07:01:13 | No | 22:15:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1319 - Macarena Petronila | 1319 | 07:01:38 | No | 22:52:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:12:12 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:05:38 | No | 22:05:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2001 - Campeche 16 | 2001 | 06:54:58 | Si | 22:08:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2002 - Campeche Mercado | 2002 | 05:56:38 | Si | 21:17:15 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 2003 - Champotón | 2003 | 06:02:09 | Si | 21:13:23 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 2004 - CAM Santa Ana | 2004 | 06:33:07 | Si | 22:29:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:12:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2008 - Escarsega | 2008 | 06:56:47 | Si | 22:15:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:01:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2011 - Hopelchen | 2011 | 06:59:27 | Si | 23:37:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2013 - Seyba Playa | 2013 | 06:59:55 | Si | 22:35:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2014 - Kala | 2014 | 06:57:08 | Si | 22:42:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2016 - Carmen Tecolutla | 2016 | 07:01:04 | No | 22:18:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:33:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2018 - Av. Central | 2018 | 07:00:46 | No | 22:05:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2019 - Champotón 2 | 2019 | 06:36:28 | Si | 22:17:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:12:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2021 - Campeche Candelaria | 2021 | 07:01:22 | No | 22:29:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2023 - Campeche Av. Lopez Mateos | 2023 | 07:20:08 | No | 22:21:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:30:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:12:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:37:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2028 - Campeche Samula | 2028 | 07:12:42 | No | 22:31:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2029 - Palma Real | 2029 | 07:00:43 | No | 22:14:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2030 - CAM San Antonio | 2030 | 06:59:49 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-01 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:17:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2032 - Hopelchen 2 | 2032 | 06:50:11 | Si | 22:48:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:26:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2034 - Calkini 2 | 2034 | 06:59:30 | Si | 22:33:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2035 - Pomuch | 2035 | Sin dato | Sin dato | 22:16:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:19:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2037 - Tenabo | 2037 | 06:54:03 | Si | 22:12:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2038 - Calkini Mercado | 2038 | 06:29:12 | Si | 22:12:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2039 - Xpujil | 2039 | 06:50:00 | Si | 22:35:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:22:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:16:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2042 - Palizada | 2042 | 08:07:26 | No | 22:17:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2043 - Nunkini | 2043 | 06:56:10 | Si | 22:31:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:12:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2045 - Champoton 5 | 2045 | Sin dato | Sin dato | 22:13:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2046 - El Polvorín | 2046 | 06:55:42 | Si | 22:35:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2047 - China | 2047 | 07:02:14 | No | 22:47:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2048 - Campeche Centro | 2048 | 06:54:17 | Si | 21:59:31 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 2049 - Becal | 2049 | 07:01:18 | No | 22:21:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2051 - Campeche Morelos | 2051 | 06:46:09 | Si | 22:20:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2052 - Campeche Granjas | 2052 | 06:59:13 | Si | 22:21:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:32:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2054 - Plan Chac | 2054 | 21:58:55 | No | 22:31:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2055 - Dzilbachen | 2055 | 21:59:44 | No | 22:46:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:27:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2059 - Calkini 4 | 2059 | 06:43:18 | Si | 22:15:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2060 - Calkini 5 | 2060 | 06:46:41 | Si | 22:28:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2061 - Fidel Velazquez | 2061 | 22:00:37 | No | 22:33:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2062 - Kanisté | 2062 | 06:57:33 | Si | 21:41:01 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 2063 - Montecristo | 2063 | 06:49:57 | Si | 22:24:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2064 - Tomas Aznar | 2064 | 22:04:55 | No | 22:32:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2065 - Pomuch 2 | 2065 | 07:02:48 | No | 22:30:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2066 - Isla Aguada | 2066 | 06:59:41 | Si | 22:20:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2067 - Candelaria 3 | 2067 | 06:54:59 | Si | 22:12:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:25:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2069 - Hopelchen 3 | 2069 | 06:58:59 | Si | 22:23:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2070 - Minas(1) | 2070 | 06:42:20 | Si | 22:29:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2072 - Xpujil 2 | 2072 | 06:44:56 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-01 | 2074 - Bellavista | 2074 | 06:54:53 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-01 | 2076 - Ejido Carrillo Puerto | 2076 | 06:28:01 | Si | 22:12:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2077 - Campeche Siglo XXI | 2077 | Sin dato | Sin dato | 22:24:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:28:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2079 - Bonfil | 2079 | Sin dato | Sin dato | 22:16:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2080 - Ramon Espinola | 2080 | 06:58:39 | Si | 22:27:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2081 - Edzna | 2081 | 06:58:53 | Si | 22:37:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2082 - Av. Periferia | 2082 | 07:00:53 | No | 22:11:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2084 - Holpelchen 4 | 2084 | 07:04:16 | No | 22:34:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2085 - Escarcega 7 | 2085 | 06:58:37 | Si | 22:12:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2086 - Champoton 6 | 2086 | 06:51:34 | Si | 22:32:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:13:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2088 - Calkini 6 | 2088 | 06:52:16 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-01 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:13:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 2090 - Calkini 7 | 2090 | 06:49:19 | Si | 22:40:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2091 - Hecelchakan 2 | 2091 | 07:02:35 | No | 22:38:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 2092 - Lerma | 2092 | 06:32:44 | Si | 22:17:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2093 - Tenabo 2 | 2093 | 06:59:28 | Si | 22:31:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2095 - Champoton 8 | 2095 | 06:59:23 | Si | 22:14:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 2096 - Escarcega 10 | 2096 | 07:05:31 | No | 22:25:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 3005 - Cancun Niños Heroes | 3005 | 05:51:24 | Si | 21:11:38 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 3008 - Playa del Carmen 2 | 3008 | 05:55:03 | Si | 21:02:42 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:31:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:04:18 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3040 - Kantunilkin | 3040 | 05:45:44 | Si | 21:45:08 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:43:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:12:39 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:09:34 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:21:00 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:28:24 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:16:31 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3113 - Playa Villas del Sol | 3113 | 05:56:06 | Si | 22:07:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 05:58:59 | Si | 21:28:05 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 3124 - Bacalar Mercado | 3124 | 05:58:20 | Si | 21:50:53 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:13:43 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:40:22 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 22:00:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 3502 - BB Bacalar | 3502 | 21:28:58 | No | 21:28:55 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-01 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:12:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 5002 - Tenosique Centro | 5002 | 07:04:10 | No | 22:07:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 5003 - Emiliano Zapata | 5003 | 07:08:56 | No | 22:30:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 5004 - Tab. Balancan | 5004 | 06:55:24 | Si | 22:08:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 5010 - Ciudad Pemex | 5010 | 07:13:51 | No | 22:02:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 6001 - Chiapas Palenque 1 | 6001 | 07:01:45 | No | 20:09:21 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-01 | 6003 - Chiapas Comitan 1 | 6003 | 06:58:53 | Si | 21:32:42 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 21:30:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:05:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 6006 - Chiapas Comitan 2 | 6006 | 07:19:34 | No | 21:21:33 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-01 | 6007 - Chiapas Ocozocoautla | 6007 | 06:58:01 | Si | 22:17:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-01 | 6008 - Chiapas Teopisca | 6008 | 07:02:27 | No | 21:23:49 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-01 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:21:46 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:40:56 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:16:33 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 6014 - Tuxtla Santa María | 6014 | 06:58:44 | Si | 21:18:04 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-01 | 6015 - Tuxtla San José | 6015 | 07:31:48 | No | 22:08:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:28:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-01 | 6019 - Venustiano Carranza | 6019 | 07:08:32 | No | 21:41:20 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-01 | 6020 - Colon | 6020 | 07:02:47 | No | 21:10:58 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-01 | 6021 - Niño de Atocha | 6021 | 07:01:28 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-01 | 6022 - Bonampak | 6022 | 07:07:34 | No | 21:08:18 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-01 | 6024 - Chiapas Catazaja | 6024 | 07:28:52 | No | 22:37:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-01 | 6026 - Tuxtla Patria Nueva | 6026 | 07:13:14 | No | 21:16:00 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-01 | 6028 - Comitan Las Flores | 6028 | 07:05:39 | No | 21:38:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 02:24:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 1025 - Uman | 1025 | 07:11:30 | No | 23:36:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1033 - Maxcanu | 1033 | 06:55:51 | Si | 22:29:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 1037 - Visente Solís | 1037 | 06:41:52 | Si | 22:46:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 1068 - Chemax | 1068 | 07:02:59 | No | 23:12:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1080 50 sur | Sin dato | 07:00:46 | No | 22:15:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1082 - Mulchchen | 1082 | 06:58:04 | Si | 22:18:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 1110 - Miguel Hidalgo | 1110 | 07:08:41 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-02 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:14:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 1116 - Seye | 1116 | 07:10:51 | No | 22:13:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1120 - Fco Montejo 3 | 1120 | 07:02:25 | No | 22:21:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:12:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 1215 - Paseos De Opichen | 1215 | 07:02:50 | No | 22:16:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:38:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 1244 - Gran Santa Fe | 1244 | 07:09:58 | No | 22:11:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1248 - Real Montejo | 1248 | 07:11:27 | No | 22:05:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1258 - Mérida Pedro Infante | 1258 | 06:56:53 | Si | 22:10:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 1261 - Conkal 1 | 1261 | 07:03:54 | No | 22:04:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1269 - San Marcos Sustentable | 1269 | 06:54:43 | Si | 22:34:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 1279 - Cri Cri | 1279 | 07:01:13 | No | 22:11:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:13:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 1282 - Tizimin 6 | 1282 | 07:40:35 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-02 | 1292 - Cuzamar | 1292 | 06:59:59 | Si | 22:08:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 1298 - Muna 2 | 1298 | 07:01:43 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-02 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:55:22 | Si | 22:22:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:10:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:19:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 1318 CHOCHOLA | Sin dato | 06:52:41 | Si | 22:13:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 1319 - Macarena Petronila | 1319 | 07:00:25 | No | 22:53:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:10:42 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:49 | No | 22:07:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2001 - Campeche 16 | 2001 | 07:01:37 | No | 22:07:48 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2002 - Campeche Mercado | 2002 | 05:58:29 | Si | 21:33:55 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 2003 - Champotón | 2003 | 05:57:56 | Si | 21:14:10 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 2004 - CAM Santa Ana | 2004 | 06:25:01 | Si | 22:36:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:22:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2008 - Escarsega | 2008 | 06:50:26 | Si | 22:18:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:50:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2011 - Hopelchen | 2011 | 07:00:11 | No | 22:21:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:31:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2013 - Seyba Playa | 2013 | 06:56:57 | Si | 22:26:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2014 - Kala | 2014 | 07:03:48 | No | 22:13:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2016 - Carmen Tecolutla | 2016 | 06:57:00 | Si | 22:19:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:44:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2018 - Av. Central | 2018 | 06:58:25 | Si | 22:09:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2019 - Champotón 2 | 2019 | 06:48:30 | Si | 22:27:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2020 - Escarcega 3 | 2020 | 06:52:25 | Si | 22:15:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2021 - Campeche Candelaria | 2021 | 07:02:04 | No | 22:25:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:50:11 | Si | 22:31:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:22:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:10:23 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:22:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2028 - Campeche Samula | 2028 | 06:54:04 | Si | 22:32:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2029 - Palma Real | 2029 | 06:55:59 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-02 | 2030 - CAM San Antonio | 2030 | 07:01:45 | No | 22:24:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:26:23 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2032 - Hopelchen 2 | 2032 | 06:51:21 | Si | 22:26:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:30:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2034 - Calkini 2 | 2034 | 06:59:35 | Si | 22:32:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2035 - Pomuch | 2035 | 07:05:41 | No | 23:04:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:09:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2037 - Tenabo | 2037 | 06:54:04 | Si | 22:06:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2038 - Calkini Mercado | 2038 | 06:46:36 | Si | 22:13:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2039 - Xpujil | 2039 | 06:51:29 | Si | 22:12:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2041 - Sabancuy | 2041 | 07:02:37 | No | 22:16:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2042 - Palizada | 2042 | 06:57:11 | Si | 22:30:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2043 - Nunkini | 2043 | 06:57:31 | Si | 22:18:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:16:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2045 - Champoton 5 | 2045 | 06:58:45 | Si | 22:17:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2046 - El Polvorín | 2046 | 06:59:05 | Si | 22:26:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2047 - China | 2047 | 07:06:25 | No | 22:22:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2048 - Campeche Centro | 2048 | 06:58:42 | Si | 21:41:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 2049 - Becal | 2049 | 06:58:44 | Si | 22:25:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:11:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2052 - Campeche Granjas | 2052 | 07:08:29 | No | 22:16:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:22:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2054 - Plan Chac | 2054 | 21:58:24 | No | 22:40:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2055 - Dzilbachen | 2055 | 21:54:06 | No | 22:38:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:10:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2059 - Calkini 4 | 2059 | 06:49:52 | Si | 22:26:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2060 - Calkini 5 | 2060 | 06:55:04 | Si | 22:43:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2061 - Fidel Velazquez | 2061 | 21:59:26 | No | 22:33:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2062 - Kanisté | 2062 | 06:58:39 | Si | 21:31:34 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 2063 - Montecristo | 2063 | 06:55:40 | Si | 22:13:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2064 - Tomas Aznar | 2064 | 22:01:11 | No | 22:30:57 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2065 - Pomuch 2 | 2065 | 06:59:35 | Si | 23:04:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2066 - Isla Aguada | 2066 | 06:58:12 | Si | 22:29:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2067 - Candelaria 3 | 2067 | 07:05:05 | No | 22:14:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:25:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2069 - Hopelchen 3 | 2069 | 06:57:32 | Si | 22:18:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2070 - Minas(1) | 2070 | 06:41:59 | Si | 22:15:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2072 - Xpujil 2 | 2072 | 06:49:26 | Si | 23:40:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2074 - Bellavista | 2074 | 06:51:00 | Si | 22:20:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2076 - Ejido Carrillo Puerto | 2076 | 06:34:52 | Si | 22:16:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2077 - Campeche Siglo XXI | 2077 | 06:31:10 | Si | 22:23:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:14:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2080 - Ramon Espinola | 2080 | 06:53:27 | Si | 22:23:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2081 - Edzna | 2081 | 07:07:02 | No | 22:43:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2082 - Av. Periferia | 2082 | 07:07:20 | No | 22:16:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2084 - Holpelchen 4 | 2084 | 07:04:03 | No | 22:28:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 2085 - Escarcega 7 | 2085 | 06:56:58 | Si | 22:15:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2086 - Champoton 6 | 2086 | 06:52:29 | Si | 22:20:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:11:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2088 - Calkini 6 | 2088 | 06:52:11 | Si | 22:19:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:13:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 2090 - Calkini 7 | 2090 | 06:43:53 | Si | 22:26:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2091 - Hecelchakan 2 | 2091 | 06:55:19 | Si | 22:26:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2092 - Lerma | 2092 | 06:31:25 | Si | 22:20:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2093 - Tenabo 2 | 2093 | 06:59:03 | Si | 23:05:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 2095 - Champoton 8 | 2095 | 06:56:05 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-02 | 2096 - Escarcega 10 | 2096 | 07:01:01 | No | 22:15:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 3005 - Cancun Niños Heroes | 3005 | 05:30:25 | Si | 21:12:25 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 3008 - Playa del Carmen 2 | 3008 | 05:59:42 | Si | 21:01:59 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 3013 - QROO Felipe Carrillo Puerto | 3013 | 06:00:26 | Si | 21:23:16 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:14:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 3040 - Kantunilkin | 3040 | 05:46:16 | Si | 21:38:20 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:14:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:21:56 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:09:24 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:31:18 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:26:42 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:14:01 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 3113 - Playa Villas del Sol | 3113 | 05:51:23 | Si | 22:41:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 05:57:07 | Si | 21:29:21 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 3124 - Bacalar Mercado | 3124 | 05:57:12 | Si | 21:42:44 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:15:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:41:01 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 3167 - Macarena Tulum | 3167 | 05:44:44 | Si | 21:45:14 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 3502 - BB Bacalar | 3502 | 21:00:54 | No | 21:56:36 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:14:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 5002 - Tenosique Centro | 5002 | 06:57:11 | Si | 22:35:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-02 | 5003 - Emiliano Zapata | 5003 | 07:09:45 | No | 22:26:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 5004 - Tab. Balancan | 5004 | 07:05:54 | No | 22:08:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 5010 - Ciudad Pemex | 5010 | 07:11:57 | No | 21:53:02 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6001 - Chiapas Palenque 1 | 6001 | 07:04:17 | No | 20:05:19 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6003 - Chiapas Comitan 1 | 6003 | 07:07:01 | No | 23:40:29 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 6004 - Villaflores | 6004 | 07:09:50 | No | 21:27:23 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:12:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 6006 - Chiapas Comitan 2 | 6006 | 07:14:14 | No | 23:39:57 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 6007 - Chiapas Ocozocoautla | 6007 | 07:01:56 | No | 21:20:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6008 - Chiapas Teopisca | 6008 | 07:00:34 | No | 21:23:44 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:17:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:37:18 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:05:54 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 6014 - Tuxtla Santa María | 6014 | 06:59:57 | Si | 21:11:32 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-02 | 6015 - Tuxtla San José | 6015 | 07:18:54 | No | 21:17:36 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6016 - Alcala | 6016 | 07:16:28 | No | 21:39:53 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:05:08 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:36:29 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-02 | 6020 - Colon | 6020 | 07:14:51 | No | 21:03:42 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6021 - Niño de Atocha | 6021 | 07:02:35 | No | 21:14:55 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6022 - Bonampak | 6022 | 07:05:51 | No | 21:17:20 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6024 - Chiapas Catazaja | 6024 | 07:12:14 | No | 22:47:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-02 | 6026 - Tuxtla Patria Nueva | 6026 | 07:03:25 | No | 21:10:41 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-02 | 6028 - Comitan Las Flores | 6028 | 07:07:54 | No | 21:32:39 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:43:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 1025 - Uman | 1025 | 07:05:11 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-03 | 1033 - Maxcanu | 1033 | 06:53:58 | Si | 22:22:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 1037 - Visente Solís | 1037 | 06:43:21 | Si | 22:35:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 1068 - Chemax | 1068 | 07:03:57 | No | 22:28:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1080 50 sur | Sin dato | 06:59:49 | Si | 22:17:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 1082 - Mulchchen | 1082 | 06:54:13 | Si | 22:16:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 1110 - Miguel Hidalgo | 1110 | 06:53:53 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-03 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:35:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 1116 - Seye | 1116 | 07:01:02 | No | 22:01:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1120 - Fco Montejo 3 | 1120 | 07:03:13 | No | 22:18:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:32:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 1215 - Paseos De Opichen | 1215 | 07:02:20 | No | 22:21:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1236 - Boulevards de Oriente | 1236 | 07:04:59 | No | 22:23:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1244 - Gran Santa Fe | 1244 | 07:19:59 | No | 22:17:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1248 - Real Montejo | 1248 | 07:20:11 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-03 | 1258 - Mérida Pedro Infante | 1258 | 07:03:31 | No | 22:13:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1261 - Conkal 1 | 1261 | 07:08:35 | No | 22:05:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1269 - San Marcos Sustentable | 1269 | 06:54:23 | Si | 22:28:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 1279 - Cri Cri | 1279 | 06:55:40 | Si | 22:17:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:13:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 1292 - Cuzamar | 1292 | 07:00:14 | No | 22:09:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1298 - Muna 2 | 1298 | 10:18:07 | No | 22:36:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:58:36 | Si | 22:20:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:16:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:13:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 1318 CHOCHOLA | Sin dato | 06:56:42 | Si | 22:15:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 23:02:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:14:36 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:08:39 | No | 22:03:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2001 - Campeche 16 | 2001 | 07:02:02 | No | 22:06:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2002 - Campeche Mercado | 2002 | 05:57:21 | Si | 21:13:10 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-03 | 2003 - Champotón | 2003 | 05:54:18 | Si | 21:11:44 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-03 | 2004 - CAM Santa Ana | 2004 | 06:29:39 | Si | 22:32:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:27:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2008 - Escarsega | 2008 | 06:52:40 | Si | 22:06:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:57:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2011 - Hopelchen | 2011 | 06:59:36 | Si | 22:21:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:41:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2013 - Seyba Playa | 2013 | 07:07:27 | No | 22:25:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2014 - Kala | 2014 | 07:06:18 | No | 22:40:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2016 - Carmen Tecolutla | 2016 | 07:05:31 | No | 23:16:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:40:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:03:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2019 - Champotón 2 | 2019 | 06:47:15 | Si | 22:20:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:17:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2021 - Campeche Candelaria | 2021 | 07:03:10 | No | 22:20:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2023 - Campeche Av. Lopez Mateos | 2023 | 07:57:14 | No | 22:45:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:15:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | 18:08:24 | No | 22:12:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:13:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2028 - Campeche Samula | 2028 | 07:00:57 | No | 22:23:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2029 - Palma Real | 2029 | 06:58:05 | Si | 22:21:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2030 - CAM San Antonio | 2030 | 07:01:19 | No | 22:18:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:16:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2032 - Hopelchen 2 | 2032 | 06:55:11 | Si | 22:29:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:16:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2034 - Calkini 2 | 2034 | 06:58:18 | Si | 22:27:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2035 - Pomuch | 2035 | 06:56:42 | Si | 22:18:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:14:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2037 - Tenabo | 2037 | 06:50:47 | Si | 22:17:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2038 - Calkini Mercado | 2038 | 06:36:10 | Si | 22:21:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2039 - Xpujil | 2039 | 06:44:03 | Si | 22:30:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:43:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2041 - Sabancuy | 2041 | 07:04:41 | No | 23:56:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2042 - Palizada | 2042 | 06:56:22 | Si | 22:28:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2043 - Nunkini | 2043 | 06:56:13 | Si | 22:38:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:14:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2045 - Champoton 5 | 2045 | Sin dato | Sin dato | 22:18:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2046 - El Polvorín | 2046 | 06:55:37 | Si | 22:29:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2047 - China | 2047 | 07:05:23 | No | 22:46:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 22:44:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2049 - Becal | 2049 | 07:01:41 | No | 22:43:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2051 - Campeche Morelos | 2051 | 13:59:28 | No | 22:21:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2052 - Campeche Granjas | 2052 | 07:02:04 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-03 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:30:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2054 - Plan Chac | 2054 | 21:58:20 | No | 22:27:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2055 - Dzilbachen | 2055 | 21:50:26 | No | 22:21:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:07:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2059 - Calkini 4 | 2059 | 07:00:57 | No | 22:21:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2060 - Calkini 5 | 2060 | 06:57:21 | Si | 22:42:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2061 - Fidel Velazquez | 2061 | 21:59:58 | No | 22:29:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2062 - Kanisté | 2062 | 06:57:22 | Si | 21:40:48 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-03 | 2063 - Montecristo | 2063 | 06:57:21 | Si | 22:07:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2064 - Tomas Aznar | 2064 | 22:01:42 | No | 22:28:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2065 - Pomuch 2 | 2065 | 07:01:28 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-03 | 2066 - Isla Aguada | 2066 | 06:58:46 | Si | 22:30:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2067 - Candelaria 3 | 2067 | 06:54:27 | Si | 22:08:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:14:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2069 - Hopelchen 3 | 2069 | 06:58:23 | Si | 22:18:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2070 - Minas(1) | 2070 | 07:05:52 | No | 22:25:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2072 - Xpujil 2 | 2072 | 06:44:28 | Si | 23:41:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2074 - Bellavista | 2074 | 06:56:31 | Si | 22:18:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2076 - Ejido Carrillo Puerto | 2076 | Sin dato | Sin dato | 22:21:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2077 - Campeche Siglo XXI | 2077 | 06:37:08 | Si | 22:21:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:13:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2080 - Ramon Espinola | 2080 | 06:56:41 | Si | 22:35:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2081 - Edzna | 2081 | 07:06:00 | No | 22:33:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2082 - Av. Periferia | 2082 | 07:02:50 | No | 23:09:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2084 - Holpelchen 4 | 2084 | 07:04:01 | No | 23:55:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2085 - Escarcega 7 | 2085 | 06:53:15 | Si | 22:13:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2086 - Champoton 6 | 2086 | Sin dato | Sin dato | 22:13:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:19:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2088 - Calkini 6 | 2088 | 06:57:56 | Si | 22:22:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:17:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 2090 - Calkini 7 | 2090 | 06:53:07 | Si | 22:27:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2091 - Hecelchakan 2 | 2091 | 06:39:55 | Si | 22:10:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2092 - Lerma | 2092 | 06:30:31 | Si | 22:15:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2093 - Tenabo 2 | 2093 | 06:59:46 | Si | 22:28:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 2095 - Champoton 8 | 2095 | 07:04:56 | No | 22:36:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 2096 - Escarcega 10 | 2096 | 06:59:07 | Si | 23:06:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 3005 - Cancun Niños Heroes | 3005 | 05:44:20 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-03 | 3008 - Playa del Carmen 2 | 3008 | 06:00:33 | Si | 20:58:48 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-03 | 3013 - QROO Felipe Carrillo Puerto | 3013 | 06:00:31 | Si | 21:15:57 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-03 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:08:08 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3040 - Kantunilkin | 3040 | 05:47:21 | Si | 21:47:29 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-03 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:23:49 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:05:30 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:10:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:41:55 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:21:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:13:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3113 - Playa Villas del Sol | 3113 | 05:53:08 | Si | 22:53:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-03 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:27:24 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3124 - Bacalar Mercado | 3124 | 05:59:04 | Si | 21:18:51 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-03 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:18:12 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:30:10 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 21:31:56 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 3502 - BB Bacalar | 3502 | 20:59:04 | No | 21:16:08 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:12:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 5002 - Tenosique Centro | 5002 | 07:01:50 | No | 22:10:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 5003 - Emiliano Zapata | 5003 | 07:13:36 | No | 22:07:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 5004 - Tab. Balancan | 5004 | 07:05:29 | No | 22:08:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 5010 - Ciudad Pemex | 5010 | 07:13:16 | No | 21:00:08 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 6001 - Chiapas Palenque 1 | 6001 | 07:00:54 | No | 20:07:42 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 6003 - Chiapas Comitan 1 | 6003 | 07:01:51 | No | 21:33:53 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 21:26:48 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:03:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 6006 - Chiapas Comitan 2 | 6006 | 07:03:37 | No | 22:48:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-03 | 6007 - Chiapas Ocozocoautla | 6007 | 06:58:55 | Si | 21:23:38 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-03 | 6008 - Chiapas Teopisca | 6008 | 06:53:31 | Si | 21:10:31 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-03 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:41:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:08:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 6014 - Tuxtla Santa María | 6014 | 07:06:04 | No | 21:19:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 6015 - Tuxtla San José | 6015 | 07:21:55 | No | 21:14:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:21:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:31:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 6020 - Colon | 6020 | 07:08:22 | No | 21:04:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 6021 - Niño de Atocha | 6021 | 07:07:19 | No | 21:12:33 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 6022 - Bonampak | 6022 | 07:07:03 | No | 21:13:57 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:56:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-03 | 6026 - Tuxtla Patria Nueva | 6026 | 07:12:02 | No | 21:03:30 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-03 | 6028 - Comitan Las Flores | 6028 | 07:07:07 | No | 21:31:41 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:43:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 1025 - Uman | 1025 | 07:26:34 | No | 23:00:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1033 - Maxcanu | 1033 | 06:59:35 | Si | 22:23:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 1037 - Visente Solís | 1037 | 06:38:53 | Si | 22:40:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 1068 - Chemax | 1068 | 07:00:44 | No | 23:20:48 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1080 50 sur | Sin dato | 06:58:42 | Si | 22:07:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 1082 - Mulchchen | 1082 | 07:03:01 | No | 22:23:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1110 - Miguel Hidalgo | 1110 | 06:54:49 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-04 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:16:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 1116 - Seye | 1116 | 07:02:33 | No | 22:28:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1120 - Fco Montejo 3 | 1120 | 07:00:40 | No | 22:17:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1215 - Paseos De Opichen | 1215 | 07:02:58 | No | 22:08:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1236 - Boulevards de Oriente | 1236 | 07:06:39 | No | 22:11:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1244 - Gran Santa Fe | 1244 | 07:13:25 | No | 22:10:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1248 - Real Montejo | 1248 | 07:21:46 | No | 22:12:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:10:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 1261 - Conkal 1 | 1261 | 07:01:46 | No | 22:04:57 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1269 - San Marcos Sustentable | 1269 | 07:00:36 | No | 22:24:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1279 - Cri Cri | 1279 | 07:00:27 | No | 22:07:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:15:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 1292 - Cuzamar | 1292 | 06:53:39 | Si | 22:07:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 1298 - Muna 2 | 1298 | Sin dato | Sin dato | 22:29:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:59:57 | Si | 22:21:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:14:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:21:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 1318 CHOCHOLA | Sin dato | 06:59:45 | Si | 22:11:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 1319 - Macarena Petronila | 1319 | 07:08:22 | No | 22:36:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:09:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:12:06 | No | 22:17:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2001 - Campeche 16 | 2001 | 06:59:24 | Si | 22:06:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2002 - Campeche Mercado | 2002 | 05:56:51 | Si | 21:10:31 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 2003 - Champotón | 2003 | 05:59:45 | Si | 21:18:23 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 2004 - CAM Santa Ana | 2004 | 06:20:42 | Si | 22:59:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:42:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2008 - Escarsega | 2008 | 06:52:00 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-04 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:45:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2011 - Hopelchen | 2011 | 07:00:25 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-04 | 2012 - Escarcega 2 | 2012 | 07:00:24 | No | 22:11:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2013 - Seyba Playa | 2013 | 06:58:06 | Si | 22:24:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2014 - Kala | 2014 | 07:03:06 | No | 22:29:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2016 - Carmen Tecolutla | 2016 | 07:02:34 | No | 22:16:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:46:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:05:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2019 - Champotón 2 | 2019 | 06:37:25 | Si | 22:32:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:12:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2021 - Campeche Candelaria | 2021 | 07:10:25 | No | 22:18:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:47:48 | Si | 22:45:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2024 - Cd. Carmen Mercado | 2024 | 06:59:09 | Si | 22:16:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:09:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:16:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2028 - Campeche Samula | 2028 | 06:49:42 | Si | 22:19:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2029 - Palma Real | 2029 | 06:59:25 | Si | 22:16:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2030 - CAM San Antonio | 2030 | 07:02:54 | No | 22:21:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:19:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2032 - Hopelchen 2 | 2032 | 06:53:18 | Si | 22:26:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:16:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2034 - Calkini 2 | 2034 | 06:58:25 | Si | 22:48:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2035 - Pomuch | 2035 | 10:34:04 | No | 22:12:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:10:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2037 - Tenabo | 2037 | 06:53:41 | Si | 22:12:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2038 - Calkini Mercado | 2038 | 06:30:03 | Si | 23:10:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2039 - Xpujil | 2039 | 06:45:06 | Si | 22:26:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:23:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:12:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2042 - Palizada | 2042 | 07:10:38 | No | 22:28:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2043 - Nunkini | 2043 | 06:58:03 | Si | 22:21:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:11:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2045 - Champoton 5 | 2045 | 06:55:34 | Si | 22:15:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2046 - El Polvorín | 2046 | 06:57:16 | Si | 22:27:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2047 - China | 2047 | 07:01:59 | No | 22:30:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:22:48 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2049 - Becal | 2049 | 07:01:14 | No | 22:41:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2051 - Campeche Morelos | 2051 | 06:56:26 | Si | 22:13:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2052 - Campeche Granjas | 2052 | 07:01:15 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-04 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:18:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2054 - Plan Chac | 2054 | 06:32:19 | Si | 22:30:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2055 - Dzilbachen | 2055 | 21:49:37 | No | 22:23:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:08:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2059 - Calkini 4 | 2059 | 06:21:35 | Si | 22:58:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2060 - Calkini 5 | 2060 | 06:54:04 | Si | 22:50:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2061 - Fidel Velazquez | 2061 | 22:00:06 | No | 22:32:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2062 - Kanisté | 2062 | 06:58:15 | Si | 21:27:59 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 2063 - Montecristo | 2063 | 06:49:13 | Si | 22:08:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2064 - Tomas Aznar | 2064 | 22:03:40 | No | 22:21:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2065 - Pomuch 2 | 2065 | 07:06:52 | No | 22:38:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2066 - Isla Aguada | 2066 | 06:52:14 | Si | 22:27:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2067 - Candelaria 3 | 2067 | 07:02:49 | No | 22:20:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:22:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2069 - Hopelchen 3 | 2069 | 06:58:18 | Si | 22:20:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2070 - Minas(1) | 2070 | 06:35:45 | Si | 22:15:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2072 - Xpujil 2 | 2072 | 06:48:13 | Si | 22:40:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2074 - Bellavista | 2074 | 06:56:08 | Si | 22:19:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2076 - Ejido Carrillo Puerto | 2076 | 06:32:41 | Si | 22:12:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2077 - Campeche Siglo XXI | 2077 | 06:30:39 | Si | 22:23:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:19:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2079 - Bonfil | 2079 | Sin dato | Sin dato | 22:08:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2080 - Ramon Espinola | 2080 | 06:57:54 | Si | 22:38:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2081 - Edzna | 2081 | 07:03:03 | No | 22:43:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2082 - Av. Periferia | 2082 | 07:02:31 | No | 22:14:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2084 - Holpelchen 4 | 2084 | 07:01:43 | No | 22:25:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2085 - Escarcega 7 | 2085 | 15:31:13 | No | 22:22:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 2086 - Champoton 6 | 2086 | 06:57:08 | Si | 22:25:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:08:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2088 - Calkini 6 | 2088 | 06:53:09 | Si | 22:16:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:20:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 2090 - Calkini 7 | 2090 | 06:47:39 | Si | 22:27:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2091 - Hecelchakan 2 | 2091 | 06:55:09 | Si | 22:25:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2092 - Lerma | 2092 | 06:35:54 | Si | 22:13:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2093 - Tenabo 2 | 2093 | 06:57:39 | Si | 22:23:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 2095 - Champoton 8 | 2095 | 06:55:39 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-04 | 2096 - Escarcega 10 | 2096 | 06:59:42 | Si | 22:16:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 3005 - Cancun Niños Heroes | 3005 | 05:51:39 | Si | 21:06:22 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 3008 - Playa del Carmen 2 | 3008 | 06:00:46 | Si | 21:07:35 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:28:11 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 3017 - Playa del Carmen 3 | 3017 | 15:33:09 | No | 21:18:29 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 3040 - Kantunilkin | 3040 | 05:44:36 | Si | 21:28:18 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:29:39 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:09:49 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:13:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:25:31 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:19:45 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 3111 - Nva. Cozumel 1 | 3111 | 06:02:50 | Si | 21:02:04 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 3113 - Playa Villas del Sol | 3113 | 05:54:46 | Si | 21:37:15 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 05:52:43 | Si | 21:16:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 3124 - Bacalar Mercado | 3124 | 05:57:15 | Si | 21:27:15 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 3152 - Kantunilkin 2 | 3152 | 05:58:07 | Si | 21:14:15 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 22:00:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 23:39:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 3502 - BB Bacalar | 3502 | 21:02:25 | No | 21:59:31 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:09:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 5002 - Tenosique Centro | 5002 | 07:00:00 | Si | 22:11:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-04 | 5003 - Emiliano Zapata | 5003 | 07:03:25 | No | 22:05:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 5004 - Tab. Balancan | 5004 | 07:00:58 | No | 22:01:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-04 | 5010 - Ciudad Pemex | 5010 | 07:08:34 | No | 21:49:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6001 - Chiapas Palenque 1 | 6001 | 07:01:12 | No | 20:08:25 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6003 - Chiapas Comitan 1 | 6003 | 07:03:30 | No | 21:32:01 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6004 - Villaflores | 6004 | 13:56:52 | No | 21:11:59 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:08:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 6006 - Chiapas Comitan 2 | 6006 | 07:18:04 | No | 21:15:51 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6007 - Chiapas Ocozocoautla | 6007 | 07:05:27 | No | 21:16:20 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6008 - Chiapas Teopisca | 6008 | 07:03:05 | No | 21:30:09 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 22:54:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:39:47 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:13:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 6014 - Tuxtla Santa María | 6014 | 07:04:36 | No | 21:13:19 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6015 - Tuxtla San José | 6015 | 07:19:39 | No | 21:29:12 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6016 - Alcala | 6016 | 07:11:34 | No | 21:12:55 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:41:25 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 6020 - Colon | 6020 | 07:04:36 | No | 21:02:29 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6021 - Niño de Atocha | 6021 | 07:02:39 | No | 21:12:53 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6022 - Bonampak | 6022 | 07:10:06 | No | 21:09:11 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-04 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:00:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-04 | 6026 - Tuxtla Patria Nueva | 6026 | 06:53:57 | Si | 21:06:03 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-04 | 6028 - Comitan Las Flores | 6028 | 07:04:28 | No | 21:39:48 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:40:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 1025 - Uman | 1025 | 07:03:27 | No | 22:27:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1033 - Maxcanu | 1033 | 06:56:28 | Si | 22:27:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 1037 - Visente Solís | 1037 | 06:54:44 | Si | 22:37:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 1068 - Chemax | 1068 | 07:08:50 | No | 22:25:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1080 50 sur | Sin dato | 07:00:03 | No | 22:33:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1082 - Mulchchen | 1082 | 06:49:04 | Si | 22:26:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 1110 - Miguel Hidalgo | 1110 | 07:16:42 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-05 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:40:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 1116 - Seye | 1116 | 07:03:32 | No | 22:21:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1120 - Fco Montejo 3 | 1120 | 07:02:03 | No | 22:39:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:13:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 1215 - Paseos De Opichen | 1215 | 07:04:20 | No | 22:25:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1236 - Boulevards de Oriente | 1236 | 07:05:35 | No | 22:11:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1244 - Gran Santa Fe | 1244 | 07:05:30 | No | 22:08:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1248 - Real Montejo | 1248 | 07:04:51 | No | 22:10:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1258 - Mérida Pedro Infante | 1258 | 07:00:01 | No | 22:08:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1261 - Conkal 1 | 1261 | 07:05:45 | No | 22:14:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1269 - San Marcos Sustentable | 1269 | 07:01:20 | No | 22:31:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1279 - Cri Cri | 1279 | 06:46:40 | Si | 22:13:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:22:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 1292 - Cuzamar | 1292 | 06:56:36 | Si | 22:07:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 1298 - Muna 2 | 1298 | 06:55:56 | Si | 22:10:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:11:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:16:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 1318 CHOCHOLA | Sin dato | 07:00:09 | No | 22:14:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1319 - Macarena Petronila | 1319 | 07:01:43 | No | 22:09:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 16:14:12 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:05:25 | No | 22:27:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2001 - Campeche 16 | 2001 | 07:02:53 | No | 22:03:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2002 - Campeche Mercado | 2002 | 05:55:11 | Si | 21:14:53 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 2003 - Champotón | 2003 | 05:58:17 | Si | 21:09:39 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 2004 - CAM Santa Ana | 2004 | 06:26:35 | Si | 22:20:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:29:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2008 - Escarsega | 2008 | 06:51:27 | Si | 22:21:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:48:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2011 - Hopelchen | 2011 | 06:58:59 | Si | 00:00:13 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:24:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2013 - Seyba Playa | 2013 | 07:07:58 | No | 22:50:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2014 - Kala | 2014 | 06:51:06 | Si | 22:28:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2016 - Carmen Tecolutla | 2016 | 15:09:23 | No | 22:22:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 23:07:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2018 - Av. Central | 2018 | 06:58:40 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-05 | 2019 - Champotón 2 | 2019 | 06:52:13 | Si | 22:22:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:15:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2021 - Campeche Candelaria | 2021 | 07:03:28 | No | 22:12:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:54:05 | Si | 22:52:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:22:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:10:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:45:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2028 - Campeche Samula | 2028 | 06:51:55 | Si | 22:29:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2029 - Palma Real | 2029 | 07:00:03 | No | 22:18:29 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:21:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:26:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2032 - Hopelchen 2 | 2032 | 06:53:02 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-05 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:21:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2034 - Calkini 2 | 2034 | 06:59:15 | Si | 22:24:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2035 - Pomuch | 2035 | 07:00:01 | No | 22:16:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:08:48 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2037 - Tenabo | 2037 | 06:53:00 | Si | 22:19:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2038 - Calkini Mercado | 2038 | 06:35:55 | Si | 22:27:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2039 - Xpujil | 2039 | 06:41:42 | Si | 23:05:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:42:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:15:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2042 - Palizada | 2042 | 07:09:47 | No | 22:13:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2043 - Nunkini | 2043 | 06:55:24 | Si | 22:21:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:12:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2045 - Champoton 5 | 2045 | 07:01:31 | No | 22:13:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2046 - El Polvorín | 2046 | 06:52:09 | Si | 22:27:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2047 - China | 2047 | Sin dato | Sin dato | 22:26:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:32:49 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2049 - Becal | 2049 | 07:02:46 | No | 22:25:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:27:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2052 - Campeche Granjas | 2052 | 06:58:12 | Si | 22:24:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:20:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2054 - Plan Chac | 2054 | 21:57:31 | No | 22:19:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2055 - Dzilbachen | 2055 | 09:42:40 | No | 22:54:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2057 - Presidentes | 2057 | 21:56:52 | No | 22:10:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2059 - Calkini 4 | 2059 | 06:56:53 | Si | 22:27:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2060 - Calkini 5 | 2060 | 06:55:04 | Si | 23:16:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2061 - Fidel Velazquez | 2061 | 21:59:23 | No | 22:36:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2062 - Kanisté | 2062 | 07:01:14 | No | 21:28:42 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 2063 - Montecristo | 2063 | 06:53:32 | Si | 22:14:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2064 - Tomas Aznar | 2064 | Sin dato | Sin dato | 22:27:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2065 - Pomuch 2 | 2065 | 06:57:14 | Si | 22:36:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2066 - Isla Aguada | 2066 | 06:57:13 | Si | 22:30:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2067 - Candelaria 3 | 2067 | 07:07:07 | No | 22:23:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2068 - Bolonchen | 2068 | 06:52:08 | Si | 22:17:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2069 - Hopelchen 3 | 2069 | 06:48:20 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-05 | 2070 - Minas(1) | 2070 | 06:59:43 | Si | 22:26:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2072 - Xpujil 2 | 2072 | 06:53:27 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-05 | 2074 - Bellavista | 2074 | 06:50:37 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-05 | 2076 - Ejido Carrillo Puerto | 2076 | Sin dato | Sin dato | 22:07:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2077 - Campeche Siglo XXI | 2077 | Sin dato | Sin dato | 22:44:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:14:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2079 - Bonfil | 2079 | 21:56:36 | No | 22:14:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2080 - Ramon Espinola | 2080 | 06:55:39 | Si | 22:20:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2081 - Edzna | 2081 | 07:02:43 | No | 22:39:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2082 - Av. Periferia | 2082 | 07:06:39 | No | 22:11:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2084 - Holpelchen 4 | 2084 | 06:50:59 | Si | 22:39:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2085 - Escarcega 7 | 2085 | 06:56:26 | Si | 22:10:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2086 - Champoton 6 | 2086 | 06:56:03 | Si | 22:28:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:17:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 2088 - Calkini 6 | 2088 | 06:53:22 | Si | 22:17:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2089 - Escarcega 8 | 2089 | 06:59:08 | Si | 22:16:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2090 - Calkini 7 | 2090 | 07:00:22 | No | 22:31:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 2091 - Hecelchakan 2 | 2091 | 06:52:42 | Si | 22:18:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2092 - Lerma | 2092 | 06:55:25 | Si | 22:13:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2093 - Tenabo 2 | 2093 | 06:58:52 | Si | 23:01:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 2095 - Champoton 8 | 2095 | 07:09:56 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-05 | 2096 - Escarcega 10 | 2096 | 07:01:09 | No | 22:16:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 3005 - Cancun Niños Heroes | 3005 | 06:25:25 | Si | 20:05:14 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 3008 - Playa del Carmen 2 | 3008 | 06:07:32 | Si | 20:05:52 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:22:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 20:13:30 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 20:22:16 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:12:56 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 20:13:49 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 3096 - Tulum Pueblo 3 | 3096 | 05:56:09 | Si | 21:12:50 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 20:27:47 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 20:26:01 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:08:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 3113 - Playa Villas del Sol | 3113 | 05:58:51 | Si | 21:13:13 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 21:00:24 | No | 21:22:34 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 3124 - Bacalar Mercado | 3124 | 05:59:33 | Si | 21:12:07 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 3152 - Kantunilkin 2 | 3152 | 05:58:53 | Si | 20:17:52 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 3167 - Macarena Tulum | 3167 | 05:48:29 | Si | 23:34:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 3502 - BB Bacalar | 3502 | 21:25:54 | No | 21:25:51 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:01:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 5002 - Tenosique Centro | 5002 | 06:55:48 | Si | 22:06:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-05 | 5003 - Emiliano Zapata | 5003 | 07:08:51 | No | 22:21:30 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 5004 - Tab. Balancan | 5004 | 07:01:00 | No | 22:01:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-05 | 5010 - Ciudad Pemex | 5010 | 07:16:00 | No | 21:14:51 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6001 - Chiapas Palenque 1 | 6001 | 07:00:52 | No | 17:06:27 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6003 - Chiapas Comitan 1 | 6003 | 07:05:48 | No | 21:31:34 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6004 - Villaflores | 6004 | 14:34:13 | No | 21:18:35 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:02:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 6006 - Chiapas Comitan 2 | 6006 | 07:08:42 | No | 21:19:45 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6007 - Chiapas Ocozocoautla | 6007 | 07:01:23 | No | 21:29:33 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6008 - Chiapas Teopisca | 6008 | 07:01:47 | No | 21:16:16 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:22:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:43:49 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:09:00 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 6014 - Tuxtla Santa María | 6014 | 06:59:52 | Si | 21:13:13 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 6015 - Tuxtla San José | 6015 | 07:22:34 | No | 21:10:26 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6016 - Alcala | 6016 | 07:13:45 | No | 21:28:03 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:08:43 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 6019 - Venustiano Carranza | 6019 | 21:00:01 | No | 21:33:04 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6020 - Colon | 6020 | 07:22:33 | No | 21:12:11 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6021 - Niño de Atocha | 6021 | 06:57:40 | Si | 21:13:23 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-05 | 6022 - Bonampak | 6022 | 07:03:00 | No | 21:08:26 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:10:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-05 | 6026 - Tuxtla Patria Nueva | 6026 | 07:06:10 | No | 21:01:03 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-05 | 6028 - Comitan Las Flores | 6028 | 07:04:27 | No | 21:32:12 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:42:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 1025 - Uman | 1025 | 06:58:43 | Si | 22:34:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1033 - Maxcanu | 1033 | 06:54:28 | Si | 22:33:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1037 - Visente Solís | 1037 | 06:38:33 | Si | 23:44:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1068 - Chemax | 1068 | 07:02:22 | No | 22:31:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 1080 50 sur | Sin dato | 06:52:06 | Si | 22:07:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1082 - Mulchchen | 1082 | 07:01:55 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 1110 - Miguel Hidalgo | 1110 | 07:06:33 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:26:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 1116 - Seye | 1116 | 07:06:59 | No | 22:36:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 1120 - Fco Montejo 3 | 1120 | 07:20:41 | No | 22:22:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:16:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 1215 - Paseos De Opichen | 1215 | 07:03:46 | No | 22:18:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 1236 - Boulevards de Oriente | 1236 | 07:04:22 | No | 22:15:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 1244 - Gran Santa Fe | 1244 | 07:03:30 | No | 22:09:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 1248 - Real Montejo | 1248 | 07:01:29 | No | 22:12:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:15:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 1261 - Conkal 1 | 1261 | 06:59:19 | Si | 22:08:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1269 - San Marcos Sustentable | 1269 | 06:57:04 | Si | 22:44:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1279 - Cri Cri | 1279 | 06:56:16 | Si | 22:12:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:12:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 1282 - Tizimin 6 | 1282 | 06:56:47 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 1292 - Cuzamar | 1292 | 06:58:01 | Si | 22:16:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1298 - Muna 2 | 1298 | 06:56:45 | Si | 22:17:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1305 - Uman Piedra de Agua 3 | 1305 | 14:34:06 | No | 22:20:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:10:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:23:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 1318 CHOCHOLA | Sin dato | 06:59:43 | Si | 22:09:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1319 - Macarena Petronila | 1319 | 06:57:32 | Si | 22:28:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:10:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:17 | No | 22:12:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2001 - Campeche 16 | 2001 | 06:59:44 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 2002 - Campeche Mercado | 2002 | 05:57:45 | Si | 21:19:42 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-06 | 2003 - Champotón | 2003 | 05:57:47 | Si | 21:12:07 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-06 | 2004 - CAM Santa Ana | 2004 | 06:22:50 | Si | 22:42:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:11:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2008 - Escarsega | 2008 | 06:53:55 | Si | 22:20:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:07:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2011 - Hopelchen | 2011 | 11:58:59 | No | 23:12:04 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:21:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2013 - Seyba Playa | 2013 | 06:59:02 | Si | 22:35:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2014 - Kala | 2014 | 06:58:20 | Si | 22:23:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2016 - Carmen Tecolutla | 2016 | 06:59:53 | Si | 22:26:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:37:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:19:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2019 - Champotón 2 | 2019 | 06:48:08 | Si | 22:17:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:12:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2021 - Campeche Candelaria | 2021 | 07:02:40 | No | 22:11:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:46:38 | Si | 23:10:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:15:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:12:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:20:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2028 - Campeche Samula | 2028 | 07:05:58 | No | 22:28:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2029 - Palma Real | 2029 | 07:04:44 | No | 22:29:58 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:23:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2031 - Cd. Carmen Morelos | 2031 | 06:57:44 | Si | 22:18:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2032 - Hopelchen 2 | 2032 | 11:58:51 | No | 22:29:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:13:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2034 - Calkini 2 | 2034 | 06:58:28 | Si | 22:41:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2035 - Pomuch | 2035 | 07:10:19 | No | 22:22:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:12:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2037 - Tenabo | 2037 | 06:44:44 | Si | 22:08:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2038 - Calkini Mercado | 2038 | 06:32:39 | Si | 22:18:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2039 - Xpujil | 2039 | 06:36:29 | Si | 22:47:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:44:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:13:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2042 - Palizada | 2042 | 07:08:06 | No | 22:26:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2043 - Nunkini | 2043 | 06:55:01 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:12:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2045 - Champoton 5 | 2045 | 06:59:24 | Si | 22:14:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2046 - El Polvorín | 2046 | 06:55:37 | Si | 22:36:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2047 - China | 2047 | 07:07:39 | No | 22:33:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:40:37 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2049 - Becal | 2049 | 07:03:15 | No | 22:28:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2051 - Campeche Morelos | 2051 | 06:46:12 | Si | 22:17:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2052 - Campeche Granjas | 2052 | 06:58:19 | Si | 22:15:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:23:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2054 - Plan Chac | 2054 | 06:42:29 | Si | 22:23:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2055 - Dzilbachen | 2055 | 21:59:53 | No | 22:38:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:13:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2059 - Calkini 4 | 2059 | 06:38:49 | Si | 22:38:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2060 - Calkini 5 | 2060 | 06:57:19 | Si | 22:51:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2061 - Fidel Velazquez | 2061 | 21:57:34 | No | 22:43:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2062 - Kanisté | 2062 | 06:57:04 | Si | 21:33:08 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-06 | 2063 - Montecristo | 2063 | 06:54:56 | Si | 22:16:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2064 - Tomas Aznar | 2064 | 22:00:49 | No | 22:31:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2065 - Pomuch 2 | 2065 | 06:59:07 | Si | 22:18:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2066 - Isla Aguada | 2066 | 06:53:41 | Si | 22:34:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2067 - Candelaria 3 | 2067 | 07:09:58 | No | 22:21:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:10:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2069 - Hopelchen 3 | 2069 | 11:58:55 | No | 22:19:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2070 - Minas(1) | 2070 | 07:03:35 | No | 22:24:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2072 - Xpujil 2 | 2072 | 06:46:51 | Si | 22:57:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2076 - Ejido Carrillo Puerto | 2076 | Sin dato | Sin dato | 22:20:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2077 - Campeche Siglo XXI | 2077 | 06:31:46 | Si | 22:29:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:13:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2079 - Bonfil | 2079 | 22:00:22 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 2080 - Ramon Espinola | 2080 | 06:55:40 | Si | 22:25:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2081 - Edzna | 2081 | 07:04:46 | No | 22:24:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2082 - Av. Periferia | 2082 | 07:01:47 | No | 22:17:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2084 - Holpelchen 4 | 2084 | 07:04:09 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 2085 - Escarcega 7 | 2085 | 06:57:55 | Si | 22:11:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2086 - Champoton 6 | 2086 | 06:55:16 | Si | 22:22:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:09:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2088 - Calkini 6 | 2088 | 06:52:42 | Si | 22:22:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:18:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 2090 - Calkini 7 | 2090 | 06:42:48 | Si | 22:36:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2091 - Hecelchakan 2 | 2091 | 06:53:07 | Si | 22:22:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2092 - Lerma | 2092 | 06:41:02 | Si | 22:21:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2093 - Tenabo 2 | 2093 | 06:57:22 | Si | 22:39:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 2095 - Champoton 8 | 2095 | 11:03:29 | No | 22:18:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 2096 - Escarcega 10 | 2096 | 07:01:49 | No | 22:12:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 3005 - Cancun Niños Heroes | 3005 | 20:42:56 | No | 21:06:10 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 3008 - Playa del Carmen 2 | 3008 | 05:59:16 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:28:55 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:17:44 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:25:12 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:45:25 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:26:25 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:11:04 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | 05:47:26 | Si | 21:22:30 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-06 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:27:41 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:19:29 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3113 - Playa Villas del Sol | 3113 | 05:55:03 | Si | 22:36:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:26:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3124 - Bacalar Mercado | 3124 | 05:55:26 | Si | 21:30:03 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-06 | 3152 - Kantunilkin 2 | 3152 | 05:50:39 | Si | 21:14:11 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-06 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:33:51 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3167 - Macarena Tulum | 3167 | 21:03:58 | No | 23:20:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 3168 - Macarena Chiquila | 3168 | Sin dato | Sin dato | 23:16:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 3502 - BB Bacalar | 3502 | 21:08:11 | No | 21:28:38 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:04:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 5002 - Tenosique Centro | 5002 | 07:08:34 | No | 22:13:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 5003 - Emiliano Zapata | 5003 | 07:05:09 | No | 22:29:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 5004 - Tab. Balancan | 5004 | 06:54:49 | Si | 22:16:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-06 | 5010 - Ciudad Pemex | 5010 | 07:07:25 | No | 22:01:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 6001 - Chiapas Palenque 1 | 6001 | 07:02:53 | No | 20:07:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 6003 - Chiapas Comitan 1 | 6003 | 07:02:29 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 6004 - Villaflores | 6004 | 07:45:05 | No | 21:35:59 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:07:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 6006 - Chiapas Comitan 2 | 6006 | 07:12:05 | No | 21:19:25 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 6007 - Chiapas Ocozocoautla | 6007 | 07:00:11 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-06 | 6008 - Chiapas Teopisca | 6008 | 07:01:33 | No | 21:13:40 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:14:22 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:35:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:12:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 6014 - Tuxtla Santa María | 6014 | 07:02:59 | No | 21:10:19 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 6015 - Tuxtla San José | 6015 | 07:53:38 | No | 22:19:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 6016 - Alcala | 6016 | 07:13:42 | No | 21:22:31 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:05:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:36:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-06 | 6020 - Colon | 6020 | 06:58:15 | Si | 21:08:05 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-06 | 6021 - Niño de Atocha | 6021 | 07:01:56 | No | 21:11:29 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 6022 - Bonampak | 6022 | 07:05:01 | No | 21:12:17 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 6024 - Chiapas Catazaja | 6024 | 07:28:31 | No | 23:03:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-06 | 6026 - Tuxtla Patria Nueva | 6026 | 07:13:16 | No | 21:07:28 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-06 | 6028 - Comitan Las Flores | 6028 | 07:01:53 | No | 21:31:37 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:42:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1025 - Uman | 1025 | 07:05:44 | No | 23:17:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 1033 - Maxcanu | 1033 | 06:59:04 | Si | 22:22:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1037 - Visente Solís | 1037 | 06:45:27 | Si | 22:47:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1068 - Chemax | 1068 | 06:57:42 | Si | 23:39:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1080 50 sur | Sin dato | 06:57:23 | Si | 22:11:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1082 - Mulchchen | 1082 | 06:51:32 | Si | 22:19:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1110 - Miguel Hidalgo | 1110 | 07:01:08 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:17:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1116 - Seye | 1116 | 07:02:50 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 1120 - Fco Montejo 3 | 1120 | 07:02:06 | No | 22:12:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:15:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1215 - Paseos De Opichen | 1215 | 07:02:49 | No | 22:17:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:17:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1244 - Gran Santa Fe | 1244 | 07:04:57 | No | 22:21:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 1248 - Real Montejo | 1248 | 07:04:17 | No | 22:10:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:13:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1261 - Conkal 1 | 1261 | 06:58:31 | Si | 22:03:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1269 - San Marcos Sustentable | 1269 | 06:58:55 | Si | 22:35:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1279 - Cri Cri | 1279 | 06:55:12 | Si | 22:10:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:11:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1282 - Tizimin 6 | 1282 | 07:00:23 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 1292 - Cuzamar | 1292 | 06:55:56 | Si | 22:02:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1298 - Muna 2 | 1298 | 07:00:46 | No | 22:16:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:54:35 | Si | 22:16:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:10:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:14:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1318 CHOCHOLA | Sin dato | 07:00:22 | No | 22:13:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:34:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:11:54 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:26 | No | 23:13:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2001 - Campeche 16 | 2001 | 07:02:08 | No | 22:11:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2002 - Campeche Mercado | 2002 | 05:58:14 | Si | 21:18:37 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-07 | 2003 - Champotón | 2003 | 05:55:13 | Si | 21:12:00 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-07 | 2004 - CAM Santa Ana | 2004 | 06:24:41 | Si | 22:26:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:47:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2008 - Escarsega | 2008 | 06:52:39 | Si | 22:12:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:43:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2011 - Hopelchen | 2011 | Sin dato | Sin dato | 22:20:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:37:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2013 - Seyba Playa | 2013 | 06:51:32 | Si | 22:37:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2014 - Kala | 2014 | 06:57:15 | Si | 22:43:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:09:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:33:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:08:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2019 - Champotón 2 | 2019 | 06:46:58 | Si | 22:18:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:17:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2021 - Campeche Candelaria | 2021 | 07:08:03 | No | 22:11:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:53:27 | Si | 22:41:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:27:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:16:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:27:23 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2028 - Campeche Samula | 2028 | 06:47:34 | Si | 22:27:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2029 - Palma Real | 2029 | 06:59:49 | Si | 22:24:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2030 - CAM San Antonio | 2030 | 07:02:55 | No | 22:19:04 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:15:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2032 - Hopelchen 2 | 2032 | 06:54:37 | Si | 22:15:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:12:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2034 - Calkini 2 | 2034 | 07:01:44 | No | 22:39:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2035 - Pomuch | 2035 | 07:08:42 | No | 22:22:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:07:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2037 - Tenabo | 2037 | 06:49:39 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 2038 - Calkini Mercado | 2038 | 06:32:51 | Si | 22:20:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2039 - Xpujil | 2039 | 06:49:33 | Si | 22:11:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:29:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 23:21:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2042 - Palizada | 2042 | 07:08:55 | No | 22:14:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2043 - Nunkini | 2043 | 06:49:53 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:12:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2045 - Champoton 5 | 2045 | Sin dato | Sin dato | 22:27:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2046 - El Polvorín | 2046 | 06:57:40 | Si | 22:47:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2047 - China | 2047 | 21:56:11 | No | 22:30:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:47:35 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2049 - Becal | 2049 | Sin dato | Sin dato | 22:32:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:12:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2052 - Campeche Granjas | 2052 | 07:03:35 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:23:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2054 - Plan Chac | 2054 | 07:13:15 | No | 22:25:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2055 - Dzilbachen | 2055 | 21:59:50 | No | 22:32:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:07:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2059 - Calkini 4 | 2059 | 06:42:42 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 2060 - Calkini 5 | 2060 | 07:03:02 | No | 22:47:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2061 - Fidel Velazquez | 2061 | 21:58:10 | No | 22:38:44 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2062 - Kanisté | 2062 | 06:54:01 | Si | 21:34:01 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-07 | 2063 - Montecristo | 2063 | 06:52:57 | Si | 22:12:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2064 - Tomas Aznar | 2064 | 22:00:45 | No | 22:37:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2065 - Pomuch 2 | 2065 | 07:00:17 | No | 22:23:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2066 - Isla Aguada | 2066 | 06:49:38 | Si | 22:56:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2067 - Candelaria 3 | 2067 | 07:06:06 | No | 22:17:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:30:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2069 - Hopelchen 3 | 2069 | 06:52:49 | Si | 22:23:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2070 - Minas(1) | 2070 | 07:12:14 | No | 22:17:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2072 - Xpujil 2 | 2072 | 06:48:01 | Si | 22:40:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2074 - Bellavista | 2074 | 06:51:12 | Si | 22:20:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2076 - Ejido Carrillo Puerto | 2076 | 06:42:32 | Si | 22:20:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2077 - Campeche Siglo XXI | 2077 | Sin dato | Sin dato | 22:39:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:17:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2079 - Bonfil | 2079 | 22:01:18 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 2080 - Ramon Espinola | 2080 | 06:48:21 | Si | 22:37:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2081 - Edzna | 2081 | 07:05:25 | No | 22:24:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2082 - Av. Periferia | 2082 | 07:00:30 | No | 22:12:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2084 - Holpelchen 4 | 2084 | 07:03:41 | No | 22:38:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2085 - Escarcega 7 | 2085 | 06:55:50 | Si | 22:12:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2086 - Champoton 6 | 2086 | 06:57:22 | Si | 22:33:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:14:02 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2088 - Calkini 6 | 2088 | 06:56:06 | Si | 22:26:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:19:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 2090 - Calkini 7 | 2090 | 06:52:05 | Si | 22:17:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2091 - Hecelchakan 2 | 2091 | 06:55:21 | Si | 22:30:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2092 - Lerma | 2092 | 06:52:59 | Si | 22:18:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 2093 - Tenabo 2 | 2093 | 07:00:40 | No | 22:36:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 2095 - Champoton 8 | 2095 | 07:01:01 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 2096 - Escarcega 10 | 2096 | 07:09:51 | No | 22:10:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 3005 - Cancun Niños Heroes | 3005 | 05:52:34 | Si | 21:02:58 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-07 | 3008 - Playa del Carmen 2 | 3008 | 06:00:05 | Si | 21:06:18 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-07 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:25:08 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:13:34 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 3040 - Kantunilkin | 3040 | 05:43:26 | Si | 21:12:06 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-07 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:24:54 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:19:23 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:14:16 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:44:58 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 3111 - Nva. Cozumel 1 | 3111 | 06:03:07 | Si | 21:17:57 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-07 | 3113 - Playa Villas del Sol | 3113 | Sin dato | Sin dato | 22:06:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 05:55:06 | Si | 21:25:20 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-07 | 3124 - Bacalar Mercado | 3124 | 05:57:24 | Si | 21:29:03 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-07 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:15:27 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:43:27 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 3167 - Macarena Tulum | 3167 | 05:51:59 | Si | 23:31:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 3168 - Macarena Chiquila | 3168 | 06:05:34 | Si | 22:24:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-07 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:08:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 5002 - Tenosique Centro | 5002 | 07:04:34 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 5003 - Emiliano Zapata | 5003 | 07:07:12 | No | 22:13:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 5004 - Tab. Balancan | 5004 | 07:00:40 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 5010 - Ciudad Pemex | 5010 | 07:12:27 | No | 22:00:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 6001 - Chiapas Palenque 1 | 6001 | 07:00:53 | No | 20:07:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6003 - Chiapas Comitan 1 | 6003 | 07:00:54 | No | 21:30:40 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 21:39:30 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:05:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 6006 - Chiapas Comitan 2 | 6006 | 07:11:07 | No | 22:16:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 6007 - Chiapas Ocozocoautla | 6007 | 07:26:30 | No | 21:21:51 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6008 - Chiapas Teopisca | 6008 | 07:03:56 | No | 22:30:29 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:12:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:39:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:06:00 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 6014 - Tuxtla Santa María | 6014 | 07:00:55 | No | 21:08:49 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6015 - Tuxtla San José | 6015 | 07:21:21 | No | 21:12:39 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6016 - Alcala | 6016 | 07:06:27 | No | 21:23:17 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:27:05 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-07 | 6019 - Venustiano Carranza | 6019 | 07:07:25 | No | 21:34:29 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6020 - Colon | 6020 | 07:09:48 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-07 | 6021 - Niño de Atocha | 6021 | 07:02:41 | No | 21:10:39 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6022 - Bonampak | 6022 | 07:08:10 | No | 21:13:03 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6024 - Chiapas Catazaja | 6024 | 07:23:58 | No | 22:54:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-07 | 6026 - Tuxtla Patria Nueva | 6026 | 07:01:31 | No | 21:11:18 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-07 | 6028 - Comitan Las Flores | 6028 | 06:53:04 | Si | 21:32:23 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:36:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 1025 - Uman | 1025 | 07:17:34 | No | 23:04:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1033 - Maxcanu | 1033 | 06:56:50 | Si | 22:28:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 1037 - Visente Solís | 1037 | 06:45:17 | Si | 22:39:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 1068 - Chemax | 1068 | 06:57:27 | Si | 22:27:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 1080 50 sur | Sin dato | 06:56:35 | Si | 22:16:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 1082 - Mulchchen | 1082 | 07:02:28 | No | 22:16:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1110 - Miguel Hidalgo | 1110 | 07:03:54 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-08 | 1116 - Seye | 1116 | 07:04:24 | No | 22:42:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1120 - Fco Montejo 3 | 1120 | 07:03:45 | No | 22:22:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:23:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 1215 - Paseos De Opichen | 1215 | 07:06:02 | No | 22:24:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:32:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 1244 - Gran Santa Fe | 1244 | 07:01:07 | No | 22:11:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1248 - Real Montejo | 1248 | 07:08:40 | No | 22:15:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1258 - Mérida Pedro Infante | 1258 | 07:00:44 | No | 22:11:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1261 - Conkal 1 | 1261 | 07:02:50 | No | 22:05:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1269 - San Marcos Sustentable | 1269 | 06:54:12 | Si | 22:39:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 1279 - Cri Cri | 1279 | 06:56:09 | Si | 22:08:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:13:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 1282 - Tizimin 6 | 1282 | 06:57:01 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-08 | 1292 - Cuzamar | 1292 | 06:59:31 | Si | 22:11:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 1298 - Muna 2 | 1298 | 07:00:55 | No | 22:14:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 1305 - Uman Piedra de Agua 3 | 1305 | Sin dato | Sin dato | 22:18:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:10:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:16:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 1318 CHOCHOLA | Sin dato | 06:58:42 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-08 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:33:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:18:00 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:39 | No | 22:23:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2001 - Campeche 16 | 2001 | 07:00:27 | No | 22:08:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2002 - Campeche Mercado | 2002 | 05:56:01 | Si | 21:09:19 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 2003 - Champotón | 2003 | 06:01:28 | Si | 21:12:16 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 2004 - CAM Santa Ana | 2004 | 06:24:33 | Si | 22:22:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:42:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2008 - Escarsega | 2008 | 06:50:48 | Si | 22:24:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:50:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2011 - Hopelchen | 2011 | 06:57:43 | Si | 22:18:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2012 - Escarcega 2 | 2012 | 06:59:19 | Si | 22:21:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2013 - Seyba Playa | 2013 | 06:57:01 | Si | 22:32:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2014 - Kala | 2014 | 06:59:57 | Si | 22:24:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:17:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:36:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:17:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2019 - Champotón 2 | 2019 | 06:45:45 | Si | 22:20:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2020 - Escarcega 3 | 2020 | 06:52:52 | Si | 22:29:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2021 - Campeche Candelaria | 2021 | 07:05:28 | No | 22:09:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:53:56 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-08 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:20:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:10:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:16:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2028 - Campeche Samula | 2028 | 06:54:40 | Si | 22:36:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2029 - Palma Real | 2029 | 06:58:32 | Si | 22:17:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:08:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:46:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2032 - Hopelchen 2 | 2032 | 06:51:54 | Si | 22:21:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:14:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2034 - Calkini 2 | 2034 | 07:02:21 | No | 22:25:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2035 - Pomuch | 2035 | 06:59:02 | Si | 22:34:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:12:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2037 - Tenabo | 2037 | 14:44:01 | No | 22:09:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2038 - Calkini Mercado | 2038 | 06:25:15 | Si | 22:16:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2039 - Xpujil | 2039 | 06:43:35 | Si | 22:51:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:46:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:13:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2042 - Palizada | 2042 | 07:04:18 | No | 22:14:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2043 - Nunkini | 2043 | 06:53:55 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-08 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:11:48 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2045 - Champoton 5 | 2045 | 07:00:35 | No | 22:17:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2046 - El Polvorín | 2046 | 06:56:16 | Si | 22:32:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2047 - China | 2047 | 07:06:30 | No | 22:23:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:45:42 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2049 - Becal | 2049 | 19:50:01 | No | 22:56:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:17:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2052 - Campeche Granjas | 2052 | 07:02:54 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-08 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:27:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2054 - Plan Chac | 2054 | 06:33:42 | Si | 22:20:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2055 - Dzilbachen | 2055 | 22:01:30 | No | 22:30:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:06:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2059 - Calkini 4 | 2059 | 06:42:04 | Si | 22:26:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2060 - Calkini 5 | 2060 | 06:55:06 | Si | 22:51:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2061 - Fidel Velazquez | 2061 | 21:59:40 | No | 22:45:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2062 - Kanisté | 2062 | 06:52:43 | Si | 21:42:59 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 2063 - Montecristo | 2063 | 06:52:05 | Si | 22:15:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2064 - Tomas Aznar | 2064 | 22:01:27 | No | 22:24:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2065 - Pomuch 2 | 2065 | 06:59:47 | Si | 22:35:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2066 - Isla Aguada | 2066 | 06:57:34 | Si | 22:30:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2067 - Candelaria 3 | 2067 | 07:10:24 | No | 22:16:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:21:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2069 - Hopelchen 3 | 2069 | 06:55:26 | Si | 22:23:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2070 - Minas(1) | 2070 | 07:04:10 | No | 22:31:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2072 - Xpujil 2 | 2072 | 06:43:46 | Si | 22:38:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2074 - Bellavista | 2074 | 06:50:49 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-08 | 2076 - Ejido Carrillo Puerto | 2076 | 06:21:31 | Si | 22:12:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2077 - Campeche Siglo XXI | 2077 | 06:28:25 | Si | 22:21:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:14:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2080 - Ramon Espinola | 2080 | 06:53:48 | Si | 22:25:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2081 - Edzna | 2081 | 07:03:23 | No | 22:29:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2082 - Av. Periferia | 2082 | 06:59:14 | Si | 22:14:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2084 - Holpelchen 4 | 2084 | 07:05:45 | No | 22:33:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2085 - Escarcega 7 | 2085 | 06:54:02 | Si | 22:12:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2086 - Champoton 6 | 2086 | 06:51:10 | Si | 22:26:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:13:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 2088 - Calkini 6 | 2088 | 06:52:57 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-08 | 2089 - Escarcega 8 | 2089 | 06:55:33 | Si | 22:22:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2090 - Calkini 7 | 2090 | 06:52:31 | Si | 22:28:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2091 - Hecelchakan 2 | 2091 | 06:53:36 | Si | 22:25:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2092 - Lerma | 2092 | 06:42:29 | Si | 22:18:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 2093 - Tenabo 2 | 2093 | 07:01:33 | No | 22:49:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 2095 - Champoton 8 | 2095 | 06:50:34 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-08 | 2096 - Escarcega 10 | 2096 | 07:00:31 | No | 22:14:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 3005 - Cancun Niños Heroes | 3005 | 05:49:51 | Si | 21:05:59 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 3008 - Playa del Carmen 2 | 3008 | 05:58:30 | Si | 21:09:32 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:24:17 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:19:19 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3040 - Kantunilkin | 3040 | 05:41:10 | Si | 21:23:56 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:34:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:18:41 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:09:11 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:35:42 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:29:20 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:12:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3113 - Playa Villas del Sol | 3113 | 05:57:24 | Si | 22:26:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 06:00:20 | Si | 21:23:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 3124 - Bacalar Mercado | 3124 | 05:58:08 | Si | 21:15:29 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:09:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:24:29 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3167 - Macarena Tulum | 3167 | 05:51:34 | Si | 23:56:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 3168 - Macarena Chiquila | 3168 | Sin dato | Sin dato | 22:39:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 3502 - BB Bacalar | 3502 | 00:20:42 | Si | 21:34:21 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-08 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:03:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 5002 - Tenosique Centro | 5002 | 06:57:04 | Si | 22:10:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-08 | 5003 - Emiliano Zapata | 5003 | 07:03:29 | No | 22:34:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 5004 - Tab. Balancan | 5004 | 07:01:13 | No | 22:04:29 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 5010 - Ciudad Pemex | 5010 | 07:11:22 | No | 22:01:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 6001 - Chiapas Palenque 1 | 6001 | 07:01:37 | No | 20:15:32 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6003 - Chiapas Comitan 1 | 6003 | 07:01:32 | No | 21:30:39 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6004 - Villaflores | 6004 | 07:09:12 | No | 21:16:27 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:06:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 6006 - Chiapas Comitan 2 | 6006 | 07:10:19 | No | 21:16:27 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6007 - Chiapas Ocozocoautla | 6007 | 07:01:13 | No | 21:36:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6008 - Chiapas Teopisca | 6008 | 07:01:40 | No | 21:21:55 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:26:01 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:35:22 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:05:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 6014 - Tuxtla Santa María | 6014 | 07:08:11 | No | 21:24:21 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6015 - Tuxtla San José | 6015 | 07:17:14 | No | 21:11:36 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6016 - Alcala | 6016 | 07:06:41 | No | 21:49:51 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:06:43 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-08 | 6019 - Venustiano Carranza | 6019 | 07:09:20 | No | 21:34:21 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6020 - Colon | 6020 | 07:06:52 | No | 21:06:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6021 - Niño de Atocha | 6021 | 07:05:19 | No | 21:21:00 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6022 - Bonampak | 6022 | 07:03:49 | No | 21:21:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6024 - Chiapas Catazaja | 6024 | 07:24:48 | No | 22:37:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-08 | 6026 - Tuxtla Patria Nueva | 6026 | 07:05:11 | No | 21:01:15 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-08 | 6028 - Comitan Las Flores | 6028 | 06:56:46 | Si | 21:32:04 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:34:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 1025 - Uman | 1025 | 07:13:31 | No | 22:49:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1033 - Maxcanu | 1033 | 06:59:22 | Si | 22:24:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 1037 - Visente Solís | 1037 | 06:46:19 | Si | 22:49:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 1068 - Chemax | 1068 | 07:04:08 | No | 22:22:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1080 50 sur | Sin dato | 07:02:31 | No | 22:07:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1082 - Mulchchen | 1082 | 06:54:02 | Si | 22:07:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 1110 - Miguel Hidalgo | 1110 | 07:14:27 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:20:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 1116 - Seye | 1116 | 07:07:16 | No | 22:56:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1120 - Fco Montejo 3 | 1120 | 07:08:55 | No | 22:18:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:40:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 1215 - Paseos De Opichen | 1215 | 07:06:13 | No | 22:19:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1236 - Boulevards de Oriente | 1236 | 07:04:56 | No | 22:16:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1244 - Gran Santa Fe | 1244 | 07:02:44 | No | 22:11:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1248 - Real Montejo | 1248 | 07:00:38 | No | 22:17:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1258 - Mérida Pedro Infante | 1258 | 06:59:44 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 1261 - Conkal 1 | 1261 | 07:05:47 | No | 22:02:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1269 - San Marcos Sustentable | 1269 | 07:00:08 | No | 22:27:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1279 - Cri Cri | 1279 | 06:57:34 | Si | 22:12:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 1281 - Sotuta | 1281 | 19:30:11 | No | 22:17:57 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1282 - Tizimin 6 | 1282 | 07:00:32 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 1292 - Cuzamar | 1292 | 06:48:17 | Si | 22:11:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 1298 - Muna 2 | 1298 | 07:00:29 | No | 22:08:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:55:33 | Si | 22:15:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:15:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:15:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 1318 CHOCHOLA | Sin dato | 06:49:48 | Si | 22:17:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:55:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:12:41 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:09:14 | No | 22:22:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2001 - Campeche 16 | 2001 | 07:01:03 | No | 22:07:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2002 - Campeche Mercado | 2002 | 05:57:17 | Si | 21:12:59 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 2003 - Champotón | 2003 | 06:03:20 | Si | 21:09:32 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 2004 - CAM Santa Ana | 2004 | 06:22:38 | Si | 22:23:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:02:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2008 - Escarsega | 2008 | 06:50:12 | Si | 22:17:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:56:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2011 - Hopelchen | 2011 | Sin dato | Sin dato | 22:28:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:15:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2013 - Seyba Playa | 2013 | 06:55:16 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 2014 - Kala | 2014 | 06:49:11 | Si | 22:39:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:19:23 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:34:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:07:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2019 - Champotón 2 | 2019 | 06:53:19 | Si | 22:22:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:15:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2021 - Campeche Candelaria | 2021 | 06:59:14 | Si | 22:10:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:54:50 | Si | 22:56:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2024 - Cd. Carmen Mercado | 2024 | 07:00:53 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:11:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:26:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2028 - Campeche Samula | 2028 | 06:57:10 | Si | 22:33:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2029 - Palma Real | 2029 | 06:57:17 | Si | 22:06:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:11:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2031 - Cd. Carmen Morelos | 2031 | 07:02:43 | No | 22:38:48 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2032 - Hopelchen 2 | 2032 | 06:52:03 | Si | 22:17:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:12:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2034 - Calkini 2 | 2034 | 06:57:37 | Si | 22:14:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2035 - Pomuch | 2035 | 07:06:34 | No | 22:13:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:13:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2037 - Tenabo | 2037 | 06:43:55 | Si | 22:13:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2038 - Calkini Mercado | 2038 | 06:24:53 | Si | 22:12:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2039 - Xpujil | 2039 | 06:53:03 | Si | 22:02:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:34:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:27:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2042 - Palizada | 2042 | 07:03:43 | No | 22:15:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2043 - Nunkini | 2043 | 06:54:26 | Si | 22:23:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2044 - Candelaria 2 | 2044 | 07:01:20 | No | 22:09:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2045 - Champoton 5 | 2045 | 07:00:15 | No | 22:15:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2046 - El Polvorín | 2046 | 06:56:25 | Si | 22:34:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2047 - China | 2047 | Sin dato | Sin dato | 22:33:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:54:57 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2049 - Becal | 2049 | 07:03:44 | No | 22:49:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2051 - Campeche Morelos | 2051 | 06:48:06 | Si | 22:15:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2052 - Campeche Granjas | 2052 | 07:10:34 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:20:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2054 - Plan Chac | 2054 | 21:56:49 | No | 22:24:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2055 - Dzilbachen | 2055 | 22:01:21 | No | 22:29:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:11:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2059 - Calkini 4 | 2059 | 06:48:35 | Si | 22:20:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2060 - Calkini 5 | 2060 | 06:55:18 | Si | 22:42:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2061 - Fidel Velazquez | 2061 | 22:00:55 | No | 22:34:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2062 - Kanisté | 2062 | 06:51:33 | Si | 21:37:45 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 2063 - Montecristo | 2063 | 06:51:28 | Si | 22:12:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2064 - Tomas Aznar | 2064 | 22:00:31 | No | 22:17:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2065 - Pomuch 2 | 2065 | 07:01:10 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 2066 - Isla Aguada | 2066 | 06:49:15 | Si | 22:31:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2067 - Candelaria 3 | 2067 | 07:07:45 | No | 22:35:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:13:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2069 - Hopelchen 3 | 2069 | 06:55:30 | Si | 22:18:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2070 - Minas(1) | 2070 | 06:48:09 | Si | 22:23:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2072 - Xpujil 2 | 2072 | 06:57:20 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 2074 - Bellavista | 2074 | 06:54:28 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 2076 - Ejido Carrillo Puerto | 2076 | 06:22:28 | Si | 22:29:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2077 - Campeche Siglo XXI | 2077 | Sin dato | Sin dato | 22:23:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:16:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2079 - Bonfil | 2079 | 21:53:04 | No | 22:18:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2080 - Ramon Espinola | 2080 | 06:59:19 | Si | 22:32:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2081 - Edzna | 2081 | 07:03:42 | No | 22:15:44 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2082 - Av. Periferia | 2082 | 06:58:58 | Si | 22:17:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2084 - Holpelchen 4 | 2084 | 07:05:20 | No | 22:28:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2085 - Escarcega 7 | 2085 | 06:54:31 | Si | 22:13:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2086 - Champoton 6 | 2086 | 10:46:04 | No | 22:15:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:06:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2088 - Calkini 6 | 2088 | 06:53:35 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:22:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 2090 - Calkini 7 | 2090 | 06:58:30 | Si | 22:20:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2091 - Hecelchakan 2 | 2091 | 06:53:44 | Si | 22:10:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2092 - Lerma | 2092 | 06:44:56 | Si | 22:11:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2093 - Tenabo 2 | 2093 | 06:58:48 | Si | 22:37:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 2095 - Champoton 8 | 2095 | 06:57:28 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 2096 - Escarcega 10 | 2096 | 06:59:07 | Si | 22:12:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 3005 - Cancun Niños Heroes | 3005 | 05:46:44 | Si | 21:25:42 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 3008 - Playa del Carmen 2 | 3008 | 06:00:40 | Si | 21:05:00 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:13:48 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:10:46 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3040 - Kantunilkin | 3040 | 05:49:24 | Si | 21:27:01 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:48:34 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:19:13 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:12:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:23:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:30:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:12:50 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3113 - Playa Villas del Sol | 3113 | 05:54:37 | Si | 22:56:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 05:59:37 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 3124 - Bacalar Mercado | 3124 | 05:56:38 | Si | 21:41:25 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 3152 - Kantunilkin 2 | 3152 | 06:00:03 | Si | 21:18:34 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:42:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3167 - Macarena Tulum | 3167 | 05:57:47 | Si | 23:23:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 3168 - Macarena Chiquila | 3168 | Sin dato | Sin dato | 22:37:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 3502 - BB Bacalar | 3502 | 21:23:13 | No | 21:23:10 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-09 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:01:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 5002 - Tenosique Centro | 5002 | 06:58:43 | Si | 22:08:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-09 | 5003 - Emiliano Zapata | 5003 | 07:06:50 | No | 22:45:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 5004 - Tab. Balancan | 5004 | 07:02:56 | No | 22:19:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 5010 - Ciudad Pemex | 5010 | 07:06:38 | No | 22:01:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 6001 - Chiapas Palenque 1 | 6001 | 07:00:37 | No | 20:07:10 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-09 | 6003 - Chiapas Comitan 1 | 6003 | 07:03:15 | No | 23:52:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-09 | 6004 - Villaflores | 6004 | 07:18:05 | No | 21:38:25 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-09 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:08:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 6006 - Chiapas Comitan 2 | 6006 | 07:17:20 | No | 21:18:22 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-09 | 6007 - Chiapas Ocozocoautla | 6007 | 06:55:51 | Si | 21:40:19 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 6008 - Chiapas Teopisca | 6008 | 07:02:33 | No | 21:22:08 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-09 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:17:56 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:04:31 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 6014 - Tuxtla Santa María | 6014 | 07:00:41 | No | 21:22:11 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-09 | 6015 - Tuxtla San José | 6015 | 07:16:06 | No | 21:23:59 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-09 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:50:01 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:15:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:31:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 6020 - Colon | 6020 | 07:08:52 | No | 21:08:12 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-09 | 6021 - Niño de Atocha | 6021 | 06:59:46 | Si | 21:13:17 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-09 | 6022 - Bonampak | 6022 | 07:11:23 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-09 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:41:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-09 | 6026 - Tuxtla Patria Nueva | 6026 | 07:04:24 | No | 21:06:27 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-09 | 6028 - Comitan Las Flores | 6028 | 07:03:29 | No | 21:38:40 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:29:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1025 - Uman | 1025 | 07:02:29 | No | 22:18:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1033 - Maxcanu | 1033 | 06:57:36 | Si | 22:26:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 1037 - Visente Solís | 1037 | 06:40:04 | Si | 23:06:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 1068 - Chemax | 1068 | 07:02:47 | No | 23:23:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1080 50 sur | Sin dato | 07:00:14 | No | 22:21:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1082 - Mulchchen | 1082 | 06:56:26 | Si | 22:18:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 1110 - Miguel Hidalgo | 1110 | 07:13:36 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:23:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1116 - Seye | 1116 | 07:04:39 | No | 22:33:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1120 - Fco Montejo 3 | 1120 | 07:07:47 | No | 22:19:29 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:27:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1215 - Paseos De Opichen | 1215 | 07:05:53 | No | 22:27:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:20:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1244 - Gran Santa Fe | 1244 | 07:03:15 | No | 22:10:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1248 - Real Montejo | 1248 | 07:06:42 | No | 22:20:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:10:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1261 - Conkal 1 | 1261 | 07:02:42 | No | 22:05:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1269 - San Marcos Sustentable | 1269 | 06:57:13 | Si | 22:32:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 1279 - Cri Cri | 1279 | 06:55:59 | Si | 22:11:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:20:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1292 - Cuzamar | 1292 | 07:03:12 | No | 22:19:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1298 - Muna 2 | 1298 | 07:02:13 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:55:57 | Si | 22:19:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:14:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:22:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1318 CHOCHOLA | Sin dato | 07:00:06 | No | 22:13:57 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:36:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:09:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 06:56:38 | Si | 22:08:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2001 - Campeche 16 | 2001 | 06:59:50 | Si | 22:12:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2002 - Campeche Mercado | 2002 | 05:56:44 | Si | 21:13:11 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 2003 - Champotón | 2003 | 06:02:21 | Si | 21:06:45 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 2004 - CAM Santa Ana | 2004 | 06:22:59 | Si | 22:27:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:17:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2008 - Escarsega | 2008 | 06:52:09 | Si | 22:15:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:03:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2011 - Hopelchen | 2011 | 06:59:15 | Si | 22:11:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:30:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2013 - Seyba Playa | 2013 | 07:03:26 | No | 22:47:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2014 - Kala | 2014 | 06:54:01 | Si | 22:22:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2016 - Carmen Tecolutla | 2016 | 07:01:56 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:47:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2018 - Av. Central | 2018 | 06:58:23 | Si | 22:11:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2019 - Champotón 2 | 2019 | 06:48:15 | Si | 22:18:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:17:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2021 - Campeche Candelaria | 2021 | 07:07:56 | No | 22:18:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:47:32 | Si | 22:52:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2024 - Cd. Carmen Mercado | 2024 | 07:00:40 | No | 22:31:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:10:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2027 - Champotón 3 | 2027 | Sin dato | Sin dato | 22:13:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2028 - Campeche Samula | 2028 | 06:57:48 | Si | 22:26:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2029 - Palma Real | 2029 | 06:59:23 | Si | 22:26:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:22:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:20:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2032 - Hopelchen 2 | 2032 | 06:56:00 | Si | 22:24:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2034 - Calkini 2 | 2034 | 07:00:49 | No | 22:20:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2035 - Pomuch | 2035 | 06:59:25 | Si | 22:23:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:06:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2037 - Tenabo | 2037 | 06:46:18 | Si | 22:10:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2038 - Calkini Mercado | 2038 | 06:24:38 | Si | 22:23:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2039 - Xpujil | 2039 | 06:41:46 | Si | 22:32:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:36:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:13:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2042 - Palizada | 2042 | 07:08:27 | No | 22:14:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2043 - Nunkini | 2043 | 08:13:11 | No | 22:22:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:10:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2045 - Champoton 5 | 2045 | 07:03:54 | No | 22:27:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2046 - El Polvorín | 2046 | 06:55:59 | Si | 22:32:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2047 - China | 2047 | Sin dato | Sin dato | 22:33:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2048 - Campeche Centro | 2048 | 06:52:52 | Si | 21:45:20 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 2049 - Becal | 2049 | 07:00:31 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:14:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2052 - Campeche Granjas | 2052 | 07:02:18 | No | 22:15:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:31:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2054 - Plan Chac | 2054 | 21:59:46 | No | 22:20:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2055 - Dzilbachen | 2055 | 21:50:01 | No | 22:21:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:18:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2059 - Calkini 4 | 2059 | 06:48:28 | Si | 22:13:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2060 - Calkini 5 | 2060 | 06:59:47 | Si | 23:33:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2061 - Fidel Velazquez | 2061 | 22:01:27 | No | 22:29:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2062 - Kanisté | 2062 | 06:54:24 | Si | 21:34:28 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 2063 - Montecristo | 2063 | 06:56:01 | Si | 22:17:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2064 - Tomas Aznar | 2064 | 22:00:31 | No | 22:37:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2065 - Pomuch 2 | 2065 | 06:59:14 | Si | 22:30:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2066 - Isla Aguada | 2066 | 07:06:47 | No | 22:33:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2067 - Candelaria 3 | 2067 | 06:53:05 | Si | 22:22:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2068 - Bolonchen | 2068 | 06:56:49 | Si | 22:22:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2069 - Hopelchen 3 | 2069 | 06:58:14 | Si | 22:15:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2070 - Minas(1) | 2070 | 07:13:56 | No | 22:30:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2072 - Xpujil 2 | 2072 | 06:59:45 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 2074 - Bellavista | 2074 | 06:53:21 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 2076 - Ejido Carrillo Puerto | 2076 | 06:36:32 | Si | 22:14:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2077 - Campeche Siglo XXI | 2077 | Sin dato | Sin dato | 22:26:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:23:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2079 - Bonfil | 2079 | 19:35:40 | No | 22:19:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2080 - Ramon Espinola | 2080 | 06:54:36 | Si | 22:35:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2081 - Edzna | 2081 | 07:11:00 | No | 22:42:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2082 - Av. Periferia | 2082 | 06:55:47 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 2084 - Holpelchen 4 | 2084 | 07:03:40 | No | 23:55:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2085 - Escarcega 7 | 2085 | 06:53:12 | Si | 22:53:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2086 - Champoton 6 | 2086 | 06:57:57 | Si | 22:14:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:15:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2088 - Calkini 6 | 2088 | 06:52:46 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:22:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 2090 - Calkini 7 | 2090 | 06:53:17 | Si | 22:35:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2091 - Hecelchakan 2 | 2091 | 06:47:19 | Si | 22:25:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2092 - Lerma | 2092 | 06:27:33 | Si | 22:16:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 2093 - Tenabo 2 | 2093 | 07:09:21 | No | 22:38:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 2095 - Champoton 8 | 2095 | 06:59:53 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 2096 - Escarcega 10 | 2096 | 07:03:11 | No | 22:15:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 3005 - Cancun Niños Heroes | 3005 | 05:46:29 | Si | 21:13:28 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 3008 - Playa del Carmen 2 | 3008 | 05:58:43 | Si | 21:02:14 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:30:48 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:13:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:22:37 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:32:29 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:41:45 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:06:42 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:22:03 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:28:27 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3113 - Playa Villas del Sol | 3113 | 05:59:07 | Si | 21:30:14 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 06:01:49 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 3124 - Bacalar Mercado | 3124 | 05:56:22 | Si | 21:18:49 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:16:46 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:42:20 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 23:10:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3168 - Macarena Chiquila | 3168 | Sin dato | Sin dato | 22:42:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 3502 - BB Bacalar | 3502 | 21:23:48 | No | 21:23:45 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:04:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 5002 - Tenosique Centro | 5002 | 06:54:59 | Si | 22:05:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-10 | 5003 - Emiliano Zapata | 5003 | 07:06:54 | No | 22:50:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 5004 - Tab. Balancan | 5004 | 07:08:19 | No | 22:26:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 5010 - Ciudad Pemex | 5010 | 07:06:43 | No | 22:01:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 6001 - Chiapas Palenque 1 | 6001 | 07:01:44 | No | 20:11:45 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 6003 - Chiapas Comitan 1 | 6003 | 07:02:59 | No | 21:32:14 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 21:37:55 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:01:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 6006 - Chiapas Comitan 2 | 6006 | 07:12:37 | No | 21:37:59 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 6007 - Chiapas Ocozocoautla | 6007 | 07:01:50 | No | 21:39:01 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 6008 - Chiapas Teopisca | 6008 | 06:52:58 | Si | 21:18:56 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:20:04 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:40:14 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:14:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-10 | 6014 - Tuxtla Santa María | 6014 | 07:07:04 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-10 | 6015 - Tuxtla San José | 6015 | 07:26:41 | No | 21:56:49 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 6016 - Alcala | 6016 | 07:05:02 | No | 21:31:58 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 6019 - Venustiano Carranza | 6019 | 07:10:39 | No | 22:43:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 6020 - Colon | 6020 | 06:57:01 | Si | 21:03:38 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-10 | 6021 - Niño de Atocha | 6021 | 07:03:40 | No | 21:17:41 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 6022 - Bonampak | 6022 | 07:06:22 | No | 00:57:12 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 6024 - Chiapas Catazaja | 6024 | 07:37:09 | No | 22:04:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-10 | 6026 - Tuxtla Patria Nueva | 6026 | 07:12:24 | No | 21:09:47 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-10 | 6028 - Comitan Las Flores | 6028 | 07:01:05 | No | 21:34:17 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:33:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 1025 - Uman | 1025 | 07:04:50 | No | 22:35:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 1033 - Maxcanu | 1033 | 06:59:12 | Si | 22:27:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1037 - Visente Solís | 1037 | 06:43:58 | Si | 22:46:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1068 - Chemax | 1068 | 07:02:35 | No | 22:23:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 1080 50 sur | Sin dato | 06:58:52 | Si | 22:17:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1082 - Mulchchen | 1082 | 06:58:39 | Si | 22:19:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1110 - Miguel Hidalgo | 1110 | 07:15:36 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-11 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:19:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 1116 - Seye | 1116 | 07:08:56 | No | 22:23:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 1120 - Fco Montejo 3 | 1120 | 07:05:47 | No | 22:39:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:33:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 1215 - Paseos De Opichen | 1215 | 07:05:39 | No | 22:11:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 1236 - Boulevards de Oriente | 1236 | 07:08:54 | No | 22:11:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 1244 - Gran Santa Fe | 1244 | 07:03:22 | No | 22:08:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 1248 - Real Montejo | 1248 | 06:57:22 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-11 | 1258 - Mérida Pedro Infante | 1258 | 06:57:31 | Si | 22:10:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1261 - Conkal 1 | 1261 | 06:59:44 | Si | 22:03:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1269 - San Marcos Sustentable | 1269 | 06:54:33 | Si | 22:34:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1279 - Cri Cri | 1279 | 06:50:57 | Si | 22:12:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:14:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 1292 - Cuzamar | 1292 | 06:57:13 | Si | 22:03:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1298 - Muna 2 | 1298 | 06:59:55 | Si | 22:12:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1305 - Uman Piedra de Agua 3 | 1305 | Sin dato | Sin dato | 22:26:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:11:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 1310 - Costera | 1310 | Sin dato | Sin dato | 23:21:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 1318 CHOCHOLA | Sin dato | 06:58:01 | Si | 22:14:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:33:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:10:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:05:32 | No | 22:24:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2001 - Campeche 16 | 2001 | 07:00:44 | No | 22:06:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2002 - Campeche Mercado | 2002 | 05:59:56 | Si | 21:13:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-11 | 2003 - Champotón | 2003 | 05:49:18 | Si | 21:11:34 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-11 | 2004 - CAM Santa Ana | 2004 | 06:46:16 | Si | 22:30:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:27:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2008 - Escarsega | 2008 | 06:34:45 | Si | 22:13:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:52:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2011 - Hopelchen | 2011 | 06:59:49 | Si | 22:41:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:19:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2013 - Seyba Playa | 2013 | 07:09:15 | No | 22:31:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2014 - Kala | 2014 | 06:56:58 | Si | 22:15:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:16:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:27:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 21:59:25 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2019 - Champotón 2 | 2019 | 07:01:18 | No | 22:22:58 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2020 - Escarcega 3 | 2020 | 06:42:30 | Si | 22:12:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2021 - Campeche Candelaria | 2021 | 07:04:44 | No | 22:27:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:56:10 | Si | 22:21:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2024 - Cd. Carmen Mercado | 2024 | 07:02:50 | No | 22:13:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:13:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2027 - Champotón 3 | 2027 | 13:15:43 | No | 22:13:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2028 - Campeche Samula | 2028 | 07:05:54 | No | 22:25:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2029 - Palma Real | 2029 | 07:13:50 | No | 22:26:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:11:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2031 - Cd. Carmen Morelos | 2031 | 06:57:13 | Si | 22:16:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2032 - Hopelchen 2 | 2032 | 06:48:32 | Si | 22:22:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:24:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2034 - Calkini 2 | 2034 | 06:58:18 | Si | 22:33:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2035 - Pomuch | 2035 | 07:10:45 | No | 22:22:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:08:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2037 - Tenabo | 2037 | 06:58:45 | Si | 22:09:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2038 - Calkini Mercado | 2038 | 06:12:32 | Si | 22:31:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2039 - Xpujil | 2039 | 13:49:38 | No | 22:11:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:30:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:13:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2042 - Palizada | 2042 | 07:10:07 | No | 22:09:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2043 - Nunkini | 2043 | 06:56:31 | Si | 22:23:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2044 - Candelaria 2 | 2044 | 07:00:36 | No | 22:12:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2045 - Champoton 5 | 2045 | 06:59:43 | Si | 22:12:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2046 - El Polvorín | 2046 | 06:56:10 | Si | 22:32:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2047 - China | 2047 | 07:02:01 | No | 22:42:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 22:58:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2049 - Becal | 2049 | 07:02:24 | No | 22:31:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:21:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2052 - Campeche Granjas | 2052 | 07:05:08 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-11 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:22:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2054 - Plan Chac | 2054 | 06:49:05 | Si | 22:41:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2055 - Dzilbachen | 2055 | 21:50:20 | No | 22:29:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:16:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2059 - Calkini 4 | 2059 | 06:55:02 | Si | 22:28:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2060 - Calkini 5 | 2060 | 06:57:18 | Si | 22:36:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2061 - Fidel Velazquez | 2061 | 22:00:31 | No | 22:33:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2062 - Kanisté | 2062 | 06:57:12 | Si | 21:33:00 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-11 | 2063 - Montecristo | 2063 | 06:53:42 | Si | 22:33:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2064 - Tomas Aznar | 2064 | 22:01:52 | No | 22:26:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2065 - Pomuch 2 | 2065 | 07:01:03 | No | 22:15:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2066 - Isla Aguada | 2066 | 07:11:18 | No | 22:39:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2067 - Candelaria 3 | 2067 | 06:49:47 | Si | 22:13:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:19:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2069 - Hopelchen 3 | 2069 | 06:58:31 | Si | 22:19:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2070 - Minas(1) | 2070 | 07:06:14 | No | 22:29:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2072 - Xpujil 2 | 2072 | 06:48:04 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-11 | 2074 - Bellavista | 2074 | 06:49:23 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-11 | 2076 - Ejido Carrillo Puerto | 2076 | 06:34:15 | Si | 22:18:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2077 - Campeche Siglo XXI | 2077 | Sin dato | Sin dato | 22:30:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:10:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2079 - Bonfil | 2079 | 21:55:11 | No | 22:17:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2080 - Ramon Espinola | 2080 | 06:54:46 | Si | 22:46:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2081 - Edzna | 2081 | 06:58:58 | Si | 22:43:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2082 - Av. Periferia | 2082 | 07:05:38 | No | 22:16:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2084 - Holpelchen 4 | 2084 | 07:04:25 | No | 22:37:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2085 - Escarcega 7 | 2085 | 06:53:31 | Si | 22:13:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2086 - Champoton 6 | 2086 | Sin dato | Sin dato | 22:20:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2087 - Champoton 7 | 2087 | 14:48:35 | No | 22:09:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 2088 - Calkini 6 | 2088 | 06:52:00 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-11 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:11:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 2090 - Calkini 7 | 2090 | 06:52:55 | Si | 22:23:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2091 - Hecelchakan 2 | 2091 | 06:38:59 | Si | 22:30:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2092 - Lerma | 2092 | 06:46:25 | Si | 22:10:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2093 - Tenabo 2 | 2093 | 06:58:35 | Si | 22:31:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 2095 - Champoton 8 | 2095 | 06:57:33 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-11 | 2096 - Escarcega 10 | 2096 | 06:59:02 | Si | 22:09:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 3005 - Cancun Niños Heroes | 3005 | 20:24:46 | No | 21:35:31 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 3008 - Playa del Carmen 2 | 3008 | 05:59:41 | Si | 21:08:33 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-11 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:22:35 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:08:03 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3040 - Kantunilkin | 3040 | 05:48:06 | Si | 21:14:29 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-11 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:28:44 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:39:46 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:11:35 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:30:41 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:46:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3113 - Playa Villas del Sol | 3113 | 05:55:40 | Si | 21:38:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-11 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:16:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3124 - Bacalar Mercado | 3124 | 05:56:20 | Si | 21:17:38 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-11 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:19:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:33:57 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3167 - Macarena Tulum | 3167 | 05:55:48 | Si | 23:15:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 3168 - Macarena Chiquila | 3168 | Sin dato | Sin dato | 22:08:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 3502 - BB Bacalar | 3502 | 21:00:28 | No | 21:22:44 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:01:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 5002 - Tenosique Centro | 5002 | 06:55:37 | Si | 22:06:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-11 | 5003 - Emiliano Zapata | 5003 | 07:12:30 | No | 22:28:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 5004 - Tab. Balancan | 5004 | 07:08:30 | No | 22:18:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 5010 - Ciudad Pemex | 5010 | 07:10:33 | No | 21:53:14 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6001 - Chiapas Palenque 1 | 6001 | 07:01:12 | No | 20:14:36 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6003 - Chiapas Comitan 1 | 6003 | 07:03:04 | No | 21:31:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6004 - Villaflores | 6004 | 07:22:58 | No | 21:24:21 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:02:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 6006 - Chiapas Comitan 2 | 6006 | 07:14:22 | No | 21:23:08 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6007 - Chiapas Ocozocoautla | 6007 | 07:07:36 | No | 21:13:07 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6008 - Chiapas Teopisca | 6008 | 07:01:38 | No | 21:27:18 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:19:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:39:50 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:08:45 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 6014 - Tuxtla Santa María | 6014 | 07:10:17 | No | 21:18:18 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6015 - Tuxtla San José | 6015 | 07:10:15 | No | 21:20:52 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6016 - Alcala | 6016 | 07:05:38 | No | 21:29:36 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:13:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:39:17 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-11 | 6020 - Colon | 6020 | 07:03:13 | No | 21:12:49 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6021 - Niño de Atocha | 6021 | 07:00:01 | No | 21:11:47 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6022 - Bonampak | 6022 | 07:10:51 | No | 21:17:58 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6024 - Chiapas Catazaja | 6024 | 07:21:36 | No | 22:38:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-11 | 6026 - Tuxtla Patria Nueva | 6026 | 07:02:22 | No | 21:02:32 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-11 | 6028 - Comitan Las Flores | 6028 | 07:05:58 | No | 21:32:45 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:41:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1025 - Uman | 1025 | 07:18:20 | No | 22:17:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 1033 - Maxcanu | 1033 | 06:53:47 | Si | 22:33:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 1037 - Visente Solís | 1037 | 06:43:21 | Si | 22:59:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 1068 - Chemax | 1068 | 07:03:12 | No | 22:28:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 1080 50 sur | Sin dato | 06:59:34 | Si | 22:21:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 1082 - Mulchchen | 1082 | 07:08:44 | No | 22:16:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 1110 - Miguel Hidalgo | 1110 | 07:23:07 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-12 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:14:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1116 - Seye | 1116 | 06:56:33 | Si | 22:40:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 1120 - Fco Montejo 3 | 1120 | Sin dato | Sin dato | 22:17:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:18:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1215 - Paseos De Opichen | 1215 | 07:00:49 | No | 22:24:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:20:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1244 - Gran Santa Fe | 1244 | 07:06:58 | No | 22:27:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 1248 - Real Montejo | 1248 | 07:01:41 | No | 22:06:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:08:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1261 - Conkal 1 | 1261 | 06:42:53 | Si | 22:05:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 1269 - San Marcos Sustentable | 1269 | 06:55:20 | Si | 22:27:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 1279 - Cri Cri | 1279 | 07:05:38 | No | 22:12:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:15:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1292 - Cuzamar | 1292 | 07:01:06 | No | 22:20:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 1298 - Muna 2 | 1298 | 06:54:46 | Si | 22:18:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:59:26 | Si | 22:14:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:12:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:20:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1318 CHOCHOLA | Sin dato | 06:59:14 | Si | 22:14:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 23:10:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 16:28:30 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:49 | No | 22:39:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2001 - Campeche 16 | 2001 | 07:02:20 | No | 22:12:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2002 - Campeche Mercado | 2002 | 05:57:30 | Si | 21:09:27 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 2003 - Champotón | 2003 | 06:06:04 | Si | 21:07:42 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 2004 - CAM Santa Ana | 2004 | 06:20:45 | Si | 22:29:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:05:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2008 - Escarsega | 2008 | 06:53:02 | Si | 22:19:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:22:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2011 - Hopelchen | 2011 | 06:59:07 | Si | 22:14:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2012 - Escarcega 2 | 2012 | 05:44:42 | Si | 22:26:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2013 - Seyba Playa | 2013 | 07:07:14 | No | 22:43:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2014 - Kala | 2014 | 07:08:54 | No | 22:32:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2016 - Carmen Tecolutla | 2016 | 07:20:09 | No | 22:22:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 23:02:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2018 - Av. Central | 2018 | 06:59:13 | Si | 22:07:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2019 - Champotón 2 | 2019 | 06:29:02 | Si | 22:19:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:18:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2021 - Campeche Candelaria | 2021 | 07:01:37 | No | 22:18:44 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:53:46 | Si | 22:35:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:18:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:09:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2027 - Champotón 3 | 2027 | 06:53:13 | Si | 22:21:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2028 - Campeche Samula | 2028 | 06:49:57 | Si | 22:31:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2029 - Palma Real | 2029 | 06:59:10 | Si | 22:10:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:12:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:23:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2032 - Hopelchen 2 | 2032 | 06:57:26 | Si | 22:18:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:28:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2034 - Calkini 2 | 2034 | 06:58:53 | Si | 22:43:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2035 - Pomuch | 2035 | 07:03:51 | No | 22:25:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:12:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2037 - Tenabo | 2037 | 06:46:32 | Si | 22:19:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2038 - Calkini Mercado | 2038 | 06:33:02 | Si | 22:19:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2039 - Xpujil | 2039 | Sin dato | Sin dato | 22:32:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:39:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 23:39:02 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2042 - Palizada | 2042 | 07:08:46 | No | 22:24:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2043 - Nunkini | 2043 | 06:55:40 | Si | 22:17:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:22:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2045 - Champoton 5 | 2045 | 06:52:53 | Si | 22:19:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2046 - El Polvorín | 2046 | 06:50:18 | Si | 22:24:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2047 - China | 2047 | 06:58:57 | Si | 22:44:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2048 - Campeche Centro | 2048 | 06:48:48 | Si | 21:12:07 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 2049 - Becal | 2049 | 07:12:34 | No | 22:39:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2051 - Campeche Morelos | 2051 | 06:59:06 | Si | 22:27:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2052 - Campeche Granjas | 2052 | 06:57:14 | Si | 22:15:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:27:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2054 - Plan Chac | 2054 | 06:55:16 | Si | 22:22:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2055 - Dzilbachen | 2055 | 21:57:39 | No | 22:26:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:06:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2059 - Calkini 4 | 2059 | 06:55:12 | Si | 22:18:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2060 - Calkini 5 | 2060 | 06:58:39 | Si | 22:53:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2061 - Fidel Velazquez | 2061 | 22:00:25 | No | 22:48:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2062 - Kanisté | 2062 | 06:57:51 | Si | 21:40:42 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 2063 - Montecristo | 2063 | 06:52:22 | Si | 22:10:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2064 - Tomas Aznar | 2064 | 22:02:01 | No | 22:33:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2065 - Pomuch 2 | 2065 | 06:59:43 | Si | 22:25:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2066 - Isla Aguada | 2066 | 06:59:17 | Si | 22:32:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2067 - Candelaria 3 | 2067 | 06:59:48 | Si | 22:21:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:32:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2069 - Hopelchen 3 | 2069 | 06:59:24 | Si | 22:17:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2070 - Minas(1) | 2070 | 07:07:47 | No | 22:25:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2072 - Xpujil 2 | 2072 | 06:50:15 | Si | 22:34:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2074 - Bellavista | 2074 | 06:56:35 | Si | 22:26:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2076 - Ejido Carrillo Puerto | 2076 | 06:27:39 | Si | 22:06:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2077 - Campeche Siglo XXI | 2077 | 06:42:10 | Si | 22:30:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:18:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2079 - Bonfil | 2079 | 21:53:37 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-12 | 2080 - Ramon Espinola | 2080 | 06:54:40 | Si | 22:38:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2081 - Edzna | 2081 | 07:04:17 | No | 22:31:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2082 - Av. Periferia | 2082 | 14:32:00 | No | 22:14:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 2084 - Holpelchen 4 | 2084 | 06:50:52 | Si | 22:17:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2085 - Escarcega 7 | 2085 | 06:50:34 | Si | 22:20:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2086 - Champoton 6 | 2086 | 06:52:37 | Si | 22:25:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:28:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2088 - Calkini 6 | 2088 | Sin dato | Sin dato | 22:19:23 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 2089 - Escarcega 8 | 2089 | 06:54:00 | Si | 22:20:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2090 - Calkini 7 | 2090 | 06:49:10 | Si | 22:33:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2091 - Hecelchakan 2 | 2091 | 06:49:20 | Si | 22:46:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2092 - Lerma | 2092 | 06:38:05 | Si | 22:13:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2093 - Tenabo 2 | 2093 | 06:57:26 | Si | 22:31:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 2095 - Champoton 8 | 2095 | 06:57:23 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-12 | 2096 - Escarcega 10 | 2096 | 07:00:18 | No | 22:08:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 3005 - Cancun Niños Heroes | 3005 | 05:50:00 | Si | 20:23:57 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 3008 - Playa del Carmen 2 | 3008 | Sin dato | Sin dato | 20:05:25 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 3013 - QROO Felipe Carrillo Puerto | 3013 | 06:00:24 | Si | 21:15:36 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 20:18:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 3040 - Kantunilkin | 3040 | 05:48:01 | Si | 20:21:22 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:19:10 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 20:45:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:14:14 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 20:41:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 3113 - Playa Villas del Sol | 3113 | 05:56:42 | Si | 20:57:00 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:14:37 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 3124 - Bacalar Mercado | 3124 | 05:55:20 | Si | 21:27:18 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 3152 - Kantunilkin 2 | 3152 | 05:51:01 | Si | 20:16:30 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-12 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:17:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 3167 - Macarena Tulum | 3167 | 05:45:30 | Si | 22:22:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 3168 - Macarena Chiquila | 3168 | Sin dato | Sin dato | 21:39:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 3502 - BB Bacalar | 3502 | 21:31:57 | No | 21:55:39 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:07:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 5002 - Tenosique Centro | 5002 | 06:59:25 | Si | 22:06:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-12 | 5003 - Emiliano Zapata | 5003 | 07:05:53 | No | 22:08:04 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 5004 - Tab. Balancan | 5004 | 07:06:44 | No | 22:13:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-12 | 5010 - Ciudad Pemex | 5010 | 07:08:26 | No | 21:38:03 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6001 - Chiapas Palenque 1 | 6001 | 07:00:53 | No | 17:12:22 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6003 - Chiapas Comitan 1 | 6003 | 07:01:32 | No | 21:31:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6004 - Villaflores | 6004 | 07:19:38 | No | 21:35:10 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:08:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 6006 - Chiapas Comitan 2 | 6006 | 07:14:14 | No | 21:24:09 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6007 - Chiapas Ocozocoautla | 6007 | 07:21:51 | No | 21:17:37 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6008 - Chiapas Teopisca | 6008 | 07:02:27 | No | 21:35:23 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:19:27 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:43:20 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:04:42 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 6014 - Tuxtla Santa María | 6014 | 07:03:30 | No | 21:29:19 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6015 - Tuxtla San José | 6015 | 07:20:14 | No | 21:21:24 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:18:28 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:16:49 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 6019 - Venustiano Carranza | 6019 | 07:12:59 | No | 21:41:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6020 - Colon | 6020 | 07:23:30 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-12 | 6021 - Niño de Atocha | 6021 | 07:02:37 | No | 21:06:09 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6022 - Bonampak | 6022 | 07:02:47 | No | 21:10:48 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:39:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-12 | 6026 - Tuxtla Patria Nueva | 6026 | 07:12:03 | No | 21:36:22 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-12 | 6028 - Comitan Las Flores | 6028 | 07:06:13 | No | 21:38:03 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:38:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1025 - Uman | 1025 | 07:00:47 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-13 | 1033 - Maxcanu | 1033 | 06:54:28 | Si | 22:35:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 1037 - Visente Solís | 1037 | 06:55:39 | Si | 22:45:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 1068 - Chemax | 1068 | 07:00:07 | No | 22:27:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 1080 50 sur | Sin dato | 07:01:15 | No | 22:15:09 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 1082 - Mulchchen | 1082 | 07:01:23 | No | 22:34:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 1110 - Miguel Hidalgo | 1110 | 07:13:15 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-13 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:20:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1116 - Seye | 1116 | 07:04:19 | No | 22:40:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 1120 - Fco Montejo 3 | 1120 | Sin dato | Sin dato | 22:24:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:28:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1215 - Paseos De Opichen | 1215 | 07:04:40 | No | 22:24:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:23:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1244 - Gran Santa Fe | 1244 | 07:03:53 | No | 22:12:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 1248 - Real Montejo | 1248 | 07:02:46 | No | 22:14:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 1258 - Mérida Pedro Infante | 1258 | 06:59:17 | Si | 22:08:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 1261 - Conkal 1 | 1261 | 07:01:56 | No | 22:02:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 1269 - San Marcos Sustentable | 1269 | 06:56:33 | Si | 22:23:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 1279 - Cri Cri | 1279 | 06:54:33 | Si | 22:08:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:08:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1292 - Cuzamar | 1292 | 06:57:31 | Si | 22:10:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 1298 - Muna 2 | 1298 | 06:54:57 | Si | 22:28:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:51:35 | Si | 22:15:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:10:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:13:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1318 CHOCHOLA | Sin dato | 06:54:40 | Si | 22:12:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 23:03:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:07:24 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:06:04 | No | 23:15:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2001 - Campeche 16 | 2001 | 06:59:50 | Si | 22:10:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2002 - Campeche Mercado | 2002 | 05:58:17 | Si | 21:12:22 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-13 | 2003 - Champotón | 2003 | 06:01:49 | Si | 21:26:33 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-13 | 2004 - CAM Santa Ana | 2004 | 06:08:46 | Si | 22:51:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:33:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2008 - Escarsega | 2008 | 06:41:52 | Si | 22:13:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:58:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2011 - Hopelchen | 2011 | 06:56:00 | Si | 22:15:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:30:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2013 - Seyba Playa | 2013 | 07:06:02 | No | 22:39:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2014 - Kala | 2014 | 06:54:45 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-13 | 2016 - Carmen Tecolutla | 2016 | 06:50:24 | Si | 22:21:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:43:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2018 - Av. Central | 2018 | 06:56:09 | Si | 22:05:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2019 - Champotón 2 | 2019 | 06:49:05 | Si | 22:19:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:25:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2021 - Campeche Candelaria | 2021 | 07:05:11 | No | 22:15:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2023 - Campeche Av. Lopez Mateos | 2023 | 07:00:08 | No | 22:49:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:25:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:10:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2027 - Champotón 3 | 2027 | 06:59:37 | Si | 22:28:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2028 - Campeche Samula | 2028 | 06:58:21 | Si | 22:23:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2029 - Palma Real | 2029 | 06:53:29 | Si | 22:11:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:16:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:13:02 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2032 - Hopelchen 2 | 2032 | 06:59:11 | Si | 22:24:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:17:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2034 - Calkini 2 | 2034 | Sin dato | Sin dato | 22:41:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2035 - Pomuch | 2035 | Sin dato | Sin dato | 22:27:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:12:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2037 - Tenabo | 2037 | 06:52:29 | Si | 22:13:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2038 - Calkini Mercado | 2038 | 06:34:03 | Si | 22:14:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2039 - Xpujil | 2039 | 06:48:28 | Si | 22:13:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:46:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:16:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2042 - Palizada | 2042 | 07:09:08 | No | 22:15:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2043 - Nunkini | 2043 | 19:29:52 | No | 22:18:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:12:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2045 - Champoton 5 | 2045 | 06:55:39 | Si | 22:11:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2046 - El Polvorín | 2046 | 06:56:19 | Si | 22:26:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2047 - China | 2047 | 06:54:12 | Si | 22:59:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2048 - Campeche Centro | 2048 | 21:32:12 | No | 21:47:14 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 2049 - Becal | 2049 | 18:21:04 | No | 22:40:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2051 - Campeche Morelos | 2051 | 06:43:57 | Si | 22:10:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2052 - Campeche Granjas | 2052 | 07:05:49 | No | 22:46:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:17:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2054 - Plan Chac | 2054 | 06:49:56 | Si | 22:32:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:12:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2059 - Calkini 4 | 2059 | 06:42:31 | Si | 22:26:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2060 - Calkini 5 | 2060 | 06:58:55 | Si | 22:25:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2061 - Fidel Velazquez | 2061 | Sin dato | Sin dato | 22:24:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2062 - Kanisté | 2062 | 06:57:14 | Si | 21:29:49 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-13 | 2063 - Montecristo | 2063 | 06:59:45 | Si | 22:20:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2064 - Tomas Aznar | 2064 | 22:01:19 | No | 22:34:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2065 - Pomuch 2 | 2065 | 06:59:26 | Si | 22:33:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2066 - Isla Aguada | 2066 | 06:52:50 | Si | 22:41:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2067 - Candelaria 3 | 2067 | 06:59:10 | Si | 22:44:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:27:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2069 - Hopelchen 3 | 2069 | 06:55:00 | Si | 22:28:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2070 - Minas(1) | 2070 | 07:01:22 | No | 22:25:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2072 - Xpujil 2 | 2072 | 06:50:02 | Si | 22:39:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2074 - Bellavista | 2074 | 06:53:17 | Si | 22:24:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2076 - Ejido Carrillo Puerto | 2076 | Sin dato | Sin dato | 22:09:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2077 - Campeche Siglo XXI | 2077 | 06:42:48 | Si | 22:32:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:15:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2079 - Bonfil | 2079 | 21:56:15 | No | 22:09:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2080 - Ramon Espinola | 2080 | 06:58:36 | Si | 22:26:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2081 - Edzna | 2081 | Sin dato | Sin dato | 22:42:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2082 - Av. Periferia | 2082 | 07:00:53 | No | 22:18:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2084 - Holpelchen 4 | 2084 | 07:18:09 | No | 22:33:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2085 - Escarcega 7 | 2085 | 06:52:00 | Si | 22:10:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2086 - Champoton 6 | 2086 | Sin dato | Sin dato | 22:24:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:15:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 2088 - Calkini 6 | 2088 | 06:54:34 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-13 | 2089 - Escarcega 8 | 2089 | 07:04:37 | No | 22:12:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 2090 - Calkini 7 | 2090 | 06:57:34 | Si | 22:24:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2091 - Hecelchakan 2 | 2091 | 06:52:34 | Si | 22:30:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2092 - Lerma | 2092 | 06:35:16 | Si | 22:14:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2093 - Tenabo 2 | 2093 | 06:55:27 | Si | 22:31:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 2095 - Champoton 8 | 2095 | 06:58:20 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-13 | 2096 - Escarcega 10 | 2096 | 07:29:36 | No | 22:10:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 3005 - Cancun Niños Heroes | 3005 | 05:53:18 | Si | 21:12:55 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-13 | 3008 - Playa del Carmen 2 | 3008 | 05:58:16 | Si | 21:10:44 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-13 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:19:33 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:03:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:21:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:43:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:11:07 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:14:24 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:23:22 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:22:12 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3113 - Playa Villas del Sol | 3113 | 05:55:41 | Si | 22:55:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:21:45 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3124 - Bacalar Mercado | 3124 | 05:53:44 | Si | 21:22:29 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-13 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:19:55 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:21:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 3167 - Macarena Tulum | 3167 | 05:40:51 | Si | 22:32:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-13 | 3502 - BB Bacalar | 3502 | 21:01:07 | No | 21:30:50 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:09:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 5002 - Tenosique Centro | 5002 | 07:04:24 | No | 22:07:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 5003 - Emiliano Zapata | 5003 | 07:07:17 | No | 22:19:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 5004 - Tab. Balancan | 5004 | 07:05:24 | No | 22:11:48 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 5010 - Ciudad Pemex | 5010 | 07:09:34 | No | 21:50:03 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 6001 - Chiapas Palenque 1 | 6001 | 07:02:23 | No | 20:06:09 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 6003 - Chiapas Comitan 1 | 6003 | 07:00:32 | No | 21:32:28 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 6004 - Villaflores | 6004 | 07:06:08 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-13 | 6006 - Chiapas Comitan 2 | 6006 | 07:16:56 | No | 21:31:28 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 6007 - Chiapas Ocozocoautla | 6007 | 06:52:20 | Si | 21:12:51 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-13 | 6008 - Chiapas Teopisca | 6008 | 07:00:04 | No | 23:41:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:24:39 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:13:43 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 6014 - Tuxtla Santa María | 6014 | 07:02:45 | No | 21:11:19 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 6015 - Tuxtla San José | 6015 | 08:09:58 | No | 22:10:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:47:35 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:37:43 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-13 | 6020 - Colon | 6020 | 07:09:21 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-13 | 6021 - Niño de Atocha | 6021 | 07:00:59 | No | 21:10:19 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 6022 - Bonampak | 6022 | 07:05:25 | No | 21:10:59 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 6024 - Chiapas Catazaja | 6024 | 07:33:54 | No | 22:39:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-13 | 6026 - Tuxtla Patria Nueva | 6026 | 07:09:55 | No | 20:57:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-13 | 6028 - Comitan Las Flores | 6028 | 07:04:45 | No | 21:38:05 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:41:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 1025 - Uman | 1025 | 07:10:55 | No | 22:33:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1033 - Maxcanu | 1033 | 06:59:13 | Si | 22:32:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 1037 - Visente Solís | 1037 | 06:39:11 | Si | 22:39:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 1068 - Chemax | 1068 | 06:59:41 | Si | 22:19:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 1080 50 sur | Sin dato | 07:01:46 | No | 22:12:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1082 - Mulchchen | 1082 | 07:04:18 | No | 22:29:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1110 - Miguel Hidalgo | 1110 | 07:10:54 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:30:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 1116 - Seye | 1116 | 07:08:34 | No | 22:33:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1120 - Fco Montejo 3 | 1120 | 07:01:02 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:24:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 1215 - Paseos De Opichen | 1215 | 07:03:12 | No | 22:27:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1236 - Boulevards de Oriente | 1236 | 07:01:27 | No | 22:25:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1244 - Gran Santa Fe | 1244 | 07:03:18 | No | 22:15:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1248 - Real Montejo | 1248 | 07:12:41 | No | 22:18:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1258 - Mérida Pedro Infante | 1258 | 06:57:37 | Si | 22:09:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 1261 - Conkal 1 | 1261 | 06:54:57 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 1269 - San Marcos Sustentable | 1269 | 06:52:34 | Si | 22:31:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 1279 - Cri Cri | 1279 | 06:53:15 | Si | 22:18:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 1281 - Sotuta | 1281 | 07:07:38 | No | 22:12:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1282 - Tizimin 6 | 1282 | 14:46:30 | No | 22:18:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1292 - Cuzamar | 1292 | 06:55:57 | Si | 22:20:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 1298 - Muna 2 | 1298 | 06:55:42 | Si | 22:31:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:55:04 | Si | 22:16:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:11:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:18:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 1318 CHOCHOLA | Sin dato | 07:00:07 | No | 22:12:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 23:04:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:05:27 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:04:45 | No | 22:45:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2001 - Campeche 16 | 2001 | 06:59:24 | Si | 22:16:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2002 - Campeche Mercado | 2002 | 05:58:03 | Si | 21:19:25 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-14 | 2003 - Champotón | 2003 | 06:00:08 | Si | 21:15:34 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-14 | 2004 - CAM Santa Ana | 2004 | 06:09:06 | Si | 22:40:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:23:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2008 - Escarsega | 2008 | 06:44:16 | Si | 22:11:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:27:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2011 - Hopelchen | 2011 | 06:55:27 | Si | 23:06:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:27:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2013 - Seyba Playa | 2013 | 06:58:04 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 2014 - Kala | 2014 | 06:55:40 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 2016 - Carmen Tecolutla | 2016 | 07:02:17 | No | 22:20:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:29:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:07:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2019 - Champotón 2 | 2019 | 06:33:13 | Si | 22:26:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:14:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2021 - Campeche Candelaria | 2021 | 07:09:17 | No | 22:19:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:47:12 | Si | 22:45:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:13:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2027 - Champotón 3 | 2027 | 06:59:37 | Si | 22:25:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2028 - Campeche Samula | 2028 | 06:57:15 | Si | 22:27:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2029 - Palma Real | 2029 | 06:54:32 | Si | 22:12:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:16:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2032 - Hopelchen 2 | 2032 | 06:51:30 | Si | 22:19:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2034 - Calkini 2 | 2034 | 07:00:12 | No | 22:29:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2035 - Pomuch | 2035 | 07:11:57 | No | 22:33:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:11:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2037 - Tenabo | 2037 | 06:49:27 | Si | 22:18:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2038 - Calkini Mercado | 2038 | 06:31:48 | Si | 22:14:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2039 - Xpujil | 2039 | 06:36:10 | Si | 22:39:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:30:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:13:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2042 - Palizada | 2042 | 07:08:58 | No | 22:17:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2043 - Nunkini | 2043 | 06:54:23 | Si | 22:35:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:08:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2045 - Champoton 5 | 2045 | 07:03:56 | No | 22:34:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2046 - El Polvorín | 2046 | 06:54:42 | Si | 22:27:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2047 - China | 2047 | 06:55:03 | Si | 22:33:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:47:51 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2049 - Becal | 2049 | 20:01:05 | No | 22:46:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:25:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2052 - Campeche Granjas | 2052 | 07:04:04 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:28:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2054 - Plan Chac | 2054 | 21:58:11 | No | 22:28:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2055 - Dzilbachen | 2055 | 02:35:48 | Si | 22:29:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:19:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2059 - Calkini 4 | 2059 | 06:51:45 | Si | 22:27:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2060 - Calkini 5 | 2060 | 06:47:02 | Si | 22:41:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2061 - Fidel Velazquez | 2061 | 22:00:18 | No | 22:39:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2062 - Kanisté | 2062 | 07:00:31 | No | 21:40:36 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 2063 - Montecristo | 2063 | 06:58:10 | Si | 22:17:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2064 - Tomas Aznar | 2064 | 22:01:33 | No | 22:18:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2065 - Pomuch 2 | 2065 | 06:59:06 | Si | 22:26:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2066 - Isla Aguada | 2066 | 06:57:53 | Si | 22:32:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2067 - Candelaria 3 | 2067 | 06:35:59 | Si | 22:10:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:22:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2069 - Hopelchen 3 | 2069 | 06:54:20 | Si | 22:27:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2070 - Minas(1) | 2070 | 06:44:07 | Si | 22:30:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2072 - Xpujil 2 | 2072 | 06:45:28 | Si | 22:55:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2074 - Bellavista | 2074 | 06:51:01 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 2076 - Ejido Carrillo Puerto | 2076 | Sin dato | Sin dato | 22:16:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2077 - Campeche Siglo XXI | 2077 | Sin dato | Sin dato | 22:18:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:21:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2079 - Bonfil | 2079 | 22:01:00 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 2080 - Ramon Espinola | 2080 | 06:58:08 | Si | 22:58:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2081 - Edzna | 2081 | 07:06:32 | No | 22:22:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2082 - Av. Periferia | 2082 | 07:00:43 | No | 22:12:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 2084 - Holpelchen 4 | 2084 | 07:04:10 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 2085 - Escarcega 7 | 2085 | 06:52:42 | Si | 22:14:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2086 - Champoton 6 | 2086 | 11:27:18 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:11:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2088 - Calkini 6 | 2088 | 06:52:56 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:09:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 2090 - Calkini 7 | 2090 | 06:56:19 | Si | 22:30:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2091 - Hecelchakan 2 | 2091 | 06:43:36 | Si | 22:11:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2092 - Lerma | 2092 | 06:43:37 | Si | 22:22:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2093 - Tenabo 2 | 2093 | 06:54:57 | Si | 22:41:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 2095 - Champoton 8 | 2095 | 06:56:56 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 2096 - Escarcega 10 | 2096 | 07:03:05 | No | 22:14:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 3005 - Cancun Niños Heroes | 3005 | 05:45:07 | Si | 21:08:07 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-14 | 3008 - Playa del Carmen 2 | 3008 | 05:55:04 | Si | 21:05:53 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-14 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:26:00 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3017 - Playa del Carmen 3 | 3017 | 11:31:15 | No | 21:08:47 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:28:08 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3051 - QR Playa Av. 115 | 3051 | 14:29:35 | No | 21:38:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:13:39 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:14:22 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:26:50 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:26:19 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3113 - Playa Villas del Sol | 3113 | 05:45:22 | Si | 21:53:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-14 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:29:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3124 - Bacalar Mercado | 3124 | 05:52:51 | Si | 21:15:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-14 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:16:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:40:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 22:21:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 3168 - Macarena Chiquila | 3168 | 06:01:55 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-14 | 3502 - BB Bacalar | 3502 | 21:33:04 | No | 21:36:18 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:01:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 5002 - Tenosique Centro | 5002 | 07:03:56 | No | 22:09:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 5003 - Emiliano Zapata | 5003 | 07:00:37 | No | 22:08:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 5004 - Tab. Balancan | 5004 | 07:01:06 | No | 22:23:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-14 | 5010 - Ciudad Pemex | 5010 | 07:08:38 | No | 21:50:42 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 6001 - Chiapas Palenque 1 | 6001 | 07:06:05 | No | 20:09:21 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 6003 - Chiapas Comitan 1 | 6003 | 07:00:40 | No | 21:30:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 21:35:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:29:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 6006 - Chiapas Comitan 2 | 6006 | 07:11:26 | No | 21:14:26 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 6007 - Chiapas Ocozocoautla | 6007 | 07:00:24 | No | 21:23:50 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 6008 - Chiapas Teopisca | 6008 | 06:59:22 | Si | 21:25:45 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-14 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 23:03:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:51:07 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:07:11 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 6014 - Tuxtla Santa María | 6014 | 06:57:27 | Si | 21:10:19 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-14 | 6015 - Tuxtla San José | 6015 | 07:10:12 | No | 21:12:24 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:17:37 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:31:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:34:03 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 6020 - Colon | 6020 | 07:07:56 | No | 21:04:45 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 6021 - Niño de Atocha | 6021 | 07:02:05 | No | 21:17:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 6022 - Bonampak | 6022 | 07:04:12 | No | 21:13:58 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-14 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:40:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-14 | 6026 - Tuxtla Patria Nueva | 6026 | 06:55:47 | Si | 23:15:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-14 | 6028 - Comitan Las Flores | 6028 | 07:08:56 | No | 21:31:44 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:32:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 1025 - Uman | 1025 | 07:03:35 | No | 22:16:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1033 - Maxcanu | 1033 | 06:54:37 | Si | 22:32:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 1037 - Visente Solís | 1037 | 06:41:32 | Si | 22:51:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 1068 - Chemax | 1068 | 06:59:37 | Si | 23:41:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 1080 50 sur | Sin dato | 06:58:31 | Si | 22:15:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 1082 - Mulchchen | 1082 | 07:06:54 | No | 22:20:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1110 - Miguel Hidalgo | 1110 | 07:12:43 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-15 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:28:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 1116 - Seye | 1116 | 07:00:40 | No | 22:29:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:25:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 1215 - Paseos De Opichen | 1215 | 07:04:07 | No | 22:25:48 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1236 - Boulevards de Oriente | 1236 | 07:05:52 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-15 | 1244 - Gran Santa Fe | 1244 | 07:13:50 | No | 22:24:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1248 - Real Montejo | 1248 | 07:01:37 | No | 22:08:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1258 - Mérida Pedro Infante | 1258 | 21:55:07 | No | 22:10:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1261 - Conkal 1 | 1261 | 07:02:29 | No | 22:17:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1269 - San Marcos Sustentable | 1269 | 06:51:28 | Si | 22:26:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 1279 - Cri Cri | 1279 | 07:09:49 | No | 22:11:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:26:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 1282 - Tizimin 6 | 1282 | 07:00:55 | No | 22:21:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1292 - Cuzamar | 1292 | 07:00:13 | No | 22:06:57 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 1298 - Muna 2 | 1298 | 06:54:38 | Si | 22:13:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:53:03 | Si | 22:16:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:14:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:23:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 1318 CHOCHOLA | Sin dato | 06:59:08 | Si | 22:12:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:17:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:14 | No | 22:13:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2001 - Campeche 16 | 2001 | 06:59:16 | Si | 22:24:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2002 - Campeche Mercado | 2002 | 05:59:50 | Si | 21:14:58 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 2003 - Champotón | 2003 | 06:01:18 | Si | 21:12:35 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 2004 - CAM Santa Ana | 2004 | 06:11:19 | Si | 22:24:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:07:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2008 - Escarsega | 2008 | 06:48:07 | Si | 22:29:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2011 - Hopelchen | 2011 | 14:16:15 | No | 22:13:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 23:03:56 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2013 - Seyba Playa | 2013 | 07:01:42 | No | 22:37:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2014 - Kala | 2014 | 06:50:39 | Si | 23:03:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2016 - Carmen Tecolutla | 2016 | 06:58:44 | Si | 22:17:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:35:23 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2018 - Av. Central | 2018 | 06:56:37 | Si | 22:07:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2019 - Champotón 2 | 2019 | 06:35:12 | Si | 22:16:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:11:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2021 - Campeche Candelaria | 2021 | 07:04:20 | No | 22:20:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:52:09 | Si | 22:42:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:19:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:09:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2027 - Champotón 3 | 2027 | 06:55:01 | Si | 22:19:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2028 - Campeche Samula | 2028 | 07:09:21 | No | 22:17:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2029 - Palma Real | 2029 | Sin dato | Sin dato | 22:39:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:25:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:13:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2032 - Hopelchen 2 | 2032 | 14:16:05 | No | 22:20:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 04:06:48 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2034 - Calkini 2 | 2034 | 06:58:50 | Si | 22:39:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2035 - Pomuch | 2035 | 07:02:30 | No | 22:25:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:16:48 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2037 - Tenabo | 2037 | 06:49:32 | Si | 22:14:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2038 - Calkini Mercado | 2038 | 06:32:38 | Si | 22:24:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2039 - Xpujil | 2039 | 06:55:09 | Si | 22:26:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:41:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:12:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2042 - Palizada | 2042 | 06:57:47 | Si | 22:06:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2043 - Nunkini | 2043 | 06:57:08 | Si | 22:32:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:14:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2045 - Champoton 5 | 2045 | 06:57:42 | Si | 22:18:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2046 - El Polvorín | 2046 | 06:54:04 | Si | 22:34:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2047 - China | 2047 | 06:55:58 | Si | 22:47:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2048 - Campeche Centro | 2048 | 06:48:31 | Si | 21:46:04 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 2049 - Becal | 2049 | 07:00:58 | No | 22:28:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:19:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2052 - Campeche Granjas | 2052 | 06:53:17 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-15 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:32:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2054 - Plan Chac | 2054 | 06:41:02 | Si | 22:25:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2055 - Dzilbachen | 2055 | 21:59:24 | No | 22:34:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:14:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2059 - Calkini 4 | 2059 | 06:43:28 | Si | 22:26:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2060 - Calkini 5 | 2060 | 06:54:34 | Si | 22:54:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2061 - Fidel Velazquez | 2061 | Sin dato | Sin dato | 22:33:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2062 - Kanisté | 2062 | 06:49:38 | Si | 21:27:00 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 2063 - Montecristo | 2063 | 06:57:57 | Si | 22:27:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2064 - Tomas Aznar | 2064 | 22:01:37 | No | 22:29:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2065 - Pomuch 2 | 2065 | 07:03:09 | No | 23:15:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2066 - Isla Aguada | 2066 | 07:02:45 | No | 22:35:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2067 - Candelaria 3 | 2067 | 06:58:09 | Si | 22:21:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:18:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2069 - Hopelchen 3 | 2069 | 14:15:57 | No | 22:35:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2070 - Minas(1) | 2070 | Sin dato | Sin dato | 22:24:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2072 - Xpujil 2 | 2072 | Sin dato | Sin dato | 22:40:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2074 - Bellavista | 2074 | 06:54:48 | Si | 22:21:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2076 - Ejido Carrillo Puerto | 2076 | 06:25:28 | Si | 22:29:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2077 - Campeche Siglo XXI | 2077 | 06:39:43 | Si | 22:29:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:18:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2079 - Bonfil | 2079 | 21:50:48 | No | 22:14:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2080 - Ramon Espinola | 2080 | 06:55:22 | Si | 22:57:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2081 - Edzna | 2081 | 07:00:24 | No | 22:43:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2082 - Av. Periferia | 2082 | 07:04:13 | No | 22:14:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2084 - Holpelchen 4 | 2084 | 22:01:51 | No | 22:48:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 2085 - Escarcega 7 | 2085 | 06:51:04 | Si | 22:16:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2086 - Champoton 6 | 2086 | Sin dato | Sin dato | 22:18:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:21:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 2088 - Calkini 6 | 2088 | 06:56:05 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-15 | 2089 - Escarcega 8 | 2089 | 06:56:06 | Si | 22:18:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2090 - Calkini 7 | 2090 | 06:40:47 | Si | 22:20:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2091 - Hecelchakan 2 | 2091 | 06:54:45 | Si | 22:31:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2092 - Lerma | 2092 | 06:32:49 | Si | 22:17:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2093 - Tenabo 2 | 2093 | 06:59:40 | Si | 22:27:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 2095 - Champoton 8 | 2095 | 06:53:33 | Si | 06:48:41 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 2096 - Escarcega 10 | 2096 | 07:03:48 | No | 22:13:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 3005 - Cancun Niños Heroes | 3005 | 05:45:00 | Si | 21:11:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 3008 - Playa del Carmen 2 | 3008 | 06:01:51 | Si | 21:08:06 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:37:03 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 3017 - Playa del Carmen 3 | 3017 | 16:47:52 | No | 21:04:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:33:45 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:34:30 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:29:42 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:08:29 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:25:38 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:19:22 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 3111 - Nva. Cozumel 1 | 3111 | 11:49:16 | No | 21:20:30 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 3113 - Playa Villas del Sol | 3113 | 05:55:41 | Si | 22:07:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 06:00:55 | Si | 21:31:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 3124 - Bacalar Mercado | 3124 | 05:52:57 | Si | 21:42:05 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 3152 - Kantunilkin 2 | 3152 | 05:50:33 | Si | 21:17:12 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:12:34 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 3167 - Macarena Tulum | 3167 | 05:57:12 | Si | 22:31:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-15 | 3502 - BB Bacalar | 3502 | 21:39:18 | No | 21:39:09 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:01:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 5002 - Tenosique Centro | 5002 | 07:01:32 | No | 22:08:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 5003 - Emiliano Zapata | 5003 | 07:02:29 | No | 22:09:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 5004 - Tab. Balancan | 5004 | 07:04:24 | No | 22:06:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 5010 - Ciudad Pemex | 5010 | 07:04:36 | No | 22:01:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 6001 - Chiapas Palenque 1 | 6001 | 07:04:09 | No | 20:07:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 6003 - Chiapas Comitan 1 | 6003 | 07:06:08 | No | 21:30:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 6004 - Villaflores | 6004 | 07:20:10 | No | 21:07:47 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:06:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 6006 - Chiapas Comitan 2 | 6006 | 07:16:04 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-15 | 6007 - Chiapas Ocozocoautla | 6007 | 06:56:39 | Si | 21:35:33 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 6008 - Chiapas Teopisca | 6008 | 06:59:15 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-15 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:19:49 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:47:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:04:29 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 6014 - Tuxtla Santa María | 6014 | 07:03:46 | No | 21:08:49 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 6015 - Tuxtla San José | 6015 | 07:16:14 | No | 21:15:56 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 6016 - Alcala | 6016 | 07:08:03 | No | 22:04:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-15 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:18:10 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:39:22 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 6020 - Colon | 6020 | 07:09:02 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-15 | 6021 - Niño de Atocha | 6021 | 07:04:02 | No | 21:12:01 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 6022 - Bonampak | 6022 | 07:04:40 | No | 21:07:51 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-15 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:57:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-15 | 6026 - Tuxtla Patria Nueva | 6026 | 06:59:05 | Si | 21:11:15 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-15 | 6028 - Comitan Las Flores | 6028 | 07:04:20 | No | 21:46:21 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:40:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 1025 - Uman | 1025 | 07:14:33 | No | 23:20:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1033 - Maxcanu | 1033 | 06:56:59 | Si | 22:40:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 1037 - Visente Solís | 1037 | 06:39:47 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-16 | 1068 - Chemax | 1068 | 07:03:57 | No | 22:21:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1080 50 sur | Sin dato | 07:00:13 | No | 22:16:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1082 - Mulchchen | 1082 | 06:54:29 | Si | 22:21:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 1110 - Miguel Hidalgo | 1110 | 07:12:32 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-16 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:30:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 1120 - Fco Montejo 3 | 1120 | 08:15:31 | No | 22:36:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:30:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 1215 - Paseos De Opichen | 1215 | 07:06:59 | No | 22:18:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1236 - Boulevards de Oriente | 1236 | 07:07:04 | No | 22:40:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1244 - Gran Santa Fe | 1244 | 07:00:44 | No | 22:14:58 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1248 - Real Montejo | 1248 | 07:04:45 | No | 22:12:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1258 - Mérida Pedro Infante | 1258 | 07:02:05 | No | 22:08:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1261 - Conkal 1 | 1261 | 06:50:19 | Si | 22:09:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 1269 - San Marcos Sustentable | 1269 | 06:55:02 | Si | 23:35:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 1279 - Cri Cri | 1279 | 07:14:35 | No | 22:13:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:28:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 1282 - Tizimin 6 | 1282 | 06:57:14 | Si | 22:20:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 1292 - Cuzamar | 1292 | 06:57:46 | Si | 22:10:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 1298 - Muna 2 | 1298 | 07:01:10 | No | 22:09:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:50:21 | Si | 22:18:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:08:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:27:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 1318 CHOCHOLA | Sin dato | 07:01:40 | No | 22:14:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 00:10:01 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:11:55 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:03:06 | No | 22:48:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2001 - Campeche 16 | 2001 | 07:03:10 | No | 22:07:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2002 - Campeche Mercado | 2002 | 05:57:53 | Si | 21:24:31 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-16 | 2003 - Champotón | 2003 | 06:03:11 | Si | 21:16:32 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-16 | 2004 - CAM Santa Ana | 2004 | 06:09:26 | Si | 22:18:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:10:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2008 - Escarsega | 2008 | 06:47:52 | Si | 22:36:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:11:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2011 - Hopelchen | 2011 | 06:56:27 | Si | 22:17:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2013 - Seyba Playa | 2013 | 06:55:35 | Si | 22:32:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2014 - Kala | 2014 | 07:00:24 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-16 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:37:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:52:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:08:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2019 - Champotón 2 | 2019 | 06:33:09 | Si | 22:15:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:13:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2021 - Campeche Candelaria | 2021 | 07:02:37 | No | 22:10:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:54:14 | Si | 22:33:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:27:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 23:26:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2027 - Champotón 3 | 2027 | 06:55:51 | Si | 22:25:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2028 - Campeche Samula | 2028 | 07:04:47 | No | 22:21:43 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2029 - Palma Real | 2029 | Sin dato | Sin dato | 22:28:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:14:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:15:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2032 - Hopelchen 2 | 2032 | 06:53:42 | Si | 22:20:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2034 - Calkini 2 | 2034 | 06:59:30 | Si | 22:36:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2035 - Pomuch | 2035 | 07:05:54 | No | 22:24:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:13:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2037 - Tenabo | 2037 | 06:51:07 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-16 | 2038 - Calkini Mercado | 2038 | 06:39:42 | Si | 22:15:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2039 - Xpujil | 2039 | 06:50:34 | Si | 22:12:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:31:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:10:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2042 - Palizada | 2042 | 07:08:51 | No | 22:18:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2043 - Nunkini | 2043 | 06:53:00 | Si | 22:27:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:09:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2045 - Champoton 5 | 2045 | 07:00:01 | No | 22:13:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2046 - El Polvorín | 2046 | 06:59:38 | Si | 22:37:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2047 - China | 2047 | 07:00:10 | No | 22:28:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2048 - Campeche Centro | 2048 | 06:50:17 | Si | 21:48:07 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-16 | 2049 - Becal | 2049 | 07:01:30 | No | 22:24:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2051 - Campeche Morelos | 2051 | 06:43:39 | Si | 22:25:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2052 - Campeche Granjas | 2052 | 06:57:57 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-16 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:25:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2054 - Plan Chac | 2054 | 06:41:36 | Si | 22:30:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2055 - Dzilbachen | 2055 | 21:55:36 | No | 22:23:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:17:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2059 - Calkini 4 | 2059 | 06:45:07 | Si | 22:21:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2060 - Calkini 5 | 2060 | 06:49:18 | Si | 22:44:21 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2061 - Fidel Velazquez | 2061 | 21:59:47 | No | 22:38:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2062 - Kanisté | 2062 | 07:10:53 | No | 21:43:38 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 2063 - Montecristo | 2063 | 06:59:41 | Si | 22:24:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2064 - Tomas Aznar | 2064 | 22:01:30 | No | 22:25:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2065 - Pomuch 2 | 2065 | 06:59:46 | Si | 22:34:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2066 - Isla Aguada | 2066 | 07:04:57 | No | 22:29:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2067 - Candelaria 3 | 2067 | 07:00:42 | No | 22:11:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:16:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2069 - Hopelchen 3 | 2069 | 06:56:56 | Si | 22:31:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2070 - Minas(1) | 2070 | 06:54:06 | Si | 22:32:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2072 - Xpujil 2 | 2072 | Sin dato | Sin dato | 22:34:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2074 - Bellavista | 2074 | 06:57:11 | Si | 22:20:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2076 - Ejido Carrillo Puerto | 2076 | Sin dato | Sin dato | 22:15:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2077 - Campeche Siglo XXI | 2077 | 06:38:04 | Si | 22:28:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2079 - Bonfil | 2079 | 21:48:57 | No | 22:14:58 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2080 - Ramon Espinola | 2080 | 06:58:46 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-16 | 2081 - Edzna | 2081 | 06:59:03 | Si | 22:41:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2082 - Av. Periferia | 2082 | 07:05:24 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-16 | 2084 - Holpelchen 4 | 2084 | 07:05:27 | No | 22:35:44 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2085 - Escarcega 7 | 2085 | 07:10:50 | No | 22:32:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 2086 - Champoton 6 | 2086 | Sin dato | Sin dato | 22:19:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:23:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2088 - Calkini 6 | 2088 | 06:56:55 | Si | 22:25:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:15:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 2090 - Calkini 7 | 2090 | 06:41:17 | Si | 22:45:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2091 - Hecelchakan 2 | 2091 | 06:52:22 | Si | 22:25:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2092 - Lerma | 2092 | 06:29:33 | Si | 22:22:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2093 - Tenabo 2 | 2093 | 06:58:12 | Si | 22:25:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2095 - Champoton 8 | 2095 | 06:58:25 | Si | 22:35:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 2096 - Escarcega 10 | 2096 | 07:02:21 | No | 22:24:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 3005 - Cancun Niños Heroes | 3005 | 05:49:11 | Si | 21:33:51 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-16 | 3008 - Playa del Carmen 2 | 3008 | 05:59:34 | Si | 21:06:05 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-16 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:20:07 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:13:01 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:32:36 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:20:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:20:55 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:11:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:36:11 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 22:56:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:24:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3113 - Playa Villas del Sol | 3113 | 05:55:22 | Si | 22:21:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:27:47 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3124 - Bacalar Mercado | 3124 | 05:49:34 | Si | 21:26:48 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-16 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:19:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:12:34 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 3167 - Macarena Tulum | 3167 | 05:52:44 | Si | 22:34:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 3502 - BB Bacalar | 3502 | 21:15:20 | No | 21:32:04 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:05:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 5002 - Tenosique Centro | 5002 | 06:53:05 | Si | 22:08:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-16 | 5003 - Emiliano Zapata | 5003 | 07:01:11 | No | 22:54:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 5004 - Tab. Balancan | 5004 | 07:04:51 | No | 22:04:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 5010 - Ciudad Pemex | 5010 | 07:05:31 | No | 22:01:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 6001 - Chiapas Palenque 1 | 6001 | 07:04:48 | No | 20:05:52 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 6003 - Chiapas Comitan 1 | 6003 | 07:00:23 | No | 21:33:17 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 6004 - Villaflores | 6004 | 07:12:11 | No | 21:30:08 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:15:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 6006 - Chiapas Comitan 2 | 6006 | 02:17:18 | Si | 21:28:57 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-16 | 6007 - Chiapas Ocozocoautla | 6007 | 06:55:05 | Si | 21:26:50 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-16 | 6008 - Chiapas Teopisca | 6008 | 07:02:10 | No | 21:24:57 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:20:33 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:42:56 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:08:11 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 6014 - Tuxtla Santa María | 6014 | 07:06:52 | No | 21:20:52 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 6015 - Tuxtla San José | 6015 | 07:21:58 | No | 21:14:50 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 6016 - Alcala | 6016 | 07:13:55 | No | 21:21:14 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 22:33:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 6020 - Colon | 6020 | 07:14:32 | No | 21:12:40 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-16 | 6021 - Niño de Atocha | 6021 | 07:07:11 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-16 | 6022 - Bonampak | 6022 | 07:06:41 | No | 23:33:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-16 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:50:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-16 | 6026 - Tuxtla Patria Nueva | 6026 | 07:08:48 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-16 | 6028 - Comitan Las Flores | 6028 | 07:02:45 | No | 21:31:25 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:46:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 1025 - Uman | 1025 | 07:06:49 | No | 22:25:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1033 - Maxcanu | 1033 | 06:53:34 | Si | 22:24:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 1037 - Visente Solís | 1037 | 06:44:10 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-17 | 1068 - Chemax | 1068 | 07:00:33 | No | 23:35:36 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1080 50 sur | Sin dato | 07:00:41 | No | 22:10:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1082 - Mulchchen | 1082 | 07:01:23 | No | 22:28:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1110 - Miguel Hidalgo | 1110 | 07:16:50 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-17 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:35:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 1116 - Seye | 1116 | 08:22:55 | No | 22:48:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1120 - Fco Montejo 3 | 1120 | 07:04:46 | No | 22:29:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:14:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 1215 - Paseos De Opichen | 1215 | 07:06:15 | No | 22:06:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:21:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 1244 - Gran Santa Fe | 1244 | 07:06:54 | No | 22:28:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1248 - Real Montejo | 1248 | 07:03:20 | No | 22:15:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1258 - Mérida Pedro Infante | 1258 | 06:58:40 | Si | 22:07:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 1261 - Conkal 1 | 1261 | 06:51:41 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-17 | 1269 - San Marcos Sustentable | 1269 | 06:57:37 | Si | 22:20:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 1279 - Cri Cri | 1279 | 07:04:42 | No | 22:11:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:07:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 1282 - Tizimin 6 | 1282 | 06:59:17 | Si | 22:12:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 1292 - Cuzamar | 1292 | 06:57:55 | Si | 22:21:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 1298 - Muna 2 | 1298 | 06:59:00 | Si | 22:28:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:49:17 | Si | 22:23:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:11:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:19:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 1318 CHOCHOLA | Sin dato | 07:00:24 | No | 22:13:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:33:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:25:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:04:56 | No | 22:08:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2001 - Campeche 16 | 2001 | 06:59:32 | Si | 22:13:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2002 - Campeche Mercado | 2002 | 05:57:29 | Si | 21:09:07 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-17 | 2003 - Champotón | 2003 | 05:59:31 | Si | 21:13:25 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-17 | 2004 - CAM Santa Ana | 2004 | 06:20:53 | Si | 22:28:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:41:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2008 - Escarsega | 2008 | 06:54:51 | Si | 22:27:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:49:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2011 - Hopelchen | 2011 | 06:58:11 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-17 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:43:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2013 - Seyba Playa | 2013 | 07:03:23 | No | 22:27:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2014 - Kala | 2014 | 07:04:16 | No | 22:46:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:18:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:34:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2018 - Av. Central | 2018 | 06:52:38 | Si | 22:11:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2019 - Champotón 2 | 2019 | 06:53:30 | Si | 22:18:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:13:43 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2021 - Campeche Candelaria | 2021 | 07:05:40 | No | 22:30:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:53:38 | Si | 22:19:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:22:53 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:15:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2027 - Champotón 3 | 2027 | 06:52:34 | Si | 22:22:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2028 - Campeche Samula | 2028 | 07:00:19 | No | 22:27:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2029 - Palma Real | 2029 | Sin dato | Sin dato | 22:24:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:19:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:16:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2032 - Hopelchen 2 | 2032 | 06:56:15 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-17 | 2034 - Calkini 2 | 2034 | 06:59:32 | Si | 22:28:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2035 - Pomuch | 2035 | 07:01:35 | No | 22:20:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:11:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2037 - Tenabo | 2037 | 06:45:12 | Si | 22:18:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2038 - Calkini Mercado | 2038 | 06:33:47 | Si | 22:16:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2039 - Xpujil | 2039 | 06:36:04 | Si | 22:33:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:36:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2042 - Palizada | 2042 | 07:08:45 | No | 22:25:04 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2043 - Nunkini | 2043 | 06:51:35 | Si | 22:26:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:13:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2045 - Champoton 5 | 2045 | 07:01:56 | No | 22:12:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2046 - El Polvorín | 2046 | 06:55:16 | Si | 22:31:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2047 - China | 2047 | 07:01:13 | No | 22:26:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:40:13 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2049 - Becal | 2049 | 07:00:14 | No | 22:48:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2051 - Campeche Morelos | 2051 | 06:57:27 | Si | 22:28:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2052 - Campeche Granjas | 2052 | 07:00:10 | No | 22:11:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:23:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2054 - Plan Chac | 2054 | 06:47:31 | Si | 22:18:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2055 - Dzilbachen | 2055 | 21:41:19 | No | 22:27:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2059 - Calkini 4 | 2059 | 06:47:56 | Si | 22:29:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2060 - Calkini 5 | 2060 | 06:47:16 | Si | 22:43:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2061 - Fidel Velazquez | 2061 | 22:00:48 | No | 22:29:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2062 - Kanisté | 2062 | 07:01:21 | No | 21:38:23 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 2063 - Montecristo | 2063 | 07:01:48 | No | 22:17:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2064 - Tomas Aznar | 2064 | 22:01:38 | No | 22:25:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2065 - Pomuch 2 | 2065 | 07:00:06 | No | 22:20:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2066 - Isla Aguada | 2066 | 06:56:41 | Si | 22:24:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2067 - Candelaria 3 | 2067 | 07:00:43 | No | 22:15:57 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:23:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2069 - Hopelchen 3 | 2069 | 06:55:28 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-17 | 2070 - Minas(1) | 2070 | 06:45:20 | Si | 22:18:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2072 - Xpujil 2 | 2072 | Sin dato | Sin dato | 22:25:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2074 - Bellavista | 2074 | 06:49:52 | Si | 22:25:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2076 - Ejido Carrillo Puerto | 2076 | 06:30:42 | Si | 22:14:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2077 - Campeche Siglo XXI | 2077 | 06:42:16 | Si | 22:36:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:20:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2079 - Bonfil | 2079 | 21:50:35 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-17 | 2080 - Ramon Espinola | 2080 | 02:33:41 | Si | 22:34:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2081 - Edzna | 2081 | 07:00:47 | No | 22:40:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2082 - Av. Periferia | 2082 | 07:05:23 | No | 22:23:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2084 - Holpelchen 4 | 2084 | 07:04:39 | No | 23:09:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2085 - Escarcega 7 | 2085 | 06:50:41 | Si | 22:16:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2086 - Champoton 6 | 2086 | Sin dato | Sin dato | 22:36:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:22:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 2088 - Calkini 6 | 2088 | 06:57:37 | Si | 22:23:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2090 - Calkini 7 | 2090 | 06:42:39 | Si | 22:29:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2091 - Hecelchakan 2 | 2091 | 06:50:01 | Si | 22:32:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2092 - Lerma | 2092 | 10:31:28 | No | 22:25:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 2093 - Tenabo 2 | 2093 | 06:58:00 | Si | 22:34:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 2095 - Champoton 8 | 2095 | 06:51:08 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-17 | 2096 - Escarcega 10 | 2096 | 07:00:01 | No | 22:19:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 3005 - Cancun Niños Heroes | 3005 | 05:43:33 | Si | 22:27:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 3008 - Playa del Carmen 2 | 3008 | 05:53:41 | Si | 21:05:32 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-17 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:40:04 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:07:39 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3040 - Kantunilkin | 3040 | 05:41:28 | Si | 21:30:02 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-17 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:34:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:11:13 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:11:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:33:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3110 - Holbox | 3110 | Sin dato | Sin dato | 21:32:08 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:32:18 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3113 - Playa Villas del Sol | 3113 | 05:56:45 | Si | 21:45:21 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-17 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | Sin dato | Sin dato | 21:29:47 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3124 - Bacalar Mercado | 3124 | 05:54:29 | Si | 21:12:09 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-17 | 3152 - Kantunilkin 2 | 3152 | 05:53:19 | Si | 21:21:46 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-17 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:20:17 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3167 - Macarena Tulum | 3167 | 05:51:42 | Si | 22:30:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-17 | 3168 - Macarena Chiquila | 3168 | Sin dato | Sin dato | 23:10:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 3502 - BB Bacalar | 3502 | 05:44:09 | Si | 21:20:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-17 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:02:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 5002 - Tenosique Centro | 5002 | 07:04:05 | No | 22:14:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 5003 - Emiliano Zapata | 5003 | 07:01:12 | No | 22:05:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 5004 - Tab. Balancan | 5004 | 07:06:51 | No | 22:08:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 5010 - Ciudad Pemex | 5010 | 07:04:23 | No | 21:58:25 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6001 - Chiapas Palenque 1 | 6001 | 07:03:01 | No | 20:05:48 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6003 - Chiapas Comitan 1 | 6003 | 07:00:51 | No | 21:30:48 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:16:10 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 6006 - Chiapas Comitan 2 | 6006 | 07:10:28 | No | 21:24:52 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6007 - Chiapas Ocozocoautla | 6007 | 07:00:52 | No | 21:44:01 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6008 - Chiapas Teopisca | 6008 | 06:59:57 | Si | 21:21:44 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-17 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:27:07 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:40:35 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:05:04 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 6014 - Tuxtla Santa María | 6014 | 07:08:33 | No | 21:40:47 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6015 - Tuxtla San José | 6015 | 07:17:15 | No | 22:36:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:27:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:01:38 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:32:14 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-17 | 6020 - Colon | 6020 | 07:11:06 | No | 21:08:00 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6021 - Niño de Atocha | 6021 | 07:01:59 | No | 21:10:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6022 - Bonampak | 6022 | 08:02:17 | No | 21:19:39 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6024 - Chiapas Catazaja | 6024 | 07:44:38 | No | 22:55:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-17 | 6026 - Tuxtla Patria Nueva | 6026 | 09:57:38 | No | 21:05:33 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-17 | 6028 - Comitan Las Flores | 6028 | 07:05:06 | No | 21:37:44 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:38:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 1025 - Uman | 1025 | 07:16:45 | No | 22:33:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1033 - Maxcanu | 1033 | 06:57:13 | Si | 22:33:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 1037 - Visente Solís | 1037 | 07:07:04 | No | 22:30:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1068 - Chemax | 1068 | 06:59:35 | Si | 22:23:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 1080 50 sur | Sin dato | 07:00:27 | No | 22:11:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1082 - Mulchchen | 1082 | 06:55:17 | Si | 22:14:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 1110 - Miguel Hidalgo | 1110 | 07:16:03 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-18 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:16:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 1116 - Seye | 1116 | 06:58:29 | Si | 22:26:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 1120 - Fco Montejo 3 | 1120 | 07:03:48 | No | 22:28:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:13:52 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 1215 - Paseos De Opichen | 1215 | 07:06:53 | No | 22:17:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:22:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 1244 - Gran Santa Fe | 1244 | 07:20:06 | No | 22:10:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1248 - Real Montejo | 1248 | 07:06:11 | No | 22:12:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:07:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 1261 - Conkal 1 | 1261 | 06:50:27 | Si | 22:03:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 1269 - San Marcos Sustentable | 1269 | 07:02:47 | No | 22:30:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1279 - Cri Cri | 1279 | 07:06:59 | No | 22:09:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1281 - Sotuta | 1281 | 07:11:18 | No | 22:15:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1282 - Tizimin 6 | 1282 | 06:54:59 | Si | 22:18:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 1292 - Cuzamar | 1292 | 06:59:53 | Si | 22:07:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 1298 - Muna 2 | 1298 | 07:00:48 | No | 22:09:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:56:19 | Si | 22:15:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:10:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:14:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 1318 CHOCHOLA | Sin dato | 07:10:12 | No | 22:13:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:36:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:19:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:08:18 | No | 22:09:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2001 - Campeche 16 | 2001 | 07:02:56 | No | 22:10:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2002 - Campeche Mercado | 2002 | 05:54:25 | Si | 21:20:37 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 2003 - Champotón | 2003 | 05:58:14 | Si | 21:10:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 2004 - CAM Santa Ana | 2004 | 06:47:53 | Si | 22:29:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:26:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2008 - Escarsega | 2008 | 06:49:22 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-18 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 22:47:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2011 - Hopelchen | 2011 | 07:00:52 | No | 03:49:17 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 2012 - Escarcega 2 | 2012 | 07:00:48 | No | 22:19:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2013 - Seyba Playa | 2013 | 07:02:18 | No | 22:23:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2014 - Kala | 2014 | 07:02:52 | No | 22:27:53 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2016 - Carmen Tecolutla | 2016 | 06:59:06 | Si | 22:22:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:33:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2018 - Av. Central | 2018 | 06:55:03 | Si | 22:11:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2019 - Champotón 2 | 2019 | 06:44:16 | Si | 22:30:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:14:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2021 - Campeche Candelaria | 2021 | 07:04:06 | No | 22:19:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:53:27 | Si | 22:24:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:43:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:10:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2027 - Champotón 3 | 2027 | 07:02:31 | No | 22:26:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2028 - Campeche Samula | 2028 | 06:55:38 | Si | 22:18:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2029 - Palma Real | 2029 | 07:05:45 | No | 22:21:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:30:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:25:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2032 - Hopelchen 2 | 2032 | 06:55:15 | Si | 22:24:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:13:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2034 - Calkini 2 | 2034 | 06:58:25 | Si | 22:23:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2035 - Pomuch | 2035 | 07:02:56 | No | 22:11:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:12:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2037 - Tenabo | 2037 | 06:44:51 | Si | 22:13:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2038 - Calkini Mercado | 2038 | 06:13:46 | Si | 22:27:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2039 - Xpujil | 2039 | 06:35:57 | Si | 22:21:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:32:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:25:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2042 - Palizada | 2042 | 07:06:40 | No | 22:14:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2043 - Nunkini | 2043 | 06:52:04 | Si | 22:16:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:13:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2045 - Champoton 5 | 2045 | 06:57:09 | Si | 23:01:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2046 - El Polvorín | 2046 | 06:58:40 | Si | 22:57:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2047 - China | 2047 | 07:02:16 | No | 22:45:44 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:11:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2049 - Becal | 2049 | 07:05:17 | No | 22:17:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2051 - Campeche Morelos | 2051 | 06:49:17 | Si | 22:32:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2052 - Campeche Granjas | 2052 | 07:05:16 | No | 22:19:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:41:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2054 - Plan Chac | 2054 | 06:48:24 | Si | 22:24:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2055 - Dzilbachen | 2055 | 21:45:18 | No | 22:34:40 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:08:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2059 - Calkini 4 | 2059 | 06:47:44 | Si | 22:30:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2060 - Calkini 5 | 2060 | 06:44:46 | Si | 22:43:09 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2061 - Fidel Velazquez | 2061 | 22:00:15 | No | 22:36:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2062 - Kanisté | 2062 | 07:05:27 | No | 21:31:31 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 2063 - Montecristo | 2063 | 07:02:52 | No | 23:01:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2064 - Tomas Aznar | 2064 | 22:02:20 | No | 22:20:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2065 - Pomuch 2 | 2065 | 06:59:27 | Si | 22:43:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2066 - Isla Aguada | 2066 | 07:29:30 | No | 22:30:12 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2067 - Candelaria 3 | 2067 | 07:01:57 | No | 22:13:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:16:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2069 - Hopelchen 3 | 2069 | 06:58:25 | Si | 22:18:08 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2070 - Minas(1) | 2070 | 06:46:26 | Si | 22:25:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2072 - Xpujil 2 | 2072 | Sin dato | Sin dato | 22:44:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2074 - Bellavista | 2074 | 06:48:10 | Si | 22:21:20 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2076 - Ejido Carrillo Puerto | 2076 | 06:28:52 | Si | 22:08:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2077 - Campeche Siglo XXI | 2077 | 06:30:14 | Si | 22:28:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:14:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2079 - Bonfil | 2079 | 21:49:02 | No | 22:10:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2080 - Ramon Espinola | 2080 | Sin dato | Sin dato | 22:38:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2081 - Edzna | 2081 | 07:07:28 | No | 22:20:34 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2082 - Av. Periferia | 2082 | 07:04:31 | No | 22:19:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 2084 - Holpelchen 4 | 2084 | Sin dato | Sin dato | 22:27:28 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2085 - Escarcega 7 | 2085 | Sin dato | Sin dato | 22:15:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:12:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 2088 - Calkini 6 | 2088 | 06:53:46 | Si | 22:27:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2090 - Calkini 7 | 2090 | 06:51:33 | Si | 22:26:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2091 - Hecelchakan 2 | 2091 | 06:54:18 | Si | 22:23:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2092 - Lerma | 2092 | 06:49:16 | Si | 22:15:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2093 - Tenabo 2 | 2093 | 06:58:53 | Si | 23:00:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2095 - Champoton 8 | 2095 | 06:59:56 | Si | 22:37:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 2096 - Escarcega 10 | 2096 | 07:01:38 | No | 22:16:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 3005 - Cancun Niños Heroes | 3005 | 05:55:35 | Si | 21:07:18 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 3008 - Playa del Carmen 2 | 3008 | 09:51:47 | No | 21:10:39 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:18:35 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:02:48 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 3040 - Kantunilkin | 3040 | 05:42:28 | Si | 21:23:57 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:30:17 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:21:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:14:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | 06:00:52 | Si | 21:23:40 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 3110 - Holbox | 3110 | 17:38:02 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-18 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:04:33 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 3113 - Playa Villas del Sol | 3113 | 05:55:40 | Si | 21:59:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 06:02:37 | Si | 21:18:20 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 3124 - Bacalar Mercado | 3124 | 05:52:57 | Si | 21:13:40 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 3152 - Kantunilkin 2 | 3152 | 05:53:12 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-18 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:33:43 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 22:17:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 3168 - Macarena Chiquila | 3168 | 06:10:21 | Si | 22:26:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-18 | 3502 - BB Bacalar | 3502 | 05:52:46 | Si | 21:34:54 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:01:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 5002 - Tenosique Centro | 5002 | 07:03:09 | No | 22:11:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 5003 - Emiliano Zapata | 5003 | 07:08:41 | No | 22:20:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 5004 - Tab. Balancan | 5004 | 07:09:05 | No | 22:18:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 5010 - Ciudad Pemex | 5010 | 07:06:26 | No | 21:29:38 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6001 - Chiapas Palenque 1 | 6001 | 07:04:25 | No | 20:14:02 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6003 - Chiapas Comitan 1 | 6003 | 07:05:21 | No | 21:31:22 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6004 - Villaflores | 6004 | 07:22:57 | No | 21:08:44 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:04:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 6006 - Chiapas Comitan 2 | 6006 | 07:25:25 | No | 21:16:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6007 - Chiapas Ocozocoautla | 6007 | 07:00:16 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-18 | 6008 - Chiapas Teopisca | 6008 | 06:54:54 | Si | 21:31:36 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-18 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:16:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:44:30 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:16:38 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 6014 - Tuxtla Santa María | 6014 | 07:15:03 | No | 21:26:48 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6015 - Tuxtla San José | 6015 | 08:12:38 | No | 21:14:01 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6016 - Alcala | 6016 | 07:13:53 | No | 21:20:51 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:12:27 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 6019 - Venustiano Carranza | 6019 | Sin dato | Sin dato | 21:38:50 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-18 | 6020 - Colon | 6020 | 07:07:54 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-18 | 6021 - Niño de Atocha | 6021 | 07:03:06 | No | 21:05:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6022 - Bonampak | 6022 | 07:04:13 | No | 21:11:51 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6024 - Chiapas Catazaja | 6024 | 07:23:14 | No | 22:12:51 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-18 | 6026 - Tuxtla Patria Nueva | 6026 | 07:07:24 | No | 21:01:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-18 | 6028 - Comitan Las Flores | 6028 | 07:04:42 | No | 21:31:42 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:35:12 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1025 - Uman | 1025 | 07:08:25 | No | 22:11:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1033 - Maxcanu | 1033 | 06:57:05 | Si | 22:42:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 1037 - Visente Solís | 1037 | 06:57:21 | Si | 22:51:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 1068 - Chemax | 1068 | 07:00:39 | No | 23:29:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1080 50 sur | Sin dato | 07:00:13 | No | 22:07:48 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1082 - Mulchchen | 1082 | 06:50:45 | Si | 22:24:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 1110 - Miguel Hidalgo | 1110 | 07:20:55 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-19 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:11:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1116 - Seye | 1116 | 07:00:59 | No | 22:30:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1120 - Fco Montejo 3 | 1120 | Sin dato | Sin dato | 22:48:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:25:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1215 - Paseos De Opichen | 1215 | 07:01:06 | No | 22:25:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:21:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1244 - Gran Santa Fe | 1244 | 07:03:01 | No | 22:14:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1248 - Real Montejo | 1248 | 06:58:46 | Si | 22:14:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:07:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1261 - Conkal 1 | 1261 | 07:01:37 | No | 22:05:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1269 - San Marcos Sustentable | 1269 | 07:01:50 | No | 22:20:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1279 - Cri Cri | 1279 | 06:54:20 | Si | 22:10:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 1281 - Sotuta | 1281 | 07:14:50 | No | 22:17:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1282 - Tizimin 6 | 1282 | 06:59:11 | Si | 22:08:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 1292 - Cuzamar | 1292 | 06:55:58 | Si | 22:02:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 1298 - Muna 2 | 1298 | 07:01:33 | No | 22:25:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1305 - Uman Piedra de Agua 3 | 1305 | Sin dato | Sin dato | 22:19:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:14:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:20:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1318 CHOCHOLA | Sin dato | 07:00:47 | No | 22:17:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:06:07 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 16:09:02 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:31 | No | 23:17:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2001 - Campeche 16 | 2001 | 06:58:33 | Si | 22:09:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2002 - Campeche Mercado | 2002 | 05:55:07 | Si | 21:19:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-19 | 2003 - Champotón | 2003 | 06:00:55 | Si | 21:16:57 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-19 | 2004 - CAM Santa Ana | 2004 | 06:40:07 | Si | 22:54:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 22:40:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2008 - Escarsega | 2008 | 10:46:50 | No | 22:14:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:09:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2011 - Hopelchen | 2011 | 06:58:37 | Si | 22:24:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2012 - Escarcega 2 | 2012 | 07:02:50 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-19 | 2013 - Seyba Playa | 2013 | 06:59:51 | Si | 22:21:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2014 - Kala | 2014 | 06:58:41 | Si | 23:09:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:19:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:31:23 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:09:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2019 - Champotón 2 | 2019 | 06:41:45 | Si | 22:21:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2020 - Escarcega 3 | 2020 | 06:47:22 | Si | 22:16:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2021 - Campeche Candelaria | 2021 | 06:58:34 | Si | 22:12:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2023 - Campeche Av. Lopez Mateos | 2023 | 07:01:19 | No | 22:44:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:20:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:15:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2027 - Champotón 3 | 2027 | 06:48:19 | Si | 22:19:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2028 - Campeche Samula | 2028 | 07:03:27 | No | 22:34:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2029 - Palma Real | 2029 | 07:01:06 | No | 22:20:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:12:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2031 - Cd. Carmen Morelos | 2031 | 07:03:39 | No | 22:17:55 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2032 - Hopelchen 2 | 2032 | 06:51:54 | Si | 22:19:51 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:14:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2034 - Calkini 2 | 2034 | 10:01:22 | No | 22:28:49 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2035 - Pomuch | 2035 | 08:05:34 | No | 22:16:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:10:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2037 - Tenabo | 2037 | 06:45:04 | Si | 22:09:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2038 - Calkini Mercado | 2038 | 06:23:52 | Si | 22:12:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2039 - Xpujil | 2039 | 06:46:21 | Si | 22:31:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:43:48 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:15:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2042 - Palizada | 2042 | 07:03:21 | No | 22:14:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2043 - Nunkini | 2043 | 06:56:19 | Si | 23:15:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:17:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2045 - Champoton 5 | 2045 | 07:01:21 | No | 22:25:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2046 - El Polvorín | 2046 | 06:56:06 | Si | 22:40:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2047 - China | 2047 | 06:56:32 | Si | 22:38:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2048 - Campeche Centro | 2048 | Sin dato | Sin dato | 21:33:42 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2049 - Becal | 2049 | 09:49:42 | No | 22:22:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2051 - Campeche Morelos | 2051 | 06:53:50 | Si | 22:23:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2052 - Campeche Granjas | 2052 | 07:04:04 | No | 22:15:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:55:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2054 - Plan Chac | 2054 | 06:54:17 | Si | 22:26:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2055 - Dzilbachen | 2055 | 21:43:40 | No | 22:15:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:08:02 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2059 - Calkini 4 | 2059 | 06:53:28 | Si | 22:30:10 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2060 - Calkini 5 | 2060 | 10:01:20 | No | 22:42:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2061 - Fidel Velazquez | 2061 | 21:59:08 | No | 22:38:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2062 - Kanisté | 2062 | 07:01:05 | No | 21:25:21 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 2063 - Montecristo | 2063 | 07:06:37 | No | 22:27:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2064 - Tomas Aznar | 2064 | 19:37:33 | No | 22:32:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2065 - Pomuch 2 | 2065 | 07:02:10 | No | 22:31:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2066 - Isla Aguada | 2066 | Sin dato | Sin dato | 22:42:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2067 - Candelaria 3 | 2067 | 06:43:56 | Si | 22:17:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2068 - Bolonchen | 2068 | 06:54:46 | Si | 22:11:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2069 - Hopelchen 3 | 2069 | 06:53:31 | Si | 22:24:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2070 - Minas(1) | 2070 | 06:59:38 | Si | 22:40:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2072 - Xpujil 2 | 2072 | Sin dato | Sin dato | 22:34:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2074 - Bellavista | 2074 | 06:55:10 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-19 | 2076 - Ejido Carrillo Puerto | 2076 | 06:32:12 | Si | 22:17:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2077 - Campeche Siglo XXI | 2077 | Sin dato | Sin dato | 22:39:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:19:34 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2079 - Bonfil | 2079 | 21:59:16 | No | 22:15:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2080 - Ramon Espinola | 2080 | 06:53:58 | Si | 22:32:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2081 - Edzna | 2081 | 07:02:13 | No | 22:33:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2082 - Av. Periferia | 2082 | 07:04:09 | No | 22:16:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 2084 - Holpelchen 4 | 2084 | 06:54:40 | Si | 22:20:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2085 - Escarcega 7 | 2085 | Sin dato | Sin dato | 22:20:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:21:48 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 2088 - Calkini 6 | 2088 | 06:52:45 | Si | 22:16:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2090 - Calkini 7 | 2090 | 06:59:21 | Si | 22:27:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2091 - Hecelchakan 2 | 2091 | 06:52:39 | Si | 22:10:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2092 - Lerma | 2092 | 06:50:03 | Si | 22:12:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2093 - Tenabo 2 | 2093 | 06:54:36 | Si | 22:46:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 2095 - Champoton 8 | 2095 | 06:57:05 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-19 | 2096 - Escarcega 10 | 2096 | 06:57:57 | Si | 22:11:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 3005 - Cancun Niños Heroes | 3005 | 05:47:36 | Si | 21:07:15 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-19 | 3008 - Playa del Carmen 2 | 3008 | 06:01:42 | Si | 20:10:19 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-19 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:25:34 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 20:14:46 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3040 - Kantunilkin | 3040 | 05:44:47 | Si | 20:31:24 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-19 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 20:56:43 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 20:25:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:13:20 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 20:25:07 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3110 - Holbox | 3110 | 05:58:26 | Si | 20:34:27 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-19 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:17:00 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3113 - Playa Villas del Sol | 3113 | 06:00:39 | Si | 20:34:49 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-19 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 05:52:14 | Si | 21:16:25 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-19 | 3124 - Bacalar Mercado | 3124 | 05:47:23 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-19 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 20:14:51 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:50:03 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 22:24:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 3168 - Macarena Chiquila | 3168 | 16:29:53 | No | 21:58:11 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 3502 - BB Bacalar | 3502 | 21:28:28 | No | 21:28:24 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:09:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 5002 - Tenosique Centro | 5002 | 06:59:28 | Si | 22:07:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-19 | 5003 - Emiliano Zapata | 5003 | 07:13:34 | No | 22:29:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 5004 - Tab. Balancan | 5004 | 07:07:48 | No | 22:07:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-19 | 5010 - Ciudad Pemex | 5010 | 07:09:16 | No | 21:53:32 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6001 - Chiapas Palenque 1 | 6001 | 07:03:05 | No | 17:04:01 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6003 - Chiapas Comitan 1 | 6003 | 07:05:54 | No | 21:33:55 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 22:03:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:10:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 6006 - Chiapas Comitan 2 | 6006 | 07:14:57 | No | 21:32:35 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6007 - Chiapas Ocozocoautla | 6007 | 07:04:54 | No | 21:41:58 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6008 - Chiapas Teopisca | 6008 | 06:59:37 | Si | 21:25:14 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-19 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:18:50 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:43:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:17:49 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 6014 - Tuxtla Santa María | 6014 | 07:44:42 | No | 21:18:26 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6015 - Tuxtla San José | 6015 | 07:20:47 | No | 21:19:28 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6016 - Alcala | 6016 | 07:20:06 | No | 21:35:23 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:08:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 6019 - Venustiano Carranza | 6019 | 07:06:49 | No | 21:38:41 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6020 - Colon | 6020 | 07:20:46 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-19 | 6021 - Niño de Atocha | 6021 | 07:09:19 | No | 21:16:49 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6022 - Bonampak | 6022 | 07:02:14 | No | 21:21:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:26:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-19 | 6026 - Tuxtla Patria Nueva | 6026 | 07:08:34 | No | 21:01:34 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-19 | 6028 - Comitan Las Flores | 6028 | 07:04:52 | No | 21:31:22 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:36:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1025 - Uman | 1025 | 07:18:00 | No | 22:42:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 1033 - Maxcanu | 1033 | 06:57:30 | Si | 23:15:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 1037 - Visente Solís | 1037 | 06:47:31 | Si | 23:04:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 1068 - Chemax | 1068 | 07:02:25 | No | 23:27:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 1080 50 sur | Sin dato | 06:57:35 | Si | 22:23:13 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 1082 - Mulchchen | 1082 | 07:02:28 | No | 22:12:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 1110 - Miguel Hidalgo | 1110 | 07:13:22 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-20 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:30:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1116 - Seye | 1116 | 07:03:58 | No | 22:43:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 1120 - Fco Montejo 3 | 1120 | 09:35:25 | No | 22:16:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:17:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1215 - Paseos De Opichen | 1215 | 07:02:37 | No | 22:25:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:20:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1244 - Gran Santa Fe | 1244 | 07:04:20 | No | 22:15:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 1248 - Real Montejo | 1248 | 07:09:45 | No | 22:18:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 1258 - Mérida Pedro Infante | 1258 | Sin dato | Sin dato | 22:16:05 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1261 - Conkal 1 | 1261 | 06:46:44 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-20 | 1269 - San Marcos Sustentable | 1269 | 06:57:48 | Si | 22:49:30 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 1279 - Cri Cri | 1279 | 07:01:38 | No | 22:12:22 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:15:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1282 - Tizimin 6 | 1282 | 06:54:35 | Si | 22:07:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 1292 - Cuzamar | 1292 | 06:53:35 | Si | 22:12:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 1298 - Muna 2 | 1298 | Sin dato | Sin dato | 22:02:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1305 - Uman Piedra de Agua 3 | 1305 | Sin dato | Sin dato | 22:17:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:16:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:17:36 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1318 CHOCHOLA | Sin dato | 06:59:20 | Si | 22:12:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:21:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:05:17 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:03:59 | No | 23:22:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2001 - Campeche 16 | 2001 | 07:05:17 | No | 22:11:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2002 - Campeche Mercado | 2002 | 05:57:48 | Si | 21:14:58 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-20 | 2003 - Champotón | 2003 | 06:00:34 | Si | 21:15:23 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-20 | 2004 - CAM Santa Ana | 2004 | 06:16:01 | Si | 22:41:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:12:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2008 - Escarsega | 2008 | 06:49:51 | Si | 22:17:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:02:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2011 - Hopelchen | 2011 | 06:59:04 | Si | 22:17:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2012 - Escarcega 2 | 2012 | 07:00:13 | No | 22:38:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2013 - Seyba Playa | 2013 | 07:01:47 | No | 22:32:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2014 - Kala | 2014 | Sin dato | Sin dato | 23:02:27 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2016 - Carmen Tecolutla | 2016 | Sin dato | Sin dato | 22:24:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:38:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2018 - Av. Central | 2018 | 06:54:32 | Si | 22:09:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2019 - Champotón 2 | 2019 | 06:50:13 | Si | 22:17:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:14:58 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2021 - Campeche Candelaria | 2021 | 07:04:00 | No | 22:12:31 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:52:37 | Si | 22:55:32 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2024 - Cd. Carmen Mercado | 2024 | Sin dato | Sin dato | 22:22:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:09:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2027 - Champotón 3 | 2027 | 06:47:46 | Si | 22:19:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2028 - Campeche Samula | 2028 | 07:00:41 | No | 22:26:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2029 - Palma Real | 2029 | 06:57:08 | Si | 22:16:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:12:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2031 - Cd. Carmen Morelos | 2031 | 07:01:06 | No | 22:19:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2032 - Hopelchen 2 | 2032 | 06:55:16 | Si | 22:20:55 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:12:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2034 - Calkini 2 | 2034 | 06:58:55 | Si | 22:27:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2035 - Pomuch | 2035 | 13:50:17 | No | 22:26:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:11:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2037 - Tenabo | 2037 | 06:45:57 | Si | 22:07:18 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2038 - Calkini Mercado | 2038 | 06:42:05 | Si | 22:15:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2039 - Xpujil | 2039 | Sin dato | Sin dato | 22:05:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:32:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 23:17:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2042 - Palizada | 2042 | 06:57:38 | Si | 22:06:52 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2043 - Nunkini | 2043 | 06:55:30 | Si | 22:29:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:18:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2045 - Champoton 5 | 2045 | 06:57:10 | Si | 22:16:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2046 - El Polvorín | 2046 | 06:54:21 | Si | 22:33:46 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2047 - China | 2047 | 06:56:31 | Si | 22:37:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2048 - Campeche Centro | 2048 | 06:50:10 | Si | 21:56:12 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-20 | 2049 - Becal | 2049 | 13:47:27 | No | 22:38:50 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2051 - Campeche Morelos | 2051 | 06:50:51 | Si | 22:18:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2052 - Campeche Granjas | 2052 | 07:03:39 | No | 22:22:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:30:45 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2054 - Plan Chac | 2054 | 06:47:28 | Si | 22:25:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2055 - Dzilbachen | 2055 | 21:48:25 | No | 22:34:15 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:07:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2059 - Calkini 4 | 2059 | 06:43:18 | Si | 22:29:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2060 - Calkini 5 | 2060 | 06:52:21 | Si | 22:55:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2061 - Fidel Velazquez | 2061 | 22:01:46 | No | 22:39:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2062 - Kanisté | 2062 | 07:00:05 | No | 21:31:49 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 2063 - Montecristo | 2063 | 06:59:43 | Si | 22:36:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2064 - Tomas Aznar | 2064 | 22:01:36 | No | 22:31:44 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2065 - Pomuch 2 | 2065 | 08:22:32 | No | 22:30:32 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2066 - Isla Aguada | 2066 | 07:02:29 | No | 22:44:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2067 - Candelaria 3 | 2067 | 06:46:16 | Si | 22:15:50 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:37:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2069 - Hopelchen 3 | 2069 | 06:51:34 | Si | 22:22:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2070 - Minas(1) | 2070 | 07:00:50 | No | 22:26:39 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2072 - Xpujil 2 | 2072 | Sin dato | Sin dato | 22:56:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2074 - Bellavista | 2074 | 06:48:36 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-20 | 2076 - Ejido Carrillo Puerto | 2076 | 06:24:07 | Si | 22:14:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2077 - Campeche Siglo XXI | 2077 | Sin dato | Sin dato | 22:21:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:14:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2079 - Bonfil | 2079 | 22:02:14 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-20 | 2080 - Ramon Espinola | 2080 | 06:57:55 | Si | 22:29:14 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2081 - Edzna | 2081 | 07:03:25 | No | 22:44:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2082 - Av. Periferia | 2082 | 07:00:27 | No | 22:20:10 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2084 - Holpelchen 4 | 2084 | 07:03:17 | No | 22:24:18 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 2085 - Escarcega 7 | 2085 | 06:50:18 | Si | 22:10:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:24:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 2088 - Calkini 6 | 2088 | 06:54:44 | Si | 22:23:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2090 - Calkini 7 | 2090 | 06:50:21 | Si | 22:56:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2091 - Hecelchakan 2 | 2091 | 06:55:31 | Si | 22:30:45 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2092 - Lerma | 2092 | 06:38:33 | Si | 22:15:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2093 - Tenabo 2 | 2093 | 06:58:28 | Si | 22:54:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 2095 - Champoton 8 | 2095 | 06:50:18 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-20 | 2096 - Escarcega 10 | 2096 | 07:01:28 | No | 22:08:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 3005 - Cancun Niños Heroes | 3005 | 05:49:48 | Si | 21:03:22 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-20 | 3008 - Playa del Carmen 2 | 3008 | 06:01:29 | Si | 21:09:09 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-20 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:25:12 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:10:46 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:27:25 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:47:53 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:13:59 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:11:08 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:19:40 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3110 - Holbox | 3110 | 05:57:56 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-20 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:37:56 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3113 - Playa Villas del Sol | 3113 | 05:55:03 | Si | 22:07:15 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 05:52:38 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-20 | 3124 - Bacalar Mercado | 3124 | 05:55:04 | Si | 21:15:38 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-20 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:16:28 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:36:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 22:15:40 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 3168 - Macarena Chiquila | 3168 | 06:12:35 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-20 | 3502 - BB Bacalar | 3502 | 21:20:51 | No | 21:20:45 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:01:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 5002 - Tenosique Centro | 5002 | 06:57:00 | Si | 22:07:49 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-20 | 5003 - Emiliano Zapata | 5003 | 07:05:56 | No | 22:17:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 5004 - Tab. Balancan | 5004 | 07:05:22 | No | 22:07:17 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 5010 - Ciudad Pemex | 5010 | 07:06:01 | No | 21:56:17 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6001 - Chiapas Palenque 1 | 6001 | 07:04:18 | No | 20:10:12 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6003 - Chiapas Comitan 1 | 6003 | 07:03:23 | No | 21:32:55 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 21:16:32 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:07:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 6006 - Chiapas Comitan 2 | 6006 | 07:14:04 | No | 21:30:46 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6007 - Chiapas Ocozocoautla | 6007 | 06:58:18 | Si | 21:18:50 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-20 | 6008 - Chiapas Teopisca | 6008 | 07:02:05 | No | 21:24:29 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:17:12 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:37:54 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:38:33 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 6014 - Tuxtla Santa María | 6014 | 07:04:29 | No | 21:30:16 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6015 - Tuxtla San José | 6015 | 07:35:17 | No | 21:27:44 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:29:28 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:07:26 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-20 | 6019 - Venustiano Carranza | 6019 | 21:02:20 | No | 21:41:56 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6020 - Colon | 6020 | 06:57:37 | Si | 21:12:26 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-20 | 6021 - Niño de Atocha | 6021 | 07:05:52 | No | 21:14:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6022 - Bonampak | 6022 | 07:05:58 | No | 21:12:49 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6024 - Chiapas Catazaja | 6024 | 07:52:58 | No | 23:06:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-20 | 6026 - Tuxtla Patria Nueva | 6026 | 07:10:24 | No | 21:03:03 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-20 | 6028 - Comitan Las Flores | 6028 | 07:05:08 | No | 21:31:51 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:35:04 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1025 - Uman | 1025 | 07:12:25 | No | 23:08:29 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1033 - Maxcanu | 1033 | 07:00:29 | No | 22:30:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1037 - Visente Solís | 1037 | 06:59:41 | Si | 22:32:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 1068 - Chemax | 1068 | 07:05:05 | No | 22:26:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1080 50 sur | Sin dato | 06:58:40 | Si | 22:19:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 1082 - Mulchchen | 1082 | 06:53:50 | Si | 22:23:23 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 1110 - Miguel Hidalgo | 1110 | 07:05:06 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-21 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:20:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1116 - Seye | 1116 | 07:00:11 | No | 22:21:25 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1120 - Fco Montejo 3 | 1120 | 07:01:48 | No | 22:11:16 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:27:31 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1215 - Paseos De Opichen | 1215 | 07:05:54 | No | 22:22:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1236 - Boulevards de Oriente | 1236 | Sin dato | Sin dato | 22:30:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1244 - Gran Santa Fe | 1244 | 07:01:05 | No | 22:13:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1248 - Real Montejo | 1248 | 07:04:15 | No | 22:09:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1258 - Mérida Pedro Infante | 1258 | 06:57:05 | Si | 22:11:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 1261 - Conkal 1 | 1261 | 07:06:15 | No | 22:05:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1269 - San Marcos Sustentable | 1269 | 06:57:05 | Si | 22:37:35 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 1279 - Cri Cri | 1279 | 07:01:24 | No | 22:10:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1281 - Sotuta | 1281 | Sin dato | Sin dato | 22:14:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1282 - Tizimin 6 | 1282 | 07:01:49 | No | 22:26:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1292 - Cuzamar | 1292 | 06:59:33 | Si | 22:10:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 1298 - Muna 2 | 1298 | Sin dato | Sin dato | 22:06:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1305 - Uman Piedra de Agua 3 | 1305 | Sin dato | Sin dato | 22:22:21 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:11:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:19:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1318 CHOCHOLA | Sin dato | 07:01:41 | No | 22:09:14 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:34:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:10:03 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:02:28 | No | 22:04:52 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2001 - Campeche 16 | 2001 | 07:01:53 | No | 22:12:27 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2002 - Campeche Mercado | 2002 | 05:56:51 | Si | 21:25:29 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-21 | 2003 - Champotón | 2003 | 05:59:56 | Si | 21:11:27 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-21 | 2004 - CAM Santa Ana | 2004 | 06:15:59 | Si | 22:35:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:01:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2008 - Escarsega | 2008 | 06:57:03 | Si | 22:20:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:14:33 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2011 - Hopelchen | 2011 | 06:58:20 | Si | 22:26:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:25:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2013 - Seyba Playa | 2013 | 07:01:10 | No | 22:22:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2014 - Kala | 2014 | 07:01:52 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-21 | 2016 - Carmen Tecolutla | 2016 | 06:54:31 | Si | 22:29:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:39:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:16:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2019 - Champotón 2 | 2019 | 06:52:35 | Si | 22:18:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:19:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2021 - Campeche Candelaria | 2021 | 07:01:27 | No | 22:10:54 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:55:41 | Si | 23:16:58 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2024 - Cd. Carmen Mercado | 2024 | 07:05:10 | No | 23:41:38 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 22:14:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2027 - Champotón 3 | 2027 | 06:57:27 | Si | 22:16:26 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2028 - Campeche Samula | 2028 | 07:00:51 | No | 22:22:02 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2029 - Palma Real | 2029 | 06:58:07 | Si | 22:16:11 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:09:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:48:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2032 - Hopelchen 2 | 2032 | 06:50:58 | Si | 22:25:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2034 - Calkini 2 | 2034 | Sin dato | Sin dato | 22:33:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2035 - Pomuch | 2035 | 07:05:12 | No | 22:14:28 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:13:55 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2037 - Tenabo | 2037 | 06:45:14 | Si | 22:18:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2038 - Calkini Mercado | 2038 | 06:29:53 | Si | 22:12:01 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2039 - Xpujil | 2039 | 06:42:37 | Si | 22:40:44 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:38:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:13:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2042 - Palizada | 2042 | 07:12:23 | No | 22:19:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2043 - Nunkini | 2043 | 06:56:54 | Si | 22:27:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:04:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2045 - Champoton 5 | 2045 | 07:02:49 | No | 22:11:08 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2046 - El Polvorín | 2046 | 06:55:57 | Si | 22:50:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2047 - China | 2047 | 06:59:39 | Si | 22:43:40 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2048 - Campeche Centro | 2048 | 06:54:28 | Si | 22:21:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2049 - Becal | 2049 | 15:51:29 | No | 22:37:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:19:22 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2052 - Campeche Granjas | 2052 | 07:01:49 | No | 22:15:21 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:36:18 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2054 - Plan Chac | 2054 | 21:56:17 | No | 22:20:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2055 - Dzilbachen | 2055 | 22:40:41 | No | 22:42:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2057 - Presidentes | 2057 | Sin dato | Sin dato | 22:05:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2059 - Calkini 4 | 2059 | 06:26:01 | Si | 22:32:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2060 - Calkini 5 | 2060 | 06:55:22 | Si | 22:55:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2061 - Fidel Velazquez | 2061 | 22:01:28 | No | 22:23:56 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2062 - Kanisté | 2062 | 06:51:33 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-21 | 2063 - Montecristo | 2063 | 06:56:30 | Si | 22:20:22 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2064 - Tomas Aznar | 2064 | Sin dato | Sin dato | 22:35:00 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2065 - Pomuch 2 | 2065 | 07:26:13 | No | 22:44:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2066 - Isla Aguada | 2066 | 07:26:07 | No | 22:30:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2067 - Candelaria 3 | 2067 | 06:56:13 | Si | 22:12:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:17:03 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2069 - Hopelchen 3 | 2069 | 06:55:00 | Si | 22:26:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2070 - Minas(1) | 2070 | 06:56:31 | Si | 22:41:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2072 - Xpujil 2 | 2072 | Sin dato | Sin dato | 22:33:46 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2074 - Bellavista | 2074 | 07:02:25 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-21 | 2076 - Ejido Carrillo Puerto | 2076 | 06:27:01 | Si | 22:11:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2077 - Campeche Siglo XXI | 2077 | 06:31:38 | Si | 22:24:54 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:21:59 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2079 - Bonfil | 2079 | 21:49:47 | No | 22:04:05 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2080 - Ramon Espinola | 2080 | 06:52:53 | Si | 22:25:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2081 - Edzna | 2081 | 07:00:31 | No | 22:27:26 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2082 - Av. Periferia | 2082 | 07:00:22 | No | 22:15:35 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2084 - Holpelchen 4 | 2084 | Sin dato | Sin dato | 22:26:47 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2085 - Escarcega 7 | 2085 | 06:55:01 | Si | 22:22:00 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:21:38 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 2088 - Calkini 6 | 2088 | 06:58:39 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-21 | 2089 - Escarcega 8 | 2089 | 17:09:04 | No | 22:44:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 2090 - Calkini 7 | 2090 | 06:50:23 | Si | 22:31:03 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2091 - Hecelchakan 2 | 2091 | 06:51:34 | Si | 22:12:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2092 - Lerma | 2092 | 06:41:44 | Si | 22:17:04 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2093 - Tenabo 2 | 2093 | 06:58:47 | Si | 23:04:34 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 2095 - Champoton 8 | 2095 | 06:54:34 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-21 | 2096 - Escarcega 10 | 2096 | 07:02:57 | No | 22:12:06 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 3005 - Cancun Niños Heroes | 3005 | 06:00:31 | Si | 21:08:34 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-21 | 3008 - Playa del Carmen 2 | 3008 | 05:58:52 | Si | 21:06:20 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-21 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:33:21 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:19:06 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:40:57 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:43:52 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:18:05 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:06:01 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3102 - Cancun Villas Otoch Paraiso 2 | 3102 | Sin dato | Sin dato | 21:21:07 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3110 - Holbox | 3110 | 05:50:50 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-21 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:27:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3113 - Playa Villas del Sol | 3113 | 05:58:19 | Si | 22:22:36 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-21 | 3123 QROO Felipe Carrillo Puerto 4 | Sin dato | 05:52:52 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-21 | 3124 - Bacalar Mercado | 3124 | 05:55:43 | Si | 21:17:09 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-21 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:17:56 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:34:22 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3167 - Macarena Tulum | 3167 | Sin dato | Sin dato | 22:20:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 3168 - Macarena Chiquila | 3168 | 06:50:57 | Si | 21:52:19 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-21 | 3502 - BB Bacalar | 3502 | 21:10:53 | No | 21:10:49 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:04:44 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 5002 - Tenosique Centro | 5002 | Sin dato | Sin dato | 22:08:29 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 5003 - Emiliano Zapata | 5003 | 07:06:05 | No | 23:06:03 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 5004 - Tab. Balancan | 5004 | 07:08:15 | No | 22:11:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-21 | 5010 - Ciudad Pemex | 5010 | 07:07:07 | No | 21:55:12 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6001 - Chiapas Palenque 1 | 6001 | 07:01:38 | No | 20:08:20 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6003 - Chiapas Comitan 1 | 6003 | 07:03:34 | No | 21:32:36 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6004 - Villaflores | 6004 | Sin dato | Sin dato | 22:21:25 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:02:15 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 6006 - Chiapas Comitan 2 | 6006 | 07:11:08 | No | 21:12:50 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6007 - Chiapas Ocozocoautla | 6007 | Sin dato | Sin dato | 21:09:25 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 6008 - Chiapas Teopisca | 6008 | 07:00:46 | No | 21:26:43 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 23:38:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:34:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:06:12 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 6014 - Tuxtla Santa María | 6014 | 07:00:08 | No | 21:17:06 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6015 - Tuxtla San José | 6015 | 07:12:29 | No | 21:24:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 21:39:36 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:11:38 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 6019 - Venustiano Carranza | 6019 | 20:59:36 | No | 21:35:24 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6020 - Colon | 6020 | 07:05:29 | No | 21:12:00 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6021 - Niño de Atocha | 6021 | 07:08:12 | No | 21:09:16 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6022 - Bonampak | 6022 | 07:07:09 | No | 21:20:26 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-21 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 23:07:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-21 | 6026 - Tuxtla Patria Nueva | 6026 | 06:58:00 | Si | 21:08:34 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-21 | 6028 - Comitan Las Flores | 6028 | 07:09:32 | No | 21:44:26 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 1009 - Tixcokob | 1009 | Sin dato | Sin dato | 22:37:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 1025 - Uman | 1025 | 07:08:42 | No | 22:30:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 1033 - Maxcanu | 1033 | 06:57:57 | Si | 22:32:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1037 - Visente Solís | 1037 | 06:45:45 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 1068 - Chemax | 1068 | 06:58:47 | Si | 23:19:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1080 50 sur | Sin dato | 06:59:32 | Si | 22:22:59 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1082 - Mulchchen | 1082 | 06:59:18 | Si | 22:16:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1110 - Miguel Hidalgo | 1110 | 07:18:32 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 1110 Miguel Hidalgo | Sin dato | Sin dato | Sin dato | 22:20:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 1116 - Seye | 1116 | 07:03:07 | No | 22:31:37 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 1120 - Fco Montejo 3 | 1120 | 07:02:08 | No | 22:14:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 1195 - Jardines de norte | 1195 | Sin dato | Sin dato | 22:46:54 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 1215 - Paseos De Opichen | 1215 | 07:03:26 | No | 22:16:46 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 1236 - Boulevards de Oriente | 1236 | 07:06:57 | No | 22:21:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 1244 - Gran Santa Fe | 1244 | 07:07:50 | No | 22:05:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 1248 - Real Montejo | 1248 | 07:04:53 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 1258 - Mérida Pedro Infante | 1258 | 07:03:39 | No | 22:09:11 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 1261 - Conkal 1 | 1261 | 06:59:41 | Si | 22:25:42 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1269 - San Marcos Sustentable | 1269 | 06:58:01 | Si | 22:40:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1279 - Cri Cri | 1279 | 07:03:02 | No | 22:10:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 1281 - Sotuta | 1281 | 07:09:47 | No | 22:07:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 1282 - Tizimin 6 | 1282 | 06:57:19 | Si | 22:01:33 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1292 - Cuzamar | 1292 | 06:55:05 | Si | 22:02:39 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1298 - Muna 2 | 1298 | 06:57:21 | Si | 22:25:12 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1305 - Uman Piedra de Agua 3 | 1305 | Sin dato | Sin dato | 22:25:24 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 1309 - Telchac Puerto - Armado para ausencias | 1309 | Sin dato | Sin dato | 22:12:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 1310 - Costera | 1310 | Sin dato | Sin dato | 22:14:11 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 1318 CHOCHOLA | Sin dato | 06:58:46 | Si | 22:15:38 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 1319 - Macarena Petronila | 1319 | Sin dato | Sin dato | 22:16:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 1320 - Macarena Central de Abastos | 1320 | Sin dato | Sin dato | 20:19:41 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:08 | No | 22:07:07 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2001 - Campeche 16 | 2001 | 06:59:42 | Si | 22:13:16 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2002 - Campeche Mercado | 2002 | 05:56:50 | Si | 21:15:02 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-22 | 2003 - Champotón | 2003 | 05:59:33 | Si | 21:11:53 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-22 | 2004 - CAM Santa Ana | 2004 | 06:27:53 | Si | 22:45:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2006 - Santa Lucia | 2006 | Sin dato | Sin dato | 23:09:26 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2008 - Escarsega | 2008 | 06:47:23 | Si | 22:15:48 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2010 - Campeche Santa Lucía 2 | 2010 | Sin dato | Sin dato | 23:24:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2011 - Hopelchen | 2011 | 06:59:47 | Si | 23:26:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2012 - Escarcega 2 | 2012 | Sin dato | Sin dato | 22:14:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2013 - Seyba Playa | 2013 | 06:58:01 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 2014 - Kala | 2014 | 06:53:28 | Si | 22:47:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2016 - Carmen Tecolutla | 2016 | 07:02:38 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 2017 - Dzibalche | 2017 | Sin dato | Sin dato | 22:34:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2018 - Av. Central | 2018 | Sin dato | Sin dato | 22:17:16 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2019 - Champotón 2 | 2019 | 06:51:30 | Si | 22:28:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2020 - Escarcega 3 | 2020 | Sin dato | Sin dato | 22:18:42 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2021 - Campeche Candelaria | 2021 | 07:02:58 | No | 22:10:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:55:17 | Si | 23:10:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2024 - Cd. Carmen Mercado | 2024 | 07:01:36 | No | 22:31:19 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2026 - Cd del Carmen Av. 10 de Julio | 2026 | Sin dato | Sin dato | 23:28:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2027 - Champotón 3 | 2027 | 06:52:37 | Si | 22:22:43 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2028 - Campeche Samula | 2028 | 06:59:53 | Si | 22:30:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2029 - Palma Real | 2029 | 06:55:56 | Si | 22:25:37 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2030 - CAM San Antonio | 2030 | Sin dato | Sin dato | 22:13:57 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2031 - Cd. Carmen Morelos | 2031 | Sin dato | Sin dato | 22:11:08 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2032 - Hopelchen 2 | 2032 | Sin dato | Sin dato | 22:46:09 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2033 - Cd. Carmen Volcanes | 2033 | Sin dato | Sin dato | 22:12:20 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2034 - Calkini 2 | 2034 | Sin dato | Sin dato | 22:37:51 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2035 - Pomuch | 2035 | 07:11:21 | No | 22:21:23 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2036 - Champotón 4 | 2036 | Sin dato | Sin dato | 22:10:35 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2037 - Tenabo | 2037 | 06:46:42 | Si | 22:17:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2038 - Calkini Mercado | 2038 | 06:33:26 | Si | 22:19:25 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2039 - Xpujil | 2039 | 06:47:58 | Si | 22:29:06 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2040 - Escarcega 4 | 2040 | Sin dato | Sin dato | 22:35:17 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2041 - Sabancuy | 2041 | Sin dato | Sin dato | 22:18:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2042 - Palizada | 2042 | 07:05:00 | No | 22:09:58 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2043 - Nunkini | 2043 | 06:53:21 | Si | 22:34:05 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2044 - Candelaria 2 | 2044 | Sin dato | Sin dato | 22:22:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2045 - Champoton 5 | 2045 | 07:03:28 | No | 22:21:59 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2046 - El Polvorín | 2046 | 06:54:51 | Si | 22:59:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2047 - China | 2047 | 06:59:33 | Si | 22:32:47 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2048 - Campeche Centro | 2048 | 06:59:52 | Si | 21:50:53 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-22 | 2049 - Becal | 2049 | 07:06:07 | No | 22:49:47 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2051 - Campeche Morelos | 2051 | Sin dato | Sin dato | 22:27:19 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2052 - Campeche Granjas | 2052 | 06:59:42 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 2053 - Escarcega Morelos | 2053 | Sin dato | Sin dato | 22:19:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2054 - Plan Chac | 2054 | 21:59:13 | No | 22:27:01 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2055 - Dzilbachen | 2055 | 21:50:19 | No | 22:38:13 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2059 - Calkini 4 | 2059 | 06:40:33 | Si | 22:26:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2060 - Calkini 5 | 2060 | 06:58:06 | Si | 22:27:41 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2061 - Fidel Velazquez | 2061 | 22:01:56 | No | 22:45:00 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2062 - Kanisté | 2062 | 07:01:23 | No | 21:40:13 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 2063 - Montecristo | 2063 | 06:55:35 | Si | 22:19:19 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2064 - Tomas Aznar | 2064 | Sin dato | Sin dato | 22:37:06 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2065 - Pomuch 2 | 2065 | 06:58:30 | Si | 22:35:31 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2066 - Isla Aguada | 2066 | 07:00:07 | No | 22:52:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2067 - Candelaria 3 | 2067 | 06:59:39 | Si | 22:19:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2068 - Bolonchen | 2068 | Sin dato | Sin dato | 22:23:39 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2069 - Hopelchen 3 | 2069 | 06:59:57 | Si | 22:55:56 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2070 - Minas(1) | 2070 | 06:58:37 | Si | 22:34:24 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2072 - Xpujil 2 | 2072 | Sin dato | Sin dato | 23:09:13 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2074 - Bellavista | 2074 | 06:52:13 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 2076 - Ejido Carrillo Puerto | 2076 | 06:32:02 | Si | 22:14:57 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2077 - Campeche Siglo XXI | 2077 | 06:25:18 | Si | 22:24:17 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2078 - Escarcega 6 | 2078 | Sin dato | Sin dato | 22:16:30 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2079 - Bonfil | 2079 | 21:54:08 | No | 22:19:33 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2080 - Ramon Espinola | 2080 | 06:38:14 | Si | 22:24:27 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2081 - Edzna | 2081 | 07:04:52 | No | 22:31:24 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2082 - Av. Periferia | 2082 | 07:01:20 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 2084 - Holpelchen 4 | 2084 | 07:05:54 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 2085 - Escarcega 7 | 2085 | Sin dato | Sin dato | 22:57:49 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2087 - Champoton 7 | 2087 | Sin dato | Sin dato | 22:12:01 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2089 - Escarcega 8 | 2089 | Sin dato | Sin dato | 22:40:50 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 2090 - Calkini 7 | 2090 | 06:41:19 | Si | 22:16:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2091 - Hecelchakan 2 | 2091 | 06:48:07 | Si | 22:35:53 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2092 - Lerma | 2092 | 06:50:29 | Si | 22:17:29 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 2093 - Tenabo 2 | 2093 | 07:00:44 | No | 22:36:45 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 2095 - Champoton 8 | 2095 | 07:01:20 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 2096 - Escarcega 10 | 2096 | 06:56:59 | Si | 22:11:28 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 3005 - Cancun Niños Heroes | 3005 | 05:48:03 | Si | 21:15:38 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-22 | 3008 - Playa del Carmen 2 | 3008 | 05:59:28 | Si | 21:08:49 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-22 | 3013 - QROO Felipe Carrillo Puerto | 3013 | Sin dato | Sin dato | 21:24:24 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 3017 - Playa del Carmen 3 | 3017 | Sin dato | Sin dato | 21:03:14 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 3040 - Kantunilkin | 3040 | Sin dato | Sin dato | 21:31:08 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 3051 - QR Playa Av. 115 | 3051 | Sin dato | Sin dato | 21:51:55 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 3055 - Isla Mujeres | 3055 | Sin dato | Sin dato | 21:26:10 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 3096 - Tulum Pueblo 3 | 3096 | Sin dato | Sin dato | 21:13:46 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 3110 - Holbox | 3110 | 06:00:30 | Si | 01:35:52 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-22 | 3111 - Nva. Cozumel 1 | 3111 | Sin dato | Sin dato | 21:32:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 3113 - Playa Villas del Sol | 3113 | 06:00:02 | Si | 21:38:50 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-22 | 3124 - Bacalar Mercado | 3124 | 05:55:45 | Si | 21:23:42 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-22 | 3152 - Kantunilkin 2 | 3152 | Sin dato | Sin dato | 21:13:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 3165 - Tulum Veleta | 3165 | Sin dato | Sin dato | 21:46:09 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 3167 - Macarena Tulum | 3167 | 05:49:25 | Si | 22:12:02 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 3502 - BB Bacalar | 3502 | 20:58:00 | No | 21:17:33 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 5001 - Tabasco Frontera 1 | 5001 | Sin dato | Sin dato | 22:01:37 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 5002 - Tenosique Centro | 5002 | 06:55:10 | Si | 22:08:07 | Si | Completo | Cumple open-close | Abrio y cerro dentro del horario esperado.
2026-04-22 | 5003 - Emiliano Zapata | 5003 | 07:02:10 | No | 22:13:42 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 5004 - Tab. Balancan | 5004 | 07:06:53 | No | 22:07:41 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 5010 - Ciudad Pemex | 5010 | 07:12:54 | No | 21:56:24 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6001 - Chiapas Palenque 1 | 6001 | 07:12:34 | No | 20:06:54 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6003 - Chiapas Comitan 1 | 6003 | 07:04:40 | No | 21:32:56 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6004 - Villaflores | 6004 | 07:11:03 | No | 21:21:27 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6005 - Chiapas Las Rosas | 6005 | Sin dato | Sin dato | 22:12:32 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 6006 - Chiapas Comitan 2 | 6006 | 07:10:13 | No | 21:42:33 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6007 - Chiapas Ocozocoautla | 6007 | 07:02:49 | No | 21:19:30 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6008 - Chiapas Teopisca | 6008 | 06:59:34 | Si | 21:19:34 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-22 | 6010 - Comitan 3 | 6010 | Sin dato | Sin dato | 21:22:11 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 6011 - Venustiano Carranza | 6011 | Sin dato | Sin dato | 21:38:13 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 6012 - San Cristobal | 6012 | Sin dato | Sin dato | 21:08:31 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 6014 - Tuxtla Santa María | 6014 | 07:06:06 | No | 21:11:16 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6015 - Tuxtla San José | 6015 | 07:16:00 | No | 22:15:20 | Si | Completo | No cumple apertura | Abrio despues de las 7:00 AM.
2026-04-22 | 6016 - Alcala | 6016 | Sin dato | Sin dato | 23:52:41 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 6018 - Las Margaritas | 6018 | Sin dato | Sin dato | 21:17:15 | No | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 6020 - Colon | 6020 | 07:04:23 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-22 | 6021 - Niño de Atocha | 6021 | 07:07:20 | No | 21:06:28 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6022 - Bonampak | 6022 | 07:03:22 | No | 21:13:09 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6024 - Chiapas Catazaja | 6024 | Sin dato | Sin dato | 22:04:14 | Si | Sin apertura | Incompleto | No se encontro apertura valida para evaluar si abrio a tiempo.
2026-04-22 | 6026 - Tuxtla Patria Nueva | 6026 | 07:04:26 | No | 21:08:18 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-22 | 6028 - Comitan Las Flores | 6028 | 07:04:01 | No | 21:33:01 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-23 | 1025 - Uman | 1025 | 07:08:16 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1033 - Maxcanu | 1033 | 06:53:41 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1037 - Visente Solís | 1037 | 06:41:41 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1068 - Chemax | 1068 | 06:59:40 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1080 50 sur | Sin dato | 06:59:20 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1082 - Mulchchen | 1082 | 07:04:46 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1110 - Miguel Hidalgo | 1110 | 07:11:27 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1116 - Seye | 1116 | 07:03:50 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1120 - Fco Montejo 3 | 1120 | 07:04:36 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1215 - Paseos De Opichen | 1215 | 07:03:36 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1244 - Gran Santa Fe | 1244 | 07:07:02 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1248 - Real Montejo | 1248 | 07:03:17 | No | 01:00:54 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-23 | 1261 - Conkal 1 | 1261 | 06:58:52 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1269 - San Marcos Sustentable | 1269 | 06:58:39 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1279 - Cri Cri | 1279 | 07:03:34 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1282 - Tizimin 6 | 1282 | 06:55:12 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1292 - Cuzamar | 1292 | 06:53:50 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1298 - Muna 2 | 1298 | 07:02:48 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1305 - Uman Piedra de Agua 3 | 1305 | 06:57:07 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1318 CHOCHOLA | Sin dato | 06:51:31 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 1321 - Macarena Av. Quetzalcoatl | 1321 | 07:01:02 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2001 - Campeche 16 | 2001 | 06:57:21 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2002 - Campeche Mercado | 2002 | 05:56:27 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2003 - Champotón | 2003 | 05:56:38 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2004 - CAM Santa Ana | 2004 | 06:25:02 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2008 - Escarsega | 2008 | 06:54:37 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2011 - Hopelchen | 2011 | 06:57:07 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2013 - Seyba Playa | 2013 | 06:54:30 | Si | 00:36:59 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-23 | 2014 - Kala | 2014 | 06:54:02 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2016 - Carmen Tecolutla | 2016 | 07:06:00 | No | 01:16:37 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-23 | 2019 - Champotón 2 | 2019 | 06:49:10 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2020 - Escarcega 3 | 2020 | 06:48:14 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2021 - Campeche Candelaria | 2021 | 07:00:30 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2023 - Campeche Av. Lopez Mateos | 2023 | 06:58:55 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2027 - Champotón 3 | 2027 | 06:52:56 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2028 - Campeche Samula | 2028 | 06:59:02 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2029 - Palma Real | 2029 | 07:27:33 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2031 - Cd. Carmen Morelos | 2031 | 06:53:16 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2032 - Hopelchen 2 | 2032 | 06:52:42 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2034 - Calkini 2 | 2034 | 06:58:43 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2037 - Tenabo | 2037 | 06:47:02 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2038 - Calkini Mercado | 2038 | 06:33:32 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2039 - Xpujil | 2039 | 06:42:05 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2042 - Palizada | 2042 | 07:10:58 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2043 - Nunkini | 2043 | 06:53:04 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2044 - Candelaria 2 | 2044 | 06:56:56 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2045 - Champoton 5 | 2045 | 06:56:57 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2046 - El Polvorín | 2046 | 06:54:59 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2048 - Campeche Centro | 2048 | 06:58:04 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2049 - Becal | 2049 | 07:01:02 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2052 - Campeche Granjas | 2052 | 07:03:28 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2059 - Calkini 4 | 2059 | 06:39:02 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2060 - Calkini 5 | 2060 | 06:48:06 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2062 - Kanisté | 2062 | 06:56:54 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2063 - Montecristo | 2063 | 06:47:54 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2065 - Pomuch 2 | 2065 | 06:59:27 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2066 - Isla Aguada | 2066 | 07:00:25 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2067 - Candelaria 3 | 2067 | 07:07:58 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2069 - Hopelchen 3 | 2069 | 06:55:11 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2070 - Minas(1) | 2070 | 07:00:13 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2074 - Bellavista | 2074 | 06:55:10 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2076 - Ejido Carrillo Puerto | 2076 | 06:30:57 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2080 - Ramon Espinola | 2080 | 06:57:41 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2081 - Edzna | 2081 | 07:29:15 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2082 - Av. Periferia | 2082 | 06:59:53 | Si | 00:11:36 | No | Completo | No cumple cierre | Cerro antes de las 10:00 PM.
2026-04-23 | 2084 - Holpelchen 4 | 2084 | 07:01:47 | No | 00:13:07 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-23 | 2085 - Escarcega 7 | 2085 | 06:53:18 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2088 - Calkini 6 | 2088 | 06:55:26 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2090 - Calkini 7 | 2090 | 06:45:23 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2091 - Hecelchakan 2 | 2091 | 06:53:28 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2092 - Lerma | 2092 | 07:05:25 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2093 - Tenabo 2 | 2093 | 06:58:33 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2095 - Champoton 8 | 2095 | 06:54:00 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 2096 - Escarcega 10 | 2096 | 07:03:19 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 3005 - Cancun Niños Heroes | 3005 | 05:48:51 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 3008 - Playa del Carmen 2 | 3008 | 06:00:26 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 3040 - Kantunilkin | 3040 | 05:45:05 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 3110 - Holbox | 3110 | 05:59:21 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 3124 - Bacalar Mercado | 3124 | 05:54:38 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 3152 - Kantunilkin 2 | 3152 | 05:53:23 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 3167 - Macarena Tulum | 3167 | 05:57:33 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 5002 - Tenosique Centro | 5002 | 07:02:19 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 5003 - Emiliano Zapata | 5003 | 07:01:32 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 5010 - Ciudad Pemex | 5010 | 07:07:56 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6001 - Chiapas Palenque 1 | 6001 | 07:02:43 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6003 - Chiapas Comitan 1 | 6003 | 07:07:39 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6006 - Chiapas Comitan 2 | 6006 | 07:15:15 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6007 - Chiapas Ocozocoautla | 6007 | 06:57:32 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6008 - Chiapas Teopisca | 6008 | 06:57:59 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6014 - Tuxtla Santa María | 6014 | 07:01:30 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6015 - Tuxtla San José | 6015 | 07:15:54 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6020 - Colon | 6020 | 07:18:38 | No | 00:56:19 | No | Completo | No cumple ambos | Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.
2026-04-23 | 6021 - Niño de Atocha | 6021 | 07:00:58 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6022 - Bonampak | 6022 | 07:06:50 | No | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
2026-04-23 | 6026 - Tuxtla Patria Nueva | 6026 | 06:58:12 | Si | Sin dato | Sin dato | Sin cierre | Incompleto | No se encontro cierre valido para evaluar si cerro a tiempo.
```

