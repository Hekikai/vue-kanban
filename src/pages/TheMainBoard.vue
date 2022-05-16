<template>
	<main class="container">
		<on-hold-card-table class="hold"/>
		<in-progress-card-table class="progress"/>
		<review-card-table class="review"/>
		<approved-card-table class="approved"/>
	</main>
</template>

<script setup>
import OnHoldCardTable from '@/components/tables/OnHoldCardTable.vue';
import InProgressCardTable from '@/components/tables/InProgressCardTable.vue';
import ReviewCardTable from '@/components/tables/ReviewCardTable.vue';
import ApprovedCardTable from '@/components/tables/ApprovedCardTable.vue';

</script>

<style scoped lang="scss">
@import '../style/variables';

.container {
	display: grid;
	grid-template-areas:
		"hold progress review approved";
	grid-template-columns: repeat(3, minmax(min-content, 1fr)) auto;
	grid-template-rows: minmax(auto, max-content);
	height: 100%;
	padding: 50px;
	background-color: $main-bg-color;

	@media (max-width: 1180px) {
		grid-template-areas:
			"hold progress review"
			"approved . .";
		grid-gap: 30px;
	}

	@media (max-width: 976px) {
		grid-template-columns: 1fr auto;
		grid-template-areas:
			"hold progress"
			"review approved";
	}

	.hold {
		grid-area: hold;
	}

	.progress {
		grid-area: progress;
		align-self: start;

	}

	.review {
		grid-area: review;
		align-self: start;

	}

	.approved {
		grid-area: approved;
		align-self: start;

	}
}

</style>