<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style scoped lang="less">
@import '../../common/less/variable';
.tab{
  display: flex;
  height:44px;
  line-height:44px;
  .font_size_medium;
  .color_bg;
  .tab-item{
    flex:1;
    text-align:center;
    .tab-link{
      padding-bottom:5px;
      .color_text_l;
    }
    &.router-link-active{
      .tab-link{
        .color_theme;
        border-bottom:2px solid @color;
      }
    }
  }
}
</style>
