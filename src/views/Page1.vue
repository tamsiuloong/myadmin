<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="age"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="addr"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'page1',
  data() {
    return {
      tableData: [{
        age: '2016-05-02',
        name: '王小虎',
        addr: '上海市普陀区金沙江路 1518 弄'
      }, {
        age: '2016-05-04',
        name: '王小虎',
        addr: '上海市普陀区金沙江路 1517 弄'
      }, {
        age: '2016-05-01',
        name: '王小虎',
        addr: '上海市普陀区金沙江路 1519 弄'
      }, {
        age: '2016-05-03',
        name: '王小虎',
        addr: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created:function(){
    this.$axios({
      url: "/user",
      crossDomain:true,
      xhrFields: {  withCredentials: true  },
      method: "get"
    }).then(res => {
     this.tableData = res.data.list;
    });
  }
}
</script>

<style scoped>

</style>
