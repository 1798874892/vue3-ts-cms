<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { IBreadcrumb } from '../types'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {
      ArrowRight
    }
  }
})
</script>

<style scoped></style>
