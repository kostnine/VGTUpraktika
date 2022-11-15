<template>
  <div class="landing-page">
    <section class="date" id="smokealarmssavelives">
      <div class="text">
        <h1 class="primary">European</h1>
        <h1><strong>Smoke Alarm</strong> Day</h1>
        <h2>18th November 2022</h2>
        <span class="hashtag">#smokealarmssavelives</span>
        <span class="under-hashtag"
          >This Campaign is part of European Fire Safety Week</span
        >
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
        <div class="video-container">
          <div class="video" v-if="windowWidth > 768">
            <swiper
              ref="swiper"
              :slides-per-view="1"
              :space-between="0"
              :allowTouchMove="false"
              direction="vertical"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide
                v-for="(video, index) in videoStack"
                :key="`${video.link}-${index}`"
              >
                <!-- <video
                  :ref="`mainMessageVideo-${index}`"
                  @mouseover="
                    currentlyHoveringVideo = `mainMessageVideo-${index}`
                  "
                  @mouseleave="currentlyHoveringVideo = ''"
                >
                  <source
                    :src="require(`@/assets/${video.link}`)"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video> -->
                <video-player
                  :ref="`mainMessageVideo-${index}`"
                  :options="{
                    autoplay: false,
                    controls: true,
                    sources: [
                      {
                        src: require(`@/assets/${video.link}`),
                        type: 'video/mp4',
                      },
                    ],
                  }"
                />
              </swiper-slide>
            </swiper>
            <!-- <div class="carousel" ref="carousel" >
                    
                </div> -->
          </div>
        </div>
        <div class="text">
          <h3>Messages of Support</h3>

          <p>
            Fire officers all over Europe support
            <span class="semibold">#smokealarmsaveslives</span>
            campaign.
          </p>
          <div class="button-container" v-if="this.windowWidth >= 768">
            <button @click="$router.push({ path: '/types' })">
              Find Out More About Smoke Alarms
            </button>
            <button
              class="secondary"
              @click="$router.push({ path: '/regulations' })"
            >
              Regulations for Smoke Alarms in Europe
            </button>
          </div>
        </div>
      </div>
      <div class="footer" v-if="this.windowWidth <= 768">
        <div
          class="video"
          v-for="(video, index) in windowWidth < 768 ? videos : footerVideos"
          :key="`bideo${index}`"
          :class="{ loading: isLoadingNewVideo }"
        >
          <transition name="fade" mode="out-in">
            <video-player
              v-if="windowWidth < 768"
              :ref="`video-${index}`"
              :options="{
                autoplay: false,
                controls: true,
                sources: [
                  {
                    src: require(`@/assets/${video.link}`),
                    type: 'video/mp4',
                  },
                ],
              }"
            />
            <img
              v-else
              :src="require(`@/assets/${video.img}`)"
              :key="`v${video.id}`"
              alt=""
              @click="setMainMessageVideo(video, index)"
            />
          </transition>
          <transition name="fade" mode="out-in">
            <div
              v-if="windowWidth >= 768"
              :key="`v-img${video.id}`"
              class="play-button"
              @click="setMainMessageVideo(video, index)"
            >
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.643555 2.84994C0.643555 1.27614 2.37722 0.31895 3.70907 1.1574L15.1553 8.36327C16.4013 9.14766 16.4013 10.9639 15.1553 11.7483L3.70907 18.9542C2.37722 19.7927 0.643555 18.8355 0.643555 17.2617V2.84994Z"
                  fill="#1E1826"
                />
              </svg>
            </div>
          </transition>
        </div>
      </div>
      <div class="footer w-carousel" v-else>
        <div class="c-arrow-left c-arrow" @click="carouselMove(false)">
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
        <div class="carousel">
          <div
            class="c-video-container"
            ref="inner"
            id="footer-carousel"
            :style="innerStyles"
          >
            <div
              class="video"
              v-for="(video, index) in footerVideos"
              :key="`videoKey-${video.id}`"
              id="carousel-footer"
              :class="{ loading: isLoadingNewVideo }"
            >
              <img
                :src="require(`@/assets/${video.img}`)"
                :key="`videoImgKey-${video.id}`"
                alt=""
                @click="setMainMessageVideo(video, index)"
              />
              <div
                v-if="windowWidth >= 768"
                :key="`videoBtnKey-${video.id}`"
                class="play-button"
                @click="setMainMessageVideo(video, index)"
              >
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.643555 2.84994C0.643555 1.27614 2.37722 0.31895 3.70907 1.1574L15.1553 8.36327C16.4013 9.14766 16.4013 10.9639 15.1553 11.7483L3.70907 18.9542C2.37722 19.7927 0.643555 18.8355 0.643555 17.2617V2.84994Z"
                    fill="#1E1826"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="c-arrow-right c-arrow" @click="carouselMove(true)">
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
      </div>
      <div class="button-container" v-if="this.windowWidth < 768">
        <button @click="$router.push({ path: '/types' })">
          Find Out More About Smoke Alarms
        </button>
        <button
          class="secondary"
          @click="$router.push({ path: '/regulations' })"
        >
          Regulations for Smoke Alarms in Europe
        </button>
      </div>
    </section>
    <section class="supporters" id="supporters">
      <div class="modal">
        <div class="modal-content">
          <h3>This Campaign is Supported by:</h3>
          <div class="supporter-container">
            <a
              :href="supporter.url"
              target="_blank"
              rel="noopener noreferrer"
              class="supporter"
              v-for="(supporter, index) in supporters"
              :key="index"
            >
              <div class="image-container">
                <img
                  :src="require(`@/assets/${supporter.logo}`)"
                  alt="partner"
                />
              </div>
              <div class="website-container">
                <span class="website">
                  {{ supporter.url_text }}
                </span>
              </div>
            </a>
          </div>
          <div class="supporter-container extra">
            <a
              :href="supporter.url"
              target="_blank"
              rel="noopener noreferrer"
              class="supporter"
              v-for="(supporter, index) in supportersExtra"
              :key="index"
              ><div class="image-container">
                <img
                  :src="require(`@/assets/${supporter.logo}`)"
                  alt="partner"
                />
              </div>
              <div class="website-container">
                <span class="website">
                  {{ supporter.url_text }}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="red-circle"></div>
    </section>
    <section class="information" id="information">
      <h3>Information You Need to Know About Smoke Alarms</h3>
      <span>Click and find out more!</span>
      <div class="card-container">
        <div
          class="card"
          v-for="(card, index) in cards"
          :key="index"
          @click="card.action"
        >
          <div class="card-content">
            <div class="text" v-html="card.text"></div>
            <img
              v-if="card.img != ''"
              :src="require(`@/assets/${card.img}`)"
              alt=""
              :class="{ maintain: index == 2 }"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import VideoPlayer from "@/components/VideoPlayer.vue";

