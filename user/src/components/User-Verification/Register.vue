<template>
  <div id="Register">
    <div class="main">
      <p>Welcome</p>
      <h3>Sign Up</h3>
      <form id="register-form" @submit.prevent="_createUser">
        <input v-model="email" type="email" name="email" placeholder="your@email.com" />
        <input v-model="password" type="password" name="password" placeholder="password" />
        <button type="submit">Register</button>
      </form>
      <p2>or</p2>
      <img src="../../assets/Icons/Facebook.png" />
      <img src="../../assets/Icons/google.png" />
      <p3>Do you have account? <router-link to="/user-verification/login" id="signIn-link">Sign in</router-link></p3>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      formValid: true,
    };
  },
  watch: {
    email: function() {
      this.registerUser();
    },
    password: function() {
      this.registerUser();
    },
  },
  methods: {
    ...mapMutations(["setUser"]),
    ...mapActions(["createUser"]),
    registerUser() {
      if (this.formValid) {
        this.setUser({ email: this.email, password: this.password });
      }
    },
    _createUser() {
      this.createUser();
      console.log(`User was registered as email:"${this.email}" pass:"${this.password}"`);

      this.email = null;
      this.password = null;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap");

#Register {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  min-height: 100vh;

  .main {
    height: 72vh;
    width: 30%;
    margin: 15px auto;
    padding: 10px 0px;
    box-shadow: 2px 2px 20px #afacac;

    h3 {
      color: #24a0ed;
      font-size: 20px;
      margin: 0;
      padding-top: 22px;
    }

    #register-form {
      margin: 0;
      padding-top: 20px;

      p1 {
        display: block;
        text-align: right;
        padding-right: 17%;
        padding-top: 15px;

        a:hover {
          transition: all 0.5s ease;
          color: #01fa37;
        }

        a {
          transition: all 0.5s ease;
          font-weight: bold;
          text-decoration: none;
          font-size: 15px;
          color: #24a0ed;
        }
      }
      input {
        box-shadow: 1px 1px 3px #afacac;
        border-radius: 3px;
        border: none;
        display: block;
        margin: 15px auto;
        width: 64%;
        height: 25px;
      }
      button:hover {
        transform: scale(1.1);
        transition: all 0.5s ease;
        background-color: #01fa37;
        color: black;
      }
      button {
        transition: all 0.5s ease;
        margin: 20px auto 0 auto;
        display: block;
        box-shadow: 1px 1px 3px #afacac;
        height: 30px;
        width: 65%;
        color: white;
        background-color: #24a0ed;
        border: none;
        border-radius: 3px;
      }
    }
    p {
      margin: 0;
      padding-top: 20px;
      padding-left: 20px;
      font-weight: bold;
      text-align: left;
      font-size: 15px;
      color: black;
    }
    p2 {
      display: block;
      padding-top: 56px;
      text-align: center;
      font-weight: bold;
      font-size: 15px;
      color: black;
    }
    img:hover {
      transform: scale(1.5);
      transition: transform 0.5s;
    }
    img {
      transition: transform 0.5s;
      padding: 10px 15px 0px 15px;
    }
    p3 {
      position: static;
      display: block;
      padding-left: 20px;
      margin-top: 60px;
      font-weight: bold;
      text-align: left;
      font-size: 15px;
      color: black;
    }

    img {
      width: 50px;
    }

    a:hover {
      transition: all 0.5s ease;
      color: #01fa37;
    }
    a {
      transition: all 0.5s ease;
      color: #24a0ed;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 1250px) {
    .main {
      width: 66%;
      margin: auto;
      margin-top: 10px;
      padding-top: 10px;
      box-shadow: 2px 2px 20px #afacac;
      #register-form {
        input {
          width: 90%;
          height: 35px;
        }
        button {
          width: 90%;
          height: 35px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .main {
      width: 100%;
      height: 100vh;
      margin: auto;
      padding-top: 10px;
      box-shadow: 2px 2px 20px #afacac;
      #register-form {
        input {
          width: 90%;
          height: 35px;
        }
        button {
          width: 90%;
          height: 35px;
        }
      }
    }
  }
}
</style>
