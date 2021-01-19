<template lang="pug">
  header.header(:class="{ 'navbar--hidden': !showNavbar }")
    .container
      nuxt-link.logo-link(to="/")
        img(src="~assets/images/logo-ml.svg" alt="Image that shows the logo of the website www.marcoslebron.com")
      .drawer-toggle(role="button" @click="open")
        .bar
        .bar
        .bar
      .navigation-items
        ul
          li
            nuxt-link(:to="localePath('blog')") {{ $t('navItems.blog') }}
          li
            nuxt-link(:to="localePath('about')") {{ $t('navItems.about')}}
        LangSwitcher(v-if="showLangSwich")
</template>
<script>
import LangSwitcher from '~/components/LangSwitcher'
import { mapMutations } from "vuex"

const OFFSET = 80

export default {
  name: "TheHeader",
  components:{
    LangSwitcher
  },
  data(){
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  computed:{
    showLangSwich(){
      return this.$route.path === '/' || this.$route.path === '/es'
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods:{
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
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
  position: fixed;
  width: 100%;
  z-index: 1;
  background: white;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;

  &.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
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
      display: flex;
      li {
        padding: 0 5px;
        a {
          font-weight: 600;
          color: #1d3039;
          &:hover{
            color: #09a7f2;
          }
        }
      }
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