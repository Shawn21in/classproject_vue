<template>
  <Header />

  <router-view />

  <Footer />
</template>
<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";

export default {
  name: "layout",
  components: {
    Header,
    Footer,
  },
};
</script>
