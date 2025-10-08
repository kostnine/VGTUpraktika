<template>
    <div class="facts-page-container">
      <PageHeader
        image="images/4.jpg"
        title="header.success"
        content="header.saved-lives"
        buttonText="facts.read_more"
        scrollTo="facts-page-main"
      />
      <div class="facts-page-main" id="facts-page-main">
        <div class="facts-main-container">
          <div class="facts-how">
  
            <!-- <div class="how-item">
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
            </div> -->
          </div>
          <div class="facts-item">
          <div class="red-bar"></div>
            <div class="item-title">
            </div>
            <div class="item-window">
              <div class="image-container" v-for="n in 3" v-bind:key="n">
                <img
                  :src="require('@/assets/images/facts/' + n + '.jpg')"
                  alt="burnt"
                />
              </div>
            </div>
          </div>
            <div class="facts-banner">
                <span class="upper">{{ toLocal('stories.examples') }}</span>
                <span class="lower">{{ toLocal('stories.following') }}</span>
            </div>
          <div class="facts-stories">
            <div class="stories-container">
              <div class="story" :class="story.class" v-for="story in storiesStack" :key="story.title">
                <div class="story-title">{{ toLocal(story.title) }}</div>
                <div class="story-content">
                  <div class="text">{{ toLocal(story.text_1) }}</div>
                  <div class="text" v-if="story.text_2">
                    {{ toLocal(story.text_2) }}
                  </div>
                </div>
              </div>
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
    name: "FactsPage",
    metaInfo: {
      title: "Important facts",
    },
    components: {
      PageHeader,
    },
    methods: {
      mailto() {
        window.location.href = "mailto:info@eurofsa.org";
      },
    },
    data(){
      return{
        storiesStack:[
          {
            'title': 'stories.paris',
            'text_1': 'stories.paris_text',
            'class': 'half yellow'
          },
          {
            'title': 'stories.manchester',
            'text_1': 'stories.manchester_text',
            'text_2': 'stories.manchester_text_1',
            'class': 'half red'
          },
          {
            'title': 'stories.rome',
            'text_1': 'stories.rome_text',
            'class': 'third blue'
          },
          {
            'title': 'stories.berlin',
            'text_1': 'stories.berlin_text',
            'class': 'third yellow'
          },
          {
            'title': 'stories.stockholm',
            'text_1': 'stories.stockholm_text',
            'class': 'third blue'
          },
          {
            'title': 'stories.copenhagen',
            'text_1': 'stories.copenhagen_text',
            'class': 'half d-blue'
          },
          {
          'title': 'stories.poland',
          'text_1': 'stories.poland_text',
          'class': 'half yellow'
          },
        ]
      }
    }
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
      max-width: 45%;
      font-size: 48px;
      line-height: 72px;
      margin: 0 auto;
      margin-bottom: 55px;
  
      text-align: center;
      font-family: $semiBoldFont;
      @media (max-width: 768px) {
        max-width: 100%;
        font-size: 36px;
        padding: 0 10vw;
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
      display: flex;
      margin-right: 10px;
      padding-top: 2px;
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
      background: #FBF3ED;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      border-radius: 10px;
      // position: relative;
      .red-bar{
        width: 100%;
        left: 0;
        margin-top: -40px;
      }
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
        display: flex;
        box-sizing: border-box;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-auto-columns: auto;
        grid-column-gap: 50px;
        grid-row-gap: 30px;
        padding: 50px;
        flex-wrap: wrap;
        justify-content: center;
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 45%;
          flex-grow: 1;
          max-width: 100%;
          flex-wrap: wrap;
          max-height: 100%;
          box-sizing: border-box;
          border-radius: 15px;
          @media(max-width: 768px){
            width: 100%;
            &:last-child{
              width: 100%;
              flex-grow: 1;
            }
          }
          &:last-child {
            width: 50%;
            flex-grow: 0;
            @media(max-width: 768px){
              width: 100%;
            }
          }
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
  .facts-how {
    display: flex;
    flex-direction: column;
    width: 90%;
    .how-title {
      font-size: 32px;
      line-height: 32px;
      font-family: $semiBoldFont;
      margin: 65px auto;
      text-align: center;
    }
    .how-container {
      display: flex;
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
      .how-images {
        display: flex;
        flex-direction: column;
        width: 40%;
        @media (max-width: 768px) {
          width: 100%;
        }
        .image-container {
          width: 100%;
          height: 100%;
          img {
            border-radius: 10px;
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          margin-bottom: 18px;
        }
      }
      .how-text {
        margin-left: 42px;
        width: 50%;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
          width: 100%;
          margin-left: 0;
        }
        .column-text-list {
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          @media (max-width: 768px) {
            &.bullets {
              flex-wrap: wrap;
              max-height: 115px;
              justify-content: center;
              .text-with-bullet {
                width: 50%;
                word-wrap: wrap;
                .colored-block {
                  min-width: 23px;
                  height: 23px;
                }
                &.last {
                  margin: 0;
                }
                &.first {
                  margin: 0;
                }
                margin-top: 4px;
                margin-bottom: 4px;
              }
            }
          }
          .text-in-list {
            font-size: clamp(16px, 1vw, 20px);
            line-height: 24px;
            color: #1e1826;
            margin: 12px 0;
          }
          .text-with-bullet {
            line-height: 24px;
            color: #1e1826;
            margin: 4px 0;
            display: flex;
            .colored-block {
              background: #c0554b;
              min-width: 30px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 10px;
              font-size: clamp(16px, 1vw, 20px);
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
  .facts-banner{
    width: 100%;
    background-color: #DCE3EF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: clamp(10px, 2.5vw, 20px);
    padding: clamp(20px, 2.5vw, 40px) 0;
    .upper{
      font-family: $semiBoldFont;
      font-size: clamp(28px, 2.5vw, 32px);
      width: 50%;
      flex-wrap: wrap;
      text-align: center;
      color: #1E1826;
      @media(max-width: 768px){
        width: 85%;
      }
    }
    .lower{
      font-size: clamp(16px, 1vw, 20px);
      color: #1E1826;
      width: 80%;
      @media(max-width: 768px){
        text-align: center;
      }
    }
  }
  .facts-stories{
    width: 90%;
    // padding: 0 calc(min(160px, 10vw));
  }
  .stories-container{
    width: 100%;
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    padding: 40px 0;
    gap: clamp(20px, 2.5vw, 40px);
    .story{
      padding: clamp(12px , 2.5vw, 28px);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      .story-content{
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .story-title{
        font-size: clamp(16px , 2.5vw, 24px);
        font-family: $semiBoldFont;
      }
    }
    .half{
      width: 45%;
      flex-grow: 1;
      @media(max-width: 768px){
        width: 100%;
      }
    }
    .third{
      width: calc(90% / 3);
      flex-grow: 1;
      @media(max-width: 768px){
        width: 100%;
      }
    }
    .full{
      width: 100%;
    }
  }
  
  .yellow{
    background-color: #FBF3ED;
    color: #1E1826;
  }
  .red{
    background-color: #C0554B;
    color: white;
  }
  .blue{
    background-color: #DCE3EF;
    color: #1E1826;
  }
  .d-blue{
    background-color: #483A5B;
    color: white;
  }
  </style>
  <style lang="scss">
  @import "@/assets/scss/variables";
  .facts-share {
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 100%;
    background: #c0554b;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 0 5vw;
    }
    .share-title {
      font-size: 48px;
      line-height: 72px;
      font-family: $semiBoldFont;
      text-align: center;
      margin-top: 55px;
      color: #ffffff;
      @media (max-width: 768px) {
        font-size: 26px;
        line-height: 48px;
      }
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
        width: 70%;
        height: 40px;
      }
    }
  }
  </style>