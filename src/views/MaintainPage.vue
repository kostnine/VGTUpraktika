<template>
  <div class="maintain-page">
    <PageHeader
      image="images/maintain/battery.jpg"
      title="How to Maintain<br> Smoke Alarms"
      content="It is important that all smoke alarms in your home are working. Learn how to maintain them properly!"
      buttonText="Learn More About Maintenance"
      scrollTo="maintain"
    />
    <div class="maintain-page-main-container">
      <div class="maintain-header">
        <span class="maintain-header-title" id="maintain"
          >How to Maintain Smoke Alarms?</span
        >
      </div>
      <div class="maintain-item">
        <div class="maintain-item-text-part">
          <span class="maintain-item-text-title"
            ><div class="arrow-right"></div>
            It is important to test and clean your smoke alarm on a regular
            basis</span
          >
          <span class="maintain-item-text-block first">
            We advise to test the smoke alarm on a fixed date every month and to
            clean the smoke alarm every 6 months.
          </span>
          <span class="maintain-item-text-block">
            Cleaning can be done by vacuum cleaning the part of the smoke alarm
            that has the opening for smoke, this is often the side of the alarm,
            to avoid dust building up inside the alarm.
          </span>
          <span class="maintain-item-text-block last">
            The holes on top of the alarm are most often the sound output. It is
            also advised to clean the smoke alarm with a moist cloth.
          </span>
        </div>
        <div class="maintain-item-image-container">
          <img src="@/assets/images/maintain/clean.jpg" alt="clean" />
        </div>
      </div>
      <div class="maintain-middle-info">
        <div class="image-container">
          <img src="@/assets/images/maintain/info.jpg" alt="info" />
        </div>
        <div class="text-container">
          <span class="title-text">
            A smoke alarm that is not cleaned could cause false alarms
          </span>
          <span class="text-block">
            Smoke alarms have a normal working lifetime of 10 years, after this
            period the functionality of the smoke alarm can no longer be
            guaranteed.
          </span>
          <span class="text-block">
            Inside the smoke alarm an optical smoke chamber can detect smoke, as
            the visual shows.
          </span>
          <span class="text-block last">
            When dust or other pollution builds up inside the smoke alarm, the
            working of the alarm is compromised and the alarm should be
            replaced.
          </span>
        </div>
      </div>
      <div class="maintain-item">
        <div class="maintain-item-text-part">
          <span class="maintain-item-text-title"
            ><div class="arrow-right"></div>
            If you have chosen smoke alarms with a battery that needs to be
            replaced
          </span>
          <span class="maintain-item-text-block">
            Please replace the battery on a fixed date every year or mark in
            your calendar when the battery must be replaced.
          </span>
          <span class="maintain-item-text-block">
            All smoke alarms will give an audible warning when the battery runs
            lows which will sound for 30 days or until the battery is replaced.
          </span>
        </div>
        <div class="maintain-item-image-container">
          <img src="@/assets/images/maintain/pin.jpg" alt="clean" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "MaintainPage",
  metaInfo: {
      title: 'How to Maintain Smoke Alarms',
  },
  components: { PageHeader },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.maintain-page-main-container {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: $mainFont;
  color: #1e1826;
  padding: 0 calc(min(160px, 10vw));
  .maintain-header {
    width: 100%;
    display: flex;
    .maintain-header-title {
      margin: 0 auto;
      font-family: $semiBoldFont;
      font-size: 48px;
      line-height: 72px;
      text-align: center;
    }
  }
  .maintain-item {
    margin-top: 70px;
    margin-bottom: 70px;
    font-size: 20px;
    line-height: 28px;
    color: #1e1826;
    display: flex;
    box-sizing: border-box;
    padding: 24px 32px;
    background-color: #fbf3ed;
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
    .maintain-item-text-part {
      display: flex;
      flex-direction: column;
      width: 80%;
      .maintain-item-text-title {
        display: flex;
        align-items: center;
        font-size: 24px;
        line-height: 32px;
        font-family: $semiBoldFont;
      }
      .maintain-item-text-block {
        font-size: 20px;
        line-height: 28px;
        margin: 16px;
        &.first {
          margin-top: 13px;
        }
        &.last {
          margin-bottom: 10px;
        }
      }
    }
    .maintain-item-image-container {
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 80%;
        padding: 8px;
      }
      img {
        width: 100%;
        border-radius: 10px;
        @media (max-width: 768px) {
          object-fit: fill;
        }
      }
    }
  }
  .maintain-middle-info {
    display: flex;
    width: 95%;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    .image-container {
      width: 35%;
      @media (max-width: 768px) {
        width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text-container {
      width: 64%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1%;
      .title-text {
        font-family: $semiBoldFont;
        font-size: 24px;
        line-height: 32px;
      }
      .text-block {
        font-size: 20px;
        line-height: 28px;
        margin: 16px 0;
      }
    }
  }
}
.arrow-right {
  background: none;
  border-top: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  height: 18px;
  width: 18px;
  margin-left: -12.5px;
  margin-right: 15px;
  @media (max-width: 768px) {
    height: 15px;
    width: 35px;
  }
}
</style>
