<template>
  <tr>
    <td>
      <router-link :to="item.product.get_absolute_url">
        {{ item.product.name }}
      </router-link>
    </td>
    <td>{{ item.product.price }}</td>
    <td>
      <div class="buttons has-addons">
        <button class="button is-small" @click="decrementQuantity(item)">
          <span class="icon is-small">
            <i class="fas fa-minus"></i>
          </span>
        </button>
        <button class="button is-small is-info is-selected">
          {{ item.quantity }}
        </button>
        <button class="button is-small" @click="incrementQuantity(item)">
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
        </button>
      </div>
    </td>
    <td>${{ getItemTotal(item).toFixed(2) }}</td>
    <td>
      <button class="delete is-danger" @click="removeFromCart(item)"></button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    initialItem: Object,
  },
  data() {
    return {
      item: this.initialItem,
    };
  },
  methods: {
    getItemTotal(item) {
      return item.quantity * item.product.price;
    },
    decrementQuantity(item) {
      item.quantity -= 1;

      if (item.quantity === 0) {
        this.$emit("removeFromCart", item);
      }

      this.updateCart();
    },
    incrementQuantity(item) {
      item.quantity += 1;
      this.updateCart();
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.$store.state.cart));
    },
    removeFromCart(item) {
      this.$emit("removeFromCart", item);
      this.updateCart();
    },
  },
};
</script>

<style scoped>
.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
</style>
