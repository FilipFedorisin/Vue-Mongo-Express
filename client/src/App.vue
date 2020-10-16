<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Index</router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/user-verification/login"> Login</router-link>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
//? Google Fonts
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap");
// Regular 400
// Regular 400 Italic
// Medium 500

::-webkit-scrollbar {
  width: 5px;
  height: 6px;
}
/* Track */
::-webkit-scrollbar-track {
  background: $color-quaternary;
}
/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background: $color-primary;
}
::-webkit-scrollbar-thumb:window-inactive {
  background: $color-primary;
}
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #nav {
    min-height: 7vh;

    max-height: 7vh;
    background-color: $color-secondary;
    box-shadow: 0px 0px 10px $color-tertiary;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
      font-weight: bold;
      text-decoration: none;
      color: $color-primary;
    }
  }
}
</style>
