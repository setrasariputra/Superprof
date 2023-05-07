<template>
  <!-- <el-header> -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
        <b>Eko</b>
        <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </el-menu-item>
    </el-menu>
  <!-- </el-header> -->
</template>

<script>
import { 
    ElHeader, 
    ElMenu, 
    ElMenuItem,
    ElAvatar 
} from 'element-plus'

export default {
  name: 'NavHeader',
  components: {
    ElHeader,
    ElMenu,
    ElMenuItem,
    ElAvatar
  }
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
