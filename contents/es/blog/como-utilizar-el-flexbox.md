---
name: 'como-utilizar-el-flexbox'
trans: 'how-to-use-the-flexbox'
title: Como utilizar el flexbox
year: 21 Febrero 2020
updatedDate: 21 Marz 2020
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

## Eje Principal
El eje principal esta determinado por la propiedad `flex-direction` a la cual toma como valores `row`, `row-reverse`, `column` y `column-reverse` cuando utilizamos `row` como valor el eje principal se depliega de izquierda a derecha.

## Eje secundario
El eje secundario en columnas como en la imagen mas arriba, por el contrario cuando utilizamos `column` el eje principal se depliega de arriba a abajo y el eje secundario de despliega a lo largo de las filas.

<image-responsive imageURL="blog/how-to-use-flexbox/flexbox-03.svg" width="100%" alt="Foto de los ejes donde se representa el eje secundario del sistema de flexbox"/>

## flex-wrap
Otra propiedad importante es la propiedad `flex-wrap` la cual habilita la multilinea de los hijos dentro del contenedor tomando como valor `wrap`, `nowrap` & `wrap-reverse`, siendo `nowrap` el valor por defecto.

```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
  }
  .item {
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
## justify-content 
`justify-content`
Define la posicion de los elementos con respecto al eje principal 
```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
```
`justify-content: flex-start`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-04.svg" width="100%" alt="Foto donde presenta flex-start de la propiedad justify-content"/>

```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
```
`justify-content: flex-end`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-05.svg" width="100%" alt="Foto donde presenta flex-end de la propiedad justify-content"/>

```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
```
`justify-content: center`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-06.svg" width="100%" alt="Foto donde presenta center de la propiedad justify-content"/>

```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
```
`justify-content: space-between`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-07.svg" width="100%" alt="Foto donde presenta space-between de la propiedad justify-content"/>

```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
```
`justify-content: space-around`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-09.svg" width="100%" alt="Foto donde presenta space-around de la propiedad justify-content"/>

```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
```
`justify-content: space-evenly`
<image-responsive imageURL="blog/how-to-use-flexbox/flex-08.svg" width="100%" alt="Foto donde presenta space-evenly de la propiedad justify-content"/>

## align-items 
`align-items`
Define la posicion de los elementos con respecto al eje secundario
`align-items: flex-start`
```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-04.svg" width="100%" alt="Foto donde presenta el valor flex-start de la propiedad align-items"/>

`align-items: flex-end`
```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-11.svg" width="100%" alt="Foto donde presenta el valor flex-end de la propiedad align-items"/>

`align-items: center`
```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-12.svg" width="100%" alt="Foto donde presenta el valor center de la propiedad align-items"/>

`align-items: stretch`
```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-13.svg" width="100%" alt="Foto donde presenta el valor stretch de la propiedad align-items"/>

`align-items: baseline`
```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/flex-10.svg" width="100%" alt="Foto donde presenta el valor baseline de la propiedad align-items"/>

### align-self
Esta propiedad nos permitar modificar directamente el alineamiento de un elemento hijo en el eje secundario. `align-self` acepta los mismos valores que `align-items` (`flex-start`, `flex-end`, `center` etc)

```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .items{
    width: 100px;
  }
  .item3 {
    align-self: center;
  }
```
<image-responsive imageURL="blog/how-to-use-flexbox/align-self-14.svg" width="100%" alt="Foto donde presenta el valor center de la propiedad align-self"/>

## Alineando los elementos hijos

En caso queramos tener mas control de los objetos hijos dentro del contenedor podemos asignar propiedades a los mismos, debemos destacar que al modificar dichas propiedades estamos manipulando como los objetos hijos se muestran en el espacio disponible en el contenedor padre

`flex-grow` habilita los objetos hijos crecer dentro del contenedor padre de ser necesario indicado por el valor de numero positivo 
```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
  }
  .item {
    width: 300px;
    flex-grow: 1;
  }
```
si algunos de los elementos hijos tiene un valor mayor en la propiedad `flex-grow` este elemento tomara mas espacio del remanente en el contenedor.

`flex-basis` define el tamaño base de objetos hijos antes de distribuirlos en el contenedor el valor por defecto es `auto` 
[ver grafico](https://www.w3.org/TR/css-flexbox-1/images/rel-vs-abs-flex.svg)

`flex-shrink` determina el encogimiento de los elementos con respecto al contenedor padre, si se especifica un valor 0 los elementos se desbordaron fuera del contenedor padre. Mientras mayor el numero mayor sera el encogimiento.

```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
  }
  .item {
    width: 300px;
    flex-grow: 1;
    flex-shrink: 1;
  }
```
Comunmente se utiliza el atajo `flex` para definir los tres valores en una sola propiedad `flex-grow`, `flex-shrink` y `flex-basis`

```css
  #wrapper {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
  }
  .item {
    width: 300px;
    flex: 1 1 auto; /* flex-grow flex-shrink flex-basis */
  }
```
### Los navegadores que soportan la propiedad flexbox son son los siguientes:
- Safari 6.1+ (prefixed with -webkit-)
- Android 4.4+
- iOS 7.1+ (prefixed with -webkit-)
- Chrome 29+
- Firefox 28+
- Internet Explorer 11+
- Opera 17+

[Fuente](https://caniuse.com/#feat=flexbox).

## Conclución
Hemos cubierto la mayoria de las propiedades del flexbox. Lo siguiente es que pongas en practica lo aprendido.

