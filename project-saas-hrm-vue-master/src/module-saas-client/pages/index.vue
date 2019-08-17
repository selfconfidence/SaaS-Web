<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
     <el-table
      :data="dataList"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="企业名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="version"
        label="当前版本"
        width="180">
      </el-table-column>
      <el-table-column
        prop="legalRepresentative"
        label="法定代表人">
      </el-table-column>

       <el-table-column
      fixed="right"
      label="状态"
      width="100">
      <template slot-scope="scope">
      <el-switch
  v-model="scope.state"
  active-value="1"
  inactive-value="0"
  disabled
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
      </template>
    </el-table-column>

          <el-table-column
        prop="expirationDate"
        label="到期时间">
      </el-table-column>

      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
      <router-link style="color:blue" :to="'/saas-client/datile/'+scope.row.id">编辑</router-link>
      </template>
    </el-table-column>
    </el-table>

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
      }
    }
  },
  methods: {
    // 获取列表数据
    getList(data) {
      list(data).then(res => {
          this.dataList = res.data.rows
          
      })
    }
  },
  // 创建完毕状态
  created() {
    
    this.getList(this.entity)
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
