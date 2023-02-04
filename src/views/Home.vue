<template>
  <div class="home">
    <div class="splash-home" id="top">
      <intersection-observer
        sentinal-name="sentinal-name"
        @on-intersection-element="onIntersectionElement"
      ></intersection-observer>
      <SplashZone id="splash" />
    </div>

    <!-- <ToolBox /> -->

    <div class="port-container_home" id="work">
      <intersection-observer
        sentinal-name="sentinal-name"
        @on-intersection-element="onIntersectionElement1"
      ></intersection-observer>
      <h2>My Work</h2>
      <p>
        I've worked on many projects from branding, print, UX/UI Design, web
        development, motion graphics, video, and more.
      </p>

      <PortCarousel />
      <div class="section-buttons">
        <button class="scrollDown bounce" @click="scrollToElement('#about')">
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23.17157 13.94712"
          >
            <path
              d="M3.11289,13.655L11.58579,5.20057l8.47289,8.45443c.39065,.3898,1.02322,.38945,1.41344-.00077l1.40656-1.40656c.39052-.39052,.39052-1.02369,0-1.41421L12.37009,.32487c-.43316-.43316-1.13545-.43316-1.56861,0L.29289,10.83346c-.39052,.39052-.39052,1.02369,0,1.41421l1.40656,1.40656c.39022,.39022,1.02279,.39057,1.41344,.00077Z"
            />
          </svg>
        </button>
        <router-link class="link link-btn splash-btn" to="/portfolio">
          <div class="nav-link_text">See my work</div>
        </router-link>
      </div>
    </div>
    <div class="about-home" id="about">
      <intersection-observer
        sentinal-name="sentinal-name"
        @on-intersection-element="onIntersectionElement2"
      ></intersection-observer>
      <h2>About me</h2>

      <div class="about-dets">
        <div class="about-dets_content">
          <p>
            I have been a Graphic and UX/UI Web Designer for 6 years while
            freelancing and working towards a Master's.
          </p>
        </div>
        <ToolBox />
      </div>
      <div class="section-buttons">
        <button class="scrollDown bounce" @click="scrollToElement('#foot')">
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23.17157 13.94712"
          >
            <path
              d="M3.11289,13.655L11.58579,5.20057l8.47289,8.45443c.39065,.3898,1.02322,.38945,1.41344-.00077l1.40656-1.40656c.39052-.39052,.39052-1.02369,0-1.41421L12.37009,.32487c-.43316-.43316-1.13545-.43316-1.56861,0L.29289,10.83346c-.39052,.39052-.39052,1.02369,0,1.41421l1.40656,1.40656c.39022,.39022,1.02279,.39057,1.41344,.00077Z"
            />
          </svg>
        </button>
        <router-link class="link link-btn splash-btn" to="/about">
          <div class="nav-link_text">Learn about me</div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <Foot id="foot" />
      <intersection-observer
        sentinal-name="sentinal-name"
        @on-intersection-element="onIntersectionElement3"
      ></intersection-observer>
      <div class="bot-sp"></div>
    </div>

    <!-- <div class="scrollers">
      <router-link to="#splash" :class="{ active: isActive }"> </router-link>
      <router-link to="#work" :class="{ active: isActive1 }"> </router-link>
      <router-link to="#about" :class="{ active: isActive2 }"> </router-link>
      <router-link to="#foot" :class="{ active: isActive3 }"> </router-link>
    </div> -->
    <!-- <div class="scrollers-b">
      <router-link
        to="#splash"
        :class="{ active: isActive }"
        @click="
          scrollToElement('#splash');
          myFilter();
        "
      >
      </router-link>
      <router-link
        to="#work"
        :class="{ active: isActive1 }"
        @click="
          scrollToElement('#work');
          myFilter1();
        "
      >
      </router-link>
      <router-link
        to="#about"
        :class="{ active: isActive2 }"
        @click="
          scrollToElement('#about');
          myFilter2();
        "
      >
      </router-link>
      <router-link
        to="#foot"
        :class="{ active: isActive3 }"
        @click="
          scrollToElement('#foot');
          myFilter3();
        "
      >
      </router-link>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src

import SplashZone from "@/components/SplashZone.vue";
import data from "../data/data";
import PortCarousel from "@/components/UI/PortCarousel.vue";
import ToolBox from "@/components/ToolBox.vue";
import Foot from "@/components/Footer.vue";
import IntersectionObserver from "@/components/IntersectionObserver.vue";

export default {
  name: "Home",
  components: {
    SplashZone,
    PortCarousel,
    Foot,
    IntersectionObserver,
    ToolBox,
  },
  data() {
    return {
      filteredPorts: data,
      isActive: false,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isIntersectingElement: false,
      isIntersectingElement1: false,
      isIntersectingElement2: false,
      isIntersectingElement3: false,
    };
  },
  methods: {
    scrollToElement(id) {
      // takes input id with hash
      // eg. #cafe-menu
      const el = document.querySelector(id);
      el &&
        el.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
    },
    myFilter() {
      // this.isIntersectingElement = true;
      this.isActive = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
    },
    myFilter1() {
      this.isActive = false;
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
    },
    myFilter2() {
      this.isActive = false;
      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
    },
    myFilter3() {
      this.isActive = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = true;
    },
    onIntersectionElement(value) {
      this.myFilter();
      this.isIntersectingElement = value;
    },
    onIntersectionElement1(value) {
      this.myFilter1();
      this.isIntersectingElement1 = value;
    },
    onIntersectionElement2(value) {
      this.myFilter2();
      this.isIntersectingElement2 = value;
    },
    onIntersectionElement3(value) {
      this.myFilter3();
      this.isIntersectingElement3 = value;
    },
  },
};
</script>
<style>
#foot {
  height: 99vh;
}
.splash-home {
  height: 100vh;
}
.bot-sp {
  height: 1vh;
  background: var(--menuBack);
}
.home::-webkit-scrollbar {
  display: none;
}
.home {
  height: 100vh;
  overflow-y: auto;
  -ms-scroll-snap-type: y mandatory;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.port-container_home {
  margin: 40px 0 120px;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.port-container_home h2 {
  padding: 30px 0 10px;
}
.about-home {
  margin: 0px 40px 0 120px;
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.carousel__slide:hover {
  transition: var(--transition);
  transform: none;
  opacity: 1;
}
.scrollers {
  position: fixed;
  top: calc(50vh - 40px);
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 130;
}
.scrollers-b {
  display: none;
}
.scrollers a {
  width: 10px;
  height: 10px;
  margin: 5px 12px;
  background: var(--heavy);
  border-radius: 100%;
}
/* .scrollers a:hover {
  background: var(--text);
} */
.scrollers a:hover {
  cursor: default;
}
.scrollers .active {
  background: var(--text);
}
.about-dets {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.about-dets p {
  margin-right: 20px;
}
.section-buttons {
  display: flex;
  align-items: flex-end;
  margin: 15px 0 25px;
}
.section-buttons a {
  margin: 0 20px;
}
@media (max-width: 960px) {
  .scrollers a {
    /* display: none; */
    /* left: 1px; */
    margin: 5px 5px;
  }
  .about-dets {
    flex-direction: column;
  }
  .port-container_home,
  .about-home {
    margin: 0 50px 0 20px;
  }
}
@media (max-width: 600px) {
  .scrollers {
    display: none;
  }
  .port-container_home,
  .about-home {
    margin: 0 20px 0 20px;
  }
}
@media (max-height: 450px) {
  .about-dets {
    flex-direction: row;
  }
}
</style>