SwiperCore.use([Navigation, Pagination]);
export default {
  name: "LandingPageView",
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      cTranslation: 125,
      videos: [
        {
          id: 0,
          link: "videos/landingpage/Finland.mp4",
          img: "images/messages_of_support/1.jpg",
        },
        {
          id: 1,
          link: "videos/landingpage/Czech.mp4",
          img: "images/messages_of_support/2.jpg",
        },
        {
          id: 2,
          link: "videos/landingpage/Latvia.mp4",
          img: "images/messages_of_support/3.jpg",
        },
        {
          id: 3,
          link: "videos/landingpage/Denmark.mp4",
          img: "images/messages_of_support/4.jpg",
        },
        {
          id: 4,
          link: "videos/landingpage/Lithuania1.mp4",
          img: "images/messages_of_support/Lithuania_1.jpg",
        },
        {
          id: 5,
          link: "videos/landingpage/Lithuania2.mp4",
          img: "images/messages_of_support/Lithuania_2.jpg",
        },
        {
          id: 6,
          link: "videos/landingpage/Stephan.mp4",
          img: "images/messages_of_support/Stephan.jpg",
        },
      ],
      supporters: [
        {
          url: "https://www.f-e-u.org",
          url_text: "www.f-e-u.org",
          logo: "images/supporters/feu-logo.svg",
        },
        {
          url: "https://www.europeanfiresafetyalliance.org",
          url_text: "www.europeanfiresafetyalliance.org",
          logo: "images/supporters/efsa-logo.svg",
        },
        {
          url: "https://www.euralarm.org",
          url_text: "www.euralarm.org",
          logo: "images/supporters/euralarm.svg",
        },
      ],
      supportersExtra: [
        {
          url: "https://www.smartwaresgroup.com",
          url_text: "www.smartwaresgroup.com",
          logo: "images/supporters/Smartwares Group_fc.svg",
        },
        {
          url: "https://www.eielectronics.com",
          url_text: "www.eielectronics.com",
          logo: "images/supporters/Ei-Electronics-Logo.svg",
        },
        {
          url: "https://www.fireangel.co.uk",
          url_text: "www.fireangel.co.uk",
          logo: "images/supporters/fire-angel-logo-orange.svg",
        },

        {
          url: "https://www.kidde.com/home-safety/en",
          url_text: "www.kidde.com",
          logo: "images/supporters/kidde.svg",
        },
      ],
      cards: [
        {
          text: "About<br> Smoke Alarms",
          img: "images/cards/detector.png",
          action: () => {
            this.$router.push({ path: "/types" });
          },
        },
        {
          text: "Where to place <br> Smoke Alarms",
          img: "images/cards/room.png",
          action: () => {
            this.$router.push({ path: "/place" });
          },
        },
        {
          text: "How to Maintain<br> Smoke Alarms",
          img: "images/cards/maintain.png",
          action: () => {
            this.$router.push({ path: "/maintain" });
          },
        },
      ],
      currentlyHoveringVideo: "",
      tempMainMessageVideo: {},
      mainMessageVideo: {
        id: 0,
        link: "videos/landingpage/Finland.mp4",
        img: "images/messages_of_support/1.jpg",
      },
      isLoadingNewVideo: false,
      videoStack: [
        {
          id: 0,
          link: "videos/landingpage/Finland.mp4",
          img: "images/messages_of_support/1.jpg",
        },
      ],
      footerVideos: [],
      swiper: null,
      innerStyles: {},
      transitioning: false,
    };
  },
  mounted() {
    this.footerVideos = this.videos.filter((el) => el.id != 0);
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.setStep();
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
  },
  watch: {
    currentlyHoveringVideo: function (newVal, oldVal) {
      if (this.currentlyHoveringVideo != "") {
        let video = this.$refs[this.currentlyHoveringVideo];
        if (Array.isArray(video)) video = video[0];
        if (oldVal != "") {
          let oldVideo = this.$refs[oldVal];
          if (oldVideo) {
            if (Array.isArray(oldVideo)) oldVideo = oldVideo[0];
            oldVideo.controls = "";
          }
        }
        video.controls = "controls";
      } else {
        if (oldVal != "") {
          let oldVideo = this.$refs[oldVal];
          if (oldVideo) {
            if (Array.isArray(oldVideo)) oldVideo = oldVideo[0];
            oldVideo.controls = "";
          }
        }
      }
    },
  },
  methods: {
    setMainMessageVideo(video, index) {
      if (this.isLoadingNewVideo) return;
      if (this.videoStack[this.videoStack.length - 1].id == video.id) return;
      this.isLoadingNewVideo = true;
      let oldVideo = this.mainMessageVideo;
      this.videoStack.push(video);
      this.mainMessageVideo = video;
      video = oldVideo;
      this.footerVideos[index] = oldVideo;
      this.pauseAllVideos();
      this.$nextTick(() => {
        this.swiper.update();
        this.$nextTick(() => {
          this.swiper.slideTo(this.videoStack.length - 1, 300);
          if (this.videoStack.length > 2) {
            setTimeout(() => {
              this.swiper.removeSlide(0);
              this.isLoadingNewVideo = false;
              this.playVideo();
            }, 350);
          } else {
            this.isLoadingNewVideo = false;
            this.playVideo();
          }
        });
      });
    },
    pauseAllVideos() {
      this.$nextTick(() => {
        this.videoStack.forEach((slide, index) => {
          if (this.$refs["mainMessageVideo-" + index]) {
            let player = this.$refs["mainMessageVideo-" + index][0];
            if (player) {
              player.player.pause();
            }
          }
        });
      });
    },
    playVideo() {
      this.$nextTick(() => {
        setTimeout(() => {
          console.log(this.videoStack.length, this.$refs["mainMessageVideo-2"]);

          this.$refs[
            "mainMessageVideo-" + (this.videoStack.length - 1)
          ][0].player.play();
        }, 100);
      });
    },
    onSwiper(swiper) {
      if (this.swiper == null) {
        this.swiper = swiper;
      }
    },
    onSlideChange() {
      console.log("slide change");
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    },
    carouselMove(isForward) {
      if (this.transitioning) return;
      this.transitioning = true;
      if (isForward) {
        const innerWidth = this.$refs.inner.scrollWidth;
        const cards = this.footerVideos.length;
        if (window.innerWidth < 1280) {
          this.cTranslation = `${innerWidth / cards}px`;
        } else {
          this.cTranslation = `${innerWidth / cards / 2}px`;
        }
        this.innerStyles = {
          transform: `translateX(-${this.cTranslation})`,
        };
        setTimeout(() => {
          if (window.innerWidth < 1280) {
            this.innerStyles = {
              transition: "transform 0s",
              translate: "6px",
            };
          } else {
            this.innerStyles = {
              transition: "transform 0s",
              translate: "0px",
            };
          }
          for (let i = 0; i < 1; i++) {
            let card = this.footerVideos[i];
            this.footerVideos.push(card);
            this.footerVideos.shift();
          }
          this.transitioning = false;
        }, 500);
      } else {
        const innerWidth = this.$refs.inner.scrollWidth;
        const cards = this.footerVideos.length;
        if (window.innerWidth < 1280) {
          this.cTranslation = `${innerWidth / cards}px`;
        } else {
          this.cTranslation = `${(innerWidth / cards) * 1.5}px`;
        }
        this.innerStyles = {
          transform: `translateX(+${this.cTranslation})`,
        };
        setTimeout(() => {
          this.innerStyles = {
            transition: "transform 0s",
            translate: "-5px",
          };
          for (let i = 0; i < 1; i++) {
            let card = this.footerVideos.pop();
            this.footerVideos.unshift(card);
          }
          this.transitioning = false;
        }, 500);
      }
    },
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const cards = this.footerVideos.length;
      this.cTranslation = `${innerWidth / cards}px`;
    },
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.footerVideos.shift();
        this.footerVideos.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.footerVideos.pop();
        this.footerVideos.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.cTranslation})`,
      };
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.cTranslation})
                    translateX(-${this.cTranslation})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";

.button-container {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    button {
      max-width: 80%;
      margin: 1rem 0;
      width: 80%;
      height: 56px;
      background: $mainColor;
      border-radius: 5px;
      border: none;
      color: white;
      font-family: $mainFont;
      font-size: 16px;
      cursor: pointer;
      &.secondary {
        background: $secondaryColor;
      }
      transition: all 0.3s;
      &:hover {
        box-shadow: 0px 3px 10px 0px #0707073f;
        font-weight: 700;
      }
      &:active {
        box-shadow: 0px 2px 3px 0px #0000004f;
      }
    }
  }
}
.semibold {
  font-family: $semiBoldFont;
}
.landing-page {
}
h1 {
  font-size: clamp(24px, 5vw, 96px);
  margin: 0;
  color: #1e1826;
  font-weight: 500;
}
h2 {
  color: $mainColor;
  font-size: clamp(24px, 4.5vw, 80px);
  margin: 2rem 0 0 0;
  font-weight: 500;
}
h3 {
  font-size: clamp(24px, 4vw, 46px);
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
  overflow: hidden;
}
.play-button {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.67);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: auto;
  cursor: pointer;
  svg {
    margin-right: -4px;
    width: 33%;
    path {
      fill: #0c2c39;
    }
  }
}
.date {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 196px 0 0 calc(min(160px, 10vw));
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    height: 100%;
    margin-top: -6rem;
  }
  @media (max-width: 768px) {
    padding: 0 0 0 calc(min(160px, 10vw));
    flex-direction: column;
    height: calc(100vh - 110px);
    .text {
      width: 100%;
      padding: 0rem;
      margin: 0;
    }
    h1 {
      font-size: clamp(36px, 6vw, 96px);
    }
    h2 {
      margin: 1rem 0 0;
      font-size: clamp(36px, 6vw, 96px);
    }
    .hashtag {
      margin: 2rem 0 0;
    }
    .illustrations {
      width: 100%;
      margin-top: 32px;
      .smoke-detector-container {
        margin-top: 0px;
        left: 0rem;
        right: 0;
        bottom: 23vw;
        top: initial;
        margin: auto;
        height: 30vh;
        width: 30vh;
        min-width: 150px;
        min-height: 150px;
      }
      @media (max-height: 640px) {
        // margin-top: 128px;
        .smoke-detector-container {
          height: 25vh;
          width: 25vh;
          bottom: 9vh;
        }
      }
      @media (max-height: 550px) {
        // margin-top: 128px;
        .smoke-detector-container {
          display: none;
        }
      }
      @media (max-height: 487px) {
        display: none;
      }
      .red-circle {
        width: 90vw;
        height: 90vw;
        left: 0;
        right: 0;
        margin: auto;
        bottom: -23vh;
        right: -32vw;
      }
      .smoke {
        left: -8rem;
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
  position: absolute;
  height: 27.3vw;
  width: 27.3vw;
  min-width: 300px;
  min-height: 300px;
  top: 65px;
  left: 1vw;
  max-width: 658px;
  max-height: 658px;
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
  margin: 0;
  .red-circle {
    position: absolute;
    height: 69vw;
    width: 69vw;
    z-index: -1;
    top: 65px;
    left: 1vw;
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
  height: fit-content;
  .content {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px calc(min(160px, 10vw));
    height: 100%;
    width: 100%;
    .video-container {
      display: flex;
      padding: 20px 0;
      flex: 3;
      justify-content: center;
    }
    .video {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 40vw;
      min-width: calc(min(500px, 40vw));
      min-height: calc(min(500px, 40vw));
      max-height: 500px;
      border-radius: 20px;
      overflow: hidden;
      .carousel {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        // max-height: 100%;
        // transition: top 0.3s;
      }
      video {
        object-fit: fill;
        width: 100%;
        height: 100%;
        min-height: 100%;
        min-width: 100%;
        transition: transform 0.5s;
      }
      img {
        cursor: pointer;
      }

      &.loading {
        video {
        }
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
      font-family: $mainFont;
      font-size: 16px;
      cursor: pointer;
      &.secondary {
        background: $secondaryColor;
      }
      &:first-child {
        margin-right: 1rem;
      }
      transition: all 0.3s;
      &:hover {
        box-shadow: 0px 3px 10px 0px #0707073f;
        font-weight: 700;
      }
      &:active {
        box-shadow: 0px 2px 3px 0px #0000004f;
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    background: $mainColor;
    padding: 2rem calc(min(160px, 10vw));
    justify-content: center;
    span {
      display: flex;
      flex-direction: row;
    }
    .video {
      display: flex;
      flex-direction: column;
      margin: 0 1rem;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
      align-items: center;
      video,
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        min-height: 12vw;
        height: 12vw;
        min-width: 12vw;
        width: 12vw;
      }
      img {
        cursor: pointer;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (min-width: 2000px) {
    min-height: 100vh;
    height: auto;
  }
  @media (max-width: 1280px) {
    min-height: 100vh;
    height: auto;
    .content {
      padding: 2rem calc(min(160px, 10vw));
    }
    .video {
      display: flex;
      flex-direction: column;
      margin: 0 1rem;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
      align-items: center;
      video,
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: 1050px) {
    min-height: 100vh;
    height: auto;
    .content {
      flex-direction: column-reverse;
      padding: 2rem calc(min(160px, 10vw));
      .video {
        width: 40vw;
        height: 40vw;
      }
      .text {
        margin-left: 0;
        padding-left: 0;
        margin-top: 0;
        .button-container {
          margin-bottom: 2rem;
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
        max-width: 100%;
        text-align: center;
      }
      h3 {
        font-size: clamp(36px, 5vw, 64px);
        text-align: center;
      }
      .button-container {
        margin: 1rem 0px;
        flex-direction: column;
        button {
          width: 100%;
          max-width: 100%;
          margin: 0.5rem 0px;
          font-size: clamp(18px, 3vw, 28px);
        }
      }
    }
    .footer {
      padding: 2rem $paddingHorizontalMobile;
      flex-wrap: wrap;
      .video {
        margin: 1rem 0;
        height: 80vw;
        width: 80vw;
        video {
          height: 100%;
          min-width: 100%;
        }
        &:first-child {
          margin: 1rem 0;
        }
        &:last-child {
          margin: 1rem 0;
        }
      }
    }
  }
}
.supporters {
  position: relative;
  padding: 50px calc(min(160px, 7vw));
  overflow: hidden;
  h3 {
    margin: 0rem 0 2rem;
  }
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 3px 0px #00000052;
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
    padding: 3rem 0;
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
    flex-wrap: wrap;
    justify-content: center;
    margin-top: auto;
    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80%;
      img {
        object-fit: fill;
      }
    }
    .website-container {
      height: 20%;
    }
    &:first-of-type {
      margin-bottom: 3rem;
    }
    &.extra {
      padding: 0 4%;
      margin-bottom: auto;
      margin-top: 0;
      .supporter {
        height: 9vw;
        max-height: 170px;
        max-width: 47%;
        width: 17vw;
        margin: 1rem;
      }
    }
  }
  .supporter {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 2rem;
    height: 15vw;
    font-size: 14px;
    line-height: 14px;
    width: 18vw;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    span {
      color: #0c2c39;
      text-decoration: none;
    }
    img {
      max-width: 100%;
      width: 80%;
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
  @media (min-width: 1950px) {
    height: auto;
    .supporter-container {
      &.extra {
        .supporter {
          height: 25vh;
        }
      }
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
    .modal {
      box-shadow: none;
    }
    .modal-content {
      .supporter-container {
        display: flex;
        width: 100%;
        justify-content: center;
        .supporter {
          margin: 2vw;
          width: 41.5vw;
          height: 27vw;
          background: #fbf3ed;
          box-shadow: 0px 3px 10px 0px #0707073f;
          img {
            height: auto;
            max-height: 19vw;
          }
          span {
            font-size: clamp(12px, 2.7vw, 16px);
          }
        }
        &.extra {
          padding: 0;
          .supporter {
            max-width: 100%;
            width: 44%;
          }
        }
        &:first-of-type {
          margin-bottom: 1rem;
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
      flex-wrap: wrap;
      .supporter {
        margin: 2rem 0;
      }
    }
  }
  @media (max-width: 460px) {
    .modal-content {
      .supporter-container {
        .supporter {
          width: 100%;
          height: 44vw;
          margin: 1rem 0;
          max-width: 100%;
          img {
            height: 100%;
            max-width: 80%;
            width: auto;
          }
          span {
            font-size: clamp(16px, 4vw, 24px);
          }
        }
        &.extra {
          padding: 0;
          .supporter {
            max-width: 100%;
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 380px) {
    .modal-content {
      .supporter-container {
        .supporter {
          margin: 1rem 0;
          width: 100%;
          height: 44vw;
        }
      }
    }
  }
}
.supporter-container {
  &:not(.extra) {
    .supporter {
      &:first-child {
        img {
          height: 65%;
          width: 75%;
          margin-bottom: 10px;
          @media (max-width: 768px) {
            width: auto;
            height: auto;
            max-height: 19vw;
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
.information {
  background: #fbf3ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  padding-bottom: 160px;
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
        display: flex;
        flex: 1;
        font-size: clamp(16px, 2vw, 36px);
        transition: color 0.3s;
        margin-bottom: 1.5rem;
      }
      img {
        // width: auto;
        max-width: 100%;
        max-height: 100%;
        display: flex;
        &.maintain {
          margin-bottom: -3rem;
          margin-right: -4rem;
        }

        // height: auto;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: calc(min(4vw, 3rem)) calc(min(4vw, 1.5rem));
        text-align: center;
      }
      &:hover {
        background: $mainColor;
        .text {
          color: white;
        }
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
    font-size: clamp(16px, 1vw, 24px);
    margin: 3rem 0 5rem;
  }
  @media (max-width: 1320px) {
    padding: 0 calc(min(80px, 10vw));
    padding-bottom: 80px;
    .card-container {
      .card {
        width: calc((100vw - (calc(min(160px, 10vw)) * 2) - 6rem) / 3);
        height: calc((100vw - (calc(min(160px, 10vw)) * 2) - 6rem) / 3);
        .card-content {
          padding: calc(min(2vw, 2rem)) calc(min(3vw, 1.5rem));
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .card-container {
      .card {
        img {
          margin-top: -2rem;
        }
      }
    }
  }
  @media (max-width: 1150px) {
    .card-container {
      .card {
        img {
          &.maintain {
            margin-bottom: -2rem;
            margin-top: 0;
          }
        }
      }
    }
  }
  @media (max-width: 1000px) {
    .card-container {
      .card {
        .card-content {
          img {
            width: auto;
            margin-top: 0rem;
            //height: 100%;
            max-height: 60%;
            &.maintain {
              margin-bottom: -1rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0 $paddingHorizontalMobile;
    min-height: 100vh;
    height: auto;
    padding-bottom: 5rem;
    h3 {
      width: 100%;
      font-size: clamp(28px, 4vw, 36px);
    }
    span {
      margin: 1rem 0;
      font-size: clamp(16px, 2vw, 20px);
    }
    .card-container {
      .card {
        width: calc(100vw - 40px);
        height: calc(100vw - 40px);
        min-height: 30vw;
        margin: 1rem;
        .card-content {
          padding: 1rem 2rem;
          .text {
            flex: initial;
            font-size: clamp(24px, 3vw, 36px);
          }
          img {
            width: 50vw;
            max-width: 280px;
            max-height: 100%;
            height: auto;
            margin: auto;
            &.maintain {
              margin-bottom: -6%;
              margin-right: -6%;
              width: 72vw;
            }
          }
        }
      }
    }
  }
  @media (max-width: 460px) {
    padding: 0 $paddingHorizontalMobile;
    min-height: 100vh;
    height: auto;
    padding-bottom: 5rem;
    h3 {
      width: 100%;
      font-size: clamp(28px, 4vw, 36px);
    }
    span {
      margin: 1rem 0;
      font-size: clamp(16px, 2vw, 20px);
    }
    .card-container {
      .card {
        width: 80vw;
        height: 80vw;
        min-height: 80vw;
        min-width: 80vw;
        max-height: 80vw;
        max-width: 80vw;
        margin: 1rem;
        .card-content {
          padding: 1rem 2rem;
          .text {
            flex: initial;
            font-size: clamp(24px, 3vw, 36px);
            height: 40%;
          }
          img {
            height: 60%;
            margin: auto;
            &.maintain {
              width: 50vw;
              max-width: 280px;
              max-height: 100%;
              height: auto;
              margin-bottom: -6%;
              margin-right: -6%;
              width: 72vw;
            }
          }
        }
      }
    }
  }
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: transform 0.3s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(0%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-leave-active,
.slide-enter-active {
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}
.slide-enter {
  transform: translateY(100%);
  opacity: 0.5;
}
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0.5;
}

.flip-list-move {
  transition: transform 1s;
}
</style>
<style lang="scss">
.swiper-container {
  min-width: 100%;
  min-height: 100%;
}
.swiper-wrapper {
  flex-direction: column;
}
.swiper-slide {
  height: 100% !important;
}
.under-hashtag {
  // font-size: 16px;
  line-height: 24px;
  font-size: clamp(16px, 1.5vw, 38px);
  margin-top: 16px;
}

.message {
  .footer {
    &.w-carousel {
      overflow-x: hidden;
      .carousel {
        display: flex;
        justify-content: center;
        width: 50%;
        overflow-x: hidden;
        @media (max-width: 1280px) {
          width: 75%;
        }
        .c-video-container {
          // translate: 125px;
          width: fit-content;
          display: flex;
          transition: transform 0.5s;
          transform: translate(7vw);
          .video {
            overflow: visible;
          }
          @media (max-width: 1280px) {
            transform: translate(0);
          }
        }
      }
      .c-ctrl {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        cursor: pointer;
      }
    }
  }
}
.c-arrow {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.2s;
  cursor: pointer;
  svg {
    path {
      stroke: white;
    }
  }
  &:hover {
    background-color: #483a5b;
    svg {
      path {
        stroke: white;
      }
    }
  }
}
.c-arrow-left {
  transform: rotate(-90deg);
}
.c-arrow-right {
  transform: rotate(90deg);
}
</style>
