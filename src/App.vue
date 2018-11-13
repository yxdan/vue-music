<template>
  <div id="app">
    <!--<router-view/>-->
    <m-header></m-header>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header'
export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang="less">
@import "common/less/index.less";
</style>
