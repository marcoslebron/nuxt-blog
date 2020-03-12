---
name: 'como-utilizar-el-flexbox'
trans: 'how-to-use-the-flexbox'
title: Como utilizar el flexbox
year: 21 Febrero 2020
color: '#edece7'
category: 'css'
isTextColorDark: true
noMainImage: false
# extraComponent: 'Datatable'
id: 'how-to-use-flexbox'
description: |
  El flexbox o modulos de cajas flexible fue diseñado como una alternativa al ya tan utilizado sistema de grid de css quizas ya lo has utilizado gracias al framework bootstrap basicamente es un sistema basado en filas y columnas mientras que el sistema de cajas.
---

## El Flexbox o modulos de cajas flexibles

El flexbox o modulos de cajas flexible fue diseñado como una alternativa al ya tan utilizado sistema de grid de css quizas ya lo has utilizado gracias al framework bootstrap basicamente es un sistema basado en filas y columnas mientras que el sistema de cajas felxibles flexbox es mas enfocado en posicionamiento de cajas, aqui un ejemplo:

```css
  #wrapper {
	  display: flex; 
	  flex-direction: row;
	}
```

Aqui la propiedad `display` inicializa la utilizacion de modulos flexibles en el contenedor de id #wrapper `flex-direction` indica la direccion del eje principal `flex-wrap` indica el desbordamiento multilinia de los elementos en el contenedor

## Los dos ejes
<image-responsive imageURL="blog/how-to-use-flexbox/flexbox-es-01.svg" width="100%" alt="Foto de los ejes donde se representa el eje principal y el eje secundario del sistema de flexbox"/>

El eje principal esta determinado por la propiedad `flex-direction` a la cual toma como valores `row`, `row-reverse`, `column` y `column-reverse` cuando utilizamos `row` como valor el eje principal se depliega de izquierda a derecha y el eje secundario en columnas como en la imagen mas arriba, por el contrario cuando utilizamos `column` el eje principal se depliega de arriba a abajo y el eje secundario de despliega a lo largo de las filas.

<image-responsive imageURL="blog/how-to-use-flexbox/flexbox-03.svg" width="100%" alt="Foto de los ejes donde se representa el eje secundario del sistema de flexbox"/>

Otra propiedad importante es la propiedad `flex-wrap` la cual habilita la multilinea de los hijos dentro del contenedor tomando como valor `wrap`, `nowrap` & `wrap-reverse`, siendo `nowrap` el valor por defecto.

```css
  #wrapper {
	  display: flex; 
	  flex-direction: row;
	  flex-wrap: wrap;
	}
	.hijos{
	  width: 300px;
	}
```
Es importante destacar que si los hijos tiene un un ancho predeterminado y utilizamos el valor `nowrap` en la propiedad `flex-wrap` el navegador reacomodara el ancho de los mismo si estos exeden el ando del contenedor padre.

Tambien podemos definir los dos valores de `flex-wrap` y `flex-direction` en una sola propiedad `flex-flow`

```css
  #wrapper {
	  display: flex; 
    flex-flow: row wrap; /* <flex-direction> <flex-wrap>*/
	}
```

## Alineando los elementos hijos
