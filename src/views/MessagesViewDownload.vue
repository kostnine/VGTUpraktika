<template>
    <div>
        <div class="top-section">
            <div class="text">
                <h2 v-html="toLocal('downloads.more_info')"></h2>
                <span>{{ toLocal("downloads.read") }}</span>
            </div>
        </div>
        <div class="game-container">
            <div class="title">
                <span>{{toLocal('info.game-title')}}</span>
            </div>
            <div class="inner-container">
                <div class="desc" v-html="toLocal('info.game-desc')">
                </div>
                <div class="game-image" @click="goToGame()">
                    <img src="@/assets/images/game.png" alt="Video game image" />
                </div>
            </div>
            <div class="under-button" @click="goToGame()">
                <span>{{ toLocal('info.lets-play') }} </span>
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 22L12 12L2 2" stroke="white" stroke-width="3"/>
                </svg>
                    
            </div>
        </div>
        <div class="information-section">
            <span class="info-title">{{toLocal('info.check-out')}}</span>
            <div class="downloadables-container">
                <div class="downloadable" @click="downloadFile('/downloads/Examples of successful smoke alarm campaigns implemented in various countries.docx', 'Examples of successful smoke alarm campaigns implemented in various countries')" :style="{
                    backgroundImage:
                      'url(' + require(`@/assets/images/downloads/Asset10.svg`) + ')',
                  }">
                    <div class="downloadable-title">
                        <div class="text">
                            {{ toLocal('downloads.examples') }}
                        </div>
                        <div class="icon">
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
                <div class="downloadable" @click="downloadFile('/downloads/Examples of training programmes for fire services to educate the public about smoke alarms.docx', 'Examples of training programmes for fire services to educate the public about smoke alarms')" :style="{
                    backgroundImage:
                      'url(' + require(`@/assets/images/downloads/Asset11.svg`) + ')',
                  }">
                    <div class="downloadable-title">
                        <div class="text">
                            {{ toLocal('downloads.examples') }}
                        </div>
                        <div class="icon">
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
        <div class="leaflet-section">
            <div class="leaflet-container red-bg">
            <h3 class="color-text leaflet-title">{{ toLocal("downloads.check_leaf_smoke") }}</h3>
            <span class="color-text">{{ toLocal("downloads.download_leaf") }}</span>
            <div class="leaflets">
              <div
                class="leaflet"
                :style="{
                  backgroundImage:
                    'url(' + require(`@/assets/${leaflet.img}`) + ')',
                }"
                v-for="(leaflet, index) in infoLeaflets"
                :key="index"
                @click="downloadLeaflet(leaflet)"
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
        </div>
        <div class="gif-section">
            <div class="gifs-container">
            <div class="title-container">
              <span class="title"
                >
                {{toLocal('downloads.gifs')}}
                </span>
            </div>
            <div class="inner-container">
              <vueper-slides
              class="no-shadow"
              :infinite="false"
              :always-refresh-clones="true"
              :visible-slides="4"
              :slide-multiple="false"
              :bullets="false"
              :gap="4"
              :slide-ratio="1 / 4"
              :dragging-distance="200"
              fixed-height="350px"
              :breakpoints="{ 1860: {visibleSlides: 3, slideRatio: 1/3, fixedHeight: false}, 1280: {visibleSlides: 3, slideRatio: 1/4, fixedHeight: false}, 768: { visibleSlides: 1, arrowsOutside: true, slideRatio: 1/1, slideMultiple: 2, fixedHeight: false, }, 1000: { visibleSlides: 2, arrowsOutside: true, slideRatio: 1/2, fixedHeight: false } }">
                <vueper-slide 
                  v-for="gif, idx in gifs"
                  :key="`gif-${idx}`">
                  <template #content>
                    <img class="single-gif" draggable="false" :src="require(`@/assets/gifs/${$store.state.lang}/${gif.id}.gif`)" alt="gif">
                  </template>
                </vueper-slide>
              </vueper-slides>
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
import {VueperSlides, VueperSlide} from "vueperslides";
import 'vueperslides/dist/vueperslides.css'
    export default {
        
        data(){
            return {
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
            }
        },
        components:{
            VueperSlides,
            VueperSlide
        },
        methods:{
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
            goToGame(){
                let link = document.createElement("a");
                link.href = 'https://rauchmelder-lebensretter.de/120S-escape/?lang=en'
                link.setAttribute('target', '_blank')
                link.click();
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
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
    .text {
    height: 100%;
    padding: 80px calc(min(80px, 5vw));
    padding-bottom: 100px;
    span {
        font-size: clamp(16px, 5vw, 24px);
    }
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
.information-section{
    display: flex;
    flex-direction: column;
    background-color: #FBF3ED;
    .info-title{
        width: 100%;
        padding: 40px calc(min(80px, 5vw));
        font-size: clamp(24px, 2.5vw, 32px);
        display: flex;
        align-items: center;
        font-family: $semiBoldFont;
        @media(max-width: 768px){
          text-align: center;
        }
    }
}
.downloadables-container{
    display: flex;
    padding: 60px calc(min(80px, 5vw));
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
            &:hover{
                transform: scale(0.95)
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
        @media(max-width: 900px){
            margin-top: 0;
        }
        margin-top: -80px;
        cursor: pointer;
        color: white;
        transition: 0.25s;
        &:hover{
            background-color: #483A5B;
        }
    }
}
.vueperslides__arrows .vueperslides__arrow{
  background-color: red;
  svg{
    @media(max-width: 768px){
      width: 20px;
    }
  }
}
</style>