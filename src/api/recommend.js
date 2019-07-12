import musicJssonp from '../common/js/jsonp.js'
import { commonParams, options } from './config.js'

export default function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  console.log(url)
  return musicJssonp(url, data, options)
}
