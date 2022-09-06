<template>
  <div class="overview">
    <xy-card title="关于" class="el-card">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Webpack、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </xy-card>

    <xy-card title="技术栈" class="el-card">
      <xy-text-link :text-arrs="technologyStacks" />
      <xy-descriptions
        title="生产环境依赖"
        :column="2"
        :table-datas="dependencies"
      />
      <xy-descriptions
        title="开发环境依赖"
        :column="2"
        :table-datas="devDependencies"
      />
    </xy-card>

    <xy-card title="项目结构" class="el-card">
      <div class="c-left">
        <xy-code language="bash" :code="projectDir" />
      </div>
    </xy-card>

    <xy-descriptions
      title="文件命名规范"
      :column="1"
      :table-datas="[
        { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
        {
          name: '文件(.ts .vue .json .d.ts)',
          description: '统一小写, 多个单词使用-分割'
        }
      ]"
    />

    <xy-card title="Git提交规范" class="el-card">
      <xy-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'yarn commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"
      />
    </xy-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XyDescriptions from '@/base-ui/descriptions'
import XyTextLink from '@/base-ui/text-link/src/textlink.vue'
import XyCard from '@/base-ui/card'
import XyCode from '@/base-ui/code'
import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from './config'
export default defineComponent({
  name: 'overview',
  components: {
    XyCard,
    XyDescriptions,
    XyTextLink,
    XyCode
  },
  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies,
      projectDir
    }
  }
})
</script>

<style scoped lang="less">
.el-card {
  margin-bottom: 20px;
}
.c-left {
  text-align: left;
}
</style>
