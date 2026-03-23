<template>
  
  <div class="support-container" >
    <div>
    <section class="message" id="message">
      <div class="content">
        <div class="text">
          <h3>{{ toLocal("home.support") }}</h3>

          <p v-html="toLocal('home.fire_officers')"></p>
          <div class="button-container" v-if="this.windowWidth >= 768">
            <button type="button" @click="$router.push({ path: '/types' })"
              @keyup.enter="$router.push({ path: '/types' })"
              @keyup.space="$router.push({ path: '/types' })"
              tabindex="0"
              role="button"
               aria-label="Find Out More about Smoke Alarms"
              >
              {{ toLocal("home.find_more") }}
            </button>
            <button type="button"
              class="secondary"
              @click="$router.push({ path: '/regulations' })"
              @keyup.enter="$router.push({ path: '/regulations' })"
              @keyup.space="$router.push({ path: '/regulations' })"
              tabindex="0"
              role="button"
            >
              {{ toLocal("home.regulations") }}
            </button>
          </div>
        </div>
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
                <video-player
                  :ref="`mainMessageVideo-${index}`"
                  
                  :options="{
                    autoplay: false,
                    controls: true,
                    aspectRatio: '1:1',
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
          </div>
        </div>
      </div>
      <div class="mobile-carousel-footer" v-if="this.windowWidth <= 768">
        <button type="button" class="mob-carousel-btn left" @click="moveMobileSlide(false)">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.5 0.5L1.5 7L7.5 13.5" />
          </svg>
        </button>
        <div class="mobile-carousel" ref="mInner" :style="innerMobileStyles">
          <div
            class="video"
            v-for="(video, index) in mobileVideos"
            :key="`mobile-video-${index}`"
          >
            <video-player
              :key="rerenderingVideo"
              :ref="`video-player-${index}`"
              :isLoading="false"
              :options="{
                autoplay: false,
                controls: true,
                aspectRatio: '1:1',
                sources: [
                  {
                    src: require(`@/assets/${video.link}`),
                    type: 'video/mp4',
                  },
                ],
              }"
            />
          </div>
        </div>
        <button type="button" class="mob-carousel-btn right" @click="moveMobileSlide(true)">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 13.5L7 7L1 0.499999" />
          </svg>
        </button>
      </div>
      <div class="footer w-carousel" v-else>
        <div class="c-arrow-left c-arrow" @click="carouselMove(false)">
          <div class="c-arrow-block"></div>
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
              :key="`videoKey-${video.id}-${index}`"
              id="carousel-footer"
              :class="{ loading: isLoadingNewVideo }"
            >
              <img
                :src="require(`@/assets/${video.img}`)"
                :key="`videoImgKey-${video.id}`"
                :alt="`${toLocal('alt.video_thumbnail')} ${index + 1}`"
                @click="setMainMessageVideo(video, index)"
                tabindex="0"
                role="button"
                :aria-label="`Play video ${index + 1}`"
                @keyup.enter="setMainMessageVideo(video, index)"
                @keyup.space="setMainMessageVideo(video, index)"
              />
              <div
                v-if="windowWidth >= 768"
                :key="`videoBtnKey-${video.id}`"
                class="play-button"
                @click="setMainMessageVideo(video, index)"
                  tabindex="0"
                role="button"
                :aria-label="`Play video ${index + 1}`"
                @keyup.enter="setMainMessageVideo(video, index)"
                @keyup.space="setMainMessageVideo(video, index)"
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
          <div class="c-arrow-block"></div>
        </div>
      </div>
      <div class="button-container" v-if="this.windowWidth < 768">
        <button type="button" @click="$router.push({ path: '/types' })">
          {{ toLocal("home.find_more") }}
        </button>
        <button type="button"
          class="secondary"
          @click="$router.push({ path: '/regulations' })"
        >
          {{ toLocal("home.regulations") }}
        </button>
      </div>
    </section>
    </div>
    
    <footer class="facts-share">
      <span class="share-title">{{ toLocal("facts.share_story") }}</span>
      <button type="button" @click="mailto">info@eurofsa.org</button>
    </footer>
    
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import VideoPlayer from "@/components/VideoPlayer.vue";
import store from "@/store.js";

