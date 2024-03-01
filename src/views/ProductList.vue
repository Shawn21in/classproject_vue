<template>
  <div data-scroll-watch="" class="fade_in title">
    <div class="breadcrumbs"><a href="/">首頁</a> / <span>好茶</span></div>
    <h1 class="top_title">Product</h1>
    <div class="top_banner">
      <img src="/img/banner_product.jpg" alt="News" />
    </div>
  </div>
  <div class="productlist">
    <div
      class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
      v-for="item in list"
      :key="item.id"
    >
      <div class="hover ehover13">
        <a href="#" @click="detail(item.type_layer1, item.id)">
          <img
            :src="url + 'images/product/' + item.photo"
            class="img-responsive" />
          <div class="overlay">
            <h2>{{ item.sub_title }}</h2>
            <p>more <i aria-hidden="true" class="fa fa-leaf"></i></p></div
        ></a>
      </div>
      <p class="product_tit">{{ item.title }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import all from "@/service/all";

export default {
  name: "productList",
  data() {
    return {
      type_layer1: this.$route.params.type_layer1,
      list: [],
      url: this.$img,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await axios.get(
        this.$api + all.getList + "/" + this.type_layer1
      );
      if (res.status == 200) {
        this.list = res.data;
        console.log(this.list);
      }
    },
    detail(type_layer1, id) {
      this.$router.push({
        name: "productDetail",
        params: { type_layer1, id },
        //params: { type_layer1: type_layer1, id: id },也可以這樣
      });
    },
  },
};
</script>
