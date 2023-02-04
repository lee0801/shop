<template>
    <h2>{{ num }}</h2>
    <h2>{{ numStatus }}</h2>
    <button @click="handleLogin">修改为2</button>
    <div class="container-login">
        <div class="container-form">
            <el-form ref="formRef" :model="loginData" label-width="100px" class="demo-dynamic">
                <el-form-item prop="username" label="用户名" :rules="[
                    {
                        required: true,
                        message: '必填项',
                        trigger: 'blur',
                    }
                ]">
                    <el-input v-model="loginData.username" />
                </el-form-item>
                <el-form-item prop="password" label="密码" :rules="[
                    {
                        required: true,
                        message: '必填项',
                        trigger: 'blur',
                    }
                ]">
                    <el-input type="password" v-model="loginData.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="login_btn" @click="submitForm(formRef)">登录</el-button>
                    <!-- <el-button @click="addDomain">New domain</el-button> -->
                    <el-button @click="resetForm(formRef)">重置账号密码</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
    
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex'
export default {
    name: 'ShopLogin',
    setup() {
        //使用vuex中的数据
        const store = useStore()
        const count = store.state.number.count

        const data = reactive({
            loginData:{
                username:'',
                password:''
            },
            num:count,
            numStatus:!store.getters["number/countStatus"]
        })
        
        const handleLogin = ()=>{
            // store.commit('number/setCount',2)
            store.dispatch('number/setCountPromise',2)
        }

        return {
            ...toRefs(data),
            handleLogin
        }
    }
};
</script>

<style lang="less" scoped>
.container-login {
    width: 100%;
    height: 100vh;
    background: rgb(87, 121, 172);

    .container-form {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgb(252, 249, 245);
        padding: 30px 50px;

        .login_btn{
            display: flex;
        }
    }
}
</style>