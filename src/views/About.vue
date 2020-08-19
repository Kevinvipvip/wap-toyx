<template>
  <div class="about page">
    <Header title="关于我们"></Header>
    <div class="banner">27年毛绒玩具生产经验</div>
    <div class="title" @click="show_cp=!show_cp">
      <h3>公司介绍</h3><i><img :src="show_cp?icon[0]:icon[1]" alt=""></i>
    </div>

    <!--公司介绍内容 Company profile-->
    <div class="cp-box m-30" v-show="show_cp">
      <div class="cp-name">天津同缘兴科技股份有限公司</div>
      <div class="cp-brief">
        <span>专注于毛绒玩具设计生产27年的优质企业</span>
        <span>在时代长河中不断推陈出新 均计年出口量高达8000万只</span>
      </div>
      <div class="cp-img"><img :src="cp_image" alt=""></div>
      <p>
        天津同缘兴科技股份有限公司成立于1993年，注册资本1500万人民币。专注于毛绒玩具设计生产27年，不断推陈出新，年出口量高达8000万只。厂房占地10000㎡。年产值700万美金，拥有11名富有想象力、创造力的年轻设计师，具备丰富的工作经验和一流的设计开发能力。我司主要从事填充玩具的设计、开发、制作和销售。通过全球一体化网络布局，与多个国家建立了完善的物流体系。</p>
      <p>
        自2015年以来，连续三年获颁国际玩具工业理事会ICTI认证A级证书，具备出口国外大客户的资质。自有国家专利荣获《安全生产工作先进单位》、《自主创业标兵》等荣誉称号。于2018年应邀加入中国玩具协会成为5星级供应商。公司采用先进的激光切割技术进行裁剪，拥有电脑刺绣机15台。此外，工厂从裁剪到包装均有严格的质量检测体系，完全确保了产品质量的稳定性。我们将继续秉承“质量第一，用户至上”的发展宗旨，为海内外顾客提供更多优质的产品和服务。目前主要出口到美国、加拿大、墨西哥、澳大利亚、韩国、英国、德国、阿联酋、香港等国家和地区出售。
      </p>
    </div>

    <div class="title" @click="show_dh=!show_dh">
      <h3>发展历程</h3><i><img :src="show_dh?icon[0]:icon[1]" alt=""></i>
    </div>

    <!--发展历程内容 development history-->
    <div class="dh-box m-30" v-show="show_dh">
      <ul>
        <li v-for="(v,i) in dh_data" :key="i">
          <h3>{{v.year}}</h3>
          <p>{{v.event}}</p>
        </li>
      </ul>
    </div>

    <div class="title" @click="show_cc=!show_cc">
      <h3>企业文化</h3><i><img :src="show_cc?icon[0]:icon[1]" alt=""></i>
    </div>

    <!--企业文化内容 corporate culture-->
    <div class="cc-box m-30" v-show="show_cc">
      <div class="cc-item">
        <div class="cc-title">{{cc_data.youshi_title}}</div>
        <div class="cc-brief">{{cc_data.youshi_cont}}</div>
        <div class="cc-img"><img :src="cc_data.youshi_img"/></div>
      </div>
      <div class="cc-item">
        <div class="cc-title">{{cc_data.yuanze_title}}</div>
        <div class="cc-brief">{{cc_data.yuanze_cont}}</div>
        <div class="cc-img"><img :src="cc_data.yuanze_img"/></div>
      </div>
      <div class="cc-item">
        <div class="cc-title">{{cc_data.mubiao_title}}</div>
        <div class="cc-brief">{{cc_data.mubiao_cont}}</div>
        <div class="cc-img"><img :src="cc_data.mubiao_img"/></div>
      </div>
    </div>

    <div class="title" @click="show_hq=!show_hq">
      <h3>荣誉资质</h3><i><img :src="show_hq?icon[0]:icon[1]" alt=""></i>
    </div>

    <!--荣誉资质内容 Honor and qualification-->
    <div class="hq-box m-30" v-show="show_hq">
      <p class="one">宝剑锋从磨砺出，经过数十年的精心锤炼和打造，同缘兴取得了傲人的业绩，获得了种种殊荣。</p>
      <p>荣誉不仅是代表企业的名片，而且是企业实力的象征，更是激励和鼓舞全体员工不断进取的动力。</p>
      <div class="hq-img"><img :src="hq_img"/></div>
    </div>

    <div class="title" @click="show_et=!show_et">
      <h3>企业团队</h3><i><img :src="show_et?icon[0]:icon[1]" alt=""></i>
    </div>

    <!--企业团队内容 Enterprise team-->
    <div class="et-box m-30" v-show="show_et">
      <div class="et-item">
        <div class="et-title">生产团队</div>
        <div class="et-brief">一支朝气蓬勃、精益求精的员工队伍，和一套完善精干、追求卓越的管理体系。</div>
        <div class="et-img"><img :src="et_img1"/></div>
      </div>
      <div class="et-item">
        <div class="et-title">设计团队</div>
        <div class="et-brief">一支经验丰富、专业专注、热情创新的团队。</div>
        <div class="et-img"><img :src="et_img2"/></div>
      </div>

    </div>

    <div class="title" @click="show_sr=!show_sr">
      <h3>社会责任</h3><i><img :src="show_sr?icon[0]:icon[1]" alt=""></i>
    </div>

    <!--社会责任内容 social responsibility-->
    <div class="sr-box m-30" v-show="show_sr">
      <img :src="sr_img"/>
    </div>

  </div>
