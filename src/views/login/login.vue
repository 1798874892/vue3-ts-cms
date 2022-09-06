<template>
  <div class="login">
    <login-pannel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPannel from './cpns/login-pannel.vue'

export default defineComponent({
  components: {
    LoginPannel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login.jpg') no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
