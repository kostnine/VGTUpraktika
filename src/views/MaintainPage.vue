<template>
  <div class="maintain-page">
    <PageHeader
      image="images/maintain/battery.jpg"
      title="maintain.how"
      content="maintain.important"
      buttonText="maintain.maintenance"
      scrollTo="maintain"
    />
    <div class="maintain-page-main-container">
      <div class="maintain-header">
        <span class="maintain-header-title" id="maintain">{{
          toLocal("maintain.how_to_maintain")
        }}</span>
      </div>
      <div class="maintain-item">
        <div class="maintain-item-text-part">
          <span class="maintain-item-text-title"
            ><div class="arrow-right">
              <svg
                width="12"
                height="23"
                viewBox="0 0 12 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11.5L-6.59077e-08 22.3253L8.80472e-07 0.674682L12 11.5Z"
                  fill="#483A5B"
                />
              </svg>
            </div>
            {{ toLocal("maintain.test") }}</span
          >
          <span class="maintain-item-text-block first">
            {{ toLocal("maintain.clean") }}
          </span>
          <span class="maintain-item-text-block">
            {{ toLocal("maintain.vacuum") }}
          </span>
          <span class="maintain-item-text-block last">
            {{ toLocal("maintain.holes") }}
          </span>
        </div>
        <div class="maintain-item-image-container">
          <img src="@/assets/images/maintain/clean.jpg" alt="clean" />
        </div>
      </div>
      <div class="maintain-middle-info">
        <div class="image-container">
          <img
            class="zoomable"
            src="@/assets/images/maintain/info.jpg"
            @click="isExpanded = true"
            alt="info"
          />
        </div>
        <div class="text-container">
          <span class="title-text">
            {{ toLocal("maintain.false") }}
          </span>
          <span class="text-block">
            {{ toLocal("maintain.lifetime") }}
          </span>
          <span class="text-block">
            {{ toLocal("maintain.optical") }}
          </span>
          <span class="text-block last">
            {{ toLocal("maintain.dust") }}
          </span>
        </div>
      </div>
      <div class="maintain-item">
        <div class="maintain-item-text-part">
          <span class="maintain-item-text-title"
            ><div class="arrow-right">
              <svg
                width="12"
                height="23"
                viewBox="0 0 12 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11.5L-6.59077e-08 22.3253L8.80472e-07 0.674682L12 11.5Z"
                  fill="#483A5B"
                />
              </svg>
            </div>
            {{ toLocal("maintain.chosen") }}
          </span>
          <span class="maintain-item-text-block">
            {{ toLocal("maintain.replace") }}
          </span>
          <span class="maintain-item-text-block">
            {{ toLocal("maintain.audible") }}
          </span>
        </div>
        <div class="maintain-item-image-container">
          <img src="@/assets/images/maintain/pin.jpg" alt="clean" />
        </div>
      </div>
    </div>
    <div class="expanded-schema" v-if="isExpanded" v-scroll-lock="isExpanded">
      <div class="expanded-image-container" v-click-outside="closeModal">
        <div class="expanded-close" @click="isExpanded = false">
          <img src="@/assets/icons/close_cross.svg" alt="close" />
        </div>
        <img
          class="expanded-image"
          src="@/assets/images/maintain/info.jpg"
          alt="info"
        />
      </div>
    </div>
    <div class="facts-share">
          <span class="share-title">{{ toLocal("facts.share_story") }}</span>
          <button @click="mailto">info@eurofsa.org</button>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "MaintainPage",
  metaInfo: {
    title: "How to Maintain Smoke Alarms",
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    mailto() {
      window.location.href = "mailto:info@eurofsa.org";
    },
    closeModal() {
      this.isExpanded = false;
    },
  },
  components: { PageHeader },
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
              e.target.classList[0] != "zoomable")
          ) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;

        // add Event Listeners
        document.addEventListener("click", handler);
      },

      unbind: function (el) {
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  },
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
      @media (max-width: 768px) {
        width: 90%;
      }
      .maintain-item-text-title {
        display: flex;
        align-items: center;
        font-size: 24px;
        line-height: 32px;
        font-family: $semiBoldFont;
        @media (max-width: 768px) {
          align-items: flex-start;
          font-size: 20px;
          margin-bottom: 8px;
        }
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
        @media (max-width: 768px) {
          margin: 0;
          margin-bottom: 8px;
          font-size: 16px;
        }
      }
    }
    .maintain-item-image-container {
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        width: 90%;
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
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
}
.arrow-right {
  display: flex;
  margin-right: 10px;
  padding-top: 2px;
  @media (max-width: 768px) {
    margin-top: 8px;
    svg {
      height: 13px;
      width: 6px;
    }
  }
}

.expanded-schema {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .expanded-image-container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    height: 80%;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2000;
    @media (max-width: 1440px) {
      width: 70vw;
      height: 80vw;
    }
    @media (max-width: 1080px) {
      width: 80vw;
      height: 85vw;
    }
    @media (max-width: 768px) {
      width: 90vw;
      height: 100vw;
    }
    @media (max-width: 768px) and (min-height: 800px) {
      top: 25%;
    }
    @media (max-height: 1000px) {
      max-height: 80vh;
    }
    .expanded-close {
      position: absolute;
      right: -17px;
      top: -17px;
      background-color: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      width: 33px;
      height: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      img {
        width: 16px;
        height: 16px;
      }
      &:hover {
        background: #f39964;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
      }
    }
    .expanded-image {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 5px;
    }
  }
}
.zoomable {
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  cursor: pointer;
}
</style>
