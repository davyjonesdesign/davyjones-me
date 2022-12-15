<template>
  <div class="splash-content">
    <div class="home-text">
      <h2>
        <span class="char-hover">H</span><span class="char-hover">i</span
        >, <span class="char-hover">I</span><span class="char-hover">'</span
        ><span class="char-hover">m</span> <span class="char-hover">D</span
        ><span class="char-hover">a</span><span class="char-hover">v</span
        ><span class="char-hover">y</span> <span class="char-hover">J</span
        ><span class="char-hover">o</span><span class="char-hover">n</span
        ><span class="char-hover">e</span><span class="char-hover">s</span>
      </h2>
      <h3>I am a graphic and web designer with some web development experience.</h3>
      <router-link class="link link-btn splash-btn" to="/contact">
        <div class="nav-link_text">Connect with me!</div>
      </router-link>
    </div>
    <button class="scrollTop bounce" @click="scrollToElement('#work')">
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
  props: {
    msg: String,
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Home / Landing */

.home-text {
  text-align: left;
  margin: 0 40px 0 160px;
  line-height: 1;
  max-width: 960px;
  height: 100vh;
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
  line-height: 2.5rem;
  letter-spacing: 1px;
  margin: 20px 0 10px;
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
.scrollTop {
  margin: 0px 0 0px;
  color: var(--heavy);
  transition: var(--transition-faster);
  background: none;
  border: none;
  outline: inherit;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  z-index: 100;
  bottom: 70px;
  left: calc(50% + 20px);
}
.scrollTop:hover {
  cursor: pointer;
}
.scrollTop svg {
  transition: var(--transition-faster);

  fill: var(--heavy);
  cursor: pointer;
  transform: rotate(-180deg);
  width: 60px;
  border-radius: var(--border-radius);
  padding: 20px 10px;
  /* margin-right: 5px; */
  /* border-radius: var(--border-radius); */
  /* background: var(--heavy); */
  /* border: 2px solid var(--heavy); */
}
.scrollTop:hover svg {
  /* background: var(--light); */
  fill: var(--text);
  cursor: pointer;
  background: var(--menuBack);
}
.bounce {
  -moz-animation: bounce 0.5s cubic-bezier(0.5, 0.05, 1, 0.5);
  -webkit-animation: bounce 0.5s cubic-bezier(0.5, 0.05, 1, 0.5);
  animation: bounce 0.5s cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 8px, 0);
  }
}

@media (max-width: 960px) {
  .home-text {
    margin: 0 60px 0 35px;
  }
  .home-text h2 {
    font-size: 2.5rem;
  }
  .home-text h3 {
    font-size: 1.5rem;
    margin: 15px 0;
    line-height: 1.5rem;
  }
  .scrollTop {
    left: calc(50% - 30px);

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
    margin: 0 20px 0 20px;
  }
}
@media (max-width: 400px) {
  .home-text h2 {
    font-size: 2rem;
  }
  .home-text h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin: 10px 0;
  }
  thead th {
    font-size: 18px;
  }
}
</style>
