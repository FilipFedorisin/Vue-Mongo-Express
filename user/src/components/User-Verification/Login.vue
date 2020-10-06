<template>
  <div id="login">
    <!-- This is universal Child->Parent control routing -->
    <router-link to="/user-verification/register">Register</router-link>
    <router-link to="/user-verification/login">Login</router-link>
    <router-link to="/user-verification/recovery">Recovery</router-link>

    <p>Welcome Back</p>
    <div class="main">
      <h3>Sign In</h3>
      <input type="text" name="username" id="username" />
      <input type="email" name="email" id="email" />
      <button>Sign In</button>
    </div>
    <p><a>Forgot Password?</a></p>
    <p>or</p>
    <img src="" alt="" />
    <img src="" alt="" />
    <p>
      Don't have an account?<router-link
        to="/user-verification/register"
        id="signUp-link"
        >Sign up</router-link
      >
    </p>
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
  #signUp-link {
    text-decoration: none;
  }
  .main {
    display: inline-block;
    input{
      display: block;
      margin: 15px 5px 15px 5px;
      height: 20px;
    }
    button{
      width: 100%;
      color:white;
      background-color: lightblue;
    }
  }
}
</style>
