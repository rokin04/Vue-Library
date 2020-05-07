<template>
  <formspage :onSubmit="onSubmit" :isLogin="isLogin" />
</template>

<script>
import { mapActions } from "vuex";
import FormsPageVue from "../components/FormsPage.vue";
export default {
  name: "login",
  components: {
    formspage: FormsPageVue
  },
  data() {
    return {
      show: true,
      isLogin: true
    };
  },
  computed: {},
  methods: {
    ...mapActions(["apilogin"]),
    async onSubmit(formData) {
      const data = await this.apilogin(formData);
      console.log("apilogin", data);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
    }
  }
};
</script>
<style>
.wrapper-form {
  margin: 0 auto;
  width: 40%;
}
</style>
