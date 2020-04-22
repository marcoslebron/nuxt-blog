---
name: 'componentes-asincronos'
trans: 'vue-async-components'
title: Ejemplo practico sobre componentes asíncronos en vuejs
year: 9 Apr 2020
updatedDate: 9 Apr 2020
color: '#edece7'
category: 'vue'
cardAlt: 'Articulo sobre como utilizar componentes asincronos en vue'
isTextColorDark: true
noMainImage: false
# extraComponent: 'Datatable'
id: 'vue-async-components'
description: |
  Cuando tienes aplicaciones de gran tamaño es preciso optimizar nuestra base de código para que divida nuestro código en partes y estas partes sean requerida cuando el navegador las necesite.
---

## Utilizando componentes asíncronos en vuejs

  Cuando tienes aplicaciones de gran tamaño es preciso optimizar nuestra base de código para que divida nuestro código en partes y estas partes sean requeridas cuando el navegador las necesite. Lo que hace vue en este caso es guardar un copia del componente en cache y utilizarlo tantas veces sea necesario desde esta fuente manteniendo así el estado previo del componente.

```javascript
<template>
<div class="page-layout" :class="cssLayout">
  <sidebar/>
  <slot name="content")></>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"

@Component({
  name: 'LayoutComponent',
  components: {
    'sidebar': () => import('../components/Sidebar')
  }
})
export default class LayoutComponent extends Vue {
}

```
Utilizando una constante con attributos extras como loading y tiempo de delay

```javascript
<template>
<div class="page-layout" :class="cssLayout">
  <sidebar/>
  <slot name="content")></>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"
import LoadingComponent from "../components/LoadingComponent"
import ErrorComponent frin "../components/ErrorComponent"

const SidebarAsync = () => ({
    component: import('../components/Sidebar'),
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 500,
    timeout: 2000
})
@Component({
  name: 'LayoutComponent',
  components: {
    'sidebar': SidebarAsync
  }
})
export default class LayoutComponent extends Vue {
}

```
Pero ten en cuenta que para utilizar este método de importación debes estar utilizando webpack y ES6 solo así podemos hacer uso de esta.

Otro patrón al implementar componentes vue es el patrón dinámico. <nuxt-link to="es/blog/componentes-dinamicos-vue">Aqui puedes leer mas sobre componentes dinamicos</nuxt-link>

¡Gracias por leer! Si tienes alguna duda sobre el tema deja tu comentario con gusto te responderé.

¡Hasta la Próxima!