<template>
  <div class="product-detail page">
    <Header title="产品详情"></Header>
    <div class="swiper">
      <swiper v-if="detail.pics.length>0" :options="swiperOption" class="swiper-wrap" ref="mySwiper">
        <swiper-slide class="swiper-item" v-for="(item,index) in detail.pics" :key="index">
          <div class="swiper-img" :style="'background-image: url('+item+')'">
          </div>
        </swiper-slide>
      </swiper>
      <p>{{activeIndex}}/{{detail.pics.length}}</p>
    </div>

    <h3>{{detail.name}}</h3>
    <!--参数-->
    <div class="parameter">
      <p><span>货号：{{detail.number}}</span></p>
      <p><span>材质：{{detail.caizhi}}</span><span>毛绒分类：{{detail.cate_name}}</span></p>
      <p><span>大小：{{detail.size}}</span><span>颜色：{{detail.color}}</span></p>
    </div>
    <!--购买方式-->
    <div class="to-buy">
      <div class="btn-1688-buy">
        <a href="https://tongyuanxingtoy.1688.com?spm=a2615.2177701.autotrace-shopSigns.2.134e1001sVuPec">去商城购买</a>
      </div>
      <div class="other-buy">
        <div class="other mp-buy" @click="show_mask = true">
          <div class="icon">
            <img src="../assets/icon-code.png"/>
          </div>
          <span>手机购买</span>
        </div>
        <div class="other tel"><span>{{tel}}</span><span>热线电话</span></div>
      </div>
    </div>

    <!--推荐其他-->
    <div class="recommend">
      <div class="detail-title">推荐其他</div>
      <div class="re-swiper">
        <swiper v-if="recommend.length>0" :options="re_options" class="re-swiper-wrap">
          <swiper-slide class="re-swiper-item" v-for="(item,index) in recommend" :key="index" :datafld="item.id">
            <div class="img" :style="'background-image: url('+ item.pic+')'"></div>
            <h3 class="one-line-ellipsis">{{item.name}}</h3>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!--产品详情-->
    <div class="detail">
      <div class="detail-title">产品详情</div>
      <div class="rich-text" v-html="detail.detail"></div>
    </div>

    <!--小程序码-->
    <div class="mask" v-show="show_mask" @click="show_mask = false">
      <div class="btn-close" @click="show_mask = false"><img src="../assets/icon-close.png" alt=""></div>
      <p>扫描此二维码进入同缘兴玩具小程序进行购买</p>
      <div class="code-img"><img src="../assets/mp-code.jpg" alt=""></div>
    </div>

  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'// 这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper' // 引入slider组件
  var _self;
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        id: 0,//当前产品的id
        detail: { pics: [] },//产品详情
        activeIndex: 1,// 当前轮播图索引值

        tel: 0,//热线电话

        show_mask: false,//显示和隐藏遮罩

        recommend: [],//其他推荐

        // 产品轮播图配置
        swiperOption: {
          autoplay: { delay: 3000, stopOnLastSlide: false, disableOnInteraction: false },
          speed: 800, direction: 'horizontal', on: {
            slideChange() {
              _self.activeIndex = this.activeIndex + 1;
            }
          }
        },
        // 推荐其他轮播图配置
        re_options: {
          slidesPerView: 'auto', resistanceRatio: 0.3, on: {
            tap() {
              if (this.clickedSlide) {
                let id = this.clickedSlide.getAttribute('datafld');
                if (id) {
                  _self.$router.replace({ path: '/center', query: { id: id } })
                  ;
                }
              }
            }
          }
        }
      };
    },
    mounted() {
      _self = this;
      this.id = parseInt(this.$route.query.id);
      this.utils.ajax(this, 'zh.index/aboutUs').then(res => {
        this.tel = res.tel;
      });
      this.getProductDetail();
      this.getGuessYouLikeList();
    },
    methods: {
      // 获取产品详情
      getProductDetail() {
        let post = { id: this.id };
        this.utils.ajax(this, 'zh.index/productDetail', post).then(res => {
          this.utils.aliyun_format(res.pics);
          res.detail = res.detail.replace(/\/ueditor\/php\/upload\//g, this.config.url + 'ueditor/php/upload/');
          this.detail = res;
        })
      },
      // 获取其他推荐
      getGuessYouLikeList() {
        this.utils.ajax(this, 'zh.index/guessYouLikeList').then(res => {
          this.utils.aliyun_format(res, 'pic');
          this.recommend = res;
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  .product-detail {
    .swiper {
      position: relative;

      .swiper-wrap {
        .swiper-item {
          .swiper-img {
            width: 100%;
            padding-bottom: 100%;
            height: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }

      p {
        padding: 10px 15px;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.6);
        position: absolute;
        bottom: 16px;
        right: 30px;
        box-sizing: border-box;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 20px;
        color: #ffffff;
      }
    }

    /*标题*/
    h3 {
      font-size: 30px;
      color: #333333;
      font-weight: normal;
      text-align: justify;
      margin: 30px 30px 0;
    }

    /*产品参数*/
    .parameter {
      margin: 36px 30px 0;

      p {
        display: flex;
        justify-content: space-between;
        font-size: 26px;
        color: #666;
        border-bottom: 2px solid #e3e4e6;
        padding: 24px 0;
        box-sizing: border-box;

        span {
          display: block;
          width: 50%;
        }
      }
    }

    /*购买方式*/
    .to-buy {
      margin: 60px 30px 0;

      .btn-1688-buy, a {
        width: 100%;
        height: 80px;
        background-color: #50a8ec;
        border-radius: 10px;
        font-size: 28px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .other-buy {
        margin-top: 25px;
        display: flex;
        height: 134px;
        justify-content: space-between;

        .other {
          width: 50%;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          font-size: 28px;
          color: #666666;

          &.mp-buy {
            border-right: 4px solid #e3e4e6;

            .icon {
              width: 43px;
              height: 43px;
            }
          }

          &.tel {
            span:first-child {
              font-size: 32px;
              color: #333333;
            }
          }
        }
      }
    }

    .detail-title {
      font-size: 32px;
      color: #333333;
      margin: 60px 30px 30px;
    }

    /*推荐其他*/
    .recommend {
      background-color: #fafafa;
      margin-top: 70px;
      overflow: hidden;

      .re-swiper {
        margin-bottom: 60px;

        .re-swiper-wrap {
          .re-swiper-item {
            width: 240px;
            padding-left: 30px;

            .img {
              width: 100%;
              padding-bottom: 100%;
              height: 0;
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
            }

            h3 {
              font-size: 26px;
              color: #333333;
              margin: 18px 0 0;
              text-align: justify;
            }
          }
        }
      }
    }

    /*产品详情*/
    .detail {
      .rich-text {
        padding: 0 30px;
        border-top: 12px solid #fafafa;
        box-sizing: border-box;

        /deep/ img {
          max-width: 100%;
        }
      }
    }

    .mask {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999999999;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;

      .btn-close {
        position: absolute;
        color: #fff;
        bottom: 150px;
        width: 40px;
      }

      p {
        width: 60%;
        text-align: center;
        color: #fff;
        font-size: 30px;
      }

      .code-img {
        width: 50%;
        margin-top: 50px;
      }
    }
  }
</style>
