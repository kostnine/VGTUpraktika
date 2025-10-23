<template>
  
  <div class="landing-page">
     <!--  Accessibility Banner (viršuje, po Header) -->
    <div
      class="accessibility-banner"
      role="region"
      aria-label="Accessibility statement"
    >
      <p v-html="toLocal('accessibility.banner_text')"></p>
    </div>

    <section class="date" id="smokealarmssavelives">
    <div class="webinar-banner" role="region" aria-label="Webinar invitation">
      <div class="icon">
        <img
          src="@/assets/images/Fire.png"
          alt="Fire icon"
          width="20"
          height="20"
        />
      </div>
      <div class="text">
        <p class="title">{{ toLocal('webinar.registration.line1') }}</p>
        <p>{{ toLocal('webinar.registration.line2') }}</p>
        <p><strong>{{ toLocal('webinar.registration.line3') }}</strong></p>
        <p class="register">
          <a
            href="https://www.europeanfiresafetyalliance.org/european-fire-safety-week/edition-2025/7-11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ toLocal('webinar.registration.cta') }}
          </a>
        </p>
      </div>
    </div>
      <div class="text">
        <h1 class="primary">{{ toLocal("home.european") }}</h1>
        <h1 v-html="toLocal('home.smoke_day')"></h1>
        <h2>{{ toLocal("home.main_date") }}{{ new Date().getFullYear() }}</h2>
        <span class="hashtag">#smokealarmssavelives</span>
        <span class="under-hashtag">{{ toLocal("home.campaign") }}</span>
        
        <!-- Mobile webinar banner -->
        <div class="webinar-banner mobile-only" role="region" aria-label="Webinar invitation">
          <div class="icon">
            <img
              src="@/assets/images/Fire.png"
              alt="Fire icon"
              width="18"
              height="18"
            />
          </div>
          <div class="text">
            <p class="title">{{ toLocal('webinar.registration.line1') }}</p>
            <p>{{ toLocal('webinar.registration.line2') }}</p>
            <p><strong>{{ toLocal('webinar.registration.line3') }}</strong></p>
            <p class="register">
              <a
                href="https://www.europeanfiresafetyalliance.org/european-fire-safety-week/edition-2025/7-11/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ toLocal('webinar.registration.cta') }}
              </a>
            </p>
          </div>
        </div>
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
    <div class="aim-section">
        <div class="column-container">
          <span class="aim-title">
            {{ toLocal("home.aim") }}:
          </span>
          <div class="text-list">
            <span class="text-in-list">1. {{ toLocal('home.aim_encourage') }}</span>
            <span class="text-in-list">2. {{ toLocal('home.aim_encourage2') }}</span>
            <span class="text-in-list">3. {{ toLocal('home.aim_encourage3') }}</span>
          </div>
          <div class="aim-support">
            <span><span class="semibold">{{ toLocal("home.aim_support") }}</span> - <span class="link" @click="$router.push({ path: './messages' })">{{ toLocal("home.aim_support2") }}</span></span>
          </div>
        </div>
    </div>
    <div class="facts">
      <div class="facts-main-header">
        <span class="header-title" id="facts">{{
          toLocal("facts.benefit")
        }}</span>
        <div class="header-list">
          <span class="header-list-title">{{ toLocal("facts.Dyk") }}</span>
          <span class="header-list-item"
            ><div class="arrow-right">
              <svg
                width="12"
                height="23"
                viewBox="0 0 12 23"
                fill="#C0554B"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11.5L-6.59077e-08 22.3253L8.80472e-07 0.674682L12 11.5Z"
                  fill="#C0554B"
                />
              </svg>
            </div>
            {{ toLocal("facts.installing") }}</span
          >
          <span class="header-list-item"
            ><div class="arrow-right">
              <svg
                width="12"
                height="23"
                viewBox="0 0 12 23"
                fill="#C0554B"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11.5L-6.59077e-08 22.3253L8.80472e-07 0.674682L12 11.5Z"
                  fill="#C0554B"
                />
              </svg>
            </div>
            {{ toLocal("facts.less_likely") }}</span
          >
          <span class="header-list-item"
            ><div class="arrow-right">
              <svg
                width="12"
                height="23"
                viewBox="0 0 12 23"
                fill="#C0554B"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11.5L-6.59077e-08 22.3253L8.80472e-07 0.674682L12 11.5Z"
                  fill="#C0554B"
                />
              </svg>
            </div>
            {{ toLocal("facts.deaths") }}</span
          >
        </div>
      </div>
    </div>
    <!-- <section class="message" id="message">
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
        <div class="text">
          <h3>{{ toLocal("home.support") }}</h3>

          <p v-html="toLocal('home.fire_officers')"></p>
          <div class="button-container" v-if="this.windowWidth >= 768">
            <button @click="$router.push({ path: '/types' })">
              {{ toLocal("home.find_more") }}
            </button>
            <button
              class="secondary"
              @click="$router.push({ path: '/regulations' })"
            >
              {{ toLocal("home.regulations") }}
            </button>
          </div>
        </div>
      </div>
      <div class="mobile-carousel-footer" v-if="this.windowWidth <= 768">
        <button class="mob-carousel-btn left" @click="moveMobileSlide(false)">
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
        <button class="mob-carousel-btn right" @click="moveMobileSlide(true)">
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
          <div class="c-arrow-block"></div>
        </div>
      </div>
      <div class="button-container" v-if="this.windowWidth < 768">
        <button @click="$router.push({ path: '/types' })">
          {{ toLocal("home.find_more") }}
        </button>
        <button
          class="secondary"
          @click="$router.push({ path: '/regulations' })"
        >
          {{ toLocal("home.regulations") }}
        </button>
      </div>
    </section> -->
    <section class="supporters" id="supporters">
      <div class="red-bar"></div>
      <div class="modal">
        <div class="modal-content">
          <h3>{{ toLocal("home.supported_by") }}:</h3>
          <div class="coordinater-container supporter-container">
            <a
              :href="supporter.url"
              target="_blank"
              rel="noopener noreferrer"
              class="supporter"
              v-for="(supporter, index) in supporters.slice(0, 2)"
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
          <h3>{{ toLocal("home.supported_by2") }}:</h3>
          <div class="supporter-container">
            <a
              :href="supporter.url"
              target="_blank"
              rel="noopener noreferrer"
              class="supporter"
              v-for="(supporter, index) in supporters.slice(2)"
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
      <h3>{{ toLocal("home.information") }}</h3>
      <!-- <span>{{ toLocal("home.click_and_find") }}</span> -->
      <div class="card-container">
        <div
          class="card"
          v-for="(card, index) in cards"
          :key="'card-' + index"
          @click="card.action"
        >
          <div class="card-content">
            <span class="text">
              {{ toLocal(card.key1) }}
              <b>{{ toLocal(card.key2) }}</b>
            </span>
            <span class="click-here">
              {{toLocal('home.aim_support2')}}
            </span>
            <img
              v-if="card.img != ''"
              :src="require(`@/assets/${card.img}`)"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="extra-text">{{toLocal('home.extraBottomText')}}</div>
    </section>
  </div>
