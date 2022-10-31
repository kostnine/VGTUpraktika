<template>
  <div class="footer-container">
    <div class="footer-image-container">
      <div class="image-with-under-text">
        <img src="@/assets/logo.png" alt="logo"/>
        <span>18th November 2022</span>
      </div>
    </div>
    <div class="footer-main-container">
      <div class="footer-column-wrapper">
        <span class="join-us-header">Want to join the project? Contact us!</span>
        <span class="semiBold text">Monique de Haan</span>
        <span class="text">EUROFSA Secretariat</span>
        <span class="text"><span class="semiBold">E-Mail:</span> info@eurofsa.org</span>
        <span class="bottom-rights">All content © 2022 European smoke alarm day campaign</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FooterComponent',
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.semiBold{
  font-family: $semiBoldFont;
}
.footer-container{
  display: flex;
  background-color: #483A5B;
  color: white;
  height: 300px;
  align-items: center;
  padding: 0 160px;
  @media(max-width: 1280px){
    padding: 0 80px;
  }
  .footer-image-container{
    position: absolute;
    font-family: $mainFont;
    .image-with-under-text{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: flex-start;
      img{
        width: 200px;
        height: 100px;
      }
      span{
        margin-top: 40px;
        font-size: 24px;
      }
    }
  }
  .footer-main-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .footer-column-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: $mainFont;
      .join-us-header{
        font-size: 25px;
        margin-bottom: 55px;
      }
      .text{
        margin: 3px 0;
      }
      .bottom-rights{
        margin-top: 55px;
      }
    }
  }
  @media (max-width: 768px){
    padding: 0 20px;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    .footer-image-container{
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      .image-with-under-text{
        flex-direction: row;
        align-items: flex-end;
        position: relative;
        max-width: 100%;
    
        img{
          max-height: 75px;
          width: auto;
        }
        span{
          margin: 0;
          font-size: clamp(16px, 3vw, 24px);
        }
      }

    }
    .footer-main-container{
      .footer-column-wrapper{
        .join-us-header{
          margin-bottom: 1rem;
        }
  
      }

    }
  
  }
}
</style>