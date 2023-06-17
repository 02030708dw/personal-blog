<template>
  <div class="image-loader-container">
    <img
      v-if="!everythingDone"
      class="placeholder"
      :src="placeholder"
      loading="lazy"
    />
    <img
      loading="lazy"
      @load="handleLoad"
      :src="src"
      :style="{ opacity: hasOriginSrc, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      default: 600,
    },
  },
  data() {
    return {
      originLoaded: false,
      everythingDone: false,
    };
  },
  computed: {
    hasOriginSrc() {
      return this.originLoaded ? 1 : 0;
    },
  },

  methods: {
    handleLoad() {
      this.originLoaded = true;
      console.log("原图加载完成");
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
}
.placeholder {
  filter: blur(2vw);
}
</style>
