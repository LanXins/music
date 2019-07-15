<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <slider v-if="recommends.length">
          <div v-for="item in recommends" :key="item.linkUrl">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" :alt="item.id" />
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="item in discList" class="item" :key="item.dissid">
          <div class="icon">
                <img width="60" height="60" :src="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
          </li>
        </ul>
      </div>
      <ul></ul>
    </div>
  </div>
</template>
<script>
import { getRecommend } from '@/api/recommend'
import { ERR_OK } from '@/api/config'
import Slider from '@/base/slider/slider'

var DiscData = {
  uin: 0,
  categoryId: 10000000,
  sortId: 5,
  sum: 7747,
  sin: 0,
  ein: 29,
  list: [
    {
      dissid: '7014162131',
      createtime: '2019-07-11',
      commit_time: '2019-07-11',
      dissname: '为晴所困？雨季解闷必备',
      imgurl:
        'http://p.qpic.cn/music_cover/XkvoO3t2zBy0z9cupUMtqtgztI7AM6urdPdLGYu0C3fErzdhSordZA/600?n=1',
      introduction: '',
      listennum: 135154,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 359975977,
        encrypt_uin: 'oi4qNKSkNKSl',
        name: 'Nali',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7075523230',
      createtime: '2019-07-10',
      commit_time: '2019-07-10',
      dissname: '行走的力量 | 每个城市一首歌',
      imgurl:
        'http://p.qpic.cn/music_cover/ajNVdqHZLLC81mBtib6zVxg2eLnQ3crgzwjpo6d5BlVdQvh0oCtaliaw/600?n=1',
      introduction: '',
      listennum: 46966,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 723327168,
        encrypt_uin: '7i-ioi-loKCF',
        name: '乐动新生音乐',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7084764433',
      createtime: '2019-07-09',
      commit_time: '2019-07-09',
      dissname: '催眠宝宝：妈妈们的哄睡歌单',
      imgurl:
        'http://p.qpic.cn/music_cover/xFPOwViasjDrpIibGzHvkZKnnaia4uXzBM90iaY18Ck666ShBDVea8yBYA/600?n=1',
      introduction: '',
      listennum: 111504,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 3507583383,
        encrypt_uin: 'oi4z7i4FoioFoz**',
        name: '亲子专区官方账号',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7083166110',
      createtime: '2019-07-08',
      commit_time: '2019-07-08',
      dissname: '慵懒小调： 周末宅家常备',
      imgurl:
        'http://p.qpic.cn/music_cover/z5D0wytPKWngLmpCOFgNJmUDq2TMjE4sRibYXYe7pUOap8d0YIrv7kg/600?n=1',
      introduction: '',
      listennum: 44966,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 2274294081,
        encrypt_uin: 'ow-l7e-q7enFov**',
        name: 'Weiat',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7075710584',
      createtime: '2019-07-09',
      commit_time: '2019-07-09',
      dissname: '【早安曲】唤醒沉睡的你',
      imgurl:
        'http://p.qpic.cn/music_cover/PiajxSqBRaEISibhtdxpkLprufpT7OzywmZksgnxoguZwkZxZgIsZYug/600?n=1',
      introduction: '',
      listennum: 274433,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 2976593043,
        encrypt_uin: 'owEl7w4qoinPoz**',
        name: '音乐情话馆',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7061233409',
      createtime: '2019-06-25',
      commit_time: '2019-06-25',
      dissname: '地下暗黑势力 · 狂躁日语Rap',
      imgurl:
        'http://p.qpic.cn/music_cover/lYiaEbscaryrFiaicJFp8euuRMjfEaYwPocUHlGb9kdr3MLIkyaGyTXow/600?n=1',
      introduction: '',
      listennum: 72045,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 1060444681,
        encrypt_uin: 'oKnsoevP7eCFov**',
        name: '是硬糖啊',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7022389412',
      createtime: '2019-07-10',
      commit_time: '2019-07-10',
      dissname: '中国风丨峰峦叠嶂，碧水如镜',
      imgurl:
        'http://p.qpic.cn/music_cover/3MLTH2k3HibTypyQfrdDcnGebkBvAbETgjSn8YgF063VSiczQGvGelCA/600?n=1',
      introduction: '',
      listennum: 48363,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 1083284863,
        encrypt_uin: 'oKnFoi-F7ecsoz**',
        name: '北鹤',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7083187966',
      createtime: '2019-07-09',
      commit_time: '2019-07-09',
      dissname: '恋爱蜜语 : 我和糖哪个甜呀？',
      imgurl:
        'http://p.qpic.cn/music_cover/rn9BBETnfKkicngmibIAtUlapGxncrvIQk6ajwvKoy8YOz7TswsOPLzA/600?n=1',
      introduction: '',
      listennum: 80304,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 930739045,
        encrypt_uin: 'NKoz7ioqoevk',
        name: '九月',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7038538724',
      createtime: '2019-07-08',
      commit_time: '2019-07-08',
      dissname: '治愈轻音 · 被风吹过的夏天',
      imgurl:
        'http://p.qpic.cn/music_cover/z5D0wytPKWngLmpCOFgNJmUDq2TMjE4s1AdribZ5NZNRd7khjuxQEFA/600?n=1',
      introduction: '',
      listennum: 20503,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 2274294081,
        encrypt_uin: 'ow-l7e-q7enFov**',
        name: 'Weiat',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7084760803',
      createtime: '2019-07-11',
      commit_time: '2019-07-11',
      dissname: '人生走在路上，愿你心花路放',
      imgurl:
        'http://p.qpic.cn/music_cover/8eiaDBJ27yYicpMibYZmmEdNBRwgR6ACJhVga6oEcEeENZ3JwvRUaQ0icA/600?n=1',
      introduction: '',
      listennum: 214743,
      score: 0,
      version: 0,
      creator: {
        type: 0,
        qq: 987674549,
        encrypt_uin: 'NKcl7wSP7Kvq',
        name: '小众又怎样',
        isVip: 0,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7064656640',
      createtime: '2019-07-09',
      commit_time: '2019-07-09',
      dissname: '【情歌对唱】把“ 爱 ”唱给你听',
      imgurl:
        'http://p.qpic.cn/music_cover/PiajxSqBRaEISibhtdxpkLprufpT7OzywmWibTiaVT0KKGf5Ct6LUqSRSA/600?n=1',
      introduction: '',
      listennum: 405329,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 2976593043,
        encrypt_uin: 'owEl7w4qoinPoz**',
        name: '音乐情话馆',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7085101099',
      createtime: '2019-07-09',
      commit_time: '2019-07-09',
      dissname: '迷幻光谱，在吹泡碎拍中漫游',
      imgurl:
        'http://p.qpic.cn/music_cover/KetjXWSVppvyrVJfzfdpib88B0dJ70XWcCnLic3u73ia5jicw0EWSkVFKg/600?n=1',
      introduction: '',
      listennum: 79901,
      score: 0,
      version: 0,
      creator: {
        type: 6,
        qq: 55894433,
        encrypt_uin: '7K4FNKvPoio*',
        name: 'QQ音乐VIP',
        isVip: 6,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7053326834',
      createtime: '2019-07-05',
      commit_time: '2019-07-05',
      dissname: '酷中带甜 · Rapper温柔情话',
      imgurl:
        'http://p.qpic.cn/music_cover/lYiaEbscaryrFiaicJFp8euuW6wsTmF9YlhPgYoM7ROQjbl5exHd8ibdkA/600?n=1',
      introduction: '',
      listennum: 83204,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 1060444681,
        encrypt_uin: 'oKnsoevP7eCFov**',
        name: '是硬糖啊',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7080711768',
      createtime: '2019-07-09',
      commit_time: '2019-07-09',
      dissname: '励志男声 · 倔强追梦路',
      imgurl:
        'http://p.qpic.cn/music_cover/3MLTH2k3HibTypyQfrdDcnGebkBvAbETgWfuMXCkl4TEA94RdfAqLZQ/600?n=1',
      introduction: '',
      listennum: 57583,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 1083284863,
        encrypt_uin: 'oKnFoi-F7ecsoz**',
        name: '北鹤',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7084670132',
      createtime: '2019-07-10',
      commit_time: '2019-07-10',
      dissname: '效率提速器 · 打败拖延症',
      imgurl:
        'http://p.qpic.cn/music_cover/HZnqT8B6sibc2iaxSb6biaOARbyVdaYSktTq9dueuyZA6icibjJVHTS4wxw/600?n=1',
      introduction: '',
      listennum: 110667,
      score: 0,
      version: 0,
      creator: {
        type: 0,
        qq: 3490786195,
        encrypt_uin: 'oivqoeSF7w6q7v**',
        name: '允许部分冷门先热起来',
        isVip: 0,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7064604540',
      createtime: '2019-07-09',
      commit_time: '2019-07-09',
      dissname: '后来，只能把你偷偷地藏在心底',
      imgurl:
        'http://p.qpic.cn/music_cover/PiajxSqBRaEISibhtdxpkLprufpT7OzywmTWKWlFRy37oZCKibcBKB8lQ/600?n=1',
      introduction: '',
      listennum: 459631,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 2976593043,
        encrypt_uin: 'owEl7w4qoinPoz**',
        name: '音乐情话馆',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7065784468',
      createtime: '2019-07-09',
      commit_time: '2019-07-09',
      dissname: '【柔情古风】说不出的心绪藏进歌里',
      imgurl:
        'http://p.qpic.cn/music_cover/PiajxSqBRaEI9qicEFm4ISibAnnbhfTC0XKbRCgiaueW9A2qofHZAXoX2A/600?n=1',
      introduction: '',
      listennum: 140628,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 3131622517,
        encrypt_uin: 'oi6ioKCAow457z**',
        name: '国风音乐坊',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7023579154',
      createtime: '2019-06-14',
      commit_time: '2019-06-14',
      dissname: '韩系女友嗓 : 治愈心灵小调',
      imgurl:
        'http://p.qpic.cn/music_cover/3MLTH2k3HibTypyQfrdDcnN1An4ibRVwf6XKLmnvoIYfIxzr3Xl6p7ibw/600?n=1',
      introduction: '',
      listennum: 78487,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 1083284863,
        encrypt_uin: 'oKnFoi-F7ecsoz**',
        name: '北鹤',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7054482271',
      createtime: '2019-06-24',
      commit_time: '2019-06-24',
      dissname: '韩式小清新 : 解锁恋爱新格调',
      imgurl:
        'http://p.qpic.cn/music_cover/3MLTH2k3HibTypyQfrdDcnGebkBvAbETgFPzCzfU2Qycr2rxa0oTepA/600?n=1',
      introduction: '',
      listennum: 232948,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 1083284863,
        encrypt_uin: 'oKnFoi-F7ecsoz**',
        name: '北鹤',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '6948652789',
      createtime: '2019-04-24',
      commit_time: '2019-04-24',
      dissname: '尝一口爱情，苦甜参半',
      imgurl:
        'http://p.qpic.cn/music_cover/Fe6emiag6IuVbMib3oN6yctWpGosjYghw9p17P96hjNQ3CGn3iaA5D4pA/600?n=1',
      introduction: '',
      listennum: 1145202,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 2407142727,
        encrypt_uin: 'owvz7i6PowSA7z**',
        name: '就是一个听歌der',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7064634141',
      createtime: '2019-06-28',
      commit_time: '2019-06-28',
      dissname: '【在失恋中成长】致那些逝去的爱情',
      imgurl:
        'http://p.qpic.cn/music_cover/PiajxSqBRaEISibhtdxpkLprufpT7OzywmxbJVk2MxiaNMbkwAnKUXl1A/600?n=1',
      introduction: '',
      listennum: 264616,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 2976593043,
        encrypt_uin: 'owEl7w4qoinPoz**',
        name: '音乐情话馆',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '6965995808',
      createtime: '2019-05-06',
      commit_time: '2019-05-06',
      dissname: '抒情女声：送你夏日柔软的风',
      imgurl:
        'http://p.qpic.cn/music_cover/R8unPZMA4Vp5v2Ms96bst6CQbQ12qjL8hkTVkxYCOokNSh3Wu3UgPQ/600?n=1',
      introduction: '',
      listennum: 458377,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 945187827,
        encrypt_uin: 'NKvkoKclNe-l',
        name: '念安娜',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7065685679',
      createtime: '2019-07-09',
      commit_time: '2019-07-09',
      dissname: '【古风】红尘过客，陌路凉人',
      imgurl:
        'http://p.qpic.cn/music_cover/PiajxSqBRaEI9qicEFm4ISibAnnbhfTC0XKR8RgaYljDiaI37gXEIu68eg/600?n=1',
      introduction: '',
      listennum: 106050,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 3131622517,
        encrypt_uin: 'oi6ioKCAow457z**',
        name: '国风音乐坊',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7083735435',
      createtime: '2019-07-12',
      commit_time: '2019-07-12',
      dissname: '取向狙击 |《声入人心2》成员初印象',
      imgurl:
        'http://p.qpic.cn/music_cover/JBDCVgqXWXaYUvcsElqcicYyU7DfsUeczvqlXxLCrgZiaNDxLCTI51eg/600?n=1',
      introduction: '',
      listennum: 69629,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 3414308253,
        encrypt_uin: 'oiv57eozNe-koz**',
        name: '鹅猴综艺狸',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7083575160',
      createtime: '2019-07-08',
      commit_time: '2019-07-08',
      dissname: '银河补习班 | 致伟大的父爱',
      imgurl:
        'http://p.qpic.cn/music_cover/fRIRrpr8UYSiaOTk340ibu74zSUIK2cdLTT8hbUr4gQXXP94VXHucTFw/600?n=1',
      introduction: '',
      listennum: 94186,
      score: 0,
      version: 0,
      creator: {
        type: 1,
        qq: 2975999650,
        encrypt_uin: 'owEl7KEqNKCkon**',
        name: '电影《银河补习班》',
        isVip: 1,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7037789776',
      createtime: '2019-06-18',
      commit_time: '2019-06-18',
      dissname: '华语流行：邂逅晚虹般的你',
      imgurl:
        'http://p.qpic.cn/music_cover/KetjXWSVppvyrVJfzfdpib88B0dJ70XWcSiahbibv8m9Via69ia9DHaHibHA/600?n=1',
      introduction: '',
      listennum: 642658,
      score: 0,
      version: 0,
      creator: {
        type: 6,
        qq: 55894433,
        encrypt_uin: '7K4FNKvPoio*',
        name: 'QQ音乐VIP',
        isVip: 6,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7073383788',
      createtime: '2019-07-04',
      commit_time: '2019-07-04',
      dissname: '纯音乐：唯美旋律，舒缓解压',
      imgurl:
        'http://p.qpic.cn/music_cover/j50Ihtp2h2UwaRgJuNjmR5QEibMwHoKzxPrvZA1EG6FwUwIJvYJJoMg/600?n=1',
      introduction: '',
      listennum: 237983,
      score: 0,
      version: 0,
      creator: {
        type: 3,
        qq: 987036132,
        encrypt_uin: 'NKcloeosoKoA',
        name: '音乐时光机',
        isVip: 3,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7061498849',
      createtime: '2019-07-05',
      commit_time: '2019-07-05',
      dissname: '逆风启航 · 不佛系青年励志记',
      imgurl:
        'http://p.qpic.cn/music_cover/BxQgxonwzUDWO6IdGBmJ9iczstuXR8NkLek6TQQ8q05OmwkKzPUXUPg/600?n=1',
      introduction: '',
      listennum: 73091,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 467578052,
        encrypt_uin: '7eCl7KSFoe4A',
        name: '大饼干',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7063223789',
      createtime: '2019-07-05',
      commit_time: '2019-07-05',
      dissname: '民谣里的姑娘，总是温柔又哀伤',
      imgurl:
        'http://p.qpic.cn/music_cover/rn9BBETnfKkicngmibIAtUlapGxncrvIQkcVDpEngtsuicPjNLRe1XCWg/600?n=1',
      introduction: '',
      listennum: 76789,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 930739045,
        encrypt_uin: 'NKoz7ioqoevk',
        name: '九月',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    },
    {
      dissid: '7072786380',
      createtime: '2019-07-03',
      commit_time: '2019-07-03',
      dissname: '舒心民谣：减燥的清凉味道',
      imgurl:
        'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyLTmb6FY3s4DwaUiaIoiclXwtq8ba9mxDUmg/600?n=1',
      introduction: '',
      listennum: 426292,
      score: 0,
      version: 0,
      creator: {
        type: 2,
        qq: 452775188,
        encrypt_uin: '7e4A7iSkoKcF',
        name: '还不是因为你长得不好看',
        isVip: 2,
        avatarUrl: '',
        followflag: 0
      }
    }
  ]
}
export default {
  data () {
    return {
      recommends: [],
      discList: DiscData.list
    }
  },
  name: 'recommend',
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>
<style scoped lang="stylus">
@import '../../common/stylus/variable'
.recommend
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommend-content
    height 100%
    overflow hidden
    .slider-wrapper
      position relative
      width 100%
      overflow hidden
    .recommend-list
      .list-title
        height 65px
        line-height 65px
        text-align center
        font-size $font-size-medium
        color $color-theme
      .item
        display flex
        box-sizing border-box
        align-items center
        padding 0 20px 20px 20px
        .icon
          flex 0 0 60px
          width 60px
          padding-right 20px
        .text
          display flex
          flex-direction column
          justify-content center
          flex 1
          line-height 20px
          overflow hidden
          font-size $font-size-medium
          .name
            margin-bottom 10px
            color $color-text
          .desc
            color $color-text-d
    .loading-container
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
</style>
