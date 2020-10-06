<template>
  <div id="login">
    <!-- This is universal Child->Parent control routing -->
    <router-link to="/user-verification/register">Register</router-link>
    <router-link to="/user-verification/login">Login</router-link>
    <router-link to="/user-verification/recovery">Recovery</router-link>
    <br />

    <input v-model="email" type="email" name="email" placeholder="your@email.com" />
    <br />
    <input v-model="password" type="password" name="password" placeholder="password" />
    <br />
    <button @click="register">Register</button>

    <p>This is @/components/User-Verification/Register.vue</p>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async register() {
      await AuthenticationService.register({
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style lang="scss">
#login {
  border-style: solid;
  border-color: blue;
  border-width: 2px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
