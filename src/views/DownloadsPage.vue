<template>
  <div class="downloads">
    <div class="top-section">
      <div class="text">
        <h2>
          More Information & <br />
          Downloads
        </h2>
        <span>Read, watch videos and download more information!</span>
      </div>
      <div class="red-bar">
        <span
          >National Fire Protection Association (NFPA) Safety tips for smoke
          alarms:</span
        >
        <div class="video-container">
          <div class="video" v-for="(video, index) in safetyTips" :key="index">
            <iframe
              :src="video.embed_url"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span>{{ video.url }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div class="leaflet-container">
        <h3>Check out the leaflets and guidelines!</h3>
        <span>Click on the image to download the leaflet.</span>
        <div class="leaflets">
          <div
            class="leaflet"
            :style="{
              backgroundImage:
                'url(' + require(`@/assets/${leaflet.img}`) + ')',
            }"
            v-for="(leaflet, index) in leaflets"
            :key="index"
            @click="downloadLeaflet(leaflet)"
          >
            <div class="bottom-content">
              <div class="leaflet-text">
                {{ leaflet.text }}
              </div>
              <div class="donwload-btn">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.875 0V13.875H4.625L18.5 27.75L32.375 13.875H23.125V0H13.875ZM0 32.375V37H37V32.375H0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spain-container">
        <div class="title-container">
          <span class="spain-title"
            >Fire Prevention Week Campaign in Spain:</span
          >
        </div>
        <div class="section-container">
          <div class="video-container-with-text">
            <span class="video-title">Video About Smoke Alarms:</span>
            <div class="video">
              <iframe
                :src="`https://www.youtube.com/embed/NDShJjSbA1Y`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <span class="video-url"
              >https://www.youtube.com/watch?v=NDShJjSbA1Y</span
            >
          </div>
        </div>
        <div class="section-container">
          <div class="brochure-container">
            <span class="title">Brochure About Smoke Alarms:</span>
            <div
              class="leaflet"
              :style="{
                backgroundImage:
                  'url(' + require(`@/assets/${spainBrochure.img}`) + ')',
              }"
              @click="downloadLeaflet(spainBrochure)"
            >
              <div class="bottom-content">
                <div class="leaflet-text">
                  {{ spainBrochure.text }}
                </div>
                <div class="donwload-btn">
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.875 0V13.875H4.625L18.5 27.75L32.375 13.875H23.125V0H13.875ZM0 32.375V37H37V32.375H0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="why-videos">
        <span class="why-videos-title"
          >Why installing smoke alarms is important?</span
        >
        <span class="why-videos-subTitle">Videos from Ireland</span>
        <div class="main-video">
          <swiper
            ref="swiper"
            :slides-per-view="1"
            :space-between="0"
            :allowTouchMove="false"
            direction="vertical"
            @swiper="onSwiper"
          >
            <swiper-slide
              v-for="(video, index) in videoStack"
              :key="`${video.link}-${index}`"
            >
              <!-- <video

                :ref="`mainMessageVideo-${index}`"
                :poster="require(`@/assets/${video.img}`)"
                
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
              <video-player :ref="`mainMessageVideo-${index}`" :options="{
                autoplay: false,
                controls: true,
                sources: [
                   {
                    src:
                      require(`@/assets/${video.link}`),
                      type: 'video/mp4'
                  }
                ]
              }
              "
              />
            </swiper-slide>
          </swiper>
        </div>
        <div class="other-videos">
          <div
            class="video"
            v-for="(video, index) in windowWidth < 768 ? videos : footerVideos"
            :key="index"
            :class="{ loading: isLoadingNewVideo }"
          >
            <transition name="fade" mode="out-in">
              <video v-if="windowWidth < 768" :ref="`video-${index}`" controls>
                <source
                  :src="require(`@/assets/${video.link}`)"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <img
                v-else
                :src="require(`@/assets/${video.img}`)"
                :key="video.id"
                alt=""
                @click="setMainMessageVideo(video, index)"
              />
            </transition>
            <transition name="fade" mode="out-in">
              <div
                v-if="windowWidth >= 768"
                :key="video.id"
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
      </div>
      <div class="testing-videos">
        <h3>How to test your smoke alarm?</h3>
        <span class="testing-videos-subTitle">Videos from USA</span>
        <div class="video-container">
          <div class="col">
            <div class="main-video" ref="mainTestingVideo">
              <video
                controls
                :key="activeTestingVideo.link"
                :poster="require(`@/assets/${activeTestingVideo.img}`)"
              >
                <source
                  :src="require(`@/assets/${activeTestingVideo.link}`)"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col">
            <div class="videos">
              <div
                class="video"
                v-for="(video, index) in testing_videos.filter(
                  (el) => !el.active
                )"
                :key="index"
              >
                <transition name="fade" mode="out-in">
                  <img
                    :ref="`testing-video-primary-${index}`"
                    :src="require(`@/assets/${video.img}`)"
                    :key="video.id"
                    alt=""
                    @click="setMainTestingVideo(video)"
                  />
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="red-circle"></div>
      <div class="extra-container">
        <span class="title">Raising Awareness of Fire Risk Among Schools</span>
        <span class="subtitle"
          >Video by French Federation of Fire Professions(FFMI)</span
        >
        <div class="video-container">
          <div class="video">
            <iframe
              :src="`https://www.youtube.com/embed/9B49KCXF2BY`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span>https://youtu.be/9B49KCXF2BY</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import VideoPlayer from '@/components/VideoPlayer.vue';
