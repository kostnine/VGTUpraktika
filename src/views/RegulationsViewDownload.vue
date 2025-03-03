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
                <span class="spain-title"
                    >{{ toLocal("downloads.webinar_title") }}</span
                >
                <span class="title-under">
                    {{toLocal('regulations.watch')}}
                </span>
                </div>
                <div class="video-row">
                <div class="section-container">
                    <div class="video-container-with-text">
                    <span class="video-title"
                        >{{ toLocal("downloads.webinar_title_date") }}:</span
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
        <div class="information-container">
            <div class="spain-container">
                <div class="title-container">
                <span class="spain-title"
                    >{{ toLocal("downloads.fire_spain") }}</span
                >
                <span class="title-under">
                    {{toLocal('regulations.watch')}}
                </span>
                </div>
                <div class="video-row">
                <div class="section-container">
                    <div class="video-container-with-text">
                    <span class="video-title"
                        >{{ toLocal("downloads.video_about") }}:</span
                    >
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
                    <div class="video-container-with-text">
                    <span class="video-title">Duerme Tranquilo </span>
                    <div class="video">
                        <iframe
                        :src="`https://www.youtube.com/embed/6g8PWXPgJjA?si=CAZuTuluZEgq-luw`"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        ></iframe>
                    </div>
                    <span class="video-url"
                        >https://www.youtube.com/watch?v=6g8PWXPgJjA</span
                    >
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="leaflet-container">
        <div class="container-title">
            {{ toLocal('downloads.check_leaf') }}
        </div>
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
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
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
        min-height: 300px;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        @media (max-width: 1000px) {
          width: 100%;
          min-height: 300px;
        }
        @media(min-width: 1280px){
          min-height: 40vh;
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
</style>
<style lang="scss">
@import "@/assets/scss/variables";
.semibold {
  font-family: $semiBoldFont;
}
</style>