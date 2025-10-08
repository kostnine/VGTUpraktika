<template>
  <div class="types-page-container">
    <PageHeader
      image="images/hand_detector.jpg"
      title="header.about"
      content="types.which"
      buttonText="types.learn_more"
      scrollTo="types"
      break="false"
    />
    <div class="types-page-main-container">
      <div class="main-header">
        <span class="main-header-title" id="types">{{
          toLocal("types.how_to_choose")
        }}</span>
        <div class="main-header-content centered-row">
          <span v-html="toLocal('types.certified')"></span>
          <div class="image-container">
            <img src="@/assets/images/C_sign.svg" alt="c_sign" />
          </div>
        </div>
        <div class="main-header-item">
          <div class="main-content-image">
            <img src="@/assets/images/battery.jpg" alt="linked" />
          </div>
          <div class="main-content-text">
            <span
              class="content-text-block"
              v-html="toLocal('types.battery')"
            ></span>
            <span class="content-text-block"
              >{{ toLocal("types.replacable") }}
            </span>
            <span class="content-text-block">{{
              toLocal("types.lifetime")
            }}</span>
          </div>
        </div>
        <div class="main-header-content">
          <div class="column-div">
            <span
              class="whole-text"
              v-html="toLocal('types.interconnected')"
            ></span>
            <div class="separator"></div>
            <span
              class="whole-text"
              v-html="toLocal('types.wireless_int')"
            ></span>
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="main-content-red-bar">
          <img src="@/assets/images/smoke.png" alt="smoke" />
        </div>
        <div class="main-content-item first">
          <div class="main-content-image">
            <img src="@/assets/images/types_smoke_detector.png" alt="linked" />
          </div>
          <div class="main-content-text">
            <span class="content-text-title">{{
              toLocal("types.linked")
            }}</span>
            <span class="content-text-block">{{
              toLocal("types.property")
            }}</span>
            <span class="content-text-block"
              >{{ toLocal("types.all_alarms") }}
            </span>
            <span class="content-text-block">{{
              toLocal("types.hardwired")
            }}</span>
            <span class="content-text-block">{{
              toLocal("types.multiple_storey")
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="facts-share">
          <span class="share-title">{{ toLocal("facts.share_story") }}</span>
        <button @click="mailto">info@eurofsa.org</button>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "TypesPage",
  components: {
    PageHeader,
  },
  metaInfo: {
    title: "About Smoke Alarms",
  },
  methods: {
    mailto() {
      window.location.href = "mailto:info@eurofsa.org";
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables";
.types-page-container {
  font-family: $mainFont;
  width: 100%;
  .types-page-main-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .types-page-main-nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 90px;
      padding: 0 160px 0 160px;
      padding-top: 80px;
      @media (max-width: 1280px) {
        padding: 0 80px 0 80px;
        margin: 16px;
      }
      @media (max-width: 768px) {
        margin: 0;
        padding: 0;
      }
      .main-nav-clickable {
        box-sizing: border-box;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 24px;
        background: #dce3ef;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #1e1826;
        transition: 0.1s;
        flex-wrap: nowrap;
        white-space: nowrap;
        @media (max-width: 768px) {
          flex-wrap: break-word;
          white-space: initial;
        }
        max-width: 50%;
        svg {
          stroke: #1e1826;
          position: absolute;
          &.arrow-left {
            left: 16px;
          }
          &.nav-arrow-right {
            right: 16px;
          }
        }
        span {
          text-decoration: dashed;
          text-decoration: none;
        }
        .text-right {
          padding-right: 32px;
          @media (max-width: 768px) {
            padding-right: 4px;
          }
        }
        .text-left {
          padding-left: 32px;
          @media (max-width: 768px) {
            padding-left: 4px;
          }
        }
        &:hover {
          background-color: $secondaryColor;
          color: white;
          font-family: $semiBoldFont;
          svg {
            stroke: white;
            stroke-width: 2px;
          }
        }
      }
    }
  }
}
.main-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 0 160px 0 160px;
  padding-top: 80px;
  padding-bottom: 70px;
  @media (max-width: 1280px) {
    padding: 0 80px 70px 80px;
  }
  @media (max-width: 768px) {
    padding: 70px 10vw;
  }
  .main-header-title {
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    font-family: $semiBoldFont;
    text-align: center;
    color: #1e1826;
    margin-bottom: 74px;
    margin-top: 74px;
  }
  .main-header-content {
    font-size: 24px;
    line-height: 32px;
    width: 90%;
    text-align: start;
    color: #1e1826;
    display: flex;
    &.centered-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      width: 90%;
      span {
        width: 80%;
        display: inline-block;
        font-size: 18px;
      }
      @media (max-width: 768px) {
        flex-direction: column;
        span {
          width: 100%;
        }
      }
    }
    .column-div {
      .whole-text {
        display: inline-block;
        font-size: 18px;
      }
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        // width: 100%;
        // display: flex;
      }
    }
    span {
      // width: 95%;
    }
    .separator {
      height: 16px;
      width: 100%;
    }
    .image-container {
      display: flex;
      justify-content: flex-end;
      width: 20%;
      @media (max-width: 1024px) {
        width: 30%;
        justify-content: flex-end;
        margin-top: 32px;
      }
      @media (max-width: 768px) {
        width: initial;
      }
    }
  }
}
.main-header-item {
  margin-top: 70px;
  margin-bottom: 70px;
  font-size: 20px;
  line-height: 28px;
  color: #1e1826;
  display: flex;
  box-sizing: border-box;
  padding: 16px;
  background-color: #fbf3ed;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 95%;
  @media (max-width: 1280px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 8px;
  }
  .main-content-image {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      width: 80%;
      padding: 8px;
    }
    img {
      width: 100%;
      @media (max-width: 768px) {
        object-fit: fill;
      }
    }
  }
}
.main-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  .main-content-red-bar {
    background-color: $mainColor;
    width: 100%;
    height: 300px;
    position: absolute;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: none;
      object-position: 0% 61%;
      @media (max-width: 1280px) {
        object-position: 50% 61%;
      }
    }
  }
  .main-content-item {
    display: flex;
    box-sizing: border-box;
    padding: 16px;
    background-color: #faf7f5;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 88%;
    @media (max-width: 1280px) {
      width: 90%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding: 8px;
    }
    &.first {
      margin: 0 auto;
      margin-top: 100px;
    }
    &:not(.first) {
      margin: 21px auto;
    }
    .main-content-image {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 80%;
        padding: 8px;
      }
      img {
        width: 100%;
        @media (max-width: 768px) {
          object-fit: fill;
        }
      }
    }
  }
}
.main-content-text {
  width: 67.5%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  color: #1e1826;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: $mainFont;
  @media (max-width: 768px) {
    width: 90%;
  }

  .content-text-title {
    font-size: 24px;
    line-height: 32px;
    font-family: $semiBoldFont;
    margin-bottom: 13px;
  }
  .content-text-block {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 16px;
  }
}
.semibold {
  display: inline;
  font-family: $semiBoldFont;
  font-weight: 500;
}
</style>
