<template>
  <div class="page-success">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Thank you</h1>

        <p>Your order will be processed within 48 hours</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success",
  // beforeCreate() {
  //   // this.$store.commit("clearCart");
  //   // localStorage.setItem("cart", JSON.stringify([]));
  // },
  mounted() {
    document.title = "Success | My Online Store";
  },
};
</script>