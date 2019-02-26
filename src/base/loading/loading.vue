<template>
  <div class="loading">
    <img width='24' height='24' src="./loading.gif" alt="">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>

<style scoped lang="less">
@import "../../common/less/variable";
@import "../../common/less/mixin";
.loading{
  width:100%;
  text-align: center;
  .color_bg_d;
  .border_radius(@radius:4px);
  padding:10px;
  .desc{
    line-height: 20px;
    .font_size_small_s;
    .color_text;
  }
}
</style>
