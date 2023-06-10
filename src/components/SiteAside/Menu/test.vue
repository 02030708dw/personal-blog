<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
export default {
  components: {
    Menu,
  },
};
</script>

<style>
.test-container {
  width: 400px;
  height: 500px;
  outline: 1px solid;
  background: #333;
  padding: 30px 0;
}
</style>
