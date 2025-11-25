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
    @keydown.enter.prevent="setSelectedCountry(countryInfo.name)"
    @keydown.space.prevent="setSelectedCountry(countryInfo.name)"
    @focus="$emit('country-focus', countryInfo.name)"
    :d="this.countryInfo.svg"
    :fill="this.countryInfo.fill"
    stroke="#1E1826"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="button"
    :aria-label="`${countryInfo.name} - ${getRegulationStatus()}`"
    :aria-pressed="activeSelectedCountry === countryInfo.name"
    tabindex="0"
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
    },
    getRegulationStatus() {
      // Determine regulation status based on color
      const color = this.countryInfo.fill;
      if (color === '#a2bbe5') return 'Multiple requirements';
      if (color === '#f39964') return 'At least one requirement';
      if (color === '#c0554b') return 'No requirements';
      return 'Regulation status unknown';
    },
  },
};
</script>

<style scoped lang="scss">
.map-object:hover {
  cursor: pointer;
  fill: #483a5b;
}
.map-object {
  transition: 0.2s;
  &.grayed {
    opacity: 0.2;
  }
}
</style>
