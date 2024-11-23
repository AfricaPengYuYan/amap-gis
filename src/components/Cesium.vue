<script setup>
import * as Cesium from 'cesium';
import { onMounted } from 'vue';

onMounted(() => {
  const viewer = new Cesium.Viewer('cesiumContainer',{
     // 搜索按钮
     geocoder: false,
    // 地图风格切换按钮
    baseLayerPicker: false,
    // 恢复默认视角按钮
    homeButton: false,
    // 2D/2.5D/3D切换按钮
    sceneModePicker: false,
    // 操作指引按钮
    navigationHelpButton: false,
    // 动画播放控件
    animation: false,
    // 时间轴控件
    timeline: false,
    // 全屏按钮
    fullscreenButton: false,
  });

  // 隐藏Cesium的logo
  viewer._cesiumWidget._creditContainer.style.display = "none";
})
</script>

<template>
<div id="cesiumContainer"></div>
</template>

<style scoped>

</style>
