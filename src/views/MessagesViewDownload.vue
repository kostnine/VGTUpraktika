<template>
    <div>
        <div class="top-section">
            <div class="text">
                <h2 v-html="toLocal('downloads.more_info')"></h2>
                <span>{{ toLocal("downloads.read") }}</span>
            </div>
        </div>
        <div class="game-container">
            <div class="title">
                <h2>{{toLocal('info.game-title')}}</h2>
            </div>
            <div class="inner-container">
                <div class="desc" v-html="toLocal('info.game-desc')">
                </div>
                <div 
                    class="game-image" 
                    @click="goToGame()" 
                    @keyup.enter="goToGame()" 
                    @keyup.space="goToGame()" 
                    tabindex="0" 
                    role="button" 
                    aria-label="Play fire safety game"
                    :title="toLocal('info.opens-link-tooltip')"
                >
                    <span class="link-indicator" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6667 1.33325H14.6667V5.33325" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 7.99992L14.6667 1.33325" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 8.66659V11.9999C14 13.1045 13.1046 13.9999 12 13.9999H4C2.89543 13.9999 2 13.1045 2 11.9999V3.99992C2 2.89535 2.89543 1.99992 4 1.99992H7.33333" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <img src="@/assets/images/game.png" :alt="toLocal('alt.game_image')" />
                </div>
            </div>
            <div 
                class="under-button" 
                @click="goToGame()" 
                @keyup.enter="goToGame()" 
                @keyup.space="goToGame()" 
                tabindex="0" 
                role="button" 
                aria-label="Play the game"
                :title="toLocal('info.opens-link-tooltip')"
            >
                <span>{{ toLocal('info.lets-play') }} </span>
                <span class="link-indicator button" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6667 1.33325H14.6667V5.33325" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 7.99992L14.6667 1.33325" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 8.66659V11.9999C14 13.1045 13.1046 13.9999 12 13.9999H4C2.89543 13.9999 2 13.1045 2 11.9999V3.99992C2 2.89535 2.89543 1.99992 4 1.99992H7.33333" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 22L12 12L2 2" stroke="white" stroke-width="3"/>
                </svg>
            </div>
        </div>

        <div class="information-container webinar">
            <div class="spain-container2 webinar">
                <div class="title-container">
                    <h2 class="spain-title">{{ toLocal("downloads.webinar_title") }}</h2>
                </div>
                <div class="video-row">
                    <!-- 2025 Final Report -->
                    <div 
                        class="section-container download"
                    >
                        <span class="title-under">{{toLocal('regulations.download')}}</span>
                        <span class="video-title">{{ toLocal(webinarBrochures[0].text) }}:</span>
                        <div class="brochure-container">
                            <div
                                class="leaflet"
                                :style="{ backgroundImage: 'url(' + require(`@/assets/${webinarBrochures[0].img}`) + ')' }"
                                @click="downloadLeaflet(webinarBrochures[0])"
                                @keyup.enter="downloadLeaflet(webinarBrochures[0])"
                                @keyup.space="downloadLeaflet(webinarBrochures[0])"
                                tabindex="0"
                                role="button"
                                :aria-label="`Download ${toLocal(webinarBrochures[0].text)}`"
                            >
                                <div class="bottom-content">
                                    <div class="leaflet-text">
                                        {{ toLocal(webinarBrochures[0].text) }}
                                    </div>
                                    <div class="download-btn">
                                        <svg
                                            width="37"
                                            height="37"
                                            viewBox="0 0 37 37"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.875 0V13.875H4.625L18.5 27.75L32.375 13.875H23.125V0H13.875ZM0 32.375V37H37V32.375H0Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2025 European Smoke Alarm Day Webinar -->
                    <div class="section-container">
                        <div class="video-container-with-text">
                            <span class="title-under">{{toLocal('regulations.watch')}}</span>
                            <span class="video-title">2025 European Smoke Alarm Day Webinar:</span>
                            <div class="video" tabindex="0" role="region" aria-label="Watch 2025 webinar video">
                                <iframe
                                    :src="`https://www.youtube.com/embed/6nvdsPeZ4Zs`"
                                    title="2025 European Smoke Alarm Day Webinar"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <span 
                                class="video-url" 
                                @click="window.open('https://www.youtube.com/watch?v=6nvdsPeZ4Zs', '_blank')" 
                                tabindex="0" 
                                role="link" 
                                aria-label="Open 2025 webinar on YouTube"
                                @keyup.enter="window.open('https://www.youtube.com/watch?v=6nvdsPeZ4Zs', '_blank')" 
                                @keyup.space="window.open('https://www.youtube.com/watch?v=6nvdsPeZ4Zs', '_blank')"
                            >
                                https://www.youtube.com/watch?v=6nvdsPeZ4Zs
                            </span>
                        </div>
                    </div>
                    <!-- 2024 Final Report -->
                    <div 
                        class="section-container download"
                    >
                        <span class="title-under">{{toLocal('regulations.download')}}</span>
                        <span class="video-title">{{ toLocal(webinarBrochures[1].text) }}:</span>
                        <div class="brochure-container">
                            <div
                                class="leaflet"
                                :style="{ backgroundImage: 'url(' + require(`@/assets/${webinarBrochures[1].img}`) + ')' }"
                                @click="downloadLeaflet(webinarBrochures[1])"
                                @keyup.enter="downloadLeaflet(webinarBrochures[1])"
                                @keyup.space="downloadLeaflet(webinarBrochures[1])"
                                tabindex="0"
                                role="button"
                                :aria-label="`Download ${toLocal(webinarBrochures[1].text)}`"
                            >
                                <div class="bottom-content">
                                    <div class="leaflet-text">
                                        {{ toLocal(webinarBrochures[1].text) }}
                                    </div>
                                    <div class="download-btn">
                                        <svg
                                            width="37"
                                            height="37"
                                            viewBox="0 0 37 37"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.875 0V13.875H4.625L18.5 27.75L32.375 13.875H23.125V0H13.875ZM0 32.375V37H37V32.375H0Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2024 European Smoke Alarm Day Webinar -->
                    <div class="section-container">
                        <div class="video-container-with-text">
                            <span class="title-under">{{toLocal('regulations.watch')}}</span>
                            <span class="video-title">{{ toLocal("downloads.webinar_title_date") }}:</span>
                            <div class="video" tabindex="0" role="region" aria-label="Watch 2024 webinar video">
                                <iframe
                                    :src="`https://www.youtube.com/embed/nq1zr_lYkN4`"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <span 
                                class="video-url" 
                                @click="window.open('https://www.youtube.com/watch?v=nq1zr_lYkN4', '_blank')" 
                                tabindex="0" 
                                role="link" 
                                aria-label="Open 2024 webinar on YouTube"
                                @keyup.enter="window.open('https://www.youtube.com/watch?v=nq1zr_lYkN4', '_blank')" 
                                @keyup.space="window.open('https://www.youtube.com/watch?v=nq1zr_lYkN4', '_blank')"
                            >
                                https://www.youtube.com/watch?v=nq1zr_lYkN4
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="information-section">
            <h2 class="info-title">{{toLocal('info.check-out')}}</h2>
            <div class="downloadables-container">
                <div 
                    class="downloadable" 
                    @click="downloadFile('/downloads/Examples of successful smoke alarm campaigns implemented in various countries.docx', 'Examples of successful smoke alarm campaigns implemented in various countries')" 
                    @keyup.enter="downloadFile('/downloads/Examples of successful smoke alarm campaigns implemented in various countries.docx', 'Examples of successful smoke alarm campaigns implemented in various countries')" 
                    @keyup.space="downloadFile('/downloads/Examples of successful smoke alarm campaigns implemented in various countries.docx', 'Examples of successful smoke alarm campaigns implemented in various countries')" 
                    tabindex="0" 
                    role="button" 
                    aria-label="Download Examples of successful smoke alarm campaigns document"
                    :style="{ backgroundImage: 'url(' + require(`@/assets/images/downloads/Asset10.svg`) + ')' }"
                >
                    <div class="downloadable-title">
                        <div class="text">{{ toLocal('downloads.examples') }}</div>
                        <div class="icon">
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.875 0V13.875H4.625L18.5 27.75L32.375 13.875H23.125V0H13.875ZM0 32.375V37H37V32.375H0Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div 
                    class="downloadable" 
                    @click="downloadFile('/downloads/Examples of training programmes for fire services to educate the public about smoke alarms.docx', 'Examples of training programmes for fire services to educate the public about smoke alarms')" 
                    @keyup.enter="downloadFile('/downloads/Examples of training programmes for fire services to educate the public about smoke alarms.docx', 'Examples of training programmes for fire services to educate the public about smoke alarms')" 
                    @keyup.space="downloadFile('/downloads/Examples of training programmes for fire services to educate the public about smoke alarms.docx', 'Examples of training programmes for fire services to educate the public about smoke alarms')" 
                    tabindex="0" 
                    role="button" 
                    aria-label="Download Examples of training programmes document"
                    :style="{ backgroundImage: 'url(' + require(`@/assets/images/downloads/Asset11.svg`) + ')' }"
                >
                    <div class="downloadable-title">
                        <div class="text">{{ toLocal('downloads.examples') }}</div>
                        <div class="icon">
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.875 0V13.875H4.625L18.5 27.75L32.375 13.875H23.125V0H13.875ZM0 32.375V37H37V32.375H0Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div 
                    class="downloadable video-embed"
                    tabindex="0" 
                    role="region" 
                    aria-label="Embedded YouTube video about smoke alarm campaigns"
                >
                    <div class="video-iframe-container">
                        <iframe
                            src="https://www.youtube.com/embed/NDShJjSbA1Y?start=2"
                            title="YouTube video player - Smoke Alarm Campaigns"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            tabindex="-1"
                            aria-hidden="true"
                        ></iframe>
                    </div>
                    <div class="downloadable-title">
                        <div class="text">{{ toLocal('downloads.fire_spain') }}</div>
                    </div>
                </div>

                <div 
                    class="downloadable video-embed"
                    tabindex="0" 
                    role="region" 
                    aria-label="Embedded YouTube video about fire safety education"
                >
                    <div class="video-iframe-container">
                        <iframe
                            src="https://www.youtube.com/embed/6g8PWXPgJjA"
                            title="YouTube video player - Fire Safety Education"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            tabindex="-1"
                            aria-hidden="true"
                        ></iframe>
                    </div>
                    <div class="downloadable-title">
                        <div class="text">Duerme Tranquilo</div>
                    </div>
                </div>

                <div 
                    class="downloadable" 
                    @click="downloadFile('/downloads/FireKills.pdf', 'Fire kills campaign toolkit')" 
                    @keyup.enter="downloadFile('/downloads/FireKills.pdf', 'Fire kills campaign toolkit')" 
                    @keyup.space="downloadFile('/downloads/FireKills.pdf', 'Fire kills campaign toolkit')" 
                    tabindex="0" 
                    role="button" 
                    aria-label="Download Fire kills campaign toolkit document"
                    :style="{ backgroundImage: 'url(' + require(`@/assets/images/downloads/Fire_kills_campaign_toolkit-100.svg`) + ')' }"
                >
                    <div class="downloadable-title">
                        <div class="text">Fire kills campaign toolkit</div>
                        <div class="icon">
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.875 0V13.875H4.625L18.5 27.75L32.375 13.875H23.125V0H13.875ZM0 32.375V37H37V32.375H0Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div 
                    class="downloadable" 
                    @click="downloadFile('/downloads/FirePreventionWeekCampaigniFrance.docx', 'Fire Prevention Week Campaign in France')" 
                    @keyup.enter="downloadFile('/downloads/FirePreventionWeekCampaigniFrance.docx', 'Fire Prevention Week Campaign in France')" 
                    @keyup.space="downloadFile('/downloads/FirePreventionWeekCampaigniFrance.docx', 'Fire Prevention Week Campaign in France')" 
                    tabindex="0" 
                    role="button" 
                    aria-label="Download Fire Prevention Week Campaign in France document"
                    :style="{ backgroundImage: 'url(' + require(`@/assets/images/downloads/Fire_Prevention_Week_Campaign_in_France1.svg`) + ')' }"
                >
                    <div class="downloadable-title">
                        <div class="text">Fire Prevention Week Campaign in France</div>
                        <div class="icon">
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.875 0V13.875H4.625L18.5 27.75L32.375 13.875H23.125V0H13.875ZM0 32.375V37H37V32.375H0Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="leaflet-section">
            <div class="leaflet-container red-bg">
                <h3 class="color-text leaflet-title">{{ toLocal("downloads.check_leaf_smoke") }}</h3>
                <span class="color-text">{{ toLocal("downloads.download_leaf") }}</span>
                <div class="leaflets">
                    <div
                        class="leaflet"
                        :style="{ backgroundImage: 'url(' + require(`@/assets/${leaflet.img}`) + ')' }"
                        v-for="(leaflet, index) in infoLeaflets"
                        :key="index"
                        @click="downloadLeaflet(leaflet)"
                        @keyup.enter="downloadLeaflet(leaflet)"
                        @keyup.space="downloadLeaflet(leaflet)"
                        tabindex="0"
                        role="button"
                        :aria-label="`Download ${toLocal(leaflet.text)}`"
                    >
                        <div class="bottom-content">
                            <div class="leaflet-text">{{ toLocal(leaflet.text) }}</div>
                            <div class="download-btn">
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.875 0V13.875H4.625L18.5 27.75L32.375 13.875H23.125V0H13.875ZM0 32.375V37H37V32.375H0Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="gif-section">
            <div class="gifs-container">
                <div class="title-container">
                    <h2 class="title">{{toLocal('downloads.gifs')}}</h2>
                </div>
                <div class="inner-container">
                    <vueper-slides
                        class="no-shadow"
                        :infinite="false"
                        :always-refresh-clones="true"
                        :visible-slides="4"
                        :slide-multiple="false"
                        :bullets="false"
                        :gap="4"
                        :slide-ratio="1 / 4"
                        :dragging-distance="200"
                        fixed-height="350px"
                        :breakpoints="{ 1860: {visibleSlides: 3, slideRatio: 1/3, fixedHeight: false}, 1280: {visibleSlides: 3, slideRatio: 1/4, fixedHeight: false}, 768: { visibleSlides: 1, arrowsOutside: true, slideRatio: 1/1, slideMultiple: 2, fixedHeight: false, }, 1000: { visibleSlides: 2, arrowsOutside: true, slideRatio: 1/2, fixedHeight: false } }"
                    >
                        <vueper-slide 
                            v-for="gif, idx in gifs"
                            :key="`gif-${idx}`">
                            <template #content>
                                <img 
                                    class="single-gif" 
                                    draggable="false" 
                                    :src="require(`@/assets/gifs/${$store.state.lang}/${gif.id}.gif`)" 
                                    :alt="`${toLocal('alt.gif_image')} ${idx + 1}`"
                                >
                            </template>
                        </vueper-slide>
                    </vueper-slides>
                </div>
            </div>
        </div>

        <div class="facts-share">
            <span class="share-title">{{ toLocal("facts.share_story") }}</span>
            <button @click="mailto" tabindex="0">info@eurofsa.org</button>
        </div>
    </div>
