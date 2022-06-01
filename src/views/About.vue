<template>
  <div>
    <!-- about me -->
    <div class="about-wrapper">
      <div class="about-section">
        <div class="about-img" :class="{ hideAboutImg: isActive }">
          <img
            class="sticky"
            src="@/assets/me.jpg"
            alt="picture of me, Davy Jones"
          />
          <div class="image-overlay"></div>
        </div>
        <div class="about-content">
          <div class="header-block">
            <h1 id="top">About</h1>
            <BackButton />
          </div>
          <div class="form-container">
            <div class="about-container">
              <div class="about-block">
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
              </p>
              <ToolBox />
            </div>
          </div>
        </div>
      </div>
    </div>
    <intersection-observer
      sentinal-name="sentinal-name"
      @on-intersection-element="onIntersectionElement"
    ></intersection-observer>
    <Foot id="foot" />
    <intersection-observer
      sentinal-name="sentinal-name"
      @on-intersection-element="onIntersectionElement1"
    ></intersection-observer>
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
    onIntersectionElement1(value) {
      this.isActive = !this.isActive;
      this.isIntersectingElement = value;
    }
  },
};
</script>
<style scoped>
/* About Section */
.about-wrapper {
  /* margin: 0 auto; */
  /* padding: 20px 10px; */
  /* margin: 60px 0; */
  width: 80vw;
  overflow: hidden;
}
.about-section {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 0 auto;
  border-radius: 8px;
}
.about-content {
  margin: 0px 40px 20px 140px;
}
.form-container {
  /* width: 100%; */
  /* height: calc(100% - 30px); */
  /* overflow-y: scroll; */
  /* margin-right: 30px; */
  padding: 30px 45px;
  background: var(--light);
  border-radius: var(--border-radius);
  /* box-shadow: 3px 3px 0 var(--heavy-op); */
  /* border: 1px solid var(--outline); */
  /* height: 50vh; */
}
.about-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.about-block {
  width: 48%;
  margin-bottom: 20px;
}
.about-block h5 {
  font-weight: 600;
  padding: 15px 0 0;
}
.about-content h1 {
  /* padding: 20px 0 0; */
  /* width: 50%; */
}
.about-img {
  position: fixed;
  right: 0px;
  top: 0;
  justify-self: flex-end;
  width: 19vw;
  height: 100vh;
  opacity: 1;
  transition: var(--transition);
}
.about-img img {
  /* min-width: 50%; */
  /* width: 100%; */
  /* margin: -30px 0; */
  height: 100%;
  width: 100%;
  align-self: flex-end;
  /* border-radius: 0 10px 10px 0; */
  object-fit: cover;
}
.hideAboutImg {
  opacity: 0;
}
.header-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.remove-marg {
  margin: 0;
}
@media (max-width: 960px) {
  .about-content {
    margin: 20px;
    width: 100%;
  }
  .form-container {
    margin: 0px 0px 20px;
    padding: 20px 30px;
  }
}
@media (max-width: 740px) {
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
    padding: 15px 50px 15px 0;
    margin: 0 0 150px;
  }
  .header-block h1 {
    margin: 0;
  }
  .about-content {
    margin: 0 0;
    width: 100vw;
    z-index: 100;
    padding: 0px 20px 20px;
  }
  .about-img {
    /* position: relative; */
    width: 100vw;
    /* margin-top: 70px; */
    height: 40vh;
  }
  .image-overlay {
    background-image: linear-gradient(180deg,rgba(0,0,0,.575), transparent);
    width: 100vw;
    height: 104px;
    position: fixed;
    top: 0;
  }
}
</style>
