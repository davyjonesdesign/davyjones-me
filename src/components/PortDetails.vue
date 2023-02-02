<template>
  <div v-if="port" class="port-wrapper">
    <div class="port-splash">
      <img
        class="port-img"
        v-bind:alt="port.splashImg"
        v-if="port.splashImg"
        :src="port.splashImg"
      />
      <div class="img-overlay"></div>
    </div>
    <div class="port-heading" id="top">
      <BackButton class="port-det-back" />

      <div class="port-heading-container">
        <div class="port-heading-content">
          <h1>{{ port.title }}</h1>
          <div class="hash-line"></div>
          <h5>
            {{ port.subtitle }}
          </h5>
        </div>
        <div class="port-content-details">
          <div class="col-3">
            <h6>Role</h6>
            <p>{{ port.role }}</p>
          </div>
          <div class="col-3">
            <h6>Target Audience</h6>
            <p>{{ port.targAud }}</p>
          </div>
          <div class="col-3 col-3_last">
            <h6>Duration</h6>
            <p>{{ port.duration }}</p>
          </div>
        </div>
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
            <svg
              version="1.1"
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              style="enable-background: new 0 0 24 24"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M23.3,0h-1.7h-9C12.3,0,12,0.3,12,0.7v1.7C12,2.7,12.3,3,12.7,3h5.5l-9.3,9.3c-0.4,0.4-0.4,1,0,1.3l1.5,1.5
		c0.4,0.4,1,0.4,1.3,0L21,5.8v5.5c0,0.4,0.3,0.7,0.7,0.7h1.7c0.4,0,0.7-0.3,0.7-0.7v-9V0.7C24,0.3,23.7,0,23.3,0z"
                />
                <path
                  d="M17.1,20H4V6.9C4,6.4,3.6,6,3.1,6H0.9C0.4,6,0,6.4,0,6.9v14v2.1C0,23.6,0.4,24,0.9,24h2.1h14c0.5,0,0.9-0.4,0.9-0.9v-2.1
		C18,20.4,17.6,20,17.1,20z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="scroll-buttons">
        <button
          class="scrollDown bounce"
          @click="scrollToElement('#port-section-1')"
        >
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
    </div>

    <div class="port-content">
      <!-- port-section-1 -->
      <div class="port-section port-overview" id="port-section-1">
        <div class="port-section-content">
          <h2>→ Overview</h2>
          <div>
            <p v-for="item in port.ovCont" :key="item">{{ item }}</p>
          </div>
        </div>
        <div class="section-img">
          <img v-bind:alt="port.ovImg" v-if="port.ovImg" :src="port.ovImg" />
          <iframe
            v-if="port.ovProto"
            :src="port.ovProto + '%26hide-ui%3D1'"
            allowfullscreen
          ></iframe>
          <p>{{ port.ovImgDes }}</p>
        </div>
        <div class="scroll-buttons">
          <button
            class="scrollDown bounce"
            @click="scrollToElement('#port-section-2')"
          >
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
          <button
            class="scrollUp bounce scrollDown-port"
            @click="scrollToElement('#top')"
          >
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
      </div>

      <!-- port-section-2 -->
      <div class="port-section port-goal" id="port-section-2">
        <div class="port-section-content">
          <h2>→ Goal</h2>
          <div>
            <p v-for="item in port.goalCont" :key="item">{{ item }}</p>
          </div>
        </div>
        <div class="section-img">
          <img
            v-bind:alt="port.goalImg"
            v-if="port.goalImg"
            :src="port.goalImg"
          />
          <iframe
            v-if="port.goalProto"
            :src="port.goalProto + '%26hide-ui%3D1'"
            allowfullscreen
          ></iframe>
          <p>{{ port.goalImgDes }}</p>
        </div>
        <div class="scroll-buttons">
          <button
            class="scrollDown bounce"
            @click="scrollToElement('#port-section-3')"
          >
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
          <button
            class="scrollUp bounce scrollDown-port"
            @click="scrollToElement('#port-section-1')"
          >
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
      </div>

      <!-- port-section-3 -->
      <div class="port-section port-approach" id="port-section-3">
        <div class="port-section-content">
          <h2>→ Approach</h2>
          <div>
            <p v-for="item in port.approachCont" :key="item">{{ item }}</p>
            <div v-if="port.keyfeatCont" class="key-features">
              <h4>Key Features</h4>
              <ul>
                <li v-for="item in port.keyfeatCont" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="section-img">
          <img
            v-bind:alt="port.approachImg"
            v-if="port.approachImg"
            :src="port.approachImg"
          />
          <iframe
            v-if="port.approachProto"
            :src="port.approachProto + '%26hide-ui%3D1'"
            allowfullscreen
          ></iframe>
          <p>{{ port.approachImgDes }}</p>
        </div>
        <div class="scroll-buttons">
          <button
            class="scrollDown bounce"
            @click="scrollToElement('#port-section-4')"
          >
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
          <button
            class="scrollUp bounce scrollDown-port"
            @click="scrollToElement('#port-section-2')"
          >
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
      </div>

      <!-- port-section-4 -->
      <div class="port-section port-outcome" id="port-section-4">
        <div class="port-section-content">
          <h2>→ Outcome</h2>
          <div>
            <p v-for="item in port.ocCont" :key="item">{{ item }}</p>
          </div>
        </div>
        <div class="section-img">
          <img v-bind:alt="port.ocImg" v-if="port.ocImg" :src="port.ocImg" />
          <iframe
            v-if="port.ocProto"
            :src="port.ocProto + '%26hide-ui%3D1'"
            allowfullscreen
          ></iframe>
          <p>{{ port.ocImgDes }}</p>
        </div>
        <div class="scroll-buttons">
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
          <button
            class="scrollUp bounce scrollDown-port"
            @click="scrollToElement('#port-section-3')"
          >
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
      </div>
    </div>
  </div>
  <Foot id="foot" />
