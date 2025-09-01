<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
    <BackToTop />
    <CookieModal />
  </div>
</template>
<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";
import CookieModal from "./components/CookieModal.vue";
import BackToTop from "./components/BackToTop.vue";
export default {
  data() {
    return {
      allowedLangs: ["EN", "CZ", "ES", 'PL', 'EE', 'LV', 'HU', 'LT', 'MT', 'IT', 'PT'],
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    CookieModal,
    BackToTop,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Home",
    // all titles will be injected into this template
    titleTemplate: "%s | European Smoke Alarm Day",
  },
  watch: {
    "$route.path"() {
      window.scroll(0, 0);
    },
  },
  mounted() {
    if (
      this.$route.params.lang != undefined &&
      this.allowedLangs.includes(this.$route.params.lang.toUpperCase())
    ) {
      this.$store.state.lang = this.$route.params.lang.toUpperCase();
    }
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";
#app {
  font-family: $mainFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1e1826;
}
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
</style>
