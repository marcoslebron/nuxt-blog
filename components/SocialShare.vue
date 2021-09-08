<template lang="pug">
.share-wrapper
  SocialSharing(
  :url='url',
  :title='title',
  :description='description',
  :quote='description'
  twitter-user='lebronmarcos',
  v-cloak='',
  inline-template='')
    
    .social
      .share-text Share This Post
      network(network='facebook')
        img(src='~/assets/images/fb.svg')
      network(network='twitter')
        img(src='~/assets/images/tw.svg')
</template>
<script lang="js">
import SocialSharing from "./SocialSharing";

export default  {
  name: "Share",
  props:{
    title: {
      type: String
    },
    url:{
      type: String
    },
    description: {
      type: String
    }
  },
  components: { SocialSharing }
}
</script>
<style lang="scss">
.share-wrapper {
  span {
    cursor: pointer;
  }
  .social {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    border-top: 1px solid #deecff;
    padding: 10px 0 0;
    border-bottom: 1px solid #deecff;
    img {
      width: 20px;
      height: 20px;
      margin: 0 10px;
    }
  }
}
</style>
