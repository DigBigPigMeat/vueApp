<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="item_icon"></slot></div>
    <div v-else><slot name="item_icon_active"></slot></div>
    <div :style="activeStyle"><slot name="item_text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    link:String,
    activeColor:{
      String,
      default: '#ff5777'
    }
  },
  computed:{
    isActive(){
      //等于-1就是没找着，这个是找着了返回1
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
.tab_bar_item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab_bar_item>img{
  margin-top: 3px;
  vertical-align: middle;
}
</style>
