<template>
    <div class="regulations-page-container">
        <div class="regulations-page-header">
            <div class="regulations-header-text">
                <span class="regulations-header-title">Regulations in Europe</span>
                <span class="regulations-header-content">See the interactive map to know more about regulations in different european homes!</span>
                <button class="regulations-header-button"><span>Map of the Europe </span><img src="@/assets/icons/arrow_down_white.svg" alt="down_arrow"/></button>
            </div>
            <div class="regulations-page-image-half">
                <img class="top-image" src="@/assets/images/Man_writing.png" alt="image"/>
                <img class="cropped-circle" src="@/assets/images/Circle_red.svg" alt="circle"/>
            </div>

        </div>
        <div class="regulations-page-map">
            <div class="regulations-page-text-content">
                <span class="regulations-page-text-title">Smoke alarm requirements</span>
                <span class="regulations-page-text-subInfo">Click on map and see what are the requirements in each country</span>
                <div class="regulations-page-dict-row">
                    <div class="regulations-page-dict-wrapper">
                        <span class="regulations-page-text-dict"><div class="colored-block blue"></div>Multiple alarms per property</span>
                        <span class="regulations-page-text-dict"><div class="colored-block orange"></div>At least one alarm per property</span>
                        <span class="regulations-page-text-dict"><div class="colored-block red"></div>No alarm requirement</span>
                    </div>
                </div>

                <div class="regulations-information-block">
                    <span>Information</span>
                    <ul>
                        <li>Extensive smoke alarm legislation in multiple countries</li>
                        <li>No legislation in Southern/Eastern Europe</li>
                        <li>Weak legislation/lack of a requirement/forcement is as bad as e.g. France 20% homes protected with working smoke alarms according to Fire Service Sources</li>
                    </ul>
                </div>
            </div>
            <div class="regulations-page-map-content">
                <div>MAP</div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'RegulationsPage',
   
  }
  </script>
  <style scoped lang="scss">
  @import '@/assets/scss/variables';
  .regulations-page-container{
    width: 100%;
    box-sizing: border-box;
  }
  .regulations-page-header{
    display: flex;
    overflow: hidden;
    height: 1080px;
    background-color: #FBF3ED;
    padding-top: 80px;
    padding-left: 160px;
    padding-right: 160px;
    margin-bottom: -50px;

    .regulations-header-text{
        display: flex;
        flex-direction: column;
        width: 50%;
        font-family: $mainFont;
        justify-content: center;
        align-items: flex-start;
        .regulations-header-title{
            font-family: $semiBoldFont;
            font-size: 64px;
            margin-bottom: 50px;
        }
        .regulations-header-content{
            font-size: 24px;
            text-align: start;
            margin-bottom: 75px;
            width: 80%;
        }
        .regulations-header-button{
            position: relative;
            width: 380px;
            height: 64px;
            border-radius: 5px;
            border: none;
            color: white;
            background-color: #C0554B;
            font-size: 24px;
            font-family: $semiBoldFont;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img{
                height: 12px;
                width: 27px;
                position: absolute;
                top: 28px;
                right: 40px;
            }
            &:hover{
                background-color: #483A5B;
            }
        }
    } 
    .regulations-page-image-half{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .cropped-circle{
        position: absolute;
        z-index: 0;
        right: 0px;
        top: 350px;
        }
        .top-image{
            z-index: 1;
        }
    }

  }
  .regulations-page-map{
    position: relative;
    height: 1200px;
    width: 100%;
    background-color: white;
    z-index: 2;
    display: flex;
    padding: 0 160px;
  }
  .regulations-page-text-content{
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    font-family: $mainFont;

    .regulations-page-text-title{
        font-size: 48px;
        font-family: $semiBoldFont;
    }
    .regulations-page-text-subInfo{
        font-size: 16px;
        line-height: 24px;
        text-align: start;
    }
  }
  .regulations-page-map-content{
    div{
        width: 1200px;
        height: 1080px;
        border: 1px solid black;
    }
  }

  .colored-block{
    width: 34px;
    height: 34px;
    &.blue{
        background-color: #DCE3EF;
    }
    &.orange{
        background-color: #F39964;
    }
    &.red{
        background-color: #C0554B;
    }
  }

  .regulations-page-dict-row{
        display: flex;
        align-items: center;
        justify-content: center;
        .regulations-page-dict-wrapper{
            width: 73%;
            .regulations-page-text-dict{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 34px 0;
            }      
        }
    }
  </style>
  