export const handleChangeInToStore = (dragEvent, rowNumber, updateCard, deleteCard) => {
	if (dragEvent.moved) {
		dragEvent.moved.element['seq_num'] = dragEvent.moved.newIndex;
		updateCard(dragEvent.moved.element);
		return
	} else if (dragEvent.added) {
		dragEvent.added.element['seq_num'] = dragEvent.added.newIndex;
		dragEvent.added.element['row'] = rowNumber;
		updateCard(dragEvent.added.element);
		return
	} else if (dragEvent.removed) {
		deleteCard(dragEvent.removed.element.id, dragEvent.removed.oldIndex);
		return
	}
}