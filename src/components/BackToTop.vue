<template>
  <transition name="fade">
    <div
      class="go-to-top"
      id="go-to-top"
      v-show="true"
      role="button"
      :tabindex="windowScrollTop >= 250 ? 0 : -1" 
      aria-label="Go to top of page"
      @click="scrollToTop"
      @keyup.enter="scrollToTop"
      @keyup.space="scrollToTop"
      :aria-hidden="windowScrollTop < 250" 
      :style="{ 
        bottom: `${gapFromFooter}`, 
        opacity: windowScrollTop >= 250 ? 1 : 0, 
        pointerEvents: windowScrollTop >= 250 ? 'auto' : 'none' 
      }"
    >
      <svg
        width="24"
        height="15"
        viewBox="0 0 24 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M22 13L12 3L2 13" stroke="#483A5B" stroke-width="3" />
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      gapFromFooter: 0,
      fixedArrow: "",
    };
  },
    mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.windowScrollTop = window.scrollY;

      const footer = document.querySelector(".footer-container");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (window.innerHeight > footerRect.y) {
          this.gapFromFooter = `${window.innerHeight - footerRect.y + 15}px`;
        } else {
          this.gapFromFooter = `30px`;
        }
      }
    },
  },
  watch: {
    windowScrollTop: function () {
      const footer = document
        .querySelector(".footer-container")
        .getBoundingClientRect();
      if (window.innerHeight > footer.y) {
        this.gapFromFooter = `${window.innerHeight - footer.y + 15}px`;
      } else {
        this.gapFromFooter = `${30}px`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.go-to-top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 46px;
  background-color: #dce3ef;
  position: fixed;
  bottom: 30px;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.15);
  right: calc(min(160px, 10vw));
  border-radius: 50%;
  z-index: 99;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #483a5b;
    svg {
      path {
        stroke: white;
      }
    }
  }
  svg {
    margin-top: -5px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
//fokusavmo styliai
[tabindex="0"]:focus-visible,
button:focus-visible,
a:focus-visible,
:deep(.vueperslides__arrow:focus-visible) {
  outline: 3px solid #000000ff; /* kontrastingas apvadas */
  outline-offset: 4px;
  border-radius: 8px;
}
</style>
