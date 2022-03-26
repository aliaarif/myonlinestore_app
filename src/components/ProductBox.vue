<template>
  <v-hover v-slot="{ hover }" close-delay="50">
    <v-card
      :elevation="hover ? 16 : 1"
      :class="{ 'on-hover': hover }"
      class="mx-auto"
      color="primary darken-4"
      tile
      align="center"
    >
      <v-img
        :aspect-ratio="16 / 9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="
              d-flex
              transition-fast-in-fast-out
              primary
              darken-4
              v-card--reveal
              text-h2
              white--text
            "
            style="height: 100%"
          >
            ${{ product.price }}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <v-btn
          absolute
          :color="hover ? '#f34f64' : 'primary darken-4'"
          class="white--text"
          fab
          small
          right
          top
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>

        <div class="font-weight-light grey--text text-h6 mb-2">
          {{ product.title }}
        </div>

        <!-- <h4 class="text-h4 font-weight-light grey--text mb-2">
          {{ product.title }}
        </h4> -->
        <div class="font-weight-light grey--text text-h6 mb-2">
          ( In {{ product.category.title }} )
        </div>

        <!-- <div class="font-weight-light grey--text text-h6 mb-2">
          Our Vintage kitchen utensils delight any chef.<br />
          Made of bamboo by hand
        </div> -->
      </v-card-text>
    </v-card>
  </v-hover>
</template>


<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "ProductBox",

  props: {
    product: Object,
  },

  data: () => ({
    item: {},
    quantity: 1,
    multiLine: true,
    snackbar: false,
    timeout: 2000,
  }),
  mounted() {
    //this.getProduct();
  },
  methods: {
    // async getProduct() {
    //   this.$store.commit("setIsLoading", true);

    //   const category_slug = this.$route.params.category_slug;
    //   const product_slug = this.$route.params.product_slug;

    //   await axios
    //     .get(`/products/${category_slug}/${product_slug}/`)
    //     .then((response) => {
    //       this.product = response.data;

    //       document.title = this.product.name + " | My Online Store";
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   this.$store.commit("setIsLoading", false);
    // },
    async addToCart(p_id: any, flag: any) {
      await axios
        .get(`/product/${p_id}`)
        .then((response) => {
          this.item = response.data.data;
          //console.log(response.data.data.name);

          if (isNaN(this.quantity) || this.quantity < 1) {
            this.quantity = 1;
          }

          const item = {
            product: this.item,
            quantity: this.quantity,
          };

          this.$store.commit("addToCart", item);
          this.snackbar = true;
          if (flag === "buy") {
            this.$router.push("/cart");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // toast({
      //   message: "The product was added to the cart.",
      //   type: "is-success",
      //   dismissible: true,
      //   pauseOnHover: true,
      //   duration: 2000,
      //   position: "bottom-right",
      // });
    },
  },
});
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>


