<template>
  <h1>我是app组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪资：{{job.salary}}</h3>
  <button @click="chengeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('清清')
    let age = ref(19)
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })

    // 方法
    function chengeInfo() {
      // name.value = '大清清'
      // age.value = 18
      job.value.type = 'UI设计师'
      job.value.salary = '20k'
    }

    // 返回一个对象 （常用）
    return {
      name,
      age,
      chengeInfo,
      job

    }

    // 返回一个渲染函数
    // return () => h('h1', '尚硅谷')
  }
}
</script>

