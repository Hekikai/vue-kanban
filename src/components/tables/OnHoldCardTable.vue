<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="2"
				header-text="On hold"
				background-color="orange"
		/>
		<main :class="$style.main">
			<v-card-info/>
		</main>
		<v-card-footer/>
	</div>
</template>

<script setup>
import VCardHeader from '../VCardHeader.vue';
import VCardFooter from '../VCardFooter.vue';
import VCardInfo from '../VCardInfo.vue';

</script>

<style module lang="scss">
@import '../../style/variables';

.table {
	width: $table-size;
	background-color: $card-bg-color;
}

.main {
	margin: 10px;
}

</style>