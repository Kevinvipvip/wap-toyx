<template>
  <div class="server page">
    <Header title="服务全球"></Header>
    <div class="banner">朝气蓬勃的员工队伍 精准实现客户需求</div>
    <!--国内市场和国外市场-->
    <div class="tab">
      <p :class="internal === 1?'on':''" @click="tab(1)">国内产品</p>
      <p :class="internal === 2?'on':''" @click="tab(2)">国外产品</p>
    </div>
    <!--分类-->
    <div class="cate-box">
      <div class="cate-item" :class="cate_id === 0?'on':''" @click="change_cate()">全部</div>
      <div class="cate-item" v-for="(item,index) in cate_list" :key="index" @click="change_cate(item.id)"
           :class="cate_id === item.id?'on':''">
        {{item.cate_name}}
      </div>
    </div>

    <!--产品列表-->
    <div class="product">
      <ul v-if="product_list.length">
        <router-link tag="li" :to="{path:'productdetail',query:{id:item.id}}" v-for="(item,index) in product_list"
                     :key="index">
          <div class="img-box" :style="'background-image: url('+item.pic+')'"></div>
          <h3 class="two-line-ellipsis">{{item.name}}</h3>
        </router-link>
      </ul>
      <div class="nodata" v-else>{{nodata}}</div>
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

<script>
  export default {
    data() {
      return {
        internal: 1,//1是国内产品；2是国外产品
        cate_id: 0,//分类的id，也是分类的活动项
        page: 1,
        perpage: 6,//每一页的请求条数
        total: 0,//所以产品总数

        cate_list: [],//分类列表
        product_list: [],//产品列表

        nodata: ''
      };
    },
    mounted() {
      this.internal = parseInt(this.$route.query.on) || 1;
      this.internal_operate(this.internal);
    },
    methods: {
      // 点击国内国外产品时操作
      tab(index) {
        this.$router.push({
          path: '/center',
          query: {
            on: index
          }
        });
        // this.internal = index;
        // this.internal_operate(index);
      },

      // 点击分类时操作
      change_cate(id) {
        this.cate_id = id || 0;
        this.getProductList();
      },

      // 分页页码改变时
      page_change(page) {
        console.log(page)
        this.page = page;
        this.getProductList();
      },


      // 选择国内产品或者国外产品时的操作
      internal_operate(internal) {
        switch (internal) {
          case 1:
            this.page = 1;
            this.getCateList(() => {
              this.getProductList();
            });
            break;
          case 2:
            this.cate_list = [];
            this.getProductList();
            break;
        }
      },
      // 获取分类列表
      getCateList(complete) {
        this.utils.ajax(this, 'zh.index/cateList').then(res => {
          this.cate_list = res;
          if (this.config.cate.cate_flag) {
            this.cate_id = parseInt(this.config.cate.cate_id);
            this.config.cate.cate_flag = false;
          } else {
            this.cate_id = 0;
          }
          if (complete) {
            complete();
          }
        })
      },
      // 获取产品列表
      getProductList() {
        let post = {
          page: this.page,
          perpage: this.perpage,
          cate_id: this.cate_id,
          internal: this.internal
        };
        this.utils.ajax(this, 'zh.index/productList', post).then(res => {
          // console.log(res);
          if (!res.list.length) {
            this.nodata = '暂无数据'
          }
          this.utils.aliyun_format(res.list, 'pic');
          this.product_list = res.list;
          this.total = res.count;
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  .server {
    /*国内和国外切换的样式*/
    .tab {
      display: flex;
      height: 88px;

      p {
        font-size: 32px;
        color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        position: relative;

        &.on:after {
          content: '';
          position: absolute;
          background-color: $blue-color;
          height: 4px;
          width: 36px;
          bottom: 0;
        }
      }
    }

    /*分类的样式*/
    .cate-box {
      display: flex;
      flex-wrap: wrap;
      background: #fafafa;
      padding-top: 30px;
      padding-left: 30px;
      box-sizing: border-box;

      .cate-item {
        font-size: 26px;
        color: #ffffff;
        padding: 10px 35px;
        background-color: $blue-color-one;
        margin-bottom: 30px;
        margin-right: 30px;
        border-radius: 23px;
        box-sizing: border-box;

        &.on {
          background-color: $blue-color-two;
        }
      }
    }

    /*产品列表样式*/
    .product {
      margin-bottom: 80px;

      ul {
        margin: 60px 30px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        li {
          width: calc(50% - 15px);
          margin-top: 40px;

          &:nth-child(-n+2) {
            margin-top: 0;
          }

          .img-box {
            width: 100%;
            padding-bottom: 100%;
            height: 0;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border: solid 1px #ededed;
            border-radius: 10px;
          }

          h3 {
            margin-top: 24px;
            text-align: justify;
            font-weight: normal;
            font-size: 28px;
            color: #666;
          }
        }
      }

      .pagination {
        margin: 20px 30px;

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
