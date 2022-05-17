<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="getMyCards.length"
				header-text="Approved"
				background-color="green"
		/>
		<main>
			<v-card-info
					:cards="getMyCards"
					:deleteFunction="deleteCard"
					name="'approved'"
			/>
		</main>
		<v-card-footer :row="3" :addCard="addCard"/>
	</div>
</template>

<script setup>
import VCardHeader from '../VCardHeader.vue';
import VCardFooter from '../VCardFooter.vue';
import VCardInfo from '../VCardInfo.vue';
import { createTableStore } from "../../stores/createTableStore";
import { onMounted } from "vue";

const useApprovedStore = createTableStore('approvedStore', 3);
const store = useApprovedStore();
const {loadCards, addCard, deleteCard, getMyCards} = store;

onMounted(() => loadCards());
</script>

<style module lang="scss">
@import '../../style/variables';

.table {
	width: $table-size;
	background-color: $card-bg-color;
}

</style>