</template>

<script lang="js">
// import { Navigation, Pagination } from "swiper";

// import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
// import VideoPlayer from "@/components/VideoPlayer.vue";
import store from "@/store.js";

// SwiperCore.use([Navigation, Pagination]);
export default {
  name: "LandingPageView",
  components: {
    // Swiper,
    // SwiperSlide,
    // VideoPlayer,
  },
  data() {
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
      ],
      supportersExtra: [
        {
          url: "https://www.euralarm.org",
          url_text: "www.euralarm.org",
          logo: "images/supporters/euralarm.svg",
        },
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
          url: "https://www.kidde.com/fire-safety/en/uk",
          url_text: "www.kidde.com",
          logo: "images/supporters/kidde.svg",
        },
        {
          url: "https://www.eura-tech.eu",
          url_text: "www.eura-tech.eu",
          logo: "images/supporters/eura.svg",
        },
      ],
      cards: [
        {
          key1: "home.if_you_are",
          key2: "home.national_local",
          img: "images/cards/house_2.svg",
          action: () => {
            this.$router.push({ path: "./regulations" });
          },
        },
        {
          key1: "home.if_you_are",
          key2: "home.national_fire",
          img: "images/cards/house_3.svg",
          action: () => {
            this.$router.push({ path: "./messages" });
          },
        },
        {
          key1: "home.if_you_are",
          key2: "home.householder",
          img: "images/cards/house_1.svg",
          action: () => {
            this.$router.push({ path: "./types" });
          },
        },
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
    webinarText() {
      const webinarData = this.toLocal('webinar.registration');
      console.log('Webinar data:', webinarData);
      console.log('Current language:', this.$store.state.lang);
      
      // Jei grąžina objektą su line1, line2 ir t.t.
      if (webinarData && typeof webinarData === 'object' && webinarData.line1) {
        return webinarData;
      }
      // Fallback - jei kažkas negerai, grąžiname anglų kalbos duomenis
      return {
        line1: "We invite you to join the webinar",
        line2: "Full programme & registration:",
        line3: "on 7 November 2025, from 11:00 to 13:00 CET.",
        cta: "Register here!"
      };
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
      // Tikriname, ar fokusas tikras (ne body, ne svg)
      const el = e.target;

      if (!el || el.tagName === "BODY" || el.tagName === "HTML") return;

      // Skrolinam į centrą, bet tik jei elementas matomas
      const rect = el.getBoundingClientRect();
      const visible =
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

      if (!visible) {
        const elementCenter = rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;
        window.scrollTo({
          top: elementCenter,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.facts{
  padding: 80px calc(min(160px, 10vw));
  height: fit-content;
  @media(max-width: 768px){
    padding: 40px calc(min(80px, 5vw));
  }
}
.facts-main-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
  width: 100%;
  .header-title {
    max-width: 45%;
    font-size: 48px;
    line-height: 72px;
    margin: 0 auto;
    margin-bottom: 55px;

    text-align: center;
    font-family: $semiBoldFont;
    @media(max-width: 1280px){
      max-width: 100%;
      line-height: 60px;
    }
    @media (max-width: 768px) {
      max-width: 100%;
      font-size: 36px;
      padding: 0 5vw;
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
  font-size: clamp(24px, 4.5vw, 56px);
  margin: 2rem 0 0 0;
  font-weight:500;
  font-family: $semiBoldFont;
}
h3 {
  font-size: clamp(24px, 4vw, 46px);
  margin: 1rem 0;

  font-family: $semiBoldFont;
}
.hashtag {
  margin-top: 5rem;
  font-size: 48px;
  font-size: clamp(24px, 2.5vw, 36px);
}
section {
  display: flex;
  height: 100vh;
  overflow: hidden;
  @media (max-height: 768px) and (min-width: 1024px) {
    height: 130vh;
  }
  @media (max-height: 600px) {
    height: 150vh;
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
.date {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
   padding: 40px 0 0 calc(min(160px, 10vw));
  //padding: 0 0 0 calc(min(160px, 10vw));
  .text {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: flex-start;
    flex: 1;
    height: 100%;
    margin-top: -7rem;
    /* Add padding-top to prevent overlap with webinar banner */
    padding-top: clamp(160px, 22vh, 220px);
  }
  /* === Fix text padding for smaller screen heights === */
  @media (max-height: 830px) and (min-width: 1025px) {
    .text {
      margin-top: -15rem !important;
      padding-top: clamp(250px, 25vh, 250px) !important;
    }
  }

  @media (max-width: 880px) {
    padding: 0 0 0 calc(min(160px, 10vw));
    flex-direction: column;
    height: calc(100vh - 55px);
    .text {
      width: 100%;
      padding: 0rem;
      margin: 0;
      padding: 0 calc(min(160px, 10vw)) 0 0;
      /* Reset padding-top for mobile since banner is positioned differently */
      padding-top: 0;
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
        right: -10vw;
        bottom: 23vw;
        top: 20px;
        margin: auto;
        height: 30vh;
        width: 30vh;
        min-width: 180px;
        min-height: 180px;
      }
      @media (max-height: 640px) {
        // margin-top: 128px;
        .smoke-detector-container {
          right: 0;
          height: 25vh;
          width: 25vh;
          bottom: 9vh;
          min-width: 180px;
          min-height: 180px;
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
      .smoke-detector-container {
        top: 50px;
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
    padding: 2rem 0;
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
  height: fit-content;
  .red-bar{
    width: 100%;
    height: 200px;
    background-color: #C0554B;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
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
        width: 20vw;
        margin: 1rem;
        &:hover{
          background-color: #FBF3ED;
        }
      }
    }
  }
  .supporter {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 2rem;
    height: 12vw;
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
      background: #DCE3EF;
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
      h3{
        text-align: center;
      }
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
          width: 80%;
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
            max-width: 80%;
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
  padding-bottom: 120px;
  gap: 8px;
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
        flex: 1;
        font-size: clamp(16px, 2vw, 25px);
        transition: color 0.3s;
        // margin-bottom: 1.5rem;
        min-height: 33%;
        justify-content: center;
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
        gap: 1%;
        // align-items: center;
        width: 100%;
        height: 100%;
        padding: calc(min(4vw, 3rem)) calc(min(4vw, 1.5rem));
        text-align: center;
      }
      &:hover {
        background: $mainColor;
        .click-here{
          color: white;
        }
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
    &:not(.click-here){
      font-size: clamp(16px, 1vw, 24px);
    }
    // margin: 3rem 0 5rem;
    height: 30%;
    @media(max-width: 768px){
    height: fit-content;
    }
  }
  @media (max-width: 1320px) {
    padding: 0 calc(min(80px, 10vw));
    padding-bottom: 20px;
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
            font-size: clamp(24px, 3vw, 36px);
          }
          img {
            width: 32vw;
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
      font-size: clamp(20px, 2vw, 28px);
      height: fit-content;
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
            font-size: clamp(32px, 3vw, 36px);
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
  // line-height: 24px;
  font-size: clamp(16px, 1.5vw, 20px);
  margin-top: 16px;
}

.message {
  .footer {
    &.w-carousel {
      overflow-x: hidden;
      position: relative;
      justify-content: center;
      .carousel {
        display: flex;
        justify-content: center;
        // justify-content: flex-start;
        width: 100vw;
        box-sizing: border-box;
        margin: 0 calc(min(160px, 10vw));
        overflow-x: hidden;
        border-radius: 10px;
        // @media (max-width: 1280px) {
        //   width: 75%;
        // }
        .c-video-container {
          // translate: 125px;
          width: fit-content;
          display: flex;
          transition: transform 0.5s;
          .video {
            overflow: visible;
          }
          @media (max-width: 1280px) {
            transform: translate(0);
          }
        }
      }
      // @media (max-width: 1280px) {
      //   padding: 2rem 2vw;
      // }
    }
  }
}
.c-arrow {
  width: 5vw;
  height: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;
  position: absolute;
  z-index: 99;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    svg {
      opacity: 1;
    }
  }
  svg {
    height: 20px;
    width: 40px;
    opacity: 0.7;
    path {
      stroke: white;
    }
  }
}
.c-arrow-left {
  svg {
    transform: rotate(-90deg);
    margin-left: -20px;
  }
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-left: calc(min(160px, 10vw));
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(192, 85, 75, 0) 100%
  );
  transition: 0.5s;
  &:hover {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(192, 85, 75, 0) 100%
    );
  }
  left: 0;
}
.c-arrow-right {
  svg {
    transform: rotate(90deg);
  }
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-right: calc(min(160px, 10vw));
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  &:hover {
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 1) 0%,
      rgba(192, 85, 75, 0) 100%
    );
  }
  right: 0;
}
.mobile-carousel-footer {
  display: flex;
  min-height: 50vw;
  justify-content: flex-end;
  overflow: hidden;
  background: #c0554b;
  padding: 25px 0;
  position: relative;
  .mob-carousel-btn {
    position: absolute;
    z-index: 100;
    top: 0;
    height: 100%;
    border: none;
    width: 10vw;
    svg {
      height: 25px;
      width: 13px;
      stroke: white;
      opacity: 0.5;
    }
    &.left {
      left: 0;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(192, 85, 75, 0) 100%
      );
    }
    &.right {
      right: 0;
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(192, 85, 75, 0) 100%
      );
    }
  }
  .mobile-carousel {
    display: flex;
    transform: translate(51vw);
    width: fit-content;
    transition: transform 0.5s;
    @media (max-width: 450px) {
      transform: translate(55vw);
    }
  }
  .video {
    height: 60vw;
    width: 60vw;
  }
}
.extra-text{
  display: flex;
  align-items: flex-end;
  padding-top: 20px;
}

.aim-section{
  background-color: #FBF3ED;
  padding: 48px calc(min(160px, 10vw));
  height: fit-content;
  .column-container{
    display: flex;
    flex-direction: column;
    gap: clamp(6px, 2vw, 12px);
    .text-list{
      display: flex;
      flex-direction: column;
      font-size: clamp(14px, 2vw, 18px);
      gap: 4px;
    }
    .aim-support{
      font-size: clamp(14px, 2vw, 18px);
      .link{
        transition: 0.25s;
        font-weight: 600;
        color: #C0554B;
        text-decoration: underline;
        cursor: pointer;
        &:hover{
          color: #483A5B;
        }
      }
    }
  }
  .aim-title{
    font-size: clamp(18px, 5vw, 24px);
  }
}
.click-here{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #C0554B;
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 600;
  transition: 0.25s;
}
/* Accessibility Banner (pagal Figma) */

.accessibility-banner {
  width: 100%;
  min-height: 44px;
  background-color: #483a5b;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Barlow;
  font-size: 13px;
  line-height: 1.5;
  padding: 0 24px;
  box-sizing: border-box;
  position: relative;
  z-index: 5;
  //nuimti po bannerio
  margin-top: clamp(120px, calc(250px + (100vw - 1077px) * (250 - 120) / (1280 - 1077)), 250px);

  p {
    margin: 0;
    color: #ffffff;
    max-width: 1280px;
    width: 100%;
    text-align: left; /* kairinis lygiavimas */
    strong {
      font-weight: 600;
    }
  }
  @media (max-width: 880px) {
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    justify-content: flex-start;
    padding: 0 16px;

    p {
      text-align: left;
      line-height: 1.6;
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
.webinar-banner {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 0px;
  position: absolute;
  top: -50px;
  left: calc(min(160px, 10vw) + 12px);
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: #1E1826;
  background: none;
  max-width: 420px;
  z-index: 10;
  /* Make banner more responsive to different language text lengths */
  min-height: 80px;
  flex-wrap: wrap;

  &.mobile-only {
    display: none;
  }

  .icon {
    display: flex;
    align-items: baseline;
    flex-shrink: 0;

    img {
      width: 32px;
      height: 32px;
      margin-bottom: 2px;
      transform: translateY(3px); /* Move logo down by 3px */
    }
  }

  .text {
    font-size: clamp(16px, 1.8vw, 20px);
    line-height: 1.4;
    font-family: 'Barlow Semi Condensed', sans-serif;
    /* Better text wrapping for different languages */
    word-wrap: break-word;
    hyphens: auto;

    p {
      margin: 0 0 2px 0;
      color: #1E1826;
      font-weight: 400;

      /* === Pirmoji eilutė (Line 1) — Didesnė ir ryškesnė === */
      &.title {
        font-weight: 900; /* Barlow Black (jei įkelta iš Google Fonts) */
        font-size: clamp(24px, 2.8vw, 30px);  /* Responsive title size */
        color: #483A5B;   /* Pagal Figma */
        line-height: 1.3;
        margin-bottom: 6px;
      }

      /* === Vidurinės eilutės === */
      strong {
        font-weight: 700;
        color: #1E1826;
      }

      /* === Registracijos nuoroda === */
      &.register {
        margin-top: 6px;
        margin-bottom: 0;

        a {
          color: #DB5F53;
          font-weight: 700;
          text-decoration: underline;
          transition: color 0.25s;
          font-size: clamp(14px, 1.6vw, 18px);

          &:hover {
            color: #BE544A;
          }
        }
      }
    }
  }

  /* === Responsive (Tablet) === */
  @media (max-width: 1024px) {
    // position: static;
    margin-top: 24px;
    max-width: none;
  }

  /* === Desktop adjustments for better text responsiveness === */
  @media (min-width: 1025px) {
    /* Position banner lower on desktop */
    position: absolute;
    top: -50px;
    /* Ensure banner doesn't overlap with main content */
    max-width: min(463px, 54vw);
  }

  /* === Fix for smaller screen heights === */
  @media (max-height: 830px) and (min-width: 1025px) {
    position: absolute;
    top: 10px; /* Move it down from top instead of negative positioning */
    left: calc(min(160px, 10vw) + 12px);
    max-width: min(463px, 54vw);
  }

  /* === Mobile Variant === */
  @media (max-width: 880px) {
    /* Hide desktop banner */
    &:not(.mobile-only) {
      display: none;
    }

    /* Show mobile banner */
    &.mobile-only {
      display: flex;
      position: static;
      margin: 16px 0;
      padding: 0;
      gap: 8px;
      max-width: none;

      .text {
        font-size: 14px;

        p {
          margin: 0 0 1px 0;

          &.title {
            font-weight: 900;  /* Extra bold / Black */
            font-size: 20px;   /* 👈 Padidinta mobiliajame */
            color: #483A5B;
            margin-bottom: 3px;
            line-height: 1.35;
          }

          &.register {
            margin-top: 4px;
          }
        }
      }

      .icon img {
        width: 18px;
        height: 18px;
      }
    }
  }
}

</style>
