<template>
  <router-link class="portCard" :to="link">
    <div class="portCard_top">
      <img v-if="imgUrl" :src="imgUrl" :alt="title" />
      <video
        v-if="vidUrl"
        autoplay
        loop
        muted
        :src="vidUrl"
        :alt="title"
      ></video>
    </div>
    <div class="portCard_content">
      <h4>{{ title }}</h4>
      <slot name="body"></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    vidUrl: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>
<style scoped>
.portCard {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: var(--transition-faster);
  margin: 10px;
  border-radius: 5px;
  width: 300px;
  color: var(--text);
  border: 2px solid var(--heavy);
  background: var(--light);
}
.portCard:hover {
  box-shadow: -3px 3px 0 var(--heavy);
  transform: translate(3px, -3px);
  border-color: var(--text);
  cursor: pointer;
  background: var(--off);
}
.portCard_content {
  color: var(--heavy);
  transition: var(--transition);
  padding: 10px;
  min-height: 105px;
  text-align: left;
}
.portCard_content h4 {
  color: var(--text);
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: 0.25px;
}
.portCard:hover h4 {
  text-decoration: underline;
}
.portCard_top img {
  width: 100%;
  height: 40vh;
  margin: 0;
  border-radius: 3px 3px 0 0;
  object-fit: cover;
  object-position: center center;
}
.portCard_top video {
  width: 100%;
  height: 40vh;
  border-radius: 3px 3px 0 0;
  background-size: cover;
  object-fit: cover;
}
@media (max-height: 450px) {
  .portCard_content {
    min-height: 50px;
  }
  .portCard {
    min-height: 480px;
  }
  .portCard_top video,
  .portCard_top img {
    height: 25vh;
  }
}
</style>
