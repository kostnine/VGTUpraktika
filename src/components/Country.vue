<template>
  <path
    class="map-object"
    :class="
      ({ active: this.activeSelectedCountry == this.countryInfo.name },
      {
        grayed:
          this.activeSelectedCountry !== this.countryInfo.name &&
          this.activeSelectedCountry !== '',
      })
    "
    @click="setSelectedCountry(countryInfo.name)"
    :d="this.countryInfo.svg"
    :fill="this.countryInfo.fill"
    stroke="#1E1826"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</template>

<script>
export default {
  name: "CountryComponent",
  props: ["country", "setActiveCountry", "activeSelectedCountry"],
  data() {
    return {
      countryInfo: this.country,
      setCountry: this.setActiveCountry,
      activeCountry: this.activeSelectedCountry,
    };
  },
  methods: {
    setSelectedCountry(name) {
      this.setCountry(name);
      console.log(this.activeSelectedCountry);
      console.log(this.countryInfo.name);
    },
  },
};
</script>

<style scoped lang="scss">
.map-object:hover {
  transition: 0.1s;
  cursor: pointer;
  fill: #483a5b;
}
.map-object {
  &.grayed {
    opacity: 0.2;
  }
}
</style>
