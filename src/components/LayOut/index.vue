<template>
    <div class="common-layout">
        <el-container>
            <el-header class="common-header flex-float">
                <div class="flex">
                    <img class="logo" src="@/assets/logo.png">
                    <h1 class="title">通用后台管理系统</h1>
                </div>
                <el-button type="danger">退出</el-button>
            </el-header>
            <el-container>
                <el-aside class="common-aside" width="200px">
                    <el-menu background-color="none" text-color="none" :router="true">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <User />
                                </el-icon>
                                <span>账号管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/user">账号列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon><Avatar /></el-icon>
                                <span>角色管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/roles">角色列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "LayOut"
};
</script>

<style lang="less" scoped>
.el-container {
    height: 100vh;

    .common-header {
        background: skyblue;
        display: flex;

        .logo {
            width: 80px;
        }

        .title {
            color: white;
        }
    }

    .common-aside {
        background: yellowgreen;
        color: white;
    }
}
</style>