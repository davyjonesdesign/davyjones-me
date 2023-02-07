<template>
  <div>
    <div class="page-wrapper">
      <!-- <input v-model="checkedTags" type="text" placeholder="search portfolio"/> -->

      <div class="page-header" id="top">
        <h1>Portfolio</h1>
        <BackButton />
      </div>
      <p>
        I'm not a believer in the old adage that you are only as good as your
        weakest portfolio piece. I've included the projects I've enjoyed working
        on and that I feel turned out well. Some may be 'stronger' than others,
        but I believe transparency far outweighs persona.
      </p>
      <div>
        <Multiselect
          v-model="value"
          :options="options"
          label="value"
          placeholder="Add a tag"
          tag-placeholder="Add this as new tag"
          @select="addTag"
          @deselect="addTag"
          @remove="addTag"
          @tag="addTag"
          @close="addTag"
          @search-change="addTag"
          @clear="addTag"
          @input="addTag"
          @open="addTag"
          mode="tags"
        />
      </div>

      <div class="port-container">
        <PortCard
          v-for="port in filteredPorts"
          :key="port.pathName"
          :port="port"
        />
      </div>
    </div>
    <Foot id="foot" />
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from 'vue'
import PortCard from "@/components/PortCard.vue";
import Foot from "@/components/Footer.vue";
// import { ref } from "@vue/runtime-core";
import data2 from "../data/data2";
import Multiselect from "@vueform/multiselect";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "Portfolio",
  components: {
    PortCard,
    Multiselect,
    Foot,
    BackButton,
  },
  data() {
    return {
      value: [],
      filteredPorts: data2,
      options: [
        {
          value: "branding",
          label: "branding",
        },
        {
          value: "print",
          label: "print",
        },
        {
          value: "ux/ui design",
          label: "ux/ui design",
        },
        {
          value: "dev/programming",
          label: "dev/programming",
        },
        {
          value: "figma",
          label: "figma",
        },
        {
          value: "vue",
          label: "vue",
        },
        {
          value: "video",
          label: "video",
        },
        {
          value: "motion graphic",
          label: "motion graphic",
        },
        {
          value: "digital illustration",
          label: "digital illustration",
        },
        {
          value: "typography",
          label: "typography",
        },
      ],
    };
  },
  computed: {
    selectedFilters() {
      let filters = [];
      // let tempTags = this.tags;
      // console.log(this.tags)
      let checkedFilters = this.tags.filter((obj) => obj.checked);
      // let checkedFilters = tempTags.checked
      // console.log(this.value)
      checkedFilters.forEach((element) => {
        filters.push(element.value);
      });
      return filters;
    },
  },
  methods: {
    addTag() {
      this.filteredPorts = data2;
      let filterPortsByFilters = [];
      this.options.push();
      this.value.push();
      if (this.value === null && this.value) {
        this.filteredPorts = data2;
      } else {
        filterPortsByFilters = this.filteredPorts.filter((obj) =>
          this.value.every((val) => obj.tag.indexOf(val) >= 0)
        );
        this.filteredPorts = filterPortsByFilters;
        // console.log(this.value)
      }
    },
    // getFilteredPorts() {
    //   this.filteredPorts = data;
    //   let filterPortsByFilters = [];
    //   if (this.value.length === 0) {
    //     this.filteredPorts = data;

    //   } else {
    //     filterPortsByFilters = this.filteredPorts.filter(obj => this.value.every(val => obj.tag.indexOf(val) >= 0));
    //     this.filteredPorts = filterPortsByFilters

    //   }

    // },
    getFiltered() {
      this.filteredPorts = data2;
    },
    mounted() {
      this.getFiltered();
      this.addTag();
    },
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
@import "../styles/PageStyles.css";
.multiselect {
  font-family: "Lato", sans-serif;
  color: var(--text);
  margin: 20px 0 10px;
}
#checkboxes {
  color: black;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.cb-wrapper {
  position: relative;
  min-width: 150px;
  margin: 5px;
  min-height: 30px;
}
.chic-label {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  padding-bottom: 1px;
  z-index: -1;
  border: 1px solid var(--heavy);
  color: var(--heavy);
  border-radius: 30px;
  transition: var(--transition-fastest);
}
.chic {
  height: 35px;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  z-index: 10;
}
.chic:hover + .chic-label {
  background: var(--heavy);
  color: var(--light);
}

.chic:checked + .chic-label {
  background: var(--heavy);
  color: var(--light);
  border-radius: 20px;
}

/* input:focus:checked + label {
  border-color: green;
} */




.port-header {
  position: relative;
  display: flex;
  flex: 0 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.port-header h2 {
  margin: 0;
}
.port-container {
  padding: 20px 0 20px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.port-container > .v-hl-container {
  /* Space between content and scrollbar */

  /* For firefox only */
  scrollbar-width: auto;
  scrollbar-color: var(--heavy) var(--light);
}

.port-container > .v-hl-container::-webkit-scrollbar {
  height: 16px;
  width: 16px;
  background: transparent;
}

.horizontal > .v-hl-container::-webkit-scrollbar-track {
  background: var(--light);
  border-radius: 10px;
}

.port-container > .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 10px white solid;
  background: var(--heavy);
}

@import "../styles/MultiSelectAlt.css";
</style>
