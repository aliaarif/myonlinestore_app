<template>
  <div class="text-center mt-4 mb-4" v-if="styleFlag === 'flat'">
    <v-btn class="mx-2" fab color="indigo darken-4" outlined>
      <v-icon>fab fa-facebook-f</v-icon>
    </v-btn>
    <v-btn class="mx-2" fab color="indigo darken-4" outlined>
      <v-icon>fab fa-google-plus-g</v-icon>
    </v-btn>
    <v-btn class="mx-2" fab color="indigo darken-4" outlined>
      <v-icon>fab fa-linkedin</v-icon>
    </v-btn>
  </div>
  <div class="text-center mt-4 mb-4" v-else>
    <v-btn class="mx-2" fab color="white darken-4" outlined>
      <v-icon>fab fa-facebook-f</v-icon>
    </v-btn>
    <v-btn class="mx-2" fab color="white darken-4" outlined>
      <v-icon>fab fa-google-plus-g</v-icon>
    </v-btn>
    <v-btn class="mx-2" fab color="white darken-4" outlined>
      <v-icon>fab fa-linkedin</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AuthWithSocial",
  props: ["styleFlag"],
  data: () => ({}),
  mounted() {},
});
</script>
