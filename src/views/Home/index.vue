<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
    <button @click="handleClick">点我</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        content: "hello world",
        type: "error",
        container: this.$refs.container,
        callback: function (res) {
          console.log("完成!!!");
        },
      });
    },
  },
};
</script>

<style scoped>
.home-container {
  background: lightblue;
  width: 300px;
  height: 500px;
  margin: 50px auto;
}
</style>
