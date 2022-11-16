<template>
  <div class="header-container">
    <div class="header-image-container">
      <router-link class="logo" to="/"
        ><img src="@/assets/logo.svg" alt="logo"
      /></router-link>
    </div>
    <div
      class="burger"
      :class="{ active: isMenuOpen }"
      v-if="windowWidth < 768"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span></span><span></span><span></span>
    </div>
    <nav
      class="header-navigation-bar"
      :class="{ open: windowWidth < 768 ? isMenuOpen : true }"
    >
      <router-link to="/" class="header-nav-block"> Home </router-link>
      <router-link to="/regulations" class="header-nav-block"
        >Regulations in Europe</router-link
      >
      <div class="header-button-with-dropdown">
        <div
          class="header-nav-block dropdown"
          @click="dropdownExtended = !dropdownExtended"
        >
          Smoke Alarm Information
          <img
            :class="dropdownExtended ? 'flipped' : 'non-flipped'"
            src="@/assets/icons/arrow_down.svg"
            alt="dropdown"
          />
        </div>
        <transition name="slide">
          <div
            v-if="dropdownExtended"
            class="header-dropdown"
            v-click-outside="closeDropdown"
          >
            <router-link to="/types" class="header-nav-block link-dropdown"
              >About Smoke Alarms</router-link
            >
            <router-link to="/place" class="header-nav-block link-dropdown"
              >Where To Place Smoke Alarms</router-link
            >
            <router-link to="/maintain" class="header-nav-block link-dropdown"
              >How to Maintain Smoke Alarms</router-link
            >
          </div>
        </transition>
      </div>
      <router-link to="/facts" class="header-nav-block"
        >Important Facts</router-link
      >
      <router-link to="/practices" class="header-nav-block"
        >Best practices</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      dropdownExtended: false,
      isMenuOpen: false,
      isNotHome: false,
    };
  },
  watch: {
    "$route.path"() {
      if (this.$route.path != "/") {
        this.isNotHome = true;
      } else {
        this.isNotHome = false;
      }
      this.isMenuOpen = false;
      this.dropdownExtended = false;
    },
  },
  methods: {
    linkClick() {
      if (this.windowWidth < 768) {
        this.isMenuOpen = false;
      }
    },
    closeDropdown() {
      this.dropdownExtended = false;
    },
  },
  directives: {
    "click-outside": {
      bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          console.log(vnode.context);
          let outside = true;
          if (event.target.classList[1] == "dropdown") {
            outside = false;
          }
          Object.keys(el.children).forEach((child) => {
            if (event.target == el.children[child]) {
              outside = false;
            }
          });
          if (outside) {
            vnode.context[binding.expression](event);
          }
        };
        // register click and touch events
        document.body.addEventListener("click", el.clickOutsideEvent);
        document.body.addEventListener("touchstart", el.clickOutsideEvent);
      },
      unbind: function (el) {
        // unregister click and touch events before the element is unmounted
        document.body.removeEventListener("click", el.clickOutsideEvent);
        document.body.removeEventListener("touchstart", el.clickOutsideEvent);
      },
      stopProp(event) {
        event.stopPropagation();
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
.header-container {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 55px calc(min(160px, 10vw));
  z-index: 99;
  .header-image-container {
    width: 40%;
    display: flex;
    img {
      min-width: 200px;
      min-height: 131px;
      @media (max-width: 768px) {
        min-width: 120px;
        min-height: 80px;
      }
    }
    @media (max-width: 1080px) {
      width: 20%;
      a,
      img {
        min-width: 60px;
        min-height: 20px;
        width: 100%;
      }
    }
  }
  .header-navigation-bar {
    width: 60%;
    display: flex;
    padding-top: 7px;
    justify-content: flex-end;
    align-items: flex-start;
    @media (min-width: 1280px) {
      margin-left: 64px;
    }
    .header-nav-block {
      font-size: 16px;
      text-decoration: none;
      color: black;
      font-family: $mainFont;
      font-weight: 400;
      // border: 1px solid black;
      // min-width: 18%;
      white-space: nowrap;
      padding: 8px 15px;
      &.link-dropdown {
        color: white;
        box-sizing: content-box;
        // width: 236px;
        font-size: 16px;
        line-height: 24px;
      }
      &:hover {
        &:not(.link-dropdown) {
          font-family: $semiBoldFont;
          border-bottom: 2px solid #000000;
        }
        &.link-dropdown {
          font-family: $semiBoldFont;
        }
      }
    }
    .dropdown {
      cursor: pointer;
      .flipped {
        transition: 0.3s;
        transform: rotate(180deg);
        margin-left: 4px;
      }
      .non-flipped {
        transition: 0.3s;
        transform: rotate(0deg);
        margin-left: 4px;
      }
    }
    .header-button-with-dropdown {
      display: flex;
      flex-direction: column;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
      .header-dropdown {
        display: flex;
        flex-direction: column;
        background-color: #c0554b;
        border-radius: 0px 0px 5px 5px;
        transition: transform 0.2s ease-in-out;
        transform-origin: top;
        &:hover {
          color: white;
        }
      }
      @media (max-width: 768px) {
        width: 95%;
      }
    }
    @media (max-width: 1280px) {
      width: fit-content;
    }
    @media (max-width: 1080px) {
      width: 75%;
    }
  }
  .slide-enter,
  .slide-leave-to {
    transform: scaleY(0);
  }
  .burger {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    height: 25px;
    width: 30px;
    cursor: pointer;
    z-index: 100;
    span {
      display: flex;
      width: 100%;
      height: 5px;
      border-radius: 10px;
      background-color: #ce5b50;
      transition: all 0.3s;
    }
    &.active {
      span:nth-child(2) {
        display: none;
      }
      span {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        transform: rotate(45deg);
      }
      span:last-child {
        transform: rotate(-45deg);
      }
    }
  }
  @media (max-width: 1280px) {
    padding: 30px calc(min(160px, 10vw));
  }
  @media (max-width: 1050px) {
    padding: 30px 30px;
    .header-navigation-bar {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    margin: 0;
    background: white;
    width: 100%;
    padding: 15px 20px;
    z-index: 999;
    box-shadow: 0px 1px 6px -2px rgba(0, 0, 0, 0.404);
    .header-navigation-bar {
      display: none;
      &.open {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 12vh 0 0 5vw;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: white;
        z-index: 99;
        .header-nav-block {
          font-size: clamp(16px, 7vw, 36px);
          margin: 3vh 0;
          .header-button-with-dropdown {
            width: 100%;
          }
          img {
            width: 18px;
            height: 13px;
          }
        }
      }
    }
    .header-image-container {
      height: 80px;
      img {
        height: 100%;
        width: initial;
      }
    }
  }
}
.header-dropdown {
  .router-link-exact-active {
    border-bottom: 2px solid white;
  }
}
.router-link-exact-active {
  border-bottom: 2px solid #000000;
  &.logo {
    border-bottom: none;
  }
}
@media screen and (max-width: 1100px) and (min-width: 768px) {
  .header-container {
    .header-navigation-bar {
      .header-nav-block {
        font-size: 14px;
      }
    }
  }
}
</style>
