<template>
  <div id="app">
    <div class="container-scroller">
      <router-view name="header" />
    <router-view/>
  </div>
    <router-view name="footer"/>
  </div>
</template>

<script>
  import Navbar from './views/Layouts/Navbar'
  import Footer from './views/Layouts/Footer'
  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    },
    data : function(){
      return {
        status_login: ''
      }
    } 
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
