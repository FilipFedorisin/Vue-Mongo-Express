<template>
  <div id="login">
    <div class="container">
      <!-- 
        //TODO: Need to add some kind of form valiadation before-post request
        //TODO: Need to add vuex instance to validate login informations
        //TODO: Need to add get/post request to validate user
      -->

      <div class="welcomeBanner">
        <p>Welcome Back</p>
        <h3 id="_googleInput">Login</h3>
      </div>

      <div class="loginForm">
        <input id="username" placeholder="Email" />
        <input v-model="login.password" type="password" placeholder="Password" />

        <p v-show="!login.passValidLength" class="loginError">Password must be 6 digits or more</p>
        <p v-show="login.passValidLength" class="loginTrue">Password must be 6 digits or more</p>

        <p v-if="!login.passValidDigits" class="loginError">Password must contain a number</p>
        <p v-if="login.passValidDigits" class="loginTrue">Password must contain a number</p>

        <p v-show="!login.passValidCapital" class="loginError">
          Password must contain uppercase and lowercase letters
        </p>
        <p v-show="login.passValidCapital" class="loginTrue">
          Password must contain uppercase and lowercase letters
        </p>

        <button>Login</button>
      </div>

      <div class="otherOptions">
        <p1><router-link to="/user-verification/recovery">Forgot Password?</router-link></p1>
        <p2>or</p2>
        <img src="../../assets/Icons/Facebook.png" />
        <img src="../../assets/Icons/google.png" />
        <p3>
          Don't have an account?
          <router-link to="/user-verification/register" id="signUp-link">Sign up</router-link>
        </p3>
      </div>
    </div>
  </div>
</template>

<script>
import * as formValidation from "../../assets/scripts/formValidation.js"

export default {
  name: "container",
  data() {
    return {
      login: {
        username: "",
        password: "",
        passValidLength: false,
        passValidDigits: false,
        passValidCapital: false,
      },
    }
  },
  watch: {
    "login.password": function(password) {
      this.login.passValidLength = formValidation.passLength(password)
      this.login.passValidCapital = formValidation.passCapital(password)
      this.login.passValidDigits = formValidation.passNumber(password)
    },
  },
}
</script>

<style lang="scss">
#login {
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

    .loginForm {
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
      .loginError {
        color: $color-negative;
        font-style: italic;
        font-weight: bold;
      }
      .loginTrue {
        color: $color-button-onHover;
        text-decoration: line-through;
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
