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
  border-radius: var(--border-radius);
  width: 250px;
  color: var(--text);
  border-radius: var(--border-radius);
  background: var(--light);
}
.portCard:hover {
  box-shadow: 3px 4px 0 var(--heavy);
  transform: translate(-3px, -4px);
  cursor: pointer;
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
  height: 30vh;
  margin: 0;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  object-fit: cover;
  object-position: center center;
}
.portCard_top video {
  width: 100%;
  height: 30vh;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  background-size: cover;
  object-fit: cover;
}
@media (max-height: 450px) {
  .portCard_content {
    min-height: 50px;
  }
  .portCard_top video,
  .portCard_top img {
    height: 25vh;
  }
}
</style>
