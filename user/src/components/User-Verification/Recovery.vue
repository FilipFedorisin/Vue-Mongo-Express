<template>
  <div id="Recovery">
    <div class="main">
      <p>Let's Get You</p>
      <h3>Forgot</h3>
      <div class="inputPanel">
        <input type="text" name="password" id="username" placeholder="Enter your@email.com" />
        <button>Sign In</button>
        <p1><router-link to="/user-verification/login">Go Back To Login</router-link></p1>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap");

#Recovery {
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

    .inputPanel {
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
      padding-top: 20px;
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
      .inputPanel {
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

      .inputPanel {
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
