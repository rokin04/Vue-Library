<template>
  <div>
    <formspage class="wrapper-form" :onSubmit="onSubmit" />
    <div v-if="this.islog">Incorrect credentials</div>
  </div>
</template>

<script>
import FormsPageVue from "../components/FormsPage.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "login",
  components: {
    formspage: FormsPageVue
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapState({
      isLogged: state => state.isLogged
    }),
    islog() {
      console.log(this.isLogged);
      return this.isLogged;
    }
  },
  methods: {
    ...mapActions(["updateUser"]),
    async onSubmit(formData) {
      const val = await fetch("users.json");
      const response = await val.json();
      const validate =
        formData.username == response.username &&
        formData.password == response.password;
      if (validate) {
        this.updateUser(!validate);
        this.$router.push({ path: "/dashboard" });
      } else {
        this.updateUser(!validate);
      }
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
