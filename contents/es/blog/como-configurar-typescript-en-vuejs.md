---
name: 'como-configurar-typescript-en-vuejs'
trans: 'how-to-setup-vue-with-typescript'
title: Como configurar TypeScript en vuejs
year: 26 Mar 2020
updatedDate: 26 Mar 2020
color: '#edece7'
category: 'vuejs'
cardAlt: 'Article on how to setup typescript in vuejs'
isTextColorDark: true
noMainImage: false
contentTable: [
  {name: 'Descripción general de TypeScript', id: '#typescript-overview'},
  {name: 'Configuración de Vuejs con TypeScript en un nuevo proyecto', id: '#setting-up-vuejs-new'},
  {name: 'Configuración de Vuejs con TypeScript en una configuración de proyecto existente', id: '#setting-up-vuejs'},
  {name: 'Uso de TypeScript con componentes de archivo único', id: '#using-typescript'},
  {name: 'Decorador $emit', id: '#decorator-emit'},
  {name: 'Decorador Watch', id: '#decorator-watch'},
  {name: 'Mixins en componentes tipo clases', id: '#mixins-vue-class'},
  {name: 'Notas Importantes', id: '#important-notes'},
  {name: 'Conclusiones', id: '#conclusion'}
]
# extraComponent: 'Datatable'
id: 'how-to-setup-vue-with-typescript'
description: |
  Como ya sabrás, el mecanografiado es un superconjunto de tipo estático que compila JavaScript simple. En otras palabras, nos permite utilizar la verificación de tipos en nuestro código. Veamos los beneficios de este bramido.
---

