<template>
  <div>
    <PageHeader
      image="images/install_smoke_alarms.jpg"
      title="Where to Place<br> Smoke Alarms?"
      content="Protect yourself and your family with the right number and correct placement of smoke alarms."
      buttonText="Learn More About Locations"
      scrollTo="locations-header"
    />
    <div class="types-page-main-container">
      <div class="main-header" id="locations-header">
        <span class="main-header-title" id="types"
          >Where Exactly Should<br />
          Smoke Alarms Be Installed?</span
        >
        <span class="main-header-content">
          The placement of a smoke alarm is essential for the correct
          functioning of the detector. Of course, it should work properly and
          provide you and your family with life-saving minutes in the event of a
          fire.
        </span>
        <span class="main-header-content">
          Although regulations differ slightly from country to country, this
          page provides some general guidelines on where to install smoke
          alarms.
        </span>
      </div>
      <div class="recommendations">
        <div class="row has-cols">
          <div class="col left">
            <p>
              According to the recommendations of various European fire
              protection organisations and associations,
              <span class="semibold"
                >there should be at least 1 smoke alarm on every floor</span
              >
              (including the basements) of every home. In addition, it can be a
              requirement to place alarms in all bedrooms (especially children's
              rooms) and in rooms that are part of an escape route (e.g. hall,
              corridor).
            </p>
          </div>
          <div class="col">
            <div class="card red">
              <p>
                <span class="semibold">Note:</span> In apartments, of course,
                every corridor is also an escape route. In some houses there are
                also corridors that do not serve as an exit in case of fire. We
                recommend installing smoke alarms here especially if there are
                sleeping quarters.
              </p>
            </div>
          </div>
        </div>
        <div class="content-column">
          <div class="row">
            <div class="arrow-right"></div>
            <p>
              We also recommend that
              <span class="semibold">living rooms and study rooms</span> should
              always be equipped with alarms and that these alarms be connected
              to those in the sleeping areas.
            </p>
          </div>
          <div class="row">
            <div class="arrow-right"></div>
            <p>
              It also makes sense to install an alarm in rooms where
              <span class="semibold">there are electrical appliances</span>
              (especially washing machines and dryers) and in
              <span class="semibold">in remote rooms</span> that are frequently
              used but where the signal from other smoke alarms cannot be heard.
            </p>
          </div>
          <div class="row white">
            <p>
              In general, you should remember that
              <span class="semibold"
                >a smoke detector can monitor an area of up to 60 m²</span
              >. If your room area is larger than 60 m², you should install an
              additional smoke alarm. So depending on the size of your home,
              this means that
              <span class="semibold">you will need several smoke alarms</span>.
              In corridors or escape routes an alarm should be positioned every
              7.5 m.
            </p>
          </div>
          <div class="row">
            <div class="arrow-right"></div>
            <p>
              Before installing your smoke alarms, please
              <strong>check country-specific regulations</strong> or seek advice
              from a local fire safety expert.
            </p>
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="main-content-red-bar">
          <div class="info">
            <div class="row">
              <div class="legend">
                <span class="legend-title">
                  Location requirements for smoke and heat alarms according to
                  the room of the house.
                </span>
                <div
                  class="legend-item"
                  v-for="(item, index) in legend"
                  :key="index"
                >
                  <div
                    class="legend-color"
                    :style="{ 'background-color': item.color }"
                  ></div>
                  <div class="legend-text">{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="house">
            <HouseComponent />
          </div>
        </div>
        <div class="consider-container">
          <h2>What to Consider for the Installation Location?</h2>
          <span class="even-text"
            >Now that we have determined which rooms / areas should <br />be
            equipped with detectors, the next question is<br />
            <span class="semibold"
              >where in the room it should be installed.</span
            ></span
          >
          <div class="card wheat mb-40">
            <p>
              In many European countries, legislation specifies or refers to a
              building code. Generally, the installation location must
              prioritise early detection of fire smoke and a sound level
              sufficient to wake all sleeping occupants on the property. Usually
              this will require multiple alarms per property.
            </p>
            <p>
              In addition, there are also specifications on room sizes and
              living areas which may be different from country to country. Your
              local fire protection expert will be able to advise you on this.
            </p>
          </div>
          <h2>Installation in the Room</h2>
          <div class="row has-cols">
            <div class="col left">
              <div class="row">
                <div class="block-with-number">1</div>
                <p>
                  As smoke rises, it is always preferable to
                  <span class="semibold">position alarms on the ceiling</span>
                  to ensure the fastest possible detection. If this is not
                  possible then wall mounting is allowed by some manufacturers.
                  Always
                  <span class="semibold">read the user manual</span> before
                  starting the installation.
                </p>
              </div>
              <div class="row">
                <div class="block-with-number">2</div>
                <p>
                  <span class="semibold"
                    >Use the screws and rawlplugs provided with the alarm</span
                  >
                  to ensure a solid, secure fixing that will last for the 10
                  year life of the product.
                </p>
              </div>
              <div class="row">
                <div class="block-with-number">3</div>
                <p>
                  Smoke alarms should be placed centrally in the room,
                  <span class="semibold">at least 50 cm away from walls</span>
                  to avoid dead air zones. Avoid objects such as lamps and other
                  ceiling-mounted fixtures which may generate air currents that
                  could deflect the smoke away from the alarm.
                  <span class="semibold"
                    >Do not install them near windows, doors, or ducts where
                    drafts might interfere with their operation.</span
                  >
                </p>
              </div>
              <div class="row">
                <div class="block-with-number">4</div>
                <p>
                  Smoke
                  <span class="semibold">alarms installed in the basement</span>
                  should be installed on the ceiling at the bottom of the stairs
                  leading to the next level.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="card red">
                <h4>Never paint smoke alarms.</h4>
                <p>
                  Paint, stickers, or other decorations could keep the alarms
                  from working.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="locations">
          <div class="content-section">
            <h2>Siting and Locations of Smoke Alarms</h2>
            <h4>Smoke, Heat and Fire Alarms</h4>
            <div class="location-container">
              <div
                class="location"
                v-for="(location, index) in locations"
                :key="index"
              >
                <img :src="require(`@/assets/${location.img}`)" />
                <p>{{ location.text }}</p>
              </div>
            </div>
          </div>
          <div class="red-circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HouseComponent from "@/components/House.vue";
import PageHeader from "@/components/PageHeader.vue";

export default {
  components: {
    HouseComponent,
    PageHeader,
  },
  metaInfo: {
      title: 'Where To Place Smoke Alarms',
  },
  data() {
    return {
      locations: [
        {
          img: "images/locations/location1.svg",
          text: "Ceiling mount in central position.",
        },
        {
          img: "images/locations/location2.svg",
          text: "Site at least 300 mm from walls and obstructions (e.g. light pendant – where 300 mm cannot be achieved move closer to the pendant).",
        },
        {
          img: "images/locations/location3.svg",
          text: "Smoke alarms – max 7.5 m from any point in the area.",
        },
        {
          img: "images/locations/location4.svg",
          text: "Heat alarms – max 5 m from any point in the area.",
        },
        {
          img: "images/locations/location5.svg",
          text: "Site alarm between risk areas (kitchen and lounge) and bedrooms.",
        },
        {
          img: "images/locations/location6.svg",
          text: "Site alarms max 3 m from any bedroom door.",
        },
      ],
      legend: [
        { color: "#a2bae5a8", text: "Minimum protection" },
        { color: "#ead40ea9", text: "Additional recommended protection" },
        { color: "#d93c2eaf", text: "Recommended heat detector" },
        { color: "#6FC06EBD", text: "No alarm" },
      ],
    };
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.page-header {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 1080px;
  background-color: #fbf3ed;
  padding-top: 80px;
  padding-left: 160px;
  padding-right: 160px;
  margin-bottom: -50px;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    padding-left: 80px;
    padding-right: 80px;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    width: 50%;
    font-family: $mainFont;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 1280px) {
      width: 80%;
    }
    .header-title {
      font-family: $semiBoldFont;
      font-size: 64px;
      margin-bottom: 50px;
    }
    .header-content {
      font-size: 24px;
      text-align: start;
      margin-bottom: 75px;
      width: 80%;
      @media (max-width: 1280px) {
        width: 100%;
      }
    }
    .header-button {
      position: relative;
      width: 380px;
      height: 64px;
      border-radius: 5px;
      border: none;
      color: white;
      background-color: #c0554b;
      font-size: 24px;
      font-family: $semiBoldFont;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        height: 12px;
        width: 27px;
        position: absolute;
        top: 28px;
        right: 40px;
      }
      &:hover {
        background-color: #483a5b;
      }
    }
  }
  .page-image-half {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
      margin-left: 100px;
    }
    .cropped-circle {
      position: absolute;
      z-index: 0;
      right: 0;
      top: 350px;
      @media (max-width: 1280px) {
        right: -100px;
        top: 450px;
        max-width: 923px;
        max-height: 923px;
      }
    }
    .top-image {
      z-index: 1;
      height: 45%;
      @media (max-width: 1280px) {
        min-width: 450px;
        max-height: 450px;
      }
    }
  }
}
.types-page-main-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  .types-page-main-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 160px 0 160px;
    padding-top: 80px;
    &.bottom {
      padding: 0;
      padding-top: 40px;
    }
    @media (max-width: 1280px) {
      padding: 0 80px 0 80px;
      margin: 16px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin: 0;
      padding: 0;
      &.bottom {
        padding-top: 20px;
      }
      .main-nav-clickable {
        width: calc(100% - 20px);
        margin-bottom: 16px;
      }
    }
    .main-nav-clickable {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 24px;
      background: #dce3ef;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #1e1826;
      transition: 0.1s;
      flex-wrap: nowrap;
      white-space: nowrap;
      &:hover {
        background-color: $secondaryColor;
        color: white;
        font-family: $semiBoldFont;
      }
    }
  }
}
.main-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 1280px) {
    padding: 0 80px 0 80px;
  }
  .main-header-title {
    margin-top: 75px;
    line-height: clamp(36px, 5vw, 72px);
    font-family: $semiBoldFont;
    text-align: center;
    color: #1e1826;
    margin-bottom: 3rem;
    font-size: clamp(28px, 5vw, 48px);
  }
  .main-header-content {
    font-size: 24px;
    line-height: 32px;
    max-width: 70%;
    text-align: center;
    color: #1e1826;
    margin-bottom: 4rem;
  }
}
.row {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  &.white {
    color: white;
    padding: 15px;
    background: #483a5b;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  }
}
.col {
  &.left {
    padding: 20px 40px 20px 0;
    font-size: 20px;
    line-height: 28px;
    @media (max-width: 1080px) {
      max-width: 60%;
      text-align: justify;
    }
    @media (max-width: 768px) {
      max-width: 100%;
    }
    .semibold {
      font-family: $semiBoldFont;
      font-size: 20px;
      line-height: 28px;
    }
  }
}
.recommendations {
  display: flex;
  padding: 50px calc(min(160px, 10vw)) 15%;
  flex-direction: column;
  background: #fbf3ed;
  p {
    margin: 0;
    font-size: 20px;
  }
  .content-column {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1280px) {
    padding: 5vw 20px 5%;
  }
}
.consider-container {
  display: flex;
  padding: 50px calc(min(160px, 10vw)) 0;
  flex-direction: column;
  align-items: center;
  .row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  h2 {
    text-align: center;
    font-size: clamp(24px, 5vw, 32px);
    margin: 3rem 0;
  }
  .even-text {
    text-align: center;
    width: 80%;
  }
  span {
    text-align: center;
    max-width: 80%;
    margin: 2rem 0 4rem;
    font-size: clamp(16px, 5vw, 24px);
  }
}
.card {
  background: white;
  padding: 20px 30px;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  &.wheat {
    background: #fbf3ed;
    h4 {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
  &.red {
    background-color: #c0554b;
    color: white;
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-family: $semiBoldFont;
  }
}
.mb-40 {
  margin-bottom: 40px;
}
.arrow-right {
  background: none;
  border-top: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  height: 25px;
  width: 25px;
  min-width: 25px;
  min-height: 25px;
  margin-left: -12.5px;
  margin-right: 15px;
}
.main-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  .main-content-red-bar {
    position: relative;
    display: flex;
    background-color: $mainColor;
    width: 100%;
    min-height: 300px;
    padding: 15px calc(min(160px, 10vw));
    @media (max-width: 1080px) {
      padding: 15px calc(min(80px, 5vw));
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: none;
      object-position: 0% 61%;
      @media (max-width: 1280px) {
        object-position: 50% 61%;
      }
    }
    .house {
      display: flex;
      flex: 10;
      position: relative;
      width: 100%;
      svg {
        position: absolute;
        left: 0;
        bottom: 0;
        height: auto;
        max-height: 60vh;
      }
      @media (max-width: 1124px) {
        flex: 14;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 5;
      color: white;
      padding: 1rem 0;
      font-size: clamp(20px, 4vw, 24px);
      max-width: 355px;
      // margin-left: ;
      @media (max-width: 1080px) {
        flex: 4;
      }
      .row {
        display: flex;
        width: 100%;
        .legend {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          background: white;
          padding: calc(min(15px, 10vw)) calc(min(10px, 10vw));
          border-radius: 10px;
          width: 100%;
          max-width: 355px;
          margin-top: 25px;
          .legend-title {
            color: #1e1826;
            font-size: 20px;
            line-height: 24px;
            @media (max-width: 1080px) {
              font-size: 16px;
              line-height: 18px;
              margin-bottom: 8px;
            }
          }
        }
        .legend-item {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e1826;
          font-size: clamp(14px, 5vw, 16px);
          .legend-color {
            height: 30px;
            min-width: 30px;
            margin: 5px 0;
            margin-right: 5px;
            border-radius: 3px;
          }
          .legend-text {
            text-align: center;
            @media (max-width: 1280px) {
              text-align: start;
            }
          }
        }
      }
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      .house {
        position: relative;
        top: 0;
        flex: 1;
        margin: 2rem 0;
        svg {
          position: relative;
          height: auto;
        }
      }
    }
  }
  .main-content-item {
    display: flex;
    box-sizing: border-box;
    padding: 16px;
    background-color: #faf7f5;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 88%;
    @media (max-width: 1280px) {
      width: 90%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding: 8px;
    }
    &.first {
      margin: 0 auto;
      margin-top: 100px;
    }
    &:not(.first) {
      margin: 21px auto;
    }
    .main-content-image {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 80%;
        padding: 8px;
      }
      img {
        width: 100%;
        @media (max-width: 768px) {
          object-fit: fill;
        }
      }
    }
  }
}
.locations {
  position: relative;
  overflow: hidden;
  font-family: $semiBoldFont;
  padding: 70px calc(min(160px, 10vw)) 40px;
  h2,
  h4 {
    font-size: clamp(24px, 4vw, 32px);
    text-align: center;
  }
  h2 {
    font-size: clamp(24px, 5vw, 32px);
  }
  h4 {
    font-size: clamp(18px, 4vw, 24px);
  }
  .content-section {
    display: flex;
    flex-direction: column;
    background: #faf7f5;
    padding: 60px calc(min(165px, 1vw));
    box-shadow: 0 2px 3px 0px #00000052;
    border-radius: 10px;
  }
  .location-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #1e1826;
    .location {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      max-width: 50%;
      width: 50%;
      height: 40vh;
      max-height: 400px;
      margin: 2rem 0px;
      img {
        display: flex;
        height: 73%;
      }
      p {
        height: 27%;
        text-align: center;
        max-width: 90%;
        margin: calc(min(30px, 5vw)) 0 0;
        font-size: clamp(16px, 5vw, 20px);
        font-family: $mainFont;
      }
    }
  }
  .red-circle {
    position: absolute;
    background: $mainColor;
    z-index: -1;
    right: -30vw;
    bottom: -25vw;
    width: 62vw;
    height: 62vw;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    padding: 0;
    h2 {
      font-size: clamp(24px, 5vw, 32px);
    }
    h4 {
      font-size: clamp(18px, 5vw, 24px);
    }
    .content-section {
      padding: 20px 20px;
    }
    .location-container {
      flex-direction: column;
      align-items: center;
      .location {
        width: 100%;
        max-width: 100%;
      }
    }
  }
}
.main-content-text {
  width: 67.5%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  color: #1e1826;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: $mainFont;
  @media (max-width: 768px) {
    width: 90%;
  }

  .content-text-title {
    font-size: 24px;
    line-height: 32px;
    font-family: $semiBoldFont;
    margin-bottom: 13px;
  }
  .content-text-block {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 16px;
  }
}
@media (max-width: 768px) {
  .main-header {
    padding: 0 20px;
    .main-header-content {
      max-width: 100%;
      margin-bottom: 7vw;
    }
  }
  .has-cols {
    flex-wrap: wrap;
  }
  .col {
    &.left {
      padding-right: 0;
    }
  }
  .recommendations {
    padding: 5vw 20px 15%;
  }
  .main-content .main-content-red-bar {
    padding: 15px 20px;
    .info {
      width: 100%;
      max-width: 100%;
      .row {
        margin-bottom: 15px;
        .legend {
          max-width: 100%;
          .legend-item {
            margin: 0 1vw;
          }
        }
      }
    }
  }
  .consider-container {
    padding: 8vw 20px;
    h2 {
      margin: 1vh 0;
    }
    span {
      width: 100%;
      max-width: 100%;
    }
  }
}
.types-page-main-container .types-page-main-nav {
  margin-top: 1rem;
  &.bottom {
    margin-top: 0;
  }
}
.block-with-number {
  align-self: baseline;
  color: white;
  background: #c0554b;
  min-height: 30px;
  min-width: 30px;
  width: 30px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
  margin-right: 10px;
  border-radius: 3px;
}
.semibold {
  font-family: $semiBoldFont;
}
</style>
