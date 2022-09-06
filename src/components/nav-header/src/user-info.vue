<template>
  <div class="userInfo">
    <el-icon class="infoBtn"><ChatDotRound /></el-icon>
    <el-icon class="infoBtn"><CollectionTag /></el-icon>
    <el-icon class="infoBtn rightBtn"><Bell /></el-icon>
    <div class="dot"></div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          src="https://wx2.sinaimg.cn/mw690/006D0G8dgy1h5n0qocoo9j312c0zkn4c.jpg"
          class="el-avatar--right"
          size="small"
        >
        </el-avatar>
        {{ name }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="CircleClose" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item divided icon="Stamp">用户信息</el-dropdown-item>
          <el-dropdown-item divided icon="SetUp" @click="handleSetup"
            >系统管理</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import localCache from '@/utils/cache'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.name)

    // 退出登录
    const handleExitClick = () => {
      // 其他会再次获取的
      localCache.deleteCache('token')
      // 有导航守卫验证token和跳转到登录页的
      router.push('/main')
    }

    const handleSetup = () => {
      router.push('/main/system/user')
    }

    return {
      name,
      handleExitClick,
      handleSetup
    }
  }
})
</script>

<style scoped lang="less">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  cursor: pointer;
}

.infoBtn {
  // display: flex;
  // flex-direction: row;
  margin-left: 6px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.infoBtn :hover {
  color: rgb(244, 67, 188);
}

.el-avatar--right {
  margin-right: 6px;
}

.rightBtn {
  margin-right: 12px;
}

.dot {
  // float: right;
  // width: 4px;
  // height: 4px;
  // border-radius: 2px;
  // background-color: rgb(236, 25, 25);
  // position: relative;
  // right: 90px;
  position: absolute;
  top: 12px;
  right: 130px;
  z-index: 10;
  width: 6px;
  height: 6px;
  background: red;
  border-radius: 100%;
}
</style>
