<template>
  <button class="back-link" @click="goBack">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.97058 20">
      <g id="a" />
      <g id="b">
        <g id="c">
          <polygon
            class="d"
            points="16.97058 8.48529 8.48529 0 0 8.48529 5.24298 8.48529 5.24298 20 11.24298 20 11.24298 8.48529 16.97058 8.48529"
          />
        </g>
      </g>
    </svg>
    Back
  </button>
</template>
<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
<style>
.back-link {
  margin: 0 0 4px;
  display: flex;
  align-items: center;
  color: var(--text);
  transition: var(--transition);
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  font-weight: 600;
  font-size: 1rem;
}
.back-link svg {
  fill: var(--btn-text);
  transform: rotate(-90deg);
  width: 36px;
  padding: 5px 7px;
  margin-right: 5px;
  border-radius: 100%;
  border: 2px solid var(--heavy);
  background: var(--heavy);
}
.back-link:hover svg {
  background: var(--light);
  /* transform: scale(1.25); */
  /* transform: rotate(-90deg); */
  fill: var(--text);
  transition: var(--transition-fastest);
  cursor: pointer;
}
.back-link:hover {
  /* transform: scale(1.05); */
  transition: var(--transition-fastest);
  cursor: pointer;
}
</style>
