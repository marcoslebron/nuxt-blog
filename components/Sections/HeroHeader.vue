<template lang="pug">
.hero-page
  .container
    .hero-content
      h1 {{ $t('heroHeader')}}
      h4 {{ $t('heroSubHeader')}}
    .here-img
      ImageResponsive(:imageURL="`marcos-lebron.png`"
        :classes="'cardThumbnail'"
        :width="'300'"
        :height="'324'"
        :alt="'Marcos Lebron'")

</template>
<script>
export default {
  
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
    z-index: 9;
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
      width: 500px;
      h1 {
        font-weight: 600;
        color: #1c2f38;
      }
    }
  }
}
</style>