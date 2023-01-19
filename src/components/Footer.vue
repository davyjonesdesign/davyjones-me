<template>
  <div class="foot-wrapper">
    <div class="foot-top">
      <button class="scrollTop bounce" @click="scrollToElement('#top')">
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
    <div class="footer-splash">
      <img
        class="footer-pic"
        src="@/assets/me.jpg"
        alt="picture of me, Davy Jones"
      />
      <div class="footer-msg">
        <router-link
          class="link link-btn splash-btn footer-btn"
          to="/contact"
          @click="scrollToTop()"
        >
          <div class="nav-link_text">Connect with me!</div>
        </router-link>
      </div>
    </div>
    <div class="design-system_footer">
      <p>
        Check out the
        <router-link
          @click="scrollToTop()"
          to="/design-system"
          class="footer-link inline-link"
          >Full Design System</router-link
        >
        developed for this website.
      </p>
    </div>
    <div>
      <Social />
      <div class="quicklinks">
        <div class="col center">
          <div class="row">
            <router-link to="/" class="footer-link" @click="scrollToTop()"
              >Home</router-link
            >
            <router-link
              @click="scrollToTop()"
              to="/portfolio"
              class="footer-link"
              >Portfolio</router-link
            >
            <router-link @click="scrollToTop()" to="/about" class="footer-link"
              >About</router-link
            >
            <router-link
              @click="scrollToTop()"
              to="/contact"
              class="footer-link"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
      <h5 class="foot-copy copy-big">Copyright © 2022 davyjonesdesign.com</h5>
      <h5 class="foot-copy copy-small">Copyright © 2022</h5>
    </div>
  </div>
</template>
<script>
import Social from "@/components/SocialLinks.vue";

export default {
  name: "Footer",
  components: {
    Social,
  },
  data() {
    return {};
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
    scrollToTop() {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    },
  },
};
</script>
<style scoped>
.foot-wrapper {
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--menuBack);
  z-index: 100;
  padding: 0 40px 0 120px;
}
.foot-copy {
  color: var(--outline);
  font-size: 0.75rem;
  text-align: center;
  padding: 10px 0px;
  margin: 0;
  width: 85vw;
}
.quicklinks {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0 0;
}
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row {
  display: flex;
  flex-direction: row;
}
.center {
  align-items: center;
}
.footer-link {
  padding: 10px;
  margin: 0 5px;
  color: var(--heavy);
  border-radius: var(--border-radius);
  border: 1px solid none;
  background: none;
}
.footer-link:hover {
  color: var(--text);
  text-decoration: underline;
}
.quicklinks .router-link-active {
  color: var(--text);
  text-decoration: underline;
}
button.scrollTop.bounce {
  margin: 0px 0 0px;
  color: var(--heavy);
  transition: var(--transition-faster);
  border: 2px solid var(--heavy);
  background: var(--light);
  border-radius: 5px;
  outline: inherit;
  font-weight: 600;
  font-size: 1rem;
}
button.scrollTop.bounce:hover {
  cursor: pointer;
  border: 2px solid var(--text);
  box-shadow: -3px 5px var(--heavy);
}
.scrollTop svg {
  transition: var(--transition-faster);

  fill: var(--text);
  cursor: pointer;
  /* transform: rotate(-90deg); */
  width: 60px;
  /* border-radius: var(--border-radius); */
  padding: 16px 10px 14px;
  /* margin-right: 5px; */
  /* border-radius: var(--border-radius); */
  /* background: var(--heavy); */
  /* border: 2px solid var(--heavy); */
}
.scrollTop:hover svg {
  /* background: var(--light); */
  fill: var(--text);
  cursor: pointer;
  background: var(--off);
}
.footer-splash {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

.footer-msg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 20px 20px;
}
.footer-splash h3 {
  margin: 20px 0 0;
  font-weight: 400;
}
.footer-pic {
  max-width: 150px;
  border-radius: 100%;
  border: 3px solid var(--heavy);
  box-shadow: 0 0 10px var(--heavy);
}
.footer-btn {
  padding: 25px 20px;
  min-width: 300px;
  margin: 30px 0 0;
}
.copy-small {
  display: none;
}
@media (max-width: 640px) {
  .copy-small {
    display: block;
  }
  .copy-big {
    display: none;
  }
  .footer-splash {
    flex-direction: column;
    justify-content: center;
  }
  .footer-msg {
    margin-left: 0;
    text-align: center;
  }
  button.scrollTop.bounce {
    top: 0px;
  }
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
.foot-top {
  display: flex;
  flex-direction: column;
}
@media (max-width: 960px) {
  .foot-wrapper {
    /* margin: 20px 5px 5px; */
    padding: 10px 15px;
  }
  .lottie-animation-container {
    max-width: 30vw;
  }
  .foot-copy {
    width: 95vw;
  }
  .design-system_footer {
    text-align: center;
  }
}
@media (max-height: 450px) {
  .foot-wrapper {
    padding: 0 15px;
  }
  .footer-pic {
    max-width: 100px;
  }
}
.inline-link {
  padding: 0;
  margin: 0 3px;
}
</style>
