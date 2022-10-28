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
                <h3></h3>

                <p></p>
                <div class="button-container">
                    
                </div>
            </div>
        </div>
        <div class="footer">

        </div>
    </section>
    <section class="supporters" id="supporters">
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LandingPageView',
 
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
}
</style>
