<template>
  <div class="regulations-page-container">
    <PageHeader
      image="images/Man_writing.png"
      title="Regulations in Europe"
      content="Check out the interactive map to find out more about regulations on smoke alarms in domestic properties in different European countries."
      buttonText="Map of Europe"
      scrollTo="map"
    />
    <div class="regulations-page-map" id="map">
      <div class="regulations-page-text-content" v-if="activeCountry == ''">
        <span class="regulations-page-text-title"
          >Smoke alarm requirements</span
        >
        <span class="regulations-page-text-subInfo"
          >Click on the map and see what the requirements in each country
          are.</span
        >
        <div class="regulations-page-dict-row">
          <div class="regulations-page-dict-wrapper">
            <span class="regulations-page-text-dict"
              ><div class="colored-block blue"></div>
              Multiple alarms per property</span
            >
            <span class="regulations-page-text-dict"
              ><div class="colored-block orange"></div>
              At least one alarm per property</span
            >
            <span class="regulations-page-text-dict"
              ><div class="colored-block red"></div>
              No alarm requirement</span
            >
          </div>
        </div>
        <select
          class="country-select"
          @model="this.activeCountry"
          @change="(e) => setActiveCountry(e.target.value)"
        >
          <option hidden disabled value="" selected>Select a country</option>
          <option
            v-for="(country, key) in this.sorted_countries"
            :key="key"
            :value="country"
          >
            {{ country }}
          </option>
        </select>

        <div class="regulations-information-block">
          <span class="regulations-information-title">Information:</span>
          <ul>
            <li>Extensive smoke alarm legislation in multiple countries</li>
            <li>No legislation in Southern / Eastern Europe</li>
            <li>
              Consumer awareness is found to be the most important influence in
              the decision to buy a smoke alarm, even without legislation or
              when legislation is limited.
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
      <span class="disclaimer-text"
        >E&OE – While we have made every effort to ensure the information
        provided is correct and up to date, we accept that there maybe errors
        and welcome updates. Corrections and contributions to improve accuracy
        or additional detail.</span
      >
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
    setActiveCountry(country) {
      if (this.activeCountry == country) {
        this.activeCountry = "";
      } else {
        this.activeCountry = country;
        this.scroll("map");
      }
    },
    clearActiveCountry() {
      this.activeCountry = "";
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

      unbind: function (el, binding) {
        console.log(binding);
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
      margin-top: 16px;
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
  width: 61%;
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
}
</style>
<style lang="scss">
@import "@/assets/scss/variables";
.semibold {
  font-family: $semiBoldFont;
}
</style>
