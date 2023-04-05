<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/helper.scss";
  body{
    line-height: 1.5;
    color: inherit;
    font-family: $font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-size: 16px;
  }
  a{
    text-decoration: none;
  }


</style>