</template>
<script>
import {VueperSlides, VueperSlide} from "vueperslides";
import 'vueperslides/dist/vueperslides.css'
    export default {
        
        data(){
            return {
                webinarBrochures:[
                  {
                    img: "images/downloads/2025_final_report.png",
                    download_path:
                    "/downloads/EU Smoke Alarm Day 2025 final report with Appendices final March 2026.pdf",
                    extension: '.pdf',
                    text: "downloads.final_report_2025",

                  },
                  {
                    img: "images/downloads/Asset12.svg",
                    download_path:
                    "/downloads/EU Smoke Alarm Day 2024 final report with Appendices final Feb 2025.pdf",
                    extension: '.pdf',
                    text: "downloads.final_report",

                  }
                ],
                infoLeaflets:[

                  {
                      img: "images/downloads/leaflet5EN.png",
                      download_path: "/downloads/Leaflet-English.pdf",
                      text: "downloads.leaflet5EN",
                    },
                    {
                      img: "images/downloads/leaflet5CZ.png",
                      download_path: "/downloads/Leaflet-Czech.pdf",
                      text: "downloads.leaflet5CZ",
                    },
                    {
                      img: "images/downloads/leaflet5NL.png",
                      download_path: "/downloads/Leaflet_Dutch.pdf",
                      text: "downloads.leaflet5DE",
                    },
                    {
                      img: "images/downloads/leaflet5LV.png",
                      download_path: "/downloads/Leaflet-Latvian.pdf",
                      text: "downloads.leaflet5LV",
                    },
                    {
                      img: "images/downloads/leaflet5HU.png",
                      download_path: "/downloads/Leaflet-Hungarian.pdf",
                      text: "downloads.leaflet5HU",
                    },
                    {
                      img: "images/downloads/leaflet5FR.png",
                      download_path: "/downloads/Leaflet-French.pdf",
                      text: "downloads.leaflet5FR",
                    },
                    {
                      img: "images/downloads/leaflet5IT.png",
                      download_path: "/downloads/Leaflet-Italian.pdf",
                      text: "downloads.leaflet5IT",
                    },
                    {
                      img: "images/downloads/leaflet5ES.png",
                      download_path: "/downloads/Leaflet-Spanish.pdf",
                      text: "downloads.leaflet5ES",
                    },
                    {
                      img: "images/downloads/leaflet5LT.png",
                      download_path: "/downloads/Leaflet_Lithuanian.pdf",
                      text: "downloads.leaflet5LT",
                    },
                    {
                      img: "images/downloads/leaflet5MT.png",
                      download_path: "/downloads/Leaflet_Maltese.pdf",
                      text: "downloads.leaflet5MT",
                    },
                ],
                gifs:[
                {
                    id: 1,
                    link: `gifs/${this.langString()}/1.gif`,
                },
                {
                    id: 2,
                    link: `gifs/${this.langString()}/2.gif`,
                },
                {
                    id: 3,
                    link: `gifs/${this.langString()}/3.gif`,
                },
                {
                    id: 4,
                    link: `gifs/${this.langString()}/4.gif`,
                },
                {
                    id: 5,
                    link: `gifs/${this.langString()}/5.gif`,
                },
                {
                    id: 6,
                    link: `gifs/${this.langString()}/6.gif`,
                },
                {
                    id: 7,
                    link: `gifs/${this.langString()}/7.gif`,
                },
                {
                    id: 8,
                    link: `gifs/${this.langString()}/8.gif`,
                },
                {
                    id: 9,
                    link: `gifs/${this.langString()}/9.gif`,
                },
                {
                    id: 10,
                    link: `gifs/${this.langString()}/10.gif`,
                },
                {
                    id: 11,
                    link: `gifs/${this.langString()}/11.gif`,
                },
                {
                    id: 12,
                    link: `gifs/${this.langString()}/12.gif`,
                },
                {
                    id: 13,
                    link: `gifs/${this.langString()}/13.gif`,
                },
                {
                    id: 14,
                    link: `gifs/${this.langString()}/14.gif`,
                },
                {
                    id: 15,
                    link: `gifs/${this.langString()}/15.gif`,
                }
                ],
                downloadsLeaflets:[

                ],
            }
        },
        components:{
            VueperSlides,
            VueperSlide
        },
        metaInfo() {
            return {
                title: this.toLocal('header.home'),
                titleTemplate: '%s | European Smoke Alarm Day'
            }
        },
        methods:{

            langString(){
              return (this.$store.state.lang.toUpperCase() == 'CZ' ||this.$store.state.lang.toUpperCase() == 'ES' || this.$store.state.lang.toUpperCase() == 'EN') ? this.$store.state.lang.toUpperCase() : 'EN'
            },

            mailto() {
            window.location.href = "mailto:info@eurofsa.org";
            },

            downloadFile(file, linktext) {
            let link = document.createElement("a");
            link.setAttribute("download", linktext);
            link.href = file;
            document.body.appendChild(link);
            link.click();
            link.remove();
            },
            downloadLeaflet(leaflet) {
            let link = document.createElement("a");
            link.setAttribute("download", this.toLocal(leaflet.text) + '.pdf');
            link.href = leaflet.download_path;
            document.body.appendChild(link);
            link.click();
            link.remove();
            },
            goToGame(){
                let link = document.createElement("a");
                link.href = 'https://rauchmelder-lebensretter.de/120S-escape/?lang=en'
                link.setAttribute('target', '_blank')
                link.click();
            },
            openVideo(){
                let link = document.createElement("a");
                link.href = 'https://youtube.com/watch?time_continue=2&v=NDShJjSbA1Y&embeds_referring_euri=http%3A%2F%2Flocalhost%3A8081%2F&source_ve_path=Mjg2NjY'
                link.setAttribute('target', '_blank')
                link.click();
            },
            handleGlobalFocus(e) {
            // Only scroll if user is navigating with keyboard
            if (!this.$store.state.isKeyboardNavigating) return;
            
            // Tikriname, ar fokusas tikras (ne body, ne svg)
            const el = e.target;

            if (!el || el.tagName === "BODY" || el.tagName === "HTML") return;

            // Skrolinam į centrą, bet tik jei elementas matomas
            const rect = el.getBoundingClientRect();
            const visible =
              rect.top >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

            if (!visible) {
              const elementCenter = rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;
              window.scrollTo({
                top: elementCenter,
                behavior: "smooth",
              });
            }
          },
        },
          mounted() {
          // 👇 Pridedame globalų fokusavimo stebėjimą
          document.addEventListener("focusin", this.handleGlobalFocus);
        },
    }
