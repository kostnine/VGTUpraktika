<template>
  <div
    class="country-card"
    :class="country_data[countryInfo].expanded == true ? 'expanded' : ''"
    v-scroll-lock="windowWidth <= 768"
  >
    <div class="nav-line">
      <img
        src="@/assets/icons/close_cross.svg"
        class="card-close"
        alt="close"
        @click="closeActiveCountry"
                @keyup.enter="closeActiveCountry"
        @keyup.space="closeActiveCountry"
        tabindex="0"
        aria-label="Close country information"
      />
    </div>

    <span class="country-title">
      {{
        translateCountry(
          country_data[countryInfo].displayName,
          country_data[countryInfo].name
        )
      }}
    </span>
    <div
      class="country-segment"
      v-for="(segment, key) in country_data[this.countryInfo].content"
      :key="key"
    >
      <span v-if="segment.title != undefined" class="segment-title">{{
        translateCountry(segment.title, country_data[countryInfo].name)
      }}</span>
      <span
        v-if="segment.text != undefined"
        v-html="translateCountry(segment.text, country_data[countryInfo].name)"
        class="segment-content"
      ></span>
      <div
        v-if="segment.gap_size != undefined"
        :style="['width: 100%', { height: segment.gap_size }]"
      ></div>
      <div class="segment-links" v-if="segment.links.length > 0">
        <span class="link" v-for="(link, key) in segment.links" :key="key">
          <div
            v-if="link.gap_above != 0"
            :style="['width: 100%', { height: link.gap_above }]"
          ></div>
          <span class="link-title"
            >{{
              translateCountry(link.link_title, country_data[countryInfo].name)
            }}: </span
          ><br v-if="link.isUrlInNewLine" />
          <a :href="link.link_url" target="_blank">{{
            translateCountry(link.link_name, country_data[countryInfo].name)
          }}</a>
          <div
            v-if="link.gap_below != 0"
            :style="['width: 100%', { height: link.gap_below }]"
          ></div>
        </span>
      </div>
      <span class="extending"></span>
    </div>
  </div>
</template>

<script>
//  salies contento taisykles
//"content": [
//   {
//    "title": "Sub- salies pavadinimas, ex. SCOTLAND",
//     "text": "Textas su innerHTML , <br> perkels i kita eilute, <p></p> padarys tarpa tarp textu",
//     "links":[
//        Salies regulaciju linkai
//       {
//         "link_title": "Linko boldintas apibudinimas (Regulations, guidance etc)",
//         "link_url": "Pats linkas prasidedentatis https",
//         "link_name": "Matomas linko pavadinimas",
//          "gap_above": "Tarpas virs linko, ex: '16px'",
//          "gap_below": "Tarpas po linko, ex: '16px'",
//          "isUrlInNewLine": (true/false) ar linkas turetu buti naujoj eilutej pagal dizaina
//       },
//     ],
//     "gap_size": "dydis nuo teksto iki jo linku"
//   }
// ]
import country_data from "@/assets/data/country_data.json";
export default {
  name: "CountryTextComponent",
  props: ["country", "closeCountry"],
  data() {
    return {
      countryInfo: this.country,
      closeActiveCountry: this.closeCountry,
      country_data: country_data,
      windowWidth: window.innerWidth,
    };
  },
  watch: {
    country(newVal) {
      this.countryInfo = newVal;
    },
  },
  methods: {
    translateCountry(text, name = null) {
      if (text.includes("<name>")) {
        text = text.replace("<name>", name.toLowerCase());
      }
      return this.toLocal(text);
    },
    closeOpenedCountry() {
      this.closeActiveCountry;
    },
    clearCountry() {},
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener("resize", this.onResize);
        const closeBtn = this.$el.querySelector(".card-close");
        if (closeBtn) closeBtn.focus();
      });
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
.country-card {
  overflow-y: auto;
  margin-top: 20px;
  background: #faf7f5;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  color: #1e1826;
  font-family: $mainFont;
  box-sizing: border-box;
  padding: 20px;
  word-wrap: normal;
  position: absolute;
  width: 384px;
  height: 510px;
  top: 20%;
  z-index: 100;
  @media (max-width: 1580px) {
    position: relative;
  }
  @media (max-width: 768px) {
    margin: 0;
    position: fixed;
    min-height: 0;
    top: 110px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 55px);
    overflow-y: auto;
  }
  &.expanded {
    height: 660px;
    width: 500px;
    @media (max-width: 1000px) {
      width: 140%;
    }
    @media (max-width: 768px) {
      height: 86vh;
      width: 100%;
    }
  }
}
.country-title {
  font-size: 32px;
  line-height: 72px;
  font-family: $semiBoldFont;
}

.country-segment {
  display: flex;
  flex-direction: column;
  .segment-title {
    font-size: 20px;
    line-height: 24px;
    font-family: $semiBoldFont;
    margin-bottom: 10px;
  }
  .segment-content {
    font-size: 18px;
    line-height: 24px;
    display: inline-block;
    margin-bottom: 8px;
  }
  .segment-links {
    display: flex;
    flex-direction: column;
  }
}
.link {
  margin: 5px 0;
  .link-title {
    font-family: $semiBoldFont;
  }
}
.nav-line {
  width: 100%;
  position: relative;
  .card-close {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
  }
}

// .regulations-country-info-block {
//   height: 800px;
//   background: #faf7f5;
//   box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
//   border-radius: 15px;
//   text-align: start;
//   display: flex;
//   flex-direction: column;
//   padding-top: 5vh;
//   justify-content: start;
//   color: #1e1826;
//   position: relative;
//   min-width: 450px;
//   @media (max-width: 1280px) {
//     max-height: 760px;
//     overflow-y: auto;
//     min-width: 400px;
//   }
//   .regulations-country-close {
//     width: 16px;
//     height: 16px;
//     position: absolute;
//     top: 16px;
//     right: 21px;
//     cursor: pointer;
//   }
// }
// .regulations-country-name {
//   font-size: 48px;
//   line-height: 72px;
//   font-family: $semiBoldFont;
//   margin-bottom: 26px;
//   margin-left: 22px;
//   @media (max-width: 1280px) {
//     margin-bottom: 4px;
//   }
// }
// .paragraph-title {
//   font-size: 24px;
//   line-height: 32px;
//   font-family: $semiBoldFont;
// }
// .paragraph {
//   text-align: start;
//   font-size: 16px;
//   line-height: 24px;
//   margin: 27px 16px;
//   width: 95%;
//   a {
//     color: #1290c1;
//   }
//   @media (max-width: 1280px) {
//     margin: 4px 8px;
//   }
// }
</style>
