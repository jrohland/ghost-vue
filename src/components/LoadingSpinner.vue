<template>
  <vue-loading-spinner :size="sizeStr" />
</template>

<script>
import { Circle5 } from 'vue-loading-spinner'

export default {
  components: {
    'vue-loading-spinner': Circle5
  },

  props: {
    size: {
      type: Number,
      default: 40
    }
  },

  computed: {
    sizeStr: {
      get () {
        return this.size + 'px'
      }
    }
  }
}
</script>
