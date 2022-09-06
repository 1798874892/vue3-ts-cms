<template>
  <div class="nav-header">
    <el-icon class="icon-fold" @click="handleFoldClick">
      <component :is="isFold ? 'Expand' : 'Fold'" />
    </el-icon>
    <div class="content">
      <xy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import XyBreadcrumb from '../../../base-ui/breadcrumb'

import { useStore } from '../../../store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '../../../utils/map-menus'

export default defineComponent({
  components: {
    UserInfo,
    XyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑数据： [{name: , path:}]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .icon-fold {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
