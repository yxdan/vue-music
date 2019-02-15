<template>
  <div class="recommend">
    <div class="recommend_content">
      <div class="slider_wrapper"  v-if="recommends.length">
        <slider>
          <div v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <div class="disc_wrapper">
        <h1>热门歌单推荐</h1>
        <ul>
          <li class="item" v-for="item of discList" :key="item.dissid">
            <div class="icon">
              <img width="60" height="60" :src="item.imgurl" alt="">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import {getRecommend, getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'
export default {
  name: 'recommend',
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  components: {
    Slider
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
@import '../../common/less/variable.less';
.recommend{
  position:fixed;
  width:100%;
  top:88px;
  bottom:0;
  .recommend_content{
    height:100%;
    overflow: hidden;
    .slider_wrapper{
      position:relative;
      width:100%;
      overflow: hidden;
      img{
        width:100%;
      }
    }
    .disc_wrapper{
      .color_bg;
      h1{
        line-height:65px;
        text-align:center;
        .font_size_medium;
        .color_theme;
      }
      .item{
        display:flex;
        box-sizing: border-box;
        align-content: center;
        padding:0 20px 20px 20px;
        .icon{
          flex:0 0 60px;
          width:60px;
          padding-right:20px;
        }
        .text{
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          .font_size_medium;
          .name{
            margin-bottom:10px;
            .color_text;
          }
          .desc{
            .color_text_d;
          }
        }
      }

    }
  }
}
</style>
