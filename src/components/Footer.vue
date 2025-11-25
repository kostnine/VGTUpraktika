<template>
  <footer class="footer-container" role="contentinfo">
    <div class="footer-image-container">
      <div class="image-with-under-text">
        <img
          src="@/assets/logo.svg"
          alt="Smoke Alarm Day logo"
          aria-label="Smoke Alarm Day logo"
        />
      </div>
    </div>

    <div class="footer-main-container">
      <div class="footer-column-wrapper">
        <!-- Heading -->
        <span class="join-us-header" >
          {{ toLocal("home.join_project") }}
        </span>
        <span class="text">EUROFSA</span>

        <!-- Linkas Emailo -->
        <span class="text email-link">
          E-Mail:
          <a
            href="mailto:info@eurofsa.org"
            tabindex="0"
            aria-label="Send email to info@eurofsa.org"
          >
            info@eurofsa.org
          </a>
        </span>

        <!-- bottom -->
        <div class="bottom-row">
          <span class="bottom-section underlogo-date" >
            {{ toLocal("home.main_date") }} {{ new Date().getFullYear() }}
          </span>

          <!-- SOC. MEDIA-->
          <div
            class="social-media-buttons bottom-section"
            role="navigation"
            aria-label="Social media links"
          >
            <img
              src="@/assets/icons/fb_white.svg"
              class="footer-link"
              tabindex="0"
              role="link"
              aria-label="Visit our Facebook page"
              @click="openLink('https://www.facebook.com/EuropeanSmokeAlarmDay/')"
              @keyup.enter="openLink('https://www.facebook.com/EuropeanSmokeAlarmDay/')"
              @keyup.space="openLink('https://www.facebook.com/EuropeanSmokeAlarmDay/')"
            />
            <img
              src="@/assets/icons/ig_white.svg"
              class="footer-link"
              tabindex="0"
              role="link"
              aria-label="Visit our Instagram profile"
              @click="openLink('https://www.instagram.com/eusmokealarmday/')"
              @keyup.enter="openLink('https://www.instagram.com/eusmokealarmday/')"
              @keyup.space="openLink('https://www.instagram.com/eusmokealarmday/')"
            />
            <img
              src="@/assets/icons/linkin_white.svg"
              class="footer-link"
              tabindex="0"
              role="link"
              aria-label="Visit our LinkedIn page"
              @click="openLink('https://www.linkedin.com/company/eusmokealarmday')"
              @keyup.enter="openLink('https://www.linkedin.com/company/eusmokealarmday')"
              @keyup.space="openLink('https://www.linkedin.com/company/eusmokealarmday')"
            />
            <img
              src="@/assets/icons/x_white.svg"
              class="footer-link"
              tabindex="0"
              role="link"
              aria-label="Visit our X (Twitter) profile"
              @click="openLink('https://x.com/EuSmokeAlarmDay')"
              @keyup.enter="openLink('https://x.com/EuSmokeAlarmDay')"
              @keyup.space="openLink('https://x.com/EuSmokeAlarmDay')"
            />
          </div>

          <!-- Copyrightas -->
          <span
            class="bottom-rights bottom-section"
            v-html="toLocal('home.reserved')"
          ></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  mounted(){
    this.$nextTick(() => {
      this.$el.querySelector(".year").innerHTML = `${new Date().getFullYear()}&nbsp;`;
    })
  },
  data() {
    return {};
  },
  methods:{
    openLink(link){
      window.open(link);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
.semiBold {
  font-family: $semiBoldFont;
}
.footer-container {
  display: flex;
  background-color: #483a5b;
  color: white;
  height: 270px;
  align-items: center;
  padding: 0 calc(min(10vw, 160px));
  @media (max-width: 1280px) {
    padding: 0 calc(min(2vw, 80px));
    .bottom-rights{
      font-size: 14px;
    }
  }
  .footer-image-container {
    position: absolute;
    font-family: $mainFont;
    .image-with-under-text {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: flex-start;
      text-align: start;
      img {
        width: 200px;
        height: 100px;
      }
      span {
        width: 200px;
        margin-top: 40px;
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
  .footer-main-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .footer-column-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: $mainFont;
      width: 100%;
      .join-us-header {
        font-size: 25px;
        margin-bottom: 55px;
      }
      .text {
        margin: 3px 0;
        font-size: 20px;
        line-height: 24px;
      }
      .bottom-rights {
        margin-top: 55px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        @media(max-width: 900px){
          margin-top: 0;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .bottom-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    @media(max-width: 900px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .social-media-buttons{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      @media(max-width: 1000px){
        max-width: 20%;
      }
      .footer-link{
        cursor: pointer;
        transition: 0.25s;
        &:hover{
          transform: scale(1.04);
        }
      }
    }
    .bottom-section{
      width: 33%;
      flex-grow: 1;
      @media(max-width: 900px){
        width: 100%;
        &.underlogo-date{
          text-align: center;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    .footer-image-container {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      .image-with-under-text {
        flex-direction: column;
        align-items: center;
        position: relative;
        max-width: 100%;

        img {
          max-height: 75px;
          max-width: 160px;
        }
        span {
          margin: 0;
          font-size: 20px;
          line-height: 32px;
          text-align: center;
          width: 160px;
        }
      }
    }
    .footer-main-container {
      .footer-column-wrapper {
        text-align: center;
        .join-us-header {
          margin-bottom: 1rem;
        }
      }
    }
    .bottom-rights {
      font-size: 14px;
      line-height: 21px;
    }
  }
}
.email-link {
  a {
    color: white;
    &:hover {
      font-family: $semiBoldFont;
    }
  }
}
//fokusavmo styliai
[tabindex="0"]:focus-visible,
button:focus-visible,
a:focus-visible,
:deep(.vueperslides__arrow:focus-visible) {
  outline: 3px solid #000000ff; /* kontrastingas apvadas */
  outline-offset: 4px;
  border-radius: 8px;
}
</style>
