<template>
  <router-link
    class="portCard"
    :to="{ name: 'PortDetails', params: { alias: port.alias } }"
  >
    <div class="portCard_top">
      <img v-if="port.img" :src="port.img" v-bind:alt="port.title" />
      <video
        v-if="port.vid"
        autoplay
        loop
        muted
        :src="port.vid"
        v-bind:alt="port.title"
      ></video>
      <div class="link">
        <div class="nav-link_text">Project Details</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="M26.2,14l-3,3v11.1H3.9V8.9H15l3-3c0.2-0.2,0.2-0.5,0-0.7C17.9,5.1,17.8,5,17.7,5H1C0.4,5,0,5.4,0,6c0,0,0,0,0,0V31
                          c0,0.5,0.4,1,1,1c0,0,0,0,0,0H26c0.5,0,1-0.4,1-1c0,0,0,0,0,0V14.3c0-0.3-0.2-0.5-0.5-0.5C26.4,13.9,26.3,13.9,26.2,14z"
          />
          <path
            d="M31,0h-9.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.1,0.1,0.3,0.1,0.4l3.4,3.4L10,18.5c-0.4,0.4-0.4,1,0,1.4l2.1,2.1
                          c0.4,0.4,1,0.4,1.4,0L27.8,7.8l3.4,3.4c0.2,0.2,0.5,0.2,0.7,0c0.1-0.1,0.1-0.2,0.1-0.4V1C32,0.4,31.6,0,31,0z"
          />
          <g>
            <path
              d="M39,11.1l3.4-3.4l5.1,5.1l3.5-3.5l-5.1-5.1l3.4-3.4c0.1-0.1,0.1-0.2,0.1-0.4c0-0.3-0.2-0.5-0.5-0.5h-9.8c-0.6,0-1,0.4-1,1
                  v9.8c0,0.1,0.1,0.3,0.1,0.4C38.4,11.3,38.8,11.3,39,11.1z"
            />
            <path
              d="M45.9,27.8l5.1-5.1l-3.5-3.5l-5.1,5.1L39,20.9c-0.2-0.2-0.5-0.2-0.7,0c-0.1,0.1-0.1,0.2-0.1,0.4V31c0,0.6,0.4,1,1,1h9.8
                  c0.3,0,0.5-0.2,0.5-0.5c0-0.1-0.1-0.3-0.1-0.4L45.9,27.8z"
            />
            <path
              d="M69.1,0h-9.8c-0.3,0-0.5,0.2-0.5,0.5c0,0.1,0.1,0.3,0.1,0.4l3.4,3.4l-5.1,5.1l3.5,3.5l5.1-5.1l3.4,3.4
                  c0.2,0.2,0.5,0.2,0.7,0c0.1-0.1,0.1-0.2,0.1-0.4V1C70.1,0.4,69.7,0,69.1,0z"
            />
            <path
              d="M69.3,20.9l-3.4,3.4l-5.1-5.1l-3.5,3.5l5.1,5.1L59,31.1c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.3,0.2,0.5,0.5,0.5h9.8
                  c0.6,0,1-0.4,1-1v-9.8c0-0.1-0.1-0.3-0.1-0.4C69.8,20.7,69.4,20.7,69.3,20.9z"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="portCard_content">
      <h4>{{ port.title }}</h4>
      <p class="portCard_tags">
        <span class="portCard_tagSpan" v-for="item in port.tag" :key="item">{{
          item
        }}</span>
      </p>
      <!-- <p class="portCard_sub">{{ port.subtitle }}</p> -->

      <!-- <p v-for="item in port.description" :key="item" class="portCard_descr">{{ item }}</p> -->
    </div>
  </router-link>
</template>

<script>
// import PortService from "@/services/PortService.js";
// import vSelect from 'vue-select'

