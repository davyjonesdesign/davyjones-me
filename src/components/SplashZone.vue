<template>
  <div class="splash-content">
    <div class="splash-layout">
      <div class="splash-intro">
        <img
          class="sticky"
          src="@/assets/me.jpg"
          alt="picture of me, Davy Jones"
        />
        <div class="home-text">
          <h2>Hey there!</h2>
          <p>
            My name is <strong>Davy Jones</strong> and I'm a UX/UI Designer with
            6 years of experience in graphic and web design.
          </p>
        </div>
      </div>
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
  margin: 0 100px 0 120px;
  height: 100vh;
  justify-content: space-between;
}
.splash-content button {
  margin: 0 0 20px;
}
.splash-layout {
  display: flex;
  flex-direction: column;
  margin: 40px 0 0;
  align-items: flex-start;
  height: 100%;
  justify-content: center;
}
.splash-intro {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.splash-layout img {
  max-width: 25vw;
  max-height: 25vw;
  object-fit: cover;
  border-radius: 100%;
  margin: 0 40px 0 0;
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

.home-text h2 {
  font-size: 3.5rem;
  letter-spacing: 1px;
  font-weight: 900;
  text-transform: none;
  line-height: 4rem;
  border-bottom: 2px solid var(--outline);
  padding-bottom: 25px;
  color: var(--heavy);
}
.home-text h4 {
  font-size: 1.5rem;
  line-height: 2.5rem;
  /* letter-spacing: 1px; */
  font-weight: 600;
  color: var(--text);
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
  display: flex;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  column-gap: 20px;
}
@media (max-width: 960px) {
  .splash-content {
    /* margin: 30vh 40px 40px 140px; */
    margin: 0 40px 0 20px;
  }
  .splash-layout {
    flex-direction: column;
    /* justify-content: flex-start; */
    align-items: flex-start;
  }
  .home-text h2 {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  .home-text h4 {
    font-size: 1rem;
    margin: 15px 0 15px;
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
  .home-text h2 {
    text-align: center;
    margin: 20px 0 0;
  }
  .home-text h4 {
    text-align: center;
    margin: 20px 0 0;
  }
  .splash-intro {
    flex-direction: column;
    align-items: center;
  }
  .splash-content {
    /* margin: 30vh 40px 40px 140px; */
    margin: 0 20px 0 20px;
  }
  .splash-layout {
    margin: 20px 0 0;
  }
  .splash-layout img {
    margin: 0;
    max-width: 50vw;
    max-height: 50vw;
  }

  .home-text h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  .home-text h4 {
    font-size: 1rem;
    line-height: 1.75rem;
  }
  .splash-btns {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
  .splash-btns .splash-btn {
    margin: 0 0 10px;
  }
}
@media (max-width: 400px) {
  .home-text h2 {
    font-size: 1.75rem;
  }
  .home-text h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    /* margin: 10px 0 30px; */
  }
  thead th {
    font-size: 18px;
  }
}
</style>
