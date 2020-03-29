<template lang="html">
  <div class="content-table">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
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
  }
}
</script>

<style scoped lang="scss">

.content-table {
  border: 1px solid #888;

  &--rounded {
    border-radius: 100%;
  }
}

</style>
