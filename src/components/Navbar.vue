<template>
  <v-app-bar app dark color="primary darken-4" dense flat elevation="4">
    <!-- <v-app-bar-nav-icon
      @click="drawer = !drawer"
      v-if="auth"
    ></v-app-bar-nav-icon> -->
    <v-tabs color="#F34F64">
      <!-- <v-btn text > My Online Store </v-btn> -->
      <v-tabs-slider
        color="#F34F64"
        v-model="categoriesCountFrom1"
      ></v-tabs-slider>

      <v-tab
        v-for="(category, i) in categories"
        v-bind:key="category.id"
        v-bind:index="i"
        @click="setCategoryId(category.id)"
      >
        {{ category.title }}
      </v-tab>
      <!--
        v-slot="category.id === $store.state.categoryId ? active : ''"
        :active="category.id === $store.state.categoryId ? 'active' : ''"
      -->
    </v-tabs>
    <v-spacer></v-spacer>
    <v-divider vertical inset class="mr-4"></v-divider>
    <!-- <v-text-field
      label="Search"
      prepend-inner-icon="mdi-magnify"
      dense
      class="mt-10"
    ></v-text-field> -->
    <v-btn text small class="withoutuppercase grey--text">
      Hi, Aarif Ali Chauhan {{ cartTotalLength }}
      <v-icon small>mdi-chevron-down</v-icon>
    </v-btn>
    <!-- <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="auth"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase white--text">
        <v-btn text to="/">My Online Store</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/cart">
        <v-icon left>shopping_cart-o</v-icon>
        <span>Cart ({{ cartTotalLength }})</span>
      </v-btn>

      <v-btn text to="/auth" v-if="!auth">
        <span>Sign In </span>
        <v-icon right>lock</v-icon>
      </v-btn>

      <v-btn text v-else>
        <span>Sign Out </span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn> -->
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Navbar",
  props: {
    cartTotalLength: Number,
    categoriesCountFrom1: String,
  },

  data: () => ({
    drawer: true,
    auth: true,
    // categoriesCountFrom: localStorage.getItem("categoryId") ?? 0,
    categories: [],
  }),
  mounted() {
    this.getCategories();
    document.title = "My Online Store";
  },
  methods: {
    async setCategoryId(categoryId: any) {
      localStorage.setItem("categoryId", categoryId);
    },
    async getCategories() {
      await axios.get("category").then((response) => {
        this.categories = response.data.data;
      });
    },
  },
});
</script>
<style>
.v-tabs-slider {
  position: absolute;
  top: 30%;
  left: -50%;
  transform: translate(-50%, -50%);
  height: 15px !important;
  width: 20px !important;
  border-radius: 150px 150px 0px 0px;
  background-color: #f34f64;
}
.v-tab .withoutupercase {
  text-transform: none !important;
}
.v-tabs {
  width: 30% !important;
}
.v-btn:not(.v-btn--round) .v-size--small {
  min-width: 10px !important;
  padding: 0 5px !important;
}
.theme--dark .v-text-field > .v-input__control > .v-input__slot::before {
  border-color: #323b50 !important;
}
</style>
