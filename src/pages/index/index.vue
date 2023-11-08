<template>
	<view>
		首页
	</view>
</template>

<script setup lang="ts">
import {getAllWallet} from "@/api/modules";
import {onLoad} from "@dcloudio/uni-app";

const _getAllWallet = () => {
	getAllWallet({}).then((res: any) => {
		console.log(res);
	}).catch(err => {
		console.log('错误func--->', err);
	});
};


onLoad(() => {
	_getAllWallet();
});
</script>

<style scoped>

</style>
