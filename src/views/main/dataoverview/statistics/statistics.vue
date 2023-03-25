<template>
  <div class="statistics">
    <div ref="chartDom" class="main"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, getCurrentInstance } from 'vue'
import type { EChartsOption } from 'echarts'
import { tasktypeData } from '@/service/modules/data'
const { proxy } = getCurrentInstance() as any
const chartDom = ref()
const chartData = reactive({
  xAxis: [],
  series: []
})

onMounted(async () => {
  const res = await tasktypeData()
  chartData.xAxis = res.result.map((item: any) => item.name)
  chartData.series = res.result.map((item: any) => item.value)
  initChart()
})

const initChart = () => {
  const myChart = proxy.$echarts.init(chartDom.value)
  const option: EChartsOption = {
    title: {
      text: '任务类型数量统计',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: chartData.xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: chartData.series,
        type: 'bar'
      }
    ],
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 50,
        zoomOnMouseWheel: false,
        moveOnMouseWheel: true,
        moveOnMouseMove: true
      }
    ]
  }
  myChart.setOption(option)
}
</script>

<style lang="less" scoped>
.main {
  width: 400px;
  height: 400px;
}
</style>
