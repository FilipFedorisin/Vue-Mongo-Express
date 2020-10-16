<template>
  <div id="register">
    <div class="container">
      <div class="welcomeBanner">
        <p>Welcome</p>
        <h3>Sign Up</h3>
      </div>

      <div class="signUpForm">
        <form id="register-form" @submit.prevent="_createUser">
          <input v-model="email" type="email" name="email" placeholder="Email" />
          <input v-model="password" type="password" name="password" placeholder="Password" />
          <input v-model="passwordRepeat" type="password" name="password" placeholder="Repeat Password" />
        </form>
        <button type="submit">Register</button>
      </div>

      <div class="otherOptions">
        <p2>or</p2>
        <img src="../../assets/Icons/Facebook.png" />
        <img src="../../assets/Icons/google.png" />
        <p3>Do you have account? <router-link to="/user-verification/login" id="signIn-link">Sign in</router-link></p3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex"

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordRepeat: "",
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
#register {
  font-family: "Roboto";
  min-height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //-> #login

  .container {
    height: auto;
    width: 400px;
    margin-bottom: 0;
    padding: 15px;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px $color-tertiary;
    background-color: $color-secondary;
    //-> .container

    .welcomeBanner {
      width: 80%;
      margin: auto;
      //-> .welcomeBanner

      p {
        //Welcome back
        font-weight: bold;
        text-align: left;
        font-size: 15px;
        padding: 0;
        margin: 0;
        color: $color-primary;
        font-style: italic;
      }
      h3 {
        //Sign In
        color: $color-primary;
        font-size: 35px;
        margin: 0;
        padding: 0;
        padding-top: 22px;
        padding-bottom: 22px;
      }
    }

    .signUpForm {
      width: 80%;
      margin: auto;
      padding: 0;
      //-> .loginForm

      input {
        //email and password
        padding-left: 2%;
        padding-right: 2%;
        box-shadow: 0px 0px 7px $color-tertiary;
        border-radius: 7px;
        border: none;
        display: block;

        margin-top: 20px;
        width: 96%;
        height: 35px;
        font-size: 18px;
      }
      ::placeholder {
        margin-left: 7px;
        margin-right: 7px;
        color: $color-primary-light;
      }
      button {
        //Log in
        padding: 0;
        margin: 0;
        border: 0;
        transition: all 0.5s ease;
        margin: auto;
        margin-top: 20px;
        height: 37px;
        width: 50%;
        border-radius: 7px;
        color: white;
        background-color: $color-button-positive;
        font-size: 18px;
        box-shadow: 0px 0px 7px $color-tertiary;
      }
      button:hover {
        transition: all 0.21s ease;
        transform: scale(1.1);
        background-color: $color-button-onHover;
        box-shadow: 0px 0px 13px $color-button-onHover;
        cursor: pointer;
      }
    }

    .otherOptions {
      width: 80%;
      margin: auto;
      padding: 0;
      //-> .otherOptions

      p1 {
        //Forgot password
        display: block;
        text-align: center;
        padding-top: 15px;
        //-> p1

        a:hover {
          transition: all 0.21s ease;
          transform: scale(1.5);
          color: $color-button-onHover;
          text-shadow: 0px 0px 1px $color-button-onHover;
          cursor: pointer;
        }
        a {
          transition: all 0.5s ease;
          font-weight: bold;
          text-decoration: none;
          font-size: 15px;
          color: #24a0ed;
        }
      }
      p2 {
        // or
        display: block;
        padding-top: 20px;
        text-align: center;
        font-weight: bold;
        font-size: 15px;
        color: $color-primary;
      }
      img {
        // fb andd google icon
        transition: transform 0.5s;
        padding: 20px;
        width: 50px;
      }
      img:hover {
        transform: scale(1.1);
        transition: transform 0.21s;
        cursor: pointer;
      }
      p3 {
        // dont have an account?
        margin: 0;
        padding: 0;
        display: block;
        margin-top: 10px;
        color: black;
        font-weight: bold;
        text-align: left;
        font-size: 15px;
        color: $color-primary;
        font-style: italic;
        //-> p3

        a {
          //Sign Up
          transition: all 0.5s ease;
          color: #24a0ed;
          text-decoration: none;
        }
        a:hover {
          transition: all 0.21s ease;
          transform: scale(1.5);
          color: $color-button-onHover;
          text-shadow: 0px 0px 1px $color-button-onHover;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 640px) {
    .container {
      width: 85%;
      .welcomeBanner,
      .loginForm,
      .otherOptions {
        width: 95%;
      }
    }
  }
}
</style>
