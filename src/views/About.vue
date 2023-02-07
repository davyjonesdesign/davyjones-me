<template>
  <div>
    <!-- about me -->
    <div class="page-wrapper">
      <!-- <div class="about-img" :class="{ hideAboutImg: isActive }">
          
          <div class="image-overlay"></div>
        </div> -->
      <div class="page-header">
        <h1 id="top">About</h1>
        <BackButton />
      </div>
      <div class="about-wrapper">
        <div class="about-content">
          <!-- <div class="about-block">
                <h5>Background</h5>

                <p>
                  My name is Davy Jones and I've been in the graphic and web
                  design world for 6 years. I have filled the roles of
                  communications specialist, digital marketer, social media
                  manager, video creator, and UX/UI web designer. Simultaneously
                  I operate a freelance design practice and attend Minneapolis
                  College of Art and Design's Masters of Graphic and Web Design
                  Program.
                </p>
                <h5>Values</h5>
                <p>
                  It has become my goal to bring a sense joy and cohesiveness to
                  the professional field. Many designers struggle with
                  collaboration, and mental flexibility. I aim to step in that
                  gap and work towards cultivating those skills in myself and
                  pass them along to my team.
                </p>
                <p>
                  In every project, I strive to bring a unique perspective to
                  collaborate work.
                </p>
              </div>

              <div class="about-block">
                <h5>Experience</h5>
                <p class="remove-marg">
                  My time as a design professional and student has:
                </p>
                <ul>
                  <li>
                    Provided a robust vocabulary to better communicate with
                    peers and clients.
                  </li>
                  <li>
                    Challenged internal instincts and introduced new ways of
                    designing in my practice.
                  </li>
                  <li>
                    Shown what an important and stabilizing force collaboration
                    and peer feedback are in all design environments.
                  </li>
                </ul>
                <p>
                  Experience in the field has taught me to be extremely
                  responsive to feedback. As a result, I have learned to work
                  with new mediums. For example, learning the Vue framework in
                  my schoolwork equipped me with a new understanding of web
                  technologies. I now find Vue has increased efficient
                  communication between our developer teams and myself. It's
                  this openness to pursuing the unknown that allows me to bring
                  a fresh perspective leading to new solutions.
                </p>
              </div>
              <p>
                Various teams have taught me not to fear dead ends or failed
                possibilities. I love this journey that I am on, and I look
                forward to continueing to practice design in a spirit of joy,
                collaboration and excellence.
              </p> -->
          <p>
            I'm Davy Jones, a UX/UI Designer with 6 years of experience in
            graphic and web design. I bring a unique perspective to design,
            valuing collaboration and mental flexibility, and strive to bring
            joy and cohesiveness to projects.
          </p>
          <p>
            As a student in the Masters of Graphic and Web Design program at
            Minneapolis College of Art and Design, I stay current with industry
            tools and techniques.
          </p>
          <p>
            My expertise includes Illustrator, Sketch, Figma, HTML, CSS, and
            Javascript. Let's bring your vision to life with fresh solutions and
            a passion for design excellence.
          </p>
          <ToolBox />
        </div>
        <img
          class="sticky"
          src="@/assets/me.jpg"
          alt="picture of me, Davy Jones"
        />
      </div>
    </div>
    <intersection-observer
      sentinal-name="sentinal-name"
      @on-intersection-element="onIntersectionElement"
    ></intersection-observer>
    <Foot id="foot" />
  </div>
</template>
<script>
// @ is an alias to /src

import ToolBox from "@/components/ToolBox.vue";
import Foot from "@/components/Footer.vue";
import IntersectionObserver from "@/components/IntersectionObserver.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "Home",
  components: {
    ToolBox,
    Foot,
    IntersectionObserver,
    BackButton,
  },
  data() {
    return {
      isActive: false,
      isIntersectingElement: false,
    };
  },
  methods: {
    onIntersectionElement(value) {
      this.isActive = !this.isActive;
      this.isIntersectingElement = value;
    },
  },
};
</script>
<style scoped>
@import "../styles/PageStyles.css";

.about-wrapper {
  display: flex;
  justify-content: space-between;
}
.about-wrapper img {
  border-radius: 100%;
  max-width: 25vw;
  max-height: 25vw;
  object-fit: cover;
  margin: 40px 20px;
}
.about-content {
  margin: 0 0 20px;
}

@media (max-width: 960px) {
  .about-wrapper img {
    max-width: 200px;
    max-height: 200px;
  }
}
@media (max-width: 640px) {
  .about-wrapper img {
    display: none;
  }
}
/* @media (max-width: 740px) {
  .about-block {
    width: 100%;
    margin-bottom: 0px;
  }
  .about-wrapper {
    width: 100vw;
  }
  .form-container {
    margin: 5px 5px 5px;
    padding: 10px 15px 20px;
    width: calc(100vw - 47px);
  }
  .about-section {
    flex-flow: column;
  }
  .header-block {
    padding: 20px 60px 20px 0;
    margin: 0 0 150px;
  }
  .header-block h1 {
    color: var(--btn-text);
    margin: 0;
  }
  .header-block .back-link {
    color: var(--btn-text);
  }
  .about-content {
    margin: 0 0;
    width: 100vw;
    z-index: 100;
    padding: 0px 20px 20px;
  }
  .about-img {
    width: 100vw;
    height: 40vh;
  }
  .image-overlay {
    background-image: linear-gradient(180deg, rgb(0, 0, 0), transparent);
    width: 100vw;
    height: 200px;
    position: fixed;
    top: 0;
  } 
}*/
</style>
