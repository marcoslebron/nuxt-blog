---
name: 'vue-async-components'
trans: 'componentes-asincronos-vue'
title: Vue Async Components
year: 9 Apr 2020
updatedDate: 9 Apr 2020
color: '#edece7'
category: 'vue'
cardAlt: 'Article on how to use the async components'
isTextColorDark: true
noMainImage: false
# extraComponent: 'Datatable'
id: 'vue-async-components'
description: |
  When you have large applications it is necessary to optimize our code base so that it divides our code into parts and these parts are required when the browser needs them.
---

## Utilizando componentes asíncronos en vuejs

When you have large applications it is necessary to optimize our code base so that it divides our code into parts and these parts are required when the browser needs them. 
What vue does in this case is to keep a copy of the component in cache and use it as many times as necessary from this source, thus maintaining the previous state of the component.

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
Using a constant with extra attributes like loading and delay time

```javascript
<template>
<div class="page-layout" :class="cssLayout">
  <sidebar/>
  <slot name="content")></>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"

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

But keep in mind that to use this import method you must be using webpack and ES6 only this way we can make use of it.

Thank you for reading! If you have any questions about the subject, leave your comment with pleasure, I will answer you.

Until next time!