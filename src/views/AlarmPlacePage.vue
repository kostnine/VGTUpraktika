<template>
  <div>
    <div class="page-header">
      <div class="header-text">
        <span class="header-title">What Do You Need to Know
About Smoke Alarms?</span>
        <span class="header-content"
          >Types of smoke alarms, where to locate them at home, how to look after them... Let’s find out everything!</span
        >
        <button class="header-button">
          <span @click="scroll('locations-header')">Learn more locations </span
          ><img src="@/assets/icons/arrow_down_white.svg" alt="down_arrow" />
        </button>
      </div>
      <div class="page-image-half">
        <img
          class="top-image"
          src="@/assets/images/install-smoke-alarms.png"
          alt="image"
        />
        <img
          class="cropped-circle"
          src="@/assets/images/Circle_red.svg"
          alt="circle"
        />
      </div>
    </div>
    <div class="types-page-main-container"  >
      <div class="types-page-main-nav">
        <div class="main-nav-clickable" @click="$router.push({path: '/types'})">{{ `<` }} Types of Smoke Alarms</div>
        <div class="main-nav-clickable">How to Look After Smoke Alarms ></div>
      </div>
      <div class="main-header" id="locations-header">
        <span class="main-header-title" id="types">Where to Place Smoke Alarms?</span>
        <span class="main-header-content"
          >The placement of a smoke alarm is essential for the correct functioning of the detector. Of course, it should work properly and provide you and your family with life-saving minutes in the event of a fire.
Although regulations differ slightly from country to country, we would like to provide some general guidelines on where to install smoke alarms.
</span
        >
      </div>
      <div class="main-content">
        <div class="main-content-red-bar">
            <div class="info">
                <div class="row">Location requirements for smoke and heat alarms according to the room of the house.</div>
                <div class="row">
                    <div class="legend">
                        <div class="legend-item">
                            <div class="legend-color ionisation"></div>
                            <div class="legend-text">Ionisation</div>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color optical"></div>
                            <div class="legend-text">Optical</div>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color heat"></div>
                            <div class="legend-text">Heat</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="house">
                <HouseComponent />
            </div>
        </div>
        <div class="locations">
          <div class="content-section">
            <h2>Siting and Locations of Smoke Alarms</h2>
            <h4>Smoke, Heat and Fire Alarms</h4>
            <div class="location-container">
              <div class="location" v-for="(location, index) in locations" :key="index">
                <img :src="require(`@/assets/${location.img}`)" />
                <p>{{location.text}}</p>
              </div>
            </div>
          </div>
          <div class="red-circle">
          </div>
          <div class="types-page-main-nav bottom">
            <div class="main-nav-clickable">{{ `<` }} Back to Homepage</div>
            <div class="main-nav-clickable">Locations of Smoke Alarms ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HouseComponent from '@/components/House.vue'
export default {
    components:{
        HouseComponent
    },
    data(){
      return{
        locations:[
          {img: 'images/locations/location1.svg', 'text': 'Ceiling mount in central position.'},
          {img: 'images/locations/location2.svg', 'text': 'Site at least 300 mm from walls and obstructions (e.g. light pendant – where 300 mm cannot be achieved move closer to the pendant).'},
          {img: 'images/locations/location3.svg', 'text': 'Smoke alarms – max 7.5 m from any point in the area.'},
          {img: 'images/locations/location4.svg', 'text': 'Heat alarms – max 5 m from any point in the area.'},
          {img: 'images/locations/location5.svg', 'text': 'Site alarm between risk areas (kitchen and lounge) and bedrooms.'},
          {img: 'images/locations/location6.svg', 'text': 'Site alarms max 3 m from any bedroom door.'},
        ]
      }
    },
    methods:{
      scroll(id) {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
        });
      },
    }

}
</script>

<style lang="scss">
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
      &.bottom{
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
        &.bottom{
          padding-top: 20px;
        }
        .main-nav-clickable{
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
  padding: 0 160px 0 160px;
  padding-top: 80px;
  padding-bottom: 210px;
  @media (max-width: 1280px) {
    padding: 0 80px 0 80px;
  }
  .main-header-title {
    font-size: 48px;
    line-height: 72px;
    font-family: $semiBoldFont;
    text-align: center;
    color: #1e1826;
    margin-bottom: 30px;
  }
  .main-header-content {
    font-size: 24px;
    line-height: 32px;
    max-width: 550px;
    text-align: center;
    color: #1e1826;
  }
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
    // position: absolute;
    img {
      width: 100%;
      height: 100%;
      object-fit: none;
      object-position: 0% 61%;
      @media (max-width: 1280px) {
        object-position: 50% 61%;
      }
    }
    .house{
      display: flex;
      flex:8;
      position: relative;
      width: 100%;
      svg{
        position: absolute;
        left: 0;
        bottom:0;

      }
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex:5;
      color: white;
      padding: 1rem 0;
      font-size: clamp(20px, 4vw, 24px);
      max-width: 355px;
      // margin-left: ;
      .row{
        display: flex;
        width: 100%;
        .legend{
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          padding: calc(min(20px,10vw)) calc(min(40px,10vw));
          border-radius: 10px;
          width: 100%;
          max-width: 355px;
          margin-top: 25px;
        }
        .legend-item{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #1e1826;
          font-size: clamp(14px, 5vw, 16px);
          .legend-color{
            height: 30px;
            width: 30px;
            margin: 5px;
            &.ionisation{
              background: #ead40ea9;
            }
             &.optical{
              background: #a2bae5a8;
            }
             &.heat{
              background: #d93c2eaf;
            }
          }
        }
      }
    }
    @media (max-width: 768px){
      display: flex;
      flex-direction: column-reverse;
      .house{
        position: relative;
        top: 0;
        flex:1;
        margin: 2rem 0;
        svg{
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
.locations{
  position: relative;
  overflow: hidden;
  font-family: $semiBoldFont;
  padding: 70px calc(min(160px, 10vw)) 40px;
  h2, h4{
    font-size: clamp(24px, 4vw, 32px);
    text-align: center;
  }
  h2{
    font-size: clamp(24px, 5vw, 32px);
  }
  h4{
    font-size: clamp(18px, 4vw, 24px);

  }
  .content-section{
    display: flex;
    flex-direction: column;
    background: #faf7f5;
    padding: 60px calc(min(165px, 15vw));
    box-shadow: 0 2px 3px 0px #00000052;
    border-radius: 10px;
  }
  .location-container{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color:#1e1826;
    .location{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      max-width: 50%;
      width: 45%;
      margin: 2rem 0px;
      p{
        text-align: center;
        max-width: 320px;
        font-family: $mainFont;
      }
    }
  }
    .red-circle{
      position: absolute;
      background: $mainColor;
      z-index: -1;
      right: -30vw;
      bottom: -25vw;
      width: 62vw;
      height: 62vw;
      border-radius: 50%;

  }
  @media (max-width: 768px){
    padding: 0;
    h2{
      font-size: clamp(24px, 5vw, 32px);
    }
    h4{
      font-size: clamp(18px, 5vw, 24px);
    }
    .content-section{
      padding: 20px 20px;
    }
    .location-container{
      flex-direction: column;
      align-items: center;
      .location{
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
</style>