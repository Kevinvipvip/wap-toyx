<template>
  <div class="contact page">
    <Header title="联系我们"></Header>
    <div class="banner">让信息互通 人际更简单 合作更便捷 联系零距离</div>

    <div class="title">
      <h3>联系方式</h3>
    </div>

    <ul class="address">
      <li>
        <div class="icon"><img src="../assets/icon-address1.png" alt=""></div>
        <p>地址：{{us.address}}</p>
      </li>
      <li>
        <div class="icon"><img src="../assets/icon-tel1.png" alt=""></div>
        <p>联系电话：{{us.tel}}</p>
      </li>
      <li>
        <div class="icon"><img src="../assets/icon-cz1.png" alt=""></div>
        <p>传真：{{us.fax}}</p>
      </li>
      <li>
        <div class="icon"><img src="../assets/icon-email1.png" alt=""></div>
        <p>邮箱：{{us.email}}</p>
      </li>
    </ul>
    <div class="title">
      <h3>人才招聘</h3>
    </div>

    <div class="recruit">
      <ul>
        <li v-for="(item,index) in recruit" :key="index">
          <h3 @click="look_recruit(item.id)">
            <span>{{item.position}}</span>
            <span>{{item.num}}人</span>
            <i><img :src="hover_on === item.id?icon[0]:icon[1]" alt=""></i>
          </h3>
          <div class="recruit-detail" :style="hover_on === item.id?'height:auto':'height:0'">
            <p><span>职位名称</span><span>{{item.position}}</span></p>
            <p><span>招聘人数</span><span>{{item.num}}</span></p>
            <p><span>工作地点</span><span>{{item.workplace}}</span></p>
            <p><span>发布时间</span><span>{{item.create_time}}</span></p>
            <p>岗位要求</p>
            <p class="demand">{{item.demand}}</p>

            <div class="btn-apply">
              <a target="_blank" :href="'http://wpa.qq.com/msgrd?v=3&uin='+us.qq+'&site=qq&menu=yes'">申请岗位</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import up from '../assets/icon-up.png'
  import down from '../assets/icon-down.png'

  export default {
    data() {
      return { icon: [up, down], us: {}, recruit: [], hover_on: 1 };
    },
    mounted() {
      this.getAboutUs();
      this.getRecruitList();
    },
    methods: {
      // 点击显示招聘职位详情
      look_recruit(id) {
        this.hover_on = id;
      },

      getAboutUs() {
        this.utils.ajax(this, 'zh.index/aboutUs').then(res => {
          this.us = res;
        })
      },
      // 人才招聘列表
      getRecruitList() {
        this.utils.ajax(this, 'zh.index/zhaopinList').then(res => {
          this.hover_on = res[0].id;
          console.log(res);
          for (let i = 0; i < res.length; i++) {
            res[i].create_time = this.utils.date_format(res[i].create_time, 'yyyy-MM-dd')
          }
          this.recruit = res;
        })
      },
    }
  };
</script>

<style lang="scss" scoped>
  .contact {
    .title {
      padding: 0 30px;
      height: 88px;
      display: flex;
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
    }

    .address {
      margin: 122px 0 080px;
      display: flex;
      flex-flow: column;
      align-items: center;

      li {
        width: 66%;
        height: 228px;
        border-radius: 6px;
        border: solid 3px #eeeeee;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;

        &:first-child {
          margin-top: 0;
        }

        .icon {
          position: absolute;
          width: 113px;
          height: 113px;
          top: -25%;
        }

        p {
          font-size: 26px;
          color: #666666;
        }
      }
    }

    /*人才招聘*/
    .recruit {
      margin: 35px 30px 100px;

      ul {
        li {
          h3 {
            padding: 0 10px;
            border-bottom: solid 2px #eeeeee;
            font-weight: normal;
            font-size: 26px;
            color: #666666;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
            box-sizing: border-box;

            i {
              display: block;
              width: 24px;
              height: 12px;
            }
          }

          .recruit-detail {
            overflow: hidden;
            height: 0;

            p {
              font-size: 26px;
              color: #666666;
              display: flex;
              margin-top: 30px;

              span {
                display: block;
                flex-shrink: 0;

                &:last-child {
                  flex: 1;
                  margin-left: 40px;
                }
              }

              &.demand {
                margin-left: 40px;
                white-space: pre-line;
                text-align: justify;
                line-height: 45px;
              }
            }

            .btn-apply {
              width: 200px;
              height: 60px;
              background-color: #50a8ec;
              border-radius: 10px;
              margin: 80px auto;

              a {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 26px;
                color: #ffffff;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>
