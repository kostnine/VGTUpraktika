<template>
  <div class="header-container">
    <div class="header-image-container">
      <router-link to="/"
        ><img src="@/assets/logo.png" alt="logo"
      /></router-link>
    </div>
    <nav class="header-navigation-bar">
      <router-link to="/regulations" class="header-nav-block"
        >Regulations in Europe</router-link
      >
      <div
        class="header-nav-block dropdown"
        @click="dropdownExtended = !dropdownExtended"
      >
        Smoke Alarms Information
        <img
          :class="dropdownExtended ? 'flipped' : 'non-flipped'"
          src="@/assets/icons/arrow_down.svg"
          alt="dropdown"
        />
      </div>
      <router-link to="/facts" class="header-nav-block"
        >Important Facts</router-link
      >
      <router-link to="/downloads" class="header-nav-block"
        >Download Section</router-link
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
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
.header-container {
  display: flex;
  height: 0;
  width: 100%;
  padding: 0 160px;
  box-sizing: border-box;
  position: absolute;
  top: 10px;
  z-index: 100;
  @media (max-width: 1280px) {
    padding: 0 80px;
  }
  .header-image-container {
    width: 40%;
    display: flex;
    @media (max-width: 1280px) {
      width: 35%;
    }
  }
  .header-navigation-bar {
    width: 60%;
    // border: 1px solid black;
    display: flex;
    padding-top: 7px;
    align-items: flex-start;
    justify-content: flex-end;
    .header-nav-block {
      font-size: 16px;
      text-decoration: none;
      color: black;
      font-family: $mainFont;
      font-weight: 400;
      // border: 1px solid black;
      min-width: 20%;
      padding: 8px 8px;
      &:hover {
        font-family: $semiBoldFont;
        border-bottom: 2px solid #000000;
      }
    }
    .dropdown {
      cursor: pointer;
      .flipped {
        transition: 0.3s;
        transform: rotate(180deg);
      }
      .non-flipped {
        transition: 0.3s;
        transform: rotate(0deg);
      }
    }
  }
}
</style>
