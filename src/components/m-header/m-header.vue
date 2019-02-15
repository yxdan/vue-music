<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script>
export default {
  name: 'm-header'
}
</script>

<style scoped lang="less">
@import '../../common/less/variable.less';
@import '../../common/less/mixin.less';
.m-header{
  .color_bg;
  .pos(r);
  height:44px;
  line-height:44px;
  text-align:center;
  .color_theme;
  font-size:0;
  .icon{
    display:inline-block;
    vertical-align: middle;
    margin-top:6px;
    width:30px;
    height:32px;
    margin-right:9px;
    .bg_image(@url:'logo.png');
    background-size:30px 32px;
  }
  .text{
    display:inline-block;
    vertical-align: middle;
    .font_size_large;
  }
}
</style>
