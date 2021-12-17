<template>
  <div class="main">
    <div class="aside">
        <el-menu :default-active="activeIndex" router  @select="handleSelect">
            <el-menu-item index="/about" >
                <el-icon><setting /></el-icon>
                <span>Navigator1</span>
            </el-menu-item>
            <el-menu-item index="/test" >
                <el-icon><setting /></el-icon>
                <span>Navigator2</span>
            </el-menu-item>
        </el-menu>
    </div>
    <div class="main-header">

    </div>
    <div class="main-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
let activeIndex = ref('/about')
function handleSelect(key:string, keyPath:string[]):void{
    activeIndex.value = key
}
</script>

<style lang="less">
.main{
    .aside{
        width: 200px;
        overflow: auto;
        background: rgb(73, 80, 96);
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .main-header{
        position: fixed;
        width: 100%;
        height: 60px;
        z-index: 9;
        border: 1px solid red;
    }
    .main-content{
        position: absolute;
        top: 70px;
        right: 0;
        bottom:0;
        overflow: auto;
        background: #eee;
        z-index: 1;
        border: 1px solid blue;
        left: 200px;
    }
}
</style>