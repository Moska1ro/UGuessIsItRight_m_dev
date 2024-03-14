<template>
    <div id="canvas" ref="canvas"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from "echarts";

const canvas = ref(); // dom实例
let myChart = null;

onMounted(() => {
    renderChart();
})

const renderChart = () => {
    myChart = echarts.init(canvas.value);
    // 
    myChart.setOption({
        title: {
            text: 'Echarts Demo'
        },
        tooltip: {},
        legend: {
            data: ['class']
        },
        xAxis: {
            data: ['1', '2', '3', '4', '5', '6']
        },
        yAxis: {},
        series: [
            {
                name: 'class',
                type: 'bar',
                data: [50, 100, 150, 200, 250, 300]
            }
        ]
    });
}
</script>

<style scoped>
#canvas {
    width: 100%;
    height: 100%;
}
</style>