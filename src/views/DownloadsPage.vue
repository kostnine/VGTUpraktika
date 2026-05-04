<template>
  <div class="downloads">
    
    <div class="top-section">
      <div class="text">
        <h2 v-html="toLocal('downloads.more_info')"></h2>
        <span>{{ toLocal("downloads.read") }}</span>
      </div>
      <!-- Video Section - Testimonials -->
    <div class="video-section">
        <div class="video-wrapper">
        <div class="video-header">
            <span class="testimonials-title">Real voices. Real survival. Real protection Testimonials.</span>
        </div>
        <div class="video-container">
            <vueper-slides
            class="no-shadow testimonials-slider"
            :infinite="false"
            :always-refresh-clones="true"
            :visible-slides="4"
            :slide-multiple="false"
            :bullets="false"
            :arrows="true"
            :arrows-outside="false"
            :gap="0.5"
            :slide-ratio="1 / 3"
            :dragging-distance="200"
            fixed-height="251px"
            :breakpoints="{ 1860: {visibleSlides: 3, slideRatio: 1/3, arrowsOutside: true}, 1370: {visibleSlides: 2, slideRatio: 1/3, arrowsOutside: true}, 1275: {visibleSlides: 2, slideRatio: 1/2, arrowsOutside: true}, 1063: {visibleSlides: 1, slideRatio: 1/1, arrowsOutside: true}}">
            <vueper-slide 
                v-for="(video, idx) in testimonialsVideos"
                :key="`testimonial-${idx}`">
                <template #content>
                <div class="video-item">
                    <div class="video-frame" v-if="video.type === 'youtube'">
                    <iframe
                        :src="video.embed_url"
                        title="Testimonial video"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    </div>
                    <div class="video-frame" v-else-if="video.type === 'local'">
                    <div v-if="!playingVideos[idx]" class="video-thumbnail" @click="playThumbnailVideo(idx)">
                        <img :src="video.thumbnail" :alt="`${toLocal('alt.testimonial_video_thumbnail')} ${idx + 1}`" />
                        <div class="play-button-overlay">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="rgba(255,255,255,0.9)"/>
                            <path d="M20 15L35 25L20 35V15Z" fill="#1E1826"/>
                        </svg>
                        </div>
                    </div>
                    <video v-else controls autoplay>
                        <source :src="video.src" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <span v-if="video.type === 'youtube'" class="video-url">{{ video.url }}</span>
                    <span v-else class="video-url" style="visibility: hidden;">&nbsp;</span>
                </div>
                </template>
            </vueper-slide>
            </vueper-slides>
        </div>
        </div>
    </div>
      <div class="game-container">
        <div class="title">
            <h2>{{toLocal('info.game-title')}}</h2>
        </div>
        <div class="inner-container">
            <div class="desc" v-html="toLocal('info.game-desc')">
            </div>
            <div class="game-image" @click="goToGame()"
                                @keyup.enter="goToGame()" 
                    @keyup.space="goToGame()" 
                    tabindex="0" 
                    role="button" 
                    aria-label="Play fire safety game"
                    :title="toLocal('info.opens-link-tooltip')">
                <span class="link-indicator" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 1.33325H14.6667V5.33325" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 7.99992L14.6667 1.33325" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 8.66659V11.9999C14 13.1045 13.1046 13.9999 12 13.9999H4C2.89543 13.9999 2 13.1045 2 11.9999V3.99992C2 2.89535 2.89543 1.99992 4 1.99992H7.33333" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <img src="@/assets/images/game.png" :alt="toLocal('alt.game_image')" />
            </div>
        </div>
        <div class="under-button" @click="goToGame()"
                            @keyup.enter="goToGame()" 
                    @keyup.space="goToGame()" 
                    tabindex="0" 
                    role="button" 
                    aria-label="Play fire safety game"
                    :title="toLocal('info.opens-link-tooltip')">
            <span>{{ toLocal('info.lets-play') }} </span>
            <span class="link-indicator button" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6667 1.33325H14.6667V5.33325" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 7.99992L14.6667 1.33325" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 8.66659V11.9999C14 13.1045 13.1046 13.9999 12 13.9999H4C2.89543 13.9999 2 13.1045 2 11.9999V3.99992C2 2.89535 2.89543 1.99992 4 1.99992H7.33333" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 22L12 12L2 2" stroke="white" stroke-width="3"/>
            </svg>
                
        </div>
    </div>
    <div class="information-container webinar">
        <div class="spain-container webinar">
            <div class="title-container">
            <h2 class="spain-title"
                >{{ toLocal("downloads.webinar_title") }}</h2
            >
            </div>
            <div class="video-row">
            <!-- 2025 Final Report -->
            <div class="section-container download">
              <h3 class="title-under">
                {{toLocal('regulations.download')}}
              </h3>
              <h4 class="video-title"
                    >{{ toLocal(webinarBrochures[0].text) }}:</h4
                >
              <div class="brochure-container">
            <div
            class="leaflet"
            :style="{
                backgroundImage:
                'url(' + require(`@/assets/${webinarBrochures[0].img}`) + ')',
            }"
                            @click="downloadLeaflet(webinarBrochures[0])"
                            @keyup.enter="downloadLeaflet(webinarBrochures[0])"
                            @keyup.space="downloadLeaflet(webinarBrochures[0])"
                            tabindex="0"
                            role="button"
                            :aria-label="`Download ${toLocal(webinarBrochures[0].text)}`"
            >
            <div class="bottom-content">
                <div class="leaflet-text">
                {{ toLocal(webinarBrochures[0].text) }}
                </div>
                <div class="download-btn">
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
            <!-- 2025 European Smoke Alarm Day Webinar -->
            <div class="section-container">
                <div class="video-container-with-text">
                <h3 class="title-under">
                  {{toLocal('regulations.watch')}}
                </h3>
                <h4 class="video-title"
                    >2025 European Smoke Alarm Day Webinar:</h4
                >
                <div class="video">
                    <iframe
                    :src="`https://www.youtube.com/embed/6nvdsPeZ4Zs`"
                    title="2025 European Smoke Alarm Day Webinar"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    ></iframe>
                </div>
                <span class="video-url"
                    >https://www.youtube.com/watch?v=6nvdsPeZ4Zs</span
                >
                </div>
            </div>
            <!-- 2024 Final Report -->
            <div class="section-container download">
              <h3 class="title-under">
                {{toLocal('regulations.download')}}
              </h3>
              <h4 class="video-title"
                    >{{ toLocal(webinarBrochures[1].text) }}:</h4
                >
              <div class="brochure-container">
            <div
            class="leaflet"
            :style="{
                backgroundImage:
                'url(' + require(`@/assets/${webinarBrochures[1].img}`) + ')',
            }"
                            @click="downloadLeaflet(webinarBrochures[1])"
                            @keyup.enter="downloadLeaflet(webinarBrochures[1])"
                            @keyup.space="downloadLeaflet(webinarBrochures[1])"
                            tabindex="0"
                            role="button"
                            :aria-label="`Download ${toLocal(webinarBrochures[1].text)}`"
            >
            <div class="bottom-content">
                <div class="leaflet-text">
                {{ toLocal(webinarBrochures[1].text) }}
                </div>
                <div class="download-btn">
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
            <!-- 2024 European Smoke Alarm Day Webinar -->
            <div class="section-container">
                <div class="video-container-with-text">
                <h3 class="title-under">
                  {{toLocal('regulations.watch')}}
                </h3>
                <h4 class="video-title"
                    >{{ toLocal("downloads.webinar_title_date") }}:</h4
                >
                <div class="video">
                    <iframe
                    :src="`https://www.youtube.com/embed/nq1zr_lYkN4`"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    ></iframe>
                </div>
                <span class="video-url"
                    >https://www.youtube.com/watch?v=nq1zr_lYkN4</span
                >
                </div>
            </div>
                </div>
            </div>
    </div>
      <div class="red-bar">
        <h2>{{ toLocal("downloads.nfpa") }}:</h2>
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
      <div class="leaflet-container red-bg">
        <h3>{{ toLocal("downloads.check_leaf") }}</h3>
        <span>{{ toLocal("downloads.download_leaf") }}</span>
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
            @keyup.enter="downloadLeaflet(leaflet)"                  
            @keyup.space="downloadLeaflet(leaflet)"         
            tabindex="0"                               
            role="button"              
            :aria-label="`Download ${toLocal(leaflet.text)}`"
          >
            <div class="bottom-content">
              <div class="leaflet-text">
                {{ toLocal(leaflet.text) }}
              </div>
              <div class="download-btn">
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
      <div class="why-videos">
        <h2 class="why-videos-title">{{
          toLocal("downloads.why_installing")
        }}</h2>
        <span class="why-videos-subTitle">{{
          toLocal("downloads.videos_ireland")
        }}</span>
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
                :alt="`${toLocal('alt.video_thumbnail')} ${index + 1}`"
                @click="setMainMessageVideo(video, index)"
                @keyup.enter="setMainMessageVideo(video, index)"
                @keyup.space="setMainMessageVideo(video, index)"             
                tabindex="0"              
                role="button"              
                :aria-label="`Download ${toLocal(video.img)}`"
              />
            </transition>
            <transition name="fade" mode="out-in">
              <div
                v-if="windowWidth >= 768"
                :key="video.id"
                class="play-button"
                @click="setMainMessageVideo(video, index)"
                @keyup.enter="setMainMessageVideo(video, index)"
                @keyup.space="setMainMessageVideo(video, index)"             
                tabindex="0"              
                role="button"              
                :aria-label="`Download ${toLocal(video.img)}`"
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
        <h3>{{ toLocal("downloads.how_to_test") }}</h3>
        <span class="testing-videos-subtitle">{{
          toLocal("downloads.videos_usa")
        }}</span>
        <div class="video-container" v-if="windowWidth >= 768">
          <div class="col">
            <div class="main-video" ref="mainTestingVideo">
              <video-player
                ref="testingMainVideo"
                :key="activeTestingVideo.link"
                :options="{
                  autoplay: false,
                  controls: true,
                  sources: [
                    {
                      src: require(`@/assets/${activeTestingVideo.link}`),
                      type: 'video/mp4',
                    },
                  ],
                }"
              />
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
                    :alt="`${toLocal('alt.video_thumbnail')} ${index + 1}`"
                    @click="setMainTestingVideo(video)"
                  @keyup.enter="setMainTestingVideo(video)"
                @keyup.space="setMainTestingVideo(video)"             
                tabindex="0"              
                role="button"              
                :aria-label="`Download ${toLocal(video.img)}`"
                  />
                </transition>
                <transition name="fade" mode="out-in">
                  <div
                    :key="video.id"
                    class="play-button"
                    @click="setMainTestingVideo(video)"
                @keyup.enter="setMainTestingVideo(video)"
                @keyup.space="setMainTestingVideo(video)"             
                tabindex="0"              
                role="button"              
                :aria-label="`Download ${toLocal(video.img)}`"
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
        </div>
        <div class="video-container-extra" v-else>
          <div
            class="row"
            v-for="(video, index) in testing_videos"
            :key="index"
          >
            <video-player
              ref="testingMainVideo"
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
          </div>
        </div>
      </div>
      <div class="red-circle"></div>
      <div class="extra-container">
        <div class="half">
          <h3 class="title">{{
            toLocal("downloads.raising_awareness")
          }}</h3>
          <span class="subtitle">{{ toLocal("downloads.video_french") }}</span>
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
        <div class="half">
          <h3 class="title"> {{ toLocal("practices.how_to_install") }}</h3>
          <span class="subtitle">{{
            toLocal("downloads.video_home_depot")
          }}</span>
          <div class="video-container">
            <div class="video">
              <iframe
                :src="`https://www.youtube.com/embed/Y8duhoCdDz4`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <span>https://youtu.be/Y8duhoCdDz4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="facts-share">
          <span class="share-title">{{ toLocal("facts.share_story") }}</span>
          <button type="button" @click="mailto">info@eurofsa.org</button>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import VideoPlayer from "@/components/VideoPlayer.vue";
