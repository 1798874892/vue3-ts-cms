<template>
  <div class="list">
    <page-content :contentTableConfig="contentTableConfig" pageName="story">
      <template #handler>
        <div>123</div>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  setup() {
    return {
      contentTableConfig
    }
  },
  components: { PageContent }
})
</script>

<style scoped></style>
