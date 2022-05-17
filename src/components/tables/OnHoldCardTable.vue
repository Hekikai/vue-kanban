<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="cards.length"
				header-text="On hold"
				background-color="orange"
		/>
		<main :class="$style.main">
			<v-card-info :cards="cards"/>
		</main>
		<v-card-footer :addCard="addOnHoldCard"/>
	</div>
</template>

<script setup>
import VCardHeader from '../VCardHeader.vue';
import VCardFooter from '../VCardFooter.vue';
import VCardInfo from '../VCardInfo.vue';
import { useOnHoldStore } from "../../stores/onHoldCards";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const store = useOnHoldStore();
const {cards} = storeToRefs(store);
const {addOnHoldCard} = store;

onMounted(() => store.loadCards())

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