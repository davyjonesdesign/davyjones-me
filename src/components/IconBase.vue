<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block fill-current"
    style="height: 1em; width: 1em"
  />
</template>

<script>
const icons = {
  arrow: require("./icons/ArrowIcon.vue"),
  // ...
};

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value);
      },
    },
  },

  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>
