// import jsonp from 'common/js/jsonp'
// import {commonParams, options} from './config'
// export function getSingerList () {
//   const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
//   const data = Object.assign({}, commonParams, {
//     channel: 'singer',
//     page: 'list',
//     key: 'all_all_all',
//     pagesize: 100,
//     pagenum: 1,
//     hostUin: 0,
//     platform: 'yqq',
//     loginUin: '0',
//     needNewCode: 0
//   })
//   return jsonp(url, data, options)
// }
import axios from 'axios'
export const singerParams = {
  channel: 'singer',
  page: 'list',
  key: 'all_all_all',
  pagesize: 100,
  pagenum: 1,
  hostUin: 0,
  platform: 'yqq',
  g_tk: 5381,
  loginUin: '0',
  format: 'json',
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  needNewCode: 0
}
export function getSingerList () {
  return axios.get('/api/getSingerList', {
    params: singerParams
  })
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
