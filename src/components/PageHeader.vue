<template>
  <div class="header-component">
    <div class="header-text-half">
      <span class="header-title">{{ titleText }}</span>
      <span class="header-content">{{ contentText }}</span>
      <span class="header-button" @click="scroll(scrollToId)">
        {{ buttonTextContent
        }}<img
          class="types-header-down-arrow"
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
  .header-text-half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    height: 100%;
    width: 50%;
    .header-title {
      font-family: $semiBoldFont;
      font-size: 56px;
      line-height: 72px;
    }
    .header-content {
      font-size: 24px;
      line-height: 32px;
    }
    .header-button {
      position: relative;
      width: 381px;
      height: 64px;
      font-size: 24px;
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
        right: 40px;
        margin-left: 24px;
      }
      &:hover {
        background-color: $secondaryColor;
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
    img {
      width: 80%;
      z-index: 1;
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
    height: 1280px;
    .header-text-half {
      margin-top: -320px;
      width: 100%;
      text-align: center;
      align-items: center;
      z-index: 1;
    }
    .header-image-half {
      margin-top: -160px;
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
