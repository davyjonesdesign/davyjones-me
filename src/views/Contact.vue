<template>
  <div>
    <!-- <ContactForm /> -->
    <div class="contact-wrapper" id="top">
      <div class="content-wrapper">
        <div class="header-block">
          <h1>Contact</h1>
          <BackButton />
        </div>
        <div class="form-container">
          <ContactForm />
        </div>
      </div>
    </div>
    <Foot id="foot" />
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import Foot from "@/components/Footer.vue";
import BackButton from "@/components/BackButton.vue";

// export default {
//   name: 'Contact',
//   components: {
//     ContactForm
//   }
// }

export default {
  components: {
    ContactForm,
    Foot,
    BackButton,
  },
};
</script>

<style scoped>
/* Form */
.content-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0 20px 0 100px;
  padding: 20px 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.form-container {
  /* margin: 120px 20px 20px 130px; */
  padding: 20px 30px 30px;
  background: var(--light);
  /* border: 1px solid var(--outline); */
  border-radius: var(--border-radius);
  /* box-shadow: 3px 3px 0px var(--heavy-op); */
}
.header-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media (max-width: 960px) {
  .content-wrapper {
    margin: 0px 20px 0;
    padding: 0 0 20px;
    justify-content: flex-start;
    height: 100%;
  }
  .form-container {
    margin: 0px;
    padding: 20px 15px;
  }
  .header-block {
    padding: 20px 60px 20px 0;
    margin: 0 0 0px;
  }
  .header-block h1 {
    margin: 0;
  }
}
@media (max-width: 480px) {
  .form-container {
    margin: 20px 0;
    padding: 20px 15px;
  }
}
@media (max-height: 450px) {
  .content-wrapper {
    height: 100%;
    margin-top: 40px;
  }
}
</style>
