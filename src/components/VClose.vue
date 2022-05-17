<template>
	<button @click="onClickFunction" class="button-close">
		<img :src="Cross" alt="Cross image" class="button-close-img">
	</button>
</template>

<script setup>
import Cross from '@/assets/close.png';

const props = defineProps({
	onClickFunction: {
		type: Function
	}
})
</script>

<style scoped>

.button-close {
	border: none;
	background-color: transparent;
	cursor: pointer;
	margin-left: 10px;
	vertical-align: center;
}

</style>