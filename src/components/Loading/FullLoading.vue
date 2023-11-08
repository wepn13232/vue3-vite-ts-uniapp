<template>
	<!--全局loading组件-->
	<view class="full-loading">
		<tn-popup v-model="showPopup">
			<view class="popup-content">
				<tn-loading show animation type="info" size="30px"></tn-loading>
			</view>
		</tn-popup>
	</view>
</template>

<script setup lang="ts">
import {ref} from "vue";


let showPopup = ref(true);
const showGlobalLoading = () => {
	showPopup.value = true;
};
const closeGlobalLoading = () => {
	showPopup.value = false;
};


</script>

<style lang="scss">
.full-loading {
	.popup-content {
		width: 250rpx;
		height: 250rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
