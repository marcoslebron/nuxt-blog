<template lang="pug">
  .side-nav-content
    .side-nav-backdrop(v-if="open")
    .side-nav(v-if="open")
      LangSwitcher
      ul.nav-list
        li.nav-item
          nuxt-link(to="/blog") {{ $t('navItems.blog') }}
</template>
<script lang="js">
import LangSwitcher from '~/components/LangSwitcher'

export default {
  name: "SideNav",
  components:{
    LangSwitcher
  },
  props:{
    isOpen: {
      type: Boolean
    }
  },
  computed:{
    open() {
      return this.$store.state.openSidenav
    }
  }
}
</script>
<style lang="scss">

</style>