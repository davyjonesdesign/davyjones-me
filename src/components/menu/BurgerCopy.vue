<template>
  <div class="mobile-menu-copy">
    <!-- burger -->
    <div
      id="burgerCopy"
      :class="{ active: isBurgerActive }"
      @click.prevent="toggle"
      class="burger-ds"
    >
      <slot>
        <button type="button" class="burger-button" title="Menu">
          <span class="burger-bar burger-bar--1"></span>
          <span class="burger-bar burger-bar--2"></span>
          <span class="burger-bar burger-bar--3"></span>
        </button>
      </slot>
    </div>
    <!-- sidebar -->
    
  </div>
</template>
<script>

export default {
  components: {
  },
  data: () => ({
    isBurgerActive: false,
  }),
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive;
    },
    closeSidebarPanel() {
    },
  },
};
</script>
<style></style>
