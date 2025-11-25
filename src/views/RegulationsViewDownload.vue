<template>
    
    <div>
        <div class="top-section">
            <div class="text">
                <h2 v-html="toLocal('downloads.more_info')"></h2>
                <span>{{ toLocal("downloads.read") }}</span>
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
                <div class="section-container download" v-for="spainBrochure, index in webinarBrochures" :key="`brochure-${index}`">
                  <h3 class="title-under">
                    {{toLocal('regulations.download')}}
                  </h3>
                  <h4 class="video-title"
                        >{{ toLocal("downloads.final_report") }}:</h4
                    >
                  <div class="brochure-container">
                <div
                class="leaflet"
                :style="{
                    backgroundImage:
                    'url(' + require(`@/assets/${spainBrochure.img}`) + ')',
                }"
                                @click="downloadLeaflet(spainBrochure)"
                                @keyup.enter="downloadLeaflet(spainBrochure)"
                                @keyup.space="downloadLeaflet(spainBrochure)"
                                tabindex="0"
                                role="button"
                                :aria-label="`Download ${toLocal(spainBrochure.text)}`"
                >
                <div class="bottom-content">
                    <div class="leaflet-text">
                    {{ toLocal(spainBrochure.text) }}
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
                </div>
            </div>

            
        </div>
        <div class="leaflet-container">
        <h2 class="container-title">
            {{ toLocal('downloads.check_leaf') }}
        </h2>
        <div class="container-under-title">
            {{toLocal('downloads.download_leaf')}}
        </div>
        <div class="leaflet-row">
            <div class="section-container" v-for="spainBrochure, index in downloadBrochures" :key="`brochure-${index}`">
            <div class="brochure-container">
                <div
                class="leaflet"
                :style="{
                    backgroundImage:
                    'url(' + require(`@/assets/${spainBrochure.img}`) + ')',
                }"
                @click="downloadLeaflet(spainBrochure)"
                @keyup.enter="downloadLeaflet(spainBrochure)"
                @keyup.space="downloadLeaflet(spainBrochure)"
                    tabindex="0" 
                    role="button" 
                >
                <div class="bottom-content">
                    <div class="leaflet-text">
                    {{ toLocal(spainBrochure.text) }}
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
            <!-- <div class="section-container">
            <div class="brochure-container">
                <div
                class="leaflet"
                :style="{
                    backgroundImage:
                    'url(' + require(`@/assets/${legislationsBrochure.img}`) + ')',
                }"
                @click="downloadLeaflet(legislationsBrochure)"
                >
                <div class="bottom-content">
                    <div class="leaflet-text">
                    {{ toLocal(legislationsBrochure.text) }}
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
            <div class="section-container">
            <div class="brochure-container">
                <div
                class="leaflet"
                :style="{
                    backgroundImage:
                    'url(' + require(`@/assets/${legislationsBrochure.img}`) + ')',
                }"
                @click="downloadLeaflet(legislationsBrochure)"
                >
                <div class="bottom-content">
                    <div class="leaflet-text">
                    {{ toLocal(legislationsBrochure.text) }}
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
            </div> -->
        </div>
        </div>
        <div class="facts-share">
            <span class="share-title">{{ toLocal("facts.share_story") }}</span>
            <button @click="mailto">info@eurofsa.org</button>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            sorted_countries: [],
            spainBrochure: {
                img: "images/downloads/Asset8.svg",
                download_path:
                "/downloads/tripticos-consejos-detectores-incendios-en-hogar.pdf",
                extension: '.pdf',
                text: "downloads.spain_brochure",
            },
            legislationsBrochure:{
                img: "images/downloads/Asset9.svg",
                download_path:
                "/downloads/Advice for legislators on how to introduce legislation or regulations to install smoke alarms in a country or region.docx",
                extension: '.docx',
                text: "downloads.legislations_brochure",
            },
            downloadBrochures:[
              {
                img: "images/downloads/Asset8.svg",
                download_path:
                "/downloads/tripticos-consejos-detectores-incendios-en-hogar.pdf",
                extension: '.pdf',
                text: "downloads.spain_brochure",
              },
              {
                img: "images/downloads/Asset9.svg",
                download_path:
                "/downloads/Advice for legislators on how to introduce legislation or regulations to install smoke alarms in a country or region.docx",
                extension: '.docx',
                  text: "downloads.legislations_brochure",
              },
            ],
            webinarBrochures:[
              {
                img: "images/downloads/Asset12.svg",
                download_path:
                "/downloads/EU Smoke Alarm Day 2024 final report with Appendices final Feb 2025.pdf",
                extension: '.pdf',
                text: "downloads.final_report",

              }
            ]
            };
        },
        metaInfo() {
            return {
                title: this.toLocal('page.title.regulations'),
                titleTemplate: '%s | European Smoke Alarm Day'
            }
        },
        methods:{
            downloadLeaflet(leaflet) {
            let link = document.createElement("a");
            link.setAttribute("download", this.toLocal(leaflet.text) + leaflet.extension);
            link.href = leaflet.download_path;
            document.body.appendChild(link);
            link.click();
            link.remove();
            },
            mailto() {
            window.location.href = "mailto:info@eurofsa.org";
            },
            handleGlobalFocus(e) {
              // Only scroll if user is navigating with keyboard
              if (!this.$store.state.isKeyboardNavigating) return;
              
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
          mounted() {
          // 👇 Pridedame globalų fokusavimo stebėjimą
          document.addEventListener("focusin", this.handleGlobalFocus);
      },
    }
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
padding: 80px calc(min(80px, 5vw));
padding-bottom: 100px;
span {
    font-size: clamp(16px, 5vw, 24px);
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

          }
        }
      }

      .download{
        height: 100%;
        min-height: 80px;
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
          min-height: 80px;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          aspect-ratio: 16/9;
          @media (max-width: 1000px) {
            width: 100%;
            min-height: 100px;
          }
          @media(min-width: 1280px){
            min-height: 110px;
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
  .leaflet-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 80px calc(min(80px, 5vw));
    gap: 12px;
    background-color: #FBF3ED;
    .container-title{
      font-size: clamp(26px, 2.5vw, 32px);
      font-family: $semiBoldFont;
      @media(max-width: 768px){
        text-align: center;
      }
    }
    .container-under-title{
      @media(max-width: 768px){
        text-align: center;
      }
    }
    .leaflet-row{
      display: flex;
      gap: clamp(20px, 3vw, 40px);
      @media(max-width: 600px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .section-container{
      height: fit-content;
      display: flex;
      flex-direction: column;
      width: 30%;
      @media(max-width: 1000px){
        width: 50%;
      }
      @media(max-width: 768px){
        width: 100%;
      }
        .brochure-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
          margin: 0;
          width: 100%;
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
        min-height: 120px;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        aspect-ratio: 16/9;
        @media (max-width: 1000px) {
          width: 100%;
          min-height: 140px;
        }
        @media(min-width: 1280px){
          min-height: 150px;
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
  }
</style>
<style lang="scss">
@import "@/assets/scss/variables";
.semibold {
  font-family: $semiBoldFont;
}
</style>