<template>
  <component :is="getlayoutABC">
    <router-view />
  </component>
</template>

<script>
import Layout from "./views/Layout.vue";

export default {
  components: {
    Layout,
  },
  computed: {
    getlayoutABC() {
      return this.$route.meta.layout;
    },
  },
};
</script>
