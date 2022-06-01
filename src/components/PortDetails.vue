<template>
  <div id="top">
    <div v-if="port" class="port-wrapper">
      <div class="det-splash" :class="{ hideDetSplash: isActive }">
        <img
          v-if="port.img"
          :src="port.img"
          v-bind:alt="port.title"
          v-bind:class="port.imgDim"
        />

        <div class="vid-wrapper">
          <video
            :poster="port.vidPoster"
            ref="myvideo"
            v-if="port.vid"
            loop
            controls
            :src="port.vid"
            v-bind:alt="port.title"
            @click="playBtn"
            v-bind:class="port.imgDim"
          ></video>
          <div
            class="playpause"
            v-if="port.vid && !isHidden"
            @click="
              () => {
                play();
                playBtn();
              }
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18.43288 20.80426"
            >
              <g id="a" />
              <g id="b">
                <g id="c">
                  <path
                    class="d"
                    d="M17.64931,9.04496L2.35069,.21229C1.30594-.39089,0,.36309,0,1.56946V19.23479c0,1.20637,1.30594,1.96036,2.35069,1.35717l15.29863-8.83267c1.04475-.60319,1.04475-2.11115,0-2.71434Z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <!-- header -->
      <div class="det-header">
        <div>
          <h3 class="port-title">{{ port.title }}</h3>
          <!-- <router-link class="back-link" to="/portfolio">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.97058 20"><g id="a"/><g id="b"><g id="c"><polygon class="d" points="16.97058 8.48529 8.48529 0 0 8.48529 5.24298 8.48529 5.24298 20 11.24298 20 11.24298 8.48529 16.97058 8.48529"/></g></g></svg>
            Back
          </router-link> -->
          <p class="portDate">{{ port.date }}</p>
        </div>

        <BackButton />
      </div>

      <!-- detail wrapper -->
      <div class="det-wrapper">
        <!-- content -->
        <div class="left-wrapper">
          <p class="portLink-header" v-if="port.links">Links</p>
          <div class="project-link_wrapper" v-if="port.links">
            <a
              class="web-project_link"
              v-for="(link, index) in port.links"
              :key="index"
              v-bind:href="link.link"
              target="_blank"
              rel="noreferrer noopener"
            >
              {{ link.linkDescription }}
            </a>
          </div>
          <div class="port_descr">
            <p v-for="item in port.description" :key="item">{{ item }}</p>
          </div>
        </div>

        <!-- visuals -->
        <div class="right-wrapper">
          <!-- <video
          v-if="port.vid"
          loop
          
          controls
          :src="port.vid"
          v-bind:alt="port.title"
          ></video> -->
          <!-- <img
            v-if="port.img"
            :src="'https://davyjonesdesign.github.io/data-for-axios/' + port.img"
            v-bind:alt="port.title"
          /> -->

          <!-- image gallery -->
          <div class="gallery-wrapper" v-if="port.imgs">
            <!-- <div class="flex-scroll">
              <div
                v-for="(img, index) in port.imgs"
                :key="index"
                class="gallery-img"
                @click="() => showImg(index)"
                >
                <img :src="img.src" v-bind:style="{ width: img.width, height: img.height }"/>
              </div>
            </div> -->

            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide
                v-for="(img, index) in port.imgs"
                :key="index"
                class="gallery-img"
                @click="() => showImg(index)"
              >
                <img :src="img.src" v-bind:class="img.dimension" />
                <span class="expand">Expand</span>
              </slide>

              <!-- addons -->
              <template #addons>
                <navigation v-if="port.imgs.length > 1" />
              </template>
            </carousel>
          </div>
        </div>
        <vue-easy-lightbox
          scrollDisabled
          escDisabled
          moveDisabled
          :visible="visible"
          :imgs="port.imgs"
          :index="index"
          @hide="handleHide"
        ></vue-easy-lightbox>
      </div>
    </div>
    <intersection-observer
      sentinal-name="sentinal-name"
      @on-intersection-element="onIntersectionElement1"
    ></intersection-observer>

    <Foot id="foot" />
    <intersection-observer
      sentinal-name="sentinal-name"
      @on-intersection-element="onIntersectionElement"
    ></intersection-observer>
  </div>
</template>

<script>
import data from "../data/data";
import Foot from "../components/Footer.vue";
import VueEasyLightbox from "vue-easy-lightbox";
import BackButton from "@/components/BackButton.vue";
import IntersectionObserver from "@/components/IntersectionObserver.vue";

