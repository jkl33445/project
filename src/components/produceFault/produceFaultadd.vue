<!-- html部分 -->
<template>
	<div style="margin-top: 50px;">
		<h1 style="margin-bottom: 50px;">故障信息添加页面</h1>
		<el-row>
		  <el-select v-model="devid" placeholder="请选择设备名称" style='width:22%'>
				<el-option
				  v-for="item in optiona"
				  :label="item.devname"
				  :value="item.devid" 
				  :key='item.devid'>
				</el-option>
			</el-select>
			<el-col :span="12"> <el-input style='width:45%' v-model='cause' placeholder='请输入故障原因'></el-input> </el-col>
		</el-row>
		<el-row>
			 <el-col :span="12"> <el-input style='width:45%' v-model='faultuser' placeholder='请输入报告人姓名'></el-input> </el-col>
			 <el-col :span="12"> <el-input style='width:45%' v-model='faulttime' placeholder='请输入故障时间'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='saveadd()'>添加</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				devid:'',
				optiona:[],
				cause:'',
				faultuser:'',
				faulttime:''
			};
		},
		methods:{
			cancel(){
				this.$router.go(-1)
			},
			saveadd(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/insert"
				// 传递给后端的数据
				var data = {devid:this.devid,cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/produceFault'});
				})
				
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list";
			this.$axios.post(url,{
				headers:{
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.optiona = res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-row{
		margin-top: 30px;
	}
</style>