</script>


<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

/* Reset heading tags to preserve existing styling */
h2.spain-title,
h2.info-title,
h2.title,
.game-container .title h2 {
  margin: 0;
  padding: 0;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

.top-section {
    display: flex;
    flex-direction: column;
    padding-top: 191px;
    @media (max-width: 1080px) {
      padding-top: 100px;
    }
    @media (max-width: 768px) {
      height: fit-content;
      padding-top: 20px;
    }
    .text {
    height: 100%;
    padding: 80px calc(min(80px, 5vw));
    padding-bottom: 100px;
    span {
        font-size: clamp(16px, 5vw, 24px);
    }
    }
  }
h2 {
font-size: clamp(36px, 5vw, 56px);
font-family: $semiBoldFont;
}
.red-circle {
position: absolute;
background: $mainColor;
z-index: -1;
right: -25vw;
bottom: 9vw;
width: 62vw;
height: 62vw;
border-radius: 50%;
}
.information-section{
    display: flex;
    flex-direction: column;
    background-color: #FBF3ED;
    .info-title{
        width: 100%;
        padding: 40px calc(min(80px, 5vw));
        font-size: clamp(24px, 2.5vw, 32px);
        display: flex;
        align-items: center;
        font-family: $semiBoldFont;
        @media(max-width: 768px){
          text-align: center;
        }
    }
}
.downloadables-container{
    display: flex;
    flex-wrap: wrap;
    padding: 60px calc(min(80px, 5vw));
    justify-content: center;
    align-items: center;
    gap: clamp(20px, 3vw, 40px);
    max-width: 100%;
    
    .downloadable {
        flex: 0 0 calc(33.333% - 30px);
        max-width: calc(33.333% - 30px);
        
        @media(max-width: 1024px){
            flex: 0 0 calc(50% - 30px);
            max-width: calc(50% - 30px);
        }
        
        @media(max-width: 768px){
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
    
    @media(max-width: 768px){
      flex-direction: column;
    }
}
.downloadable{
    min-height: 220px;
    min-width: 20%;
    background-repeat: no-repeat;
    background-size: cover;
    aspect-ratio: 16/9;
    position: relative;
    cursor: pointer;
    border-radius: 13px;
    overflow: hidden;
    .downloadable-title{
        left: 0;
        right: 0;
        width: auto;
        background-color: #1E1826;
        height: 60px;
        position: absolute;
        bottom: 0;
        border-radius: 0 0 13px 13px;
        box-sizing: border-box;
        color: white;
        display: flex;
        padding: 8px 16px;
        align-items: center;
        justify-content: space-between;
        font-size: clamp(12px, 2.5vw, 16px);
        @media(max-width: 768px){
          height: 50px;
        }
    }
    @media(max-width: 768px){
      min-height: 45vw;
    }
    // Video embed specific styles
    &.video-embed {
        .video-iframe-container {
            width: 100%;
            height: calc(100% - 60px);
            border-radius: 13px 13px 0 0;
            overflow: hidden;
            
            iframe {
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 13px 13px 0 0;
                
                @media (max-width: 768px) {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        
        &:focus-visible {
            outline: 2px solid #C0554B;
            border-radius: 13px;
        }
    }
}

.leaflet-container {
  padding: 20px calc(min(160px, 10vw));
  display: flex;
  flex-direction: column;
  justify-content: center;
  .leaflet-title{
    font-size: clamp(28px, 2.5vw, 32px);
    font-family: $semiBoldFont;
    margin-bottom: 8px;
  }
  &.red-bg{
    background: #C0554B; 
    margin-bottom: 0;
    .color-text{
      color: white;
    }
  }
  @media (min-height: 700px) {
    min-height: 500px;
  }
  .leaflets {
    display: flex;
    margin-top: 30px;
    gap:60px;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-bottom: 64px;
      gap: 16px;
    }
  }
  .leaflet {
    position: relative;
    background-repeat: no-repeat;
    background-position: top;
    height: 300px;
    width: 225px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
    background-size: 100%;
    @media (max-width: 1080px) {
      width: 180px;
      height: 250px;
    }
    @media (max-width: 768px) {
      margin: 20px 0;
      width: 45%;
      flex-grow: 1;
      height: 200px;
      background-size: cover;
    }
    .bottom-content {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #1e1826;
      color: white;
      padding: 10px;
      width: 100%;
      @media (max-width: 768px) {
        font-size: 14px;
        .download-btn {
          svg {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
    .leaflet-text {
      width: 100%;
    }
  }
  span {
    font-size: 16px;
  }
}

.gifs-container{
  display: flex;
  flex-direction: column;
  background-color: #fbf3ed;
  box-sizing: border-box;
  padding: 20px calc(min(160px, 10vw));
  gap: 26px;
  overflow: hidden;
  .title{
    width: 100%;
    font-size: clamp(28px, 2.5vw, 32px);
    font-size: 32px;
    line-height: 48px;
    color: #1E1826; 
    font-weight: 600;
    font-family: $semiBoldFont;
  }
  .inner-container{
    flex-grow: 1;
  }

  .section-container{
    height: 300px;
    @media(max-width:768px){
      flex-direction: column;
      align-items: center;
      width: 80%;
    }
  }
  .single-gif{
    user-select: none;
    width: 100%;
    height: 100%;
    border-radius: 13px;
  }
}
.button-container {
  display: flex;
  justify-content: flex-start;
  margin: 2rem 0px;
  @media(max-width: 1000px){
    justify-content: center;
  }
  button {
    max-width: 271px;
    width: 30%;
    transition: 0.25s;
    height: 56px;
  //   width: 80%;
    background: $mainColor;
    border-radius: 5px;
    border: none;
    color: white;
    font-family: $mainFont;
    font-size: clamp(12px, 1vw, 16px);
    cursor: pointer;
    &.secondary {
      background: $secondaryColor;
    }
    &:first-child {
      margin-right: 1rem;
    }
    transition: all 0.3s;
    &:hover {
      box-shadow: 0px 3px 10px 0px #0707073f;
      font-weight: 700;
    }
    &:active {
      box-shadow: 0px 2px 3px 0px #0000004f;
    }
  }
}

.game-container{
    padding: 40px calc(min(80px, 5vw));
    background-color: #DCE3EF;
    display: flex;
    flex-direction: column;
    gap: 20px;
    user-select: none;
    .title{
        font-size: clamp(24px, 2vw, 32px);
        width: 100%;
        padding: 0 28px;
        font-family: $semiBoldFont;
    }
    .inner-container{
        display: flex;
        width: 100%;
        gap: 28px;
        padding: 0 28px;
        z-index: 99;
        pointer-events: none;
        @media(max-width: 900px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .desc{
            pointer-events: none;
        }
        .game-image{
            cursor: pointer;
            transition: 0.25s;
            pointer-events: all;
            position: relative;
            &:hover{
                transform: scale(0.95)
            }
            .link-indicator {
                position: absolute;
                top: 10px;
                right: 10px;
                z-index: 2;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: #1E1826;
                background: rgba(255, 255, 255, 0.92);
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
                pointer-events: none;
            }
        }
    }
    .under-button{
        width: 100%;
        padding: 24px 28px;
        display: flex;
        gap: 12px;
        font-family: $semiBoldFont;
        font-size: clamp(20px, 2vw, 28px);
        background-color: #C0554B;
        align-items: center;
        border-radius: 10px;
        @media(max-width: 900px){
            margin-top: 0;
        }
        margin-top: -80px;
        cursor: pointer;
        color: white;
        transition: 0.25s;
        &:hover{
            background-color: #483A5B;
        }
        .link-indicator {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #1E1826;
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
            flex-shrink: 0;
            pointer-events: none;
            &.button {
                color: #C0554B;
                background: rgba(255, 255, 255, 0.98);
            }
        }
    }
}
.vueperslides__arrows .vueperslides__arrow{
  background-color: red;
  svg{
    @media(max-width: 768px){
      width: 20px;
    }
  }
}

.information-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DCE3EF;
    gap: clamp(36px, 5vh, 60px);
    padding: 80px calc(min(80px, 5vw));
    .info-title{
      font-size: clamp(36px, 2.5vw, 48px);
    }
    &.webinar{
      background-color: #C0554B;
    }
  }
  
  .spain-container2 {
    width: 100%;
    display: flex;
    background-color: #DCE3EF;
    box-sizing: border-box;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &.webinar{
      background-color: #C0554B;
      .title-container{
        color: #ffffff;
        .spain-title{
          color: #ffffff;
        }
        .title-under{
          color: #ffffff;
        }
      }
      .video-row{
        .video-title{
          color: #ffffff;
        }
        .video-url{
          color: #ffffff;
        }
      }
    }
    &.webinar{
      .video-row{
        align-items: flex-start;
        .section-container{
          .title-under{
            color: #ffffff;
            width: 100%;
            @media(max-width: 1000px){
                text-align: center;
            }
          }
        }
          @media(max-width: 1280px){
            flex-wrap: wrap;
        }
      }

      .download{
        height: 100%;
        min-height: 180px;
        display: flex;
        gap: 12px;
        flex-direction: column;
        width: 30%;
        justify-content: center;
        @media(max-width: 1280px){
          width: 33%;
        }
        .video-title {
        height: 15%;
        width: 100%;
        font-size: clamp(18px, 1.2vw, 24px);
        line-height: 32px;
        color: #1E1826;
        font-family: $semiBoldFont;
        text-align: start;
        color: white;
        @media (max-width: 1080px) {
          font-size: clamp(14px, 1.2vw, 18px);
        }
        @media (max-width: 768px) {
          width: 95%;
          text-align: center;
        }
        }
        @media(max-width: 1000px){
          width: 50%;
        }
        @media(max-width: 768px){
          width: 100%;
        }
        .brochure-container {
          height: 100%;
          width: 98%;
          display: flex;
          flex-direction: column;
          @media (max-width: 768px) {
            margin: 0;
            width: 100%;
          }
          @media(max-width: 1280px){
            width: 90%
          }
          @media(max-width: 1000px){
            width: 100%;
            align-items: center;
          }
        .title {
          height: 15%;
          padding: 20px 0;
          width: 100%;
          font-size: clamp(18px, 1.2vw, 24px);
          line-height: 32px;
          color: white;
          font-family: $semiBoldFont;
          text-align: start;
          @media (max-width: 1080px) {
            font-size: 18px;
            font-size: clamp(16px, 1.2vw, 18px);
          }
          @media (max-width: 768px) {
            width: 98%;
            text-align: center;
          }
        }
        .leaflet {
          position: relative;
          background-position: top;
          min-height: 180px;
          width: 100%;
          aspect-ratio: 400 / 284;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          max-width: 25rem;
          @media (max-width: 1000px) {
            width: 100%;
            min-height: 400px;
          }
          @media(min-width: 1280px){
            min-height: 285px;
          }
          @media(max-width: 1280px){
            min-height: 266px;
          }
          @media(max-width: 768px){
            min-height: 293px;
          }
          .bottom-content {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: #1e1826;
            color: white;
            padding: 10px;
            width: auto;
            border-radius: 0 0 10px 10px;
            box-sizing: border-box;
            gap: 12px;
          }
          .leaflet-text {
            flex: 1 1 auto;
            line-height: 1.2;
          }
          .download-btn {
            flex: 0 0 auto;
            svg {
              display: block;
            }
          }
        }
        span {
          font-size: 16px;
        }
      }
      }
    }
    .section-container {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 30%;
  
      @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .video-container-with-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      gap: 12px;
      @media (max-width: 1280px) {
        width: 95%;
      }
      @media (max-width: 768px) {
        margin: 0;
        width: 100%;
      }
      .video-title {
        height: 15%;
        width: 100%;
        font-size: clamp(18px, 1.2vw, 24px);
        line-height: 32px;
        color: #1E1826;
        font-family: $semiBoldFont;
        text-align: start;
        @media (max-width: 1080px) {
          font-size: clamp(14px, 1.2vw, 18px);
        }
        @media (max-width: 768px) {
          width: 95%;
          text-align: center;
        }
      }
      .video-url {
        font-size: clamp(12px, 2.5vw, 16px);
        line-height: 24px;
        color: #1E1826;
        margin-top: 5px;
        white-space: nowrap;
        width: 100%;
        @media (max-width: 768px) {
          width: 95%;
          text-align: center;
          white-space: initial;
        }
        @media (max-width: 960px) {
          white-space: break-spaces;
          text-align: center;
          font-size: 14px;
        }
      }
      .video {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height: 180px;
        border-radius: 10px;
        @media (min-width: 2300px) {
          width: 80%;
        }
        iframe {
          border-radius: 10px;
          min-height: 285px;
        }
      }
    }
    .title-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
      padding: 10px 0;
      @media (max-width: 1080px) {
        width: 40%;
        margin: auto 0;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      .title-under{
        color: #1E1826;
        @media(max-width: 768px){
          text-align: center;
          width: 100%;
        }
      }
      .spain-title {
        font-size: clamp(26px, 2.5vw, 32px);
        font-family: $semiBoldFont;
        line-height: 48px;
        color: #1E1826;
        width: 100%;
        height: 100%;
        margin-right: calc(min(20px, 7vw));
        @media (max-width: 1080px) {
          font-size: 24px;
          margin: 0;
          margin-right: 8px;
          line-height: 36px;
        }
        @media (max-width: 768px) {
          margin: 0;
          text-align: center;
        }
      }
    }
    .video-row{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      gap: clamp(20px, 3vw, 40px);
      @media(max-width: 768px){
        flex-direction: column;
      }
    }
  }
  
/* Fokusavimo stiliai */
[tabindex="0"]:focus-visible,
button:focus-visible,
a:focus-visible,
:deep(.vueperslides__arrow:focus-visible) {
  outline: 3px solid #000000ff; /* kontrastingas apvadas */
  outline-offset: 4px;
  border-radius: 8px;
}

/* Specifiškai Vueper slides rodyklėms */
:deep(.vueperslides__arrow) {
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

:deep(.vueperslides__arrow:focus-visible) {
  box-shadow: 0 0 0 4px rgba(10, 10, 10, 0.5);
  transform: scale(1.1);
}
</style>
