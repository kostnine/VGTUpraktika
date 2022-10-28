<template>
  <div id="app">
    
    <HeaderComponent />
    <router-view/>
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import './assets/scss/_variables.scss';
#app {
  font-family: 'Barlow Semi Condensed';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
body{
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
