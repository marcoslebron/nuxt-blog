<template lang="pug">
.page-index
  .container.small
    client-only
      DynamicMarkdown(:render-func="renderFunc" :static-render-funcs="staticRenderFuncs")
</template>
<script>
  import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"

export default {
  async asyncData({app}){
    const fileContent = await import(`~/contents/${app.i18n.locale}/about/marcos-lebron.md`)
    const attr = fileContent.attributes
    return {
      title: attr.title,
      renderFunc: `(${fileContent.vue.render})`,
      staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
    }
  },

  components:{
    DynamicMarkdown
  }
}
</script>