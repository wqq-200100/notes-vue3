<template>
  <h1>我是app组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>性别：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">点我vue3</button>
  <br>
  <br>
  <button @click="saybendan">点我vue2</button>
  <br>
  <br>
  <button @click="test1">点我vue2测试读取vue3</button>
  <br>
  <br>
  <button @click="test2">点我vue3测试读取vue2</button>
</template>

<script>
// import {h} from 'vue'

export default {
  name: 'App',
  data(){
    return {
      sex:'女'
    }
  },
  methods:{
    saybendan(){
      alert('你是个笨蛋')
    },
    test1(){
      console.log(this.name);
      console.log(this.age);
      console.log(this.sex);
      console.log(this.sayHello);
    }
  },

  setup() {
    // 数据
    let name = '清清'
    let age = 19

    // 方法
    function sayHello() {
      alert(`我叫：${name},年龄：${age}，你好啊！`)
    }

    function  test2(){
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sex);
      console.log(this.saybendan);
    }

    // 返回一个对象 （常用）
    return {
      name,
      age,
      sayHello,
      test2
    }

    // 返回一个渲染函数
    // return () => h('h1', '尚硅谷')
  }
}
</script>

