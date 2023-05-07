<template>
  <LoginForm />
  <div class="mon-cta">
    <a>Belum punya akun?</a>
    <a class="button-secondary">Buat Akun</a>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'LoginView',
  components: {
    LoginForm
  }
}
</script>

<style scoped></style>
