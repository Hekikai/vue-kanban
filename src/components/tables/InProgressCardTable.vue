<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="getMyCards.length"
				header-text="IN PROGRESS"
				background-color="#3f92b9"
		/>
		<main>
			<v-card-info
					@handleChange="handleChangeInToStore($event, '1', updateCard, deleteCard)"
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
import { handleChangeInToStore } from "../../utils/handleChangeInToStore";

const useInProgressStore = createTableStore('inProgressStore', 1);
const store = useInProgressStore();
const {loadCards, addCard, deleteCard, getMyCards, updateCard} = store;

onMounted(() => loadCards());
</script>

<style module lang="scss">
@import '../../style/variables';
@import '../../style/mixins';

@include table-settings;
</style>