SwiperCore.use([Navigation, Pagination]);
export default {
  name: "DownloadsPage",
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer
  },
  metaInfo: {
    title: "Best practices",
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      safetyTips: [
        {
          embed_url: "https://youtube.com/embed/vCkHtCLpLbY",
          url: "https://youtube.com/watch?v=vCkHtCLpLbY",
        },
        {
          embed_url: "https://youtube.com/embed/4LQ6uhXAzvk",
          url: "https://youtube.com/watch?v=4LQ6uhXAzvk",
        },
        {
          embed_url: "https://youtube.com/embed/SyFjXj11aio",
          url: "https://youtube.com/watch?v=SyFjXj11aio",
        },
      ],
      leaflets: [
        {
          img: "images/downloads/leaflet1.png",
          download_path: "/downloads/Smoke_and_Heat_Alarm_brochure_Ireland.pdf",
          text: "Smoke and Heat Alarm brochure (Ireland)",
        },
        {
          img: "images/downloads/leaflet2.png",
          download_path: "/downloads/NFPA-FireAlarmBasicsFactSheet.pdf",
          text: "NFPA - Fire Alarm Basics Fact Sheet",
        },
        {
          img: "images/downloads/leaflet3.png",
          download_path: "/downloads/London_Fire_Brigade_Advice.pdf",
          text: "London Fire Brigade Advice",
        },
        {
          img: "images/downloads/leaflet4.png",
          download_path: "/downloads/CFPA_E_Guideline_No_10_2008_F.pdf",
          text: "CFPA_Guidelines",
        },
      ],
      videoStack: [
        {
          id: 0,
          link: "videos/landingpage/2.FIRESAFETY_Cooking.mp4",
          img: "images/messages_of_support/video2.jpg",
        },
      ],
      videos: [
        {
          id: 0,
          link: "videos/landingpage/2.FIRESAFETY_Cooking.mp4",
          img: "images/messages_of_support/video2.jpg",
        },
        {
          id: 1,
          link: "videos/landingpage/4.FIRESAFETY_SOCKET.mp4",
          img: "images/messages_of_support/video4.jpg",
        },
        {
          id: 2,
          link: "videos/landingpage/6.FireSafety-Christmas lights.mp4",
          img: "images/messages_of_support/video6.jpg",
        },
        {
          id: 3,
          link: "videos/landingpage/3.FIRESAFETY_PHONE_.mp4",
          img: "images/messages_of_support/video3.jpg",
        },
        {
          id: 4,
          link: "videos/landingpage/1.FIRESAFETY_CANDLES.mp4",
          img: "images/messages_of_support/video1.jpg",
        },
        {
          id: 5,
          link: "videos/landingpage/5.FIRESAFETY_TONGS.mp4",
          img: "images/messages_of_support/video5.jpg",
        },
      ],
      currentlyHoveringVideo: "",
      mainMessageVideo: {
        id: 0,
        link: "videos/landingpage/2.FIRESAFETY_Cooking.mp4",
        img: "images/messages_of_support/video2.jpg",
      },
      testing_videos: [
        {
          id: 0,
          link: "videos/downloads/bedroom_b-roll.mp4",
          img: "images/downloads/bedroom.jpg",
          active: true,
        },
        {
          id: 1,
          link: "videos/downloads/batteries_b-roll.mp4",
          img: "images/downloads/batteries.jpg",
          active: false,
        },
        {
          id: 2,
          link: "videos/downloads/testing_b-roll.mp4",
          img: "images/downloads/testing.jpg",
          active: false,
        },
      ],
      footerVideos: [],
      spainBrochure: {
        img: "images/downloads/Asset8.png",
        download_path:
          "/downloads/tripticos-consejos-detectores-incendios-en-hogar.pdf",
        text: "Advice on Smoke Alarms in the Home.",
      },
      swiper: null,
      isLoadingNewVideo: false,
      showTransitionImages: false,
      selectedVideoID: 0,
    };
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
  computed: {
    activeTestingVideo() {
      return this.testing_videos.find((el) => el.active);
    },
  },

  mounted() {
    this.footerVideos = this.videos.filter((el) => el.id != 0);
    let velocityScript = document.createElement("script");
    velocityScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"
    );
    document.head.appendChild(velocityScript);
  },
  methods: {
    downloadLeaflet(leaflet) {
      let link = document.createElement("a");
      link.setAttribute("download", leaflet.text);
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
             
            }, 350);
          } else {
            this.isLoadingNewVideo = false;
            this.playVideo();
          }
        });
      });
    },
    onSwiper(swiper) {
      if (this.swiper == null) {
        this.swiper = swiper;
      }
    },
    setMainTestingVideo(video) {
      let currentActive = this.testing_videos.findIndex((el) => el.active);
      this.testing_videos[currentActive].active = false;
      let selectedVideo = this.testing_videos.findIndex(
        (el) => el.id == video.id
      );
      this.testing_videos[selectedVideo].active = true;
      this.showTransitionImages = true;
      setTimeout(() => {
        this.showTransitionImages = false;
      }, 10000);
    },
  pauseAllVideos(){
    this.$nextTick(() => {
        this.videoStack.forEach((slide,index) => {
          if(this.$refs["mainMessageVideo-" + index]){
            let player = this.$refs["mainMessageVideo-" + index][0];
            if(player){
              player.player.pause();
            }
          }
            
        });
        });
    },
    playVideo(){
        this.$nextTick(() => {
          setTimeout(()=>{
            console.log(this.videoStack.length,this.$refs["mainMessageVideo-2"])

            this.$refs["mainMessageVideo-"+(this.videoStack.length-1)][0].player.play()
          },100)
        })
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.top-section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 191px;
  @media (max-width: 1080px) {
    padding-top: 100px;
  }
  @media (max-width: 768px) {
    height: fit-content;
    padding-top: 20px;
  }
}
h2 {
  font-size: clamp(36px, 5vw, 56px);
  font-family: $semiBoldFont;
}
.red-circle {
  position: absolute;
  background: $mainColor;
  z-index: -1;
  right: -25vw;
  bottom: 9vw;
  width: 62vw;
  height: 62vw;
  border-radius: 50%;
}
.text {
  height: 100%;
  padding: 50px calc(min(160px, 10vw));
  span {
    font-size: clamp(16px, 5vw, 24px);
  }
}
.red-bar {
  display: flex;
  flex-direction: column;
  background: #c0554b;
  padding: 0 calc(min(160px, 10vw));
  color: white;
  font-size: clamp(16px, 5vw, 24px);
  min-height: 300px;
  justify-content: center;
  @media (min-width: 1080px) {
    min-height: 450px;
    .video-container {
      .video {
        min-height: 14vw;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 1080px) {
    min-height: 450px;
    .video-container {
      .video {
        min-height: 20vw;
        min-width: 18vw;
        margin: 0 5px;
        span {
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 15px calc(min(160px, 10vw));
  }
  span {
    margin-bottom: 1rem;
    font-family: $semiBoldFont;
  }
  .video-container {
    display: flex;
    .video {
      display: flex;
      flex-direction: column;
      align-items: center;
      aspect-ratio: 16/9;
      iframe {
        border-radius: 10px;
        overflow: hidden;
        height: 100%;
        width: 100%;
      }
      span {
        font-size: clamp(12px, 1.4vw, 16px);
        font-family: $mainFont;
        margin: 5px 0 0;
      }
      &:first-child {
        margin-left: 0;
        @media (max-width: 768px) {
          margin: 0 auto;
        }
      }
      &:last-child {
        margin-right: 0;
        @media (max-width: 768px) {
          margin: 0 auto;
        }
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      .video {
        height: initial;
        justify-content: center;
        margin: 20px auto;
        span{
          font-size: 16px;
        }
      }
    }
  }
}
h3 {
  font-size: clamp(24px, 5vw, 32px);
  margin: 0 0 15px;
}
.leaflet-container {
  margin-top: 40px;
  min-height: 640px;
  padding: 0 calc(min(160px, 10vw));
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-height: 700px) {
    min-height: 500px;
  }
  .leaflets {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .leaflet {
    position: relative;
    background-repeat: no-repeat;
    background-position: top;
    height: 300px;
    width: 225px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    @media (max-width: 1080px) {
      width: 180px;
      height: 250px;
    }
    @media (max-width: 768px) {
      margin: 20px 0;
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
    }
    .leaflet-text {
      width: 100%;
    }
  }
  span {
    font-size: 16px;
  }
}
.bottom-section {
  overflow: hidden;
  position: relative;
  width: 100%;
}
.main-video {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 3;
  min-height: calc(min(500px, 30vw));
  max-height: 90%;
  border-radius: 15px;
  margin: 0;
  overflow: hidden;
  .carousel {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    // max-height: 100%;
    // transition: top 0.3s;
  }
  video,
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    min-height: 100%;
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
.other-videos {
  display: flex;
  .video {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: calc(min(250px, 10vw));
    min-width: calc(min(300px, 11vw));
    margin: 0 1rem;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    aspect-ratio: 16/19;
    @media (max-width: 768px) {
      margin: 5px;
    }
    video,
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
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
  width: 4vw;
  height: 4vw;
  max-width: 30px;
  max-height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.67);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: auto;
  cursor: pointer;
  svg {
    margin-right: -4px;
    width: 35%;
  }
}
.why-videos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px calc(min(160px, 10vw));
  background: #fbf3ed;
  height: 100vh;
  @media (max-width: 1280px) {
    height: 85vh;
  }
  @media (max-width: 1080px) {
    height: 60vh;
    padding-top: 260px;
    padding-bottom: 300px;
  }
  .why-videos-title {
    font-size: 32px;
    line-height: 48px;
    font-family: $semiBoldFont;
  }
  .why-videos-subTitle {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    height: fit-content;
    padding-top: 64px;
    padding-bottom: 64px;
    .why-videos-title {
      text-align: center;
    }
    .why-videos-subTitle {
      text-align: center;
    }
  }
  .main-video {
    position: relative;
    max-width: 80%;
    aspect-ratio: 16/9;
    width: 80%;
    height: auto;
    margin: 20px auto;
    overflow: hidden;
    border-radius: 20px;
    max-height: 60vw;
    @media (min-width: 1280px) {
      width: 60%;
    }
    @media (max-width: 1280px) {
      max-height: 50vw;
      max-width: 55vw;
    }
    @media (max-width: 1080px) {
      max-height: 40vw;
      width: 60%;
    }
    @media (max-width: 768px) {
      min-height: 80vw;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
  }
}
.testing-videos {
  padding: 50px calc(min(160px, 10vw));
  display: flex;
  flex-direction: column;
  .testing-videos-subtitle {
    font-size: 20px;
    line-height: 24px;
  }
  .video-container {
    display: flex;
    align-items: center;
  }
  .col {
    display: flex;
    height: 100%;
    margin-top: 1rem;
    margin-right: 2rem;
    &:first-child {
      width: 70%;
    }
    &:last-child {
      width: 30%;
    }
    @media (max-width: 768px) {
      margin: 5px;
    }
    .videos {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      .video {
        position: relative;
        margin: 16px;
        @media (max-width: 768px) {
          margin: 0;
        }
      }
      img {
        max-width: 100%;
        border-radius: 10px;
        &.secondary {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.3s;
}
.move-enter {
  // transform: translateX(100px);
}
.move-leave-to {
  transform: translate(-250px, 100px);
}
.move-enter, .move-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
@media (max-width: 768px) {
  .why-videos {
    .main-video {
      display: none;
    }
  }
  .other-videos {
    display: flex;
    flex-direction: column;
    .video {
      margin-right: 0;
      min-height: 80vw;
      max-height: 80vw;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.spain-container {
  width: 100%;
  display: flex;
  background-color: #c0554b;
  box-sizing: border-box;
  padding: 20px calc(min(160px, 10vw));
  align-items: start;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .section-container {
    width: 33%;
    margin-right: 1.5%;
    margin-left: 1.5%;
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .video-container-with-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 75%;
    @media (max-width: 1280px) {
      width: 95%;
    }
    @media (max-width: 768px) {
      margin: 0;
      width: initial;
    }
    .video-title {
      height: 15%;
      padding: 20px 0;
      width: 100%;
      font-size: 24px;
      line-height: 32px;
      color: white;
      font-family: $semiBoldFont;
      text-align: start;
      @media (max-width: 1080px) {
        font-size: 20px;
      }
      @media (max-width: 768px) {
        width: 95%;
        text-align: center;
      }
    }
    .video-url {
      font-size: 16px;
      line-height: 24px;
      color: white;
      margin-top: 5px;
      white-space: nowrap;
      @media (max-width: 768px) {
        width: 95%;
        text-align: center;
        white-space: initial;
      }
    }
    .video {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      min-height: 180px;
      border-radius: 10px;
      iframe {
        border-radius: 10px;
        min-height: 180px;
      }
    }
  }
  .brochure-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1080px) {
      margin-left: 5%;
    }
    @media (max-width: 768px) {
      margin: 0;
      width: initial;
    }
    .title {
      height: 15%;
      padding: 20px 0;
      width: 100%;
      font-size: 24px;
      line-height: 32px;
      color: white;
      font-family: $semiBoldFont;
      text-align: start;
      @media (max-width: 1080px) {
        font-size: 20px;
      }
      @media (max-width: 768px) {
        width: 98%;
        text-align: center;
      }
    }
    .leaflet {
      position: relative;
      background-position: top;
      min-height: 200px;
      width: 300px;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      @media (max-width: 768px) {
        width: initial;
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
      }
      .leaflet-text {
        width: 100%;
      }
    }
    span {
      font-size: 16px;
    }
  }
  .title-container {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    @media (max-width: 1080px) {
      width: 40%;
    }
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
    .spain-title {
      font-size: 32px;
      line-height: 48px;
      color: white;
      width: 100%;
      height: 100%;
      margin-right: calc(min(80px, 7vw));
      @media (max-width: 1080px) {
        font-size: 24px;
        margin: 0;
        margin-right: 8px;
      }
      @media (max-width: 768px) {
        margin: 0;
      }
    }
  }
}
.extra-container {
  min-width: 400px;
  background-color: #fbf3ed;
  display: flex;
  flex-direction: column;
  padding: 40px calc(min(160px, 10vw));
  .title {
    font-size: 32px;
    line-height: 42px;
    font-family: $semiBoldFont;
    margin-bottom: 8px;
  }
  .subtitle {
    font-size: 20px;
    line-height: 24px;
  }
  .video-container {
    display: flex;
    min-height: 60%;
    @media (max-width: 768px) {
      flex-direction: column;
      min-height: 100%;
    }
    .video {
      display: flex;
      flex-direction: column;
      min-width: 300px;
      min-height: 200px;
      max-height: 100%;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      text-align: center;
      font-size: 16px;
      line-height: 24px;
      margin: 32px 0;
      @media (max-width: 768px) {
        margin: 5px;
      }
      iframe {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        @media (max-width: 768px) {
          min-height: 300px;
        }
      }
    }
  }
}
</style>
