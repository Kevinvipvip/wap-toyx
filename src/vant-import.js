/**
 * 文件中为引入的所有vant组件
 *
 * 因为是按需引入的，所以并非vant的全部组件
 */
import Vue from 'vue'

import {
  Toast,
  Popup,
  Pagination
} from 'vant'

Vue.use(Toast)
  .use(Popup)
  .use(Pagination);
