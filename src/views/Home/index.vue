<template>
  <div class="home-container" ref="container">
    <ul class="carosel-container" :style="{ marginTop }">
      <li v-for="item in banners" :key="item.id">
        <Carouselitem />
      </li>
    </ul>
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in banners"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import Carouselitem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
export default {
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      banners: [],
      index: 1, //当前显示的是第几张轮播图
      containerHeight: 0, //轮播图容器高度
    };
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: @dark;
  overflow: hidden;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  .icon {
    .self-center();
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    transform: translateX(-50%);
    @gap: 25px;
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }

    @keyframes jump-up {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-50%);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translateY(-50%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      background: @words;

      &.active {
        background: #fff;
      }
    }
  }
}
.carosel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;

  li {
    width: 100%;
    height: 100%;
  }
}
</style>