SwiperCore.use([Navigation, Pagination]);
export default {
    data(){
            return {
      lang: store.state.lang,
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
          id: 10,
          link: "videos/landingpage/Finian.mp4",
          img: "images/messages_of_support/Finian.png",
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
        {
          id: 7,
          link: "videos/landingpage/Estonia.mp4",
          img: "images/messages_of_support/Estonia.png",
        },
        {
          id: 8,
          link: "videos/landingpage/Maria.mp4",
          img: "images/messages_of_support/Maria.png",
        },
        {
          id: 9,
          link: "videos/landingpage/Sweden.mp4",
          img: "images/messages_of_support/Sweden.png",
        },
        {
          id: 9,
          link: "videos/landingpage/Ireland.mp4",
          img: "images/messages_of_support/Ireland.png",
        },
        {
          id: 10,
          link: "videos/landingpage/Spain.mp4",
          img: "images/messages_of_support/Spain.png",
        },
      ],
      infoLeaflets:[

      {
          img: "images/downloads/leaflet5EN.png",
          download_path: "/downloads/Leaflet-English.pdf",
          text: "downloads.leaflet5EN",
        },
        {
          img: "images/downloads/leaflet5CZ.png",
          download_path: "/downloads/Leaflet-Czech.pdf",
          text: "downloads.leaflet5CZ",
        },
        {
          img: "images/downloads/leaflet5NL.png",
          download_path: "/downloads/Leaflet-Dutch.pdf",
          text: "downloads.leaflet5DE",
        },
        {
          img: "images/downloads/leaflet5LV.png",
          download_path: "/downloads/Leaflet-Latvian.pdf",
          text: "downloads.leaflet5LV",
        },
        {
          img: "images/downloads/leaflet5HU.png",
          download_path: "/downloads/Leaflet-Hungarian.pdf",
          text: "downloads.leaflet5HU",
        },
        {
          img: "images/downloads/leaflet5FR.png",
          download_path: "/downloads/Leaflet-French.pdf",
          text: "downloads.leaflet5FR",
        },
        {
          img: "images/downloads/leaflet5IT.png",
          download_path: "/downloads/Leaflet-Italian.pdf",
          text: "downloads.leaflet5IT",
        },
        {
          img: "images/downloads/leaflet5ES.png",
          download_path: "/downloads/Leaflet-Spanish.pdf",
          text: "downloads.leaflet5ES",
        },
      ],
        gifs:[
        {
          id: 1,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/1.gif`,
        },
        {
          id: 2,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/2.gif`,
        },
        {
          id: 3,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/3.gif`,
        },
        {
          id: 4,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/4.gif`,
        },
        {
          id: 5,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/5.gif`,
        },
        {
          id: 6,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/6.gif`,
        },
        {
          id: 7,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/7.gif`,
        },
        {
          id: 8,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/8.gif`,
        },
        {
          id: 9,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/9.gif`,
        },
        {
          id: 10,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/10.gif`,
        },
        {
          id: 11,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/11.gif`,
        },
        {
          id: 12,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/12.gif`,
        },
        {
          id: 13,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/13.gif`,
        },
        {
          id: 14,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/14.gif`,
        },
        {
          id: 15,
          link: `gifs/${this.$store.state.lang.toUpperCase()}/15.gif`,
        }
      ],
      downloadsLeaflets:[

      ],

      
      currentlyHoveringVideo: "",
      tempMainMessageVideo: {},
      mainMessageVideo: {
        id: 6,
        link: "videos/landingpage/Stephan.mp4",
        img: "images/messages_of_support/Stephan.jpg",
      },
      isLoadingNewVideo: false,
      videoStack: [
        {
          id: 6,
          link: "videos/landingpage/Stephan.mp4",
          img: "images/messages_of_support/Stephan.jpg",
        },
      ],
      footerVideos: [],
      mobileVideos: [],
      swiper: null,
      innerStyles: {},
      transitioning: false,
      innerMobileStyles: {},
      rerenderingVideo: 0,
      isLoadingVideo: false,
    };
    },
    components:{
        Swiper,
        SwiperSlide,
        VideoPlayer,
    },
    metaInfo() {
        return {
            title: this.toLocal('header.sm_info'),
            titleTemplate: '%s | European Smoke Alarm Day'
        }
    },
      mounted() {
    this.footerVideos = this.videos.filter((el) => el.id != 6);
    this.mobileVideos = this.videos;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    // this.setStep();
      //  Pridedame globalų fokusavimo stebėjimą
  document.addEventListener("focusin", this.handleGlobalFocus);
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
    rerenderingVideo: function (newVal, oldVal) {
      if (newVal != oldVal) {
        this.isLoadingVideo = true;
        setTimeout(() => {
          this.isLoadingVideo = false;
        }, 500);
      }
    },
  },
  methods: {
    mailto() {
      window.location.href = "mailto:info@eurofsa.org";
      
    },
    

    downloadFile(file, linktext) {
      let link = document.createElement("a");
      link.setAttribute("download", linktext);
      link.href = file;
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
    downloadLeaflet(leaflet) {
      let link = document.createElement("a");
      link.setAttribute("download", this.toLocal(leaflet.text) + leaflet.extension);
      link.href = leaflet.download_path;
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
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

          // Po video pasikeitimo, fokusas grįžta į pagrindinį playerį
          this.focusMainPlayer();
        }, 350);
      } else {
        this.isLoadingNewVideo = false;
        this.playVideo();

        // Fokusas grįžta į pagrindinį playerį
        this.focusMainPlayer();
      }
    });
  });
},
      focusMainPlayer() {
        this.$nextTick(() => {
          // Randame pagrindinį video
          const mainVideo = this.$refs[
            "mainMessageVideo-" + (this.videoStack.length - 1)
          ]?.[0]?.$el?.querySelector("video");

          if (mainVideo) {
            // Suteikiame fokusą
            mainVideo.focus();

            // Ir centruojame ekraną į pagrindinį playerį
            const rect = mainVideo.getBoundingClientRect();
            const scrollToY =
              rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;

            window.scrollTo({
              top: scrollToY,
              behavior: "smooth",
            });
          }
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
    onSlideChange() {},
    onResize() {
      this.windowWidth = window.innerWidth;
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
          this.cTranslation = `${innerWidth / cards}px`;
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
          this.cTranslation = `${innerWidth / cards}px`;
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

    moveMobileSlide(isForward) {
      if (this.transitioning) return;
      this.transitioning = true;
      if (isForward) {
        const innerWidth = this.$refs.mInner.scrollWidth;
        const cards = this.mobileVideos.length;
        this.cTranslation = `${innerWidth / cards / 4.65}px`;
        // this.$refs["video-player-1"].load();
        // this.$refs["video-player-1"].pause();
        this.innerMobileStyles = {
          transform: `translateX(-${this.cTranslation})`,
        };
        setTimeout(() => {
          this.innerMobileStyles = {
            transition: "transform 0s",
            translate: "0",
          };
          for (let i = 0; i < 1; i++) {
            let card = this.mobileVideos[i];
            this.mobileVideos.push(card);
            this.mobileVideos.shift();
          }
          this.transitioning = false;
          this.rerenderingVideo += 1;
        }, 500);
      } else {
        const innerWidth = this.$refs.mInner.scrollWidth;
        const cards = this.videos.length;
        this.cTranslation = `${(innerWidth / cards) * 1.8}px`;
        this.innerMobileStyles = {
          transform: `translateX(+${this.cTranslation})`,
        };
        setTimeout(() => {
          this.innerMobileStyles = {
            transition: "transform 0s",
            translate: "0px",
          };
          for (let i = 0; i < 1; i++) {
            let card = this.mobileVideos.pop();
            this.mobileVideos.unshift(card);
          }
          this.transitioning = false;
          this.rerenderingVideo += 1;
        }, 500);
      }
    },
      handleGlobalFocus(e) {
        // Only scroll if user is navigating with keyboard
        if (!this.$store.state.isKeyboardNavigating) return;
        
        const el = e.target;
        if (!el || el.tagName === "BODY" || el.tagName === "HTML") return;

        // Tikriname, ar tai video karuselės elementas
        const videoEl = el.closest(".footer .video");
        if (videoEl) {
          const carousel = this.$refs.inner;
          if (carousel) {
            const videoRect = videoEl.getBoundingClientRect();
            const carouselRect = carousel.getBoundingClientRect();

            // Patikriname ar video yra matomas karuselės lange
            const isVisibleHorizontally =
              videoRect.left >= carouselRect.left &&
              videoRect.right <= carouselRect.right;

            if (!isVisibleHorizontally) {
              // Skaičiuojame kiek reikia paslinkti
              const offset =
                videoEl.offsetLeft -
                carousel.clientWidth / 2 +
                videoEl.clientWidth / 2;

              carousel.scrollTo({
                left: offset,
                behavior: "smooth",
              });
            }
          }

          // Vertikalus scroll'as (kad karuselė visada matytųsi ekrane)
          const rect = videoEl.getBoundingClientRect();
          const elementCenter =
            rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;

          window.scrollTo({
            top: elementCenter,
            behavior: "smooth",
          });

          return;
        }

        // Bendras fallback visiems kitiems fokusams
        const rect = el.getBoundingClientRect();
        const visible =
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

        if (!visible) {
          const elementCenter =
            rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;
          window.scrollTo({
            top: elementCenter,
            behavior: "smooth",
          });
        }
      },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

/* Reset semantic HTML tags to not affect layout */
main, section, footer {
  display: block;
  margin: 0;
  padding: 0;
}

/* Ensure footer.facts-share inherits proper styling */
footer.facts-share {
  display: flex;
  margin: 0;
  padding: 0;
}

.support-container{
    padding-top: 250px;
    background-color: #fbf3ed;
    @media(max-width: 1280px){
      padding-top: 125px;
    }
    @media(max-width: 768px){
      padding-top: 0;
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
      justify-content: flex-start;
      margin: 2rem 0px;
    }
    button {
      max-width: 271px;
      width: 30%;
      transition: 0.25s;
      height: 56px;
    //   width: 80%;
      background: $mainColor;
      border-radius: 5px;
      border: none;
      color: white;
      font-family: $mainFont;
      font-size: clamp(12px, 1vw, 16px);
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
    background: #DCE3EF;
    padding: 6rem 0;
    justify-content: center;
    margin-top: -60px;
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
          display: flex;
          justify-content: center
        }
      }
      h3 {
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
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

.play-button {
  opacity: 0.6;
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

.information-section{
    padding: 0 calc(min(160px, 10vw));
    display: flex;
    flex-direction: column;
    .info-title{
        width: 100%;
        font-size: clamp(32px, 2.5vw, 48px);
        padding: 64px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        @media(max-width: 768px){
          text-align: center;
        }
    }
}
.downloadables-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(32px, 4vw, 80px);
    @media(max-width: 768px){
      flex-direction: column;
    }
}
.downloadable{
    min-height: 300px;
    min-width: 20%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    aspect-ratio: 100/71;
    position: relative;
    cursor: pointer;
    .downloadable-title{
        width: 100%;
        background-color: #1E1826;
        height: 20%;
        position: absolute;
        bottom: 0;
        border-radius: 0 0 13px 13px;
        color: white;
        display: flex;
        padding: 8px 16px;
        align-items: center;
        font-size: clamp(12px, 2.5vw, 16px);
        @media(max-width: 768px){
          height: 30%;
        }
    }
    @media(max-width: 768px){
      min-height: 50vw;
    }
}

.leaflet-container {
  margin-top: 40px;
  padding: 20px calc(min(160px, 10vw));
  display: flex;
  flex-direction: column;
  justify-content: center;
  .leaflet-title{
    font-size: clamp(28px, 2.5vw, 32px);
    font-family: $semiBoldFont;
    margin-bottom: 8px;
  }
  &.red-bg{
    background: #C0554B; 
    margin-bottom: 0;
    .color-text{
      color: white;
    }
  }
  @media (min-height: 700px) {
    min-height: 500px;
  }
  .leaflets {
    display: flex;
    margin-top: 30px;
    gap:60px;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-bottom: 64px;
    }
  }
  .leaflet {
    position: relative;
    background-repeat: no-repeat;
    background-position: top;
    height: 300px;
    width: 225px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
    background-size: 100%;
    @media (max-width: 1080px) {
      width: 180px;
      height: 250px;
    }
    @media (max-width: 768px) {
      margin: 20px 0;
      width: 46%;
      margin: 2%;
      height: 200px;
      background-size: cover;
    }
    .bottom-content {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #1e1826;
      color: white;
      padding: 10px;
      width: 100%;
      @media (max-width: 768px) {
        font-size: 14px;
        .download-btn {
          svg {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
    .leaflet-text {
      width: 100%;
    }
  }
  span {
    font-size: 16px;
  }
}

.gifs-container{
  display: flex;
  flex-direction: column;
  background-color: #fbf3ed;
  box-sizing: border-box;
  padding: 20px calc(min(160px, 10vw));
  gap: 26px;
  overflow: hidden;
  .title{
    width: 100%;
    font-size: clamp(28px, 2.5vw, 32px);
    font-size: 32px;
    line-height: 48px;
    color: #1E1826; 
    font-weight: 600;
    font-family: $semiBoldFont;
  }
  .inner-container{
    flex-grow: 1;
  }

  .section-container{
    height: 300px;
    @media(max-width:768px){
      flex-direction: column;
      align-items: center;
      width: 80%;
    }
  }
  .single-gif{
    user-select: none;
    width: 100%;
    height: 100%;
    border-radius: 13px;
  }
}
.button-container {
  display: flex;
  justify-content: flex-start;
  margin: 2rem 0px;
  @media(max-width: 1000px){
    justify-content: center;
  }
  button {
    max-width: 271px;
    width: 45%;
    transition: 0.25s;
    height: 56px;
  //   width: 80%;
    background: $mainColor;
    border-radius: 5px;
    border: none;
    color: white;
    font-family: $mainFont;
    font-size: clamp(14px, 1vw, 18px);
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
      font-family: $semiBoldFont;
    }
    &:active {
      box-shadow: 0px 2px 3px 0px #0000004f;
    }
  }
}
/* Fokusavimo stiliai */
[tabindex="0"]:focus-visible,
button:focus-visible,
a:focus-visible,
:deep(.vueperslides__arrow:focus-visible) {
  outline: 3px solid #000000ff; /* kontrastingas apvadas */
  outline-offset: 4px;
  border-radius: 8px;
}

/* Specifiškai Vueper slides rodyklėms */
:deep(.vueperslides__arrow) {
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

:deep(.vueperslides__arrow:focus-visible) {
  box-shadow: 0 0 0 4px rgba(10, 10, 10, 0.5);
  transform: scale(1.1);
}
.c-video-container {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.c-video-container::-webkit-scrollbar {
  display: none;
}
.c-video-container .video {
  flex: 0 0 auto;
  scroll-snap-align: center;
}
.c-video-container .video:focus-within {
  outline: 3px solid #000;
  outline-offset: 4px;
  border-radius: 8px;
}
</style>