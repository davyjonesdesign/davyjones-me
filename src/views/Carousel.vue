<template>
  <PortCarousel />
</template>

<script>
// import items from "@/data/data.js";

import PortCarousel from "@/components/UI/PortCarousel";
// import CardFooter from "@/components/UI/CardFooter";

export default {
  components: {
    PortCarousel,
    // CardFooter,
  },
};
</script>
<style scoped>
.portCard_tags {
  margin: 10px 0 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.portCard_tagSpan {
  background: var(--off);
  /* border: 1px solid var(--off); */
  color: var(--text);
  padding: 0px 7px 1px;
  margin: 0 5px 5px 0;
  font-weight: 400;
  font-size: 12px;
  border-radius: var(--border-radius);
  text-transform: lowercase;
}
</style>