Tabla de contenidos:
* [Descripción general de TypeScript](#typescript-overview)
* [Configuración de Vuejs con TypeScript en un nuevo proyecto](#setting-up-vuejs-new)
* [Configuración de Vuejs con TypeScript en una configuración de proyecto existente](#setting-up-vuejs)
* [Uso de TypeScript con componentes de archivo único](#using-typescript)
* [Decorador $emit](#decorator-emit)
* [Decorador @Watch](#decorator-watch)
* [Mixins en componentes de clase vue](#mixins-vue-class)
* [Notas importantes](#important-notes)
* [Conclusiones](#conclusion)

## <a href="#typescript-overview" name="typescript-overview">#</a> Descripción General de TypeScript
El TypeScript es un superconjunto para JavaScript, pero ¿qué significa esto? Bueno, significa que es como una mejora que agrega a su proyecto y lo usa junto con JavaScript, puedes [leer más sobre esto aquí](https://www.typescriptlang.org/docs/handbook/basic-types.html). 

Quizás se pregunte ¿Qué beneficios o ventajas proporcionará el uso de TypeScript? pues aquí enumero algunos.

- Los tipos son una de las mejores formas de documentación que puede tener.
- Escalabilidad de código.
- Una comunidad que es apadrinada por Microsoft.
- Mejor comprensión del código.
- Más fácil de probar y depurar, es mejor para el compilador detectar errores que hacer que las cosas fallen en tiempo de ejecución.
- Finalización de código e IntelliSense. Intellisense proporciona sugerencias activas a medida que se agrega un código

## <a href="#setting-up-vuejs-new" name="setting-up-vuejs-new">#</a> Configuración de Vuejs con TypeScript en un nuevo proyecto
Comencemos por abrir la Terminal, escriba el siguiente comando (en caso de que no tenga vue CLI en su máquina, puede omitirlo si lo tiene):

` npm install --global @vue/cli`

después de que este comando termine de ejecutarse, escriba el siguiente comando

` vue create [your-app-name]`

Aquí se le solicitará un asistente de pasos en la línea de comando, seleccione las dos primeras opciones [babel y mecanografiado] márquelas con la barra espaciadora y luego presione Intro para continuar, deje todo el resto con las opciones predeterminadas, déjelo terminar. Fácil verdad? 
Ahora ingrese la carpeta creada con el nombre de su proyecto y ejecute el servidor

`cd [your-app-name]`

luego

`yarn dev`

<image-responsive imageURL="blog/how-to-setup-vue-with-typescript/vue-typescript.png" width="60%" alt="Photo of webpage with vue server up"/>

Ahora debería hacer que el servidor se ejecute en el puerto localhost: 8081 o: 8080

Antes de ir más allá, permítame explicar algo sobre los archivos creados en el proyecto, verá algunos archivos relacionados con la configuración de TypeScript dentro de la carpeta src, encontrará un `shims-vue.d.ts` que ayuda a su IDE a comprender qué el archivo que termina en `.vue` es.

<image-responsive imageURL="blog/how-to-setup-vue-with-typescript/files-ts.png" width="25%" alt="Photo of the files of vue typescript generated"/>

`shims-tsx.d.ts` le permite habilitar el código de mecanografía JSX-Style en esos archivos.

`tsconfig.json` en la raíz del proyecto es donde la configuración de TypeScript, que es la carpeta con archivos ts, los tipos
de archivos para usar con TypeScript, Versión del módulo ES para usar, también especifica los archivos raíz y las opciones de compilación necesarias para compilar el proyecto. [Lea más sobre esto aquí](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## <a href="#setting-up-vuejs" name="setting-up-vuejs">#</a> Setting up Vuejs with TypeScript in an existing project setup

Primero cree el archivo `tsconfig.json` en la raíz de su proyecto y agregue este fragmento de código

```json
{
  "compilerOptions": {
    "lib": ["dom", "es5", "es2015"],
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "sourceMap": true,
    "allowSyntheticDefaultImports": true
  }
}
```

En segundo lugar, debe agregar `ts-loader` a su aplicación, supongo que está usando webpack como paquete:

```bash
yarn add -s --dev ts-loader
```

Ahora vamos a actualizar el archivo `webpack.config.dev.js`, necesitamos agregar la nueva regla antes del vue loader para que funcione otro ts-loader

```javascript 
rules: [
  {
    test: /\.ts$/,
    exclude: /node_modules|vue\/src/,
    loader: "ts-loader",
    options: {
      appendTsSuffixTo: [/\.vue$/]
    }
  },
  ...
```

Necesitas cambiar la extensión del archivo de entrada principal a `.ts`:

```javascript
...
entry: {
  app: './src/app.ts'
},
...
```

Ahora está listo para usar TypeScript dentro de su proyecto, cambie la extensión de cualquier `.js` a` .ts` y dentro de los componentes ahora puede usar TypeScript, agregue `lang =" ts "` en la etiqueta `script` de tu archivo Vue.

```javascript
<script lang="ts">
```

Así que ahora comencemos escribiendo un solo componente de archivo. Ohh! ¡¡¡sí bebé!!!

## <a href="#using-typescript" name="using-typescript">#</a> Usar TypeScript con componentes de un solo archivo
Comencemos definiendo nuestra estructura de componentes de clase vue usando los paquetes `vue-property-decorator` &` vue-class-component` si su proyecto no es nuevo vue-cli agregue estos paquetes por defecto, si selecciona la configuración TypeScript al principio

```javascript
<template>
<div class="page-layout" :class="cssLayout">
  <sidebar/>
  <slot name="content")></>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"
import Sidebar from "../components/Sidebar"
import Truncate from "../filters/Truncate"
import axios from "axios"

@Component({
  name: 'LayoutComponent',
  components: {
    Sidebar
  },
  filters: {
    Truncate
  }
})
export default class LayoutComponent extends Vue {
  @Prop({type: String, default: "light"}) public theme;
  //Data properties are now attributes of the class with types inference
  public loaded: boolean = true;
  public userData: UserDataInterface = {}

  //Computed properties are getters
  get cssLayout(): string {
    return this.theme === "light" ? 'background-color: #fff' : 'background-color: #444';
  }

  // hooks are registered as normal methods
  mounted(): void {
    this.getUserCredentials()
  }
  
  //method
  getUserCredentials(): void{
    const URL = '/api/currentuser';
    axios.get(URL).then((response: AxiosResponse)=>{
      this.userData = response.data.user
    })
    ...
  }

}
</script>
```
Como puede ver, así es como se crea un único componente de archivo con TypeScript, las propiedades de los datos pueden ser atributos de la clase, las propiedades calculadas funcionan como captadores simples [lea más sobre estos captadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get), los métodos de ganchos se escriben en la clase como métodos.

## <a href="#decorator-emit" name="decorator-emit">#</a> Decorador $emit
Aquí un buen ejemplo del decorador `@Emit ()`:

```javascript
import {Component, Vue, Prop, Emit} from "vue-property-decorator"

export default class Sidebar extends Vue {
  @Emit('onClickedLink')// de lo contrario, se utilizará el nombre del método debajo.
  onClick(value: string) {
    return value;
  }
}
```

luego en los componentes principales:

```javascript
<template>
<div class="page-layout" :class="cssLayout">
  <sidebar @onClickedLink="setActiveLink"/>
  ....
  ..
  .

```
## <a href="#decorator-watch" name="decorator-watch">#</a> Decorador watch:{} 
Aquí un buen ejemplo del decorador `@Watch ()`:

```javascript
<script lang="ts">
  import {Component, Vue, Prop, Emit, Watch} from "vue-property-decorator"
  export default class Sidebar extends vue {
    public opened: boolean = false;

    @Watch("opened") // attribute you want to watch
    onSidebarOpen(val: boolean) {
      if (val: boolean, old: boolean) {
        this.userOpenSidebar();
      }
    }
  }
  ...
  ..
  .
```
## <a href="#mixins-vue-class" name="mixins-vue-class" >#</a> Mixins en componentes de clase vue

Ok ahora, hablemos de mixins, tuve dificultades para lidiar con esto cuando comencé a trabajar con Typecript en vuejs. Pero no tiene que ser tan difícil como dirías ... Pero si no lo sabes, es como si estuvieras intentando jugar un juego de adivinanzas.

Veamos cómo podemos superar esto:

Primero, la mezcla solo contiene la etiqueta `<script lang =" ts "> </script>`:

```javascript
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Checkout extends Vue {
  @Prop() public data: object;

  public get productPrice(): number {
    return this.product.price_cents;
  }
}
```

Luego en el component importamos el mixins:

```javascript
<script lang="ts">
  import { Component } from "vue-property-decorator";
  import { mixins } from "vue-class-component"; 
  import CheckoutMixin from "../mixins/Checkout";

@Component({
  name: "CartItem"
})
export default class CartItem extends mixins(CheckoutMixin) {
  //Todos los métodos y atributos estarán disponibles en esta clase ahora
  ...
}
```
Para saber más en profundidad cómo funciona esto, le aconsejo que lea los documentos de TypeScript sobre herencia
[herencia](https://www.typescriptlang.org/docs/handbook/classes.html#inheritance)

## <a href="#important-notes" name="important-notes">#</a>Notas Importantes
tsconfig.json
Contiene opciones de compilador y especifica la ubicación de los archivos raíz.

tslint.json
Opciones y reglas para la alineación mecanografiada, para TSlint.

app.ts
El archivo de entrada para el proyecto.

shims-tsx.d.ts
Permite el uso de archivos .tsx. Lea más sobre esto aquí.

shims-vue.d.ts
Permite importar y usar componentes de un solo archivo .vue.

## <a href="#conclusion" name="conclusion">#</a>Conclusiones
Hemos aprendido a agregar TypeScript a un proyecto existente con webpack. Cómo iniciar un nuevo proyecto con TypeScript utilizando el asistente vue cli. Viste la estructura de un componente de clase vue y sus métodos decoradores.

El punto principal de habilitar el mecanografiado en su aplicación es usar los tipos en sus clases, objetos y funciones para que cuando surja un error le sea más fácil detectar la causa del problema.

Eso es todo por esta parte, si disfrutaste este artículo, no olvides seguirme en Twitter y suscribirte al boletín para recibir actualizaciones semanales de artículos directamente en tu bandeja de entrada.

¡Gracias por leer!