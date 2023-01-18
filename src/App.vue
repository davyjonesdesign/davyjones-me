<template>
  <div class="wrapper-content" :class="{ overflow: isActive }">
    <PreLoader />

    <!-- <SocialLinks /> -->
    <VueCanvas />
    <VueCanvasLight />
    <div>
      <section>
        <div class="">
          <div class="view-sm isCenter">
            <router-view />
          </div>
        </div>
      </section>
    </div>

    <NavBar />
    <Burger />
    <!-- <Foot /> -->
  </div>
</template>
<script>
// import Sidebar from '@/components/menu/Sidebar.vue';
import Burger from "@/components/menu/Burger.vue";
import NavBar from "@/components/NavBar.vue";
// import Foot from "@/components/Footer.vue";
import VueCanvas from "./components/canvas.component";
import VueCanvasLight from "./components/canvas.component.light";
import PreLoader from "@/components/PreLoader.vue";
// import Logo from "@/components/Logo.vue";
// import SocialLinks from "@/components/SocialLinks.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    // Foot,
    Burger,
    VueCanvas,
    VueCanvasLight,
    PreLoader,
    // Sidebar
  },
  data() {
    return {
      isActive: true,
    };
  },
  mounted() {
    this.shrinkHeight();
  },
  methods: {
    shrinkHeight() {
      setTimeout(() => {
        this.isActive = false;
      }, 3000);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}
:root {
  --text: #1d1d1d;
  --btn-text: #e9e9e9;
  --heavy: #1263ae;
  --heavy-op: #00488a;
  --light: #e2e8ff;
  --light-op: #bac3e7;
  --backdrop: #fffaffbd;
  --menuBack: #ffffffb2;
  --off: #b8d9ff;
  --outline: #a9b1c4;
  --outline-light: #e2e7f1;
  --nav-back: var(--heavy);
  --error-light: #ffdada;
  --error-dark: #c91717;
  --nav-item_shadow: var(--heavy);
  --nav-item_outline: var(--text);
  --logo: var(--heavy);
  --logo-reverse: var(--btn-text);
  --shadow: 0px 0px 10px 0 var(--heavy-op);
  --element-size: 4rem;
  --border-radius: 0.75rem;
}
:root.dark-theme {
  --text: #e9e9e9;
  --btn-text: #e9e9e9;
  --heavy: #5e9cff;
  --heavy-op: #9fc4fc;
  --menuBack: #00000080;
  --light: #1c2755;
  --light-op: #26346d;
  --backdrop: #1f1d1fbf;
  --off: #1d1d1d;
  --outline: #454b59;
  --outline-light: #141b25;
  --error-light: #540000;
  --error-dark: #ffa1a1;
  --nav-back: var(--light);
  --nav-item: var(--heavy);
  --nav-item_shadow: var(--heavy);
  --nav-item_outline: var(--text);
  --logo: var(--text);
  --logo-reverse: var(--heavy);
  --shadow: 0px 0px 10px 0 var(--heavy-op);
}
#vue-canvas {
  display: none;
}
#vue-canvas-light {
  display: inline;
}
.dark-theme #vue-canvas {
  display: inline;
}
.dark-theme #vue-canvas-light {
  display: none;
}
html {
  --transition: all 0.3s ease-in-out 0s;
  --transition-faster: all 0.2s ease-in-out 0s;
  --transition-fastest: all 0.1s ease-in-out 0s;
  --shadow-inset: inset 1px 5px 6px 0 rgba(0, 0, 0, 0.1);
  --shadow-hover: -2px 6px 8px rgba(0, 0, 0, 0.65);
  --shadow-tab: -1px -5px 6px 0 rgba(0, 0, 0, 0.2);
  --shadow-tabHover: -2px -8px 8px 0 rgba(0, 0, 0, 0.65);
  --shadow-focus: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  --shadow-dark: 0 0px 15px rgba(0, 0, 0, 0.75);
  --shadow-text: 1px 1px 5px rgba(0, 0, 0, 0.6);
  --shadow-subtle-dl: -2px 2px 6px rgba(0, 0, 0, 0.35);
  --shadow-subtle-dr: 2px -2px 6px rgba(0, 0, 0, 0.35);
  --focus-background: rgba(255, 255, 255, 0.85);

  box-sizing: border-box;
  scrollbar-width: none;
  scroll-behavior: smooth;
  color: rgba(255, 255, 255, 1);
  background: var(--off);
}
html::-webkit-scrollbar {
  display: none;
}
/* canvas {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
} */
#app {
  position: absolute;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100vw;
  overflow: hidden;
}
.overflow {
  height: 100vh;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li {
  color: var(--text);
  letter-spacing: 0;
  font-family: "Raleway", sans-serif;
}
p,
table,
ul,
ol,
li {
  font-family: "Lato", sans-serif;
  color: var(--text);
}
h1 {
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 20px;
  letter-spacing: 2px;
}
h2 {
  font-weight: 500;
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 20px;
}
h3 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
h4 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: var(--heavy);
}
h5 {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 10px;
}
h6 {
  font-size: 0.75rem;
  font-weight: 200;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
p {
  margin: 0 0 15px;
  font-weight: 300;
  font-size: 1rem;
  line-height: 22px;
  color: var(--text);
  max-width: 600px;
}
a {
  border: none;
  font-weight: 600;
  letter-spacing: 0.25px;
  font-family: "Lato", sans-serif;
  text-decoration: none;
}
input,
label,
textarea {
  font-family: "Lato", sans-serif;
}
ul,
ol {
  padding: 5px 0 10px 20px;
  font-weight: 300;
  /* line-height: 1.5rem; */
}
li {
  padding-bottom: 5px;
}

/* .link svg {
  width: 30px;
  fill: var(--heavy);
  transition: var(--transition);
} */

.wrapper-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.carousel__track {
  align-items: center;
  /* height: 0vh; */
}
.carousel__prev {
  left: 10px;
  height: 40px;
  width: 40px;
}
.carousel__next {
  right: 10px;
  height: 40px;
  width: 40px;
}

/* break */

.container {
  max-width: 1280px;
  margin: 30px auto;
}
@media (max-width: 1440px) {
  .container {
    max-width: 960px;
  }
}
@media (max-width: 1040px) {
  .container {
    max-width: 700px;
  }
}
@media (max-width: 700px) {
  .container {
    max-width: 95vw;
  }
}
.carousel button {
  background: var(--light);
  border: 2px solid var(--heavy);
  transition: var(--transition-faster);
}
.carousel button svg {
  fill: var(--text);
}
.carousel button:hover {
  background: var(--off);
  scale: 1.25;
}
.carousel__next:hover {
  background: var(--off);
  transform: translate(16px, -16px);
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

.splash-btn {
  min-width: 300px;
  background: var(--light);
  color: var(--light);
  border: 2px solid var(--heavy);
  margin: 20px 0 0;
  padding: 20px;
}

.splash-btn .nav-link_text {
  font-weight: 800;
  height: 100%;
  color: var(--text);
  /* font-weight: 800; */
  opacity: 1;
}
.splash-btn:hover {
  background: var(--off);
  color: var(--heavy);
  border: 2px solid var(--text);
}
.splash-btn:hover .nav-link_text {
  height: 100%;
  font-weight: 800;
  color: var(--text);
}

@media (max-width: 960px) {
  .link_wrapper {
    display: none;
  }
  .links {
    display: none;
  }
  .theme-desktop {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
  #burger {
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    align-items: center;
    padding: 7px 10px 10px;
    margin: 10px;
    height: auto;
    z-index: 100;
    background: var(--light);
    border-radius: 5px;
    border: 2px solid var(--heavy);
    transition: var(--transition);
  }
  #burger:hover {
    border-color: var(--text);
    transform: translate(3px, -3px);
    background: var(--off);
    box-shadow: -3px 3px 0 var(--nav-item_shadow);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin-bottom: 10px;
  }
}
@media (max-height: 450px) {
  .port-container_home h1 {
    margin: 0 0 10px;
  }
  .port-container_home p {
    /* font-size: 1.5rem; */
    margin: 0;
  }
  .port-container_home .splash-btn {
    margin: 0%;
  }
  .about-home .table-slim {
    margin: 0;
  }
  .about-home h1 {
    margin: 0 0 10px;
  }
  .about-home table {
    margin: 0 5px;
    border-spacing: 10px;
  }
  .about-home td {
    padding: 2px;
  }
  .about-home thead th {
    padding: 5px;
    font-size: 1rem;
  }
  .splash-btn {
    padding: 10px;
    max-width: 50px;
  }
  .portCard_tags {
    display: none;
  }
  .name-field {
    flex-direction: column;
  }
  .name-field .field {
    width: 100%;
  }
}
</style>
