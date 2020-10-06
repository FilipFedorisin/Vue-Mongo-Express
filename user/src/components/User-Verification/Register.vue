<template>
  <div id="login">
    <!-- This is universal Child->Parent control routing -->
    <router-link to="/user-verification/register">Register</router-link>
    <router-link to="/user-verification/login">Login</router-link>
    <router-link to="/user-verification/recovery">Recovery</router-link>

    <p>This is @/components/User-Verification/Register.vue</p>
  </div>
</template>

<script></script>

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
