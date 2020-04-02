<template lang="html">
  <div class="content-table" :class="{openClass: open}" >
    <ul>
      <li><p> Table of Content</p></li>
      <li v-for="(content, i) in contentArray" :key="i"><a :href="content.id"> {{content.name}} </a> </li>
      <li class="toggleContent" @click="open = !open">{{showText}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    contentArray:{
      type: Array
    },
    imageURL: {
      type: String
    },
    alt: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    classes: {
      type: String
    },
    alt: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: true
    }
  },
  computed:{
    showText() {
      return this.open ? 'Close' : 'Open'
    }
  },
  mounted(){
    window.addEventListener("resize", this.handleResize)
    this.handleResize()
  },
  destroyed(){
    window.removeEventListener("resize", this.handleResize)
  },
  methods:{
    handleResize() {
      if(window.innerWidth < 575){
        this.open = false
      }
    }
  }
}
</script>

<style scoped lang="scss">

.content-table {

  ul {
    position: fixed;
    left: -213px;
    font-size: 12px;
    top: 87px;
    max-width: 220px;
    border: 1px solid #deecff;
    background-color: white;
    padding: 10px;
    list-style: none;
    transition: left 0.3s;
    li {
      padding: 5px 0;
      border-bottom: 1px dashed #eee;
      margin-bottom: 0;
      &:last-child {
        border-bottom: 0;
      }
      &.toggleContent{
        position: absolute;
        right: -40px;
        top: 0px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
      p {
        margin-bottom: 5px;
        font-weight: 600;
      }
    }
    @media (max-width: $screen-sm){
      left: -210px;
    }
  }
  &.openClass {
    ul {
      left: 3px;
      li {
        &.toggleContent{
          position: absolute;
          right: -40px;
        }
      }
    }
  }
  .toggleContent {
    color: #fff;
    background: #0099e8;
    width: 50px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #dfedff;
  }
  &--rounded {
    border-radius: 100%;
  }
}

</style>
