<template>
  <v-navigation-drawer
    app
    dark
    v-model="drawer"
    class="primary darken-4"
    v-if="auth"
    mini-variant
    mini-variant-width="50"
  >
    <span class="d-block text-center logo" color="#f34f64"> M </span>
    <v-list flat class="mt-n4">
      <v-list-item-group v-model="drawerItemsCount">
        <v-list-item
          v-for="(item, i) in drawerItems"
          :key="i"
          active-class="border"
          v-slot="{ active }"
          :ripple="false"
        >
          <v-list-item-icon>
            <div :class="active ? 'a' : ''"></div>
            <v-icon v-text="item.icon" :color="active ? '#F34F64' : '#778290'">
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Drawer",
  data: () => ({
    drawer: true,
    drawerItemsCount: 0,
    drawerItems: [
      // { icon: "mdi-tag-outline" },
      // { icon: "mdi-laptop" },
      // { icon: "mdi-shopping-outline" },
      // { icon: "mdi-wallet-travel" },
      // { icon: "mdi-apps" },
      // { icon: "mdi-text-box-multiple-outline" },
      { icon: "mdi-apps" },
      { icon: "mdi-apps" },
      { icon: "mdi-apps" },
    ],
    auth: true,
  }),
});
</script>
<style>
.a {
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translate(-50%, -50%);
  height: 12px;
  width: 12px;
  border-radius: 0px 150px 150px 0px;
  background-color: #f34f64;
}
.logo {
  font-size: 35px;
  font-weight: bold;
  color: #f34f64;
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
