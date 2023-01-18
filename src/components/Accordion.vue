<template>
  <div>
    <button
      @click="toggleAccordion()"
      class="acc-control flex items-center space-x-3"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <slot name="title" />
      <svg
        class="w-3 transition-all duration-200 transform"
        :class="{
          isCool: isOpen,
        }"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 10"
        aria-hidden="true"
      >
        <path
          d="M15 1.2l-7 7-7-7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <div
      :class="{ isOpenNow: isOpen }"
      :id="`collapse${_uid}`"
      class="collapsed-content"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isCool: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
      this.isCool = !this.isCool;
    },
  },
};
</script>
<style>
.acc-control {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  background: var(--light);
  outline: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 10px 20px;
  border-radius: 10px;
}

.acc-control:hover {
  cursor: pointer;
  background: var(--menuBack);
  transition: var(--transition-fastest);
}
.acc-control svg {
  width: 20px;
  transition: var(--transition-faster);
  color: var(--heavy);
  /* transform: rotate(-90deg); */
  /* transform: rotate(-90deg); */
}
.isCool {
  transform: rotate(-180deg);
}
</style>