import {VueperSlides, VueperSlide} from "vueperslides";
import 'vueperslides/dist/vueperslides.css'
SwiperCore.use([Navigation, Pagination]);
export default {
  name: "DownloadsPage",
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
    VueperSlides,
    VueperSlide
  },
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      playingVideos: {},
      testimonialsVideos: [
        {
          type: 'local',
          src: '/videos/Maria.mp4',
          title: 'Maria Testimonial',
          thumbnail: '/images/thumbnails/maria-thumbnail.png'
        },
        {
          type: 'local',
          src: '/videos/Paul.mp4',
          title: 'Paul Testimonial',
          thumbnail: '/images/thumbnails/paul-thumbnail.png'
        },
        {
          type: 'youtube',
          embed_url: 'https://www.youtube.com/embed/ud8W56MXhaA',
          url: 'https://www.youtube.com/watch?v=ud8W56MXhaA&t=1s'
        },
        {
          type: 'youtube', 
          embed_url: 'https://www.youtube.com/embed/2_aRXxaUXNU',
          url: 'https://www.youtube.com/watch?v=2_aRXxaUXNU'
        }
      ],
      webinarBrochures:[
        {
          img: "images/downloads/2025_final_report.png",
          download_path:
          "/downloads/EU Smoke Alarm Day 2025 final report with Appendices final March 2026.pdf",
          extension: '.pdf',
          text: "downloads.final_report_2025",

        },
        {
          img: "images/downloads/Asset12.svg",
          download_path:
          "/downloads/EU Smoke Alarm Day 2024 final report with Appendices final Feb 2025.pdf",
          extension: '.pdf',
          text: "downloads.final_report",

        }
      ],
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
          text: "downloads.leaflet1",
        },
        {
          img: "images/downloads/leaflet2.png",
          download_path: "/downloads/NFPA-FireAlarmBasicsFactSheet.pdf",
          text: "downloads.leaflet2",
        },
        {
          img: "images/downloads/leaflet3.png",
          download_path: "/downloads/London_Fire_Brigade_Advice.pdf",
          text: "downloads.leaflet3",
        },
        {
          img: "images/downloads/leaflet4.png",
          download_path: "/downloads/CFPA_E_Guideline_No_10_2008_F.pdf",
          text: "downloads.leaflet4",
        },
        {
          img: "images/downloads/leaflet5.png",
          download_path: "/downloads/SmokeAlarmPoster.pdf",
          text: "downloads.leaflet5",
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
      footerVideos: [],
      spainBrochure: {
        img: "images/downloads/Asset8.png",
        download_path:
          "/downloads/tripticos-consejos-detectores-incendios-en-hogar.pdf",
        text: "downloads.spain_brochure",
      },
      swiper: null,
      isLoadingNewVideo: false,
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
    document.addEventListener("focusin", this.handleGlobalFocus);
  },
  beforeUnmount() {
    document.removeEventListener("focusin", this.handleGlobalFocus);
  },
  methods: {
    playThumbnailVideo(index) {
      this.$set(this.playingVideos, index, true);
    },
    mailto() {
      window.location.href = "mailto:info@eurofsa.org";
    },
    downloadLeaflet(leaflet) {
      let link = document.createElement("a");
      link.setAttribute("download", this.toLocal(leaflet.text) + '.pdf');
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
      console.log('setMainTestingVideo called with:', video);
      let currentActive = this.testing_videos.findIndex((el) => el.active);
      let selectedVideo = this.testing_videos.findIndex(
        (el) => el.id == video.id
      );
      
      // Use $set to ensure reactivity
      this.$set(this.testing_videos[currentActive], 'active', false);
      this.$set(this.testing_videos[selectedVideo], 'active', true);
      
      console.log('Updated testing_videos:', this.testing_videos);
      console.log('Active video should be:', this.activeTestingVideo);
      
      this.$nextTick(() => {
        setTimeout(() => {
          console.log('testingMainVideo ref:', this.$refs.testingMainVideo);
          if (this.$refs.testingMainVideo && this.$refs.testingMainVideo.player) {
            this.$refs.testingMainVideo.player.play();
          } else {
            console.error('testingMainVideo ref or player not found');
          }
        }, 100);
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
    goToGame(){
        let link = document.createElement("a");
        link.href = 'https://rauchmelder-lebensretter.de/120S-escape/?lang=en'
        link.setAttribute('target', '_blank')
        link.click();
    },
    handleGlobalFocus(e) {
      // Only scroll if user is navigating with keyboard
      if (!this.$store.state.isKeyboardNavigating) return;
      
      // Check if focus is real (not body, not svg)
      const el = e.target;

      if (!el || el.tagName === "BODY" || el.tagName === "HTML") return;

      // Scroll to center, but only if element is visible
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

<style lang="scss" scoped>
@import "@/assets/scss/variables";

/* Reset heading tags to preserve existing styling */
h2.spain-title,
h2.container-title,
h3.title-under,
h4.video-title {
  margin: 0;
  padding: 0;
  font-weight: inherit;
}

// Video Section - Testimonials
.video-section {
//   margin-bottom: 20px; // Reduced margin to be closer to games
  width: 100vw; // Full viewport width
  margin-left: calc(-50vw + 50%); // Extend to full width
  background: $mainColor; // Full width red background
  
  .video-wrapper {
    width: 100%;
    max-width: none; // Remove max-width to extend to edges
    margin: 0;
  }
  
  .video-header {
    padding-top: 16px;
    text-align: left;
    padding-left: clamp(42px, 10vw, 78px);
    padding-bottom: 7px;
    
    .testimonials-title {
      color: white;
      font-size: 20px;
      font-family: $semiBoldFont;
      font-weight: 599;
    }
  }
  
  .video-container {
    height: 290px; // Reduced height from 343px to 280px
    position: relative; // For arrow positioning
    padding: 0 60px; // Add padding for outside arrows
    
    .testimonials-slider {
      height: 260px; // Reduced from 320px to 260px
      
      .vueperslide__content-wrapper {
        padding: 0;
        height: 260px; // Reduced from 320px to 260px
      }
      
      .vueperslide__content {
        height: 260px; // Reduced from 320px to 260px
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .video-item {
        height: 260px; // Reduced from 320px to 260px
        padding: 10px; // Added smaller padding to video-item
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .video-frame {
          width: 320px; // Optimized for video content
          height: 180px; // 16:9 aspect ratio
          border-radius: 8px;
          overflow: hidden;
          background: #000;
          
          iframe, video {
            width: 100%;
            height: 100%;
            border: none;
          }
          
          video {
            object-fit: contain;
          }
          
          @media (max-width: 768px) {
            width: 240px; // Mobile 16:9 aspect ratio
            height: 135px; // Mobile 16:9 aspect ratio
          }
          
          .video-thumbnail {
            position: relative;
            width: 100%;
            height: 100%;
            cursor: pointer;
            
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            
            .play-button-overlay {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              transition: all 0.3s ease;
              
              &:hover {
                transform: translate(-50%, -50%) scale(1.1);
              }
              
              svg {
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
              }
            }
          }
        }
        
        .video-url {
          color: white;
          font-size: clamp(12px, 1.4vw, 16px);
          font-family: $mainFont;
          margin-top: 8px;
          text-align: center;
          word-break: break-all;
          max-width: 400px;
          
          @media (max-width: 768px) {
            max-width: 280px;
            font-size: 12px;
          }
        }
      }
      
      // Custom arrow styles - outside positioning handled by vueperslides
      .vueperslides__arrows .vueperslides__arrow {
        background-color: rgba(255, 255, 255, 0.9);
        color: $mainColor;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        z-index: 10;
        
        &:hover {
          background-color: white;
        }
        
        svg {
          color: white;
               
          @media(max-width: 768px) {
            width: 20px;
          }
        }
      }
    }
  }
}

.top-section {
  display: flex;
  flex-direction: column;
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
  padding-bottom: 100px;
  span {
    font-size: clamp(16px, 5vw, 24px);
  }
}
.red-bar {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 0 calc(min(160px, 10vw));
  color: #1e1826;
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
        span {
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
  padding: 20px calc(min(160px, 10vw));
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  &.red-bg{
    color: white;
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
      gap: 16px;
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
      width: 45%;
      flex-grow: 1;
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
  .title{
    width: 100%;
    font-size: clamp(20px, 1.25vw, 32px);
    font-size: 32px;
    line-height: 48px;
    color: #1E1826; 
    font-weight: 600;
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
  aspect-ratio: 16/9;
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
      opacity: 0.7;
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
.why-videos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px calc(min(160px, 10vw));
  background: #fbf3ed;
  height: 100vh;
  height: fit-content;
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
      // width: 60%;
      max-width: initial;
      width: initial;
    }
    @media (max-width: 1280px) {
      max-height: 50vw;
      // max-width: 55vw;
      max-width: initial;
      width: initial;
    }
    @media (max-width: 1080px) {
      max-height: 40vw;
      // width: 60%;
      max-width: initial;
      width: initial;
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
    margin-bottom: 5px;
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
  opacity: 1;
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
    margin-top: 8px;
    .video {
      margin-right: 0;
      min-height: 40vw;
      max-height: 50vw;
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
  background-color: #DCE3EF;
  box-sizing: border-box;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &.webinar{
    background-color: #C0554B;
    .title-container{
      color: #ffffff;
      .spain-title{
        color: #ffffff;
      }
      .title-under{
        color: #ffffff;
      }
    }
    .video-row{
      .video-title{
        color: #ffffff;
      }
      .video-url{
        color: #ffffff;
      }
    }
  }
  &.webinar{
    .video-row{
      align-items: flex-start;
      .section-container{
        .title-under{
          color: #ffffff;
          width: 100%;
          font-size: clamp(14px, 1vw, 16px);
           @media(max-width: 1000px){
              text-align: center;
          }
        }
      }
       @media(max-width: 1280px){
            flex-wrap: wrap;
        }
    }

    .download{
      height: 100%;
      min-height: 180px;
      display: flex;
      gap: 8px;
      flex-direction: column;
      width: 30%;
      justify-content: center;
      @media(max-width: 1280px){
        width: 33%;
      }
      .video-title {
      height: 15%;
      width: 100%;
      font-size: clamp(18px, 1.2vw, 24px);
      line-height: 32px;
      color: #1E1826;
      font-family: $semiBoldFont;
      text-align: start;
      color: white;
      @media (max-width: 1080px) {
        font-size: clamp(14px, 1.2vw, 18px);
      }
      @media (max-width: 768px) {
        width: 95%;
        text-align: center;
      }
      }
      @media(max-width: 1000px){
        width: 50%;
      }
      @media(max-width: 768px){
        width: 100%;
      }
      .brochure-container {
        height: 100%;
        width: 98%;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
          margin: 0;
          width: 100%;
        }
        @media(max-width: 1280px){
          width: 90%
        }
        @media(max-width: 1000px){
          width: 100%;
          align-items: center;
        }
      .title {
        height: 15%;
        padding: 20px 0;
        width: 100%;
        font-size: clamp(18px, 1.2vw, 24px);
        line-height: 32px;
        color: white;
        font-family: $semiBoldFont;
        text-align: start;
        @media (max-width: 1080px) {
          font-size: 18px;
          font-size: clamp(16px, 1.2vw, 18px);
        }
        @media (max-width: 768px) {
          width: 98%;
          text-align: center;
        }
      }
      .leaflet {
        position: relative;
        background-position: top;
        min-height: 180px;
        width: 100%;
        aspect-ratio: 400 / 284;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        background-repeat: no-repeat;
        // background-size: 100% 100%;
        background-size: contain;
        background-position: center;
        max-width: 25rem;
        @media (max-width: 1000px) {
          width: 100%;
          min-height: 400px;
        }
        @media(min-width: 1280px){
          min-height: 285px;
        }
        @media(max-width: 1280px){
          min-height: 266px;
        }
        @media(max-width: 768px){
          min-height: 293px;
        }
        .bottom-content {
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #1e1826;
          color: white;
          padding: 10px;
          width: auto;
          border-radius: 0 0 10px 10px;
          box-sizing: border-box;
          gap: 12px;
        }
        .leaflet-text {
          flex: 1 1 auto;
          line-height: 1.2;
        }
        .download-btn {
          flex: 0 0 auto;
          svg {
            display: block;
          }
        }
      }
      span {
        font-size: 16px;
      }
    }
    }
  }
  .section-container {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 30%;

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
    width: 100%;
    gap: 12px;
    @media (max-width: 1280px) {
      width: 95%;
    }
    @media (max-width: 768px) {
      margin: 0;
      width: 100%;
    }
    .video-title {
      height: 15%;
      width: 100%;
      font-size: clamp(18px, 1.2vw, 24px);
      line-height: 32px;
      color: #1E1826;
      font-family: $semiBoldFont;
      text-align: start;
      @media (max-width: 1080px) {
        font-size: clamp(14px, 1.2vw, 18px);
      }
      @media (max-width: 768px) {
        width: 95%;
        text-align: center;
      }
    }
    .video-url {
      font-size: clamp(12px, 2.5vw, 16px);
      line-height: 24px;
      color: #1E1826;
      margin-top: 5px;
      white-space: nowrap;
      width: 100%;
      @media (max-width: 768px) {
        width: 95%;
        text-align: center;
        white-space: initial;
      }
      @media (max-width: 960px) {
        white-space: break-spaces;
        text-align: center;
        font-size: 14px;
      }
    }
    .video {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      min-height: 180px;
      border-radius: 10px;
      @media (min-width: 2300px) {
        width: 80%;
      }
      iframe {
        border-radius: 10px;
        min-height: 285px;
      }
    }
  }
  .title-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    padding: 10px 0;
    @media (max-width: 1080px) {
      width: 40%;
      margin: auto 0;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    .title-under{
      color: #1E1826;
      @media(max-width: 768px){
        text-align: center;
        width: 100%;
      }
      
    }
    .spain-title {
      font-size: clamp(26px, 2.5vw, 32px);
      font-family: $semiBoldFont;
      line-height: 48px;
      color: #1E1826;
      width: 100%;
      height: 100%;
      margin-right: calc(min(20px, 7vw));
      @media (max-width: 1080px) {
        font-size: 24px;
        margin: 0;
        margin-right: 8px;
        line-height: 36px;
      }
      @media (max-width: 768px) {
        margin: 0;
        text-align: center;
      }
    }
  }
  .video-row{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: clamp(20px, 3vw, 40px);
    @media(max-width: 768px){
      flex-direction: column;
    }
  }
}
.extra-container {
  min-width: 400px;
  background-color: #fbf3ed;
  display: flex;
  gap: 16px;
  .half {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  padding: 40px calc(min(160px, 10vw));
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    min-width: fit-content;
  }
  .title {
    font-size: clamp(24px, 1.2vw, 32px);
    line-height: clamp(32px, 1.2vw, 42px);
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
        min-width: 40vw;
        max-width: 90vw;
        margin-top: 16px;
        height: 50vw;
        width: 100%;
      }
      iframe {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        @media (max-width: 768px) {
          min-height: 20vw;
          height: 60vw;
          max-height: 60vw;
        }
      }
    }
  }
}
.video-container-extra {
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  .row {
    position: relative;
    width: 100%;
    .video-parent {
      position: relative;
      height: 40vw;
      width: 100%;
      margin: 16px 0;
    }
  }
}
.game-container{
  padding: 40px calc(min(80px, 5vw));
  background-color: #DCE3EF;
  display: flex;
  flex-direction: column;
  gap: 20px;
  user-select: none;
  .title{
      font-size: clamp(24px, 2vw, 32px);
      width: 100%;
      padding: 0 28px;
      font-family: $semiBoldFont;
  }
  .inner-container{
      display: flex;
      width: 100%;
      gap: 28px;
      padding: 0 28px;
      z-index: 99;
      pointer-events: none;
      @media(max-width: 900px){
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }
      .desc{
          pointer-events: none;
      }
      .game-image{
          cursor: pointer;
          transition: 0.25s;
          pointer-events: all;
          position: relative;
          &:hover{
              transform: scale(0.95)
          }
          .link-indicator {
              position: absolute;
              top: 10px;
              right: 10px;
              z-index: 2;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: #1E1826;
              background: rgba(255, 255, 255, 0.92);
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
              pointer-events: none;
              &.button {
                  color: #C0554B;
                  background: rgba(255, 255, 255, 0.98);
              }
          }
      }
  }
  .under-button{
      width: 100%;
      padding: 24px 28px;
      display: flex;
      gap: 12px;
      font-family: $semiBoldFont;
      font-size: clamp(20px, 2vw, 28px);
      background-color: #C0554B;
      align-items: center;
      border-radius: 10px;
      margin-top: -80px;
      @media(max-width: 900px){
          margin-top: 20px !important;
      }
      cursor: pointer;
      color: white;
      transition: 0.25s;
      &:hover{
          background-color: #483A5B;
      }
      .link-indicator {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #1E1826;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
          flex-shrink: 0;
          pointer-events: none;
          &.button {
              color: #C0554B;
              background: rgba(255, 255, 255, 0.98);
          }
      }
  }
}

.information-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DCE3EF;
    gap: clamp(36px, 5vh, 60px);
    padding: 80px calc(min(80px, 5vw));
    .info-title{
      font-size: clamp(36px, 2.5vw, 48px);
    }
    &.webinar{
      background-color: #C0554B;
    }
  }
  .spain-container2 {
    width: 100%;
    display: flex;
    background-color: #DCE3EF;
    box-sizing: border-box;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &.webinar{
      background-color: #C0554B;
      .title-container{
        color: #ffffff;
        .spain-title{
          color: #ffffff;
        }
        .title-under{
          color: #ffffff;
        }
      }
      .video-row{
        .video-title{
          color: #ffffff;
        }
        .video-url{
          color: #ffffff;
        }
      }
    }
    &.webinar{
      .video-row{
        align-items: flex-start;
        .section-container{
          .title-under{
            color: #ffffff;
            width: 100%;
           
          }
        }
      }

      .download{
        height: 100%;
        min-height: 180px;
        display: flex;
        gap: 12px;
        flex-direction: column;
        width: 30%;
        justify-content: center;
        @media(max-width: 1280px){
          width: 50%;
        }
        .video-title {
        height: 15%;
        width: 100%;
        font-size: clamp(18px, 1.2vw, 24px);
        line-height: 32px;
        color: #1E1826;
        font-family: $semiBoldFont;
        text-align: start;
        color: white;
        @media (max-width: 1080px) {
          font-size: clamp(14px, 1.2vw, 18px);
        }
        @media (max-width: 768px) {
          width: 95%;
          text-align: center;
        }
        }
        @media(max-width: 1000px){
          width: 50%;
        }
        @media(max-width: 768px){
          width: 100%;
        }
        .brochure-container {
          height: 100%;
          width: 75%;
          display: flex;
          flex-direction: column;
          @media (max-width: 768px) {
            margin: 0;
            width: 100%;
          }
          @media(max-width: 1280px){
            width: 90%
          }
          @media(max-width: 1000px){
            width: 100%;
            align-items: center;
          }
        .title {
          height: 15%;
          padding: 20px 0;
          width: 100%;
          font-size: clamp(18px, 1.2vw, 24px);
          line-height: 32px;
          color: white;
          font-family: $semiBoldFont;
          text-align: start;
          @media (max-width: 1080px) {
            font-size: 18px;
            font-size: clamp(16px, 1.2vw, 18px);
          }
          @media (max-width: 768px) {
            width: 98%;
            text-align: center;
          }
        }
        .leaflet {
          position: relative;
          background-position: top;
          min-height: 180px;
          width: 100%;
          aspect-ratio: 400 / 284;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          @media (max-width: 1000px) {
            width: 100%;
            min-height: 400px;
          }
          @media(min-width: 1280px){
            min-height: 285px;
          }
          .bottom-content {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: #1e1826;
            color: white;
            padding: 10px;
            width: auto;
            border-radius: 0 0 10px 10px;
            box-sizing: border-box;
            gap: 12px;
          }
          .leaflet-text {
            flex: 1 1 auto;
            line-height: 1.2;
          }
          .download-btn {
            flex: 0 0 auto;
            svg {
              display: block;
            }
          }
        }
        span {
          font-size: 16px;
        }
      }
      }
    }
    .section-container {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 30%;
  
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
      width: 100%;
      gap: 12px;
      @media (max-width: 1280px) {
        width: 95%;
      }
      @media (max-width: 768px) {
        margin: 0;
        width: 100%;
      }
      .video-title {
        height: 15%;
        width: 100%;
        font-size: clamp(18px, 1.2vw, 24px);
        line-height: 32px;
        color: #1E1826;
        font-family: $semiBoldFont;
        text-align: start;
        @media (max-width: 1080px) {
          font-size: clamp(14px, 1.2vw, 18px);
        }
        @media (max-width: 768px) {
          width: 95%;
          text-align: center;
        }
      }
      .video-url {
        font-size: clamp(12px, 2.5vw, 16px);
        line-height: 24px;
        color: #1E1826;
        margin-top: 5px;
        white-space: nowrap;
        width: 100%;
        @media (max-width: 768px) {
          width: 95%;
          text-align: center;
          white-space: initial;
        }
        @media (max-width: 960px) {
          white-space: break-spaces;
          text-align: center;
          font-size: 14px;
        }
      }
      .video {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height: 180px;
        border-radius: 10px;
        @media (min-width: 2300px) {
          width: 80%;
        }
        iframe {
          border-radius: 10px;
          min-height: 285px;
        }
      }
    }
    .title-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
      padding: 10px 0;
      @media (max-width: 1080px) {
        width: 40%;
        margin: auto 0;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      .title-under{
        color: #1E1826;
        @media(max-width: 768px){
          text-align: center;
          width: 100%;
        }
      }
      .spain-title {
        font-size: clamp(26px, 2.5vw, 32px);
        font-family: $semiBoldFont;
        line-height: 48px;
        color: #1E1826;
        width: 100%;
        height: 100%;
        margin-right: calc(min(20px, 7vw));
        @media (max-width: 1080px) {
          font-size: 24px;
          margin: 0;
          margin-right: 8px;
          line-height: 36px;
        }
        @media (max-width: 768px) {
          margin: 0;
          text-align: center;
        }
      }
    }
    .video-row{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      gap: clamp(20px, 3vw, 40px);
      @media(max-width: 768px){
        flex-direction: column;
      }
    }
  }
  /* Focus styles for accessibility */
[tabindex="0"]:focus-visible,
button:focus-visible,
a:focus-visible,
:deep(.vueperslides__arrow:focus-visible) {
  outline: 3px solid #000000ff;
  outline-offset: 4px;
  border-radius: 8px;
}
</style>
