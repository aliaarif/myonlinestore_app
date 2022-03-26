<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="24">
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-row>
              <v-col cols="12" md="8">
                <v-card-text class="mt-2">
                  <h1
                    class="
                      text-center
                      display-1
                      indigo--text
                      text--darken-4
                      mb-2
                    "
                  >
                    Login Panel
                  </h1>
                  <auth-with-social styleFlag="flat" />
                  <h4 class="text-center mt-4 mb-4 indigo--text text--darken-4">
                    please provide your auth credention
                  </h4>
                  <v-form id="login_form" name="login_form">
                    <v-text-field
                      type="text"
                      id="email"
                      name="email"
                      label="Email"
                      prepend-icon="email"
                      color="indigo darken-4"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      type="password"
                      id="password"
                      name="password"
                      label="Password"
                      prepend-icon="lock"
                      color="indigo darken-4"
                      outlined
                      dense
                    ></v-text-field>
                  </v-form>
                  <h3
                    class="text-center mt-3 indigo--text text--darken-4"
                    @click="step++"
                  >
                    Forget your password ?
                  </h3>
                </v-card-text>
                <div class="text-center mt-2 mb-2">
                  <v-btn rounded color="indigo darken-4" dark> SIGN IN </v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="4" class="indigo darken-4">
                <v-card-text class="white--text mt-12">
                  <h1 class="text-center display-1">My Online Store</h1>
                  <p class="text-center white--text mt-4">
                    Please enter your Auth credentials <br />to start acceess
                    the application
                  </p>
                </v-card-text>
                <div class="text-center mt-2 mb-2">
                  <v-btn rounded outlined="" dark @click="step++">
                    SIGN UP
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="2">
            <v-row class="fill-height">
              <v-col cols="12" md="8">
                <v-card-text class="mt-2">
                  <h1
                    class="
                      text-center
                      display-1
                      indigo--text
                      text--darken-4
                      mb-2
                    "
                  >
                    Registration Panel
                  </h1>

                  <h4 class="text-center mt-4 mb-4 indigo--text text--darken-4">
                    please provide your name, email and password for
                    registration
                  </h4>
                  <v-form id="login_form" name="login_form">
                    <v-text-field
                      type="text"
                      id="name"
                      name="name"
                      label="Name"
                      prepend-icon="person"
                      color="indigo darken-4"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      type="text"
                      id="email"
                      name="email"
                      label="Email"
                      prepend-icon="email"
                      color="indigo darken-4"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      type="password"
                      id="password"
                      name="password"
                      label="Password"
                      prepend-icon="lock"
                      color="indigo darken-4"
                      outlined
                      dense
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <div class="text-center mt-2 mb-2">
                  <v-btn rounded color="indigo darken-4" dark> SIGN UP </v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="4" class="indigo darken-4">
                <v-card-text class="white--text mt-12">
                  <h1 class="text-center display-1">Register with</h1>
                  <auth-with-social styleFlag="dark" />
                  <p class="text-center white--text mt-4">
                    To keep connected with us <br />please login with your auth
                    credentials
                  </p>
                </v-card-text>
                <h3
                  class="text-center mt-2 white--text text--darken-4"
                  @click="step--"
                >
                  Already have an account ?
                </h3>
                <div class="text-center mt-2 mb-2">
                  <v-btn rounded outlined="" dark @click="step--">
                    SIGN IN
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import AuthWithSocial from "@/components/common/AuthWithSocial.vue";
import Vue from "vue";
export default Vue.extend({
  name: "Auth",
  components: { AuthWithSocial },
  props: {
    source: String,
  },
  methods: {
    submitLoginForm() {},
  },
  data: () => ({
    step: 1,
  }),
});
</script>


