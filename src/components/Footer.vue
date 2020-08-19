<template>
  <div class="footer">
    <div class="nav">
      <router-link to="/about" class="router">关于我们</router-link>
      <router-link to="/server" class="router">服务全球</router-link>
      <router-link to="/news" class="router">新闻资讯</router-link>
    </div>
    <div class="contact-info">
      <div class="info">
        <p><i class="i-address"></i><span>地 址：{{footer.address}}</span></p>
        <p><i class="i-email"></i><span>邮 箱：{{footer.email}}</span></p>
        <p><i class="i_tel"></i><span>联系电话：{{footer.tel}}</span></p>
        <p><i class="i-chuan"></i><span>传 真：{{footer.fax}}</span></p>
      </div>
      <div class="logo"><img src="../assets/logo.png" alt="logo"></div>
    </div>
    <div class="copyright">
      <p>
        <span>备案许可证号<a href="http://www.beian.miit.gov.cn/" target="_blank">津ICP备20006105号-1</a></span>
        <!--<span><a href="https://www.wcip.net" target="_blank">山海文化有限公司</a>提供技术支持</span>-->
      </p>
    </div>
    <div class="nav bottom">
      <router-link to="/" class="router">免责声明</router-link>
      <router-link to="/" class="router">版权声明</router-link>
      <!--<router-link to="/" class="router">网站地图</router-link>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        footer: {}
      };
    },
    created() {
      this.utils.ajax(this, 'zh.index/aboutUs').then(res => {
        // console.log(res);
        this.footer = res;
      })
    }
  };
</script>

<style lang="scss" scoped>
  .footer {
    height: 450px;
    background-color: #546c81;
    overflow: hidden;

    /*快捷导航*/
    .nav {
      margin: 50px 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .router {
        display: block;
        padding: 0 17px;
        font-size: 26px;
        color: #ffffff;
        opacity: 0.8;
        position: relative;
        box-sizing: border-box;

        &:after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 22px;
          width: 2px;
          background: #ffffff;
        }

        &:last-child:after {
          display: none;
        }
      }

      &.bottom {
        margin-top: 0;
      }
    }

    /*中间部分内容*/
    .contact-info {
      margin: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .info {
        display: flex;
        flex-flow: column;
        justify-content: space-around;

        p {
          color: #ffffff;
          opacity: 0.6;
          font-size: 24px;
          display: flex;
          align-items: center;
          line-height: 40px;
          /*margin-left: 50px;*/

          i {
            /*background: url("../assets/icons.png") 0 0 no-repeat;*/
            display: block;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            margin-right: 20px;
            width: 18px;
            height: 18px;

            &.i-address {
              background-image: url("../assets/icon-address.png");
              /*background-position: -85px -84px;*/
            }

            &.i-email {
              background-image: url("../assets/icon-email.png");
              /*background-position: -112px -84px;*/
            }

            &.i_tel {
              background-image: url("../assets/icon-tel.png");
              /*background-position: -148px -86px;*/
            }

            &.i-chuan {
              background-image: url("../assets/icon-fax.png");
              /*background-position: -178px -86px;*/
            }
          }
        }
      }

      .logo {
        width: 150px;
        height: 150px;
      }
    }

    /*备案号*/
    .copyright {
      margin: 40px 40px 30px;

      p {
        font-size: 24px;
        text-align: center;

        span, a {
          margin: 10px;
          color: #ffffff;
          opacity: 0.6;
        }
      }
    }
  }
</style>
