<template>
  <div class="page-search">
    <xy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer class="footer">
        <div class="handle-btns">
          <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="Search" @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </xy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import XyForm from '@/base-ui/form/src/form.vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    XyForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1、优化一： formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOrignData: any = {}
    for (const item of formItems) {
      formOrignData[item.field] = ''
    }

    const formData = ref(formOrignData)

    // 2、优化二：当用户点击重置
    const handleResetClick = () => {
      for (const key in formOrignData) {
        formData.value[key] = formOrignData[key]
      }
      emit('resetBtnClick')
    }

    // 优化三：当用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.header {
  color: #2980b9;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
