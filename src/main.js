import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button,
  Comment,
  List,
  Input,
  Avatar,
  Tooltip,
  message
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'common/stylus/index.styl'
import 'common/fonts/iconfont.css'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Comment)
Vue.use(List)
Vue.use(Input)
Vue.use(Avatar);
Vue.use(Tooltip);
Vue.prototype.$message = message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
