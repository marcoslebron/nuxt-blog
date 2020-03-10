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

# El Flexbox o modulos de cajas flexibles

El flexbox o modulos de cajas flexible fue diseñado como una alternativa al ya tan utilizado sistema de grid de css quizas ya lo has utilizado gracias al framework bootstrap basicamente es un sistema basado en filas y columnas mientras que el sistema de cajas felxibles flexbox es mas enfocado en posicionamiento de cajas, aqui un ejemplo:

```css
    #wrapper {
	  display: flex; 
	  flex-direction: row;
	  flex-wrap: wrap;
	}
```

Aqui la propiedad `display` inicializa la utilizacion de modulos flexibles en el contenedor de id #wrapper `flex-direction` indica la direccion del eje principal `flex-wrap` indica el desbordamiento multilinia de los elementos en el contenedor

## Los dos ejes
<image-responsive imageURL="blog/how-to-use-flexbox/flexbox-ejes.png" width="100%" alt="Foto de los ejes donde se representa el eje principal y el eje secundario del sistema de flexbox"/>