<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <router-view />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
export default {
  name: "App",
  components: {
    SiteAside,
    Layout,
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
#app {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
