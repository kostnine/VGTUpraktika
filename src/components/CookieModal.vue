<template>
  <div class="privacy-container">
    <div class="cookie-modal" v-if="!cookieAccepted && !privacyOpened">
      <div class="logo-container">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
      <div class="text-block">
        <span class="text-title">{{ toLocal("home.cookies") }}</span>
        <span class="text-content"
          >{{ toLocal("home.cookies_big") }}<br />
          <p></p>
          {{ toLocal("home.more_info") }}:
          <a href="https://allaboutcookies.org/" target="_blank"
            >https://allaboutcookies.org/</a
          ></span
        ><br />
        <p></p>
        <a href="/privacy">{{ toLocal("home.privacy_policy") }}</a>
      </div>
      <div class="button-container">
        <button @click="acceptCookies">
          {{ toLocal("home.allow_cookies") }}
        </button>
        <button @click="privacyOpened = true">
          {{ toLocal("home.manage_choices") }}
        </button>
      </div>
    </div>
    <div
      class="cookie-big-modal"
      v-scroll-lock="privacyOpened"
      v-if="privacyOpened"
    >
      <div class="cookie-big-inside">
        <div class="big-header" :class="{ absolute: extraExpanded }">
          <div class="logo-container">
            <img src="@/assets/logo.svg" alt="logo" />
          </div>
          <div class="buttons-container">
            <div class="btn-row">
              <div class="btn-container">
                <span class="btn-title"
                  ><img
                    src="@/assets/icons/arrow_right.svg"
                    class="arrow-right"
                    :class="{ opened: necessaryOpen }"
                    @click="necessaryOpen = !necessaryOpen"
                  />{{ toLocal("cookies.necessary_title") }}</span
                >
                <label class="switch">
                  <input
                    type="checkbox"
                    @change="(e) => setCookies(e, 'necessary')"
                  />
                  <span class="slider"></span>
                </label>
              </div>
              <transition name="slide">
                <span class="button-undertext" v-if="necessaryOpen">
                  {{ toLocal("cookies.necessary") }}
                </span>
              </transition>
            </div>
            <div class="btn-row">
              <div class="btn-container">
                <span class="btn-title"
                  ><img
                    src="@/assets/icons/arrow_right.svg"
                    class="arrow-right"
                    :class="{ opened: analyticalOpen }"
                    @click="analyticalOpen = !analyticalOpen"
                  />{{ toLocal("cookies.analytical_title") }}</span
                >
                <label class="switch">
                  <input
                    type="checkbox"
                    @change="(e) => setCookies(e, 'analytical')"
                  />
                  <span class="slider"></span>
                </label>
              </div>
              <transition name="slide">
                <span class="button-undertext" v-if="analyticalOpen"
                  >{{ toLocal("cookies.analytical") }}
                </span>
              </transition>
            </div>
          </div>
          <div class="close-cross">
            <img
              @click="closePrivacy"
              src="@/assets/icons/close_cross.svg"
              alt="cross"
            />
          </div>
        </div>
        <div
          class="big-content"
          :class="{ smaller: necessaryOpen || analyticalOpen }"
        >
          <div class="content-block">
            <span class="title semibold">Privacy Policy</span>
            <span class="paragraph">{{ toLocal("cookies.learnkey") }} </span>
            <span class="paragraph">
              {{ toLocal("cookies.important") }}
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.persons") }}
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.terms") }}
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">{{
              toLocal("cookies.what_info")
            }}</span>
            <span class="paragraph"
              ><span class="semibold">{{
                toLocal("cookies.browsing_data")
              }}</span
              ><br />
              {{ toLocal("cookies.browsing_data_text") }}
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.following_data") }}<br />
              {{ toLocal("cookies.ip_adress") }}<br />
              {{ toLocal("cookies.date_and_time") }}<br />
              {{ toLocal("cookies.referral") }}<br />
              {{ toLocal("cookies.pages") }}<br />
              {{ toLocal("cookies.information_browser") }}<br />
            </span>
            <span class="paragraph">
              <span class="semibold">{{ toLocal("cookies.other_info") }}</span
              ><br />
              {{ toLocal("cookies.we_may_also") }}
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">{{
              toLocal("cookies.how_we_use")
            }}</span>
            <span class="paragraph"
              >{{ toLocal("cookies.process") }}<br />
              {{ toLocal("cookies.direct_marketing") }}<br />
              {{ toLocal("cookies.administer") }}<br />
              {{ toLocal("cookies.improve_experience") }}<br />
              {{ toLocal("cookies.other_ways") }}<br />
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.be_advised") }}
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">{{ toLocal("cookies.to_whom") }}</span>
            <span class="paragraph">
              {{ toLocal("cookies.undertake") }}<br />
              {{ toLocal("cookies.disclosure_consent") }}<br />
              {{ toLocal("cookies.law_enforcement") }}<br />
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">{{
              toLocal("cookies.your_rights")
            }}</span>
            <span class="paragraph"
              >{{ toLocal("cookies.know") }}<br />
              {{ toLocal("cookies.to_know") }}<br />
              {{ toLocal("cookies.request_rectification") }}<br />
              {{ toLocal("cookies.to_have_data") }}<br />
              {{ toLocal("cookies.data_controller") }}<br />
              {{ toLocal("cookies.right_to_port") }}<br />
              {{ toLocal("cookeis.right_to_object") }}<br />
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.no_longer_wish") }}
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.you_may_submit") }}</span
            >
          </div>
          <div class="content-block">
            <span class="title semibold">{{
              toLocal("cookies.third_party")
            }}</span>
            <span class="paragraph">{{ toLocal("cookies.d_c_website") }} </span>
          </div>
          <div class="content-block">
            <span class="title semibold">{{ toLocal("cookies.cookies") }}</span>
            <span class="paragraph"
              >{{ toLocal("cookies.when_you_visit") }}
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">{{
              toLocal("cookies.what_are")
            }}</span>
            <span class="paragraph">{{ toLocal("cookies.cookies_are") }} </span>
            <span class="paragraph">
              {{ toLocal("cookies.some_cookies") }}
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.cookie_preferences") }}
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.first_party") }}
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.third_party_cookies") }}
            </span>
            <span class="paragraph">
              {{ toLocal("cookies.last_updated") }}
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">
              {{ toLocal("cookies.cookies_for_statistics") }}
            </span>
            <span class="text-line">{{
              toLocal("cookies.statistical_cookies_text")
            }}</span>
            <table class="content-table">
              <tr>
                <th>{{ toLocal("cookies.name") }}</th>
                <th>{{ toLocal("cookies.provider") }}</th>
                <th class="purpose">{{ toLocal("cookies.purpose") }}</th>
                <th>{{ toLocal("cookies.validity") }}</th>
              </tr>
              <tr>
                <td>_ga</td>
                <td>learnkey.lt</td>
                <td>
                  {{ toLocal("cookies.registers_id") }}
                </td>
                <td>{{ toLocal("cookies.session") }}</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>learnkey.lt</td>
                <td>
                  {{ toLocal("cookies.cookie_limit") }}
                </td>
                <td>{{ toLocal("cookies.session") }}</td>
              </tr>
              <tr>
                <td>_gat</td>
                <td>learnkey.lt</td>
                <td>
                  {{ toLocal("cookies.registers_id") }}
                </td>
                <td>{{ toLocal("cookies.year") }}</td>
              </tr>
            </table>
          </div>
          <div class="content-block">
            <span class="title semibold">{{
              toLocal("cookies.third_parties")
            }}</span>
            <span class="text-line"
              >{{ toLocal("cookies.third_parties_text") }}
              <a href="https://policies.google.com/privacy"
                >https://policies.google.com/privacy</a
              ></span
            >
            <table class="content-table" cellspacing="0">
              <tr>
                <th>{{ toLocal("cookies.name") }}</th>
                <th>{{ toLocal("cookies.provider") }}</th>
                <th class="purpose">{{ toLocal("cookies.purpose") }}</th>
                <th>{{ toLocal("cookies.validity") }}</th>
              </tr>
              <tr>
                <td>{{ toLocal("cookies.consent") }}</td>
                <td>youtube.com</td>
                <td>
                  {{ toLocal("cookies.youtube") }}
                </td>
                <td>{{ toLocal("cookies.2_years") }}</td>
              </tr>
              <tr>
                <td>YSC</td>
                <td>youtube.com</td>
                <td>
                  {{ toLocal("cookies.set_by_youtube") }}
                </td>
                <td>{{ toLocal("cookies.session") }}</td>
              </tr>
              <tr>
                <td>VISITOR_INFO1_LIVE</td>
                <td>youtube.com</td>
                <td>
                  {{ toLocal("cookies.youtube_tracks") }}
                </td>
                <td>{{ toLocal("cookies.6_months") }}</td>
              </tr>
            </table>
          </div>
          <div class="content-block">
            <span class="title semibold">{{
              toLocal("cookies.policy_changes")
            }}</span>
            <span class="text-line">{{
              toLocal("cookies.we_may_update")
            }}</span>
            <span class="paragraph">
              <span class="semibold">{{ toLocal("cookies.da_details") }}</span>

              {{ toLocal("cookies.registered_office") }} J. Basanaviciaus g.
              8A,<br />
              Vilnius, LT-01118, Lithuania<br />
              Tel. +370 66360935<br />
              E-mail: info@learnkey.lt<br />
            </span>
          </div>
        </div>
        <div class="big-footer">
          <div class="btn-container">
            <button @click="setCookies(true, 'all')">
              {{ toLocal("cookies.only_necessary") }}
            </button>
            <button @click="setCookies(true, 'all')">
              {{ toLocal("cookies.allow_all") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bootstrap } from "vue-gtag";

export default {
  data() {
    return {
      cookieAccepted: false,
      privacyOpened: false,
      necessaryOpen: false,
      analyticalOpen: false,
      extraExpanded: false,
    };
  },
  mounted() {
    this.cookieAccepted = this.$cookies.get("cookies_accepted");
    if (this.cookieAccepted) {
      this.enablePlugin();
    }
  },
  methods: {
    acceptCookies() {
      this.$cookies.set("cookies_accepted", true, "2y");
      this.cookieAccepted = true;
      this.enablePlugin();
    },
    enablePlugin() {
      bootstrap();
    },
    setCookies(e, type) {
      if (type == "analytical" && e.target.checked) {
        this.acceptCookies();
      } else if (type == "all" && e == true) {
        this.acceptCookies();
        this.privacyOpened = false;
      }
    },
    closePrivacy() {
      this.privacyOpened = false;
    },
  },
  watch: {
    necessaryOpen: {
      handler(newVal) {
        if (newVal == false) {
          if (!this.analyticalOpen) {
            setTimeout(() => {
              this.extraExpanded = false;
            }, 250);
          }
        } else {
          this.extraExpanded = true;
        }
      },
    },
    analyticalOpen: {
      handler(newVal) {
        if (newVal == false) {
          if (!this.necessaryOpen) {
            setTimeout(() => {
              this.extraExpanded = false;
            }, 250);
          }
        } else {
          this.extraExpanded = true;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.cookie-modal {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
  padding: 50px calc(min(160px, 10vw));
  min-height: 270px;
  z-index: 1000;
  font-size: 18px;
  color: #1e1826;
  display: flex;
  box-sizing: border-box;
  font-family: $mainFont;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.logo-container {
  img {
    max-width: 150px;
    max-height: 70px;
    margin-right: 40px;
  }
}
.button-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
  width: 50%;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 90%;
  }
  button {
    display: flex;
    justify-content: center;
    color: white;
    background: #c0554b;
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    line-height: 24px;
    min-height: 40px;
    align-items: center;
    &:first-child {
      margin-bottom: 25px;
    }
    &:last-child {
      background-color: #ffffff;
      color: #1e1826;
      /* main-dark */
      border: 1.5px solid #1e1826;
    }

    cursor: pointer;

    &:hover {
      font-weight: 700;
    }
  }
}
a {
  cursor: pointer;
  color: #c0554b;
  &:hover {
    text-decoration: underline;
  }
}
.text-block {
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  .text-title {
    font-size: 16px;
    line-height: 24px;
    font-family: $semiBoldFont;
    margin-bottom: 21px;
  }
  .text-content {
    font-size: 16px;
    line-height: 24px;
  }
}
.cookie-big-modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  right: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  .cookie-big-inside {
    position: relative;
    background: #faf7f5;
    box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 90vw;
    height: 90vh;
  }
}
.big-header {
  display: flex;
  width: 100%;
  position: relative;
  background: #faf7f5;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
  transition: 0.5s;
  height: fit-content;
  &.absolute {
    position: absolute;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .buttons-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    .btn-row {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      .btn-container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .btn-title {
        display: flex;
        width: 10%;
        @media (max-width: 768px) {
          width: 50%;
        }
      }
      &:first-child {
        padding-bottom: 20px;
      }
    }
  }
}
.big-content {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: auto;
  height: 75%;
  padding: 15px 20px;
  @media (max-width: 768px) {
    max-height: 40vh;
    &.smaller {
      max-height: 70vh;
    }
  }
  &.smaller {
    height: 90%;
  }
  .content-block {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: start;
    .title {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 5px;
    }
    .paragraph {
      margin: 10px 0;
    }
    .text-line {
      margin: 10px 0;
    }
    .content-table {
      border-collapse: collapse;
      th {
        border: 1px solid black;
        border-top: none;
        &:first-child {
          border-top: none;
          border-left: none;
        }
        &:last-child {
          border-right: none;
          border-top: none;
        }
      }
      td {
        word-wrap: break-word;
        border: 1px solid black;
        padding: 10px;
        &:first-child {
          border-left: none;
        }
        &:last-child {
          border-right: none;
        }
      }
      tr {
        &:last-child {
          td {
            border-bottom: none;
          }
        }
        &:first-child {
          th {
            &:not(.purpose) {
              min-width: 150px;
              width: 150px;
              max-width: 150px;
            }
          }
        }
      }
    }
  }
}
.big-footer {
  height: 10%;
  padding: 20px;
  box-sizing: border-box;
  background: #faf7f5;
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 10px 10px;
  @media (max-width: 768px) {
    height: 20vh;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    button {
      max-width: 230px;
      height: 40px;
      min-width: 200px;
      border: none;
      cursor: pointer;
      @media (max-width: 768px) {
        width: 90%;
        max-width: 90%;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 15px;
        min-height: 40px;
      }
      &:hover {
        font-family: $semiBoldFont;
        font-size: 1em;
      }
      &:first-child {
        background: #ffffff;
        border: 1.5px solid #c0554b;
        border-radius: 5px;
      }
      &:last-child {
        margin-left: 30px;
        background: #c0554b;
        color: white;
        border-radius: 5px;
        @media (max-width: 768px) {
          margin-left: 0;
        }
      }
    }
  }
}
.semibold {
  font-family: $semiBoldFont;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #483a5b;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #c0554b;
}
input:focus + .slider {
  box-shadow: 0 0 1px #c0554b;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider {
  border-radius: 34px;
}

.slider:before {
  border-radius: 50%;
}
.close-cross {
  cursor: pointer;
  @media (max-width: 768px) {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
.arrow-right {
  margin-right: 10px;
  cursor: pointer;
  transition: 0.5s;
  &.opened {
    transform: rotate(90deg);
  }
}
.slide-leave-active,
.slide-enter-active {
  transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
}
.slide-enter,
.slide-leave-to {
  transform-origin: 0px 0px;
  transform: scaleY(0);
}
</style>
