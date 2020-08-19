<template>
  <div class="home page">
    <Header></Header>
    <div class="swiper">
      <swiper v-if="slide_list.length>0" :options="swiperOption" class="swiper-wrap" ref="mySwiper">
        <swiper-slide class="swiper-item" v-for="(v,index) in slide_list" :key="index" :data-url="v.url">
          <div class="swiper-img" :style="'background-image: url('+v.pic+')'">
            <div class="swiper-title"
                 :style="'background-image: url('+img.swiper_mask+');'">
              <div class="t-title">
                <h4>{{v.en_title}}</h4>
                <h3>{{v.title}}</h3>
                <p @click="to_slide_detail(v.url)">了解详情>></p></div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="content">
      <!--关于我们-->
      <div class="home-mask">
        <div class="rank" :style="'background-image: url('+img.ice_cake_left+')'">
          <router-link class="btn-more" :to="{path:'/about'}">更多></router-link>
          <div class="img-box"><img :src="img.about_img"/></div>
          <div class="rank-cont">
            <h3>关于同缘兴</h3>
            <p>天津同缘兴科技股份有限公司成立于1993年，专注于毛绒玩具创意设计与研发制造，服务北美、欧洲、澳洲客户20余年，拥有强大的产品研发能力，完整的生产加工体系和严格的产品质量控制体系。</p>
          </div>
        </div>
      </div>
      <!--分类-->
      <div class="home-mask m1">
        <swiper v-if="cate_list.length>0" :options="classify" class="swiper-classify" ref="classify">
          <swiper-slide class="classify-item" v-for="(item,index) in cate_list" :key="index" :id="item.id">
            <div class="item-img-bg" :style="'background-image: url('+img.ice_cake_small+')'">
              <div class="item-img"><img :src="item.icon2"/></div>
            </div>
            <h3>{{item.cate_name}}</h3>
          </swiper-slide>
        </swiper>
      </div>
      <!--研发中心-->
      <div class="home-mask m2">
        <div class="rank right" :style="'background-image: url('+img.ice_cake_right+')'">
          <router-link class="btn-more" :to="{path:'/contact'}">加入></router-link>
          <div class="img-box"><img :src="img.R_D_img"/></div>
          <div class="rank-cont">
            <h3>研发中心</h3>
            <p>同缘兴不断追寻新的发展之路。目前的研发中心拥有多名丰富经验的研发人员，通过新创意、新技术提升现有产品的质量、属性以及传播性。</p>
          </div>
        </div>
      </div>
      <!--孵化中心-->
      <div class="home-mask m3">
        <div class="rank" :style="'background-image: url('+img.ice_cake_left+')'">
          <router-link class="btn-more" :to="{path:'/contact'}">加入></router-link>
          <div class="img-box"><img :src="img.incubation_img"/></div>
          <div class="rank-cont">
            <h3>孵化中心</h3>
            <p>为不同的元素重构，把握市场需求以及产品定位，孵化有属性有内涵的毛绒玩具，将玩具多样化、品牌化且具有传播性的事业。目前我们的孵化基地已成功产出上百种毛绒玩具并推动销售额的大幅度提升。</p>
          </div>
        </div>
      </div>
      <!--定制服务-->
      <div class="home-mask m4">
        <div class="rank right" :style="'background-image: url('+img.ice_cake_right+')'">
          <router-link class="btn-more" :to="{path:'/contact'}">加入></router-link>
          <div class="img-box"><img :src="img.service_img"/></div>
          <div class="rank-cont">
            <h3>定制服务</h3>
            <p>同缘兴玩具成立27年，励志开发新型、创新，符合用户需求的毛绒产品。目前毛绒玩具产品种类达千余种，完全能够为用户专属服务的定制服务。公司还提供免费打样服务，如有需要来图即可。</p>
          </div>
        </div>
      </div>
      <!--合作伙伴-->
      <div class="home-mask m5">
        <div class="rank" :style="'background-image: url('+img.ice_cake_left+')'">
          <router-link class="btn-more" :to="{path:'/contact'}">加入></router-link>
          <div class="img-box"><img :src="img.partner_img"/></div>
          <div class="rank-cont">
            <h3>合作伙伴</h3>
            <div class="p-img">
              <p><img src="../assets/partner1.png"/></p>
              <p><img src="../assets/partner2.png"/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'// 这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper' // 引入slider组件
  var _self;
  export default {
    name: 'Home',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        img: {
          swiper_mask: this.config.aliyun + 'static/swiper-mask.png',// 轮播图遮罩图片
          ice_cake_left: this.config.aliyun + 'static/ice-cake-left.png',// 左边大冰块
          ice_cake_right: this.config.aliyun + 'static/ice-cake-right.png',// 右边大冰块
          ice_cake_small: this.config.aliyun + 'static/ice-cake-small.png',// 分类小冰块
          about_img: this.config.aliyun + 'static/home-about2.png',// 关于我们插画图片
          R_D_img: this.config.aliyun + 'static/home-R&D1.png',// 研发中心插画图片
          incubation_img: this.config.aliyun + 'static/home-incubation1.png',// 孵化中心插画图片
          service_img: this.config.aliyun + 'static/home-service1.png',// 定制服务插画图片
          partner_img: this.config.aliyun + 'static/home-partner2.png'// 定制服务插画图片
        },

        slide_list: [],//轮播图列表
        cate_list: [],//分类列表

        // 顶部轮播图配置
        swiperOption: {
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          speed: 800,
          direction: 'horizontal',
          on: {
            tap() {
              _self.$nextTick(() => {
                if (this.clickedSlide) {
                  let url = this.clickedSlide.getAttribute('data-url');
                  _self.to_slide_detail(url)
                }
              });
            }
          }
        },
        // 分类轮播图配置
        classify: {
          slidesPerView: 3,
          on: {
            tap() {
              if (this.clickedSlide) {
                let cate_id = this.clickedSlide.getAttribute('id');
                if (cate_id) {
                  _self.config.cate = { cate_id: cate_id, cate_flag: true };
                  _self.$router.push({
                    path: '/server',
                    query: { on: 1 }
                  })
                  ;
                }
              }
            }
          }
        }
      }
    },
    mounted() {
      _self = this;
      this.getSlideList();
      this.getCateList();
      // console.log(this.config.api);
      // let date = this.utils.date_format(new Date(), 'yyyy年MM月dd日 q季度');
      // console.log(date);
    },
    methods: {
      // 点击轮播图进详情
      to_slide_detail(url) {
        if (url) {
          if (url.indexOf('http') === 0) {
            window.open(url, "_blank");
          } else {
            let page = url.split('?');
            let query = page[1].split('=');
            switch (page[0]) {
              case 'newdetail':
                this.$router.push({
                  path: '/' + page[0],
                  query: {
                    id: query[1]
                  }
                });
                break;
              case 'productDetail':
                this.$router.push({
                  path: '/' + page[0],
                  query: {
                    id: query[1]
                  }
                });
                break;
            }
          }
        }
      },
      // 获取轮播图列表
      getSlideList() {
        this.utils.ajax(this, 'zh.index/slideList', { type: 2 }).then(res => {
          this.utils.aliyun_format(res, 'pic');
          // console.log(res);
          this.slide_list = res;
        })
      },
      // 获取分类列表
      getCateList(complete) {
        this.utils.ajax(this, 'zh.index/cateList').then(res => {
          this.utils.aliyun_format(res, 'icon2');
          this.cate_list = res;
          if (complete) {
            complete();
          }
        })
      },
    }
  }
