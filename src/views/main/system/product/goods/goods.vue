<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="goods"
    >
      <!-- 定制商品图片列 -->
      <template #image="scope">
        <el-image
          style="width: 60px; height: 70px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
          preview-teleported
        >
        </el-image>
      </template>
      <!-- 定制原价和现价前的人民币符号 -->
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ '¥' + scope.row.newPrice }}</template>
      <!-- 定制状态列 -->
      <template #state="scope">
        <el-button
          plain
          :type="scope.row.status ? 'success' : 'danger'"
          size="small"
          >{{ scope.row.status ? '售卖中' : '下架中' }}</el-button
        >
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'goods',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      pageContentRef,
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.page-content {
  padding-top: 12px;
}
</style>
