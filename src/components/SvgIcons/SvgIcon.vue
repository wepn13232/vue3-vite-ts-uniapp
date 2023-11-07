<template>
	<!--SVG组件-->
	<svg aria-hidden="true" :style="{width:`${props.width}rpx`,height:`${props.height}rpx`}">
		<use :xlink:href="symbolId"/>
	</svg>
</template>

<script setup lang="ts">
import {computed} from "@vue/runtime-core";

interface SvgProps {
	name: string, //svg名称
	width: number, //svg的width长度，默认单位rpx
	height: number, //svg的height长度，默认单位rpx
}

const props = defineProps<SvgProps>();

const symbolId = computed(() => `#icon-${props.name}`);
</script>

<style scoped>

</style>
