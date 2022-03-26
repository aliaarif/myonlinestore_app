<template>
  <v-app
    dense
    v-bind:style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <v-container fluid>
      <v-app-bar dense dark color="transparent" flat>
        <v-tabs dense color="#F34F64" v-model="tab">
          <v-tabs-slider color="#F34F64"></v-tabs-slider>
          <v-tab class="withoutuppercase"> Parasut </v-tab>
          <v-tab class="withoutuppercase"> Parka </v-tab>
          <v-tab class="withoutuppercase"> Steve </v-tab>
          <v-tab class="withoutuppercase"> Dennis </v-tab>
        </v-tabs>
      </v-app-bar>
      <v-card tile color="transparent" class="my-2 card_global" left>
        <v-row>
          <v-col cols="12" sm="8">
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card flat class="card_item pa-2" color="transparent">
                  <v-row>
                    <v-col
                      color="transparent"
                      cols="12"
                      md="3"
                      sm="2"
                      v-for="(product, i) in latestProducts"
                      v-bind:key="product.id"
                      v-bind:index="i"
                    >
                      <div>
                        <ProductBox
                          v-bind:product="product"
                          v-bind:key="product.id"
                        />
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>

              <v-tab-item>
                <v-card flat class="card_item pa-2" color="transparent">
                  <v-row>
                    <v-col
                      color="transparent"
                      cols="12"
                      md="3"
                      sm="2"
                      v-for="(product, i) in latestProducts"
                      v-bind:key="product.id"
                      v-bind:index="i"
                    >
                      <div>
                        <ProductBox
                          v-bind:product="product"
                          v-bind:key="product.id"
                        />
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>

              <v-tab-item>
                <v-card flat class="card_item pa-2" color="transparent">
                  <v-row>
                    <v-col
                      color="transparent"
                      cols="12"
                      md="3"
                      sm="2"
                      v-for="(product, i) in latestProducts"
                      v-bind:key="product.id"
                      v-bind:index="i"
                    >
                      <div>
                        <ProductBox
                          v-bind:product="product"
                          v-bind:key="product.id"
                        />
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>

              <v-tab-item>
                <v-card flat class="card_item pa-2" color="transparent">
                  <v-row>
                    <v-col
                      color="transparent"
                      cols="12"
                      md="3"
                      sm="2"
                      v-for="(product, i) in latestProducts"
                      v-bind:key="product.id"
                      v-bind:index="i"
                    >
                      <div>
                        <ProductBox
                          v-bind:product="product"
                          v-bind:key="product.id"
                        />
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
          <v-col cols="12" sm="4">
            <Payment />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";
import axios from "axios";
import ProductBox from "../components/ProductBox.vue";
import Payment from "../components/Payment.vue";

export default Vue.extend({
  name: "Home",

  components: {
    ProductBox,
    Payment,
  },
  data: () => ({
    tab: null,
    latestProducts: [],
  }),
  mounted() {
    this.getLatestProducts();
    document.title = "My Online Store";
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit("setIsLoading", true);
      await axios
        .get("products")
        .then((response) => {
          this.latestProducts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    },
  },
});
</script>

<style>
.v-tabs-slider {
  position: absolute;
  top: 30%;
  left: 50%;
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
  width: 50% !important;
}
.container {
  padding: 0px !important;
}
.v-card .card-global {
  height: 1200px !important;
}
.theme--light .v-card .card_item {
  background-color: #1a237e !important;
  color: #babec9;
}
.v-sheet .v-card .card_item {
  border-radius: 0px !important;
}
.v-btn:not(.v-btn--round) .v-size--small {
  width: 50px !important;
}
.v-application .red--text {
  color: #f34f64 !important;
  caret-color: #f34f64 !important;
}
</style>