// import PortService from "@/services/PortService.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    VueEasyLightbox,
    Carousel,
    Slide,
    Navigation,
    BackButton,
    Foot,
    IntersectionObserver,
  },
  props: ["alias"],
  data() {
    return {
      port: null,
      visible: false,
      index: 0, // default: 0
      // corousel
      isActive: false,
      isIntersectingElement: false,
      settings: {
        itemsToShow: 1,
        wrapAround: true,
        snapAlign: "center",
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        760: {
          itemsToShow: 1,
        },
        1040: {
          itemsToShow: 1,
        },
        1440: {
          itemsToShow: 1,
        },
      },
      isPlaying: false,
      isHidden: false,
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    play() {
      this.$refs.myvideo.play();
      this.isPlaying = true;
    },
    stop() {
      // this.$refs.myvideo.pause()
      this.isPlaying = false;
    },
    playBtn() {
      this.isHidden = !this.isHidden;
    },
    onIntersectionElement(value) {
      this.isActive = !this.isActive;
      this.isIntersectingElement = value;
    },
    onIntersectionElement1(value) {
      this.isActive = !this.isActive;
      this.isIntersectingElement = value;
    },
    onIntersectionElement2(value) {
      this.isActive = !this.isActive;
      this.isIntersectingElement = value;
    },
    onIntersectionElement3(value) {
      this.isActive = !this.isActive;
      this.isIntersectingElement = value;
    },
  },
  created() {
    // PortService.getPort(this.id)
    //   .then((response) => {
    //     this.port = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const alias = this.$route.params.alias;
    const port = data.find((el) => el.alias === alias);
    if (!port) {
      return this.$router.push("404");
    }
    this.port = port;
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.det-splash {
  /* background: var(--off); */
  padding: 30px 0;
  margin: 0 auto;
  width: calc(100vw - 120px);
  display: flex;
  /* align-content: center; */
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 0;
  opacity: 1;
  transition: var(--transition);
}
.det-splash img,
.det-splash video {
  /* max-width: 960px; */
  /* max-height: 400px; */
  /* width: 70vw; */
  /* width: auto; */
  /* box-shadow: var(--shadow); */
  border: 2px solid var(--light);
  border-radius: var(--border-radius);
}
.hideDetSplash {
  opacity: 0;
}
.vid-wrapper {
  position: relative;
}
.playpause {
  width: 100px;
  height: 100px;
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  border-radius: 100px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  margin: auto;
  cursor: pointer;
  background: var(--menuBack);
  transition: var(--transition-fastest);
  /* opacity: .75; */
}
.playpause svg {
  padding-left: 10px;
  width: 60px;
  transition: var(--transition-fastest);
  fill: var(--heavy);
}
.playpause:hover {
  background: var(--menuBack);
  box-shadow: var(--shadow);
}
.playpause:hover svg {
  transform: scale(1.1);
}
.port-wrapper {
  margin: 0 0 0 120px;
  /* width: 100vw; */
  background: var(--light);
  /* min-height: 80vh; */
}
.det-header {
  display: flex;
  position: sticky;
  top: 72px;
  align-items: flex-start;
  justify-content: space-between;
  margin: 87vh auto 0px;
  padding: 40px 30px 20px 20px;
  /* max-width: 960px; */
  z-index: 1;
  background: var(--light);
}
.port-title {
  text-transform: capitalize;
}
/* .back-link {
  margin: 0 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--heavy);
  transition: var(--transition);
}
.back-link svg {
  fill: var(--heavy);
  transform: rotate(-90deg);
  width: 32px;
  padding: 5px 7px;
  margin-right: 5px;
  border-radius: 100%;
  border: 1px solid var(--heavy);
}
.back-link:hover svg {
  background: var(--heavy);
  transform: scale(1.25);
  transform: rotate(-90deg);
  fill: var(--light);
  transition: var(--transition-fastest);
  cursor: pointer;
}
.back-link:hover {
  transform: scale(1.05);
  transition: var(--transition-fastest);
  cursor: pointer;
} */
/* .det-wrapper video, .det-wrapper img {
  width: 100%;
} */
.det-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  /* padding: 0px 60px; */
  background: var(--light);
  z-index: 1;
  /* margin: auto; */
  /* max-height: 67vh; */
  /* width: calc(100vw - 14px); */
  /* padding-bottom: 20px; */
  min-height: 72vh;
}
.left-wrapper {
  min-width: 40vw;
  z-index: 1;
  background: var(--light);
  /* min-height: 70vh; */
  padding: 0px 30px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.portLink-header {
  margin: 0 0 5px;
  color: var(--outline);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 14px;
  font-weight: 700;
}
.portDate {
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 14px;
  color: var(--outline);
  text-transform: uppercase;
  padding-left: 10px;
}
.right-wrapper {
  background: var(--light);
  z-index: 1;
  width: 50vw;
  padding: 0 30px 20px 0;
}
.project-link_wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px 0 20px 0px;
}
.web-project_link {
  display: flex;
  padding: 10px 12px;
  margin: 0 5px 5px 0;
  width: auto;
  background: var(--heavy);
  align-items: center;
  justify-content: center;
  color: var(--light);
  border: 2px solid var(--heavy);
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  /* text-transform: uppercase; */
  /* letter-spacing: 1px; */
  /* font-weight: 700; */
}

.web-project_link:hover {
  background: var(--light);
  border-color: var(--heavy);
  color: var(--text);
}
.port_descr {
  /* display: flex; */
  width: 100%;
  /* justify-content: space-between; */

  /* margin: 20px 0; */
}
.port_descr p {
  /* width: 45%; */
}
.gallery-wrapper {
  /* display: flex; */
  /* overflow: auto; */
  padding: 0px 30px;
  height: 100%;
  background: var(--off);
  padding: 130px 20px;
}
.flex-scroll {
  padding: 30px 20px 20px;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}
.gallery-img img {
  padding: 5px;
}

.det-wrapper video {
  width: 40vw;
}
.landscape {
  width: 40vw;
}
.portrait {
  width: 13vw;
}
.square {
  width: 40vw;
}
.rect {
  width: 70vw;
}
.expand {
  transition: var(--transition-faster);
  position: absolute;
  display: none;
  font-size: 1.5rem;
  color: var(--text);
  border: 2px solid var(--heavy);
  background: var(--light);
  padding: 5px 10px;
  border-radius: 5px;
}

@media (max-width: 960px) {
  .port-wrapper {
    margin: 0;
  }
  .det-splash {
    left: 0;
    right: 0;
  }
}
@media (max-width: 600px) {
  .det-header {
    margin-top: 50vh;
  }
  .det-wrapper {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
  .right-wrapper {
    width: 100vw;
    align-self: center;
  }
  .gallery-wrapper {
    width: 100vw;
    padding: 30px 20px;
  }
  .landscape,
  .square,
  .rect {
    width: 85vw;
  }
  .portrait {
    width: 30vw;
  }
}
</style>
