<template>
  <div class="wrapper-form">
    <div>
      <b-form-group
        id="input-group-1"
        label="Enter username:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Enter password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          type="password"
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" @click="Submit" variant="primary">Login</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormsPageVue",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  props: {
    onSubmit: {
      type: Function
    }
  },
  methods: {
    Submit() {
      console.log("submitted");
      this.onSubmit(this.form);
    }
  }
};
</script>

<style scoped>
.wrapper-form {
  margin: 0 auto;
}
</style>
