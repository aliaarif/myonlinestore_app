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
      <v-list-item-group v-model="$parent">
        <v-list-item
          v-for="(brand, i) in brands"
          :key="i"
          active-class="border"
          v-slot="{ active }"
          :ripple="false"
          @click="setBrandId(brand.id)"
        >
          <v-list-item-icon>
            <div :class="active ? 'a' : ''"></div>
            <v-avatar color="transparent" size="30" tile>
              <span
                class="white--text text-small ml-n2"
                :color="active ? '#F34F64' : '#778290'"
                >{{ brand.title }}</span
              >
            </v-avatar>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Drawer",
  props: {
    selectedBrand: Number,
  },
  data: () => ({
    auth: true,
    drawer: null,
    //brandsCountFrom: 0,
    brands: [],
  }),
  mounted() {
    this.getBrands();
  },
  methods: {
    async setBrandId(brandId: any) {
      localStorage.setItem("brandId", brandId);
    },
    async getBrands() {
      await axios.get("brands").then((response) => {
        this.brands = response.data.data;
      });
    },
  },
  computed: {},
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
