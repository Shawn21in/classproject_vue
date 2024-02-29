<template>
  <div data-scroll-watch="" class="fade_in title">
    <div class="breadcrumbs">
      <a href="/">首頁</a> /
      <a @click="gettype_layer1Product()">{{ type_layer1_name }}</a> /
      <span>{{ product.title }}</span>
    </div>
  </div>
  <div id="product_detail">
    <div class="main_info">
      <div class="main_pic">
        <div class="m_pic">
          <img
            id="zoom_03"
            :src="url + 'images/product/' + img"
            :data-zoom-image="url + 'images/product/' + img"
          />
        </div>
        <div id="thumb_pic">
          <ul id="gallery_01">
            <li v-for="item in photo" :key="item.id">
              <a
                href="#"
                :data-image="url + 'images/product/' + item.photo"
                :data-zoom-image="url + 'images/product/' + item.photo"
                ><img id="zoom_03" :src="url + 'images/product/' + item.photo"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right_info">
        <h3 class="product_tit">{{ product.title }}</h3>
        <p class="subtitle">
          {{ product.sub_title }}
        </p>
        <table class="prod_table" v-if="spec != ''">
          <tr v-for="item in spec" :key="item.id">
            <th></th>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
          </tr>
        </table>
        <div class="shop_link" v-if="shop != '' && shop.length > 0">
          <h6>買好茶</h6>
          <!-- 
            :href = "item.url"
          :href = `${item.url}` 
          若url太假會無法跳轉,需有https://
          -->
          <a
            :href="`${item.url}`"
            target="blank"
            v-for="item in shop"
            :key="item.id"
          >
            <p>{{ item.shopName }}</p></a
          >
        </div>
      </div>
      <div class="mobile_slider">
        <!-- 小尺寸用-->
        <h3 class="product_tit">{{ product.title }}</h3>
        <p class="subtitle">
          {{ product.sub_title }}
        </p>
        <ul class="bx_mobile" v-if="photo != '' && photo.length > 0">
          <li v-for="item in photo" :key="item.id">
            <img :src="url + 'images/product/' + item.photo" />
          </li>
        </ul>
        <table class="prod_table" v-if="spec != ''">
          <tr v-for="item in spec" :key="item.id">
            <th></th>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
          </tr>
        </table>
        <div class="shop_link" v-if="shop != '' && shop.length > 0">
          <h6>買好茶</h6>
          <!-- 
            :href = "item.url"
          :href = `${item.url}` 
          若url太假會無法跳轉,需有https://
          -->
          <a
            :href="`${item.url}`"
            target="blank"
            v-for="item in shop"
            :key="item.id"
          >
            <p>{{ item.shopName }}</p></a
          >
        </div>
      </div>
    </div>
  </div>
  <h2 class="main_title">關於好茶</h2>
  <div class="product_int">
    <div class="int_img"><img src="/img/product_int.jpg" /></div>
    <div class="int_text">
      <p>
        xx身兼茶農與茶商，主打海外市場。產品含各式烏龍茶紅茶、綠茶、不同海拔茶區，在xx都可以找到你想要的好茶！
        與經驗老道的茶師傅合作、所選茶葉品質穩定。茶葉均通過TTB台茶檢驗，無農藥殘留。全世界最好的烏龍茶，大禹嶺茶自產自銷，絕對無假貨之疑慮。熟知市場行情，第一手茶葉進貨，進貨價格較低。
      </p>
    </div>
    <div class="int_video">
      <div class="video-container">
        <iframe
          allowfullscreen=""
          frameborder="0"
          src="https://www.youtube.com/embed/cdo7xnT5g1U"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import all from "@/service/all";
export default {
  data() {
    return {
      //由上一頁取得的id
      id: this.$route.params.id,
      type_layer1: this.$route.params.type_layer1,
      photo: [],
      spec: [],
      product: "",
      shop: [],
      type_layer1_name: "",
      url: this.$img,
      img: "",
    };
  },
  mounted() {
    this.getProduct();
    this.getPhoto();
    this.getSpec();
    this.getShop();
    this.getType_layer1();
  },
  methods: {
    async getProduct() {
      const res = await axios.get(this.$api + all.getProduct + "/" + this.id);
      if (res.status == 200) {
        this.product = res.data;
      }
    },
    async getPhoto() {
      const res = await axios.get(this.$api + all.getPhoto + "/" + this.id);
      if (res.status == 200) {
        this.photo = res.data;
        if (this.photo != "" && this.photo.length > 0) {
          this.img = this.photo[0].photo;
        }
      }
    },
    async getSpec() {
      const res = await axios.get(this.$api + all.getSpec + "/" + this.id);
      if (res.status == 200) {
        this.spec = res.data;
      }
    },
    async getShop() {
      const res = await axios.get(this.$api + all.getShop + "/" + this.id);
      if (res.status == 200) {
        this.shop = res.data;
      }
    },
    async getType_layer1() {
      const res = await axios.get(
        this.$api + all.getType_layer1 + "/" + this.type_layer1
      );
      if (res.status == 200) {
        this.type_layer1_name = res.data.type_layer1_name;
      }
    },

    gettype_layer1Product() {
      this.$route.push({
        name: "type_layer1",
        params: { type_layer1: this.type_layer1 },
      });
    },
  },
};
</script>
