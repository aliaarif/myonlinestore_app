<template>
  <div class="page-about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  mounted() {
    this.$store.commit("setIsLoading", true);
    this.$store.commit("setIsLoading", false);
  },
};
</script>
