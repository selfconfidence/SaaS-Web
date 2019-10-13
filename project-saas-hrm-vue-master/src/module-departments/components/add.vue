<template>

<div>

<el-dialog title="新增部门信息" :visible.sync="dialogFormVisible">
  <el-form :model="pojo" label-width="120px" >
    <el-form-item label="部门名称">
      <el-input v-model="pojo.name" autocomplete="off"></el-input>
    </el-form-item>

     <el-form-item label="部门编码" >
      <el-input v-model="pojo.code" autocomplete="off"></el-input>
    </el-form-item>

     <el-form-item label="部门管理人">
      <el-input v-model="pojo.manager" autocomplete="off"></el-input>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="save">保存</el-button>
  </div>
</el-dialog>

</div>
    
</template>

<script>
import {findAll,deleteById,saveOrUpdate,findById} from '@/api/base/departments'

export default {
    data(){
        return{
             dialogFormVisible:false,
              pojo:{},
               deptId:'',
               entity:{},
                departData:{},
        }
    },
    methods:{

     save(){
      this.pojo.pid = this.deptId;
      this.pojo.companyId = this.departData.companyId;
saveOrUpdate(this.pojo).then( res =>{
     this.$message({
                 type: res.data.success?'success':'error',
                 message: res.data.message
          });
          this.dialogFormVisible = false;
          this.findByList(this.entity);
})
    },
    }
}
</script>