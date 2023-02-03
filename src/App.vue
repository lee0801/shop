<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="less">
  body,html{
    margin: 0;
    padding: 0;
  }
    /* flex布局类名 */
    //子元素均匀分布
    .flex-float{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    //中心线对齐
    .flex{
      display: flex;
      align-items: center;
    }
</style>