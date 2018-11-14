<template>
  <div class="recommend">
    <div v-if="recommends.length" class="slider_wrapper">
      <slider>
        <div v-for="item of recommends" :key="item.index"  ref="sliderWrapper">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
export default {
  name: 'recommend',
  data () {
    return {
      recommends: []
    }
  },
  components: {
    Slider
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
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
  .recommend_comment{
    height:100%;
    overflow: hidden;
  }
  .slider_wrapper{
    position:relative;
    width:100%;
    overflow: hidden;
    img{
      width:100%;
    }
  }
}
</style>
