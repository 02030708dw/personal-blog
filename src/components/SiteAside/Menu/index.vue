<template>
  <nav class="menu-container">
    <router-link
      :exact="item.exact"
      v-for="(item, i) in items"
      :key="i"
      :to="{ name: item.name }"
      active-class="active"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          icon: "home",
          title: "首页",
          name: "Home",
          exact: true,
        },
        {
          icon: "blog",
          title: "文章",
          name: "Blog",
          exact: false,
        },
        {
          icon: "about",
          title: "关于我",
          name: "About",
          exact: true,
        },
        {
          icon: "code",
          title: "项目&效果",
          name: "Project",
          exact: true,
        },
        {
          icon: "chat",
          title: "留言板",
          name: "Message",
          exact: false,
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      var path = item.path.toLowerCase();
      var cuPathname = location.pathname.toLowerCase();
      if (item.startWith) {
        return cuPathname.startsWith(path);
      } else {
        return cuPathname === path;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;

  a {
    &.active {
      background-color: darken(@words, 5%);
    }
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;

    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
