<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="getMyCards.length"
				header-text="In progress"
				background-color="blue"
		/>
		<main>
			<v-card-info
					@handleChange=""
					:cards="getMyCards"
					:deleteFunction="deleteCard"
					name="'inProgress'"
			/>
		</main>
		<v-card-footer :row="1" :addCard="addCard"/>
	</div>
</template>

<script setup>
import VCardHeader from '../VCardHeader.vue';
import VCardFooter from '../VCardFooter.vue';
import VCardInfo from '../VCardInfo.vue';
import { createTableStore } from "../../stores/createTableStore";
import { onMounted } from "vue";

// const handleChangeInToStore = (dragEvent) => {
// 	const {element} = dragEvent.added || dragEvent.removed;
// 	updateCard(element);
// }

const useInProgressStore = createTableStore('inProgressStore', 1);
const store = useInProgressStore();
const {loadCards, addCard, deleteCard, getMyCards, updateCard} = store;

onMounted(() => loadCards());
</script>

<style module lang="scss">
@import '../../style/variables';

.table {
	width: $table-size;
	background-color: $card-bg-color;
}

</style>