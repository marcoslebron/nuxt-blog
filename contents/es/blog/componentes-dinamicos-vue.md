---
name: 'componentes-dinamicos-vue'
trans: 'vue-dynamic-components'
title: Aprendamos sobre Componentes Dinamicos en vuejs
year: 9 Apr 2020
updatedDate: 9 Apr 2020
color: '#edece7'
category: 'vue'
cardAlt: 'Articulo sobre como utilizar componentes dinamicos en vue'
isTextColorDark: true
noMainImage: false
# extraComponent: 'Datatable'
id: 'vue-dynamic-components'
description: |
  Aveces tenemos un componente en especifico que require de la utilizacion de muchas condiciones esto hace ver nuestro html un poco desorganizada, pero para esto vue tuene una solucion.
---

## Utilizando componentes dinamicos en vuejs

  Aveces tenemos un componente en especifico que require de la utilizacion de muchas condiciones esto hace ver nuestro html un poco desorganizada, pero para esto vue tuene una solucion. 

  Es la opcion de montar y desmontar componentes basado en una condicion dentro de nuestro archivo ya se una propiedad computada. un ejemplo breve.

```javascript
<template>
<div class="page-layout" :class="cssLayout">
  <component :is="componentToRender">
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"
import ComponentBaseOne from "../component/ComponentBaseOne"
import ComponentBaseTwo from "../component/ComponentBaseTwo"

@Component({
  name: 'LayoutComponent',
  components: {
    ComponentBaseOne,
    ComponentBaseTwo
  }
})
export default class LayoutComponent extends Vue {
  public conditional = true // Esto puede ser cualquier otra condicon mas compleja 

  get componentToRender(): string {
    return this.conditional ? 'ComponentBaseOne' : 'ComponentBaseTwo';
  }
}

```
## Mantener la data en los components

Si, en cualquier caso, no desea que el componente se vuelva a representar cuando cambia el valor de la condición para desmontar y montar otro componente, puede envolver el bloque del componente en una etiqueta de mantener vivo, esto permitirá que el componente mantenga su estado incluso cuando desmontado, esto puede ser muy útil para algunos tipos de componentes como pestañas o acordeones.


```javascript
<template>
<div class="page-layout" :class="cssLayout">
  <keep-alive>
    <component :is="componentToRender">
  <keep-alive>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"
import ComponentBaseOne from "../component/ComponentBaseOne"
import ComponentBaseTwo from "../component/ComponentBaseTwo"

@Component({
  name: 'LayoutComponent',
  components: {
    ComponentBaseOne,
    ComponentBaseTwo
  }
})
export default class LayoutComponent extends Vue {
  public conditional = true // Esto puede ser cualquier otra condicon mas compleja 

  get componentToRender(): string {
    return this.conditional ? 'ComponentBaseOne' : 'ComponentBaseTwo';
  }
}

```

Este fue un ejemplo rápido de cómo usar componentes dinámicos, puede consultar mi otro artículo donde hablo sobre componentes asincrónicos <nuxt-link to="es/blog/componentes-asincronos-vue"> Componentes Asyncronos</nuxt-link>

¡Gracias por leer! Si tienes alguna duda sobre el tema deja tu comentario con gusto te responderé.

¡Hasta la Próxima!