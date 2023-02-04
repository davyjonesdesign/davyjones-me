<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <TheCard
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.splashImg"
        :vidUrl="item.splashVid"
        :link="`/portfolio/${item.alias}`"
      >
        <template v-slot:body>
          <p class="portCard_tags">
            <span
              class="portCard_tagSpan"
              v-for="item in item.tag"
              :key="item.id"
            >
              {{ item }}
            </span>
          </p>
        </template>
      </TheCard>
    </slide>

    <!-- addons -->
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import items from "@/data/data2.js";

import TheCard from "@/components/UI/TheCard";

// import CardFooter from "@/components/UI/CardFooter";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    TheCard,
    Carousel,
    Slide,
    Navigation,
    // CardFooter,
  },
  data() {
    return {
      items: items,

      // corousel
      settings: {
        itemsToShow: 3,
        wrapAround: true,
        snapAlign: "center",
      },
      breakpoints: {
        0: {
          itemsToShow: 1,
        },
        350: {
          itemsToShow: 1,
        },
        600: {
          itemsToShow: 2,
        },
        760: {
          itemsToShow: 3,
        },
        1040: {
          itemsToShow: 3,
        },
        1440: {
          itemsToShow: 4,
        },
      },
    };
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
  background: var(--light-op);
  /* border: 1px solid var(--off); */
  color: var(--text);
  padding: 0px 8px 0px;
  margin: 0 5px 5px 0;
  font-weight: 400;
  font-size: 14px;
  border-radius: 5px;
  text-transform: lowercase;
  letter-spacing: 0px;
}
@media (max-height: 450px) {
  .portCard_tags {
    display: none;
  }
}
@media (max-width: 600px) {
  .portCard_tagSpan {
    /* padding: 0 4px 1px; */
  }
}
</style>
