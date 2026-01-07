<template>
  <div class="regulations-page-container" role="document">
    <header role="banner">
      <PageHeader
        image="images/Man_writing.png"
        :title="toLocal('header.extra_europe')"
        :content="toLocal('reg.check_map')"
        :buttonText="toLocal('facts.read_more')"
        scrollTo="map"
        aria-label="Main header"
      />
    </header>

    <section 
      class="regulations-page-map" 
      aria-labelledby="page-title"
    >
      <h1 id="page-title" class="sr-only">{{ toLocal("header.extra_europe") }} - {{ toLocal("reg.requirements") }}</h1>
      
      <!-- ==================== PAGRINDINIS TURINYS ==================== -->
      <section 
        class="regulations-page-text-content" 
        v-if="activeCountry == ''" 
        aria-labelledby="requirements-title"
        role="region"
      >
        <h2 class="regulations-page-text-title" id="requirements-title" tabindex="-1">
          {{ toLocal("reg.requirements") }}
        </h2>
        <span class="regulations-page-text-subInfo">
          {{ toLocal("reg.see_reqs") }}
        </span>

        <div 
          class="regulations-page-dict-row"
          role="region"
          aria-label="Regulation indicators"
        >
          <div class="regulations-page-dict-wrapper" role="list">
            <p class="sr-only" role="note">Color indicators: </p>
            <div class="regulations-legend" role="listitem">
              <span class="regulations-page-text-dict" role="listitem">
                <div class="colored-block blue" aria-hidden="true" role="presentation"></div>
                <span><span class="sr-only">Blue: </span>{{ toLocal("reg.multiple") }}</span>
              </span>
              <span class="regulations-page-text-dict" role="listitem">
                <div class="colored-block orange" aria-hidden="true" role="presentation"></div>
                <span><span class="sr-only">Orange: </span>{{ toLocal("reg.atleast_one") }}</span>
              </span>
              <span class="regulations-page-text-dict" role="listitem">
                <div class="colored-block red" aria-hidden="true" role="presentation"></div>
                <span><span class="sr-only">Red: </span>{{ toLocal("reg.no_req") }}</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Country Selection -->
        <div role="region" aria-labelledby="country-select-label" class="country-selection-container">
          <label id="country-select-label" for="country-select" class="sr-only">
            {{ toLocal('reg.select_country') }}
          </label>
          <select
            id="country-select"
            class="country-select"
            v-model="activeCountry"
            @change="(e) => setActiveCountry(e.target.value)"
            @keydown.enter.prevent="setActiveCountry(activeCountry)"
            @keydown.space.prevent="setActiveCountry(activeCountry)"
            tabindex="0"
            aria-describedby="country-select-hint"
            :aria-expanded="!!activeCountry"
            aria-controls="country-block"
          >
            <option value="" disabled selected>
              {{ toLocal("reg.select") }}
            </option>
            <option
              v-for="(country, key) in sorted_countries"
              :key="key"
              :value="country"
            >
              {{ country }}
            </option>
          </select>
          <span id="country-select-hint" class="sr-only">
            {{ toLocal('reg.select_country_hint') }}
          </span>
          <span v-if="activeCountry" class="sr-only" role="status" aria-live="polite">
            {{ toLocal('reg.selected_country') }}: {{ activeCountry }}. {{ toLocal('reg.country_selection_instructions') }}
          </span>
        </div>

        <!-- Informacinis blokas -->
        <div class="regulations-information-block">
          <span class="regulations-information-title">
            {{ toLocal("reg.info") }}:
          </span>
          <ul>
            <li>{{ toLocal("reg.extensive") }}</li>
            <li>{{ toLocal("reg.no_south") }}</li>
            <li>{{ toLocal("reg.consumer") }}</li>
          </ul>
        </div>
      </section>

      <!-- ==================== AKTYVI ŠALIS ==================== -->
      <section
        class="regulations-page-text-content"
        v-else-if="activeCountry != ''"
        aria-labelledby="country-info-title"
      >
        <CountryTextBlock
          :country="activeCountry"
          :closeCountry="clearActiveCountry"
          id="country-block"
          v-click-outside="clearActiveCountry"
        />
      </section>

      <!-- ==================== ŽEMĖLAPIS ==================== -->
      <section class="regulations-page-map-content" aria-label="Interactive European map">
        <div>
          <svg
            class="map-svg"
            viewBox="0 100 929 980"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="group"
            aria-label="European map showing smoke alarm regulations by country"
          >
            <!--  Each country accessible via keyboard -->
            <CountryComponent
              v-for="(country, country_key) in country_data"
              :key="country_key"
              :country="country"
              :setActiveCountry="setActiveCountry"            
              :activeSelectedCountry="activeCountry"
              tabindex="-1"  
            />
          </svg>
        </div>
      </section>
    </section>

    <!-- ==================== DISCLAMER ==================== -->
    <section class="disclaimer-bar" aria-label="Disclaimer information">
      <span class="disclaimer-text">{{ toLocal("reg.E_OE") }}</span>
    </section>

    <div class="under-disclaimer"></div>

    <!-- ==================== SHARE BLOKAS ==================== -->
    <footer class="facts-share" role="contentinfo" aria-label="Contact information">
      <span class="share-title">{{ toLocal("facts.share_story") }}</span>
      <button
        @click="mailto"
        tabindex="0"
        role="button"
        aria-label="Send email to info@eurofsa.org"
        @keydown.enter.prevent="mailto"
        @keydown.space.prevent="mailto"
      >
        info@eurofsa.org
      </button>     
    </footer>
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
  metaInfo() {
    return {
      title: this.toLocal('country.regulations'),
      titleTemplate: '%s | European Smoke Alarm Day',
      htmlAttrs: {
        lang: this.$i18n?.locale || 'en',
        'aria-live': 'polite',
        'aria-atomic': 'true'
      },
      meta: [
        { name: 'description', content: this.toLocal('reg.check_map') }
      ]
    }
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
    handleCountryFocus(countryName) {
      // Announce country focus to screen readers
      const statusElement = document.querySelector('.sr-only[role="status"]');
      if (statusElement) {
        statusElement.textContent = `Focused on ${countryName}`;
      }
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
  beforeUnmount() {
  document.removeEventListener("focusin", this.handleGlobalFocus);
},

  },
  mounted() {
    this.sorted_countries = Object.keys(this.country_data).sort((a, b) =>
      a.localeCompare(b)
    );
    this.sorted_countries = this.sorted_countries.filter(
      (country) => !country.includes("_")
    );

    document.addEventListener("focusin", this.handleGlobalFocus);
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
      background-size: cover;
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

.map-object:focus-visible {
  outline: 3px solid #000000ff;
  outline-offset: 2px;
  stroke-width: 3;
}

/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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
</style>
<style lang="scss">
@import "@/assets/scss/variables";
.semibold {
  font-family: $semiBoldFont;
}
</style>