<template>
  <div class="regulations-page-container">
    <PageHeader
      image="images/Man_writing.png"
      title="Regulations in Europe"
      content="See the interactive map to know more about regulations in different
          european homes!"
      buttonText="Map of the Europe"
      scrollTo="map"
    />
    <div class="regulations-page-map" id="map">
      <div class="regulations-page-text-content" v-if="activeCountry == ''">
        <span class="regulations-page-text-title"
          >Smoke alarm requirements</span
        >
        <span class="regulations-page-text-subInfo"
          >Click on map and see what are the requirements in each country</span
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

        <div class="regulations-information-block">
          <span class="regulations-information-title">Information:</span>
          <ul>
            <li>Extensive smoke alarm legislation in multiple countries</li>
            <li>No legislation in Southern/Eastern Europe</li>
            <li>
              Consumer awareness is found to be the most important influence in the decision to buy a smoke alarm, even without legislation or when legislation is limited or is not enforced actively.
            </li>
            
          </ul>
        </div>
      </div>
      <div
        class="regulations-page-text-content"
        v-else-if="activeCountry != ''"
      >
        <div class="regulations-country-info-block">
          <img
            @click="clearActiveCountry"
            src="@/assets/icons/close_cross.svg"
            alt="close"
            class="regulations-country-close"
          />
          <span class="regulations-country-name">{{
            country_data[activeCountry].name
          }}</span>
          <div
            class="paragraph"
            v-if="country_data[activeCountry].p1_title != ''"
          >
            <span class="paragraph-title">{{
              country_data[activeCountry].p1_title
            }}</span>
            <div v-html="country_data[activeCountry].p1_text"></div>
          </div>
          <div
            class="paragraph"
            v-if="country_data[activeCountry].p2_title != ''"
          >
            <span class="paragraph-title">{{
              country_data[activeCountry].p2_title
            }}</span>
            <div v-html="country_data[activeCountry].p2_text"></div>
          </div>
          <div
            class="paragraph"
            v-if="country_data[activeCountry].p3_title != ''"
          >
            <span class="paragraph-title">{{
              country_data[activeCountry].p3_title
            }}</span>
            <div v-html="country_data[activeCountry].p3_text"></div>
          </div>
        </div>
      </div>
      <div class="regulations-page-map-content">
        <div>
          <svg
            class="map-svg"
            viewBox="0 0 1077 1082"
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
  </div>
</template>

<script>
// @ is an alias to /src
import country_data from "@/assets/data/country_data.json";
import CountryComponent from "@/components/Country.vue";
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "RegulationsPage",
  data() {
    return {
      activeCountry: "",
      country_data: country_data,
    };
  },
  components: {
    CountryComponent,
    PageHeader,
  },
  methods: {
    setActiveCountry(country) {
      if (this.activeCountry == country) {
        this.activeCountry = "";
      } else {
        this.activeCountry = country;
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
  height: 1200px;
  width: 100%;
  background-color: white;
  z-index: 2;
  display: flex;
  padding: 0 0 0 160px;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    height: 80vh;
    padding: 0 0 0 80px;
  }
}
.regulations-page-text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: $mainFont;
  width: 32%;
  height: 100%;

  .regulations-page-text-title {
    font-size: 48px;
    font-family: $semiBoldFont;
    text-align: start;
  }
  .regulations-page-text-subInfo {
    font-size: 16px;
    line-height: 24px;
    text-align: start;
  }
}
.regulations-page-map-content {
  width: 68%;
  height: 95%;
  div {
    width: 100%;
    height: 1080px;
    box-sizing: border-box;
  }
}

.colored-block {
  width: 34px;
  height: 34px;
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
    }
  }
}
.regulations-information-block {
  text-align: start;
  .regulations-information-title {
    font-family: $semiBoldFont;
  }
}

//regulations left info
.regulations-country-info-block {
  height: 800px;
  background: #faf7f5;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #1e1826;
  position: relative;
  min-width: 450px;
  @media (max-width: 1280px) {
    max-height: 760px;
    overflow-y: auto;
    min-width: 400px;
  }
  .regulations-country-close {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 16px;
    right: 21px;
    cursor: pointer;
  }
}
.regulations-country-name {
  font-size: 48px;
  line-height: 72px;
  font-family: $semiBoldFont;
  margin-bottom: 26px;
  margin-left: 22px;
  @media (max-width: 1280px) {
    margin-bottom: 4px;
  }
}
.paragraph-title {
  font-size: 24px;
  line-height: 32px;
  font-family: $semiBoldFont;
}
.paragraph {
  text-align: start;
  font-size: 16px;
  line-height: 24px;
  margin: 27px 16px;
  width: 95%;
  a {
    color: #1290c1;
  }
  @media (max-width: 1280px) {
    margin: 4px 8px;
  }
}
.map-svg {
  width: 100%;
  height: 100%;
  @media (max-width: 1280px) {
    height: 70%;
  }
}
</style>
<style lang="scss">
@import "@/assets/scss/variables";
.semibold {
  font-family: $semiBoldFont;
}
</style>
