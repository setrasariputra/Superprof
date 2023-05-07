<template>
  <Auth />
  <div class="common-layout">
    <el-container>
        <el-header>
            <NavHeader />
        </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import Auth from '../components/Auth.vue'
import { ElContainer, ElHeader, ElMain } from 'element-plus'
import NavHeader from '../components/NavHeader.vue';
export default {
  name: 'DashboardView',
  components: {
    Auth,
    ElContainer,
    ElHeader,
    ElMain,
    NavHeader
  }
}
</script>

<style scoped></style>
