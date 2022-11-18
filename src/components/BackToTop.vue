<template>
  <transition name="fade">
    <div
      class="go-to-top"
      id="go-to-top"
      v-if="windowScrollTop >= 250"
      @click="scrollToTop"
      :style="{
        bottom: `${this.gapFromFooter}`,
      }"
    >
      <svg
        width="24"
        height="15"
        viewBox="0 0 24 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  watch: {
    windowScrollTop: function (newVal) {
      console.log(newVal);
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
</style>