</template>
<script>
  import up from '../assets/icon-up.png'
  import down from '../assets/icon-down.png'

  export default {
    data() {
      return {
        icon: [up, down],
        show_cp: true,//显示或隐藏关于我们
        show_dh: true,//显示或隐藏发展历程
        show_cc: true,//显示或隐藏企业文化
        show_hq: true,//显示或隐藏荣誉资质
        show_et: true,//显示或隐藏企业团队
        show_sr: true,//显示或隐藏社会责任
        cp_image: this.config.aliyun + 'static/image-cp.jpg',// 公司介绍在阿里云oss中的图片
        hq_img: this.config.aliyun + 'static/image-honor.jpg',// 荣誉资质在阿里云oss中的图片
        et_img1: this.config.aliyun + 'static/image-et1.jpg',// 企业团队在阿里云oss中的图片
        et_img2: this.config.aliyun + 'static/image-et2.jpg',// 企业团队在阿里云oss中的图片
        sr_img: this.config.aliyun + 'static/image-sr-wap.jpg',// 社会责任在阿里云oss中的图片

        dh_data: [],//发展历程数据
        cc_data: this.config.cc_data,//企业文化数据
      }
    },
    mounted() {
      this.dh_data = this.config.history;
    },
    methods: {}
  }
</script>
<style scoped lang="scss">
  .about {
    margin-bottom: 80px;

    .title {
      padding: 0 30px;
      height: 88px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(0, 0, 0, 0.03);

      h3 {
        padding-left: 10px;
        border-left: 4px solid $blue-color;
        font-weight: normal;
        font-size: 32px;
        color: #333333;
      }

      i {
        width: 24px;
        height: 12px;
        display: block;
      }
    }

    .m-30 {
      margin: 0 30px 80px;
    }

    /*公司介绍内容样式*/
    .cp-box {
      transition: 0.5s;

      .cp-name {
        margin-top: 67px;
        font-size: 34px;
        color: #333333;
      }

      .cp-brief {
        margin-top: 40px;
        font-size: 24px;
        color: $blue-color;

        span {
          display: block;
        }
      }

      .cp-img {
        margin-top: 40px;
        width: 100%;
      }

      p {
        margin-top: 28px;
        font-size: 26px;
        color: #666666;
        line-height: 40px;
        text-align: justify;
        text-indent: 2em;
      }
    }

    /*发展历程内容样式*/
    .dh-box {
      margin-top: 60px;

      ul {
        li {
          display: flex;
          flex-grow: 1;

          h3 {
            width: 115px;
            flex-shrink: 0;
            font-size: 26px;
            color: #333333;
            font-weight: normal;
            border-right: 6px solid #dcdcdc;
            position: relative;

            &:after {
              content: '';
              position: absolute;
              width: 15px;
              height: 15px;
              background-color: #dcdcdc;
              border-radius: 50%;
              overflow: hidden;
              right: -10px;
              top: 11px;
            }
          }

          p {
            padding-bottom: 50px;
            flex-grow: 1;
            margin-left: 35px;
            text-align: justify;
            font-size: 24px;
            color: #333333;
            line-height: 40px;

          }

          &:last-child {
            p {
              padding-bottom: 0;
            }
          }
        }
      }
    }

    /*企业文化内容样式*/
    .cc-box {
      margin-top: 66px;

      .cc-item {
        margin-top: 52px;

        .cc-title {
          font-size: 30px;
          color: #333333;
        }

        .cc-brief {
          margin-top: 10px;
          color: #666666;
          font-size: 26px;
        }

        .cc-img {
          margin-top: 30px;
          width: 100%;
        }
      }
    }

    /*荣誉资质内容样式*/
    .hq-box {
      margin-top: 65px;

      p {
        font-size: 26px;
        color: #666666;
        margin-bottom: 30px;

        &.one {
          margin-bottom: 15px;
        }
      }
    }

    /*企业团队内容样式*/
    .et-box {
      margin-top: 60px;

      .et-item {
        margin-top: 46px;

        .et-title {
          font-size: 30px;
          color: #333333;
        }

        .et-brief {
          margin: 20px 0 30px;
          font-size: 26px;
          color: #666666;
          text-align: justify;
        }
      }
    }

    /*社会责任内容样式*/
    .sr-box{
      margin-top: 16px;
    }
  }
</style>
