// 引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app(类似于vue2中的vm,但比vm“轻”)
createApp(App).mount('#app')

