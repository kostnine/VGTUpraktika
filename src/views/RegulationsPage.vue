<template>
  <div class="regulations-page-container">
    <PageHeader
      image="images/Man_writing.png"
      title="header.extra_europe"
      content="reg.check_map"
      buttonText="facts.read_more"
      scrollTo="map"
    />
    <div class="regulations-page-map" id="map">
      <div class="regulations-page-text-content" v-if="activeCountry == ''">
        <span class="regulations-page-text-title">{{
          toLocal("reg.requirements")
        }}</span>
        <span class="regulations-page-text-subInfo">{{
          toLocal("reg.see_reqs")
        }}</span>
        <div class="regulations-page-dict-row">
          <div class="regulations-page-dict-wrapper">
            <span class="regulations-page-text-dict"
              ><div class="colored-block blue"></div>
              {{ toLocal("reg.multiple") }}</span
            >
            <span class="regulations-page-text-dict"
              ><div class="colored-block orange"></div>
              {{ toLocal("reg.atleast_one") }}</span
            >
            <span class="regulations-page-text-dict"
              ><div class="colored-block red"></div>
              {{ toLocal("reg.no_req") }}</span
            >
          </div>
        </div>
        <select
          class="country-select"
          @model="this.activeCountry"
          @change="(e) => setActiveCountry(e.target.value)"
        >
          <option hidden disabled value="" selected>
            {{ toLocal("reg.select") }}
          </option>
          <option
            v-for="(country, key) in this.sorted_countries"
            :key="key"
            :value="country"
          >
            {{ country }}
          </option>
        </select>

        <div class="regulations-information-block">
          <span class="regulations-information-title"
            >{{ toLocal("reg.info") }}:</span
          >
          <ul>
            <li>{{ toLocal("reg.extensive") }}</li>
            <li>{{ toLocal("reg.no_south") }}</li>
            <li>
              {{ toLocal("reg.consumer") }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class="regulations-page-text-content"
        v-else-if="activeCountry != ''"
      >
        <CountryTextBlock
          :country="this.activeCountry"
          :closeCountry="clearActiveCountry"
          id="country-block"
          v-click-outside="clearActiveCountry"
        />
      </div>
      <div class="regulations-page-map-content">
        <div>
          <svg
            class="map-svg"
            viewBox="0 100 929 980"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <CountryComponent
              v-for="(country, country_key) in this.country_data"
              :key="country_key"
              :country="country"
              :setActiveCountry="setActiveCountry"
              :activeSelectedCountry="activeCountry"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="disclaimer-bar">
      <span class="disclaimer-text">{{ toLocal("reg.E_OE") }}</span>
    </div>
    <div class="under-disclaimer">

    </div>
    <div class="facts-share">
          <span class="share-title">{{ toLocal("facts.share_story") }}</span>
          <button @click="mailto">info@eurofsa.org</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import country_data from "@/assets/data/country_data.json";
import CountryComponent from "@/components/Country.vue";
import PageHeader from "@/components/PageHeader.vue";
import CountryTextBlock from "@/components/CountryTextBlock.vue";
export default {
  name: "RegulationsPage",
  data() {
    return {
      activeCountry: "",
      country_data: country_data,
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
      }
    };
  },
  metaInfo: {
    title: "Regulations",
  },
  components: {
    CountryComponent,
    PageHeader,
    CountryTextBlock,
  },
  methods: {
    mailto() {
      window.location.href = "mailto:info@eurofsa.org";
    },
    downloadLeaflet(leaflet) {
      let link = document.createElement("a");
      link.setAttribute("download", this.toLocal(leaflet.text) + leaflet.extension);
      link.href = leaflet.download_path;
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
    setActiveCountry(country) {
      if (this.activeCountry == country) {
        document.querySelector("#go-to-top").style.zIndex = "99";
      } else {
        this.activeCountry = country;
        if (window.innerWidth >= 768) {
          this.scroll("map");
        } else {
          document.querySelector("#go-to-top").style.zIndex = "0";
        }
      }
    },
    clearActiveCountry() {
      this.activeCountry = "";
      document.querySelector("#go-to-top").style.zIndex = "99";
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.sorted_countries = Object.keys(this.country_data).sort((a, b) =>
      a.localeCompare(b)
    );
    this.sorted_countries = this.sorted_countries.filter(
      (country) => !country.includes("_")
    );
  },
  directives: {
    "click-outside": {
      bind: function (el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }

          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble;
        const handler = (e) => {
          if (
            bubble ||
            (!el.contains(e.target) &&
              el !== e.target &&
              e.target.classList[0] != "map-object")
          ) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;

        // add Event Listeners
        document.addEventListener("click", handler);
      },

      unbind: function (el) {
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables";
.regulations-page-container {
  width: 100%;
  box-sizing: border-box;
}
.regulations-page-map {
  position: relative;
  height: fit-content;
  width: 100%;
  background-color: white;
  z-index: 2;
  display: flex;
  padding: 0 0 40px 160px;
  box-sizing: border-box;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 1280px) {
    height: fit-content;
    padding: 0 0 80px 80px;
  }
}
.regulations-page-text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: $mainFont;
  width: 41%;
  height: 60%;
  @media (max-width: 1580px) {
    position: relative;
  }

  .regulations-page-text-title {
    font-size: clamp(28px, 3vw, 48px);
    font-family: $semiBoldFont;
    text-align: start;
    @media (max-width: 768px) {
      margin-top: 80px;
      font-size: 40px;
    }
  }
  .regulations-page-text-subInfo {
    font-size: 16px;
    line-height: 24px;
    text-align: start;
  }
}
.regulations-page-map-content {
  width: 50%;
  height: 95%;
  div {
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
  }
}

.colored-block {
  min-width: 34px;
  min-height: 34px;
  height: 34px;
  width: 34px;
  margin-right: 14px;
  &.blue {
    background-color: #a2bbe5;
  }
  &.orange {
    background-color: #f39964;
  }
  &.red {
    background-color: #c0554b;
  }
}

.regulations-page-dict-row {
  display: flex;
  align-items: center;
  .regulations-page-dict-wrapper {
    width: 73%;
    .regulations-page-text-dict {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 34px 0;
      font-size: clamp(18px, 1vw, 24px);
      line-height: 32px;
    }
  }
}
.regulations-information-block {
  text-align: start;
  .regulations-information-title {
    font-family: $semiBoldFont;
  }
  @media (min-width: 1280px) {
    li {
      max-width: 80%;
    }
  }
}

//regulations left info
.map-svg {
  width: 100%;
  height: 100%;
  @media (max-width: 1280px) {
    height: 70%;
  }
}

@media (max-width: 768px) {
  .regulations-page-map {
    flex-direction: column;
    padding: 0 0 0 10vw;
    height: 1200px;
    .regulations-page-text-content {
      width: 100%;
      @media (max-width: 768px) {
        margin-right: 10vw;
      }
    }
    .regulations-page-map-content {
      width: 100%;
      div {
        height: 100%;
        svg {
          height: 100%;
        }
      }
    }
  }
  .regulations-country-info-block {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100vw;
    height: 90%;
    box-sizing: border-box;
    .regulations-country-name {
      font-size: 36px;
      margin: 0 8px;
      line-height: 36px;
      position: relative;
      .regulations-country-close {
        top: -10px;
        left: 89vw;
      }
    }
    .paragraph {
      font-size: 14px;
      max-width: 85%;
    }
  }
}
.country-select {
  margin-bottom: 60px;
  font-family: $mainFont;
  font-size: 18px;
  background: #483a5b;
  border-radius: 5px;
  height: 45px;
  color: white;
  width: 55%;
  min-width: 300px;
  font-family: $mainFont;
  padding-left: 10px;
  @media (max-width: 768px) {
    width: 90%;
    min-height: 45px;
  }
  option {
    background-color: white;
    color: black;
    &:hover {
      outline: none;
      background: transparent !important;
      background-color: rgba(72, 58, 91, 0.2) !important;
      font-family: $semiBoldFont;
    }
  }
  &::selection {
    color: none;
  }
  select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
  }
}
.disclaimer-bar {
  width: 100%;
  padding: 5px calc(min(80px, 5vw));
  background: #be544a;
  color: white;
  .disclaimer-text{
    display: flex;
  }
}

.information-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(36px, 5vh, 60px);
  padding: 80px calc(min(80px, 5vw));
  .info-title{
    font-size: clamp(36px, 2.5vw, 48px);
  }
}

.spain-container {
  width: 100%;
  display: flex;
  background-color: white;
  box-sizing: border-box;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

.under-disclaimer{
  height: 40px;
  background-color: #DCE3EF;
  width: 100%;
}

</style>
<style lang="scss">
@import "@/assets/scss/variables";
.semibold {
  font-family: $semiBoldFont;
}
</style>
