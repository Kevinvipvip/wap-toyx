<template>
  <div class="news page">
    <Header title="新闻资讯"></Header>
    <div class="banner">公司最新 行业最热 抓住行业新动态 驱动企业快速发展</div>

    <div class="tab">
      <div class="tab-item" :class="tab_on===1?'on':''" @click="tab_change(1)">公司动态</div>
      <div class="tab-item" :class="tab_on===2?'on':''" @click="tab_change(2)">行业动态</div>
    </div>
    <div class="news-list">
      <ul>
        <router-link tag="li" :to="{path:'/newdetail',query:{id:item.id}}" v-for="(item,index) in news_list"
                     :key="index">
          <div class="img" :style="'background-image: url('+item.pic+')'"></div>
          <div class="new-cont">
            <h3 class="one-line-ellipsis">{{item.title}}</h3>
            <p class="two-line-ellipsis">{{item.desc}}</p>
            <span>{{item.create_time}}</span>
          </div>
        </router-link>
      </ul>

      <div class="pagination" v-if="total>perpage">
        <van-pagination
                v-model="page"
                :total-items="total"
                :show-page-size="3"
                prev-text="<"
                next-text=">"
                :items-per-page="perpage"
                force-ellipses
                @change="page_change"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tab_on: 1,//当前tab选中项
        perpage: 6,//每次请求新闻资讯条数
        page: 1,//当前页码
        total: 0,//新闻资讯总数

        news_list: [],// 新闻列表
      };
    },
    mounted() {
      this.tab_on = parseInt(this.$route.query.on) || 1;
      this.getNewsList();
    },
    methods: {
      // 公司动态和行业动态的切换
      tab_change(tab) {
        if (tab !== this.tab_on) {
          this.$router.push({
            path: '/center',
            query: {
              on: tab
            }
          });
        }
      },

      // 分页页码改变时
      page_change(page) {
        this.page = page;
        this.getNewsList();
      },

      // 获取新闻资讯列表
      getNewsList() {
        let post = {
          page: this.page,
          perpage: this.perpage,
          type: this.tab_on
        };
        this.utils.ajax(this, 'zh.index/newsList', post).then(res => {
          this.utils.aliyun_format(res.list, 'pic');
          for (let i = 0; i < res.list.length; i++) {
            res.list[i].create_time = this.utils.date_format(res.list[i].create_time, 'yyyy-MM-dd');
          }
          console.log(res);
          this.news_list = res.list;
          this.total = res.count;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .news {
    margin-bottom: 100px;

    .tab {
      display: flex;
      height: 88px;

      .tab-item {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        font-size: 32px;
        color: #333333;
        position: relative;

        &.on:after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 36px;
          height: 4px;
          background-color: #50a8ec;
        }
      }
    }

    .news-list {
      margin: 40px 30px;

      ul {
        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;

          .img {
            flex-shrink: 0;
            width: 270px;
            height: 180px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: 24px;
          }

          .new-cont {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-flow: column;
            justify-content: space-between;

            h3 {
              font-size: 28px;
              font-weight: normal;
              color: #333333;
            }

            p {
              font-size: 26px;
              color: #666666;
              margin-bottom: 20px;
              text-align: justify;
            }

            span {
              font-size: 24px;
              color: #999999;
            }
          }
        }
      }

      .pagination {
        margin-top: 80px;

        /deep/ ul {
          margin: 0;
          justify-content: center;
          flex-wrap: unset;

          li {
            min-width: 55px;
            width: 55px;
            height: 55px;
            flex-shrink: 0;
            font-size: 22px;
            color: #666666;
            margin-left: 15px;
            border-radius: 4px;
            border: solid 1px #999999;
            flex: none;
            padding: 0;

            &:first-child {
              margin-left: 0;
            }

            &:after {
              content: unset;
            }

            &.van-pagination__item--active {
              color: #fff;
              border: none;
            }
          }
        }
      }
    }
  }
</style>
