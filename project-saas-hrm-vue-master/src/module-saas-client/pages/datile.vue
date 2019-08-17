<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
   
  <el-tabs v-model="activeName">
    <el-tab-pane label="企业详情" name="first">

<el-form ref="form" :model="pojo" label-width="80px">
  <el-form-item label="企业名称">
    <el-input v-model="pojo.name" disabled></el-input>
  </el-form-item>

  
  <el-form-item label="企业状态">
    <el-switch v-model="pojo.state" 
     active-value="1"
  inactive-value="0"
  disabled
  active-color="#13ce66"
  inactive-color="#ff4949"
     ></el-switch>
  </el-form-item>
  

</el-form>

    </el-tab-pane>
    <el-tab-pane label="缴费通知" name="second">缴费通知</el-tab-pane>
    <el-tab-pane label="企业网址" name="third">企业网址</el-tab-pane>
  
  </el-tabs>

      </el-card>
     </div>
  </div>
</template>

<script>
import {list ,findById} from '@/api/base/saasClient'
export default {
  name: 'saas-clients-index',
  data() {
    return {
      dataList: [],
      entity:{
        page:1,
        size:10
      },
      pojo:{},
      activeName:'first'
    }
  },
  methods: {
    // 获取列表数据
    findById(data) {
      findById(data).then(res => {
          this.pojo = res.data.data
          
      })
    }
  },
  // 创建完毕状态
  created() {
    const id = this.$route.params.id;
    this.findById({id:id})
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}

.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
