<template>
  <div class="foot-wrapper">
    <div class="foot-top">
      <button class="scrollUp bounce" @click="scrollToElement('#top')">
        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="m23.78771,11.48767L12.51248.21229c-.28305-.28306-.74197-.28305-1.02502,0L.21229,11.48767c-.28305.28306-.28305.74198,0,1.02504l1.02502,1.02501c.28305.28305.74196.28304,1.02501,0L12.00003,3.79988l9.73764,9.73783c.28305.28305.74196.28306,1.02501,0l1.02502-1.025c.28306-.28305.28306-.74198,0-1.02504Z"
          />
          <path
            d="m23.78771,21.73767l-11.27523-11.27538c-.28305-.28306-.74197-.28305-1.02502,0L.21229,21.73767c-.28305.28306-.28305.74198,0,1.02504l1.02502,1.02501c.28305.28305.74196.28304,1.02501,0l9.7377-9.73783,9.73764,9.73783c.28305.28305.74196.28306,1.02501,0l1.02502-1.025c.28306-.28305.28306-.74198,0-1.02504Z"
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
    <div class="vue-built">
      <p>Built with Vue.</p>
      <svg
        class="logo"
        viewBox="0 0 128 128"
        width="24"
        height="24"
        data-v-e0ef77de=""
      >
        <path
          fill="#42b883"
          d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
          data-v-e0ef77de=""
        ></path>
        <path
          fill="#35495e"
          d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
          data-v-e0ef77de=""
        ></path>
      </svg>
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
@import "../styles/ScrollUpButton.css";

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
  /* padding: 25px 20px; */
  min-width: 300px;
  margin: 30px 0 0;
}
.copy-small {
  display: none;
}
.vue-built {
  display: flex;
  justify-items: center;
  align-items: center;
}
.vue-built p {
  margin: 0;
}
.vue-built svg {
  margin: 5px;
  min-width: 40px;
  min-height: 40px;
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
    width: 100%;
  }
  .footer-msg {
    margin-left: 0;
    text-align: center;
    width: 100%;
  }
  button.scrollUp.bounce {
    top: 0px;
  }
  .footer-btn {
    /* padding: 25px 20px; */
    min-width: 100%;
    width: 100%;
    margin: 20px 0 0;
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
  margin: 20px 0;
  width: 100%;
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
