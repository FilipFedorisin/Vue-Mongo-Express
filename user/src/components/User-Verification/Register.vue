<template>
  <div id="login">
    <!-- This is universal Child->Parent control routing -->
    <router-link to="/user-verification/register">Register</router-link>
    <router-link to="/user-verification/login">Login</router-link>
    <router-link to="/user-verification/recovery">Recovery</router-link>
    <br />

    <form id="register-form" @submit.prevent="_createUser">
      <input v-model="email" type="email" name="email" placeholder="your@email.com" />
      <br />
      <input v-model="password" type="password" name="password" placeholder="password" />
      <br />
      <button type="submit">Register</button>
    </form>

    <p>This is @/components/User-Verification/Register.vue</p>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex"

export default {
  data() {
    return {
      email: "",
      password: "",
      formValid: true,
    }
  },
  watch: {
    email: function() {
      this.registerUser()
    },
    password: function() {
      this.registerUser()
    },
  },
  methods: {
    ...mapMutations(["setUser"]),
    ...mapActions(["createUser"]),
    registerUser() {
      if (this.formValid) {
        this.setUser({ email: this.email, password: this.password })
      }
    },
    _createUser() {
      this.createUser()
      console.log(`User was registered as email:"${this.email}" pass:"${this.password}"`)

      this.email = null
      this.password = null
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

  #register-form {
    display: block;
  }
}
</style>
