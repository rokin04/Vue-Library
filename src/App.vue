<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <h2>Welcome to Library</h2>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  h2 {
    padding: 20px 0;
  }
}
.bg-info {
  background-color: white !important;
  border: 1px solid #ffaaaa;
}
</style>
