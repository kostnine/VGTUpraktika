<template>
  <div class="facts-page-container">
    <PageHeader
      image="images/green_block.jpg"
      title="Important facts"
      content="Some surprising facts that you may not know!"
      buttonText="Read more"
      scrollTo="facts"
    />
    <div class="facts-page-main">
      <div class="facts-main-header">
        <span class="header-title" id="facts"
          >Smoke Alarms Have One Major <br />Benefit – They Save Lives!</span
        >
        <div class="header-list">
          <span class="header-list-title">Did you know?</span>
          <span class="header-list-item"
            ><div class="arrow-right"></div>
            By installing a smoke alarm, you reduce the chances of a fire
            occurring in your house by 75 percent.</span
          >
          <span class="header-list-item"
            ><div class="arrow-right"></div>
            By having a smoke alarm at your house, you ae 4 times less likely to
            die.</span
          >
          <span class="header-list-item"
            ><div class="arrow-right"></div>
            Deaths occur in 10 percent of homes that have no smoke alarms.</span
          >
        </div>
      </div>
      <div class="facts-main-container">
        <div class="red-bar"></div>
        <div class="facts-item">
          <div class="item-title">
            <span class="item-text-title">Success stories</span>
            <span class="item-text-content"
              >These smoke alarms have saved lives.<br />
              Some of them are still working!</span
            >
          </div>
          <div class="item-window">
            <div class="image-container" v-for="n in 4" v-bind:key="n">
              <img
                :src="require('@/assets/images/facts/' + n + '.jpg')"
                alt="burnt"
              />
            </div>
          </div>
        </div>
        <div class="facts-share">
          <span class="share-title">Share your story with us!</span>
          <button @click="mailto">info@eurofsa.org</button>
        </div>
        <div class="facts-how">
          <span class="how-title">How Do Smoke Alarms Work?</span>
          <div class="how-item">
            <div class="image-container">
              <img src="@/assets/images/facts/foto9.jpg" alt="alarm" />
            </div>
            <div class="column-text-list">
              <span class="text-in-list"
                >All optical smoke alarms have a smoke chamber with a light and
                the receiver.</span
              >
              <span class="text-in-list"
                >As soon as smoke enters the smoke chamber and diffuses the
                lights, the smoke alarm will sound.</span
              >
            </div>
          </div>
          <div class="how-item">
            <div class="image-container">
              <img src="@/assets/images/facts/foto8.jpg" alt="alarm" />
            </div>
            <div class="column-text-list">
              <span class="text-with-bullet first"
                ><div class="colored-block">1</div>
                Smoke entry</span
              >
              <span class="text-with-bullet"
                ><div class="colored-block">2</div>
                Insect screen</span
              >
              <span class="text-with-bullet"
                ><div class="colored-block">3</div>
                Light transmitter</span
              >
              <span class="text-with-bullet"
                ><div class="colored-block">4</div>
                Light receiver</span
              >
              <span class="text-with-bullet"
                ><div class="colored-block">5</div>
                EMC shield</span
              >
              <span class="text-with-bullet last"
                ><div class="colored-block">6</div>
                Ambient light diaphragm</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "FactsPage",
  components: {
    PageHeader,
  },
  methods: {
    mailto() {
      window.location.href = "mailto:info@eurofsa.org";
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables";
.facts-page-container {
  font-family: $mainFont;
  color: #1e1826;
}
.facts-page-main {
  display: flex;
  flex-direction: column;
}
.facts-main-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
  .header-title {
    max-width: 60%;
    font-size: 48px;
    line-height: 72px;
    margin: 0 auto;
    margin-bottom: 55px;

    text-align: center;
    font-family: $semiBoldFont;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  .header-list {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 30px calc(min(160px, 10vw));

    .header-list-title {
      font-size: 24px;
      line-height: 32px;
      font-family: $semiBoldFont;
      text-align: start;
    }
    .header-list-item {
      display: flex;
      padding: 15px 0;
      align-items: center;
      font-size: 18px;
    }
  }
  .arrow-right {
    background: none;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    height: 15px;
    width: 15px;
    min-width: 15px;
    min-height: 15px;
    margin-right: 15px;
  }
}
.facts-main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .red-bar {
    background-color: $mainColor;
    width: 100%;
    height: 300px;
    position: absolute;
    z-index: -1;
  }
  .facts-item {
    margin-top: 40px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    width: 90%;
    background: #faf7f5;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 10px;
    .item-title {
      display: flex;
      flex-direction: column;
      height: 20%;
      align-items: center;
      .item-text-title {
        font-size: 32px;
        line-height: 32px;
        text-align: center;
        font-family: $semiBoldFont;
        margin: 30px 0;
      }
      .item-text-content {
        font-size: 20px;
        line-height: 42px;
        margin-bottom: 40px;
        text-align: center;
      }
    }
    .item-window {
      display: grid;
      box-sizing: border-box;
      grid-template-columns: auto auto;
      grid-auto-rows: auto;
      grid-auto-columns: auto;
      grid-column-gap: 50px;
      grid-row-gap: 30px;
      padding: 50px;
      padding-top: 0;
      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        border-radius: 15px;
        img {
          border-radius: 15px;
          height: 100%;
          width: 100%;
        }
      }
      @media (max-width: 768px) {
        grid-template-columns: auto;
        padding: 8px;
      }
    }
  }
}
.facts-share {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
  background: #c0554b;
  .share-title {
    font-size: 48px;
    line-height: 72px;
    font-family: $semiBoldFont;
    text-align: center;
    margin-top: 55px;
    color: #ffffff;
  }
  button {
    background: #fbf3ed;
    border-radius: 5px;
    border: none;
    width: 30%;
    height: 64px;
    margin: 30px auto;
    font-family: $semiBoldFont;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #1e1826;
    cursor: pointer;
    &:hover {
      background: #483a5b;
      color: white;
    }
    @media (max-width: 768px) {
      width: 60%;
    }
  }
}
.facts-how {
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-bottom: 78px;
  .how-title {
    font-size: 32px;
    line-height: 32px;
    font-family: $semiBoldFont;
    margin: 65px auto;
    text-align: center;
  }
  .how-item {
    display: flex;
    padding: 9px;
    width: 100%;
    align-items: center;
    .image-container {
      width: 40%;
      height: 100%;
      margin-right: 42px;
      img {
        border-radius: 10px;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      .image-container {
        width: 100%;
        margin: 0;
      }
    }
    .column-text-list {
      display: flex;
      flex-direction: column;
      width: 60%;
      height: 100%;
      justify-content: center;
      @media (max-width: 768px) {
        margin-top: 16px;
      }
      .text-in-list {
        font-size: 20px;
        line-height: 24px;
        color: #1e1826;
        margin: 12px 0;
      }
      .text-with-bullet {
        font-size: 20px;
        line-height: 24px;
        color: #1e1826;
        margin: 4px 0;
        display: flex;
        .colored-block {
          background: #c0554b;
          opacity: 0.7;
          min-width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          font-size: 18px;
          line-height: 28px;
          font-family: $semiBoldFont;
          text-align: center;
          color: #ffffff;
          border-radius: 3px;
        }
        &.first {
          margin: 0;
          margin-bottom: 4px;
        }
        &.last {
          margin: 0;
          margin-top: 4px;
        }
      }
    }
  }
}
</style>
