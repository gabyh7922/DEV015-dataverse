# Dataverse

## Índice


* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Consideraciones generales](#2-consideraciones-generales)
* [3. Funcionalidades](#3-funcionalidades)


## 1. Resumen del proyecto

En este proyecto construímos una página web para visualizar un conjunto (set) de datos, que generamos con [prompting], en este caso usamos Chat GPT. Esta página web fue creada en base a lo que el usuario necesita.
Esta página web permite visualizar la data, filtrarla, ordenarla y calcular algunas estadísticas.

## 2. Consideraciones generales

* Este proyecto fue realizado en duplas.(Gaby y Pame)
* Lo primero que hicimos fue la historias de usuarios, que aquí adjuntamos:

*Después nos dedicamos a la generación de los datos ,para el cuál usamos el ChatGPT , que también adjuntamos algunas capturas de pantallas.y para crear algunas imágenes fue con el generador de imágenes de Bing. El tema que elegimos fue mujeres destacables en el área de ciencias, ya sea de computación,química, física, videojuegos, astronomía etc.Donde la data fue incorporada en formato Jason.

* El proyecto se encuentra en GitHub y la interfaz está desplegada en GitHub Pages.

## 4. Funcionalidades

Logramos crear una página web que permite **visualizar la data,
filtrarla, ordenarla y calcular estadísticas**.

Aqui detallaremos las funcionalidades: 

* La aplicación permite a la usuaria ver los items de la data en una visualización en tipo tarjetas.

* La aplicación calcula y visualiza una estadística de la data.

* La aplicación permite a la usuaria filtrar la data. Para ésto usamos 
  un elemento [`<select>`].

* La aplicación permite a la usuaria ordenar la data.
  - Tiene un control `<select>` para ordenar.

* Las funcionalidades de ordenar opera sobre la data filtrada.
  
* La aplicación perimite a la usuaria reiniciar la aplicación, limpiando
  filtros y ordenamiento, con un `<button>'.

* Las operaciones de filtrar, ordenar, limpiar, etc. no recargan la página, 
  si no que agregan el contenido en una manera dinámica via javascript.

* La aplicación es responsiva, es decir, puede visualizarse sin problemas
  desde distintos tamaños de pantallas: móviles, tablets y desktops.

