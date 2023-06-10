<template>
  <div class="site-aside-container">
    <Avatar url="https://tucdn.wpon.cn/2023/06/06/3468b4a818a2e.jpg" />
    <h1 class="title">Dk档案</h1>
    <Menu />
    <Contact />
    <p class="footer">Copyright © 2020 - 2023</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
  color: @gray;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