export default {
  // name: 'portCard',
  // props: {
  //   msg: String
  // },
  components: {
    // vSelect
  },
  props: {
    port: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // portfolio
      inputValue: "",
      select: "",
      selectValue: null,
      initValue: null,
      ports: null,
      isDrop: false,
      currentValue: null,
      isVisible: true,
      isComposing: null,
    };
  },
  mounted() {
    // get events from mock db when component is created
    // PortService.getPorts()
    //   .then((response) => {
    //     this.ports = response.data;
    //   })
    //   // .then((r) => {
    //   // for (let i = 0; i < r.data.length; i++) {
    //   //   this.ports.push(r.data[i]);
    //   // }
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portCard_top img {
  width: 100%;
  height: 20vw;
  margin: 0;
  border-radius: 4px 4px 0 0;
  object-fit: cover;
  object-position: center center;
}
.portCard_top video {
  width: 100%;
  height: 20vw;
  border-radius: 4px 4px 0 0;
  background-size: cover;
  object-fit: cover;
}
@media (max-width: 600px) {
  .portCard_top img,
  .portCard_top video {
    height: 40vw;
  }
}
.portCard {
  flex: 0 0 32%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: var(--transition);
  color: var(--text);
  margin: 10px 0;
  border: 2px solid var(--heavy);
  border-radius: 6px;
  background: var(--light);
  /* box-shadow: 3px 3px 0 var(--heavy-op); */
}
@media (max-width: 960px) {
  .portCard_top img,
  .portCard_top video {
    height: 30vw;
  }
  .portCard {
    flex: 0 0 49%;
  }
}
@media (max-width: 600px) {
  .portCard_top img,
  .portCard_top video {
    height: 40vw;
  }
  .portCard {
    flex: 0 0 100%;
  }
}
.portCard .link {
  display: flex;
  flex-direction: row;
  padding: 10px 15px 11px;
  right: 5px;
  top: 5px;
  width: auto;
  background: var(--light);
  position: absolute;
  border: 1px solid var(--heavy);
  border-radius: var(--border-radius);
  justify-content: flex-end;
  box-shadow: none;
  transition: var(--transition-faster);
  display: none;
}
.link .nav-link_text {
  /* width: 0; */
  opacity: 1;
  font-weight: 400;
  height: auto;
  padding: 0px 10px 0 0;
  color: var(--heavy);
  transition: var(--transition);
  overflow: hidden;
}
.portCard:hover .nav-link_text {
  color: var(--light);
}
.portCard:hover .link {
  /* right: -10px; */
  /* top: -1px; */
  background-color: var(--heavy);
  border-color: var(--light);
  transition: var(--transition-faster);
}
.portCard svg {
  fill: var(--heavy);
  width: 20px;
}
.portCard:hover svg {
  transform: scale(1.1);
  transition: var(--transition-faster);
  fill-opacity: 1;
  fill: var(--light);
}
.portCard:hover {
  transition: var(--transition-faster);
  border: 2px solid var(--text);
  background: var(--off);
  box-shadow: -5px 5px 0 var(--heavy);
  transform: translate(5px, -5px);
  cursor: pointer;
}
.portCard:hover h4 {
  text-decoration: underline;
}
.portCard_content {
  color: var(--heavy);
  transition: var(--transition);
  padding: 15px 20px 20px;
}
.portCard_content h4 {
  color: var(--text);
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: 0.25px;
}
.portCard:hover .portCard_content {
  border-color: var(--heavy);
}
/* .portCard:hover .portCard_content h4, .portCard:hover .portCard_content p {
  color: var(--black-10);
} */
.portCard_sub {
  color: var(--text);
  /* line-height: 1.25; */
  margin: 5px 0 0px;
}
.portCard_tags {
  margin: 10px 0 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.portCard_tagSpan {
  background: var(--off);
  border: 1px solid var(--text);
  color: var(--text);
  padding: 0px 10px 1px;
  margin: 0 5px 3px 0;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 13px;
  border-radius: 4px;
  text-transform: lowercase;
}
</style>
