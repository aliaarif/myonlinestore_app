<template>
  <div class="page-sign-up">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Log In</h1>

        <form @submit.prevent="submitForm">
          <div class="field">
            <label>Username</label>
            <div class="control">
              <input
                type="text"
                class="input"
                placeholder="Username"
                name="username"
                v-model="username"
              />
            </div>
          </div>
          <div class="field">
            <label>Password</label>
            <div class="control">
              <input
                type="password"
                class="input"
                placeholder="Password"
                name="password"
                v-model="password"
              />
            </div>
          </div>
          <div class="notification is-danger" v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-dark">Log In</button>
            </div>
          </div>
          <hr />
          <router-link to="/log-in">click here </router-link> to sign up!
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";

export default {
  name: "LogIn",
  data() {
    return {
      username: "",
      password: "",
      errors: [],
    };
  },
  mounted() {
    this.$store.commit("setIsLoading", true);
    document.title = "Log In | My Online Store";
    this.$store.commit("setIsLoading", false);
  },
  methods: {
    async submitForm() {
      this.errors = [];
      if (this.username === "") {
        this.errors.push("The Username is missing.");
      }
      if (this.password === "") {
        this.errors.push("The Password is too short.");
      }
      if (!this.errors.length) {
        const formData = {
          username: this.username,
          password: this.password,
        };
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("token");

        await axios
          .post(`api/v1/token/login/`, formData)
          .then((response) => {
            const token = response.data.auth_token;
            this.$store.commit("setToken", token);
            axios.defaults.headers.common["Authorization"] = "Token " + token;
            localStorage.setItem("token", token);
            const toPath = this.$route.query.to || "/cart";
            toast({
              message: "Login Success!",
              type: "is-success",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "bottom-right",
            });
            this.$router.push(toPath);
          })
          .catch((error) => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(
                  `${property}: ${error.response.data[property]}`
                );
              }
              console.log(JSON.stringify(error.response.data));
            } else {
              this.errors.push("Something went wrong. Please try again.");
              console.log(JSON.stringify(error));
            }
          });
      }
    },
  },
};
</script>
