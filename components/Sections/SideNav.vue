<template lang="pug">
  .side-nav-content
    .side-nav-backdrop(v-if="open" @click="toggleSidenav")
    transition(name="slide-left")
      .side-nav(v-if="open")
        LangSwitcher
        ul.nav-list
          li.nav-item
            nuxt-link(:to="localePath('blog')") {{ $t('navItems.blog') }}
          li
            nuxt-link(:to="localePath('about')") {{ $t('navItems.about')}}
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
  },
  methods:{
    toggleSidenav() {
      return this.$store.commit('toggleSidenav')
    }
  }
}
</script>
<style lang="scss">
.side-nav-content{
  height: 100%;
  width: 100%;

  .side-nav-backdrop {
    position: fixed;
    background-color: #030303;
    top: 0;
    opacity: 0.4;
    width: 100%;
    height: 100%;
  }
  .side-nav {
    position: fixed;
    background-color: #08a8f2;
    top: 0;
    width: 220px;
    height: 100%;
    a{
      color: white;
    }
  }
}
</style>