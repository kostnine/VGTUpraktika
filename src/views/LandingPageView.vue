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
                <img class="circle-img" src="@/assets/svgs/red_circle.svg" alt="Red circle" >
                <img class="smoke" src="@/assets/images/smoke.png" alt="Smoke" >

            </div>
        </div>
    </section>
    <section class="message" id="message">
        <div class="content">
            <div class="video">

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
            <div class="video" v-for="(video, index) in videos" :key="index">

            </div>
        </div>
    </section>
    <section class="supporters" id="supporters">
        <div class="modal">
            <h3>
                This campaign is supported by:
            </h3>
            <div class="supporter-container">
                <div class="supporter" v-for="(supporter, index) in supporters" :key="index">
                    {{ index }}
                    <img :src="require(`@/assets/${supporter.logo}`)" alt="">
                </div>
            </div>
        </div>
        <div class="red-circle">

        </div>
    </section>
    <section class="information" id="information">
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'LandingPageView',
    data(){
        return{
            videos:[
                {
                    'link' : ''
                },
                {
                    'link' : ''
                },
                {
                    'link' : ''
                },
                {
                    'link' : ''
                },
                {
                    'link' : ''
                },
            ],
            supporters:[
                {
                    url: 'www.f-e-u.org', url_text: 'www.f-e-u.org', logo: 'images/supporters/feu-logo.png'
                },
                {
                    url: 'www.europeanfiresafetyalliance.org', url_text: 'www.europeanfiresafetyalliance.org', logo: 'images/supporters/efsa-logo.png'
                },
                {
                    url: 'www.smartwaresgroup.com', url_text: 'www.smartwaresgroup.com', logo: 'images/supporters/Smartwares Group_fc.png'
                },
                {
                    url: 'www.eielectronics.com', url_text: 'www.eielectronics.com', logo: 'images/supporters/Ei-Electronics-Logo.png'
                },
                {
                    url: 'www.fireangel.co.uk', url_text: 'www.fireangel.co.uk', logo: 'images/supporters/FA-Logo-Orange.png'
                },
                {
                    url: 'www.something.org', url_text: 'www.something.org', logo: 'images/supporters/one_more_logo.png'
                },
        
            ]
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
.landing-page{

}
h1{
    font-size: clamp(24px, 4vw, 96px);
    margin: 0;
    color: #000;
    font-weight: 500;
}
h2{
    color: $mainColor;
    font-size: 80px;
    font-weight: 500;
    margin: 0;
}
h3{
    font-size: clamp(24px, 3vw, 64px);
    font-family: $semiBoldFont;
}
.hashtag{
    margin-top: 5rem;
    font-size: 48px;
}
section{
    display: flex;
    height: 100vh;
    padding: 0 $paddingHorizontal;
}
.date{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding: 0 0 0 $paddingHorizontal;
    .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex:1;
        height: 100%;
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
    height: 60vh;
    width: 60vh;
    overflow: hidden;
}
.smoke-detector{
    height: 100%;
    width: 100%;
    box-shadow: 1px 1px 1px solid;
    // transform: rotate(-16deg);
}
.circle{
    position: absolute;
    // right: -$paddingHorizontal;
    bottom: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .circle-img{
        position: absolute;
        height: 150%;
        width: 150%;
        z-index: -1;
        right: -52%;
        bottom: -57%;
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
        display: flex;
        flex-direction: row;
        padding: 0  $paddingHorizontal;
        .video{
            display: flex;
            flex: 1;
            width: 700px;
            height: 700px;
        }
        
        p{
            font-size: clamp(16px, 2vw, 24px);
            
        }
        .text{
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        .button-container{
            display: flex;
            justify-content: space-between;
        }
        button{
            width: 271px;
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
        }
    }
    .footer{
        display: flex;
        justify-content: center;
        height: 100%;
        background: $mainColor;
    }
}
.supporters{
    position: relative;
    padding: 115px $paddingHorizontal;
    overflow: hidden;
    h3{

    }
    .modal{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 6px 10px -6px #00000052;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background: white;
    }
    .red-circle{
        position: absolute;
        background: $mainColor;
        z-index: -1;
        left: -20%;
        bottom: -45%;
        width: 55vw;
        height: 55vw;
        border-radius: 50%;

    }
}
.information{
    background: #fbf3ed;
}
</style>
