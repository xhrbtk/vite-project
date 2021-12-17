<template>
    <div class="form-wrap">
        <el-form 
        ref="ruleForm"
        :model="loginData.ruleForm"
        label-width="120px"
        >
        <el-form-item label="AccountName" prop="name">
            <el-input v-model="loginData.ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="PassWord" prop="password">
            <el-input v-model="loginData.ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="logIn">登录</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
interface form {
    name: string,
    password: any
}
let ruleForm:form = {
    name: '',
    password: ''
}
let loginData = reactive({
    ruleForm
})
function logIn(): void {
    console.log('ruleForm', loginData.ruleForm)
    router.push({ name: 'home' })
}
</script>

<style lang="less">
.form-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>