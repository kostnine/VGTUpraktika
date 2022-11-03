<template>
  <div class="types-page-container">
    <div class="types-page-header-container">
      <div class="types-header-text-half">
        <div class="types-header-text-container">
          <span class="types-header-title"
            >What Do You Need To Know About Smoke Alarms?</span
          >
          <span class="types-header-content"
            >Types of smoke alarms, where to locate them at home, how to look
            after them... Let’s find out everything!</span
          >
          <span class="types-header-button" @click="scroll('types')">
            Learn More About Types<img
              class="types-header-down-arrow"
              src="@/assets/icons/arrow_down_white.svg"
              alt="down_arrow"
            />
          </span>
        </div>
      </div>
      <div class="types-header-image-half">
        <img
          class="header-top-image"
          src="@/assets/images/Hand_detector.png"
          alt="detector"
        />
        <img
          class="cropped-circle"
          src="@/assets/images/Circle_red.svg"
          alt="circle"
        />
      </div>
    </div>
    <div class="types-page-main-container">
      <div class="types-page-main-nav">
        <div class="main-nav-clickable">{{ `<` }} Back to Homepage</div>
        <div class="main-nav-clickable">Locations of Smoke Alarms ></div>
      </div>
      <div class="main-header">
        <span class="main-header-title" id="types">Types of Smoke Alarms</span>
        <span class="main-header-content"
          >Did you know that there are .. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin lacus sollicitudin proin accumsan
          senectus enim ultrices volutpat felis vitae?</span
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
        <div class="main-nav-clickable">{{ `<` }} Back to Homepage</div>
        <div class="main-nav-clickable">Locations of Smoke Alarms ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypesPage",
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

  .types-page-header-container {
    display: flex;
    height: 900px;
    position: relative;
    overflow: hidden;
    padding: 0 0 0 160px;
    padding-top: 80px;
    background-color: $tetriaryColor;
    @media (max-width: 1280px) {
      padding: 0 0 0 80px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding: 8px;
      margin-bottom: 16px;
    }

    .types-header-text-half {
      width: 40%;
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .types-header-text-container {
        color: #1e1826;
        display: flex;
        flex-direction: column;
        .types-header-title {
          font-size: 56px;
          line-height: 72px;
          font-family: $semiBoldFont;
          margin-bottom: 14px;
        }
        .types-header-content {
          font-size: 24px;
          line-height: 32px;
        }
        .types-header-button {
          position: relative;
          width: 381px;
          height: 64px;
          font-size: 24px;
          line-height: 32px;
          font-family: $semiBoldFont;
          text-align: center;
          background-color: $mainColor;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          border-radius: 5px;
          margin-top: 75px;
          cursor: pointer;
          transition: 0.1s;
          z-index: 1;
          img {
            position: absolute;
            right: 40px;
            margin-left: 24px;
          }
          &:hover {
            background-color: $secondaryColor;
          }
        }
      }
    }
    .types-header-image-half {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      .cropped-circle {
        position: absolute;
        z-index: 0;
        right: -100px;
        top: 300px;
        @media (max-width: 1280px) {
          right: -200px;
          top: 350px;
        }
        @media (max-width: 768px) {
          right: -300px;
          top: 550px;
        }
      }
      .header-top-image {
        z-index: 1;
        width: 65%;
        @media (max-width: 1280px) {
          width: 450px;
        }
        @media (max-width: 768px) {
          width: 250px;
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
      margin-bottom: 90px;
      padding: 0 160px 0 160px;
      padding-top: 80px;
      @media (max-width: 1280px) {
        padding: 0 80px 0 80px;
        margin: 16px;
      }
      @media (max-width: 768px) {
        margin: 0;
        padding: 0;
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
        width: 200px;
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
