<template>
  <div class="link_wrapper">
    <Logo />

    <div class="links">
      <router-link @click="scrollToTop()" class="link link-btn" to="/">
        <div class="nav-link_text">Home</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="M31.14642,16.14641,16.70709,1.70708a1,1,0,0,0-1.41419,0L10,7V4.5A.5.5,0,0,0,9.5,4h-3a.5.5,0,0,0-.5.5V11L.85357,16.14641A.5.5,0,0,0,1.20709,17H5V32h8V23h6v9h8V17H30.7929A.5.5,0,0,0,31.14642,16.14641Z"
          />
        </svg>
      </router-link>
      <router-link @click="scrollToTop()" class="link link-btn" to="/portfolio">
        <div class="nav-link_text">Portfolio</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="M28.4497,8H23V7.55029A3.55032,3.55032,0,0,0,19.4497,4H12.55035A3.55033,3.55033,0,0,0,9,7.55029V8H3.55029A3.55032,3.55032,0,0,0,0,11.55029V15.5H7v-.96A.54.54,0,0,1,7.54,14h.92a.54.54,0,0,1,.54.54v.96H23v-.96a.54.54,0,0,1,.54-.54h.92a.54.54,0,0,1,.54.54v.96h7V11.55029A3.55032,3.55032,0,0,0,28.4497,8ZM11,7.55029A1.55207,1.55207,0,0,1,12.55035,6H19.4497A1.552,1.552,0,0,1,21,7.55029V8H11Z"
          />
          <path
            d="M25,17.46a.54.54,0,0,1-.54.54h-.92a.54.54,0,0,1-.54-.54V16.5H9v.96a.54.54,0,0,1-.54.54H7.54A.54.54,0,0,1,7,17.46V16.5H0V28.44965A3.55033,3.55033,0,0,0,3.55029,32H28.4497A3.55033,3.55033,0,0,0,32,28.44965V16.5H25Z"
          />
        </svg>
      </router-link>
      <router-link @click="scrollToTop()" class="link link-btn" to="/about">
        <div class="nav-link_text">About</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="M22.38942,17.33594a8.99411,8.99411,0,0,1-12.77881,0,16.08389,16.08389,0,0,0-7.45264,6.664,15.97507,15.97507,0,0,0,27.68408,0A16.08387,16.08387,0,0,0,22.38942,17.33594Z"
          />
          <circle cx="16" cy="11" r="7.2" />
        </svg>
      </router-link>
      <router-link @click="scrollToTop()" class="link link-btn" to="/contact">
        <div class="nav-link_text">Contact</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="M28.4497,2H3.55028A3.55032,3.55032,0,0,0,0,5.55029V22.44971A3.55032,3.55032,0,0,0,3.55028,26H20.60351c.0166.01917.02533.041.04376.05945l5.64563,5.64563A1,1,0,0,0,28,30.998V26h.44971A3.55032,3.55032,0,0,0,32,22.44971V5.55029A3.55032,3.55032,0,0,0,28.4497,2ZM4,8.5H24v1H4Zm16,11H4v-1H20Zm8-5H4v-1H28Z"
          />
        </svg>
      </router-link>
      <!-- <router-link  class="link link-btn" to="/carousel">
        <div class="nav-link_text">Carousel</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.4497,2H3.55028A3.55032,3.55032,0,0,0,0,5.55029V22.44971A3.55032,3.55032,0,0,0,3.55028,26H20.60351c.0166.01917.02533.041.04376.05945l5.64563,5.64563A1,1,0,0,0,28,30.998V26h.44971A3.55032,3.55032,0,0,0,32,22.44971V5.55029A3.55032,3.55032,0,0,0,28.4497,2ZM4,8.5H24v1H4Zm16,11H4v-1H20Zm8-5H4v-1H28Z"/></svg>
      </router-link> -->
    </div>

    <theme-button class="theme-desktop" />
    <!-- 
      planning to add a menu toggle 
      <button>Hey</button> 
    -->
  </div>
</template>
<script>
import Logo from "@/components/Logo.vue";
import ThemeButton from "@/components/ThemeButton.vue";
// import Burger from "@/components/menu/Burger.vue";

export default {
  components: {
    Logo,
    ThemeButton,
    // SocialLinks
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style>
@import "../styles/Burger.css";
@import "../styles/SideBar.css";
@import "../styles/NavBar.css";
@import "../styles/ThemeButton.css";
</style>
