<template>
  <div class="header-container">
    <div class="header-image-container">
      <router-link class="logo" :to="`/${$store.state.lang}/`"
        ><img src="@/assets/logo.svg" alt="logo"
      /></router-link>
    </div>
    <div
      class="burger"
      :class="{ active: isMenuOpen }"
      v-if="windowWidth <= 880"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span></span><span></span><span></span>
    </div>
    <nav
      class="header-navigation-bar"
      :class="{ open: windowWidth <= 880 ? isMenuOpen : true }"
    >
      <router-link :to="`/${$store.state.lang}/`" class="header-nav-block">
        {{ toLocal("header.home") }}
      </router-link>
      <router-link
        :to="`/${$store.state.lang}/regulations`"
        class="header-nav-block"
        >{{ toLocal("header.regulations") }}</router-link
      >
      <div class="header-button-with-dropdown">
        <div
          class="header-nav-block dropdown"
          @click="dropdownExtended = !dropdownExtended"
        >
          {{ toLocal("header.sm_info") }}
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
            <router-link
              :to="`/${$store.state.lang}/types`"
              class="header-nav-block link-dropdown dd-link"
              >{{ toLocal("header.about") }}</router-link
            >
            <router-link
              :to="`/${$store.state.lang}/place`"
              class="header-nav-block link-dropdown dd-link"
              >{{ toLocal("header.where") }}</router-link
            >
            <router-link
              :to="`/${$store.state.lang}/maintain`"
              class="header-nav-block link-dropdown dd-link"
              >{{ toLocal("header.maintain") }}</router-link
            >
          </div>
        </transition>
      </div>
      <router-link
        :to="`/${$store.state.lang}/facts`"
        class="header-nav-block"
        >{{ toLocal("header.important_facts") }}</router-link
      >
      <router-link
        :to="`/${$store.state.lang}/practices`"
        class="header-nav-block"
        >{{ toLocal("header.practices") }}</router-link
      >
      <div
        class="language-selector header-nav-block dropdown"
        @click="langDropdown"
      >
        {{ languages[$store.state.lang] }}
        <svg
          :class="{ reversed: isLangExtended }"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
        >
          <path d="M1 1L6 5L11 1" stroke="#1E1826" stroke-width="1.5" />
        </svg>
        <transition name="slide">
          <div
            class="language-dropdown"
            v-click-outside="closeLangDropdown"
            v-if="isLangExtended"
          >
            <span
              class="dropdown-element"
              :class="{ active: $store.state.lang == language.prefix }"
              v-for="language in dropdownLanguages"
              :key="`lang-${language.id}`"
              @click="changeLanguage(language.prefix)"
            >
              {{ language.name }}
            </span>
          </div>
        </transition>
      </div>
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
      isLangExtended: false,
      languages: {
        CZ: "Czech",
        EN: "English",
        ES: "Spanish",
      },
      dropdownLanguages: [
        {
          id: 1,
          name: "English",
          prefix: "EN",
        },
        {
          id: 2,
          name: "Czech",
          prefix: "CZ",
        },
        {
          id: 3,
          name: "Spanish",
          prefix: "ES",
        },
      ],
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
    langDropdown() {
      this.isLangExtended = !this.isLangExtended;
    },
    changeLanguage(lang) {
      this.$store.state.lang = lang;
      window.location.href = "/" + lang;
    },
    closeLangDropdown() {
      this.isLangExtended = false;
    },
    linkClick() {
      if (this.windowWidth <= 880) {
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
          let outside = true;
          if (event.target.classList.contains("dropdown")) {
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
  justify-content: space-between;
  @media (max-width: 1444px) {
    padding: 55px calc(min(80px, 10vw));
  }
  .header-image-container {
    display: flex;
    img {
      min-width: 200px;
      @media (max-width: 768px) {
        min-width: 120px;
        min-height: 80px;
      }
      @media (max-width: 1280px) {
        width: 60%;
      }
    }
    @media (max-width: 1080px) {
      a,
      img {
        min-width: 90px;
        min-height: 20px;
        width: 90%;
      }
    }
  }
  .header-navigation-bar {
    display: flex;
    padding-top: 7px;
    justify-content: flex-end;
    align-items: flex-start;
    @media (min-width: 1280px) {
      margin-left: 64px;
    }
    .header-nav-block {
      user-select: none;
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
          &:not(.language-selector) {
            font-family: $semiBoldFont;
            border-bottom: 2px solid #000000;
          }
        }
        &.link-dropdown {
          font-family: $semiBoldFont;
        }
      }
    }
    .language-selector {
      padding: 4px 12px;
      border: 1px solid #c0554b;
      border-radius: 5px;
      margin-top: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      position: relative;
      min-width: 88px;
      transition: 0.2s ease-in-out;
      transform-origin: top;
      margin-left: 10px;
      @media (max-width: 769px) {
        margin-left: 15px;
      }
      .reversed {
        transition: 0.25s;
        transform: rotate(180deg);
      }
      .language-dropdown {
        position: absolute;
        transform-origin: top;
        top: 100%;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        background: #c0554b;
        transition: 0.25s;
        .dropdown-element {
          width: 100%;
          color: white;
          padding: 6px 4px;
          &:hover {
            font-weight: 600;
          }
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
    padding: 30px 30px;
  }
  @media (max-width: 1050px) {
    padding: 25px 25px;
    .header-navigation-bar {
      width: 100%;
    }
    .header-image-container {
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 880px) {
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
        padding-bottom: 12vh;
        gap: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: white;
        z-index: 99;
        overflow-y: auto;
        .header-nav-block {
          font-size: clamp(16px, 7vw, 36px);
          .header-button-with-dropdown {
            width: 100%;
          }
          img {
            width: 18px;
            height: 13px;
          }
        }
        .dd-link {
          &:not(.language-selector) {
            margin: 3vh 0;
          }
        }
      }
    }
    .header-image-container {
      height: 80px;
      width: 50%;
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
