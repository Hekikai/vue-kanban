<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="getMyCards.length"
				header-text="APPROVED"
				background-color="#50b467"
		/>
		<main>
			<v-card-info
					@handleChange="handleChangeInToStore($event, '3', updateCard, deleteCard)"
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
import { handleChangeInToStore } from "../../utils/handleChangeInToStore";

const useApprovedStore = createTableStore('approvedStore', 3);
const store = useApprovedStore();
const {loadCards, addCard, deleteCard, updateCard, getMyCards} = store;

onMounted(() => loadCards());
</script>

<style module lang="scss">
@import '../../style/variables';
@import '../../style/mixins';

@include table-settings;
</style>