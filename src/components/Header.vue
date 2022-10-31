<template>
  <div class="header-container">
    <div class="header-image-container">
      <router-link to="/"><img src="@/assets/logo.png" alt="logo"/></router-link>
    </div>
    <div 
      class="burger"
      :class="{active:isMenuOpen}"
      v-if="windowWidth < 768" 
      @click="isMenuOpen=!isMenuOpen"
    >
      <span></span><span></span><span></span>
    </div>
    <nav class="header-navigation-bar" :class="{open: windowWidth < 768 ? isMenuOpen : true}" >
      <router-link to="/regulations" class="header-nav-block">Regulations in Europe</router-link>
      <div class="header-nav-block dropdown" @click="dropdownExtended = !dropdownExtended">Smoke Alarms Information <img :class="dropdownExtended ? 'flipped': 'non-flipped'" src="@/assets/icons/arrow_down.svg" alt="dropdown"/></div>
      <router-link to="/facts" class="header-nav-block">Important Facts</router-link>
      <router-link to="/downloads" class="header-nav-block">Download Section</router-link>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data(){
        return{
          dropdownExtended: false,
          isMenuOpen: false,
        }
    },
    watch:{
      '$route.path'(){
        this.isMenuOpen=false;
      }
    },
    methods:{
      linkClick(){
        if(this.windowWidth < 768){
          this.isMenuOpen = false;
        }
      }
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.header-container{
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 60px 160px 0;
  z-index: 99;
  .header-image-container{
    width: 40%;
    display: flex;
    @media(max-width: 1280px){
      width: 35%;
    }
  }
  .header-navigation-bar{
    width: 60%;
    // border: 1px solid black;
    display: flex;
    padding-top: 7px;
    align-items: flex-start;
    justify-content: space-between;
    .header-nav-block{
      font-size: 16px;
      text-decoration: none;
      color: black;
      font-family: $mainFont;
      font-weight: 400;
      text-align: center;
      // border: 1px solid black;
      min-width: 18%;
      padding: 8px 0;
      &:hover{
        font-family: $semiBoldFont;
        border-bottom: 2px solid #000000;
      }
    }
    .dropdown{
      cursor: pointer;
      .flipped{
        transition: 0.3s;
        transform: rotate(180deg);
      }
      .non-flipped{
        transition: 0.3s;
        transform: rotate(0deg);
      }
    }
  }
  .burger{
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    height: 30px;
    width: 50px;
    cursor: pointer;
    z-index: 100;
    span{
      display: flex;
      width: 100%;
      height: 5px;
      border-radius: 10px;
      background-color: #ce5b50;
      transition: all 0.3s;
    }
    &.active{
      span:nth-child(2){
        display: none;
      }
      span{
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        margin: auto;
        transform: rotate(45deg) 
      }
      span:last-child{
        transform: rotate(-45deg);
      }
    }
  }
  @media(max-width: 1280px){
    padding: 30px 80px
  }
  @media(max-width: 1050px){
    padding: 30px 30px;
    .header-navigation-bar{
      width: 100%;
    }
  }
  @media(max-width: 768px){
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    margin: 0;
    background: white;
    width: 100%;
    padding: 15px 20px;
    z-index: 99;
    box-shadow: 0px 1px 6px -2px rgba(0, 0, 0, 0.404);
    .header-navigation-bar{
      display: none;
      &.open{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 20vw 0 0 9vw;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: white;
        z-index: 99;
        .header-nav-block{
          font-size: clamp(16px, 7vw, 36px);
          margin: 2rem 0;
          img{
            width: 30px;
            height: 20px;
          }
        }
      }

    }
    .header-image-container{
      height: 80px;
      img{
        height: 100%;
      }
    }
  }
}
</style>