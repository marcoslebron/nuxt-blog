<template lang="pug">
.hero-page
  .container
    .hero-content
      h1 {{ $t('heroHeader')}}
      vue-typed-js(
        :strings="$t('headerAnimateArray')" 
        :loop="true" 
        :loopCount="2" 
        :typeSpeed="80"
        :fadeOutDelay="500")
        h1.typing
      h4 {{ $t('heroSubHeader')}}
      
    .hero-img
      ImageResponsive(:imageURL="`marcos2.jpg`"
        :classes="'cardThumbnail'"
        :width="'300'"
        :height="'324'"
        :alt="'Marcos Lebron'")

</template>
<script>

export default {
  data(){
    return {
      items: [
        'Playing',
        'with',
        'Codepen',
        'is so much',
        'funz!'
      ],
      app: "",
      count: 0,
      index: 0,
    }
  },
}
</script>
<style lang="scss">

.hero-page{
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0 0 20px;
  overflow: hidden;
  background-color: #f7fafc;
  height: 350px;
  &:after {
    position: absolute;
    right: 0;
    bottom: -2px;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 60px;
    content: '';
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTM4MCcgaGVpZ2h0PSc4OCcgdmlld0JveD0nMCAwIDEzODAgODgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTAgODcuNUgxMzgwVjI5Ljg2ODVDMTM4MCAyOS44Njg1IDEwNjcuMDQgLTM1LjY3NzUgNjg2LjU1IDI5Ljg2ODVDMzA2LjA2NCA5NS40MTQ0IDAgMjkuODY4NSAwIDI5Ljg2ODVWODcuNVonIGZpbGw9J3doaXRlJy8+PC9zdmc+Cg==);
    background-repeat: repeat-y;
    background-position: top center;
    background-size: cover;
    @media (min-width: $screen-lg){
      height: 80px;
    }
    @media (min-width: $screen-xlg){
      height: 100px;
    }
  }
  .container{
    display: flex;
    justify-content: space-between;
    .hero-content {
      padding: 60px 0;
      width: 525px;
      h1 {
        font-weight: 600;
        color: #1c2f38;
        margin-bottom: 0;
      }
    }
    .hero-img{
      padding-top: 30px;
      @media (max-width: $screen-sm){
        padding: 60px 0;
      }
      img {
        border-radius: 50%;
        max-width: 200px;
      }
    }
  }
}
</style>