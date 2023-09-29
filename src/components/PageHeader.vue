<template>
  <div class="header-component">
    <div class="header-text-half">
      <span class="header-title" v-html="toLocal(titleText)"></span>
      <span class="header-content" v-html="toLocal(contentText)"></span>
      <span
        :class="['header-button', { longtext: buttonTextContent.length > 27 }]"
        @click="scroll(scrollToId)"
      >
        {{ toLocal(buttonTextContent)
        }}<img
          class="header-down-arrow"
          src="@/assets/icons/arrow_down_white.svg"
          alt="down_arrow"
        />
      </span>
    </div>
    <div class="header-image-half">
      <img :src="require(`@/assets/${imagesrc}`)" alt="photo" />
    </div>
    <img
      class="cropped-circle"
      src="@/assets/images/Circle_red.svg"
      alt="circle"
    />
  </div>
</template>
<script>
export default {
  name: "PageHeader",
  props: ["image", "title", "content", "scrollTo", "buttonText"],
  data() {
    return {
      imagesrc: this.image,
      titleText: this.title,
      contentText: this.content,
      scrollToId: this.scrollTo,
      buttonTextContent: this.buttonText,
    };
  },
  methods: {
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
.header-component {
  position: relative;
  padding: 0 calc(min(160px, 10vw));
  color: #25112d;
  height: 1080px;
  background-color: $tetriaryColor;
  display: flex;
  font-family: $mainFont;
  overflow: hidden;
  @media (max-width: 1280px) {
    height: 800px;
  }
  @media (max-width: 878px) {
    height: 80vh;
    padding: 32px;
  }
  .header-text-half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    height: 100%;
    width: 50%;
    .header-title {
      font-family: $semiBoldFont;
      font-size: clamp(42px, 5vw, 56px);
      line-height: 72px;
      margin-bottom: 30px;
    }
    .header-content {
      font-size: clamp(20px, 3vw, 24px);
      line-height: 32px;
      max-width: 31rem;
    }
    .header-button {
      position: relative;
      width: 381px;
      max-width: 360px;
      height: 64px;
      font-size: 18px;
      line-height: 32px;
      font-family: $semiBoldFont;
      text-align: center;
      background-color: $mainColor;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      border-radius: 5px;
      margin-top: 75px;
      cursor: pointer;
      transition: 0.1s;
      z-index: 1;
      img {
        position: absolute;
        right: 15px;
      }
      &:hover {
        background-color: $secondaryColor;
      }
      &.longtext {
        display: flex;
        justify-content: flex-start;
        padding-left: 25px;
        @media (max-width: 768px) {
          padding-left: 10px;
          justify-content: start;
        }
      }
    }
  }
  .header-image-half {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    border-radius: 20px;
    img {
      border-radius: 20px;
      width: 80%;
      z-index: 1;
      filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.3));
      @media (max-width: 1280px) {
        width: 90%;
      }
    }
  }
}
.cropped-circle {
  position: absolute;
  z-index: 0;
  right: -10%;
  bottom: -50%;
  @media (max-width: 1280px) {
    right: -200px;
    top: 350px;
  }
  @media (max-width: 768px) {
    right: -300px;
    top: 550px;
  }
}
@media (max-width: 768px) {
  .header-component {
    flex-direction: column-reverse;
    height: fit-content;
    padding: 32px calc(min(160px, 10vw));
    .header-text-half {
      // margin-top: -320px;
      width: 100%;
      text-align: center;
      align-items: center;
      justify-content: flex-start;
      z-index: 1;
      .header-title {
        line-height: clamp(36px, 5vw, 72px);
        font-size: clamp(28px, 4vw, 56px);
        margin-bottom: 20px;
      }
      .header-button {
        margin-top: 10vw;
        width: 90vw;
      }
    }
    .header-image-half {
      margin-top: 0px;
      margin-bottom: 20px;
      width: 100%;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .cropped-circle {
      top: -900px;
      right: -400px;
    }
  }
}
</style>
