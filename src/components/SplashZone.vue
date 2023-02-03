<template>
  <div class="splash-content">
    <div class="home-text">
      <h2>
        Hi, I'm Davy Jones
        <!-- <span class="char-hover">H</span><span class="char-hover">i</span>,
        <span class="char-hover">I</span><span class="char-hover">'</span
        ><span class="char-hover">m</span> <span class="char-hover">D</span
        ><span class="char-hover">a</span><span class="char-hover">v</span
        ><span class="char-hover">y</span> <span class="char-hover">J</span
        ><span class="char-hover">o</span><span class="char-hover">n</span
        ><span class="char-hover">e</span><span class="char-hover">s</span> -->
      </h2>
      <h3>
        I am a graphic and web designer with experience executing complex user
        interfaces.
      </h3>
      <div class="splash-btns">
        <router-link class="link link-btn splash-btn" to="/portfolio">
          <div class="nav-link_text">My Portfolio</div>
        </router-link>
        <router-link class="link link-btn splash-btn" to="/contact">
          <div class="nav-link_text">Connect with me!</div>
        </router-link>
      </div>
    </div>
    <button class="scrollDown bounce" @click="scrollToElement('#work')">
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
  </div>
</template>

<script>
export default {
  name: "SplashZone",
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Home / Landing */
@import "../styles/ScrollDownButton.css";

.splash-content {
  display: flex;
  flex-direction: column;
  margin: 27vh 40px 40px 140px;
  height: 70vh;
  justify-content: space-between;
}
.home-text {
  text-align: left;
  line-height: 1;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: center;
}

.light-theme .home-text h2 {
  color: var(--heavy);
}
.home-text h2 {
  font-size: 4rem;
  letter-spacing: 1px;
  font-weight: 900;
  text-transform: none;
}
.home-text h3 {
  font-size: 2.5rem;
  line-height: 3.5rem;
  letter-spacing: 1px;
  margin: 20px 0 40px;
  font-weight: 600;
  text-transform: none;
}
.home-text p {
  margin-top: 20px;
}
.char-hover {
  display: inline-block;
}
.char-hover:hover {
  transition: all 0.1s ease-in-out;
  color: var(--heavy-op);
  transform: skew(-15deg);
  cursor: pointer;
}

.splash-btns {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 10px;
}
@media (max-width: 960px) {
  .splash-content {
    /* margin: 30vh 40px 40px 140px; */
    margin: 25vh 60px 40px 35px;
  }
  .home-text h2 {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  .home-text h3 {
    font-size: 1.5rem;
    margin: 15px 0 30px;
    line-height: 2rem;
  }
  th {
    font-size: 0.7rem;
    padding: 5px 5px;
  }
  td {
    padding: 5px 5px;
  }
}
@media (max-width: 640px) {
  .home-text {
    margin: 0 0px 40px;
  }
}
@media (max-width: 400px) {
  .home-text h2 {
    font-size: 2rem;
  }
  .home-text h3 {
    font-size: 1.25rem;
    line-height: 2rem;
    margin: 10px 0 30px;
  }
  thead th {
    font-size: 18px;
  }
}
</style>
