<template>
  <!-- <ContactForm /> -->
  <div class="contact-wrapper">
    <h3>Contact Form</h3>
    <div class="content-wrapper">
      <div class="form-container">
        <ContactForm />
      </div>
    </div>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
// export default {
//   name: 'Contact',
//   components: {
//     ContactForm
//   }
// }

export default {
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
/* Form */
.contact-wrapper {
  margin: 0 30px 0 120px;
}
.content-wrapper {
  /* width: 100vw; */
  /* position: relative; */
  /* top: 0; */
  /* margin: 0 30px 0 120px; */
  /* display: flex;
  flex-flow: row;
  justify-content: space-between; */
  /* overflow-y: scroll; */
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.form-container {
  margin: 20px 0 0 20px;
  padding: 30px 20px;
  background: var(--light);
  border-radius: 8px;
  max-width: 60vw;
}
</style>
