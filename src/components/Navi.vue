<template>
  <div>
    <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
      <!--<el-radio-button :label="false">展开</el-radio-button>-->
      <!--<el-radio-button :label="true">收起</el-radio-button>-->
    <!--</el-radio-group>-->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="1-4-1"><router-link to="/page1">角色列表</router-link></el-menu-item>
        <el-menu-item index="1-4-1"><router-link to="/page2">用户列表</router-link></el-menu-item>
        <!--<el-submenu index="1-4">-->
          <!--<span slot="title">角色管理</span>-->
          <!--<el-menu-item index="1-4-1">角色列表</el-menu-item>-->
        <!--</el-submenu>-->
        <!--<el-submenu index="1-5">-->
          <!--<span slot="title">用户管理</span>-->
          <!--<el-menu-item index="1-5-1">用户列表</el-menu-item>-->
        <!--</el-submenu>-->
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "sidebar",
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 600px;
  }
</style>
