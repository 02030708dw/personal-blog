<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style>
.test-container {
  width: 300px;
  height: 500px;
  background: linen;
  border: 2px solid;
  padding: 100px 0;
}
</style>
