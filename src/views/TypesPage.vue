<template>
  <div class="types-page-container">
    <PageHeader
      image="images/Hand_detector.png"
      title="What Do You Need To Know About Smoke Alarms?"
      content="Types of smoke alarms, where to locate them at home, how to look
            after them... Let’s find out everything!"
      buttonText="Learn More About Types"
      scrollTo="types"
    />
    <div class="types-page-main-container">
      <div class="types-page-main-nav">
        <router-link to="/" tag="div" class="main-nav-clickable">
          <svg
            class="arrow-left"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.5 0.5L1.5 7L7.5 13.5" />
          </svg>
          <span class="text-left">Back to Homepage</span>
        </router-link>
        <router-link to="/place" tag="div" class="main-nav-clickable">
          <span class="text-right">Locations of Smoke Alarms</span>
          <svg
            class="nav-arrow-right"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 13.5L7 7L1 0.499999" /></svg></router-link>
      </div>
      <div class="main-header">
        <span class="main-header-title" id="types">How to Choose Your Smoke Alarm?</span>
        <div class="main-header-content"
          ><div><span>Good quality smoke alarms can be recognized by the <span class="semibold">CE logo </span>
          and the <span class="semibold">identification numbers</span> for that specific smoke alarm next to it.<br/></span>
          <div class="separator"></div>
          <span class="separated-text">Also the <span class="semibold">European standard EN 14604</span> should be mentioned.</span></div><div class="image-container"><img src="@/assets/images/C_sign.svg" alt="c_sign"/></div></div
        >
        <div class="main-header-item">
          <div class="main-content-image">
            <img src="@/assets/images/Battery.png" alt="linked" />
          </div>
          <div class="main-content-text">
            <span class="content-text-block">When you buy a smoke alarm, please pay attention to <span class="semibold">the battery lifetime</span> of the product.</span
            >
            <span class="content-text-block"
              >Smoke alarms can have a replaceable battery with a lifetime of 1 up top 5 years. When the battery is empty you replace it,  after ten years of usage you need to replace the smoke alarm as well.
            </span>
            <span class="content-text-block"
              >This is why smoke alarms with a sealed 10 year lifetime battery are the better option. Calculated over these ten years it is the best priced option because you do not need to replace the battery. You also do not run the risk of using the alarm for more than ten years.</span
            >
          </div>
        </div>
        <div class="main-header-content"
          ><div><span>Another option is choosing a smoke alarm which is <span class="semibold">interconnected</span>, this means if 1 smoke alarm detects smoke, they all go off.<br/></span>
          <div class="separator"></div>
          <span class="separated-text">You can choose <span class="semibold">wireless interconnected smoke alarms or mains connected smoke alarms.</span></span></div></div
        >
      </div>
      <div class="main-content">
        <div class="main-content-red-bar">
          <img src="@/assets/images/smoke.png" alt="smoke" />
        </div>
        <div class="main-content-item first">
          <div class="main-content-image">
            <img src="@/assets/images/Linked_detectors.png" alt="linked" />
          </div>
          <div class="main-content-text">
            <span class="content-text-title">Linked Smoke Detector(s)</span>
            <span class="content-text-block">
              Do you want to hang multiple detectors in your house? Or do you
              not hear your smoke detector properly? Then we recommend
              installing linked smoke detectors. Linking the smoke detectors is
              very simple and can be done
              <span class="semibold">wirelessly.</span></span
            >
            <span class="content-text-block"
              >If one detector in the house is triggered by smoke,
              <span class="semibold"
                >the signal will go off for all detectors that are linked.</span
              >
              This will warn you earlier and give you longer time to flee. This
              increases your chance of survival!
            </span>
            <span class="content-text-block"
              >Did you know that you can also
              <span class="semibold"
                >share linked detectors with neighbors?</span
              >
              This way you live even safer and you can warn or help each other
              sooner if a fire starts in the house.</span
            >
            <span class="content-text-block"
              >Do you want to purchase linked detectors? Then
              <a href="https:/google.com" target="_blank">click here.</a></span
            >
          </div>
        </div>
        <div class="main-content-item">
          <div class="main-content-text">
            <span class="content-text-title">Linked Smoke Detector(s)</span>
            <span class="content-text-block">
              Do you want to hang multiple detectors in your house? Or do you
              not hear your smoke detector properly? Then we recommend
              installing linked smoke detectors. Linking the smoke detectors is
              very simple and can be done
              <span class="semibold">wirelessly.</span></span
            >
            <span class="content-text-block"
              >If one detector in the house is triggered by smoke,
              <span class="semibold"
                >the signal will go off for all detectors that are linked.</span
              >
              This will warn you earlier and give you longer time to flee. This
              increases your chance of survival!
            </span>
            <span class="content-text-block"
              >Did you know that you can also
              <span class="semibold"
                >share linked detectors with neighbors?</span
              >
              This way you live even safer and you can warn or help each other
              sooner if a fire starts in the house.</span
            >
            <span class="content-text-block"
              >Do you want to purchase linked detectors? Then
              <a href="https:/google.com" target="_blank">click here.</a></span
            >
          </div>
          <div class="main-content-image">
            <img src="@/assets/images/Linked_detectors.png" alt="linked" />
          </div>
        </div>
        <div class="main-content-item">
          <div class="main-content-image">
            <img src="@/assets/images/Linked_detectors.png" alt="linked" />
          </div>
          <div class="main-content-text">
            <span class="content-text-title">Linked Smoke Detector(s)</span>
            <span class="content-text-block">
              Do you want to hang multiple detectors in your house? Or do you
              not hear your smoke detector properly? Then we recommend
              installing linked smoke detectors. Linking the smoke detectors is
              very simple and can be done
              <span class="semibold">wirelessly.</span></span
            >
            <span class="content-text-block"
              >If one detector in the house is triggered by smoke,
              <span class="semibold"
                >the signal will go off for all detectors that are linked.</span
              >
              This will warn you earlier and give you longer time to flee. This
              increases your chance of survival!
            </span>
            <span class="content-text-block"
              >Did you know that you can also
              <span class="semibold"
                >share linked detectors with neighbors?</span
              >
              This way you live even safer and you can warn or help each other
              sooner if a fire starts in the house.</span
            >
            <span class="content-text-block"
              >Do you want to purchase linked detectors? Then
              <a href="https:/google.com" target="_blank">click here.</a></span
            >
          </div>
        </div>
        <div class="main-content-item">
          <div class="main-content-text">
            <span class="content-text-title">Linked Smoke Detector(s)</span>
            <span class="content-text-block">
              Do you want to hang multiple detectors in your house? Or do you
              not hear your smoke detector properly? Then we recommend
              installing linked smoke detectors. Linking the smoke detectors is
              very simple and can be done
              <span class="semibold">wirelessly.</span></span
            >
            <span class="content-text-block"
              >If one detector in the house is triggered by smoke,
              <span class="semibold"
                >the signal will go off for all detectors that are linked.</span
              >
              This will warn you earlier and give you longer time to flee. This
              increases your chance of survival!
            </span>
            <span class="content-text-block"
              >Did you know that you can also
              <span class="semibold"
                >share linked detectors with neighbors?</span
              >
              This way you live even safer and you can warn or help each other
              sooner if a fire starts in the house.</span
            >
            <span class="content-text-block"
              >Do you want to purchase linked detectors? Then
              <a href="https:/google.com" target="_blank">click here.</a></span
            >
          </div>
          <div class="main-content-image">
            <img src="@/assets/images/Linked_detectors.png" alt="linked" />
          </div>
        </div>
      </div>
      <div class="types-page-main-nav">
        <router-link to="/" tag="div" class="main-nav-clickable">
          <svg
            class="arrow-left"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.5 0.5L1.5 7L7.5 13.5" />
          </svg>
          <span class="text-left">Back to Homepage</span>
        </router-link>
        <router-link to="/locations" tag="div" class="main-nav-clickable">
          <span class="text-right">Locations of Smoke Alarms</span>
          <svg
            class="nav-arrow-right"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 13.5L7 7L1 0.499999" /></svg></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "TypesPage",
  components: {
    PageHeader,
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
<style scoped lang="scss">
@import "@/assets/scss/variables";
.types-page-container {
  font-family: $mainFont;
  width: 100%;
  .types-page-main-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .types-page-main-nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 90px;
      padding: 0 160px 0 160px;
      padding-top: 80px;
      @media (max-width: 1280px) {
        padding: 0 80px 0 80px;
        margin: 16px;
      }
      @media (max-width: 768px) {
        margin: 16px;
        padding: 0;
      }
      .main-nav-clickable {
        box-sizing: border-box;
        position: relative;
        display: flex;
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
        @media (max-width: 768px) {
          flex-wrap: break-word;
          white-space: initial;
        }
        max-width: 50%;
        svg {
          stroke: #1e1826;
          position: absolute;
          &.arrow-left {
            left: 16px;
          }
          &.nav-arrow-right {
            right: 16px;
          }
        }
        span {
          text-decoration: dashed;
          text-decoration: none;
        }
        .text-right {
          padding-right: 32px;
          @media (max-width: 768px) {
            padding-right: 4px;
          }
        }
        .text-left {
          padding-left: 32px;
          @media (max-width: 768px) {
            padding-left: 4px;
          }
        }
        &:hover {
          background-color: $secondaryColor;
          color: white;
          font-family: $semiBoldFont;
          svg {
            stroke: white;
            stroke-width: 2px;
          }
        }
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
  @media(max-width: 768px){
    padding: 0 10vw;
  }
  .main-header-title {
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    font-family: $semiBoldFont;
    text-align: center;
    color: #1e1826;
    margin-bottom: 74px;
  }
  .main-header-content {
    font-size: 24px;
    line-height: 32px;
    width: 90%;
    text-align: start;
    color: #1e1826;
    display: flex;
    @media(max-width: 1024px){
      flex-direction: column;
      justify-content: center;
      span{
        width: 100%;
      }
      .image-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
    span{
      width: 80%;
    }
    .separator{
      height: 16px;
      width: 100%;
    }
    .image-container{
      display: flex;
      justify-content: flex-end;
      width: 20%;
      @media(max-width: 1024px){
        width: 100%;
        justify-content: center;
        margin-top: 32px;
      }
    }
  }
}
.main-header-item{
  margin-top: 70px;
  margin-bottom: 70px;
  font-size: 20px;
  line-height: 28px;
  color: #1E1826;
  display: flex;
    box-sizing: border-box;
    padding: 16px;
    background-color: #FBF3ED;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 95%;
    @media (max-width: 1280px) {
      width: 95%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding: 8px;
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
.main-content {
  display: flex;
  flex-direction: column;
  .main-content-red-bar {
    background-color: $mainColor;
    width: 100%;
    height: 300px;
    position: absolute;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: none;
      object-position: 0% 61%;
      @media (max-width: 1280px) {
        object-position: 50% 61%;
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
.semibold {
  font-family: $semiBoldFont;
}
</style>
