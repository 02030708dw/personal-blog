<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: { Icon },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  .self-center(relative);
  color: @lightWords;
  text-align: center;
}
.icon-container {
  font-size: 72px;
}
</style>