</script>
<style scoped lang="scss">
  .home {
    $classify-width: 216px;
    /*轮播图样式*/
    .swiper {
      height: 383px;

      .swiper-wrap {
        height: 100%;

        .swiper-item {
          height: 100%;

          .swiper-img {
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            .swiper-title {
              height: 100%;
              width: 74%;
              background-position: center;
              background-size: 100%;
              background-repeat: no-repeat;
              display: flex;
              align-items: center;
              /*justify-content: center;*/

              .t-title {
                margin-left: 30px;
                display: flex;
                justify-content: center;
                color: #ffffff;
                flex-flow: column;
                font-size: 24px;

                h4 {
                  font-weight: normal;
                }

                h3 {
                  font-weight: normal;
                  font-size: 30px;
                }

                p {
                  cursor: pointer;
                  margin-top: 58px;
                }
              }
            }
          }
        }
      }
    }

    .content {
      .home-mask {
        background-color: rgba(75, 140, 213, 0.6);
        height: 400px;
        overflow: hidden;

        .rank {
          position: relative;
          margin: 20px 30px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100%;
          height: calc(100% - 40px);

          .btn-more {
            z-index: 2;
            position: absolute;
            top: 40px;
            right: 50px;
            width: 96px;
            height: 40px;
            background-color: #ffffff;
            box-shadow: 0 2px 6px 0 rgba(199, 210, 227, 0.75);
            border-radius: 20px;
            font-size: 24px;
            color: $blue-color-two;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .img-box {
            z-index: 2;
            position: absolute;
            width: 141px;
            height: 156px;
            bottom: 10px;
            right: 10px;
            transform: scale(1.6);
          }

          .rank-cont {
            margin: 0 160px 0 60px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            height: 100%;

            h3 {
              font-size: 32px;
              font-weight: normal;
              color: #333333;
              margin-bottom: 33px;
            }

            p {
              text-align: justify;
              color: #333333;
              font-size: 26px;
            }
          }

          &.right {
            .btn-more {
              right: unset;
              left: 50px;
            }

            .img-box {
              right: unset;
              left: 10px;
            }

            .rank-cont {
              align-items: flex-end;
              margin: 0 60px 0 160px;
            }
          }
        }

        &.m1 {
          background-color: rgba(75, 140, 213, 0.5);

          .swiper-classify {
            height: 100%;

            .classify-item {
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: flex-end;

              .item-img-bg {
                width: $classify-width;
                height: 253px;
                background-size: 100%;
                background-repeat: no-repeat;
                background-position: center;
                display: flex;
                justify-content: center;
                align-items: center;

                .item-img {
                  width: 126px;
                  height: 147px;
                }
              }

              h3 {
                width: $classify-width;
                color: #ffffff;
                font-size: 26px;
                font-weight: normal;
                text-align: center;
                margin-top: 13px;
              }
            }
          }
        }

        &.m2 {
          background-color: rgba(75, 140, 213, 0.4);
        }

        &.m3 {
          background-color: rgba(75, 140, 213, 0.3);
        }

        &.m4 {
          background-color: rgba(75, 140, 213, 0.2);
        }

        &.m5 {
          background-color: rgba(75, 140, 213, 0.1);

          .rank-cont {
            .p-img {
              display: flex;
              justify-content: space-around;
              align-items: center;

              p {
                height: 168px;

                img {
                  height: 100%;
                  width: auto;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
