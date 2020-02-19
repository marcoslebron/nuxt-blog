<template lang="pug">
  .side-nav-content
    .side-nav-backdrop
    .side-nav
      LangSwitcher
      

</template>
<script lang="js">
import LangSwitcher from '~/components/LangSwitcher'

export default {
  name: "SideNav",
  components:{
    LangSwitcher
  }
  props:{
    isOpen: {
      type: Boolean
    }
  }
}
</script>
<style lang="scss">

</style>