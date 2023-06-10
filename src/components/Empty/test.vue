<template>
  <div class="test-continer">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
.test-continer {
  width: 400px;
  height: 300px;
  border: 1px solid red;
  margin: 0 auto;
}
</style>
