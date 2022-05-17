<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="getMyCards.length"
				header-text="Needs Review"
				background-color="yellow"
		/>
		<main>
			<v-card-info
					@handleChange="handleChangeInToStore($event, '2', updateCard, deleteCard)"
					:cards="getMyCards"
					:deleteFunction="deleteCard"
					name="'review'"
			/>
		</main>
		<v-card-footer :row="2" :addCard="addCard"/>
	</div>
</template>

<script setup>
import VCardHeader from '../VCardHeader.vue';
import VCardFooter from '../VCardFooter.vue';
import VCardInfo from '../VCardInfo.vue';
import { createTableStore } from "../../stores/createTableStore";
import { onMounted } from "vue";
import { handleChangeInToStore } from "../../utils/handleChangeInToStore";

const useOnReviewStore = createTableStore('onReviewStore', 2);
const store = useOnReviewStore();
const {loadCards, addCard, deleteCard, updateCard, getMyCards} = store;

onMounted(() => loadCards());
</script>

<style module lang="scss">
@import '../../style/variables';

.table {
	width: $table-size;
	background-color: $card-bg-color;
}

</style>