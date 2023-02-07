<template>
  <div>
    <!-- <ContactForm /> -->
    <div class="page-wrapper" id="top">
      <div class="page-header">
        <h1>Contact</h1>
        <BackButton />
      </div>
      <ContactForm />
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
@import "../styles/PageStyles.css";
</style>
