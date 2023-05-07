<template>
  <!-- Start Block Logo-->
  <img src="../assets/logo/momon.svg" class="mon-login-logo" />
  <!-- End Block Logo-->
  <!-- Start Block Form -->
  <form method="post" action="" class="mon-boxlogin">
    <div class="mon-rowinput">
      <img src="../assets/icon/@ at.svg" class="input-icon" />
      <div class="mon-colinput">
        <label>Email</label>
        <input
          v-model="form.email"
          type="email"
          name="email"
          class="forminput"
          placeholder="Tulis email disini"
          required
        />
      </div>
    </div>
    <div class="mon-rowinput">
      <img src="../assets/icon/kunci.svg" class="input-icon" />
      <div class="mon-colinput">
        <label>Password</label>
        <input
          v-model="form.password"
          type="password"
          name="password"
          placeholder="******"
          class="forminput"
          required
        />
      </div>
    </div>
    <a href="#" class="button-secondary">Lupa Password</a>
    <!-- <input type="submit" value="Login" @click.prevent="onSubmit" class="button-primary" /> -->
    <el-button type="primary" @click.prevent="onSubmit" size="large" :loading="loading" round>Login</el-button>
  </form>
  <!-- End Block Form -->
</template>

<script>
import axios from "axios";
import { ElButton } from "element-plus";

export default {
  name: 'LoginForm',
  components: {
    ElButton,
  },
  data() {
    return {
      title: 'Selamat Data',
      urlLogin: '/api/v1/login',
      form: {
        email: '',
        password: '',
      },
      active: true,
      loading: false,

      baseURL: axios.defaults.baseURL,
      basefrontURL: axios.defaults.baseFrontURL,
    }
  },
  created() {
    console.log("Created");
  },
  methods: {
    async onSubmit() {
      try {
        // set button loading
        this.loading = true;

        // sukses
        const response = await axios({
          method: "post",
          url: this.urlLogin,
          data: this.form,
        });
        if(response.data.status == 'success') {
          // set button stop loading
          this.loading = false;

          const access_token = response.data.access_token;
          const expired_token = response.data.expires_in;

          // save to localStorage
          localStorage.setItem("access_token",access_token);
          localStorage.setItem("expired_token",expired_token);

          // redirect dashboard
          console.log("Sukses Login "+access_token);
          window.location.href = this.basefrontURL + "/dashboard";
        }
      } catch (error) {
        // error
        console.log(error);
      }
    }
  }
}
</script>

<style scoped></style>
