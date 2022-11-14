<template>
  <div class="video-parent">
    <video ref="videoPlayer" class="video-js vjs-fluid" @play="videoPlay" @pause="videoPause"></video>
    <transition name="fade">
        <div class="play-button" v-if="showPlayButton">
            <svg v-if="buttonType=='play'" width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.935547 2.39916C0.935547 0.824051 2.67179 -0.132915 4.00353 0.708183L24.0233 13.3522C25.2659 14.1371 25.2659 15.9493 24.0233 16.7342L4.00354 29.3782C2.6718 30.2193 0.935547 29.2623 0.935547 27.6872V2.39916Z" fill="#0C2C39"/>
            </svg>
            <svg v-else width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="6" height="29" rx="1" fill="#0C2C39"/>
                <rect x="11" width="6" height="29" rx="1" fill="#0C2C39"/>
            </svg>
        </div>
    </transition>
  </div>
</template>

<script>
import videojs from 'video.js';
export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {
        };
      }
    }
  },
  data() {
    return {
        player: null,
        showPlayButton: false,
        buttonType: 'play'

    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods:{
    videoPause(){
        this.buttonType='pause';
        this.showPlayButton =true;
        this.$nextTick(()=>{

            this.showPlayButton =false;
        })
    },
    videoPlay(){
        this.buttonType='play';
        this.showPlayButton =true;
        this.$nextTick(()=>{
            this.showPlayButton =false;
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.video-parent{
max-height: 100%;
border-radius: 20px;
overflow: hidden;
}
video{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
}
.play-button{
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s, transform .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(1.25);
}
</style>
<style>
/* @import '@/assets/css/player.css'; */
@import 'video.js/dist/video-js.css';

</style>
<style lang="scss">
.vjs-control-bar{
    display: flex;
}
.video-js{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    max-width: 100%;
}
.video-js{
    .vjs-big-play-button{
        left: 0;
        right: 0;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 12vw;
        height: 12vw;
        max-width: 87px;
        max-height: 87px;
        border-radius: 50%;
        border:none;
        background: #ffffffde;
        .vjs-icon-placeholder{
            &::before{
                display: flex;
                align-items: center;
                justify-content: center;
                color: #0C2C39;
                font-size: 2em;
                background-image: url('../assets/icons/play_button.svg');
                content: '';
                background-repeat: no-repeat;
                background-position: center;
            }
        }
        &:hover{
            background: #ffffffde;
        }
        @media (max-width: 768px) {
            .vjs-icon-placeholder{
                &::before{
                    background-size: 39%;
                }
            }
        }
    }
    &:hover{
        .vjs-big-play-button{
            background: #ffffffde;
        }
    }
}
.vjs-control-bar{
    opacity: 0;
    transition: opacity 0.5s;
    &:hover{
        opacity: 1;
    }
}
</style>
