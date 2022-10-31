<template>
  <div class="landing-page">
    <section class="date" id="smokealarmssavelives">
      <div class="text">
        <h1>European</h1>
        <h1><strong>Smoke Alarm</strong> Day</h1>
        <h2>18th November 2022</h2>
        <span class="hashtag">#smokealarmssavelives</span>
      </div>
      <div class="illustrations">
        <div class="smoke-detector-container">
          <img
            class="smoke-detector"
            src="@/assets/images/smoke_detector.png"
            alt="Smoke detector image"
          />
        </div>
        <div class="circle">
          <div class="red-circle"></div>
          <img class="smoke" src="@/assets/images/smoke.png" alt="Smoke" />
        </div>
      </div>
    </section>
    <section class="message" id="message">
      <div class="content">
        <div
          class="video"
          @mouseover="currentlyHoveringVideo = 'mainMessageVideo'"
          @mouseleave="currentlyHoveringVideo = ''"
        >
          <video ref="mainMessageVideo">
            <source
              src="@/assets/videos/landingpage/2.FIRESAFETY_Cooking.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="text">
          <h3>Messages of Support</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            mattis suspendisse dolor purus ipsum pellentesque.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. In ut mattis suspendisse
            dolor purus ipsum pellentesque.
          </p>
          <div class="button-container">
            <button>Know More about Smoke Alarms</button>
            <button class="secondary">
              Regulations for Smoke Alarms in Europe
            </button>
          </div>
        </div>
      </div>
      <div class="footer">
        <div
          class="video"
          v-for="(video, index) in videos"
          :key="index"
          @mouseover="currentlyHoveringVideo = `video-${index}`"
          @mouseleave="currentlyHoveringVideo = ''"
        >
          <video :ref="`video-${index}`">
            <source :src="require(`@/assets/${video.link}`)" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
    <section class="supporters" id="supporters">
      <div class="modal">
        <div class="modal-content">
          <h3>This campaign is supported by:</h3>
          <div class="supporter-container">
            <a
              :href="supporter.url"
              target="_blank"
              rel="noopener noreferrer"
              class="supporter"
              v-for="(supporter, index) in supporters"
              :key="index"
            >
              <img :src="require(`@/assets/${supporter.logo}`)" alt="" />
              <span class="website">
                {{ supporter.url_text }}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="red-circle"></div>
    </section>
    <section class="information" id="information">
      <h3>Information you need to know about smoke alarms</h3>
      <span>Click on one of the cards and find out more!</span>
      <div class="card-container">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <div class="card-content">
            <div class="text">
              {{ card.text }}
            </div>
            <img
              v-if="card.img != ''"
              :src="require(`@/assets/${card.img}`)"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LandingPageView",
  data() {
    return {
      videos: [
        {
          link: "videos/landingpage/4.FIRESAFETY_SOCKET.mp4",
        },
        {
          link: "videos/landingpage/6.FireSafety-Christmas lights.mp4",
        },
        {
          link: "videos/landingpage/3.FIRESAFETY_PHONE_.mp4",
        },
        {
          link: "videos/landingpage/1.FIRESAFETY_CANDLES.mp4",
        },
        {
          link: "videos/landingpage/5.FIRESAFETY_TONGS.mp4",
        },
      ],
      supporters: [
        {
          url: "https://www.smartwaresgroup.com",
          url_text: "www.smartwaresgroup.com",
          logo: "images/supporters/Smartwares Group_fc.png",
        },
        {
          url: "https://www.eielectronics.com",
          url_text: "www.eielectronics.com",
          logo: "images/supporters/Ei-Electronics-Logo.png",
        },
        {
          url: "https://www.fireangel.co.uk",
          url_text: "www.fireangel.co.uk",
          logo: "images/supporters/FA-Logo-Orange.png",
        },
        {
          url: "https://www.something.org",
          url_text: "www.something.org",
          logo: "images/supporters/one_more_logo.png",
        },
        {
          url: "https://www.f-e-u.org",
          url_text: "www.f-e-u.org",
          logo: "images/supporters/feu-logo.png",
        },
        {
          url: "https://www.europeanfiresafetyalliance.org",
          url_text: "www.europeanfiresafetyalliance.org",
          logo: "images/supporters/efsa-logo.png",
        },
      ],
      cards: [
        { text: "Types of smoke alarms", img: "images/cards/detector.png" },
        { text: "Where to place smoke alarms", img: "" },
        { text: "How to look after smoke alarms", img: "" },
      ],
      currentlyHoveringVideo: "",
    };
  },
  watch: {
    currentlyHoveringVideo: function (newVal, oldVal) {
      if (this.currentlyHoveringVideo != "") {
        let video = this.$refs[this.currentlyHoveringVideo];
        if (Array.isArray(video)) video = video[0];
        console.log(newVal, oldVal);
        if (oldVal != "") {
          let oldVideo = this.$refs[oldVal];
          if (Array.isArray(oldVideo)) oldVideo = oldVideo[0];
          oldVideo.controls = "";
        }
        video.controls = "controls";
      } else {
        if (oldVal != "") {
          let oldVideo = this.$refs[oldVal];
          if (Array.isArray(oldVideo)) oldVideo = oldVideo[0];
          oldVideo.controls = "";
        }
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.landing-page {
}
h1 {
  font-size: clamp(24px, 5vw, 96px);
  margin: 0;
  color: #000;
  font-weight: 500;
}
h2 {
  color: $mainColor;
  font-size: clamp(24px, 4.5vw, 80px);
  margin: 2rem 0 0 0;
  font-weight: 500;
}
h3 {
  font-size: clamp(24px, 4vw, 64px);
  margin: 1rem 0;

  font-family: $semiBoldFont;
}
.hashtag {
  margin-top: 5rem;
  font-size: 48px;
  font-size: clamp(24px, 2.5vw, 48px);
}
section {
  display: flex;
  height: 100vh;
  padding: 0 $paddingHorizontal;
}
.date {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: calc(100vh - 136px);
  padding: 0 0 0 $paddingHorizontal;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    height: 100%;
  }
  @media (max-width: 768px) {
    padding: 0 $paddingHorizontalMobile;
    flex-direction: column;
    .text {
      width: 100%;
      padding: 0 4rem;
    }
    h2 {
      margin: 1rem 0 0;
    }
    .hashtag {
      margin: 2rem 0 0;
    }
    .illustrations {
      width: 100%;
      .smoke-detector-container {
        margin-top: 0px;
        left: 0rem;
        right: 0;
        top: -2rem;
        margin: auto;
      }
      .red-circle {
        width: 80vw;
        height: 80vw;
        left: 0;
        right: 0;
        margin: auto;
        bottom: -49vw;
      }
      .smoke {
        left: -15rem;
      }
    }
  }
}
.illustrations {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.smoke-detector-container {
  position: relative;
  height: 35vw;
  width: 35vw;
  min-width: 300px;
  min-height: 300px;
  max-height: 460px;
  max-width: 460px;
  margin-top: -8.5rem;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 95%;
    height: 94%;
    border-radius: 50%;
    box-shadow: -3px 14px 14px 11px #0000002b;
  }
}
.smoke-detector {
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 1px solid;
  transform: rotate(-16deg);
}
.circle {
  position: absolute;
  // right: -$paddingHorizontal;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .red-circle {
    position: absolute;
    height: 1327px;
    width: 1327px;
    z-index: -1;
    left: 0;
    top: 1rem;
    max-width: 1327px;
    max-height: 1327px;
    border-radius: 50%;
    background: $mainColor;
  }
  .smoke {
    left: 3%;
    right: 0;
    margin: auto;
    bottom: -42%;
    height: 150%;
    width: 150%;
  }
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
}
.message {
  background-color: #fbf3ed;
  padding: 0;
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px calc(min(160px, 10vw));
    height: 100%;
    .video {
      display: flex;
      flex: 3;
      height: 30vw;
      max-height: 500px;
      border-radius: 20px;
      margin: 0;
      overflow: hidden;
      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      font-size: clamp(24px, 3vw, 64px);
    }
    p {
      font-size: clamp(16px, 1.4vw, 24px);
    }
    .text {
      display: flex;
      flex-direction: column;
      flex: 2;
      padding: 0 0 0 calc(min(2rem, 1vw));
      margin-left: calc(min(6rem, 3vw));
      height: 30vw;
      max-height: 500px;
      margin-top: 3rem;
    }
    .button-container {
      display: flex;
      justify-content: space-between;
      margin: 2rem 0px;
    }
    button {
      max-width: 271px;
      width: 80%;
      height: 56px;
      background: $mainColor;
      border-radius: 5px;
      border: none;
      color: white;
      font-weight: 700;
      cursor: pointer;
      &.secondary {
        background: $secondaryColor;
      }
      &:first-child {
        margin-right: 1rem;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $mainColor;
    padding: 2rem calc(min(160px, 10vw));
    .video {
      height: calc(min(180px, 10vw));
      min-width: calc(min(180px, 10vw));
      margin: 0 1rem;
      border-radius: 15px;
      overflow: hidden;
      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 1050px) {
    min-height: 100vh;
    height: auto;
    .content {
      flex-direction: column;
      padding: 2rem calc(min(160px, 10vw));
      .video {
        width: 100%;
      }
      .text {
        margin-left: 0;
        padding-left: 0;
        .button-container {
          margin-bottom: 0;
        }
      }
      h3 {
        text-align: center;
      }
    }
  }
  @media (max-width: 768px) {
    min-height: 100vh;
    height: auto;
    .content {
      flex-direction: column;
      padding: 40px $paddingHorizontalMobile 20px;
      .text {
        margin-left: 0px;
        padding: 0;
      }
      h3 {
        text-align: center;
      }
      .button-container {
        margin: 1rem 0px;
        button {
          width: 46vw;
        }
      }
    }
    .footer {
      padding: 2rem $paddingHorizontalMobile;
      flex-wrap: wrap;
      .video {
        margin: 1rem;
        height: 180px;
        min-width: 180px;
        width: 40vw;
        &:first-child {
          margin: 1rem;
        }
        &:last-child {
          margin: 1rem;
        }
      }
    }
  }
  @media (max-width: 678px) {
    .footer {
      .video {
        height: 50vw;
        width: initial;
      }
    }
  }
}
.supporters {
  position: relative;
  padding: 100px $paddingHorizontal;
  overflow: hidden;
  h3 {
    margin: 0rem 0 5rem;
  }
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 3px 0px #00000052;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: white;
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 4rem 0;
    // padding: 115px;
    align-items: center;
  }
  .red-circle {
    position: absolute;
    background: $mainColor;
    z-index: -1;
    left: -14vw;
    bottom: -25vw;
    width: 55vw;
    height: 55vw;
    border-radius: 50%;
  }
  .supporter-container {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
  .supporter {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0rem 3rem;
    height: 17vw;
    max-height: 225px;
    width: 18vw;
    max-width: 275px;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    span {
      color: #0c2c39;
      text-decoration: none;
    }
    img {
      max-width: 100%;
    }
    &:link {
      text-decoration: none;
    }
    &:visited {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
    &:active {
      text-decoration: none;
    }
    &:hover {
      background: #fbf3ed;
      box-shadow: 0px 3px 10px 0px #0707073f;
    }
    &:active {
      box-shadow: 0px 2px 3px 0px #0000004f;
    }
  }
  @media (max-width: 1320px) {
    min-height: 100vh;
    height: auto;
  }
  @media (max-width: 768px) {
    min-height: 100vh;
    height: auto;
    padding: 50px $paddingHorizontalMobile;
    .modal-content {
      .supporter-container {
        .supporter {
          width: 271px;
          height: 225px;
        }
      }
    }
    .red-circle {
      left: -20%;
      bottom: -45%;
      width: 55vw;
      height: 55vw;
    }
    .supporter-container {
      flex-direction: row;
      .supporter {
        margin: 2rem 0;
      }
    }
  }
}
.information {
  background: #fbf3ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: white;
      border-radius: 15px;
      max-width: 400px;
      max-height: 400px;
      width: calc((100vw - 320px - 6rem) / 3);
      height: calc((100vw - 320px - 6rem) / 3);
      margin: 0 1rem;
      cursor: pointer;
      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
      overflow: hidden;
      transition: background-color 0.3s, box-shadow 0.3s;
      .text {
        font-size: clamp(16px, 2vw, 36px);
      }
      img {
        width: fit-content;
        max-width: 100%;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: calc(min(5vw, 4rem)) calc(min(5vw, 5rem));
        text-align: center;
      }
      &:hover {
        background: $mainColor;
      }
      &:active {
        box-shadow: 0px 2px 3px 0px #0000004f;
      }
    }
  }
  h3 {
    width: 44vw;
    text-align: center;
    margin: 3rem 0 0;
  }
  span {
    margin: 3rem 0 5rem;
  }
  @media (max-width: 1320px) {
    padding: 0 calc(min(160px, 10vw));
    .card-container {
      .card {
        width: calc((100vw - (calc(min(160px, 10vw)) * 2) - 6rem) / 3);
        height: calc((100vw - (calc(min(160px, 10vw)) * 2) - 6rem) / 3);
        .card-content {
          padding: calc(min(2vw, 2rem)) calc(min(4vw, 3rem));
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0 $paddingHorizontalMobile;
    min-height: 100vh;
    height: auto;
    padding-bottom: 5rem;
    .card-container {
      .card {
        width: 30vw;
        height: 30vw;
        min-height: 30vw;
        margin: 1rem;
        .card-content {
          padding: 1rem 2rem;
        }
      }
    }
  }
}
</style>
