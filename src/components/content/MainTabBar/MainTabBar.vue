<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="item_icon" src="../../../assets/img/tabbar/home.svg" alt="">
      <img slot="item_icon_active" src="../../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item_text">Home</div>
    </tab-bar-item>
    <tab-bar-item link="/sort">
      <img slot="item_icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item_icon_active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item_text">Sort</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="item_icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item_icon_active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item_text">Cart</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="item_icon" src="../../../assets/img/tabbar/profile.svg" alt="">
      <img slot="item_icon_active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item_text">Profile</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
