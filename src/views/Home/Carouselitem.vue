<template>
  <div class="container">
    <div class="carousel-img">
      <ImageLoader :src="catousel.bigImg" :placeholder="catousel.midImg" />
    </div>
    <div class="title">{{ catousel.title }}</div>
    <div class="desc">{{ catousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["catousel"],
  components: {
    ImageLoader,
  },
};
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.container {
  // background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
}
.carousel-img {
  width: 100%;
  height: 100%;
}
.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  left: 30px;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}
</style>