</template>
<script>
import Foot from "@/components/Footer.vue";
import data2 from "@/data/data2";
// import VueEasyLightbox from "vue-easy-lightbox";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "PortDetailsX",
  props: ["alias"],
  components: {
    Foot,
    BackButton,
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
  },
  created() {
    const alias = this.$route.params.alias;
    const port = data2.find((el) => el.alias === alias);
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
<style>
@import "../styles/ScrollDownButton.css";
@import "../styles/ScrollUpButton.css";

.port-wrapper {
  margin: 0 0 0 80px;
}
.port-splash {
  padding: 0;
  margin: 0;
  position: relative;
  width: calc(100vw - 80px);
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
  opacity: 1;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.port-splash img {
  object-fit: cover;
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.35;
}
.port-splash .img-overlay {
  /* background: rgb(2,0,36); */
  background-image: var(--gradient-overlay);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
}
.port-section {
  /* padding: 20px 0 40px; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid var(--outline);
}
.port-heading {
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
.port-heading-container {
  /* margin-top: 35vh; */
}
.port-heading-content {
  justify-self: center;
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
  background: var(--light);
  align-items: center;
  justify-content: center;
  color: var(--text);
  border: 2px solid var(--heavy);
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  /* text-transform: uppercase; */
  /* letter-spacing: 1px; */
  /* font-weight: 700; */
  transition: var(--transition-faster);
}
.web-project_link svg {
  height: 18px;
  fill: var(--text);
  padding-left: 10px;
}

.web-project_link:hover {
  background: var(--off);
  border-color: var(--text);
  color: var(--text);
  transform: translate(3px, -3px);
  box-shadow: -3px 3px 0 var(--nav-item_shadow);
}
.port-content-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10px 0px;
  margin: 60px 0 40px;
  border: 2px solid var(--heavy-op);
  background: var(--menuBack);
}
.port-content-details p {
  font-weight: 500;
  letter-spacing: 0.5px;
}
.port-heading h1 {
  font-size: 3rem;
}
.hash-line {
  width: 200px;
  height: 2px;
  background: var(--heavy-op);
  margin: 15px 0 25px;
}
.port-content {
  margin: 0px 0 0;
  padding: 0 40px;
  background: var(--menuBack);
}
.port-content img {
  object-position: center top;
  object-fit: cover;
  max-width: 800px;
}
button.scrollUp.bounce {
  bottom: 50px;
}
.port-section-content {
  display: flex;
  flex-direction: row;
  margin: 40px 0 0;
}
.port-section-content h2 {
  margin-right: 60px;
  min-width: 250px;
}
.port-content iframe {
  max-width: 800px;
  min-height: 500px;
}
.port-content img,
.port-content iframe {
  width: 100%;
  border: 2px solid var(--heavy-op);
  box-shadow: 0 10px 10px var(--off);
}

.col-3 {
  width: 30%;
  padding-right: 10px;
  text-align: center;
}
.scroll-buttons {
  margin: 20px 0;
  display: flex;
  width: 140px;
  justify-content: space-between;
}
.port-det-back {
  justify-content: flex-end;
  padding-top: 30px;
}
.section-img p {
  margin: 0 auto;
  text-align: center;
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--heavy-op)
}
/* media queries */
@media (max-width: 960px) {
  .port-wrapper {
    margin: 0;
  }
  .port-det-back {
    margin: 0 60px 20px 0;
    padding-top: 20px;
  }
  .port-section-content p {
    margin-right: 60px;
  }
  .port-section-content h2 {
    margin-right: 0px;
  }
}
@media (max-width: 740px) {
  .port-section-content {
    flex-direction: column;
  }
  .port-section-content p {
    margin-right: 0px;
  }
  .port-section-content h4 {
    margin-bottom: 0px;
    margin-top: 20px;
  }
  .port-section-content ul {
    padding: 5px 0 0 20px;
  }
  .port-content-details {
    flex-direction: column;
    padding: 5px 20px;
    margin: 20px 0;
  }
  .port-content-details .col-3 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--outline);
    padding: 10px 0 0;
  }
  .port-content-details .col-3_last {
    border: none;
  }
  .port-content-details h6 {
    padding-right: 10px;
    text-align: left;
    line-height: 1.25rem;
  }
  .port-content-details p {
    text-align: right;
    line-height: 1.25rem;
  }
}
@media (max-width: 600px) {
  .port-content iframe {
    min-height: 350px;
  }
}
</style>
