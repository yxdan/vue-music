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
  }
}
</style>
