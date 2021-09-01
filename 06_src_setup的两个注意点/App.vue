<template>
  <Demo @hello="showHelloMsg" msg="你好" school="尚硅谷">
    <template v-slot:qwe></template>
    <span>尚硅谷</span>
  </Demo>>
</template>

<script>
import Demo from "./components/Demo";

export default {
  name: 'App',
  components: {Demo},

  // 方法
  setup(){
    function showHelloMsg(value){
      alert(`你好啊，你触发了一个hello事件，我收到的参数是${value}`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>

