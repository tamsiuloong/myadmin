<template>
  <div>
    <el-container>
      <el-header>MyAdmin</el-header>
      <el-container>
        <el-aside><navi/></el-aside>
        <el-main ><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navi from '../components/Navi'
export default {
  name: 'Layout',
  components:{Navi},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .el-header{
    background-color: cornsilk;
  }
</style>
