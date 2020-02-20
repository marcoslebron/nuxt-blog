<template lang="pug">
  header.header
    .container
      nuxt-link.logo-link(to="/")
        img(src="~/assets/images/logo-ml.svg")
      .drawer-toggle(role="button" @click="open")
        .bar
        .bar
        .bar
      .navigation-items
        LangSwitcher
        ul
          li
            nuxt-link(to="/blog") {{ $t('navItems.blog') }}
</template>
<script>
import LangSwitcher from '~/components/LangSwitcher'
import { mapMutations } from "vuex"

export default {
  name: "TheHeader",
  components:{
    LangSwitcher
  },
  methods:{
    open() {
      return this.$store.commit('toggleSidenav')
    }
  }
}
</script>
<style lang="scss">
.header {
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
  height: 80px;
  display: -webkit-box;
  display: flex;

  .logo-link {
    img{width: 50px;}
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .navigation-items{
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      margin-bottom: 0;
    }
    @media (max-width: $screen-sm){
      display: none;
    }
  }
  .drawer-toggle{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
    width: 35px;
    cursor: pointer;
    @media (min-width: $screen-sm){
      display: none;
    }
    .bar {
      width: 90%;
      height: 2px;
      background-color: #030303;
      margin-bottom: .8rem;
      border-radius: 20px;
    }
  }
}
</style>