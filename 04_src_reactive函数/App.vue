<template>
  <h1>我是app组件</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪资：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试数据：{{ person.job.a.b.c }}</h3>
  <button @click="chengeInfo">修改人的信息</button>
</template>

<script>
import { reactive} from 'vue'

export default {
  name: 'App',
  setup() {
    // 数据
    let person = reactive({
      name: '清清',
      age: 19,
      job : {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby:['抽烟','喝酒','烫头']
    })

    // 方法
    function chengeInfo() {
      person.name = '大清清'
      person.age = 18
      person.job.type = 'UI设计师'
      person.job.salary = '20k'
      person.job.a.b.c = 99999
      person.hobby[0] = '学习'
    }

    // 返回一个对象 （常用）
    return {
      person,
      chengeInfo,


    }

    // 返回一个渲染函数
    // return () => h('h1', '尚硅谷')
  }
}
</script>

