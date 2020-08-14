<template>
  <div class="home page">
    <Header></Header>
    <div class="swiper">
      <swiper v-if="slide_list.length>0" :options="swiperOption" class="swiper-wrap" ref="mySwiper">
        <swiper-slide class="swiper-item" v-for="(v,index) in slide_list" :key="index">
          <div class="swiper-img" :style="'background-image: url('+v.pic+')'">
            <div class="swiper-title"
                 :style="'background: url('+swiper_mask+') no-repeat;'">
              <div class="t-title">
                <h4>{{v.en_title}}</h4>
                <h3>{{v.title}}</h3>
                <p @click="to_slide_detail(v.url)">了解详情>></p></div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'// 这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import { swiper, swiperSlide } from 'vue-awesome-swiper' // 引入slider组件

  export default {
    name: 'Home',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiper_mask: this.config.aliyun + 'static/swiper-mask.png',// 轮播图遮罩图片

        slide_list: []
      }
    },
    mounted() {
      this.getSlideList();
      console.log(this.config.api);
      let date = this.utils.date_format(new Date(), 'yyyy年MM月dd日 q季度');
      console.log(date);
    },
    methods: {
      getSlideList() {
        this.utils.ajax(this, 'zh.index/slideList', { type: 2 }).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  .home {
    height: 1000px;
  }
</style>
