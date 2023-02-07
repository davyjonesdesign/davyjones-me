<template>
  <div>
    <div class="succcess" v-if="showSuc">
      <h1>Success!</h1>
      <p>Thanks for filling out my form. I'll be in touch.</p>
      <router-link class="link link-btn splash-btn" to="/">
        <div class="nav-link_text">Go back home?</div>
      </router-link>
    </div>
    <!-- our signup form ===================== -->
    <form
      @submit.prevent="sendEmail"
      method="POST"
      class="main"
      v-if="showMain"
    >
      <!-- name -->

      <div class="name-field">
        <div class="field left-field">
          <label class="label">First Name</label>
          <input
            type="text"
            class="input"
            name="nameFirst"
            placeholder="First Name"
            v-model="fname"
          />
        </div>

        <div class="field">
          <label class="label">Last Name</label>
          <input
            type="text"
            class="input"
            name="nameLast"
            placeholder="Last Name"
            v-model="lname"
          />
        </div>
      </div>

      <!-- email -->
      <div class="field">
        <label class="label">Email</label>
        <input
          type="email"
          class="input"
          name="email"
          placeholder="Email"
          v-model="email"
        />
      </div>

      <div class="field">
        <label class="label">Message</label>
        <textarea
          class="message"
          name="message"
          placeholder="Message"
          v-model="message"
          cols="30"
          rows="5"
        >
        </textarea>
      </div>
      <div class="alert error" v-if="errors.length > 0">
        <span v-for="error in errors" :key="error">
          {{ error }}<span v-if="errors.length > 1" class="pipe">|</span>
        </span>
      </div>
      <!-- submit button -->
      <div class="field has-text-right">
        <input type="submit" value="Send" id="" />
      </div>
    </form>
  </div>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",
  data() {
    return {
      contacts: [],
      fname: "",
      lname: "",
      email: "",
      message: "",
      errors: [],
      showMain: true,
      showSuc: false,
    };
  },
  methods: {
    // submit(){
    //   // form validation

    // },
    sendEmail(e) {
      this.errors = [];
      if (!this.fname) {
        this.errors.push("First name required");
      }
      if (!this.lname) {
        this.errors.push("Last name required");
      }
      if (!this.email) {
        this.errors.push("Email required");
      } else
        try {
          emailjs.sendForm(
            "service_r16vl9a",
            "davy-jones-contacts",
            e.target,
            "GdpZ57Y22GfDzj08_",
            {
              fname: this.fname,
              lname: this.lname,
              email: this.email,
              message: this.message,
            }
          );
          // hidding the form
          this.showMain = false;
          // showing the success message
          this.showSuc = true;
        } catch (error) {
          console.log({ error });
        }
      // Reset form field
      // this.fname = ''
      // this.lname = ''
      // this.email = ''
      // this.message = ''
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  color: var(--text);
  /* margin: 30px 20px; */
  margin-bottom: 20px;
}
.field {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 10px 0 0;
}
.name-field {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.name-field .left-field {
  /* width: 49%; */
  margin-right: 20px;
}
.form-names {
  display: flex;
  flex-direction: row;
}
.form-names input {
  width: 100%;
}
input[type="text"],
input[type="email"],
textarea,
select {
  border: none;
  font-size: 16px;
  height: auto;
  font-weight: 600;
  outline: 0;
  padding: 15px 20px;
  margin: 10px 0 0;
  max-width: 100%;
  color: var(--text);
  border-radius: 5px;
  transition: var(--transition-fastest);
  border: 2px solid var(--heavy);
  background: var(--light);
}
input[type="text"]:hover,
input[type="email"]:hover,
textarea:hover,
select:hover {
  border-color: var(--text);
  background: var(--off);
  transform: translate(3px, -3px);
  box-shadow: -3px 3px var(--heavy);
  /* color: var(--heavy); */
}
input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus,
select:focus {
  border-color: var(--text);
  background: var(--off);
  transform: translate(3px, -3px);
  box-shadow: -3px 3px var(--heavy);
}
input[type="submit"] {
  transition: var(--transition-faster);
  background-color: var(--light);
  border: 2px solid var(--heavy);
  color: var(--text);
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  font-weight: 800;
  padding: 15px 10px;
  margin: 10px 0 0;
  cursor: pointer;
  border-radius: 5px;
  max-width: 300px;
}
input[type="submit"]:hover {
  border-color: var(--text);
  background: var(--off);
  transform: translate(3px, -3px);
  box-shadow: -3px 3px var(--heavy);
}
input::placeholder,
textarea::placeholder {
  color: var(--text);
  font-weight: 700;
  opacity: 1;
}

.alert {
  border-radius: 5px;
  background: var(--off);
  border: 1px solid var(--outline);
  padding: 5px 8px;
  font-weight: 600;
  margin: 15px 0 0;
  letter-spacing: 0.5px;
}
.error {
  background: var(--error-light);
  border-color: var(--error-dark);
  color: var(--error-dark);
}
.pipe {
  margin: 0 10px;
  font-weight: 400;
}
.label {
  display: none;
}
@media (max-width: 600px) {
  input[type="submit"] {
    max-width: 100%;
  }
  .name-field {
    flex-direction: column;
  }
  .name-field .field {
    width: 100%;
  }
}
@media (max-height: 450px) {
  input[type="submit"],
  input[type="text"],
  input[type="email"],
  textarea,
  select {
    padding: 10px;
    font-size: 16px;
  }
}
</style>
