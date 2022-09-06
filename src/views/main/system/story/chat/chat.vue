<template>
  <div class="chat">
    <h3 class="chatTitle">🐮斯人若彩虹,遇上方知有🐠</h3>
    <xy-editor v-model:value="htmlString" class="xyEditor" />
    <div class="footer">
      <el-input v-model="title" placeholder="请输入故事的标题" />
      <el-button type="primary" @click="handleUpStory">随便写写</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import router from '@/router'
import XyEditor from '@/base-ui/editor'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'chat',
  components: {
    XyEditor
  },
  setup() {
    const store = useStore()
    // 标题和内容
    const title = ref<string>()
    const htmlString = ref<string>()
    // 发送故事
    function handleUpStory() {
      store.dispatch('system/createPageDataAction', {
        pageName: 'story',
        newData: {
          title: title.value,
          content: htmlString.value
        }
      })
      if (title.value) {
        router.push('/main/story/list')
      } else {
        alert('请输入标题😁')
      }
    }
    return {
      htmlString,
      handleUpStory,
      title
    }
  }
})
</script>

<style scoped lang="less">
.xyEditor {
  margin-top: 22px;
  margin-bottom: 12px;
}
.chatTitle {
  width: 100%;
  text-align: center;
  padding-top: 15px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
}
.el-input {
  width: 240px;
  margin-right: 16px;
}
</style>
