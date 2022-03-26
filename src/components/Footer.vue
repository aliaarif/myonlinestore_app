<template>
  <v-footer>
    <v-app-bar app color="primary darken-4" dense dark elevation="4">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="auth"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase white--text">
        <!-- <span class="font-weight-light orange--text">My </span> -->
        <v-btn text to="/">My Online Store</v-btn>
        <!-- <span class="font-weight-bold green--text"> Store</span> -->
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/cart">
        <v-icon left>shopping_cart-o</v-icon>
        <span>Cart ({{ cartTotalLength }})</span>
      </v-btn>

      <!-- <router-link to="/feed" tag="v-btn text">
        <v-btn color="black" flat value="auth">
          <span>Lofin</span>
        </v-btn>
      </router-link> -->

      <v-btn text to="/auth" v-if="!auth">
        <span>Sign In </span>
        <v-icon right>lock</v-icon>
      </v-btn>

      <v-btn text v-else>
        <span>Sign Out </span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>

      <!-- 
    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          Hi Username
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-icon right>exit_to_app</v-icon> SIGN OUT</v-list-item-title
          >
        </v-list-item>
      </v-list> 
    </v-menu>
    -->
    </v-app-bar>
    <!-- <v-navigation-drawer
      app
      dark
      v-model="drawer"
      class="primary darken-4"
      v-if="auth"
      mini-variant
      mini-variant-width="50"
    >
      <v-avatar class="d-block text-center mx-auto mt-5 border_img" size="40">
        <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
      </v-avatar>
      <v-list flat class="mt-5">
        <v-list-group v-model="drawerItemsCount">
          <v-list-item
            v-for="(item, i) in drawerItems"
            :key="i"
            active-class="border"
            v-slot="{ active }"
            :ripple="false"
          >
            <v-list-item-icon>
              <div :class="active ? 'a' : ''"></div>
              <v-icon
                v-text="item.icon"
                :color="active ? '#F34F64' : '#778290'"
              >
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer> -->
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  props: {
    cartTotalLength: Number,
  },

  data: () => ({
    drawer: true,
    drawerItemsCount: 10,
    drawerItems: [
      { icon: "mdi-laptop" },
      { icon: "mdi-tag-outline" },
      { icon: "mdi-shopping-outline" },
      { icon: "mdi-wallet-travel" },
      { icon: "mdi-apps" },
      { icon: "mdi-text-box-multiple-outline" },
    ],
    auth: true,
  }),
  // computed: {
  //   cartTotalLength() {
  //     return this.$parent.cartTotalLength;
  //   },
  // },
});
</script>
<style>
.a {
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translate(-50%, -50%);
  height: 18px;
  width: 12px;
  border-radius: 0px 150px 150px 0px;
  background-color: #f34f64;
}
.border_img {
  border: 1px solid #778290;
}
.border {
  text-decoration: none;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.theme--light .v-list-item--active .v-list-item__subtitle,
.theme--light .v-list-item .v-list-item__action-text {
  color: white !important;
}
</style>
