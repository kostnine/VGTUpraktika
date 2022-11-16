<template>
  <div class="privacy-container">
    <div class="cookie-modal" v-if="!cookieAccepted && !privacyOpened">
      <div class="logo-container">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
      <div class="text-block">
        <span class="text-title"> Cookies used on this website </span>
        <span class="text-content"
          >Our website uses cookies to optimize and develop our activities, as
          well as to improve and analyze the visitor experience. By allowing all
          cookies, you allow us to provide you with the best browsing
          experience. Certain cookies are necessary for the proper functioning
          of our website and to enable you to use its features.<br />
          <p></p>
          For more information about cookies and how we use them, please visit:
          <a href="https://allaboutcookies.org/" target="_blank"
            >https://allaboutcookies.org/</a
          ></span
        ><br />
        <p></p>
        <a href="/privacy">Privacy policy ></a>
      </div>
      <div class="button-container">
        <button @click="acceptCookies">Allow all cookies</button>
        <button @click="privacyOpened = true">Manage choices ></button>
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
                  />Necessary cookies</span
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
                  These cookies are necessary for our website to function
                  properly and to protect against unusual activities. These
                  cookies are usually installed to respond to your actions and
                  requests, such as setting up privacy, logging in or filling
                  out forms.
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
                  />Analytical cookies</span
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
                  >These cookies are often used to improve the performance of
                  our website, as they allow us to analyze the traffic, number
                  and sources of traffic of visitors. This type of cookie is not
                  strictly necessary for our website to work, but is intended,
                  for example, to let us know which pages are most interesting
                  to you. The information collected about you using analytical
                  cookies allows us to provide you with a personal and best
                  internet user experience. For example, thanks to these
                  cookies, we can ensure that the pages you visit are prepared
                  for a certain number of visitors and, accordingly, load
                  faster.
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
            <span class="paragraph"
              >UAB "Learnkey" (hereinafter – the Data Controller) hereby
              establishes the terms and conditions for the processing of
              personal data when using the website smokealarmssavelives.eu
              managed by the Data Controller (hereinafter – Privacy Policy). The
              terms and conditions set out in this Privacy Policy apply each
              time you access the content and/or services we provide, regardless
              of the device (computer, mobile phone, tablet, TV, etc.) you are
              using.
            </span>
            <span class="paragraph">
              It is very important that you read this Privacy Policy carefully,
              because each time you visit the www.learnkey.lt website, you agree
              to the terms and conditions described in this Privacy Policy. If
              you do not agree to these terms and conditions, we regretfully
              request that you do not visit our website or use our content
              and/or services. We confirm that the Data Controller's website
              visitors' data will be collected in accordance with the
              requirements of the applicable European Union and Republic of
              Lithuania legislation, as well as the instructions of the
              controlling authorities. All reasonable technical and
              administrative measures are in place to protect the data we
              collect about visitors to our website from loss, unauthorised use
              or alteration.
            </span>
            <span class="paragraph">
              Persons under the age of 16 may not submit any personal data
              through our website. If you are under the age of 16, you must
              obtain the consent of your parent or other legal guardian before
              submitting personal information.
            </span>
            <span class="paragraph">
              Terms used in this Privacy Policy shall be understood as they are
              defined in the General Data Protection Regulation 2016/679.
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold"
              >What information do we collect about you?</span
            >
            <span class="paragraph"
              ><span class="semibold">Browsing data:</span><br />
              Browsing data: When you visit our website, your browser sends data
              to our server. This data allows us to improve our services and
              facilitate the use of our website. We automatically collect and
              store the data or third parties do so on our behalf. We may
              collect information about your computer for system administration
              purposes, as well as to transmit the collected information for
              internal marketing analysis purposes.
            </span>
            <span class="paragraph">
              The following data may be collected relating to our users'
              browsing activities and characteristics:<br />
              - Visitor's IP address.<br />
              - Date and time of visit.<br />
              - Referral URL (the website from which the visitor was
              referred).<br />
              - The pages visited by the user and his/her movement around our
              website.<br />
              - Information about the browser used (browser type, version,
              operating system, etc.).<br />
            </span>
            <span class="paragraph">
              <span class="semibold">Other information we collect:</span><br />
              We may also collect other information about you, your device, or
              your use of our website content with your consent.
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">How we use your information?</span>
            <span class="paragraph"
              >We may process your personal data for the following purposes:<br />
              - For direct marketing*, to send newsletters, to provide tailored
              advertisements and to send communications, to assess and analyse
              our market, customers, products and services (including collecting
              your opinion on products and services and organising customer
              surveys).<br />
              - To administer the website.<br />
              - To improve your browsing experience by personalising this
              website.<br />
              - Other ways with your consent.*<br />
            </span>
            <span class="paragraph">
              *Please be advised that you have the right to object to or
              withdraw your consent to the processing of your data for the
              purposes set out above, marked with an asterisk, at any time.
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold"
              >To whom do we disclose your information?</span
            >
            <span class="paragraph">
              We undertake not to transfer your personal data to any unrelated
              third parties, except in the following cases:<br />
              - Where there is consent to the disclosure of personal data.<br />
              - To law enforcement authorities in accordance with the procedure
              provided for by the legislation of the Republic of Lithuania.<br />
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">Your rights</span>
            <span class="paragraph"
              >- Know (be informed) about the processing of your data (right to
              know);<br />
              - To know your data and how they are processed (right of
              access);<br />
              - Request rectification or, taking into account the purposes of
              the processing of personal data, completion of incomplete personal
              data (right to rectification);<br />
              - To have your data erased or to stop the processing of your data
              (except for storage) (right to erasure and right to be
              forgotten).<br />
              - Request the Data Controller to restrict the processing of
              personal data on one of the legitimate grounds (right to
              restrict).<br />
              - You have the right to data portability (right to port).<br />
              - Object to the processing of personal data where such data is
              processed or intended to be processed for the purposes of direct
              marketing, including profiling in relation to such direct
              marketing.<br />
            </span>
            <span class="paragraph">
              If you no longer wish to have your personal data processed for the
              purpose of direct marketing, you can contact info@learnkey.lt to
              object to the processing of your personal data for the purpose of
              direct marketing.
            </span>
            <span class="paragraph">
              You may submit any request or instruction relating to the
              processing of your personal data to the Data Controller at
              info@learnkey.lt. Upon receipt of such a request or instruction,
              the Data Controller shall respond and carry out or refuse to carry
              out the actions set out in the request within one month of the
              date of the request. Where necessary, the time limit may be
              extended by a further two months, depending on the complexity and
              number of requests. In such a case, the Data Controller shall
              inform the subject of such extension within one month of receipt
              of the request, together with the reasons for the delay.</span
            >
          </div>
          <div class="content-block">
            <span class="title semibold"
              >Third party websites, services, and products on our
              websites</span
            >
            <span class="paragraph"
              >The Data Controller's website may contain third-party banners,
              links to their websites and services, which are not under the Data
              Controller's control. The Data Controller is not responsible for
              the security and privacy of information collected by third
              parties. You must read the privacy statements applicable to the
              third-party websites and services that you use.
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">Cookies</span>
            <span class="paragraph"
              >When you visit our website, we want to provide you with content
              and features that are tailored to your needs. This requires the
              use of cookies. These are small pieces of information that are
              automatically generated when you browse the website and stored on
              your computer or other terminal device. They help the Data
              Controller to recognise you as a previous visitor to a particular
              website, to store your visit history and to tailor the content of
              the website accordingly. Cookies also help to ensure the smooth
              running of websites, to monitor the duration and frequency of
              visits to websites and to collect statistical information about
              the number of visitors to websites.
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold">What are cookies?</span>
            <span class="paragraph"
              >Cookies are small text files that store information about your
              web browsing preferences. Cookie technology is used on almost all
              websites. Cookies are placed on a visitor's computer by a web
              browser when they first visit a website. If you visit the same
              website again from the same device, the cookie and the information
              stored in it are sent back to the original website ("first-party
              cookies") or to another related website ("third-party cookies").
              This information helps to determine whether the website in
              question has already been viewed in your browser and, in some
              cases, allows you to tailor the content displayed on that website
              to the visitor.
            </span>
            <span class="paragraph">
              Some cookies are particularly useful in that they help to improve
              the visitor's browsing experience when they revisit the website.
              If you use the same device and the same web browser, cookies will
              remember your personal preferences, your browsing habits on the
              website in question, and will tailor the content shown to you in a
              way that is as close to your needs and interests as possible.
            </span>
            <span class="paragraph">
              Your cookie preferences on this website. This website uses cookies
              that do not require consent. "Strictly necessary cookies" are
              important cookies that provide functions without which it would
              not be possible to use the website properly. Such cookies are used
              on this website and are therefore known as "first party cookies".
              They are stored on your computer for as long as you browse this
              website. One of the purposes of using essential cookies is to
              ensure that what you see on your screen is consistent with the
              amount of data that could be processed using your current internet
              connection. The other purpose of these cookies is to facilitate
              the transition from HTTP to HTTPS pages and to ensure secure data
              transfer. These types of cookies also store information about your
              decision to use cookies on our website. Your consent to the use of
              essential cookies is not required.
            </span>
            <span class="paragraph">
              This website uses first-party cookies that require your consent.
              Cookies that are not legally necessary to use this website
              nevertheless perform important functions. Without these cookies,
              you will not be able to use certain features (such as
              pre-populated forms) that make this website easy to use. The
              preferences you have chosen, such as language options, will not be
              saved, so you will have to re-select them each time you visit the
              website. In addition, we will no longer be able to provide you
              with offers that are tailored to your individual needs.
            </span>
            <span class="paragraph">
              This website uses third-party cookies that require your consent.
              This website contains content belonging to third parties. When you
              visit this website, these third-party service providers may place
              cookies on your computer to provide information about your visit
              to this website. To find out more about the use of cookies by
              these third-party service providers, please visit their websites.
              If you have chosen not to consent to the use of cookies that
              require consent, or if you have withdrawn your consent, you will
              only be able to use the features of the website that do not
              require such cookies to be used. In this case, you will not be
              able to access those parts of the website that may contain third
              party content and from which third-party cookies may be sent. If
              you do not want cookies to be stored on your device, you can
              select the appropriate browser settings.
            </span>
            <span class="paragraph">
              Information about cookies was last updated on 2022-11-14. For more
              information about cookies and how we use them, please visit:
              www.allaboutcookies.org .
            </span>
          </div>
          <div class="content-block">
            <span class="title semibold"> Cookies for statistics </span>
            <span class="text-line"
              >Statistical cookies collect and send information anonymously to
              website owners, enabling them to learn how visitors navigate
              websites.</span
            >
            <table class="content-table">
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Period of validity</th>
              </tr>
              <tr>
                <td>_ga</td>
                <td>learnkey.lt</td>
                <td>
                  Registers a unique ID number used to generate statistics about
                  how a visitor browses the website.
                </td>
                <td>Session</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>learnkey.lt</td>
                <td>
                  A cookie used to limit the number of requests, which is used
                  by the traffic analysis tool Google Analytics.
                </td>
                <td>Session</td>
              </tr>
              <tr>
                <td>_gat</td>
                <td>learnkey.lt</td>
                <td>
                  Registers a unique ID number used to generate statistics about
                  how a visitor browses the website.
                </td>
                <td>1 year</td>
              </tr>
            </table>
          </div>
          <div class="content-block">
            <span class="title semibold">Third party cookies</span>
            <span class="text-line"
              >Third party cookies are placed on your device by a third party
              (i.e. not by us), e.g. youtube.com. You can block or delete these
              cookies. For more information:
              <a href="https://policies.google.com/privacy"
                >https://policies.google.com/privacy</a
              ></span
            >
            <table class="content-table" cellspacing="0">
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Period of validity</th>
              </tr>
              <tr>
                <td>CONSENT</td>
                <td>youtube.com</td>
                <td>
                  This cookie stores information about how the end user uses the
                  website and all advertising that the end user may have seen
                  before visiting the said site. The main purpose of this cookie
                  is Targeting / Advertising. Stores the user's video player
                  preferences using embedded YouTube video.
                </td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>YSC</td>
                <td>youtube.com</td>
                <td>
                  This cookie is set by YouTube to track views of embedded
                  videos.
                </td>
                <td>Session</td>
              </tr>
              <tr>
                <td>VISITOR_INFO1_LIVE</td>
                <td>youtube.com</td>
                <td>
                  This cookie is set by Youtube to keep track of user
                  preferences for Youtube videos embedded in sites;it can also
                  determine whether the website visitor is using the new or old
                  version of the Youtube interface.
                </td>
                <td>6 months</td>
              </tr>
            </table>
          </div>
          <div class="content-block">
            <span class="title semibold">Policy changes</span>
            <span class="text-line"
              >We may update this policy from time to time by posting a new
              version on our website. You should review this page from time to
              time to ensure that you are happy with any changes.</span
            >
            <span class="paragraph">
              <span class="semibold">Details of the data controller:</span>

              Registered office address: J. Basanaviciaus g. 8A,<br />
              Vilnius, LT-01118, Lithuania<br />
              Tel. +370 66360935<br />
              E-mail: info@learnkey.lt<br />
            </span>
          </div>
        </div>
        <div class="big-footer">
          <div class="btn-container">
            <button @click="setCookies(true, 'all')">
              Only necessary cookies
            </button>
            <button @click="setCookies(true, 'all')">Allow all cookies</button>
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
            &:first-child {
              min-width: 150px;
              width: 150px;
              max-width: 150px;
            }
            &:last-child {
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
