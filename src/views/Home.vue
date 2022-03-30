<template>
  <v-app
    dense
    v-bind:style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <v-app-bar dense dark color="transparent" flat>
      <v-tabs dense color="#F34F64" v-model="selectedSubCategory" right>
        <v-tabs-slider color="#F34F64"></v-tabs-slider>
        <v-tab
          v-for="(subcategory, i) in subcategories"
          v-bind:key="subcategory.id"
          v-bind:index="i"
          @click="setSubCategoryId(subcategory.id)"
        >
          {{ subcategory.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-card tile color="transparent" class="my-2 card_global">
      <v-row>
        <v-col cols="12" sm="3">
          <Payment />
        </v-col>
        <v-col cols="12" sm="9">
          <v-tabs-items v-model="selectedSubCategory">
            <v-tab-item>
              <v-card flat class="card_item pa-2" color="transparent">
                <v-row>
                  <v-col
                    color="transparent"
                    cols="12"
                    sm="3"
                    v-for="(product, i) in products"
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
                    sm="3"
                    v-for="(product, i) in products"
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
                    sm="3"
                    v-for="(product, i) in products"
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
                    sm="3"
                    v-for="(product, i) in products"
                    v-bind:key="product.id"
                    v-bind:index="i"
                  >
                    <ProductBox
                      v-bind:product="product"
                      v-bind:key="product.id"
                    />
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import ProductBox from "../components/ProductBox.vue";
import Payment from "../components/Payment.vue";

export default Vue.extend({
  name: "Home",
  props: {
    filters: Object,
  },
  components: {
    ProductBox,
    Payment,
  },
  data: () => ({
    page: 1,
    // tab: null,
    selectedSubCategory: -1,
    subcategories: [],
    products: [],
    // filters: {
    //   brandId: 0,
    //   categoryId: 0,
    //   subCategoryId: 0,
    // },
  }),
  beforeMount() {
    this.filters.brandId = this.$store.state.brandId
      ? this.$store.state.brandId
      : 0;

    this.filters.categoryId = this.$store.state.categoryId
      ? this.$store.state.categoryId
      : 0;

    this.filters.subCategoryId = this.$store.state.subCategoryId
      ? this.$store.state.subCategoryId
      : 0;

    this.selectedSubCategory = this.$store.state.subCategoryId
      ? this.$store.state.subCategoryId - 1
      : 0;
  },
  created() {
    this.$root.$refs.Home = this;
  },
  mounted() {
    console.log(JSON.stringify(this.filters));
    this.getSubCategories();
    this.getProducts();
    document.title = "My Online Store";
  },
  watch: {
    filters: function (val) {
      console.log(val);
      this.getProducts();
    },
  },
  methods: {
    async setSubCategoryId(subCategoryId: any) {
      localStorage.setItem("subCategoryId", subCategoryId);
    },
    async getSubCategories() {
      this.$store.commit("setIsLoading", true);
      await axios
        .get("subcategory")
        .then((response) => {
          // console.log(response.data.data);
          this.subcategories = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    },
    async getProducts() {
      this.$store.commit("setIsLoading", true);

      await axios
        .get(
          "products",

          {
            params: this.filters,
          }
        )
        .then((response) => {
          // console.log(response.data.data);
          this.products = response.data.data;
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
