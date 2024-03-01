<template>
  <nav class="navbar navbar-default bootsnav">
    <!-- Start Top Search-->
    <div class="top-search">
      <div class="container">
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-search"></i></span>
          <input
            type="text"
            placeholder="Search Products"
            class="form-control"
          /><span class="input-group-addon close-search"
            ><i class="fa fa-times"></i
          ></span>
        </div>
      </div>
    </div>
    <!-- End Top Search-->
    <div class="container">
      <!-- Start Atribute Navigation-->
      <div class="attr-nav lang_bar">
        <ul>
          <li class="search">
            <a href="#"><i class="fa fa-search"></i></a>
          </li>
        </ul>
      </div>
      <!-- End Atribute Navigation-->
      <!-- Start Header Navigation-->
      <div class="navbar-header">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbar-menu"
          class="navbar-toggle"
        >
          <i class="fa fa-bars"></i></button
        ><a href="index.html" class="navbar-brand"
          ><img src="commons/header/img/brand/logo.svg" alt="" class="logo"
        /></a>
      </div>
      <!-- End Header Navigation-->
      <!-- Collect the nav links, forms, and other content for toggling-->
      <div id="navbar-menu" class="collapse navbar-collapse">
        <ul
          data-in="fadeInDown"
          data-out="fadeOutUp"
          class="nav navbar-nav navbar-right"
        >
          <li>
            <a href="/about"
              ><span class="nav_img">
                <img src="/img/icon/icon_about.svg" alt=""
              /></span>
              <p class="nav_p">關於</p></a
            >
          </li>
          <li>
            <a href="/news"
              ><span class="nav_img">
                <img src="/img/icon/news_icon.svg" alt=""
              /></span>
              <p class="nav_p">最新消息</p></a
            >
          </li>
          <li class="dropdown">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle"
              ><span class="nav_img">
                <img src="/img/icon/icon_product.svg" alt=""
              /></span>
              <p class="nav_p">好茶</p></a
            >
            <ul class="dropdown-menu">
              <li v-for="item in type_layer1" :key="item.id">
                <a href="#" @click="list(item.id)">{{
                  item.type_layer1_name
                }}</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/knowl"
              ><span class="nav_img">
                <img src="/img/icon/icon_knowl.svg" alt=""
              /></span>
              <p class="nav_p">品茶知識</p></a
            >
          </li>
          <li>
            <a href="/contact"
              ><span class="nav_img">
                <img src="/img/icon/icon_contact.svg" alt=""
              /></span>
              <p class="nav_p">聯絡我們</p></a
            >
          </li>
        </ul>
        <ul class="lang_bar">
          <li class="lang"><a href="#">中文/</a></li>
          <li class="lang"><a href="#">En/</a></li>
          <li class="lang"><a href="#">日本語</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse-->
    </div>
  </nav>
</template>
<script>
import axios from "axios";
import all from "@/service/all";

export default {
  name: "header",
  data() {
    return {
      type_layer1: [],
    };
  },
  mounted() {
    this.getFrontType_layer1();
  },
  methods: {
    async getFrontType_layer1() {
      const res = await axios.get(this.$api + all.getFrontType_layer1);
      if (res.status == 200) {
        this.type_layer1 = res.data;
        //  window.sessionStorage.setItem("type_layer1",JSON.stringify(res.data));
      }
    },
    list(type_layer1) {
      this.$router.push({
        name: "productList",
        params: { type_layer1: type_layer1 },
      });
    },
  },
};
</script>
