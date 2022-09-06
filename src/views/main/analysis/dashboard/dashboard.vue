<template>
  <div class="dashboard">
    <!-- top totol -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="7">
        <xy-card title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount" />
        </xy-card>
      </el-col>
      <el-col :span="10">
        <xy-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale" />
        </xy-card>
      </el-col>
      <el-col :span="7">
        <xy-card title="分类商品数量(玫瑰图)">
          <rose-echart :rosePieData="categoryGoodsCount" />
        </xy-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <xy-card title="分类商品销量">
          <line-echart v-bind="categoryGoodsSale" />
        </xy-card>
      </el-col>
      <el-col :span="12">
        <xy-card title="分类商品收藏量">
          <bar-echart v-bind="categoryGoodsFavor" />
        </xy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import XyCard from '@/base-ui/card'
import StatisticalPanel from '@/components/statistical-panel'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    XyCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
    StatisticalPanel
  },
  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取顶部topPanelData
    const topPanelData = computed(() => store.state.dashboard.topPanelDatas)

    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return {
        xLabels,
        values
      }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }

      return {
        xLabels,
        values
      }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      topPanelData
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
