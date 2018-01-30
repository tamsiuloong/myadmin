<template>
  <div>
    <el-container>
      <el-header>MyAdmin

        <a @click="logout">退出</a>

      </el-header>
      <el-container>
        <el-aside>
          <navi/>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Cookies from "js-cookie"
  import Navi from '../components/Navi'
  export default {
    name: 'Layout',
    components: {Navi},
    data () {
      return {}
    },
    methods:{
      logout:function(){
        this.$axios({
          url: "logout",
          method: "POST"
        }).then(res => {

          Cookies.set("isLogin", "0", { expires: 7 });
          Cookies.set("XSRF-TOKEN", "0", { expires: 0 });
          this.$router.push("login");
//              this.getMenu();
        });
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: cornsilk;
  }
</style>
