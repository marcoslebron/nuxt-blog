---
name: 'how-to-setup-vue-with-typescript'
trans: 'como-configurar-typescript-en-vuejs'
title: How to use the flexbox
year: 26 Mar 2020
updatedDate: 26 Mar 2020
color: '#edece7'
category: 'vuejs'
cardAlt: 'Article on how to setup typescript in vuejs'
isTextColorDark: true
noMainImage: false
# extraComponent: 'Datatable'
id: 'how-setup-typescript'
description: |
  How you may know already typescript is static typed superset that compiles plain JavaScript, in other words it allow us to use type checking in our code let see the benefits of this bellow.
---

## TypeScript Overview
Typescript is a superset for JavaScript but What does this mean?, well it means that is like piece of enhancement that you add to your projects and use it along with JavaScript you can read more about it [here](https://www.typescriptlang.org/docs/handbook/basic-types.html). You may be asking What benefits or advantages provide the use of typescript? here I list some of then:

- Types are one of the best forms of documentation you can have.
- Code scalability.
- A Community that is supported by Microsoft it selft.
- Type help to code quality in big teams
- Better understanding of the code.
- Easier to test and debugg, It’s better for the compiler to catch errors than to have things fail at runtime.
- Code completion and IntelliSense. Intellisense provides active hints as a code is added.

## Setting up Vuejs with TypeScript in new project setup
Lets begin by open our Terminal, write the following command (just in case you dont have vue CLI in your machine, you can skip it if you do):

“> npm install --global @vue/cli"
after this command finish executing write the following command command
"> vue create [your-app-name]"

Here you will be prompt with step wizard in the command line select the first two options [babel and typescript] mark then with them space bar then hit enter to continue leave all the rest by default, let it finish. Easy right? enter the folder created with the name of your project and run the server

"cd [your-app-name]"

then

"yarn dev"

<image-responsive imageURL="blog/how-to-setup-vue-with-typescript/vue-typescript.png" width="100%" alt="Photo of webpage with vue server up"/>
Now you should get server running in the port localhost:8081

Before we go beyond let me explain you will see some files related TypeScript inside the src folder you will find a `shims-vue.d.ts` which helps your IDE to understand what a file ending in .vue is. 
<image-responsive imageURL="blog/how-to-setup-vue-with-typescript/file-ts.png" width="100%" alt="Photo of the files of vue typescript generated"/>
`shims-tsx.d.ts` allow you to enable JSX-Style typescript code in those files.
`tsconfig.json` in the root of the project where the config of TypeScript is the folder with ts files the types 
of files to use with TypeScript, ES Module Version to use it also specifies the root files and the compiler options required to compile the project. Read more about it [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html rel="noopener).

## Setting up Vuejs with TypeScript in an existing project setup
## Using TypeScript with single file components
## Important Files in Ts projects
## Conclusions