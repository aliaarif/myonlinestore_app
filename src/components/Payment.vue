<template>
  <v-card flat class="card_item" elevation="8">
    <v-list subheader two-line color="transparent">
      <v-list-item>
        <v-badge avatar bordered overlap class="mt-5">
          <template v-slot:badge>
            <v-avatar size="40">
              {{ $root.$refs.Home.cartTotalLength }}
            </v-avatar>
          </template>

          <v-avatar size="50">
            <v-icon x-large class="primary darken-4" color="#f34f64" dark>
              mdi-cart-outline
            </v-icon>
          </v-avatar>
        </v-badge>

        <v-list-item-content>
          <v-list-item-title class="white--text ml-8">
            Your total Items in the cart
          </v-list-item-title>
          <v-list-item-subtitle class="grey--text mt-2 ml-8"
            >Premium User
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-tabs
      color="#f34f64"
      v-model="tab1"
      background-color="transparent"
      class="order"
      dark
    >
      <!-- <v-tabs-slider color="#f34f64"> </v-tabs-slider> -->
      <v-tabs-slider color="#F34F64"></v-tabs-slider>
      <v-tab class="withoutuppercase"> Current Order </v-tab>
      <v-tab class="withoutuppercase">Orders On Hold</v-tab>
    </v-tabs>

    <v-divider color="grey" class="divider_tab"></v-divider>

    <v-tabs-items v-model="tab1">
      <v-tab-item>
        <v-list subheader two-line color="primary darken-4">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="white--text subtitle-2"
                >Brown Casual Shoes</v-list-item-title
              >
              <v-list-item-subtitle class="grey--text mt-2"
                >Shoes</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-subtitle class="grey--text">
                <v-btn icon small color="#f34f64" left>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                7
                <v-btn icon small color="#f34f64" right>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title class="white--text subtitle-2">
                $87
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider color="grey" class="divider_tab"></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="white--text subtitle-2"
                >Brown Casual Shoes</v-list-item-title
              >
              <v-list-item-subtitle class="grey--text mt-2"
                >Shoes</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-subtitle class="grey--text">
                <v-btn icon small color="#f34f64" left>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                7
                <v-btn icon small color="#f34f64" right>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title class="white--text subtitle-2">
                $87
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider color="grey" class="divider_tab"></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="white--text subtitle-2"
                >Brown Casual Shoes</v-list-item-title
              >
              <v-list-item-subtitle class="grey--text mt-2"
                >Shoes</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-subtitle class="grey--text">
                <v-btn icon small color="#f34f64" left>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                7
                <v-btn icon small color="#f34f64" right>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title class="white--text subtitle-2">
                $87
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider color="grey" class="divider_tab"></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="white--text subtitle-2"
                >Brown Casual Shoes</v-list-item-title
              >
              <v-list-item-subtitle class="grey--text mt-2"
                >Shoes</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-subtitle class="grey--text">
                <v-btn icon small color="#f34f64" left>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                7
                <v-btn icon small color="#f34f64" right>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title class="white--text subtitle-2">
                $87
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>

          <v-divider color="grey" class="divider_tab"></v-divider>
          <div class="text-right mt-6 mb-6">
            <v-btn text color="#f34f64" class="withoutuppercase">Delete</v-btn>
            <v-btn color="#f34f64" dark rounded class="withoutuppercase"
              >Checkout</v-btn
            >
          </div>
        </v-list>
      </v-tab-item>

      <v-tab-item>
        <v-list subheader two-line color="primary darken-4">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="white--text subtitle-2"
                >Brown Casual Shoes</v-list-item-title
              >
              <v-list-item-subtitle class="grey--text mt-2"
                >Shoes</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-subtitle class="grey--text ml-10"
                >1</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title class="white--text subtitle-2">
                $87
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider color="grey" class="divider_tab"></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="white--text subtitle-2"
                >Brown Casual Shoes</v-list-item-title
              >
              <v-list-item-subtitle class="grey--text mt-2"
                >Shoes</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-subtitle class="grey--text ml-10"
                >1</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title class="white--text subtitle-2">
                $87
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider color="grey" class="divider_tab"></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="white--text subtitle-2"
                >Brown Casual Shoes</v-list-item-title
              >
              <v-list-item-subtitle class="grey--text mt-2"
                >Shoes</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-subtitle class="grey--text ml-10"
                >1</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title class="white--text subtitle-2">
                $87
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider color="grey" class="divider_tab"></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="white--text subtitle-2"
                >Brown Casual Shoes</v-list-item-title
              >
              <v-list-item-subtitle class="grey--text mt-2"
                >Shoes</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-subtitle class="grey--text ml-10"
                >1</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-title class="white--text subtitle-2">
                $87
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>
          <v-divider color="grey" class="divider_tab"></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle class="grey--text"
                >Discount</v-list-item-subtitle
              >
              <v-list-item-title class="white--text subtitle-2 mt-2"
                >Total</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-subtitle class="orange--text">
                -$2
              </v-list-item-subtitle>
              <v-list-item-title class="green--text subtitle-2 mt-2">
                $87
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item>

          <v-divider color="grey" class="divider_tab"></v-divider>
          <div class="text-right mt-6 mb-6">
            <v-btn text color="#f34f64" class="withoutuppercase">Delete</v-btn>
          </div>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "Payment",
  props: {
    cartTotalLength: Number,
  },

  data: () => ({
    tab1: null,
  }),
  mounted() {},
  methods: {},
});
</script>

<style scoped>
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
.v-tabs .order {
  width: 100% !important;
}
.theme--light .v-card .card_item {
  background-color: #1a237e !important;
  color: #babec9;
}
.v-sheet .v-card .card_item {
  border-radius: 0px !important;
}
.v-divider .divider_tab {
  height: 2px !important;
  max-height: 2px !important;
}
.v-btn .withoutupercase {
  text-transform: none !important;
}
</style>
