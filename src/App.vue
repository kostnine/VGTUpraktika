<template>
  <div id="app">
    <!--  Accessibility: Skip to main content -->
    <a
      v-if="showSkipLink"
      href="#main-content"
      ref="skipLink"
      class="skip-link"
      @click="handleSkipLinkClick"
      @blur="hideSkipLink"
    >
      Skip to main content
      <img src="@/assets/images/strelyte.png" alt="" class="skip-arrow" />
    </a>

    <div class="page-wrapper">
      <HeaderComponent />
      <BackToTop />
      <main id="main-content" tabindex="-1" role="main">
        <router-view />
      </main>
      <FooterComponent />
      <CookieModal />
    </div>
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
      allowedLangs: ["EN", "CZ", "ES", "FR", "PL", "EE", "LV", "HU", "LT", "MT", "IT", "PT"],
      showSkipLink: false, // ar mygtukas apskritai matomas
      tabListenerAdded: false, // kad nebesidubliuotų event
      hasInteracted: false, // ar jau buvo bet koks interaction
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    CookieModal,
    BackToTop,
  },
  metaInfo: {
    title: "Home",
    titleTemplate: "%s | European Smoke Alarm Day",
  },
  methods: {
      updateHtmlLang() {
        // Map store language codes to proper HTML lang codes
        const langMap = {
          'EN': 'en',
          'ES': 'es', 
          'CZ': 'cs',
          'PL': 'pl',
          'EE': 'et',
          'LV': 'lv',
          'HU': 'hu',
          'LT': 'lt',
          'MT': 'mt',
          'IT': 'it',
          'PT': 'pt',
          'FR': 'fr'
        };
        const currentLang = this.$store.state.lang;
        const htmlLang = langMap[currentLang] || 'en';
        document.documentElement.setAttribute('lang', htmlLang);
      },
      skipToMainContent() {
        const main = document.getElementById("main-content");
        if (main) {
          main.scrollIntoView({ behavior: "smooth" });
          main.focus();
        }
      },
      handleSkipLinkClick(e) {
        // Only handle if triggered by keyboard (Enter or Space)
        // Mouse clicks should be ignored
        e.preventDefault();
        this.skipToMainContent();
        this.hideSkipLink();
      },
      hideSkipLink() {
        this.showSkipLink = false;
      },
      setupTabListener() {
        if (this.tabListenerAdded) return;
        this.tabListenerAdded = true;
        
        // Track keyboard navigation
        window.addEventListener("keydown", (e) => {
          // Set keyboard navigation flag for Tab, Arrow keys, Enter, Space
          if (["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", " "].includes(e.key)) {
            this.$store.state.isKeyboardNavigating = true;
          }
          
          if (e.key === "Tab" && !this.hasInteracted) {
            e.preventDefault();
            this.showSkipLink = true;
            this.hasInteracted = true;
            this.$nextTick(() => {
              const skip = this.$refs.skipLink;
              if (skip) skip.focus();
            });
          }
        });
        
        // Reset keyboard navigation flag on mouse events
        window.addEventListener("mousedown", () => {
          this.$store.state.isKeyboardNavigating = false;
        });
        
        window.addEventListener("click", () => {
          this.$store.state.isKeyboardNavigating = false;
        });
      },
    },
  watch: {
    "$route.path"() {
      window.scrollTo(0, 0);
      // Reset interaction state on route change
      this.hasInteracted = false;
      this.showSkipLink = false;
    },
    "$store.state.lang"() {
      // Update HTML lang attribute when language changes
      this.updateHtmlLang();
    },
  },
  mounted() {
    this.setupTabListener();

    // kalbos validacija
    if (
      this.$route.params.lang &&
      this.allowedLangs.includes(this.$route.params.lang.toUpperCase())
    ) {
      this.$store.state.lang = this.$route.params.lang.toUpperCase();
    }
    
    // Set initial HTML lang attribute
    this.updateHtmlLang();
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

/*  Skip link - Figma design */
.skip-link {
  position: fixed;
  top: 20px; /* Arčiau headerio */
  left: 20px; /* Kairėje pusėje */
  background: #FFFFFF;
  color: #483A5B;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 20px;
  border: 1px solid #C0554B;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 202px;
  height: 62px;
  box-sizing: border-box;
}

.skip-arrow {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Focused state of the Skip Link */
.skip-link:focus,
.skip-link:focus-visible {
  outline: 2px solid #C0554B;
  outline-offset: 2px;
}

.skip-link:hover {
  background: #F8F8F8;
  border-color: #A04540;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
