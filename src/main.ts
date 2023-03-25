import { createApp } from 'vue'
import App from './App.vue'

//样式初始化
import 'reset.less'
import '@/assets/css/index.less'
//路由
import router from './router'
//全局状态
import registerStore from './store'
// icon
import elicon from './global/icon'
import useLoginStore from './store/login/login'

import * as echarts from 'echarts'

const app = createApp(App)
app.use(elicon)
app.use(registerStore)
const loginStore = useLoginStore()
loginStore.localLoaclCacheAction()
app.use(router)

app.config.globalProperties.$echarts = echarts

app.mount('#app')
