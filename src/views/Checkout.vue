<template>
  <div class="page-checkout">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Checkout</h1>
      </div>

      <div class="column is-12 box">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in cart.items" v-bind:key="item.product.id">
              <td>{{ item.product.name }}</td>
              <td>${{ item.product.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>${{ getItemTotal(item).toFixed(2) }}</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="2">Total</td>
              <td>{{ cartTotalLength }}</td>
              <td>${{ cartTotalPrice.toFixed(2) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="column is-12 box">
        <h2 class="subtitle">Shipping details</h2>

        <p class="has-text-grey mb-4">* All fields are required</p>

        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="field">
              <label>First name*</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="text"
                  class="input"
                  :class="error_class.first_name.class"
                  v-model="first_name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-if="error_class.first_name.class === 'is-success'"
                >
                  <i class="fas fa-check"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-else-if="error_class.first_name.class === 'is-danger'"
                >
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <p :class="'help is-danger ' + error_class.first_name.message">
                  {{ error_class.first_name.message }}
                </p>
              </div>
            </div>

            <div class="field">
              <label>Last name*</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="text"
                  class="input"
                  :class="error_class.last_name.class"
                  v-model="last_name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-if="error_class.first_name.class === 'is-success'"
                >
                  <i class="fas fa-check"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-else-if="error_class.first_name.class === 'is-danger'"
                >
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <p :class="'help is-danger ' + error_class.first_name.message">
                  {{ error_class.first_name.message }}
                </p>
              </div>
            </div>

            <div class="field">
              <label>E-mail*</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="text"
                  class="input"
                  :class="error_class.email.class"
                  v-model="email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-if="error_class.email.class === 'is-success'"
                >
                  <i class="fas fa-check"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-else-if="error_class.email.class === 'is-danger'"
                >
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <p :class="'help is-danger ' + error_class.email.message">
                  {{ error_class.email.message }}
                </p>
              </div>
            </div>

            <div class="field">
              <label>Phone*</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="text"
                  class="input"
                  :class="error_class.phone.class"
                  v-model="phone"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-phone"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-if="error_class.phone.class === 'is-success'"
                >
                  <i class="fas fa-check"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-else-if="error_class.phone.class === 'is-danger'"
                >
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <p :class="'help is-danger ' + error_class.phone.message">
                  {{ error_class.phone.message }}
                </p>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="field">
              <label>Address*</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="text"
                  class="input"
                  :class="error_class.address.class"
                  v-model="address"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-thin fa-map-marker"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-if="error_class.address.class === 'is-success'"
                >
                  <i class="fas fa-check"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-else-if="error_class.address.class === 'is-danger'"
                >
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <p :class="'help is-danger ' + error_class.address.message">
                  {{ error_class.address.message }}
                </p>
              </div>
            </div>

            <div class="field">
              <label>Zip code*</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="text"
                  class="input"
                  :class="error_class.zipcode.class"
                  v-model="zipcode"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-barcode"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-if="error_class.zipcode.class === 'is-success'"
                >
                  <i class="fas fa-check"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-else-if="error_class.zipcode.class === 'is-danger'"
                >
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <p :class="'help is-danger ' + error_class.zipcode.message">
                  {{ error_class.zipcode.message }}
                </p>
              </div>
            </div>

            <div class="field">
              <label>Place*</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  type="text"
                  class="input"
                  :class="error_class.place.class"
                  v-model="place"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-thin fa-map-marker"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-if="error_class.place.class === 'is-success'"
                >
                  <i class="fas fa-check"></i>
                </span>
                <span
                  class="icon is-small is-right"
                  v-else-if="error_class.place.class === 'is-danger'"
                >
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <p :class="'help is-danger ' + error_class.place.message">
                  {{ error_class.place.message }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="notification is-danger mt-4" v-if="errors.length">
          <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
        </div> -->

        <hr />

        <div id="card-element" class="mb-5"></div>

        <template v-if="cartTotalLength">
          <hr />

          <button class="button is-dark" @click="submitForm">
            Pay with Stripe
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Checkout",
  data() {
    return {
      cart: {
        items: [],
      },
      stripe: {},
      card: {},
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      zipcode: "",
      place: "",
      errors: [],
      error_class: {
        first_name: {
          class: "",
          message: "",
        },
        last_name: {
          class: "",
          message: "",
        },
        email: {
          class: "",
          message: "",
        },
        phone: {
          class: "",
          message: "",
        },
        address: {
          class: "",
          message: "",
        },
        zipcode: {
          class: "",
          message: "",
        },
        place: {
          class: "",
          message: "",
        },
      },
    };
  },
  mounted() {
    document.title = "Checkout | My Online Store";

    this.cart = this.$store.state.cart;

    if (this.cartTotalLength > 0) {
      this.stripe = Stripe(
        "pk_test_518CNU9LvxK8H85YvtLuUfO5sCn5fuJuajntCa2XhRm7wS79Onh7XIW2ZJKt3B0Ouc91tgZawxlsMtuP54hrxBcYW00HHcQZKPy"
      );
      const elements = this.stripe.elements();
      this.card = elements.create("card", { hidePostalCode: true });

      this.card.mount("#card-element");
    }
  },
  methods: {
    getItemTotal(item) {
      return item.quantity * item.product.price;
    },
    submitForm() {
      this.errors = [];

      if (this.first_name === "" || this.first_name.length < 3) {
        this.error_class.first_name.class = "is-danger";
        this.error_class.first_name.message =
          "The first name field is missing!";
        this.errors.push("The first name field is missing!");
      } else {
        this.error_class.first_name.class = "is-success";
        this.error_class.first_name.message = "";
      }

      if (this.last_name === "" || this.last_name.length < 3) {
        this.error_class.last_name.class = "is-danger";
        this.error_class.last_name.message = "The last name field is missing!";
        this.errors.push("The last name field is missing!");
      } else {
        this.error_class.last_name.class = "is-success";
        this.error_class.last_name.message = "";
      }

      if (this.email === "") {
        this.error_class.email.class = "is-danger";
        this.error_class.email.message = "The email field is missing!";
        this.errors.push("The email field is missing!");
      } else {
        this.error_class.email.class = "is-success";
        this.error_class.email.message = "";
      }

      if (this.phone === "") {
        this.error_class.phone.class = "is-danger";
        this.error_class.phone.message = "The phone field is missing!";
        this.errors.push("The phone field is missing!");
      } else {
        this.error_class.phone.class = "is-success";
        this.error_class.phone.message = "";
      }

      if (this.address === "") {
        this.error_class.address.class = "is-danger";
        this.error_class.address.message = "The address field is missing!";
        this.errors.push("The address field is missing!");
      } else {
        this.error_class.address.class = "is-success";
        this.error_class.address.message = "";
      }

      if (this.zipcode === "") {
        this.error_class.zipcode.class = "is-danger";
        this.error_class.zipcode.message = "The zip code field is missing!";
        this.errors.push("The zip code field is missing!");
      } else {
        this.error_class.zipcode.class = "is-success";
        this.error_class.zipcode.message = "";
      }

      if (this.place === "") {
        this.error_class.place.class = "is-danger";
        this.error_class.place.message = "The place field is missing!";
        this.errors.push("The place field is missing!");
      } else {
        this.error_class.place.class = "is-success";
        this.error_class.place.message = "";
      }

      if (!this.errors.length) {
        this.$store.commit("setIsLoading", true);

        this.stripe.createToken(this.card).then((result) => {
          if (result.error) {
            this.$store.commit("setIsLoading", false);

            this.errors.push(
              "Something went wrong with Stripe. Please try again"
            );

            console.log(result.error.message);
          } else {
            this.stripeTokenHandler(result.token);
          }
        });
      }

      // if (this.errors.some((b) => b === "The first name field is missing!")) {
      //   alert(1);
      // }
    },
    async stripeTokenHandler(token) {
      const items = [];

      for (let i = 0; i < this.cart.items.length; i++) {
        const item = this.cart.items[i];
        const obj = {
          product: item.product.id,
          quantity: item.quantity,
          price: item.product.price * item.quantity,
        };

        items.push(obj);
      }

      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        address: this.address,
        zipcode: this.zipcode,
        place: this.place,
        phone: this.phone,
        items: items,
        stripe_token: token.id,
      };

      await axios
        .post("/api/v1/checkout/", data)
        .then((response) => {
          this.$store.commit("clearCart");
          //localStorage.setItem("cart", JSON.stringify([]));
          this.$router.push("/cart/success");
        })
        .catch((error) => {
          this.errors.push("Something went wrong. Please try again");

          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
  },
  computed: {
    cartTotalPrice() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.product.price * curVal.quantity);
      }, 0);
    },
    cartTotalLength() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
  },
};
</script>