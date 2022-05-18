export const handleChangeInToStore = (dragEvent, rowNumber, updateCard, deleteCard) => {
	if (dragEvent.moved) {
		dragEvent.moved.element['seq_num'] = dragEvent.moved.newIndex;
		updateCard(dragEvent.moved.element);
		return void 0;
	} else if (dragEvent.added) {
		dragEvent.added.element['seq_num'] = dragEvent.added.newIndex;
		dragEvent.added.element['row'] = rowNumber;
		updateCard(dragEvent.added.element);
		return void 0;
	}
}