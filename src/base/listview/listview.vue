<template>
  <scroll class="listview" :data="data">
    <ul>
      <li class="list_group" v-for="(group, index) in data" :key="index">
        <h2 class="list_group_title">{{group.title}}</h2>
        <ul>
          <li class="list_group_item" v-for="(item, index) in group.items" :key="index">
            <img class="avatar" v-lazy="item.avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from 'base/scroll/scroll'
export default {
  name: 'listview',
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang="less">
@import '../../common/less/variable.less';
.listview{
  position:relative;
  width:100%;
  height:100%;
  overflow: hidden;
  .color_bg;
  .list_group{
    padding-bottom:30px;
    .list_group_title{
      height:30px;
      line-height:30px;
      padding-left:20px;
      .font_size_large;
      .color_text_l;
      .color_highlight_bg;
    }
    .list_group_item{
      display:flex;
      align-items: center;
      padding: 10px 0 0 30px;
      .avatar{
        height:50px;
        width:50px;
        border-radius:50%;
      }
      .name{
        margin-left:20px;
        .color_text_l;
        .font_size_medium;
      }
    }
  }
  .list_shortcut{
    position:absolute;
    right:0;
    top:50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    width:20px;
    padding:20px 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-align:center;
    .color_bg_d;
    font-family: Helvetica;
    .item{
      padding:3px;
      line-height:1;
      .color_text_l;
      .font_size_small;
      &.current{
        .color_theme;
      }
    }
  }
  .list_fixed{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    .fixed_title{
      height:30px;
      line-height:30px;
      padding-left:20px;
      .font_size_small;
      .color_text_l;
      .color_highlight_bg;
    }
  }
  .loading_container{
    position:absolute;
    width:100%;
    top:50%;
    transform: translateY(-50%);
  }
}
</style>
