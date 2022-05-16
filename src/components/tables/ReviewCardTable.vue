<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="2"
				header-text="Needs Review"
				background-color="yellow"
		/>
		<main :class="$style.main">

			<v-card-footer/>
		</main>
	</div>
</template>

<script setup>
import VCardHeader from '../VCardHeader.vue';
import VCardFooter from '../VCardFooter.vue';

</script>

<style module lang="scss">
@import '../../style/variables';

.table {
	width: $table-size;
	background-color: $card-bg-color;
}

.content {
	padding: 20px;
}

</style>