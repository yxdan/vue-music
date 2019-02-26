// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 手机端的300ms延迟
import VueLazyload from 'vue-lazyload'
import 'common/less/index.less'

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('common/images/logo.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
