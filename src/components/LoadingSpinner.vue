<template>
  <div
    :style="styles"
    class="spinner spinner--circle-5"
  />
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 40
    }
  },
  computed: {
    styles () {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .spinner {
    transform: translate3d(0, 0, 0);
    position: relative;
    background: rgba(25, 165, 152, 0.5);
    border-radius: 50%;
    overflow: hidden;
  }
  .spinner:before, .spinner:after {
    content: '';
    position: absolute;
    top: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .spinner:before {
    animation: circle-5-spinner 3s infinite;
    transform-origin: 0 50%;
    left: 0;
    background: #c7efcf;
  }
  .spinner:after {
    animation: circle-5-spinner 3s 0.2s reverse infinite;
    transform-origin: 100% 50%;
    right: 0;
    background: #eef5db;
  }
  @keyframes circle-5-spinner {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
