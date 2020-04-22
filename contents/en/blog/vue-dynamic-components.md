---
name: 'vue-dynamic-components'
trans: 'componentes-dinamicos-vue'
title: Example of Dynamics Components in Vue
year: 10 Apr 2020
updatedDate: 10 Apr 2020
color: '#edece7'
category: 'vue'
cardAlt: 'Article on how to use the dynamics components'
isTextColorDark: true
noMainImage: false
# extraComponent: 'Datatable'
id: 'vue-dynamic-components'
description: |
  There is a way in vue js to unmount and mount component dynamically, the main idea is to let users dynamically mount and unmount components in the user interface without using routers.
---

## Making use of dynamic components in vuejs

There is a way in vue js to unmount and mount component dynamically, the main idea is to let users dynamically mount and unmount components in the user interface without using routers.

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

## Keeping data

If in any case you don't want the component to re-render when you change condition value to unmount and mount other component you can wrap the component block in a keep-alive tag this will allow the component to keep its state even when its unmounted, this can be very helpful for some types of components like tabs or accordions.

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

This was a quick example of how to use dynamic components you can check my other article where i talk about async components <nuxt-link to="/blog/vue-async-components">You can read it here</nuxt-link>

Until next time!