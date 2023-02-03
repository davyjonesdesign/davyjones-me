<template>
  <div v-if="show" class="preload-animation">
    <Vue3Lottie class="LogoDark" :animationData="LogoDark" />
    <Vue3Lottie class="LogoLight" :animationData="LogoLight" />
    <p>loading...</p>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import LogoLight from "@/assets/logo.json";
import LogoDark from "@/assets/logo-dark.json";

export default {
  name: "PreLoader",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      LogoLight,
      LogoDark,
      show: true,
    };
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 1500);
    },
  },
};
</script>

<style>
.preload-animation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--light-opacity);
  z-index: 99999999;
  overflow: hidden;
}
.lottie-animation-container {
  max-width: 30vw;
}

.preload-animation p {
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1.1;
  color: var(--heavy);
}

.LogoDark {
  display: none;
}
.dark-theme .LogoDark {
  display: block;
}
.dark-theme .LogoLight {
  display: none;
}
</style>
