<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg+='?'">修改信息</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.ji.salary }}k</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.ji.salary++">涨薪</button>
</template>

<script>
import {ref, watch, reactive} from 'vue'

export default {
  name: 'Demo',
  setup() {
    // ---数据---
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '清清啊',
      age: 19,
      job: {
        ji: {
          salary: 20
        }
      }
    })

    // ---监视---
    // 情况一：监视ref所定义的一个响应式数据
    /*watch(sum, (newValue, oldValue) => {
      console.log('sum变化了', newValue, oldValue);
    },{immediate:true})*/ //开始就调用

    // 情况二：监视ref所定义的个多响应式数据
    /* watch([sum,msg], (newValue, oldValue) => {
       console.log('sum或msg变化了', newValue, oldValue);
     },{immediate:true})*/

    /* 情况三:监视reactive所定义的一个响应式数据,
        1.注意：此处无法正确的获取oldValue
        2.强制开启了深度监视（deep配置无效）*/
    /* watch(person,(newValue,oldValue)=>{
       console.log('person变化了', newValue, oldValue);
     },{deep:false})*/

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    /*watch(()=>person.age,(newValue,oldValue)=>{
      console.log('person的age变化了', newValue, oldValue);
    })*/

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    /*watch([() => person.age, () => person.name], (newValue, oldValue) => {
      console.log('person的age或name变化了', newValue, oldValue);
    })*/

    // 特殊情况
   /* watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了', newValue, oldValue);
    },{deep:true})*/ //此处由于监视的是reactive所定义的对象中的某个属性，所有deep配置有效

    // ---返回一个对象--- （常用）
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

