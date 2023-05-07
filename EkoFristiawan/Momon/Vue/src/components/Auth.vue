<template></template>

<script>
import axios from "axios";
export default {
  name: 'Auth',
  data() {
    return {
      basefrontURL: axios.defaults.baseFrontURL
    }
  },
  created() {
    this.authChecking();
  },
  methods: {
    authChecking() {
      // check token is not empty
      const access_token = localStorage.getItem('access_token')
      const expired_token = localStorage.getItem('expired_token')
      if (access_token === null || expired_token === null) {
        // redirect
        window.location.href = this.basefrontURL
      }
    }
  }
}
</script>
