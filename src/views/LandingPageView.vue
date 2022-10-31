<template>
  <div class="landing-page">
    <section class="date" id="smokealarmssavelives">
        <div class="text">
            <h1>European</h1>
            <h1><strong>Smoke Alarm</strong> Day</h1>
            <h2 >18th November 2022</h2>
            <span class="hashtag">#smokealarmssavelives</span>
        </div>
        <div class="illustrations">
            <div class="smoke-detector-container">
                <img class="smoke-detector" src="@/assets/images/smoke_detector.png" alt="Smoke detector image" >
            </div>
            <div class="circle">
                <div class="red-circle"></div>
                <img class="smoke" src="@/assets/images/smoke.png" alt="Smoke" >

            </div>
        </div>
    </section>
    <section class="message" id="message">
        <div class="content">
            <div 
                class="video"
                v-if="windowWidth>768"
            >
                <swiper
                    ref="swiper"
                    :slides-per-view="1"
                    :space-between="0"
                    :allowTouchMove="false"
                    direction="vertical"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                >
                    <swiper-slide  v-for="(video, index) in videoStack" :key="`${video.link}-${index}`">
                        <video 
                        :ref="`mainMessageVideo-${index}`" 
                        :poster="require(`@/assets/${video.img}`)"
                        @mouseover="currentlyHoveringVideo=`mainMessageVideo-${index}`" 
                        @mouseleave="currentlyHoveringVideo=''"
                        >
                            <source :src="require(`@/assets/${video.link}`)" type="video/mp4"  >
                            Your browser does not support the video tag.
                        </video>
                    </swiper-slide>

                </swiper>
                <!-- <div class="carousel" ref="carousel" >
                    
                </div> -->
            </div>
            <div class="text">
                <h3> Messages of Support </h3>

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mattis suspendisse dolor purus ipsum pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mattis suspendisse dolor purus ipsum pellentesque.</p>
                <div class="button-container">
                    <button>Know More about Smoke Alarms</button>
                    <button class="secondary">Regulations for Smoke Alarms in Europe</button>
                </div>
            </div>
        </div>
        <div class="footer">
            <div 
                class="video"
                v-for="(video, index) in windowWidth<768 ? videos : videos.filter(el=>el.id != mainMessageVideo.id)" 
                :key="index"
                :class="{loading: isLoadingNewVideo}"
            >
                <video v-if="windowWidth<768" :ref="`video-${index}`" controls>
                    <source :src="require(`@/assets/${video.link}`)" type="video/mp4"  >
                    Your browser does not support the video tag.
                </video>
                <img v-else :src="require(`@/assets/${video.img}`)" alt="" @click="setMainMessageVideo(video)">
            </div>
        </div>
    </section>
    <section class="supporters" id="supporters">
        <div class="modal">
            <div class="modal-content">
                <h3>
                    This Campaign is Supported by:
                </h3>
                <div class="supporter-container">
                    <a :href="supporter.url" target="_blank" rel="noopener noreferrer"  class="supporter" v-for="(supporter, index) in supporters" :key="index">
                        <img :src="require(`@/assets/${supporter.logo}`)" alt="">
                        <span class="website">
                            {{supporter.url_text}}
                        </span>
                    </a>
                </div>
                <div class="supporter-container">
                    <a :href="supporter.url" target="_blank" rel="noopener noreferrer"  class="supporter" v-for="(supporter, index) in supportersExtra" :key="index">
                        <img :src="require(`@/assets/${supporter.logo}`)" alt="">
                        <span class="website">
                            {{supporter.url_text}}
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="red-circle">

        </div>
    </section>
    <section class="information" id="information">
        <h3>Information You Need to Know About Smoke Alarms</h3>
        <span>Click on one of the cards and find out more!</span>
        <div class="card-container">
            <div class="card" v-for="(card, index) in cards" :key="index">
                <div class="card-content">
                    <div class="text">
                        {{card.text}}
                    </div>
                    <img v-if="card.img != '' " :src="require(`@/assets/${card.img}`)" alt="">
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])
export default {

    name: 'LandingPageView',
    components: {
        Swiper,
        SwiperSlide
    },
    data(){
        return{
            videos:[
                {
                   id:0, 'link' : 'videos/landingpage/2.FIRESAFETY_Cooking.mp4', 'img': 'images/messages_of_support/video2.jpg',
                },
                {
                   id:1, 'link' : 'videos/landingpage/4.FIRESAFETY_SOCKET.mp4', 'img': 'images/messages_of_support/video4.jpg'
                },
                {
                   id:2, 'link' : 'videos/landingpage/6.FireSafety-Christmas lights.mp4', 'img': 'images/messages_of_support/video6.jpg'
                },
                {
                   id:3, 'link' : 'videos/landingpage/3.FIRESAFETY_PHONE_.mp4', 'img': 'images/messages_of_support/video3.jpg'
                },
                {
                   id:4, 'link' : 'videos/landingpage/1.FIRESAFETY_CANDLES.mp4', 'img': 'images/messages_of_support/video1.jpg'
                },
                {
                   id:5, 'link' : 'videos/landingpage/5.FIRESAFETY_TONGS.mp4', 'img': 'images/messages_of_support/video5.jpg'
                },
            ],
            supporters:[
                {
                    url: 'https://www.f-e-u.org', url_text: 'www.f-e-u.org', logo: 'images/supporters/feu-logo.png'
                },
                {
                    url: 'https://www.europeanfiresafetyalliance.org', url_text: 'www.europeanfiresafetyalliance.org', logo: 'images/supporters/efsa-logo.png'
                },
        
            ],
            supportersExtra:[
                {
                    url: 'https://www.smartwaresgroup.com', url_text: 'www.smartwaresgroup.com', logo: 'images/supporters/Smartwares Group_fc.png'
                },
                {
                    url: 'https://www.eielectronics.com', url_text: 'www.eielectronics.com', logo: 'images/supporters/Ei-Electronics-Logo.png'
                },
                {
                    url: 'https://www.fireangel.co.uk', url_text: 'www.fireangel.co.uk', logo: 'images/supporters/FA-Logo-Orange.png'
                },
                {
                    url: 'https://www.something.org', url_text: 'www.something.org', logo: 'images/supporters/one_more_logo.png'
                },
            ],
            cards:[
                {'text': 'Types of smoke alarms', 'img': 'images/cards/detector.png'},
                {'text': 'Where to place smoke alarms', 'img': ''},
                {'text': 'How to look after smoke alarms', 'img': ''},
            ],
            currentlyHoveringVideo: '',
            tempMainMessageVideo: {},
            mainMessageVideo: {
                   id:0, 'link' : 'videos/landingpage/2.FIRESAFETY_Cooking.mp4', 'img': 'images/messages_of_support/video2.jpg'
                },
            isLoadingNewVideo: false,
            videoStack: [
                {
                   id:0, 'link' : 'videos/landingpage/2.FIRESAFETY_Cooking.mp4', 'img': 'images/messages_of_support/video2.jpg'
                },
             
            ],

            
            swiper: null,
        }
    },
    computed:{
        isMobile(){
            return this.windowWidth < 768;
        },
    },
    watch:{
        currentlyHoveringVideo: function(newVal, oldVal){
            if(this.currentlyHoveringVideo != ''){
                let video = this.$refs[this.currentlyHoveringVideo];
                if(Array.isArray(video)) video = video[0];
                if(oldVal != ''){
                    let oldVideo = this.$refs[oldVal];
                    if(oldVideo){
                        if(Array.isArray(oldVideo)) oldVideo = oldVideo[0];
                        oldVideo.controls='';
                    }
                }
                video.controls='controls';
            }
            else{
                if(oldVal != ''){
                    let oldVideo = this.$refs[oldVal];
                    if(oldVideo){
                        if(Array.isArray(oldVideo)) oldVideo = oldVideo[0];
                        oldVideo.controls='';
                    }
                }
            }
          
        }
    },
    methods:{
        setMainMessageVideo(video){
            if(this.isLoadingNewVideo ) return;
            if(this.videoStack[this.videoStack.length-1].id == video.id) return;
            this.isLoadingNewVideo = true;
            this.tempMainMessageVideo=video;
            this.videoStack.push(video);
            this.mainMessageVideo=video;
            this.$nextTick(()=>{
                this.swiper.update();
                this.$nextTick(()=>{
                    this.swiper.slideTo(this.videoStack.length-1, 300);
                    if(this.videoStack.length > 2){
                        setTimeout(()=>{

                        this.videoStack.splice(0, 1)
                        this.swiper.update();
                        this.swiper.slidePrev(0)
                        this.isLoadingNewVideo=false

                        },350)
                    }
                    else{

                        this.isLoadingNewVideo=false
                    }
                    // this.swiper.setProgress(0,300)
                });
                setTimeout(()=>{
                    // this.videoStack.shift();
                      
                }, 50);
                  setTimeout(()=>{
                        // this.swiper.update();
                        // this.swiper.slidePrev(0);


                   
                },350)
            })
          
                // let swiper = this.$refs.swiper;
                // console.log(swiper);
                // if(Array.isArray(swiper)) swiper = swiper[0];

        },
        onSwiper(swiper){
            if(this.swiper == null){
                this.swiper = swiper;
            }
        },
        onSlideChange(){
            console.log('slide change');
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
.landing-page{

}
h1{
    font-size: clamp(24px, 5vw, 96px);
    margin: 0;
    color: #000;
    font-weight: 500;
}
h2{
    color: $mainColor;
    font-size: clamp(24px, 4.5vw, 80px);
    margin: 2rem 0 0 0;
    font-weight: 500;
}
h3{
    font-size: clamp(24px, 4vw, 64px);
    margin: 1rem 0;
    
    font-family: $semiBoldFont;
}
.hashtag{
    margin-top: 5rem;
    font-size: 48px;
    font-size: clamp(24px, 2.5vw, 48px);
}
section{
    display: flex;
    height: 100vh;
    padding: 0 $paddingHorizontal;
    overflow: hidden;
}
.date{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: calc(100vh - 196px);
    padding: 0 0 0 $paddingHorizontal;
    .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex:1;
        height: 100%;
    }
    @media (max-width: 768px){
        padding: 0 $paddingHorizontalMobile;
        flex-direction: column;
        .text{
            width: 100%;
            padding: 0rem;
        }
        h1{
            font-size: clamp(36px, 6vw, 96px);
        }
        h2{
            margin: 1rem 0 0;
            font-size: clamp(36px, 6vw, 96px);
        }
        .hashtag{
            margin: 2rem 0 0;
        }
        .illustrations{
            width: 100%;
            .smoke-detector-container{
                margin-top: 0px;
                left: 0rem;
                right: 0;
                top: -2rem;
                margin: auto;
            }
            .red-circle{
                width: 90vw;
                height: 80vw;
                left: 0;
                right: 0;
                margin: auto;
                bottom: -40vw;
            }
            .smoke{
                left: -8rem;
            }
        }
    }
}
.illustrations{
    flex:1;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
}
.smoke-detector-container{
    position: absolute;
    height: 27.3vw;
    width: 27.3vw;
    min-width: 300px;
    min-height: 300px;
    top: 164px;
    left: 7.6vw;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 95%;
        height: 94%;
        border-radius: 50%;
        box-shadow: -3px 14px 14px 11px #0000002b;

    }
}
.smoke-detector{
    height: 100%;
    width: 100%;
    box-shadow: 1px 1px 1px solid;
    transform: rotate(-16deg);
}
.circle{
    position: absolute;
    // right: -$paddingHorizontal;
    bottom: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .red-circle{
        position: absolute;
        height: 69vw;
        width: 69vw;
        z-index: -1;
        left: 7.6vw;
        top: 164px;
        border-radius: 50%;
        background: $mainColor;
    }
    .smoke{
        left: 3%;
        right: 0;
        margin: auto;
        bottom: -42%;
        height: 150%;
        width: 150%;
    }
    img{
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -1;
    }
}
.message{
    background-color: #fbf3ed;
    padding:0;
    display: flex;
    flex-direction: column;
    .content{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px calc(min(160px, 10vw));
        height: 100%;
        .video{
            position: relative;
            display: flex;
            flex-direction: column;
            flex: 3;
            height: 30vw;
            min-height: calc(min(500px, 30vw));
            max-height: 90%;
            border-radius: 20px;
            margin: 0;
            overflow: hidden;
            .carousel{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                // max-height: 100%;
                // transition: top 0.3s;
            }
            video, img{
                object-fit: cover;
                width: 100%;
                height: 100%;
                min-height: 100%;
                transition: transform 0.5s;

            }
            img{
                cursor: pointer;
            }
           
            &.loading{
                video{
                }
            }
        }
        h3{
            font-size: clamp(24px, 3vw, 64px);
        }
        p{
            font-size: clamp(16px, 1.4vw, 24px);
        }
        .text{
            display: flex;
            flex-direction: column;
            flex: 2;
            padding: 0 0 0 calc(min(2rem, 1vw));
            margin-left: calc(min(6rem, 3vw));
            height: 30vw;
            max-height: 500px;
            margin-top: 3rem;
        }
        .button-container{
            display: flex;
            justify-content: space-between;
            margin: 2rem 0px;
            
        }
        button{
            max-width: 271px;
            width: 80%;
            height: 56px;
            background: $mainColor;
            border-radius: 5px;
            border: none;
            color: white;
            font-weight: 700;
            cursor: pointer;
            &.secondary{
                background: $secondaryColor;
            }
            &:first-child{
                margin-right: 1rem;
            }
            transition: all 0.3s;
            &:hover{
                box-shadow: 0px 3px 10px 0px #0707073f;
            }
            &:active{
                box-shadow: 0px 2px 3px 0px #0000004f;
            }
        }
    }
    .footer{
        display: flex;
        align-items: center;
        background: $mainColor;
        padding: 2rem calc(min(160px, 10vw));
        justify-content: space-between;
        .video{
            height: calc(min(250px, 10vw));
            min-width: calc(min(360px, 10vw));
            margin: 0 1rem;
            border-radius: 15px;
            overflow: hidden;
            video, img{
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
            img{
                cursor: pointer;
            }
            &:first-child{
                margin-left: 0;
            }
            &:last-child{
                margin-right: 0;
            }
        }
    }
    @media (max-width: 1050px){
        min-height: 100vh;
        height: auto;
        .content{
            flex-direction: column-reverse;
            padding: 2rem calc(min(160px, 10vw));
            .video{
                width: 100%;
            }
            .text{
                margin-left: 0;
                padding-left: 0;
                margin-top: 0;
                .button-container{
                    margin-bottom: 2rem;
                }
            }
            h3{
                text-align: center;
            }
        }  
    }
    @media (max-width: 768px){
        min-height: 100vh;
        height: auto;
        .content{
            flex-direction: column;
            padding: 40px $paddingHorizontalMobile 20px;
            .text{
                margin-left: 0px;
                padding: 0;
                max-width: 100%;
                text-align: justify;
            }
            h3{
                font-size: clamp(36px, 5vw, 64px);
                text-align: center;
            }
            .button-container{
                margin: 1rem 0px;
                flex-direction: column;
                button{
                    width: 100%;
                    max-width: 100%;
                    margin: 0.5rem 0px;
                    font-size: clamp(20px, 3vw, 28px);
                   
                }
            }
        }
        .footer{
            padding: 2rem $paddingHorizontalMobile;
            flex-wrap: wrap;
            .video{
                margin: 1rem 0;
                height: auto;
                aspect-ratio: 16/9;
                min-width: 100%;
                width: 100%;
                &:first-child{
                    margin: 1rem 0;
                }
                &:last-child{
                    margin: 1rem 0;
                }
            }
        }
    }
    @media (max-width: 678px){
        .footer{
            .video{
                height: 50vw;
                width: initial;
            }
        }
    }
}
.supporters{
    position: relative;
    padding: 100px $paddingHorizontal;
    overflow: hidden;
    h3{
        margin: 0rem 0 5rem;
    }
    .modal{
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 3px 0px #00000052;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background: white;
    }
    .modal-content{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 4rem 0;
        // padding: 115px;
        align-items: center;
    }
    .red-circle{
        position: absolute;
        background: $mainColor;
        z-index: -1;
        left: -14vw;
        bottom: -25vw;
        width: 55vw;
        height: 55vw;
        border-radius: 50%;

    }
    .supporter-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &:first-of-type{
            margin-bottom: 1rem;
        }
    }
    .supporter{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 1rem 3rem;
        height: 11vw;
        width: 17vw;
        padding: 1rem;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s, box-shadow 0.3s;
        span{
            color:#0C2C39;
            text-decoration: none;
        }
        img{
            max-width: 100%;
            width: 80%;
        }
        &:link { text-decoration: none; }
        &:visited { text-decoration: none; }
        &:hover { text-decoration: none; }
        &:active { text-decoration: none; }
        &:hover{
           background: #FBF3ED;
            box-shadow: 0px 3px 10px 0px #0707073f;
        }
        &:active{
           box-shadow: 0px 2px 3px 0px #0000004f;
        }
    }
    @media (max-width: 1320px){
        min-height: 100vh;
        height: auto;
    }
    @media (max-width: 768px){
        min-height: 100vh;
        height: auto;
        padding: 50px $paddingHorizontalMobile;
        .modal{
            box-shadow: none;
        }
        .modal-content{
            .supporter-container{
                display: flex;
                width: 100%;
                justify-content: center;
                .supporter{
                    margin: 2vw;
                    width: 41.5vw;
                    height: 27vw;
                    background: #FBF3ED;
                    box-shadow: 0px 3px 10px 0px #0707073f;
                    img{
                        height: auto;
                        max-height: 19vw;
                    }
                    span{
                        font-size: clamp(12px, 2.7vw, 16px);
                    }
                }
                &:first-of-type{
                    margin-bottom: 1rem;
                }
            }
        }
        .red-circle{
            left: -20%;
            bottom: -45%;
            width: 55vw;
            height: 55vw;
        }
        .supporter-container{
            flex-direction: row;
            .supporter{
                margin: 2rem 0;
            }
        }
    }
    @media (max-width: 460px){
         .modal-content{
            .supporter-container{
                .supporter{
                    margin: 1vw;
              
                }
            }
         }
    }
     @media (max-width: 380px){
         .modal-content{
            .supporter-container{
                .supporter{
                    margin: 1rem 0;
                    width: 100%;
                    height: 44vw;
              
                }
            }
         }
    }
}
.information{
    background: #fbf3ed;
    display: flex;
    flex-direction: column;
    align-items: center;
    .card-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        .card{
            display: flex;
            flex-direction: column;
            align-items: center;
            background: white;
            border-radius: 15px;
            max-width: 400px;
            max-height: 400px;
            width: calc((100vw - 320px - 6rem) / 3);
            height: calc((100vw - 320px - 6rem) / 3);
            margin: 0 1rem;
            cursor: pointer;
            box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
            overflow: hidden;
            transition: background-color 0.3s, box-shadow 0.3s;
            .text{
                font-size: clamp(16px, 2vw, 36px);
                transition: color 0.3s;
            }
            img{
                width: fit-content;
                max-width: 100%;
            }
            .card-content{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                height: 100%;
                padding: calc(min(5vw, 4rem)) calc(min(5vw, 5rem));
                text-align: center;
            }
            &:hover{
                background: $mainColor;
                .text{
                    color: white;
                }
            }
            &:active{
                 box-shadow: 0px 2px 3px 0px #0000004f;
            }
        }
    }
    h3{
        width: 44vw;
        text-align: center;
        margin: 3rem 0 0;
    }
    span{
        font-size: clamp(16px, 1vw, 24px);
        margin: 3rem 0 5rem;
    }
    @media (max-width: 1320px){
        padding: 0 calc(min(160px, 10vw));
        .card-container {
            .card{
                width: calc((100vw - (calc(min(160px, 10vw)) * 2) - 6rem) / 3);
                height: calc((100vw - (calc(min(160px, 10vw)) * 2) - 6rem) / 3);
                .card-content{
                    padding: calc(min(2vw, 2rem)) calc(min(4vw, 3rem));
                }
            }
        }
    }
    @media (max-width: 768px){
        padding: 0 $paddingHorizontalMobile;
        min-height: 100vh;
        height: auto;
        padding-bottom: 5rem;
        h3{
            width: 100%;
            font-size: clamp(28px, 4vw, 36px);
        }
        span{
            margin: 1rem 0;
            font-size: clamp(16px, 2vw, 20px);
        }
        .card-container{
            .card{
                width: calc(100vw - 40px);
                height: calc(100vw - 40px);
                min-height: 30vw;
                margin: 1rem;
                .card-content{
                    padding: 1rem 2rem;
                    .text{

                        font-size: clamp(24px, 3vw, 36px);
                    }
                    img{
                        width: 50vw;
                        max-width: 280px;
                    }
                }
            }
        }
    }
}
.fadeIn-enter-active, .fadeIn-leave-active {
  transition: transform .3s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(0%);
}
</style>
<style lang="scss">
.swiper-container{
    min-width: 100%;
    min-height: 100%;
}
.swiper-slide{
    height: 100% !important;
}
</style>