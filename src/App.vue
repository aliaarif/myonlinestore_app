<template>
  <v-app>
    <navbar
      dense
      v-bind:cartTotalLength="cartTotalLength"
      v-bind:filters="$store.state.filters"
    />
    <drawer dense />
    <v-main>
      <router-view v-slot="{ Component }" v-bind:filters="$store.state.filters">
        <transition
          enter-acitve-class="animate__animated animate__fadeInLeft"
          leave-acitve-class="animate__animated animate__fadeOutLeft"
          mode="out-in"
        >
          <v-container fluid>
            <component :is="Component" />
          </v-container>
        </transition>
      </router-view>
    </v-main>
    <!-- <footer v-bind:cartTotalLength="cartTotalLength" /> -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/Navbar.vue";
import Drawer from "./components/Drawer.vue";
import axios from "axios";

export default Vue.extend({
  name: "App",

  components: {
    Navbar,
    Drawer,
  },

  data: () => ({
    showMobileMenu: false,
    cart: { items: [] },
  }),

  beforeCreate() {
    this.$store.commit("initializeStore");
    const token = this.$store.state.token;

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
    // this.$store.state.brandId;
    // this.$store.state.categoryId;
    // this.$store.state.subCategoryId;
  },
  // beforeMount() {
  //   this.selectedCategory = this.$store.state.categoryId
  // //     ? this.$store.state.categoryId - 1
  //     : 0;
  // },
  mounted() {
    this.cart = this.$store.state.cart;
    // console.log(JSON.stringify(this.$store.state.filters));
  },
  computed: {
    cartTotalLength(): number {
      let totalLength = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i]["quantity"];
      }
      return totalLength;
    },
  },
});
</script>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
