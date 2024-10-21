<template>
  <div class="video-parent">
    <video
      ref="videoPlayer"
      class="video-js vjs-fluid"
      @play="videoPlay"
      @pause="videoPause"
    ></video>
    <transition name="fade">
      <div class="play-button" v-if="showPlayButton && !isLoading">
        <svg
          v-if="buttonType == 'play'"
          width="25"
          height="30"
          viewBox="0 0 25 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.935547 2.39916C0.935547 0.824051 2.67179 -0.132915 4.00353 0.708183L24.0233 13.3522C25.2659 14.1371 25.2659 15.9493 24.0233 16.7342L4.00354 29.3782C2.6718 30.2193 0.935547 29.2623 0.935547 27.6872V2.39916Z"
            fill="#0C2C39"
          />
        </svg>
        <svg
          v-else
          width="17"
          height="29"
          viewBox="0 0 17 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="6" height="29" rx="1" fill="#0C2C39" />
          <rect x="11" width="6" height="29" rx="1" fill="#0C2C39" />
        </svg>
      </div>
      <div class="loader-container" v-if="isLoading">
        <div class="loader">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 115 115"
            style="enable-background: new 0 0 115 115"
            xml:space="preserve"
          >
            <circle cx="58.75" cy="13.19" r="9.69" style="fill: #483a5b" />
            <circle class="st1" cx="58.75" cy="105.07" r="6.43" />
            <circle
              transform="rotate(-73.524 35.787 19.349)"
              cx="35.78"
              cy="19.35"
              style="fill: #554968"
              r="9.21"
            />
            <circle class="st1" cx="81.72" cy="98.91" r="6.11" />
            <circle
              transform="rotate(-36.419 18.97 36.161)"
              cx="18.97"
              cy="36.16"
              style="fill: #635976"
              r="8.75"
            />
            <circle
              transform="rotate(-60.824 98.536 82.103)"
              cx="98.54"
              cy="82.1"
              style="fill: #b4b5c7"
              r="5.8"
            />
            <circle
              transform="rotate(-80.921 12.815 59.13)"
              cx="12.82"
              cy="59.13"
              style="fill: #706883"
              r="8.31"
            />
            <circle cx="104.69" cy="59.13" r="5.8" style="fill: #c1c4d4" />
            <circle
              transform="rotate(-6.148 18.976 82.12)"
              cx="18.97"
              cy="82.1"
              style="fill: #7e7791"
              r="7.9"
            />
            <circle
              transform="rotate(-37.26 98.543 36.165)"
              cx="98.54"
              cy="36.16"
              style="fill: #cfd4e2"
              r="5.51"
            />
            <circle
              transform="rotate(-9.769 35.776 98.89)"
              cx="35.78"
              cy="98.91"
              style="fill: #8b879e"
              r="7.5"
            />
            <circle
              transform="rotate(-80.393 81.721 19.347)"
              cx="81.72"
              cy="19.35"
              style="fill: #dce3ef"
              r="4.98"
            />
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import videojs from "video.js";
export default {
  name: "VideoPlayer",
  props: {
    isLoading: Boolean,
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
      showPlayButton: this.isPlayButton,
      buttonType: "play",
      playerLoading: true,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options);
    // this.player.on("ready", () => {
    //   if (this.isLoading) {
    //     if (this.playerLoading) {
    //       this.playerLoading = false;
    //     }
    //   }
    // });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    videoPause() {
      this.buttonType = "pause";
      this.showPlayButton = true;
      this.$nextTick(() => {
        this.showPlayButton = false;
      });
    },
    videoPlay() {
      this.buttonType = "play";
      this.showPlayButton = true;
      this.$nextTick(() => {
        this.showPlayButton = false;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.video-parent {
  max-height: 100%;
  border-radius: 15px;
  overflow: hidden;
}
video {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
.play-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 87px;
  height: 87px;
  background: rgba(255, 255, 255, 0.486);
  border-radius: 50%;
}
.loader-container {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 1000;
  width: 12vw;
  height: 12vw;
  background: rgba(255, 255, 255, 1);
  border-radius: 50%;
  svg {
    transition: 1s;
    width: 80%;
    animation: spin 0.8s infinite linear;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(1.25);
}
.st1 {
  fill: #9996ac;
}
</style>
<style>
@import "video.js/dist/video-js.css";
</style>
<style lang="scss">
.vjs-control-bar {
  display: flex;
}
.video-js {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  max-width: 100%;
}
.video-js {
  .vjs-big-play-button {
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 12vw;
    height: 12vw;
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
    border: none;
    background: #ffffffde;
    opacity: 0.4;
    .vjs-icon-placeholder {
      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0c2c39;
        font-size: 2em;
        background-image: url("../assets/icons/play_button.svg");
        content: "";
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    &:hover {
      background: #ffffffde;
    }
    @media (max-width: 768px) {
      .vjs-icon-placeholder {
        &::before {
          background-size: 39%;
        }
      }
    }
  }
  &:hover {
    .vjs-big-play-button {
      background: #ffffffde;
    }
  }
}
.vjs-control-bar {
  opacity: 0;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
}
</style>
