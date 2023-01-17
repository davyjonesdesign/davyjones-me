<template>
  <div class="toolbox-wrapper">
    <table class="table-wide" @mouseleave="closeTooltips()">
      <thead>
        <th colspan="4">My Toolbox</th>
      </thead>
      <tr>
        <th>graphic design</th>
        <th>web design</th>
        <th>web development</th>
        <th>video + motion graphics</th>
      </tr>
      <tr>
        <td class="tooltip" @click="aiClick()" :class="{ clicked: aiHid }">
          Illustrator<span class="tooltiptext" :class="{ visible: aiHid }"
            >Adobe Illustrator is a vector graphics editor and design
            program.</span
          >
        </td>
        <td
          class="tooltip"
          @click="sketchClick()"
          :class="{ clicked: sketchHid }"
        >
          Sketch<span class="tooltiptext" :class="{ visible: sketchHid }"
            >Sketch is a vector graphics editor for user interface and user
            experience design of websites and mobile apps.</span
          >
        </td>
        <td class="tooltip" @click="htmlClick()" :class="{ clicked: htmlHid }">
          HTML<span class="tooltiptext left" :class="{ visible: htmlHid }"
            >The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web
            browser.</span
          >
        </td>
        <td class="tooltip" @click="prClick()" :class="{ clicked: prHid }">
          Premiere Pro
          <span class="tooltiptext left" :class="{ visible: prHid }"
            >Adobe Premiere Pro is a timeline-based video editing software
            application.</span
          >
        </td>
      </tr>
      <tr>
        <td class="tooltip" @click="psClick()" :class="{ clicked: psHid }">
          Photoshop<span class="tooltiptext" :class="{ visible: psHid }"
            >Adobe Photoshop is a raster graphics editor that has become the
            industry standard not only in raster graphics editing, but in
            digital art as a whole.</span
          >
        </td>
        <td class="tooltip" @click="figClick()" :class="{ clicked: figHid }">
          Figma<span class="tooltiptext" :class="{ visible: figHid }"
            >Figma is a vector graphics editor and prototyping tool which
            focuses on use in user interface and user experience design, with an
            emphasis on real-time collaboration.</span
          >
        </td>
        <td class="tooltip" @click="cssClick()" :class="{ clicked: cssHid }">
          CSS<span class="tooltiptext left" :class="{ visible: cssHid }"
            >Cascading Style Sheets is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML.</span
          >
        </td>
        <td class="tooltip" @click="aeClick()" :class="{ clicked: aeHid }">
          After Effects<span
            class="tooltiptext left"
            :class="{ visible: aeHid }"
            >Adobe After Effects is a digital visual effects, motion graphics,
            and compositing application used in the post-production process of
            film making, video games and television production.</span
          >
        </td>
      </tr>
      <tr>
        <td class="tooltip" @click="idClick()" :class="{ clicked: idHid }">
          InDesign<span class="tooltiptext highest" :class="{ visible: idHid }"
            >Adobe InDesign is a desktop publishing and page layout designing
            software application used to create works such as posters, flyers,
            brochures, magazines, newspapers, presentations, books and
            ebooks.</span
          >
        </td>
        <td class="tooltip" @click="xdClick()" :class="{ clicked: xdHid }">
          XD<span class="tooltiptext" :class="{ visible: xdHid }"
            >Adobe XD is a vector-based user experience design tool for web apps
            and mobile apps</span
          >
        </td>
        <td class="tooltip" @click="jsClick()" :class="{ clicked: jsHid }">
          Javascript<span class="tooltiptext left" :class="{ visible: jsHid }"
            >JavaScript, often abbreviated JS, is a programming language that is
            one of the core technologies of the World Wide Web, alongside HTML
            and CSS.
          </span>
        </td>
        <td class="tooltip" @click="auClick()" :class="{ clicked: auHid }">
          Audition<span class="tooltiptext left" :class="{ visible: auHid }"
            >Adobe Audition is a digital audio workstation.</span
          >
        </td>
      </tr>
      <tr>
        <td class="empty-cell"></td>
        <td class="tooltip" @click="zepClick()" :class="{ clicked: zepHid }">
          Zeplin
          <span class="tooltiptext lift highest" :class="{ visible: zepHid }"
            >Zeplin is a plugin and standalone desktop application designed to
            bridge the gap between designers and engineers by taking designs
            from Sketch, Adobe XD CC, Figma, or Adobe Photoshop CC and exporting
            them into a format which generates code snippets, design specs, and
            assets.</span
          >
        </td>
        <td class="tooltip" @click="vueClick()" :class="{ clicked: vueHid }">
          Vue
          <span class="tooltiptext left lift" :class="{ visible: vueHid }"
            >Vue.js is an open-source model–view–viewmodel front end JavaScript
            framework for building user interfaces and single-page applications.
            <br /><span class="italics"
              >It was actually the framework used in the creation of this
              website!</span
            >
          </span>
        </td>
        <td class="empty-cell"></td>
      </tr>
    </table>

    <table class="table-slim">
      <thead>
        <th colspan="3">My Toolbox</th>
      </thead>
      <tr>
        <th>graphic design</th>
        <td class="tooltip" @click="aiClick()" :class="{ clicked: aiHid }">
          Illustrator<span class="tooltiptext" :class="{ visible: aiHid }"
            >Adobe Illustrator is a vector graphics editor and design
            program.</span
          >
        </td>
        <td class="tooltip" @click="idClick()" :class="{ clicked: idHid }">
          InDesign<span class="tooltiptext right" :class="{ visible: idHid }"
            >Adobe InDesign is a desktop publishing and page layout designing
            software application used to create works such as posters, flyers,
            brochures, magazines, newspapers, presentations, books and
            ebooks.</span
          >
        </td>
      </tr>
      <tr>
        <th></th>
        <td class="tooltip" @click="psClick()" :class="{ clicked: psHid }">
          Photoshop<span class="tooltiptext" :class="{ visible: psHid }"
            >Adobe Photoshop is a raster graphics editor that has become the
            industry standard not only in raster graphics editing, but in
            digital art as a whole.</span
          >
        </td>
        <td class="empty-cell"></td>
      </tr>
      <tr>
        <th>web design</th>
        <td
          class="tooltip"
          @click="sketchClick()"
          :class="{ clicked: sketchHid }"
        >
          Sketch<span class="tooltiptext" :class="{ visible: sketchHid }"
            >Sketch is a vector graphics editor for user interface and user
            experience design of websites and mobile apps.</span
          >
        </td>
        <td class="tooltip" @click="figClick()" :class="{ clicked: figHid }">
          Figma<span class="tooltiptext right" :class="{ visible: figHid }"
            >Figma is a vector graphics editor and prototyping tool which
            focuses on use in user interface and user experience design, with an
            emphasis on real-time collaboration.</span
          >
        </td>
      </tr>
      <tr>
        <th></th>
        <td class="tooltip" @click="xdClick()" :class="{ clicked: xdHid }">
          XD<span class="tooltiptext" :class="{ visible: xdHid }"
            >Adobe XD is a vector-based user experience design tool for web apps
            and mobile apps</span
          >
        </td>
        <td class="tooltip" @click="zepClick()" :class="{ clicked: zepHid }">
          Zeplin
          <span class="tooltiptext right higher" :class="{ visible: zepHid }"
            >Zeplin is a plugin and standalone desktop application designed to
            bridge the gap between designers and engineers by taking designs
            from Sketch, Adobe XD CC, Figma, or Adobe Photoshop CC and exporting
            them into a format which generates code snippets, design specs, and
            assets.</span
          >
        </td>
      </tr>

      <tr>
        <th>web development</th>
        <td class="tooltip" @click="htmlClick()" :class="{ clicked: htmlHid }">
          HTML<span
            class="tooltiptext left higher"
            :class="{ visible: htmlHid }"
            >The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web
            browser.</span
          >
        </td>
        <td class="tooltip" @click="cssClick()" :class="{ clicked: cssHid }">
          CSS<span class="tooltiptext right" :class="{ visible: cssHid }"
            >Cascading Style Sheets is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML.</span
          >
        </td>
      </tr>
      <tr>
        <th></th>
        <td class="tooltip" @click="jsClick()" :class="{ clicked: jsHid }">
          Javascript<span
            class="tooltiptext left higher"
            :class="{ visible: jsHid }"
            >JavaScript, often abbreviated JS, is a programming language that is
            one of the core technologies of the World Wide Web, alongside HTML
            and CSS.
          </span>
        </td>
        <td class="tooltip" @click="vueClick()" :class="{ clicked: vueHid }">
          Vue
          <span class="tooltiptext right higher" :class="{ visible: vueHid }"
            >Vue.js is an open-source model–view–viewmodel front end JavaScript
            framework for building user interfaces and single-page applications.
            <br />
            <br /><span class="italics"
              >It was actually the framework used in the creation of this
              website!</span
            >
          </span>
        </td>
      </tr>
      <tr>
        <th>video + motion graphics</th>
        <td class="tooltip" @click="prClick()" :class="{ clicked: prHid }">
          Premiere Pro
          <span class="tooltiptext left" :class="{ visible: prHid }"
            >Adobe Premiere Pro is a timeline-based video editing software
            application.</span
          >
        </td>
        <td class="tooltip" @click="aeClick()" :class="{ clicked: aeHid }">
          After Effects<span
            class="tooltiptext right higher"
            :class="{ visible: aeHid }"
            >Adobe After Effects is a digital visual effects, motion graphics,
            and compositing application used in the post-production process of
            film making, video games and television production.</span
          >
        </td>
      </tr>
      <tr>
        <th></th>
        <td class="tooltip" @click="auClick()" :class="{ clicked: auHid }">
          Audition<span class="tooltiptext left bot" :class="{ visible: auHid }"
            >Adobe Audition is a digital audio workstation.</span
          >
        </td>
        <td class="empty-cell"></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aiHid: false,
      sketchHid: false,
      htmlHid: false,
      prHid: false,
      psHid: false,
      figHid: false,
      cssHid: false,
      aeHid: false,
      idHid: false,
      xdHid: false,
      jsHid: false,
      auHid: false,
      zepHid: false,
      vueHid: false,
    };
  },
  methods: {
    closeTooltips() {
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    aiClick() {
      this.aiHid = !this.aiHid;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    sketchClick() {
      this.sketchHid = !this.sketchHid;
      this.aiHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    htmlClick() {
      this.htmlHid = !this.htmlHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    prClick() {
      this.prHid = !this.prHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    psClick() {
      this.psHid = !this.psHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    figClick() {
      this.figHid = !this.figHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    aeClick() {
      this.aeHid = !this.aeHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    cssClick() {
      this.cssHid = !this.cssHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    idClick() {
      this.idHid = !this.idHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    xdClick() {
      this.xdHid = !this.xdHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    jsClick() {
      this.jsHid = !this.jsHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.auHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    auClick() {
      this.auHid = !this.auHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.zepHid = false;
      this.vueHid = false;
    },
    zepClick() {
      this.zepHid = !this.zepHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.vueHid = false;
    },
    vueClick() {
      this.vueHid = !this.vueHid;
      this.aiHid = false;
      this.sketchHid = false;
      this.htmlHid = false;
      this.prHid = false;
      this.psHid = false;
      this.figHid = false;
      this.cssHid = false;
      this.aeHid = false;
      this.idHid = false;
      this.xdHid = false;
      this.jsHid = false;
      this.auHid = false;
      this.zepHid = false;
    },
  },
};
</script>
<style>
/* 
table {
  color: var(--heavy);
  border-collapse: collapse;
  width: 100%;
  background: var(--menuBack);
  border-radius: var(--border-radius);
} */
.toolbox-wrapper {
  width: 100%;
}
table {
  border-spacing: 10px;
  margin: 0 auto;
}

th {
  font-size: 0.7rem;
  letter-spacing: 0px;
  font-weight: 500;
  font-style: italic;
  /* background: var(--off); */
  /* border: 1px solid var(--light); */
  padding: 7px 20px;
  color: var(--heavy);
}
thead th {
  text-align: center;
  border-radius: 0;
  border-bottom: 1px solid var(--text);
  color: var(--text);
  font-size: 1rem;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 5px;
  font-weight: 900;
  padding: 10px 0;
}
td,
th {
  border: none;
  background: none;
  text-align: center;
  padding: 0;
  border-radius: var(--border-radius);
  width: 25%;
}
td {
  padding: 10px 30px;
  /* text-decoration: underline; */
  background: var(--menuBack);
}
td:hover,
td:active {
  background: var(--heavy);
  /* border-color: var(--heavy); */
  color: var(--light);
  text-decoration: none;
  cursor: pointer;
}

/* tooltip */
.tooltip {
  position: relative;
  color: var(--text);
  /* border-bottom: 1px dotted black; */
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200%;
  background-color: var(--light);
  color: var(--text);
  text-align: center;
  border-radius: 6px;
  padding: 10px 15px 12px;
  border: 1px solid var(--heavy);
  font-size: 14px;
  line-height: 1.2rem;
  text-align: left;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 0%;
  left: calc(100% + 5px);
  margin-left: 0;
}
.tooltip .left {
  left: calc(-200% - 5px);
}
.tooltip .lift {
  top: calc(-250% - 5px);
}
.tooltip .higher {
  top: -225%;
}
.tooltip .highest {
  top: -330%;
}
.tooltip .visible {
  visibility: visible;
}

/* .tooltip:hover .tooltiptext, .tooltip:active .tooltiptext {
  visibility: visible;
} */
.italics {
  font-style: italic;
}
.table-slim {
  display: none;
}
.empty-cell {
  background: none;
}
.empty-cell:hover {
  background: none;
}

.clicked {
  background: var(--heavy);
  color: var(--light);
}
@media (max-width: 960px) {
  td {
    padding: 10px;
  }
  .table-slim th {
    text-align: left;
  }
}
@media (max-width: 640px) {
  .table-wide {
    /* overflow-x: auto; */
    /* overflow-y: hidden; */
    display: none;
  }
  .table-slim {
    display: block;
  }
  .tooltip .tooltiptext {
    width: 110%;
    top: -200%;
    left: calc(-95% - 5px);
  }
  .tooltip .right {
    width: 200%;
    left: calc(-200% - 5px);
    top: -150%;
  }
  .tooltip .higher {
    top: -500%;
  }
  td {
    padding: 5px;
  }
}
@media (max-height: 450px) {
  .table-wide {
    display: none;
  }
  .table-slim {
    display: none;
  }
}
</style>
